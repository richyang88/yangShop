
// import './shop.css'
import React, { Component } from 'react'
import { Link, Route, Switch } from 'react-router-dom';
import axios from 'axios'

import SaleViewItem from './saleItem';


export default class ShopListView extends Component {
    // initial state of component is empty array
    //   fill shopList with data from backend node server

    state = {
        saleList: [],
        newsaleName: '',
    }

    componentDidMount() {
        // get all shops and update state 'shopList' with results
        //    route for get all shops is '/api/shop'
        this.refreshsale()
    }

    refreshsale = () => {
        axios.get("/api/sales")
            .then((response) => {
                console.log(response)
                this.setState({saleList: response.data})
            })
            .catch((err) => {
                console.log(err)
            })
    }

    //  Stretch goal is to update page after every change

    createNewsale = () => {
        const newsale = {
            name: this.state.newShopName,
        };
        axios.post('/api', newsale)
            .then(response => {
                console.log(response);
                this.setState({newsaleName: ''})

                this.refreshsale()
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
        const saleListElements = this.state.saleList.map((shop) => {
            return (
            <SaleViewItem
                shopId={shop._id}
                sale={shop.sale}
                onFavoriteClick={this.onFavoriteClick}
                onUnFavoriteClick={this.onUnFavoriteClick}
                onShopDeleteClick={this.onShopDeleteClick}
                
                name={shop.name}

                age={shop.age}
                gender={shop.gender}
                
                />)
        })
        return (
        <div className="sale-list-container">
            
            <div className="header">sale list</div>

            <input
                type="string"
                name="newsaleName"
                placeholder="sale Name"
                required="required"
                onChange={this.onNewShopeNameChange}
                value={this.state.newShopName}/>
            <button
                onClick={() => this.createNewsale()}>Create sale</button>

            {saleListElements}
            <Link to={`/`}>
              {"Home"}
            </Link>
            <Link to={`/api/product`}>
              {"Product"}
            </Link>
        </div>)
    }
}