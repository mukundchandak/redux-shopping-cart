import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from '../components/Home';
import Cart from '../components/Cart';
import Order from '../components/Order';
import Product from '../components/Product';

export default function Routes() {
    return (
        <div>
            <Switch>
                <Route exact path='/' render={() => <Home />} />
                <Route path='/cart' render={() => <Cart />} />
                <Route path='/order' render={() => <Order />} />
                <Route path='/product' render={() => <Product />} />
            </Switch>
        </div>
    )
}