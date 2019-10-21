
// import './shop.css'
import React, { Component } from 'react'
import { Link, Route, Switch } from 'react-router-dom';
import axios from 'axios'

import ProductViewItem from './productItem';


export default class ShopListView extends Component {
    // initial state of component is empty array
    //   fill shopList with data from backend node server

    state = {
        productList: [],
        newproductName: '',
    }

    componentDidMount() {
        // get all shops and update state 'shopList' with results
        //    route for get all shops is '/api/shop'
        this.refreshproduct()
    }

    refreshproduct = () => {
        axios.get("/api/product")
            .then((response) => {
                console.log(response)
                this.setState({productList: response.data})
            })
            .catch((err) => {
                console.log(err)
            })
    }

    //  Stretch goal is to update page after every change

    createNewproduct = () => {
        const newproduct = {
            name: this.state.newShopName,
        };
        axios.post('/api/createPro', newproduct)
            .then(response => {
                console.log(response);
                this.setState({newproductName: ''})

                this.refreshproduct()
            })
        // create new shop using 'newShopName' in state
        //    route for creation is '/api/shop'
        //    refresh page to see results
    }

    

    onShopDeleteClick = (shopId) => {
        // delete shop using existing shopId
        //    route for delete is /api/shop/
        //    refresh page to see results
        axios.delete(`/api/shop/${shopId}`)
            .then((response) => {
                console.log(response)
                this.refreshShops()
            })
    }

    onNewShopeNameChange = (event) => {
        const newShopName = event.target.value;
        this.setState({newShopName: newShopName})
    }





    render () {
        const productListElements = this.state.productList.map((shop) => {
            return (
            <ProductViewItem
                shopId={shop._id}
                product={shop.product}
                onFavoriteClick={this.onFavoriteClick}
                onUnFavoriteClick={this.onUnFavoriteClick}
                onShopDeleteClick={this.onShopDeleteClick}
                
                name={shop.name}

                age={shop.age}
                gender={shop.gender}
                
                />)
        })
        return (
        <div className="product-list-container">
            
            <div className="header">product list</div>

            <input
                type="string"
                name="newproductName"
                placeholder="product Name"
                required="required"
                onChange={this.onNewShopeNameChange}
                value={this.state.newShopName}/>
            <button
                onClick={() => this.createNewproduct()}>Create product</button>

            {productListElements}
            <Link to={`/`}>
              {"Home"}
            </Link>
            <Link to={`/api/sales`}>
              {"Sales"}
            </Link>
        </div>)
    }
}