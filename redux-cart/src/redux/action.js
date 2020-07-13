import {ADD_TO_CART,ADD_TO_ORDER} from './actionType';

export const addTocart=(payload)=>{
    return{
        type:ADD_TO_CART,
        payload
    }
}

export const addToOrder=(payload)=>{
    return{
        type:ADD_TO_ORDER,
        payload
    }
}