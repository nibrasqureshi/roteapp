import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class List extends Component {
    state = {  } 
    render() { 
        return (
            <div >
               <nav className="nav-wrapper">
            <nav className="navbar navbar-expand-lg navbar-dark bg-black">
              <div style={{marginLeft:"9%"}} className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <Link className="nav-link " aria-current="page" to="/"><h5>Home</h5></Link>
                    </li>
                    <li><Link className="nav-link" to="/Productlist"><h5>Products</h5></Link></li> 
                    <li className="nav-item">
                      <Link className="nav-link " to="/signup"><h5>Sign Up</h5></Link>
                    </li>
                    <li><Link className="nav-link" to="/login"><h5>login</h5></Link></li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/about"><h5>Terms of Service</h5></Link>
                    </li>
                  
                    
                     
                   
                  </ul>
                </div>
              </div>
            </nav>
            </nav>
            
            </div>
        );
    }
}
 
export default List ;