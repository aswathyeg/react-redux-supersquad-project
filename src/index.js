import React from 'react';
import ReactDOM from 'react-dom';
import App from'./components/App';
import {Provider} from 'react-redux';
import rootReducer from './reducers';
import {createStore} from 'redux';
import { addCharecterById } from './actions';

const store=createStore(rootReducer);
console.log('store.getState()' ,store.getState());
store.subscribe (()=>console.log('store',store.getState()));
store.dispatch(addCharecterById(2));
ReactDOM.render( 
 <Provider store={store}>  
<App/>
</Provider> ,
document.getElementById('root'));
   

