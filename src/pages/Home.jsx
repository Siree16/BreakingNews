import React, { useState, useEffect } from 'react';
import Helmet from '../components/Helmet/Helmet.js';
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap';
import heroImg from '../assets/images/hero.png';
import '../styles/hero-section.css';
import '../styles/home.css';
import products from '../assets/fake-data/products.js';
import ProductCard from '../components/UI/product-card/ProductCard.jsx';
import whyImg from '../assets/images/location.png';
import networkImg from '../assets/images/network.png';



const Home = () => {
  const [category, setCategory] = useState('ALL');
  const [allProducts, setAllProducts] = useState(products);
  // const [hotPizza, setHotPizza] = useState([]);

  // useEffect(() => {
  //   const filteredPizza = products.filter((item) => item.category === 'Pizza');
  //   const slicePizza = filteredPizza.slice(0, 4);
  //   setHotPizza(slicePizza);
  // }, []);
  useEffect(() => {
    if (category === 'ALL') {
      setAllProducts(products);
    }
    if (category === 'BURGER') {
      const filteredProducts = products.filter(
        (item) => item.category === 'Burger'
      );
      setAllProducts(filteredProducts);
    }
    if (category === 'PIZZA') {
      const filteredProducts = products.filter(
        (item) => item.category === 'Pizza'
      );
      setAllProducts(filteredProducts);
    }
    if (category === 'BREAD') {
      const filteredProducts = products.filter(
        (item) => item.category === 'Bread'
      );
      setAllProducts(filteredProducts);
    }
  }, [category]);
  return (
    <Helmet title='Home'>
      <section>
        <Container>
          <Row>
            <Col lg='6' md='6'>
              <div className='hero__content'>
                <h5 className='mb-3'>
                Your News, Your Way—Delivered Swiftly
                </h5>
                <h1 className='mb-4 hero__title'>
                  <span>No Waiting!</span> Stay Ahead   <br /> with our
                  <span> Newsfeed!</span>
                </h1>

                <p>
                #StayInformed #NewsAtYourFingertips #InstantUpdates
                </p>

                
                <div className='hero__service d-flex align-items-center gap-5 mt-5'>
                  <p className='d-flex align-items-center gap-2'>
                    <span className='shipping__icon'>
                      <i className='ri-car-line'></i>
                    </span>
                    Stay Informed, Instantly
                  </p>
                  <p className='d-flex align-items-center gap-2'>
                    <span className='shipping__icon'>
                      <i className='ri-shield-check-line'></i>
                    </span>
                    100% secure checkout
                  </p>
                </div>
              </div>
            </Col>
            <Col lg='6' md='6'>
              <div className='hero__img'>
                <img src={heroImg} alt='hero-img' className='w-100' />
              </div>
            </Col>
          </Row>
        </Container>
      </section>



      <section>
        <Container>
          <Row>
            <Col lg='12' className='text-center'>
              <h2>Popular News Categories</h2>
            </Col>
            <Col lg='12'>
              <div className='food__category d-flex align-items-center justify-content-center gap-5'>
                <button
                  onClick={() => setCategory('ALL')}
                  className={`all__btn Rs.{
                    category === 'ALL' ? 'foodBtnActive' : ''
                  }`}
                >
                  All
                </button>
                <button
                  onClick={() => setCategory('BURGER')}
                  className={`d-flex align-items-center gap-2 Rs.{
                    category === 'BURGER' ? 'foodBtnActive' : ''
                  }`}
                >
                  {/* <img src={foodCategoryImg01} alt='' /> */}
                  Audio News
                </button>
                <button
                  onClick={() => setCategory('PIZZA')}
                  className={`d-flex align-items-center gap-2 Rs.{
                    category === 'PIZZA' ? 'foodBtnActive' : ''
                  }`}
                >
                  {/* <img src={foodCategoryImg02} alt='' /> */}
                  Newspapers
                </button>
                <button
                  onClick={() => setCategory('BREAD')}
                  className={`d-flex align-items-center gap-2 Rs.{
                    category === 'BREAD' ? 'foodBtnActive' : ''
                  }`}
                >
                  {/* <img src={foodCategoryImg03} alt='' /> */}
                  e-News
                </button>
              </div>
            </Col>

            {allProducts.map((item) => {
              return (
                <Col lg='3' md='4' sm='6' xs='6' key={item.id} className='mt-5'>
                  <ProductCard item={item} />
                </Col>
              );
            })}
          </Row>
        </Container>
      </section>

      <section className='why__choose-us'>
        <Container>
          <Row>
            <Col lg='6' md='6'>
              <img src={whyImg} alt='why-foodie' className='w-100'></img>
            </Col>
            <Col lg='6' md='6'>
              <div className='why__foodie'>
                <h2 className='foodie-title mb-4'>
                  Why <span>Breaking News?</span>
                </h2>
                <p className='foodie-desc'>
                 
"Breaking News, our newsfeed application, stands as the quintessential source for real-time and impactful updates. The platform is designed with a commitment to immediacy, ensuring users are the first to know about breaking stories as they unfold. The curated content is meticulously selected to provide users with the most relevant and significant news, allowing them to stay well-informed without sifting through unnecessary noise. Our intuitive and user-friendly interface ensures a seamless experience, while push notifications deliver breaking news directly to users' devices, keeping them ahead of the curve. Breaking News isn't just an application; it's a dynamic and essential tool for those who prioritize staying abreast of the latest developments, making it the go-to resource for anyone seeking a reliable, efficient, and comprehensive news experience on our website."






                </p>
                <ListGroup className='mt-4'>
                  <ListGroupItem className='border-0 ps-0'>
                    <p className='choose__us-title d-flex align-items-center gap-2'>
                      <i className='ri-checkbox-circle-line'></i>
                       "Finally, a news app that keeps me informed without overwhelming me. Love the sleek design and user-friendly interface!" - John D.
                    </p>
                    <p className='choose__us-desc'>
                    "As a news junkie, I've tried many apps, but this one stands out. Fast updates, reliable sources, and a clean layout. Highly recommend!" - Alex B.
                    </p>
                  </ListGroupItem>
                  <ListGroupItem className='border-0 ps-0'>
                    <p className='choose__us-title d-flex align-items-center gap-2'>
                      <i className='ri-checkbox-circle-line'></i>Quality support
                    </p>
                    <p className='choose__us-desc'>
                    "The push notifications are timely, and I appreciate the variety of news categories. It's like having a personalized newsfeed at my fingertips." - Emily R.
                    </p>
                  </ListGroupItem>
            
                </ListGroup>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg='6' md='6'>
              <div className='testimonial'>
                <h5 className='testimonial__subtitle mb-4'>Testimonial</h5>
                <h2 className='testimonial__title mb-40'>
                  What our <span>customers </span>are saying
                </h2>
                <p className='testimonial__desc'>
   
</p>

<p>🌟 "Finally found a news app that respects my time. The concise summaries and diverse content keep me informed without overwhelming me. A must-have for busy professionals!" - Jessica L.</p>

<p>🌟 "The user interface is intuitive and visually appealing. Navigating through different sections is a breeze, making it enjoyable to stay updated on current events." - Ryan H.</p>

<p>🌟 "I love how the app combines top headlines with in-depth articles. It's the perfect balance between staying informed on the latest happenings and delving deeper into topics that interest me." - Olivia G.</p>

<p>🌟 "Kudos to the team behind this app for the thoughtful curation. It feels like the content is tailored just for me, making my news consumption a personalized and enjoyable experience." - David W.</p>

<p>🌟 "The app's commitment to unbiased reporting is refreshing. I feel like I can trust the information I'm receiving, and that's a game-changer in today's media landscape." - Rachel C.</p>

<p>🌟 "I appreciate the effort to include a variety of perspectives. It's enlightening to see different angles on a story, helping me form a more well-rounded understanding of current events." - Brian M.</p>

<p>🌟 "The offline reading feature is a game-changer for my commute. It ensures that I never miss out on important news, even when I'm away from a stable internet connection. Brilliant!" - Karen T.</p>

<p>🌟 "The app's commitment to quality over quantity is evident. It's my go-to for news, and I love that I can trust the information without being bombarded by clickbait headlines." - Jason P.</p>



              
              </div>
            </Col>
            <Col lg='6' md='6'>
              <img src={networkImg} alt='testimonial-img' className='w-100' />
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Home;
