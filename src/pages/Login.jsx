import React from 'react';
import Helmet from '../components/Helmet/Helmet';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import { useRef } from 'react';
// import { useAuth0 } from "@auth0/auth0-react";
const Login = () => {
  const loginNameRef = useRef();
  const loginPasswordRef = useRef();
  // const {user,loginWithRedirect} =useAuth0();
  // console.log("Current User",user)
  

  const submitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <Helmet title='Login'>

      <section>
        <Container>
          <Row>
            <Col lg='6' md='6' sm='12' className='m-auto text-center'>
              <form className='form mb-5' onSubmit={submitHandler}>
                <div className='form__group'>
                  <input
                    type='email'
                    placeholder='Email'
                    ref={loginNameRef}
                  ></input>
                </div>
                <div className='form__group'>
                  <input
                    type='password'
                    placeholder='Password'
                    ref={loginPasswordRef}
                  ></input>
                </div>
                <button type='submit' className='addToCart__btn'>
                  Login
                </button>
              </form>
              
              {/* <button onClick={(e) => loginWithRedirect()}>
                Login with redirect
              </button> */}
  
              <Link to='/register'>First time here? Create an account</Link>
              <p>
              <button
  onClick={(e) => loginWithRedirect({ authorizationParams: { redirect_uri: "http://localhost:3000/news" } })}
  style={{
    backgroundColor: '#4caf50', // Green
    color: 'white',
    padding: '10px 15px',
    fontSize: '16px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  }}
>
  Login with redirect
</button>
              </p>
              
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Login;
