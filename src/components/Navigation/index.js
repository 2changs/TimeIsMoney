import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
import { AppBar, Toolbar, Typography } from '@material-ui/core/';
// import MenuIcon from '@material-ui/icons/Menu';
import './index.css'

import SignOutButton from '../SignOut';
import * as routes from '../../constants/routes';

const Navigation = ({ authUser }) =>
  <AppBar className={"nav"} position="static">
    { authUser
        ? <NavigationAuth />
        : <NavigationNonAuth />
    }
  </AppBar>

const NavigationAuth = () =>
  <Toolbar>
    <Link className={"logo"} to={routes.HOME}>vinder</Link>
    <div className={"menu"}>
      <Link to={routes.ACCOUNT}>Account</Link>
      <Link to={routes.OVERVIEW}>Overview</Link>
    </div>
   <SignOutButton />
  </Toolbar>

const NavigationNonAuth = () =>
  <Toolbar>
    <Link to={routes.LANDING}>vinder</Link>
    <button className="sign_in_out"> <Link className="nav_link" to={routes.SIGN_IN}>LOG IN</Link> </button>
  </Toolbar>

const mapStateToProps = (state) => ({
  authUser: state.sessionState.authUser,
});

export default connect(mapStateToProps)(Navigation);
