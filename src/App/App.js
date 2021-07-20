import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React, { lazy, Suspense } from 'react';
import { Provider } from 'react-redux';
import './App.css';

import routes from '../config/routes';
import store from '../store';

import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import LateralMenu from '../components/common/LateralMenu';

const Home = lazy(() => import ('../components/Home'));
const Login = lazy (() => import ('../components/Login'));
const Register = lazy (() => import ('../components/Register'));
const BookDetail = lazy (() => import ('../components/BookDetail'));
const CustomSearch = lazy (() => import ('../components/CustomSearch'));
const CategoryBooks = lazy (() => import ('../components/CategoryBooks'))

const App = () => {
  
  return (
    <Provider store={store}>
      <Router>
        <Header/>
        <div className='main'>
          <div className='lateral'>
            <LateralMenu/>
          </div>
          <div className='body'>
            <Suspense fallback={
              <div> 
                <img 
                  src='https://i.pinimg.com/originals/f6/06/cb/f606cbf26c0a18898b96ef6857953a75.gif' 
                  alt='Loader'/>
              </div>
            }>
              <Switch>
                <Route exact path={routes.Home}>
                  <Home/>
                </Route>
                <Route exact path={routes.Category}>
                  <CategoryBooks/>
                </Route>
                <Route exact path={routes.Login}>
                  <Login/>
                </Route>
                <Route exact path={routes.Register}>
                  <Register/>
                </Route>
                <Route exact path={routes.BookDetail}>
                  <BookDetail/>
                </Route>
                <Route exact path={routes.CustomSearch}>
                  <CustomSearch/>
                </Route>
              </Switch>
            </Suspense>
          </div>
        </div>
        <Footer/>
      </Router>
    </Provider>
  );
};

export default App;
