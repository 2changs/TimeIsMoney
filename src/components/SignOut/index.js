import React from 'react';

import { auth } from '../../firebase';

const SignOutButton = () =>
  <button
    className="sign_in_out"
    type="button"
    onClick={auth.doSignOut}
  >
    SIGN OUT
  </button>

export default SignOutButton;
