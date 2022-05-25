import React, { Component } from "react";
import Cards from "../components/Cards";
import List from "../components/List";
import Navigation from "../components/Navigation";
import 'bootstrap/dist/css/bootstrap.css';  
import Footer from "../components/Footer";
import Extra from "../components/Extra";
import "./product.css"
class Products extends Component {
    state = {  vid: ("./vid.mp4") } 
    render() { 
        return (
            <div>
<Navigation/>
<List/>
<div class="outer-container">
    <div class="inner-container">
        <div class="video-overlay">
        </div>
        <video id="video" loop autoPlay muted>
      <source src="./vid.mp4" type="video/mp4"/>
     </video>
    </div>
</div>

<Cards/>
<br/>
<div style={{backgroundColor:"#F7F7F7", width:"100%"}}>
<Extra/>
</div>

<Footer/>
            </div>
        );
    }
}
 
export default Products;