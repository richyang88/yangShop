import React, { Component } from 'react'
import axios from 'axios'


export default class productItem extends Component {

    render() {
        const {
            productId,
            product,
            onproductDeleteClick
        } = this.props;

        return (
        <div className="product-list-item" key={productId}>
            
            <div className="product">{product || ''}</div>
            
    

            <i className="material-icons delete"
                onClick={()=> onproductDeleteClick(productId)}>
                {/* clear */}
            </i>
        </div>);
    }
}