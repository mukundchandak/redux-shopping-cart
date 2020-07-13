import React from 'react';
import {connect} from 'react-redux';
import {addTocart} from '../redux/action';

function SingleItem(props) {
    const {data,addTocart,option}=props
    data.filter(item =>{
        if(item.category==option)
            return true
        
        if(option=="all" || option=="")
            return true
    })
    return (
        <div>
            <table className="table table-dark">
                <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Name</th>
                    <th scope="col">Price</th>
                    <th scope="col">Category</th>
                    <th scope="col">Image</th>
                </tr>
                </thead>
                <tbody>
                    {
                        data && data.map((item,index)=>{
                            return(
                                <tr key={index}>
                                    <th scope="row">{item.id}</th>
                                    <td>{item.name}</td>
                                    <td>{item.price}</td>
                                    <td>{item.category}</td>
                                    <td><img src={item.img} alt={item.name} width="100" 
                                    height="100" className="img-fluid" /></td>
                                    {
                                        props.test=="home"?
                                        <td><button onClick={() =>addTocart(item.id)} className="btn btn-outline-danger">Add to Cart</button></td>
                                        :<td></td>
                                    }
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

const mapDispatchToProps=dispatch =>{
    return {
        addTocart: (payload) =>dispatch(addTocart(payload))
    }
}

export default connect(null,mapDispatchToProps)(SingleItem)