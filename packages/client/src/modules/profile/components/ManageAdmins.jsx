import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'react-apollo';
// import Helmet from 'react-helmet';
// import classnames from 'classnames';
import { MdAdd, MdClose } from 'react-icons/md';
// import {  } from '../../common/components/global';
// import settings from '../../../../../../settings';
import '../styles/manage-admins.scss';
import SINGLE_CUSTOMER_QUERY from '../../common/graphql/SFY/sfySingleCustomerQuery.graphql';
import { ADD_ADMIN, USERS_QUERY, DELETE_USER } from '../../common/schema';

const unconfirmedMsg = `We could not find a Shopify account associated with the submitted email.
Please have the proposed admin register a Shopify account with the submitted email, and try again.`;

class ManageAdmins extends React.Component {
  state = {
    newAdminEmail: '',
    error: null,
    success: null
  };
  handleInput = e => this.setState({ [e.target.name]: e.target.value });
  checkEmailExists = email => {
    return this.props.client
      .query({
        query: SINGLE_CUSTOMER_QUERY,
        variables: { query: `email:${email}` }
      })
      .then(res => {
        const { edges } = res.data.admin_customers;
        if (edges.length > 0 && edges[0].node.email) {
          return { status: 'confirmed', message: 'Shopify account confirmed' };
        } else {
          return { status: 'unconfirmed', message: unconfirmedMsg };
        }
      })
      .catch(e => {
        console.log('Error confirming shopify email: ', e);
        return { errors: 'There was a Shopify server error. Please try again later.' };
      });
  };

  addAdmin = async e => {
    e.preventDefault();
    this.setState({ error: null, success: null });
    const { newAdminEmail } = this.state;

    // Check if proposed admin email is registered with Shopify
    const emailCheck = await this.checkEmailExists(newAdminEmail);

    if (!emailCheck) {
      return this.setState({ error: 'There was an error veryfing email.' });
    }

    if ('errors' in emailCheck) {
      return this.setState({ error: emailCheck.errors });
    }

    if ('status' in emailCheck) {
      // If proposed admin has registered with Shopify then add to our db
      if (emailCheck.status === 'confirmed') {
        const addAdminRes = await this.props.addAdmin({ email: newAdminEmail });

        if (!addAdminRes) {
          return this.setState({ error: 'There was an error adding admin.' });
        } else if ('errors' in addAdminRes) {
          return this.setState({ error: addAdminRes.errors[0] });
        } else if ('user' in addAdminRes) {
          const { email } = addAdminRes.user;
          return this.setState({
            success: `Successfully added ${email} as an admin.`,
            newAdminEmail: ''
          });
        } else {
          return this.setState({ error: 'There was an error adding admin.' });
        }

        // Alert user if proposed admin has not registered email with Shopify
      } else if (emailCheck.status === 'unconfirmed') {
        return this.setState({ error: emailCheck.message });
      }
    }
  };

  removeAdmin = async id => {
    this.setState({ error: null, success: null });
    const removeAdminResult = await this.props.deleteUser(id);
    if (removeAdminResult && 'errors' in removeAdminResult) {
      return this.setState({ error: removeAdminResult.errors[0] });
    } else if (removeAdminResult && 'user' in removeAdminResult) {
      return this.setState({ success: 'Successfully deleted admin.' });
    } else {
      return this.setState({ error: 'There was an error deleting admin.' });
    }
  };

  render() {
    const { newAdminEmail, error } = this.state;
    const { users } = this.props;

    return (
      <section className="manage-admins">
        {/* New Admin form */}
        <form className="manage-admins__form" onSubmit={this.addAdmin}>
          <label>Email to make an Administrator:</label>
          <input id="new-admin" type="email" name="newAdminEmail" value={newAdminEmail} onChange={this.handleInput} />
          <button type="submit">
            <MdAdd />
            <span>Add</span>
          </button>
        </form>
        {error !== null ? <div className="manage-admins__error">{error.message}</div> : null}
        {/* Display current admins */}
        {users && users.length > 0 ? (
          <ul>
            {users.map(u => (
              <li key={u.id}>
                <span>{u.email}</span>
                <button onClick={() => this.removeAdmin(u.id)}>
                  <span hidden>Remove</span>
                  <MdClose />
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <div>No Administrators exist, please consult M.O.D.</div>
        )}
        {['success', 'error'].map(
          item =>
            this.state[item] ? <div style={{ marginTop: '15px', color: '#fc7b18' }}>{this.state[item]}</div> : null
        )}
      </section>
    );
  }
}

const ManageAdminsWithApollo = compose(
  ADD_ADMIN(),
  DELETE_USER(),
  USERS_QUERY({ role: 'admin' })
)(ManageAdmins);

ManageAdmins.propTypes = {
  admins: PropTypes.array,
  client: PropTypes.object,
  addAdmin: PropTypes.func,
  users: PropTypes.array,
  deleteUser: PropTypes.func
};

export default ManageAdminsWithApollo;
