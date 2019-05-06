import React from 'react';
import PropTypes from 'prop-types';
// import classnames from 'classnames';
import { Link } from 'react-router-dom';
import SubmissionError from './SubmissionError';
// import settings from '../../../../../../../../settings';
import '../styles/modules/login-form.scss';

class SigninForm extends React.Component {
  state = {
    submissionErrors: [],
    loginEmail: '',
    loginPassword: ''
  };

  handleLoginInput = e => this.setState({ [e.target.name]: e.target.value });

  loginUser = async e => {
    e.preventDefault();
    this.setState({ submissionErrors: [] });

    const { login, authenticateAdmin } = this.props;
    const { loginEmail, loginPassword } = this.state;

    const loginResult = await login({ email: loginEmail, password: loginPassword });
    if ('errors' in loginResult) this.setState({ submissionErrors: loginResult.errors });
    else {
      this.setState({ loginEmail: '', loginPassword: '' });
      await authenticateAdmin(loginResult.email);
    }
  };

  render() {
    const { loginEmail, loginPassword, submissionErrors } = this.state;
    return (
      <form className="form login-form">
        <div className="form__item login-form__item">
          <label htmlFor="loginEmail" className="login-form__label">
            Email
          </label>
          <input
            required
            type="email"
            name="loginEmail"
            id="loginEmail"
            value={loginEmail}
            className="login-form__input"
            placeholder="Email: name@example.com"
            onChange={this.handleLoginInput}
          />
        </div>
        <div className="form__item login-form__item">
          <label htmlFor="loginPassword" className="login-form__label">
            Password
          </label>
          <input
            required
            type="password"
            name="loginPassword"
            id="loginPassword"
            value={loginPassword}
            className="login-form__input"
            placeholder="Password: Abc1234!#"
            onChange={this.handleLoginInput}
          />
        </div>
        <button type="submit" className="button button--primary" onClick={e => this.loginUser(e)}>
          Sign In
        </button>
        <Link to="/signup" className="button button--primary">
          Sign Up
        </Link>
        {submissionErrors.length > 0 ? <SubmissionError errors={submissionErrors} /> : null}
      </form>
    );
  }
}

SigninForm.propTypes = {
  login: PropTypes.func
};

SigninForm.defaultProps = {};

export default SigninForm;
