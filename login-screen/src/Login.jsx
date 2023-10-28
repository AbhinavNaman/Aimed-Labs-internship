import React, { useState } from 'react';
import styled from 'styled-components';
import login from "./login.jpg"


const MainContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin:50px auto;
  padding:50px;


  ${'' /* @media (min-width: 768px) {
    width: 50%;
  }

  @media (min-width: 1024px) {
    width: 30%;
  } */}

  @media (max-width: 800px) {
    display:flex;
  }
`;

const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 800px) {
    display:none;
  }

`;

const Image = styled.img`
  max-width: 100%;
  height: auto;
  margin-right:-100px;
`;

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px;
  margin-left:-50px;
  width: 100%;
  max-width: 500px;
  margin: 0 auto;


  border-radius:20px;
  border-radius: 50px;
background: linear-gradient(145deg, #e6e6e6, #ffffff);
box-shadow:  20px 20px 60px #d9d9d9,
             -20px -20px 60px #ffffff;

             ${'' /* background: rgba( 255, 255, 255, 0.25 );
box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
backdrop-filter: blur( 4px );
-webkit-backdrop-filter: blur( 4px );
border-radius: 10px;
border: 1px solid rgba( 255, 255, 255, 0.18 ); */}


             @media (min-width: 600px) {
    width: 60%;
  }
  @media (min-width: 768px) {
    width: 70%;
  }
  @media (min-width: 900px) {
    width: 80%;
  }

  @media (min-width: 1024px) {
    width: 90%;
  }
  @media (max-width: 600px) {
    width: 90%;
  }
`;

const CheckboxDiv = styled.div`
  width: 100%;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin: 10px 0;
  color: #555;
  text-align: left;
`;

const Checkbox = styled.input`
  margin-right: 5px;
`;

const PasswordContainer = styled.div`
  position: relative;
  width: 100%;
`;

const PasswordInput = styled.input`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
`;

const TogglePasswordVisibility = styled.button`
  position: absolute;
  top: 82%;
  right: 0;
  transform: translateY(-50%);
  background: none;
  border: none;
  cursor: pointer;
  font-size: 18px;
  color: #555;
  padding: 0;
`;

const SubmitButton = styled.button`

  padding: 0.8em 1.8em;
  width:50%;
    border: 2px solid orange;
    position: relative;
    overflow: hidden;
    background-color: transparent;
    text-align: center;
    text-transform: uppercase;
    font-size: 16px;
    transition: .3s;
    z-index: 1;
    font-family: inherit;
    color: orange;

    &::before{
        content: '';
    width: 0;
    height: 500%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(45deg);
    background: green;
    transition: .5s ease;
    display: block;
    z-index: -1;
    }

    &:hover::before {
    width: 105%;
   }
   
   &:hover {
    color: white;
   }
`;


const RegisterLink = styled.a`
  color: #007bff;
  text-decoration: none;
  margin-top: 10px;
  font-weight: bold;
    color: orange;

  &:hover {
    color:green;
  }
`;

const InputField = styled.input`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
`;

const Login = () => {
  const [rememberMe, setRememberMe] = useState(false);
  const [agreeToTerms, setAgreeToTerms] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState('');

  const handleRememberMeChange = () => {
    setRememberMe(!rememberMe);
  };

  const handleAgreeToTermsChange = () => {
    setAgreeToTerms(!agreeToTerms);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (

    <MainContainer>
    <ImageContainer>
        <Image src={login} alt="Image" />
      </ImageContainer>
    
    <LoginContainer>
      <h2>Login</h2>
      <PasswordContainer>
      <label htmlFor="username">Username</label>
      <InputField type="text" id='username' placeholder="Username" />
      <label htmlFor="password">Password</label>
        <PasswordInput
          id='password'
          type={showPassword ? 'text' : 'password'}
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <TogglePasswordVisibility onClick={togglePasswordVisibility}>
          {showPassword ? '🙈' : '👁️'}
        </TogglePasswordVisibility>
      </PasswordContainer>
      <CheckboxDiv>
        <CheckboxContainer style={{flexDirection:"row", justifyContent:'space-between'}}>
        <div>
          <Checkbox
            type="checkbox"
            checked={rememberMe}
            onChange={handleRememberMeChange}
          />
          Remember Me
        </div>
          
          <a href="/change-password" style={{ marginLeft: '10px', color: 'orange', textDecoration: 'none' }}>
            Change Password
          </a>
        </CheckboxContainer>
        <CheckboxContainer>
          <Checkbox
            type="checkbox"
            checked={agreeToTerms}
            onChange={handleAgreeToTermsChange}
          />
          Agree to <a href="http://" style={{ color: 'orange', textDecoration: 'none' }}>Terms and Conditions</a>
        </CheckboxContainer>
      </CheckboxDiv>
      <br />
      <SubmitButton>Login</SubmitButton>
      <br />
      <div>Don't have an account? <RegisterLink href="/register">Register now</RegisterLink></div>
    </LoginContainer>

    </MainContainer>
  );
};

export default Login;
