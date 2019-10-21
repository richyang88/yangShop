import React, { Component } from 'react'
import axios from 'axios'


export default class ShopListItem extends Component {

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
            <div className="title">{name || ''}</div>
    

            <i className="material-icons delete"
                onClick={()=> onUserDeleteClick(userId)}>
                clear
            </i>
        </div>);
    }
}