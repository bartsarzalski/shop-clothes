import React, { Component } from 'react';

import FormInput from '../../components/form-input/form-input';
import CustomButton from '../../components/custom-button/custom-button';

import { auth, createProfileDocument, createUserProfileDocument } from '../../firebase/firebase.utils';

import './sign-up.scss';

class SignUp extends Component {
    constructor(props){
        super(props);

        this.state = {
            displayName: '',
            email: '',
            password:'',
            confirmPassword: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();

        const { displayName, email, password, confirmPassword } = this.state;

        if (password !== confirmPassword) {
            alert("Password don't much");
            return;
        }

        try {
            const { user } = await auth.createUserWithEmailAndPassword(
                email,
                password
            );

            await createUserProfileDocument(user, { displayName });

            this.setState({
                displayName: '',
                email: '',
                password:'',
                confirmPassword: ''
            });

        } catch(err) {
            console.log(err.message);
        }
    };

    handleChange = event => {
        const { name, value } = event.target;

        this.setState({ [name]: value });
    }

    render() {
        const { displayName, email, password, confirmPassword } = this.state;
        return (
            <div className='sign-up'>
                <h2 className='title'>I don't have an account</h2>
                <span>Sign up with your email and password</span>
                <form className='sign-up-form' onSubmit={this.handleSubmit}>
                    <FormInput
                        type='text'
                        name='displayName'
                        value={displayName}
                        onChange={this.handleChange}
                        label='Display Name'
                        required>
                    </FormInput>
                    <FormInput
                        type='email'
                        name='email'
                        value={email}
                        onChange={this.handleChange}
                        label='Email'
                        required>
                    </FormInput>
                    <FormInput
                        type='password'
                        name='password'
                        value={password}
                        onChange={this.handleChange}
                        label='Password'
                        required>
                    </FormInput> 
                    <FormInput
                        type='password'
                        name='confirmPassword'
                        value={confirmPassword}
                        onChange={this.handleChange}
                        label='Confirm Password'
                        required>
                    </FormInput>
                    <CustomButton type='submit'> SIGN UP </CustomButton>
                </form>
            </div>
        )
    }
}

export default SignUp;