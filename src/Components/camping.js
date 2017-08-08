import React, {Component} from 'react';
import {camping} from '../Data/camping'

export default class Camping extends Component {

  render() {
    let productList = camping.map((product) => {
      return (
      // <div key={product.camping.id} > < div className = 'container' > <div className="row text-center">
        <div className="col-md-4 col-sm-6 hero-feature">
          <div className="thumbnail">
            <img src={product.image} alt=""/>
            <div className="caption">
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <p>Price:{product.price}</p>
              <p>
                <a href="#" className="btn btn-primary">Add to Cart</a>
              </p>
            </div>
          </div>
        </div>
      )
});
return (
  <div className='container'>{productList} </div>
)
    }}
