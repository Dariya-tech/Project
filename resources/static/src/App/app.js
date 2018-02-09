import React from 'react';
//import { LoginComponent } from './Login/login';
import { HashRouter as Router, Route } from 'react-router-dom';

import Dummy from './Login/dummy';
import LoginComponent from './Login/login';


export default class App extends React.Component{
	constructor(prop){
		super(prop);
		this.state = {
		}
	}
	update(){
	}
	componentDidMount(){
	}

	render(){	
		return (
		<Router>
			<div>
				<Route exact path="/" component = {LoginComponent} />
				<Route exact path="/user" component = {Dummy} />
			</div>
		</Router>
		);
	}
}

