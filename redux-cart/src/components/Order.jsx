import React, { Component } from 'react'
import {connect} from 'react-redux';
import SingleItem from './SingleItem';
class Order extends Component {
    render() {
        const {orderArray}=this.props
        console.log(orderArray)
        return (
            <div>
                {
                    orderArray && orderArray.map((item,idex)=>{
                        return(
                            <div key={idex}>
                                <label>Name : {item.name}</label>
                                <label>Email :  {item.email}</label>
                                <label>Phone : {item.phone}</label>
                                {
                                    <SingleItem data={item.data} />
                                }
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

const mapStateToProps = state =>{
    return {
        orderArray:state.orderArray
    }
}

export default connect(mapStateToProps,null)(Order)