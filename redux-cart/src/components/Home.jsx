import React, { Component } from 'react';
import {connect} from 'react-redux';
import SingleItem from './SingleItem';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            option:''
        }
    }

    handleChange=(e)=>{
        this.setState({
            option:e.target.value
        })
    }

    render() {
        const {productData}=this.props
        console.log(productData)
        return (
            <div className="container mt-5">
                <div className="dropdown">
                    <select onChange={this.handleChange}>
                        <option value="all">All</option>
                        <option value="watch">watch</option>
                        <option value="shoe">shoe</option>
                        <option value="shirt">shirt</option>
                    </select>
                </div>
                <SingleItem data={productData} option={this.state.option} test='home' />
            </div>
        )
    }
}

const mapStateToProps = state =>{
    return {
        productData:state.productData
    }
}

const mapDispatchToProps =dispatch =>{

}

export default connect(mapStateToProps,null)(Home)