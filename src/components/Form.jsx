import React from 'react';
import { TextField, Grid, TextareaAutosize, Button, FormHelperText } from '@material-ui/core/';
import { ValidateName, ValidateEmail, ValidateMessage } from '../Validation';
import './Form-style.css';
import { render } from '@testing-library/react';

class Form extends React.Component {
	constructor () {
		super();
		this.state = {
			ErrorMessage : '',
			NameBool     : false,
			EmailBool    : false,
			messageBool  : false
		};
	}
	render () {
		let btnDisabled = true;
		if (!this.state.NameBool && !this.state.EmailBool) {
			btnDisabled = false;
		}
		return (
			<div className='FormContainer'>
				<form className='form' noValidate autoComplete='off'>
					<Grid container direction='column' justify='flex-start' alignItems='center' spacing={4}>
						<Grid container item xs={6} alignItems='center'>
							{this.state.NameBool && <FormHelperText>{this.state.ErrorMessage}</FormHelperText>}
							<TextField
								id='Name'
								label='Name'
								onChange={() => {
									const error = ValidateName(document.querySelector('#Name').value);
									this.setState({ ErrorMessage: error.ErrorMessage, NameBool: error.bool });
								}}
							/>
						</Grid>
						<Grid container item xs={6} alignItems='center'>
							{this.state.EmailBool && <FormHelperText>{this.state.ErrorMessage}</FormHelperText>}
							<TextField
								id='Email'
								label='Email'
								type='email'
								onChange={() => {
									const error = ValidateEmail(document.querySelector('#Email').value);
									this.setState({ ErrorMessage: error.ErrorMessage, EmailBool: error.bool });
								}}
							/>
						</Grid>
						<Grid container item xs={6} alignItems='center'>
							{this.state.messageBool && <FormHelperText>{this.state.ErrorMessage}</FormHelperText>}
							<TextareaAutosize
								id='Message'
								aria-label='empty textarea'
								placeholder='Message'
								rowsMin='10'
								onChange={() => {
									const error = ValidateMessage(document.querySelector('#Message').value);
									this.setState({ ErrorMessage: error.ErrorMessage, messageBool: error.bool });
								}}
							/>
						</Grid>

						<Button variant='contained' color='primary' onClick={() => {}} disabled={btnDisabled}>
							Send
						</Button>
					</Grid>
				</form>
			</div>
		);
	}
}

export default Form;
