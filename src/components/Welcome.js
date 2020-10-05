import React, { useContext, Fragment } from 'react';
import { AuthContext } from '../App';
import '../styling/Welcome.scss';

function Auth() {
  let { isLoggedIn, user } = useContext(AuthContext);
  console.log('>>> USER', user);
  return (
    <Fragment>
      <h1>Welcome {isLoggedIn && user ? user.displayName : 'newbie'}! </h1>
      {isLoggedIn && user ? (
        <img className='profile-pic' src={user.photoURL} />
      ) : (
        <img
          className='profile-pic'
          src='https://www.aquariumofpacific.org/images/uploads/penguin-profile.jpg'
        />
      )}
    </Fragment>
  );
}

export default Auth;
