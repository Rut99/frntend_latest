import DatePicker from "react-datepicker";
 
//import "react-datepicker/dist/react-datepicker.css";
import React from "react";
import  { useState } from 'react';
import PhoneInput from 'react-phone-number-input'
import './Register.css';


class Register extends React.Component {

	state = {
		date: new Date(),
	  }
	 
	  onChange = date => this.setState({ date })
		

	constructor(props) {
		super(props);
		this.state = {}

	}
	logChange(val) {
		console.log("Selected: " + val);
	}

	handleChange(e) {
		
	}
	
	render() {
		
		return (
			<div className="Register">
				<title>Home </title>
				<meta charSet="UTF-8"></meta>

				<div className="containerTestReg" id="containerTest11">
					<div class="form-container sign-up-container">
						<form action="#" >
							<h1>Teacher Registration</h1>
							<div class="social-container">
								<a href="#" class="social"><i class="fab fa-facebook-f"></i></a>
								<a href="#" class="social"><i class="fab fa-google-plus-g"></i></a>
								<a href="#" class="social"><i class="fab fa-linkedin-in"></i></a>
							</div>
							<div class="dist"></div>
							<input class="inputreg" type="text" placeholder="Username" />
							<input class="inputreg" type="password" placeholder="Password" />
							<select className="dd1" placeholder="Gender">
								<option value="" disabled selected>Select gender</option>
								<option value="male">Male</option>
								<option value="female">Female</option>
								<option value="other">Other</option>
							</select>
							<input class="inputreg" type="date" name="birthdate" placeholder="Birthdate"/>
							<PhoneInput
    placeholder="Enter phone number"
	value={ this.state.phone }
    onChange={ phone => this.setState({ phone }) }/>
							<input class="inputreg" type="email" placeholder="Email" />
							<div class="dist"></div>
							<button>Sign Up</button>
						</form>
					</div>
					<div class="form-container sign-in-container">
						<form action="#"  >
							<h1>School Register</h1>
							<div class="social-container">
								<a href="#" class="social"><i class="fab fa-facebook-f"></i></a>
								<a href="#" class="social"><i class="fab fa-google-plus-g"></i></a>
								<a href="#" class="social"><i class="fab fa-linkedin-in"></i></a>
							</div>

							<div class="ddside" style={{"padding":"0px"}}>
							
							<select class="ddside1" style={{"margin-right":"5px"}} placeholder="Country">
								<option value=" " disabled selected>Country</option>
								<option value="Public">Public</option>
								<option value="private">pivate</option>
							</select>
							
							<select class="ddside1" placeholder="State">
								<option value=" " disabled selected>State</option>
								<option value="Public">Public</option>
								<option value="private">pivate</option>
							</select>
							</div>
							<select className="dd1" placeholder="District">
								<option value=" " disabled selected>District</option>
								<option value="Public">Public</option>
								<option value="private">pivate</option>
							</select>

							<input class="inputreg" type="address1" placeholder="address line 1" />
							<input class="inputreg" type="address2" placeholder="address line 2" />
							<input class="inputreg" type="city" placeholder="town/city" />
							<input class="inputreg" type="number" placeholder="pincode" />
							<input class="inputreg" type="text" placeholder="School Name" />

							<select className="dd1" placeholder="school type">
								<option value=" " disabled selected>School Type</option>
								<option value="Public">Public</option>
								<option value="private">pivate</option>
							</select>
							<input class="inputreg" type="text" placeholder="UDISE code" />
							<PhoneInput
    placeholder="Enter phone number"
	value={ this.state.phone }
    onChange={ phone => this.setState({ phone }) }/>
	<div class="dist"> </div>
<button>Sign Up</button>						
</form>
					</div>
					<div class="overlay-container">
						<div class="overlay">
							<div class="overlay-panel overlay-left">
								<h1>Step 2</h1>
								<p>Enter your personal details and start journey with us</p>

								<button class="ghost" id="signIn" onClick={this.Signin}>Back</button>
							</div>
							<div class="overlay-panel overlay-right">
								<h1>Step 1</h1>
								<p>If School registered Click continue to proceed</p>
								<button class="ghost" id="signUp" onClick={this.Signup}>Continue</button>
							</div>
						</div>
					</div>

				</div>
			</div>
		);
	}
	componentDidMount() {
		const signUpButton = document.getElementById('signUp');
		const signInButton = document.getElementById('signIn');
		const container111 = document.getElementById('containerTest11');

		signUpButton.addEventListener('click', () => {
			container111.classList.add("right-panel-active");
		});

		signInButton.addEventListener('click', () => {
			container111.classList.remove("right-panel-active");
		});
	}

}


export default Register;