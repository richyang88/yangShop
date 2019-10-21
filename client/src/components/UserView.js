
// import './shop.css'
import React, { Component } from 'react'
import axios from 'axios'

import UserViewItem from './UserItem';


export default class ShopListView extends Component {
    // initial state of component is empty array
    //   fill shopList with data from backend node server

    state = {
        userList: [],
        newUserName: '',
    }

    componentDidMount() {
        // get all shops and update state 'shopList' with results
        //    route for get all shops is '/api/shop'
        this.refreshUser()
    }

    refreshUser = () => {
        axios.get("/api")
            .then((response) => {
                console.log(response)
                this.setState({userList: response.data})
            })
            .catch((err) => {
                console.log(err)
            })
    }

    //  Stretch goal is to update page after every change

    createNewUser = () => {
        const newUser = {
            name: this.state.newShopName,
        };
        axios.post('/api', newUser)
            .then(response => {
                console.log(response);
                this.setState({newUserName: ''})

                this.refreshUser()
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
        const userListElements = this.state.userList.map((shop) => {
            return (
            <UserViewItem
                shopId={shop._id}
                onFavoriteClick={this.onFavoriteClick}
                onUnFavoriteClick={this.onUnFavoriteClick}
                onShopDeleteClick={this.onShopDeleteClick}
                
                name={shop.name}

                age={shop.age}
                gender={shop.gender}
                
                />)
        })
        return (
        <div className="user-list-container">
            
            <div className="header">User list</div>

            <input
                type="string"
                name="newUserName"
                placeholder="User Name"
                required="required"
                onChange={this.onNewShopeNameChange}
                value={this.state.newShopName}/>
            <button
                onClick={() => this.createNewUser()}>Create User</button>

            {userListElements}

        </div>)
    }
}