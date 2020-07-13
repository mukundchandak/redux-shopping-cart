import React, { Component } from 'react'
import {connect} from 'react-redux';
import SingleItem from './SingleItem';
import {addToOrder} from "../redux/action";

class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name:'',
            email:'',
            phone:''
        }
    }

    handleChange=(e)=>{
        this.setState({ 
            [e.target.name]:e.target.value,
        })
    }
    render() {
        const {cartArray,addToOrder}=this.props
        console.log(cartArray)
        return (
            <div className="container mt-5">
                <div>
                    <label>Name : </label>
                    <input type="text" onChange={this.handleChange} name="name" />
                    <label>email : </label>
                    <input type="text" onChange={this.handleChange} name="email" />
                    <label>Phone : </label>
                    <input type="text" onChange={this.handleChange} name="phone" />
                    <button className="btn btn-outline-secondary" onClick={()=>addToOrder({name:this.state.name,
                    email:this.state.email,
                    phone:this.state.phone,
                    data:cartArray})}>Add to Order</button>
                </div>
                <SingleItem data={cartArray} />
            </div>
        )
    }
}

const mapStateToProps =state=>{
    return {
        cartArray:state.cartArray
    }
}

const mapDispatchToProps =dispatch =>{
    return {
        addToOrder:(payload) => dispatch(addToOrder(payload))
    }
}
export default connect(mapStateToProps,mapDispatchToProps) (Cart)