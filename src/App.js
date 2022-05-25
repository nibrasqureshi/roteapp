import React from 'react';
import {Route, Routes} from  "react-router-dom";
import Content from './layouts/Content';
import About from './layouts/About';
import './App.css';
import Extra from './components/Extra';

import Loginn from './layouts/Loginn';
import Cart from './components/Cart/Cart'
import Products from './layouts/Proudcts';
import Details from './components/Details';
import Modal from './components/Modal';
import ProductList from './components/ProductList';

function App() {
  return (
    <div className="App">
      <React.Fragment>
          <Routes>
                  <Route exact path='/' element={<Products/>} />
                  <Route path='/signup' element={<Content/>} />
                  <Route path='/about' element={<About/>} />
                  <Route path='/trendingcollection' element={<Extra/>}/>
                  <Route path='/login' element={<Loginn/>}/>
                  <Route path='/cart' element={<Cart/>}/>
                  <Route path='/details' element={<Details/>}/>
                  <Route path='/Productlist' element={<ProductList/>}/>
          </Routes>
          <Modal/>
      </React.Fragment>
    </div>
  );
}

export default App;
