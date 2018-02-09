import React from 'react';

export default class LoginComponent extends React.Component{
	constructor(prop){
		super(prop);
		this.prop = prop;
		this.checkInput = this.checkInput.bind(this);
		this.checkpass = this.checkpass.bind(this);
		this.login = this.login.bind(this);
		this.state = {
				userName: '',
				password: ''
		}
	}

	componentWillMount(){
		
	}
	
	checkInput(event){
		this.setState({ userName : event.target.value});
	}

	checkpass(event){
		this.setState({ password : event.target.value});
	}

	login(e){
		e.preventDefault();
		let employee = {
			userName : this.state.userName,	
			password : this.state.password	
		}
		if(employee.userName && employee.password){
			window.http.postLogin(employee).then( res => { console.log(this.prop); this.prop.history.push('/user') });
		}
	}
	render(){
		return(
				<div className="d-block mt-5">
					<div className="mx-auto w50">
				<form >
					<div className="form-group row">
						<label className="col-2">UserName:</label>
						<div className="col-10">
							<input type="text" onChange={this.checkInput} className="form-control" value={this.state.userName} />
						</div>
					</div>
					<div className="form-group row">
						<label className="col-2">PassWord:</label>
						<div className="col-10">
							<input type="password" onChange={this.checkpass} className="form-control" value={this.state.password} />
						</div>
					</div>
						<button className="btn btn-sucess" onClick={this.login}>Login</button>
				</form>
				</div>
			</div>
			)
	}
}