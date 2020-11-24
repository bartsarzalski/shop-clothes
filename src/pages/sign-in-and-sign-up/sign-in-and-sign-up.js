import React from 'react';

import SignIn from '../../components/sign-in/sign-in';
import SignUp from '../../components/sing-up/sign-up';

import './sign-in-and-sign-up.scss';

const SignInAndSignUpPage = () => (
    <div className='sign-in-and-sin-up'>
        <SignIn />
        <SignUp />
    </div>
);

export default SignInAndSignUpPage;