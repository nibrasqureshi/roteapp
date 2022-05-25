
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import List from '../components/List';

import Navigation from "../components/Navigation";
import { Signup } from "../components/Signup"
import ScrollToTopOnMount from '../template/ScrollToTopOnMount';

class Content extends Component {
    state = {  } 
    render() { 
        return (
            <div>
<Navigation/>
<List/>

<div className="container mt-3">
      <div className="row">
        <div className="col-md-5">
          <Signup />
          
          <br/>
          <Link onClick={ScrollToTopOnMount} style={{textDecoration:"none"}} to={"/login"}>
            <p >Already Signed up? Log-In here</p>
          </Link>
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
 
export default Content;










/*import React from "react";

const Content = () =>{

    return <h1>my name is content</h1>
}
export default Content*/