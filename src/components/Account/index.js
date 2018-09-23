import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';

import PasswordChangeForm from '../PasswordChange';
import PersonalInfoChangeForm from '../PersonalInfoChangeForm';
import withAuthorization from '../Session/withAuthorization';

const AccountPage = ({ authUser }) =>
  <div className="div_form">
    <h2>Account: {authUser.email}</h2>
    <h2> Personal Information </h2>
    <PersonalInfoChangeForm />
    <br /> <br />
    <PasswordChangeForm />
  </div>

const mapStateToProps = (state) => ({
  authUser: state.sessionState.authUser,
});

const authCondition = (authUser) => !!authUser;

export default compose(
  withAuthorization(authCondition),
  connect(mapStateToProps)
)(AccountPage);