import React from 'react';

import SignIn from "../../components/sign-in/sign-in.component";

import './sign-in-and-sign-up.styles.scss';

function SignInAndSignUp(props) {
    return (
        <div className='sign-in-and-sign-up'>
            <SignIn/>
        </div>
    );
}

export default SignInAndSignUp;