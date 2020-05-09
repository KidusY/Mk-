import React from 'react';
import logo from './assets/mk_decision_logo_black-01.png';
import { Route } from 'react-router-dom';
import Form from './components/emailForm/Form';
import LoginError from './components/loginError';
import MessageSent from './components/messageSent';
import Login from './components/loginForm/login';
import axios from 'axios';
import './App.css';

class App extends React.Component {
	constructor () {
		super();
		this.state = {
			userInfo : [],
			login    : false
		};
	}

	componentDidMount () {
		this.fetchData();
	}

	fetchData = async () => {
		let data;

		try {
			data = await axios.get('https://etkboq350m.execute-api.us-west-2.amazonaws.com/default/getDataFromTable', {
				api_key : 'jQy0ejkWR815um3evUdBz2TUIqZhdkOK2xCqg4Oi'
			});
			this.setState({ userInfo: data.data.body.Items });
		} catch (err) {
			console.log(err);
		}
	};

	loginCheck = (email, password) => {
		for (const iterator of this.state.userInfo) {
			if (email.toLowerCase() === iterator.email && password === iterator.password) {
				this.setState({ login: true });
				return true;
			}
			else {
				return false;
			}
		}
	};

	render () {
		return (
			<div className='App'>
				<img src={logo} className='logo' alt='Mk' />
				<Route exact path='/' component={(props) => <Login {...props} loginCheck={this.loginCheck} />} />
				{this.state.login && <Route exact path='/form' component={(props) => <Form {...props} />} />}
				<Route exact path='/loginError' component={(props) => <LoginError {...props} />} />
				<Route exact path='/messageSent' component={(props) => <MessageSent {...props} />} />
			</div>
		);
	}
}

export default App;
