import React, { Component } from 'react';
import './Navigation.css';
import { Link } from 'react-router-dom';
import {ButtonContainer} from './Button';
class Navigation extends Component {
    state = {  
        url: ""
    } 
    render() { 
        return (
            <div id="Nav" style={{ height:"100px",width:"100%", backgroundColor:"black", color:"white", display:"flex" }}>
            <a style={{marginTop:"3%",marginLeft:"10%",marginRight:"1%"}} href={this.state.url}>
            <img style={{height:"50px", width:"55px"}} src='./phone-case (1).png' alt='logo'/>
            </a>

<h3 style={{marginTop:"3.0%", fontFamily:"myfont"}}>Mobile</h3>
<br/>
<h3 style={{marginTop:"4.3%", marginLeft:"-3%", fontFamily:"myfont"}}>Case.pk</h3>

<form style={{height:"40px", width:"550px", display:"flex", marginLeft:"2%", marginTop:"3.5%" }}>
<input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
</form>
<Link style={{marginTop:"3.25%",marginLeft:"30%"}} to="/cart" className="ml-auto">
                  <ButtonContainer >
                      <i className="fas fa-cart-plus"></i>
                  </ButtonContainer>
               </Link>




          </div>
        );
    }
}
 
export default Navigation ;