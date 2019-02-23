import React from 'react';
import './Login.css';
import styled from 'styled-components';

//Styled Components
const LoginDiv = styled.div`
    max-width: 642px;
    margin: auto;
    padding: 1%;
    background-color: black;
    border-radius: 12px;
    margin-top: 9vh;
`; 
const LoginForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 5%;
    border-radius: 12px;
    background-color: floralwhite;
    border: 8px solid #00618c;
`;
const LoginInput = styled.input`
    text-align: center;
    border-radius: 4px;
    width: 250px;
    margin: 1% 0;
`;
const LogInButton = styled.button`
    text-align: center;
    border-radius: 4px;
    width: 250px;
    height: px;
    margin-top: 1%;
    background-color: #3764cf;
    color: white;
    font-weight: bolder;
`;

class Login extends React.Component {
    constructor(){
        super();
        this.state = {
            username: '',
            password: ''
        }
    }

    changeUserNameHandler = e => this.setState({ username: e.target.value });

    changePasswordHandler = e => this.setState({ password: e.target.value });

    submitDataHandler = () => {
        const username = this.state.username;
        const password = this.state.password;
        localStorage.setItem('username', username);
        localStorage.setItem('password', password);
        window.location.reload();
    }

    render() {
        return (
            <LoginDiv>
                <LoginForm>
                    <img src="/instaLog.png" alt="Instagram" className='loginLogo' />
                    <LoginInput className='loginInput' type='text' placeholder='Username' onChange={this.changeUserNameHandler} required/>
                    <LoginInput className='loginInput' type='password' placeholder='Password' onChange={this.changePasswordHandler} required/>
                    <LogInButton onClick={this.submitDataHandler}>Log in</LogInButton>
                </LoginForm>
            </LoginDiv>
        )
    }

}

export default Login;