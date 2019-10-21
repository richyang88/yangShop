// import './user.css'
import React, { Component } from 'react'
import axios from 'axios'

import userViewItem from './UserItem';


export default class userListView extends Component {
    // initial state of component is empty array
    //   fill userList with data from backend node server

    state = {
        userList: [],
        newuserName: '',
    }

    componentDidMount() {
        // get all users and update state 'userList' with results
        //    route for get all users is '/api/user'
        this.refreshusers()
    }

    refreshusers = () => {
        axios.get("/api/user")
            .then((response) => {
                console.log(response)
                this.setState({userList: response.data})
            })
            .catch((err) => {
                console.log(err)
            })
    }

    //  Stretch goal is to update page after every change

    createNewuser = () => {
        const newuser = {
            name: this.state.newuserName,
        };
        axios.post('/api/user', newuser)
            .then(response => {
                console.log(response);
                this.setState({newuserName: ''})

                this.refreshusers()
            })
        // create new user using 'newuserName' in state
        //    route for creation is '/api/user'
        //    refresh page to see results
    }

    onFavoriteClick = (userId) => {
        // update user isLiked status using existing user data and userId
        //    route for update is /api/user/
        //    refresh page to see results
        const userToUpdate = this.state.userList.find((user) => {
            if (userId === user._id) {
                return true
            }
        })
        userToUpdate.isLiked = true
        axios.put(`/api/user/${userId}`, userToUpdate)
            .then((response) => {
                this.refreshusers()
            })
    }

    onUnFavoriteClick = (userId) => {
        // update user isLiked status using existing user data and userId
        //    route for update is /api/user/
        //    refresh page to see results
        const userToUpdate = this.state.userList.find((user) => {
            if (userId === user._id) {
                return true
            }
        })
        userToUpdate.isLiked = false
        axios.put(`/api/user/${userId}`, userToUpdate)
            .then((response) => {
                this.refreshusers()
            })
    }

    onuserDeleteClick = (userId) => {
        // delete user using existing userId
        //    route for delete is /api/user/
        //    refresh page to see results
        axios.delete(`/api/user/${userId}`)
            .then((response) => {
                console.log(response)
                this.refreshusers()
            })
    }

    onNewusereNameChange = (event) => {
        const newuserName = event.target.value;
        this.setState({newuserName: newuserName})
    }





    render () {
        const userListElements = this.state.userList.map((user) => {
            return (
            <userViewItem
                userId={user._id}
                onFavoriteClick={this.onFavoriteClick}
                onUnFavoriteClick={this.onUnFavoriteClick}
                onuserDeleteClick={this.onuserDeleteClick}
                name={user.name}
                description={user.description}
                isLiked={user.isLiked}/>)
        })
        return (
        <div className="user-list-container">
            <img className="hero-image" src="/hero.jpg"/>
            <div className="header">user list</div>

            <input
                type="string"
                name="newuserName"
                placeholder="user Name"
                required="required"
                onChange={this.onNewusereNameChange}
                value={this.state.newuserName}/>
            <button
                onClick={() => this.createNewuser()}>Create user</button>

            {userListElements}

        </div>)
    }
}