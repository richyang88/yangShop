import React, { Component } from 'react'
import axios from 'axios'


export default class saleItem extends Component {

    render() {
        const {
            saleId,
            sale,
            onsaleDeleteClick
        } = this.props;

        return (
        <div className="sale-list-item" key={saleId}>
            
            <div className="sale">{sale || ''}</div>
            
    

            <i className="material-icons delete"
                onClick={()=> onsaleDeleteClick(saleId)}>
                {/* clear */}
            </i>
        </div>);
    }
}