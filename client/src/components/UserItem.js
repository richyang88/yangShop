import React, { Component } from 'react'
import axios from 'axios'


export default class UserItem extends Component {

    render() {
        const {
            userId,
            name,
            age,
            gender,
            onUserDeleteClick
        } = this.props;

        return (
        <div className="user-list-item" key={userId}>
            <div className="name">{name || ''}</div>
            <div className="age">{age || ''}</div>
            <div className="gender">{gender || ''}</div>
    

            <i className="material-icons delete"
                onClick={()=> onUserDeleteClick(userId)}>
                {/* clear */}
            </i>
        </div>);
    }
}