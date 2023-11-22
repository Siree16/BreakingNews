import React, { useState, useEffect } from 'react';

import Helmet from '../components/Helmet/Helmet';
import { Container, Row, Col } from 'reactstrap';
import products from '../assets/fake-data/products';

import '../styles/all-foods.css';
import ReactPaginate from 'react-paginate';
import '../styles/pagination.css';
import fetchNews from './newsService';

const AllFoods = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [ setPageNumber] = useState(0);
  const [category] = useState('general'); // Default category
  const [news, setNews] = useState([]);
  // eslint-disable-next-line array-callback-return
  const searchedProduct = products.filter((item) => {
    if (searchTerm.value === '') {
      return item;
    } else if (item.title.toLowerCase().includes(searchTerm.toLowerCase())) {
      return item;
    }
  });
  const productPerPage = 8;
  // const visitedPage = pageNumber * productPerPage;
  // const displayPage = searchedProduct.slice(
  //   visitedPage,
  //   visitedPage + productPerPage
  // );

  useEffect(() => {
    // Fetch news articles when the component mounts and when the category changes
    const fetchNewsByCategory = async () => {
      const articles = await fetchNews(category);
      setNews(articles);
    };

    fetchNewsByCategory();
  }, [category]);

  const pageCount = Math.ceil(searchedProduct.length / productPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };
  return (
    <Helmet title='All Foods'>
      
      <section>
        <Container>
          <Row>
            <Col lg='6' md='6' sm='6' xs='12'>
              <div className='search__widget d-flex align-items-center justify-content-between'>
                <input
                  type='text'
                  placeholder="I'm looking for..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <span>
                  <i className='ri-search-line'></i>
                </span>
              </div>
            </Col>
            <Col lg='6' md='6' sm='6' xs='12' className='mb-4'>
              <div className='sorting__widget text-end'>
                <select className='w-50'>
                  <option>Default</option>
                  <option value='ascending'>Alphabetically, A-Z</option>
                  <option value='descending'>Alphabetically, Z-A</option>
                  <option value='high-price'>High price</option>
                  <option value='low-price'>Low price</option>
                </select>
              </div>
            </Col>


              {/* Render the news articles */}
              {news.map((article) => (
                <Col lg='3' md='4' sm='6' xs='6' key={article.title} className='mb-4'>
                  <h3>{article.title}</h3>
                  <p>{article.description}</p>
                </Col>
              ))}
              <div>

            {/* {displayPage.map((item) => (
              <Col lg='3' md='4' sm='6' xs='6' key={item.id} className='mb-4'>
                <ProductCard item={item} />
              </Col>
            ))}
            <div> */}
              <ReactPaginate
                pageCount={pageCount}
                onPageChange={changePage}
                previousLabel='Prev'
                nextLabel='Next'
                containerClassName='paginationBtns'
              />
            </div>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default AllFoods;