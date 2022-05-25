
import React, { Component } from 'react';
import Footer from '../components/Footer';
import List from '../components/List';

import {Login} from '../components/Login';
import Navigation from "../components/Navigation";



class Loginn extends Component {
    state = {  } 
    render() { 
        return (
            <div>
<Navigation/>
<List/>
<div className="container mt-3">
      <div className="row">
        <div className="col-md-5">
          <Login/>
        </div>
        <div className="col-md-7 my-auto">
          <img className="img-fluid w-100" src="./4957136.jpg" alt=""/>
        </div>
      </div>
    </div>
    <br/>
<Footer/>

            </div>
        );
    }
}
 
export default Loginn;




