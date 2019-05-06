import React from 'react';
// import PropTypes from 'prop-types';
// import classnames from 'classnames';
import { Link } from 'react-router-dom';
import SubmissionError from './SubmissionError';
// import settings from '../../../../../../../../settings';
import '../styles/modules/signup-form.scss';
//pick(input, ['id', 'username', 'email', 'password']);
// type="text"
// name="signupFirstName"
// id="signupFirstName"
// value={signupFirstName}
// className="signup-form__input"
// placeholder="John"
// onChange={this.handleLoginInput}
// { name: 'firstName', value={firstNam},  }

class SignupForm extends React.Component {
  state = {
    submissionErrors: [],
    signupEmail: '',
    signupEmailConfirm: '',
    signupFirstName: '',
    signupLastName: '',
    signupPassword: '',
    signupPasswordConfirm: '',
    signupEmailMarketing: true
  };

  handleLoginInput = e => this.setState({ [e.target.name]: e.target.value });
  signupUser = async e => {
    e.preventDefault();
    this.setState({ submissionErrors: [] });

    const { registerRemote } = this.props;
    const {
      signupFirstName,
      signupLastName,
      signupEmail,
      // signupEmailConfirm,
      signupPassword,
      // signupPasswordConfirm,
      signupEmailMarketing
    } = this.state;
    const registrationInfo = {
      firstName: signupFirstName,
      lastName: signupLastName,
      email: signupEmail,
      password: signupPassword,
      acceptsMarketing: signupEmailMarketing
    };

    const remoteReg = await registerRemote(registrationInfo);
    // Determine whether any errors with Shopify registration
    if ('errors' in remoteReg) this.setState({ submissionErrors: remoteReg.errors });

    // NOTE: Have unwired local registration until it serves a purpose
    // If Shopify registration successful, update local records
    // if ('customer' in remoteReg && 'id' in remoteReg.customer) {
    //   const localReg = await registerLocal({
    //     shopify_id: remoteReg.customer.id,
    //     role: 'user'
    //   });
    //   if (localReg && 'errors' in localReg && Array.isArray(localReg.errors)) {
    //     if (localReg.errors.length) console.error(localReg.errors);
    //   }
    // }

    this.setState({
      signupFirstName: '',
      signupLastName: '',
      signupEmail: '',
      signupEmailConfirm: '',
      signupPassword: '',
      signupPasswordConfirm: '',
      signupEmailMarketing: true
    });
  };

  render() {
    const {
      signupFirstName,
      signupLastName,
      signupEmail,
      signupEmailConfirm,
      signupPassword,
      signupPasswordConfirm,
      submissionErrors
    } = this.state;
    return (
      <form className="form signup-form">
        <div className="form__item form__item--half form__item--split-right signup-form__item">
          <label htmlFor="signupFirstName" className="signup-form__label">
            First Name
          </label>
          <input
            type="text"
            name="signupFirstName"
            id="signupFirstName"
            value={signupFirstName}
            className="signup-form__input"
            placeholder="John"
            onChange={this.handleLoginInput}
          />
        </div>
        <div className="form__item form__item--half signup-form__item">
          <label htmlFor="signupLastName" className="signup-form__label">
            Last Name
          </label>
          <input
            required
            type="text"
            name="signupLastName"
            id="signupLastName"
            value={signupLastName}
            className="signup-form__input"
            placeholder="Smith"
            onChange={this.handleLoginInput}
          />
        </div>
        <div className="form__item form__item form__item--half form__item--split-right signup-form__item">
          <label htmlFor="signupEmail" className="signup-form__label">
            Email
          </label>
          <input
            required
            type="email"
            name="signupEmail"
            id="signupEmail"
            value={signupEmail}
            className="signup-form__input"
            placeholder="Email: name@example.com"
            onChange={this.handleLoginInput}
          />
        </div>
        <div className="form__item form__item form__item--half signup-form__item">
          <label htmlFor="signupEmailConfirm" className="signup-form__label">
            Confirm Email
          </label>
          <input
            required
            type="email"
            name="signupEmailConfirm"
            id="signupEmailConfirm"
            value={signupEmailConfirm}
            className="signup-form__input"
            placeholder={signupEmail ? signupEmail : 'Email: name@example.com'}
            onChange={this.handleLoginInput}
          />
        </div>
        <div className="form__item form__item form__item--half form__item--split-right signup-form__item">
          <label htmlFor="signupPassword" className="signup-form__label">
            Password
          </label>
          <input
            required
            type="password"
            name="signupPassword"
            id="signupPassword"
            value={signupPassword}
            className="signup-form__input"
            placeholder="Password: Abc1234!#"
            onChange={this.handleLoginInput}
          />
        </div>
        <div className="form__item form__item form__item--half signup-form__item">
          <label htmlFor="signupPasswordConfirm" className="signup-form__label">
            Password
          </label>
          <input
            required
            type="password"
            name="signupPasswordConfirm"
            id="signupPasswordConfirm"
            value={signupPasswordConfirm}
            className="signup-form__input"
            placeholder=""
            onChange={this.handleLoginInput}
          />
        </div>
        {/* TODO: Add email checkbox when we get designs for checkbox on form from Rick */}
        <button type="submit" className="button button--primary" onClick={e => this.signupUser(e)}>
          Sign Up
        </button>
        <Link to="/signin" className="button button--primary">
          Already have an account?
        </Link>
        {submissionErrors.length > 0 ? <SubmissionError errors={submissionErrors} /> : null}
      </form>
    );
  }
}

SignupForm.propTypes = {};

SignupForm.defaultProps = {};

export default SignupForm;
