import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
import { AppBar, Toolbar, Typography } from '@material-ui/core/';
// import MenuIcon from '@material-ui/icons/Menu';

import SignOutButton from '../SignOut';
import * as routes from '../../constants/routes';

const Navigation = ({ authUser }) =>
  <AppBar position="static">
    { authUser
        ? <NavigationAuth />
        : <NavigationNonAuth />
    }
  </AppBar>

const NavigationAuth = () =>
  <Toolbar>
    <Link to={routes.LANDING}><Typography> Landing </Typography> </Link>
    <Link to={routes.HOME}>Home</Link>
    <Link to={routes.ACCOUNT}>Account</Link>
    <Link to={routes.OVERVIEW}>Overview</Link>
    <SignOutButton />
  </Toolbar>

const NavigationNonAuth = () =>
  <ul>
    <li><Link to={routes.LANDING}>Landing</Link></li>
    <li><Link to={routes.SIGN_IN}>Sign In</Link></li>
  </ul>

const mapStateToProps = (state) => ({
  authUser: state.sessionState.authUser,
});

export default connect(mapStateToProps)(Navigation);
