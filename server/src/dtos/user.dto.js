module.exports = class UserDto {
	firstname;
	lastname;
	fathername;
	email;
	id;
	isActivated;

	constructor(model) {
		this.id = model.id;
		this.firstname = model.firstname;
		this.lastname = model.lastname;
		this.fathername = model.fathername;
		this.email = model.email;
		this.isActivated = model.isActivated;
	}
};
