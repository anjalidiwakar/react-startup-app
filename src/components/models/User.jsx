export default class Users {
    firstName;
    lastName;
    email;
    confirmedEmail;
    password;
    confirmedPassword;
    role;
    constructor() { }
    setFirstName(firstName) {
        this.firstName = firstName;
    }
    setLastName(lastName) {
        this.lastName = lastName;
    }
    setEmail(email) {
        this.email = email;
    }
    setConfirmedEmail(confirmedEmail) {
        this.confirmedEmail = confirmedEmail;
    }
    setPassword(password) {
        this.password = password;
    }
    setConfirmedPassword(confirmedPassword) {
        this.confirmedPassword = confirmedPassword;
    }
    setRole() {
        this.role = "User";
    }
}