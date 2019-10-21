/* Step 1 import React, { Component } and axios
 *
 */
import React, { Component } from 'react'
import axios from 'axios'

import UserItemView from './UserItem';

/* Step 2
 * Rename this class to reflect the component being created
 *
 */
export default class HelloWorld extends Component {

    /* Step 3
    * Create a state for the component to store view data
    *
    */
    state = {
        userList: [],
        // newUserName:'',
    }

    /* Step 4
    * Use componentDidMount to retrieve any data to display
    *   Here you can make calls to your local express server
    *   or to an external API
    *   setState can be run here as well
    *   -REMINDER remember `setState` it is an async function
    */
    // componentDidMount() {
    //     axios.get('/api/helloworld')
    //         .then((res) => {
    //             this.setState({message: res.data})
    //         })
    // }
    // componentDidMount() {
    //     axios.get('/getAllUsers')
    //         .then((res) => {
    //             this.setState({name: res.data})
    //         })
    // }
    componentDidMount() {
        this.refreshUsers()
    }

    // refreshUsers=()=>{
    //     axios.get('/getAllUsers')
    //         .then((response)=>{
    //             console.log(response)
    //             this.setState({
    //                 userList: response.data
    //             })
    //             .catch((err)=>{
    //                 console.log(err)
    //             })
    //         })
    // }

    refreshUsers = () => {
        axios.get('/getAllUsers')
            .then((response) => {
                console.log(response)
                this.setState({ userList: response.data })
            })
            .catch((err) => {
                console.log(err)
            })
    }

    /* Step 5
    *  The render function manages what is shown in the browser
    *  TODO: delete the jsx returned
    *   and replace it with your own custom jsx template
    *
    */
    render() {
        return (
            <div>
                {/* Accessing the value of message from the state object */}
                {this.state.userList}

            </div>
        )
    }

    // render () {
    // const userListElements = this.state.userList.map((user) => {
    //     return (
    //     <UserItemView
    //         userId={user._id}
    //         onShopDeleteClick={this.onUserDeleteClick}
    //         name={user.name}
    //         age={user.age}
    //         gender={user.gender}

    //         />)
    // })
    // return (
    // <div className="user-list-container">

    //     <div className="header">User list</div>

    //     <input
    //         type="string"
    //         name="newShopName"
    //         placeholder="Shop Name"
    //         required="required"
    //         onChange={this.onNewShopeNameChange}
    //         value={this.state.newShopName}/>
    //     <button
    //         onClick={() => this.createNewShop()}>Create Shop</button>

    //     {userListElements}

    // </div>)
    // }
}
