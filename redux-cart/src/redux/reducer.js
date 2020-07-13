import {ADD_TO_CART,ADD_TO_ORDER} from './actionType';
import data from '../data.json';

const initState={
    productData:data,
    cartArray:[],
    orderArray:[]
}

const reducer=(state=initState,{type,payload}) =>{
    switch(type){
        case ADD_TO_CART:{
            let item=state.productData.find(ele=>ele.id==payload)
            return{
                ...state,
                cartArray:[...state.cartArray,item]
            }
        }

        case ADD_TO_ORDER:{
            console.log(payload)
            return{
                ...state,
                orderArray:[...state.orderArray,payload]
            }
        }

        default:{
            return state
        }
    }
}

export default reducer;