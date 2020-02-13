import React from 'react';
import '../../App.css';
import Select from 'react-select';
import './TeacherReg.css';
import PhoneInput from 'react-phone-number-input'
const options = {
  filterType: 'checkbox',
};
const optionsdd = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];


class BulkRegistration extends React.Component {
  state = {
		selectedOption: null,
	};
	handleChange = selectedOption => {
		this.setState({ selectedOption });
		console.log(`Option selected:`, selectedOption);
	};
  render() {
    const { selectedOption } = this.state;

    return (
      <div className="App ">
        <title>Home </title>
        <meta charset="UTF-8"></meta>

        <link href='http://fonts.googleapis.com/css?family=Lato:300,400,400italic,700,700italic,900%7CPacifico' rel='stylesheet' type='text/css' />
        <link rel="shortcut icon" src={require('../../images/favicon.ico')} />
        <link rel="stylesheet" src={require('../../css/bootstrap/css/bootstrap.min.css')} type="text/css" media="all" />
        <link rel="stylesheet" href="http://netdna.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css" />
        <link rel="stylesheet" src={require('../../style.css')} type="text/css" media="all" />
        <link rel="stylesheet" src={require('../../js/prettyphoto/css/prettyPhoto.css')} type="text/css" media="all" />
        <div id='main' class="wrap" >
          {/* <section class="page-top wrap">

            <h2 class="page-section-title">Students</h2>

          </section>


          <div class="zz-bottom"></div> */}


          <section class=" margin-t72 wrap">
            <div class="container">
              <div class="row">
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
							<div class="wrap-input100 validate-input" data-validate="address is required">
								<input class="input100" type="text" name="address1" placeholder="Username" />
								<span class="focus-input100-1"></span>
								<span class="focus-input100-2"></span>
							</div>
							<div class="wrap-input100 validate-input" data-validate="address is required">
								<input class="input100" type="password" name="address1" placeholder="Password" />
								<span class="focus-input100-1"></span>
								<span class="focus-input100-2"></span>
							</div>
							<Select
								value={selectedOption}
								onChange={this.handleChange}
								placeholder="Select gender"
								options={optionsdd}
							/>
							<div class="wrap-input100 ">
								<input class="input100" type="date" name="birthdate" placeholder="Birthdate" />
							</div>
							<div class="wrap-input100">
								<PhoneInput
									placeholder="Phone number"
									value={this.state.phone}
									onChange={phone => this.setState({ phone })} />
							</div>

							<div class="wrap-input100 validate-input" data-validate="address is required">
								<input class="input100" type="email" name="address1" placeholder="Email" />
								<span class="focus-input100-1"></span>
								<span class="focus-input100-2"></span>
							</div>
							<div class="dist"></div>
							<button>Sign Up</button>
						</form>
					</div>
              </div>
             </div>

            </div>
           </section> 

         
          {/* <div class="zz-top"></div>
          <section class="wrap margin-t72">
<div class="bkg-cover  padding-72">



</div>
</section>

          <div class="zz-top-foo"></div> */}



        </div></div>
    );
  }


}

export default BulkRegistration;
