import React from 'react';
import ReactDOM from 'react-dom';
import App from './App/App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

const todoApp = (state = {}, action) => {
	switch(action.type){
		case 'ADD_User' :{
			state.user = action.payload;
			return state;
		}
		case 'remove_User' :{
			state.user = action.payload;
			return state;
		}
		default : {
			return state;
		}
	}
}


let store  = createStore(todoApp);
ReactDOM.render(<App /> , document.getElementById('app'));