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
        this.refreshUsers()
    }

    refreshUsers = () => {
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

    createNewUer = () => {
        const newUser = {
            name: this.state.newUserName,
        };
        axios.post('/api/user', newUser)
            .then(response => {
                console.log(response);
                this.setState({newUserName: ''})

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
                onuserDeleteClick={this.onuserDeleteClick}
                name={user.name}
                description={user.description}
                isLiked={user.isLiked}/>)
        })
        return (
        <div className="user-list-container">
            
            <div className="header">user list</div>

            <input
                type="string"
                name="newuserName"
                placeholder="user Name"
                required="required"
                onChange={this.onNewUsereNameChange}
                value={this.state.newUserName}/>
            <button
                onClick={() => this.createNewuser()}>Create user</button>

            {userListElements}

        </div>)
    }
}