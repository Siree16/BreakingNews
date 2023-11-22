import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Container, Row, Col } from 'reactstrap';
import CommonSection from '../components/UI/common-section/CommonSection';
import Helmet from '../components/Helmet/Helmet';

const Checkout = () => {
  const [enteredName, setEnteredName] = useState('');
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredNumber, setEnteredNumber] = useState('');
  const [ setEnteredAddress] = useState('');
  const [setEnteredCity] = useState('');
  const [setEnteredPostalCode] = useState('');
  const [setEnteredCountry] = useState('');

  const cartTotalAmount = useSelector((state) => state.cart.totalAmount);
  const shippingCost = 10;
  const totalAmount = cartTotalAmount + shippingCost;

  const submitHandler = (e) => {
    e.preventDefault();

    const options = {
      key: 'rzp_test_qYbv8wmabYAZrx', // Use your Razorpay key ID here
      amount: totalAmount * 100,
      currency: 'INR',
      name: 'Your Company Name',
      description: 'Payment for your order',
      image: 'path_to_your_logo_image',
      handler: async (response) => {
        console.log(response);
        // Handle payment success
      },
      prefill: {
        name: enteredName,
        email: enteredEmail,
        contact: enteredNumber,
      },
      theme: {
        color: '#F37254',
      },
    };

    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.onload = () => {
      const rzp = new window.Razorpay(options);
      rzp.open();
    };

    document.head.appendChild(script);
  };

  useEffect(() => {
    // No need for a separate loadScript function
  }, []);

  return (
    <Helmet title='Checkout'>
      <CommonSection title='Checkout' />
      <section>
        <Container>
          <Row>
            <Col lg='8' md='6'>
              <h6 className='mb-4'>Shipping Address</h6>
              <form
                action=''
                className='checkout__form'
                onSubmit={submitHandler}
                style={{ maxWidth: '400px', margin: '0 auto' }}
              >
                <div style={{ marginBottom: '15px' }}>
                  <label htmlFor='name'>Name:</label>
                  <input
                    required
                    type='text'
                    placeholder='Name'
                    onChange={(e) => setEnteredName(e.target.value)}
                    style={{ width: '100%', padding: '10px' }}
                  />
                </div>

                <div style={{ marginBottom: '15px' }}>
                  <label htmlFor='email'>Email:</label>
                  <input
                    required
                    type='email'
                    placeholder='Email'
                    onChange={(e) => setEnteredEmail(e.target.value)}
                    style={{ width: '100%', padding: '10px' }}
                  />
                </div>

                <div style={{ marginBottom: '15px' }}>
                  <label htmlFor='number'>Phone Number:</label>
                  <input
                    required
                    type='number'
                    placeholder='Phone number'
                    onChange={(e) => setEnteredNumber(e.target.value)}
                    style={{ width: '100%', padding: '10px' }}
                  />
                </div>

                <div style={{ marginBottom: '15px' }}>
                  <label htmlFor='address'>Street Address:</label>
                  <input
                    required
                    type='text'
                    placeholder='Street Address'
                    onChange={(e) => setEnteredAddress(e.target.value)}
                    style={{ width: '100%', padding: '10px' }}
                  />
                </div>

                <div style={{ marginBottom: '15px' }}>
                  <label htmlFor='city'>City:</label>
                  <input
                    required
                    type='text'
                    placeholder='City'
                    onChange={(e) => setEnteredCity(e.target.value)}
                    style={{ width: '100%', padding: '10px' }}
                  />
                </div>

                <div style={{ marginBottom: '15px' }}>
                  <label htmlFor='postalCode'>Postal Code:</label>
                  <input
                    required
                    type='number'
                    placeholder='Postal code'
                    onChange={(e) => setEnteredPostalCode(e.target.value)}
                    style={{ width: '100%', padding: '10px' }}
                  />
                </div>

                <div style={{ marginBottom: '15px' }}>
                  <label htmlFor='country'>Country:</label>
                  <input
                    required
                    type='text'
                    placeholder='Country'
                    onChange={(e) => setEnteredCountry(e.target.value)}
                    style={{ width: '100%', padding: '10px' }}
                  />
                </div>

                <button
                  className='addToCart__btn'
                  style={{ backgroundColor: '#F37254', color: '#fff', padding: '10px 15px', border: 'none', cursor: 'pointer', fontSize: '16px' }}
                >
                  Pay for your order
                </button>
              </form>
            </Col>
            <Col lg='4' md='6'>
              <div className='checkout__bill' style={{ backgroundColor: '#fde4e4' }}>
              <h6 className='d-flex align-items-center justify-content-between mb-3'>
                  Subtotal:<span>Rs.{cartTotalAmount}</span>
                </h6>
                <h6 className='d-flex align-items-center justify-content-between mb-3'>
                  Shipping fee:<span>Rs.{shippingCost}</span>
                </h6>
                <div className='checkout__total'>
                  <h5 className='d-flex align-items-center justify-content-between'>
                    Total: <span>Rs.{totalAmount}</span>
                  </h5>
                </div>
              </div>
            </Col>

          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Checkout;
