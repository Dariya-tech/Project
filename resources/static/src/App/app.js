import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';

export default class App extends React.Component{
	constructor(props){
		super(props);
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
				<Route exact path="/" component = {Login}/>
				<Route exact path="/user" component = {User}/>
			</div>
		</Router>
		);
	}
}


class Login extends React.Component{
	render(){
		return(
		<div>
			<h1>Login</h1>
		</div>)
	}
}

class User extends React.Component{
	render(){
		return(
		<div>
			<h1>UserData</h1>
		</div>)
	}	
}