import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'remixicon/fonts/remixicon.css';
import { BrowserRouter as Router } from 'react-router-dom';
import store from './store/store';
import { Provider } from 'react-redux';



// const domain = process.env. REACT_APP_AUTH_DOMAIN;
// const clientId = process.env. REACT_APP_AUTH_CLIENT_ID;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        {/* <Auth0Provider 
domain={domain}
clientId={clientId}
redirectUri={window.location.origin}>
        <App />
        </Auth0Provider> */}

        <App />
   
      </Provider>
    </Router>
  </React.StrictMode>
);
