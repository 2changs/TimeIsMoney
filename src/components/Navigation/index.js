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
   <div className={"menu"}>
    </div>
    <Link className={"logo"} to={routes.HOME}>Vinder</Link>
    <Link className={"accountLogo"} to={routes.ACCOUNT}>Account</Link>
    <Link className={"overviewLogo"} to={routes.OVERVIEW}>Overview</Link>

    <SignOutButton />
  </Toolbar>

const NavigationNonAuth = () =>
  <Toolbar>
  <Link className={"landing"} to={routes.LANDING}>Landing</Link>
    <Link className={"signin"} to={routes.SIGN_IN}>Account</Link>
    <SignOutButton />
  </Toolbar>

const mapStateToProps = (state) => ({
  authUser: state.sessionState.authUser,
});

export default connect(mapStateToProps)(Navigation);
