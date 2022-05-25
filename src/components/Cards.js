import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './card.css';
import ScrollToTopOnMount from '../template/ScrollToTopOnMount';
class Cards extends Component {
    state = { 
        img: ("./pics/pic1.png"),
        img2: ("./pics/pic2.png"),
        img3: ("./pics/pic3.png"),
        img4: ("./pics/pic4.png"),
        img5: ("./pics/pic5.png"),
        img6: ("./pics/pic6.png"),
        img7: ("./pics/pic7.png"),
        img8: ("./pics/pic8.png"),
        img9: ("./pics/pic9.png"),
        img10: ("./pics/pic10.png"),
        img11: ("./pics/pic11.png"),
        img12: ("./pics/pic12.png"),
     } 
    render() { 
        return (
<div className="container">
<br/> 
<p style={{textAlign:"center"}} class="fw-bold">OUR PHONE BRANDS</p>
<br/>
  <div style={{marginLeft:"50px"}} className="row">
    <div className="col-sm-3">
    <Link onClick={ScrollToTopOnMount} className="text-decoration-none link-secondary" to="/Productlist">
    <img className="img-responsive" src={this.state.img} alt="logo"/> 
            </Link> 
    </div>
    <div className="col-sm-3">
    <Link onClick={ScrollToTopOnMount} className="text-decoration-none link-secondary" to="/Productlist">
    <img className="img-responsive" src={this.state.img2} alt="logo"/> 
            </Link>
    </div>
    <div className="col-sm-3">
    <Link onClick={ScrollToTopOnMount} className="text-decoration-none link-secondary" to="/Productlist">
    <img className="img-responsive" src={this.state.img3} alt="logo"/> 
            </Link> 
    </div>
    <div className="col-sm-3">
    <Link onClick={ScrollToTopOnMount} className="text-decoration-none link-secondary" to="/Productlist">
    <img className="img-responsive" src={this.state.img4} alt="logo"/> 
            </Link>
    </div>
    
  
    
  </div>
  <div style={{marginLeft:"50px"}} className="row">
  <div className="col-sm-3">
  <Link onClick={ScrollToTopOnMount} className="text-decoration-none link-secondary" to="/Productlist">
    <img className="img-responsive" src={this.state.img5} alt="logo"/> 
            </Link> 
    </div>
    <div className="col-sm-3">
    <Link onClick={ScrollToTopOnMount} className="text-decoration-none link-secondary" to="/Productlist">
    <img className="img-responsive" src={this.state.img8} alt="logo"/> 
            </Link>
    </div>
    <div className="col-sm-3">
    <Link onClick={ScrollToTopOnMount} className="text-decoration-none link-secondary" to="/Productlist">
    <img className="img-responsive" src={this.state.img9} alt="logo"/> 
            </Link> 
    </div>
    <div className="col-sm-3">
    <Link onClick={ScrollToTopOnMount} className="text-decoration-none link-secondary" to="/Productlist">
    <img className="img-responsive" src={this.state.img10} alt="logo"/> 
            </Link> 
    </div>
    
  </div>

</div>
        );
    }
}
 
export default Cards;