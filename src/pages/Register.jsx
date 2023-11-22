import React from 'react';
import Helmet from '../components/Helmet/Helmet';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import { useRef } from 'react';
import { useAuth0 } from "@auth0/auth0-react";
const Register = () => {
  const registerNameRef = useRef();
  const registerPasswordRef = useRef();
  const registerEmailRef = useRef();
  const {user,loginWithRedirect} =useAuth0();
  console.log("Current User",user)
  const submitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <Helmet title='Register'>
   
      <section>
        <Container>
          <Row>
            <Col lg='6' md='6' sm='12' className='m-auto text-center'>
              <form className='form mb-5' onSubmit={submitHandler}>
                <div className='form__group'>
                  <input
                    type='text'
                    placeholder='Full Name'
                    ref={registerNameRef}
                  ></input>
                </div>
                <div className='form__group'>
                  <input
                    type='email'
                    placeholder='Email'
                    ref={registerEmailRef}
                  ></input>
                </div>
                <div className='form__group'>
                  <input
                    type='password'
                    placeholder='Password'
                    ref={registerPasswordRef}
                  ></input>
                </div>
                <button type='submit' className='addToCart__btn'>
                  Sign up
                </button>
              </form>
              <Link to='/login'>Already have an account? Login</Link>
         
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

export default Register;
