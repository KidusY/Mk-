import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import { FormHelperText } from '@material-ui/core';
import { TextareaAutosize } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import { ValidateName, ValidateEmail, ValidateMessage } from '../../Validation';
import './Form-style.css';
import { email } from '../../email';

class Form extends React.Component {
	constructor () {
		super();
		this.state = {
			ErrorMessage : '',
			NameBool     : true,
			EmailBool    : true,
			messageBool  : true,
			email        : {
				name    : '',
				email   : '',
				message : ''
			}
		};
	}

	render () {
		let disabelBtn = true;
		if (!this.state.messageBool) {
			disabelBtn = true;
		}
		else {
			disabelBtn = false;
		}
		return (
			<Container component='main' maxWidth='xs'>
				<CssBaseline />
				<div>
					<form
						onSubmit={(e) => {
							e.preventDefault();
							const Name = document.querySelector('#name').value;
							const Subject = document.querySelector('#subject').value;
							const Email = document.querySelector('#email').value;
							const Message = document.querySelector('#message').value;
							email(Name, Subject, Email, Message);
							this.props.history.push('/messageSent');
						}}
					>
						<h1>Contact us </h1>
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
						{!this.state.NameBool && <FormHelperText>{this.state.ErrorMessage}</FormHelperText>}
						<TextField
							variant='outlined'
							margin='normal'
							required
							fullWidth
							name='name'
							label='Name'
							id='name'
							onChange={() => {
								const error = ValidateName(document.querySelector('#name').value);
								this.setState({ ErrorMessage: error.ErrorMessage, NameBool: error.bool });
							}}
						/>
						<TextField
							variant='outlined'
							margin='normal'
							fullWidth
							name='subject'
							label='subject'
							id='subject'
						/>
						{!this.state.messageBool && <FormHelperText>{this.state.ErrorMessage}</FormHelperText>}
						<TextareaAutosize
							className={'textArea'}
							aria-label='minimum height'
							rowsMin={5}
							id='message'
							placeholder='Message'
							onChange={() => {
								const error = ValidateMessage(document.querySelector('#message').value);
								this.setState({ ErrorMessage: error.ErrorMessage, messageBool: error.bool });
							}}
						/>

						<Button type='submit' variant='contained' color='primary' disabled={disabelBtn}>
							send
						</Button>
					</form>
				</div>
			</Container>
		);
	}
}

export default Form;
