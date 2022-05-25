import React, { Component } from 'react';
import Product from "./Product";
import Title from "./Title";
import {ProductConsumer} from '../context';
import Navigation from './Navigation';
import List from './List';
import Footer from './Footer';

export default class ProductList extends Component {
    render() {
        return (<div>
            <Navigation/>
            <List/>
            <React.Fragment>
                <div className="py-5">
                    <div className="container">
                    <Title name="our" title="products"/>
                       <div className="row">
                         <ProductConsumer>
                             {value=>{
                               return value.products.map(product =>{
                                   return <Product key={product.id} product={product} />;
                               });
                             }}
                         </ProductConsumer>
                       </div>
                       </div> 
                    </div>
            </React.Fragment>
            <Footer/>
            </div>
        );
    }
}
