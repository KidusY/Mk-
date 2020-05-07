export const ValidateName = (Name) => {
	const Message = {
		ErrorMessage : '',
		bool         : false
	};

	if (Name.length === 0) {
		Message.ErrorMessage = 'Please Enter Name';
		Message.bool = true;
	}
	return Message;
};
export const ValidateEmail = (email) => {
	const Message = {
		ErrorMessage : '',
		bool         : false
	};

	if (email.length === 0) {
		Message.ErrorMessage = 'Please Enter Email';
		Message.bool = true;
	}
	return Message;
};

export const ValidateMessage = (message) => {
	const Message = {
		ErrorMessage : '',
		bool         : false
	};

	if (message.length === 0) {
		Message.ErrorMessage = 'Please Enter Message';
		Message.bool = true;
	}
	return Message;
};
