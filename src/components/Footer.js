import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'; 
class Footer extends Component {
    state = { 
img: ("./assets/rocket.png")

     } 
    render() { 
        return (
            <div style={{backgroundColor:"lightgrey"}}>
<div className="container">
  <div className="row">
    <div id='card1' className="col-sm-3">
    <p class="fw-bold">Tech Items</p>
    <br/>
    <ul class="list-unstyled">
  <li><a href="#" className="text-decoration-none">Cables & Chargers</a></li>
  <li><a href="#" className="text-decoration-none">Mobile Holders</a></li>
  <li><a href="#" className="text-decoration-none">Power Banks</a></li>
  <li><a href="#" className="text-decoration-none">Wireless Chargers</a></li>
  <li><a href="#" className="text-decoration-none">Bluetooth EarPhones</a></li>
  <li><a href="#" className="text-decoration-none">True Wireless EarPhones</a></li>
    </ul>
    </div>
    <div id='card2' className="col-sm-3">
    <p class="fw-bold">Mobile Cases & Accessories</p>
    <br/>
    <ul class="list-unstyled">
  <li><a href="#" className="text-decoration-none">iPhone</a></li>
  <li><a href="#" className="text-decoration-none">Samsung</a></li>
  <li><a href="#" className="text-decoration-none">OnePlus</a></li>
  <li><a href="#" className="text-decoration-none">Huawei</a></li>
  <li><a href="#" className="text-decoration-none">Xiaomi-Mi</a></li>
  <li><a href="#" className="text-decoration-none">Oppo</a></li>
    </ul>
    </div>
    <div id='card3' className="col-sm-3">
    <p class="fw-bold">Baseus</p>
    <br/>
    <ul class="list-unstyled">
  <li><a href="#" className="text-decoration-none">Baseus Phone Cases</a></li>
  <li><a href="#" className="text-decoration-none">Cables & Chargers</a></li>
  <li><a href="#" className="text-decoration-none">Power Banks</a></li>
  <li><a href="#" className="text-decoration-none">Car Accessories</a></li>
  <li><a href="#" className="text-decoration-none">Laptop & Travel Bags</a></li>
  <li><a href="#" className="text-decoration-none">Audio Accessories</a></li>
    </ul>
    </div>
    <div  className="col-sm-3">
    <div  className="card">
    <h3>Our Newsletter</h3>
    <form onclick="return false;">
        <div className="inputbox"> <input type="text" name="name" className="form-control" required="required"/> <span>Full Name</span> </div>
        <div className="inputbox"> <input type="text" name="name" className="form-control" required="required"/> <span>Email</span> </div>
        <div className="inputbox"> <input type="text" name="name" className="form-control" required="required"/> <span>Phone</span> </div> <button className="btn btn-danger btn-block">Send</button>
    </form>
</div>
    </div>
  </div>
</div>
            </div>
        );
    }
}
 
export default Footer ;