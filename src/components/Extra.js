import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ScrollToTopOnMount from '../template/ScrollToTopOnMount';
class Extra extends Component {
    state = { 
        img: ("./pics/pic13.png"),
        img2: ("./pics/pic14.png"),
        img3: ("./pics/pic15.png"),
        img4: ("./pics/pic16.png"),
        img5: ("./pics/pic17.png"),
        img6: ("./pics/pic18.png"),

     } 
    render() { 
        return (
            <div className="container">
             
<br/> 
<br/>
<p style={{textAlign:"center"}} class="fw-bold">OTHER TRENDING COLLECTION</p>
<br/>
  <div className="row">
    <div className="col-sm-2">
   <Link onClick={ScrollToTopOnMount} to="./signup"> <img className="img-responsive" src={this.state.img} alt="logo"/></Link>  
    </div>
    <div className="col-sm-2">
    <Link onClick={ScrollToTopOnMount} to="./signup"> <img className="img-responsive" src={this.state.img2} alt="logo"/></Link>  
    </div>
    <div className="col-sm-2">
    <Link onClick={ScrollToTopOnMount} to="./signup"> <img className="img-responsive" src={this.state.img3} alt="logo"/></Link>  
    </div>
    <div className="col-sm-2">
    <Link onClick={ScrollToTopOnMount} to="./signup"> <img className="img-responsive" src={this.state.img4} alt="logo"/></Link>  
    </div>
    <div className="col-sm-2">
    <Link onClick={ScrollToTopOnMount} to="./signup"> <img className="img-responsive" src={this.state.img5} alt="logo"/></Link>  
    </div>
    <div className="col-sm-2">
    <Link onClick={ScrollToTopOnMount} to="./signup"> <img className="img-responsive" src={this.state.img6} alt="logo"/></Link>  
    </div>
    
  </div>
  <br/>
  </div>
        );
    }
}
 
export default Extra;