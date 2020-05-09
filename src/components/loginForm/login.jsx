import React from 'react';
import { ValidateEmail, ValidatePassword } from '../../Validation';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import { FormHelperText } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

import Container from '@material-ui/core/Container';

export default class SignIn extends React.Component {
	constructor () {
		super();
		this.state = {
			ErrorMessage : '',
			EmailBool    : true,
			PasswordBool : true,

			login        : {
				email    : '',
				password : ''
			}
		};
	}
	render () {
		return (
			<Container component='main' maxWidth='xs'>
				<CssBaseline />

				<div>
					<Avatar className='avater' />
					<Typography component='h1' variant='h5'>
						Sign in
					</Typography>
					<form
						noValidate
						onSubmit={(e) => {
							e.preventDefault();
							const email = document.querySelector('#email').value;
							const passWord = document.querySelector('#password').value;
							const checked = this.props.loginCheck(email, passWord);
							if (checked) {
								this.props.history.push('/form');
							}
							else {
								this.props.history.push('/loginError');
							}
						}}
					>
						{!this.state.EmailBool && <FormHelperText>{this.state.ErrorMessage}</FormHelperText>}
						<TextField
							variant='outlined'
							margin='normal'
							required
							fullWidth
							id='email'
							label='Email Address'
							name='email'
							autoComplete='email'
							autoFocus
							onChange={() => {
								const error = ValidateEmail(document.querySelector('#email').value);
								this.setState({ ErrorMessage: error.ErrorMessage, EmailBool: error.bool });
							}}
						/>
						{!this.state.PasswordBool && <FormHelperText>{this.state.ErrorMessage}</FormHelperText>}
						<TextField
							variant='outlined'
							margin='normal'
							required
							fullWidth
							name='password'
							label='Password'
							type='password'
							id='password'
							autoComplete='current-password'
							onChange={() => {
								const error = ValidatePassword(document.querySelector('#password').value);
								this.setState({ ErrorMessage: error.ErrorMessage, PasswordBool: error.bool });
							}}
						/>

						<Button type='submit' fullWidth variant='contained' color='primary'>
							Sign In
						</Button>
					</form>
				</div>
			</Container>
		);
	}
}
