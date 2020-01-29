import React from "react";
import './Login.css';


class Now extends React.Component {
		  
	
	render() {
	
		return (
		
			<div className="Login">
				<title>Home </title>
				<meta charSet="UTF-8"></meta>
				<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
					<div className="containerTest" id="containerTest">
						<div class="form-container sign-in-container">
							<form action="#"  >
								<h1>Sign in</h1>
								<div class="social-container">
									<a href="#" class="social1"></a>
									<a href="#" class="social2"></a>
									<a href="#" class="social3"></a>
								</div>
                                <div class="dist"></div>
								<input class="inputlogin" type="email" placeholder="Email" />
								<input class="inputlogin" type="password" placeholder="Password" />
								

								<br></br>
								<button>Sign In</button>
								<a href="#">Forgot your password?</a>
								<a href="/#/Home">Back To Home</a>
								<a href="/Register">Not a user? Register here!</a>
							</form>
						</div>
						<div class="overlay-container">
							<div class="overlay">
								
								<div class="overlay-panel overlay-right">
								<h1>Welcome Back!</h1>
									<p>To keep connected with us please login with your personal info</p>
									
								</div>
							</div>
						</div>

					</div>
				
			</div>
		);
	}

}

export default Now;


// import React from "react";
// import './Login.css';


// class Now extends React.Component{
//     render()
//     {
//         return(
//             <div className="Login">
//  <title>Home </title>
//        <meta charSet="UTF-8"></meta>
       
       
//                     <div className="containerTest" id="containerTest11"> 
//      <div class="form-container sign-up-container"> 
//         <form action="#" >
//             <h1>Create Account</h1>
//             <div class="social-container">
//                 <a href="#" class="social"><i class="fab fa-facebook-f"></i></a>
//                 <a href="#" class="social"><i class="fab fa-google-plus-g"></i></a>
//                 <a href="#" class="social"><i class="fab fa-linkedin-in"></i></a>
//             </div>
//             <span>or use your email for registration</span>
//             <input type="text" placeholder="Name" />
//             <input type="email" placeholder="Email" />
//             <input type="password" placeholder="Password" />
//             <input type="password" placeholder="Password" />
//             <input type="date"   name="birthdate" />           
                              
//             <button>Sign Up</button>
//         </form>
//     </div>
//     <div class="form-container sign-in-container">
//         <form action="#"  >
//             <h1>Sign in</h1>
//             <div class="social-container">
//                 <a href="#" class="social"><i class="fab fa-facebook-f"></i></a>
//                 <a href="#" class="social"><i class="fab fa-google-plus-g"></i></a>
//                 <a href="#" class="social"><i class="fab fa-linkedin-in"></i></a>
//             </div>
//             <span>or use your account</span>
//             <input type="email" placeholder="Email" />
//             <input type="password" placeholder="Password" />
//             <a href="#">Forgot your password?</a>
//             <button>Sign In</button>
//         </form>
//     </div>
//     <div class="overlay-container">
//         <div class="overlay">
//             <div class="overlay-panel overlay-left">
//                 <h1>Welcome Back!</h1>
//                 <p>To keep connected with us please login with your personal info</p>
//                 <button class="ghost" id="signIn"  onClick={this.Signin}>Sign In</button>
//             </div>
//             <div class="overlay-panel overlay-right">
//                 <h1>Hello, Friend!</h1>
//                 <p>Enter your personal details and start journey with us</p>
//                 <button class="ghost" id="signUp" onClick={this.Signup}>Sign Up</button>
//             </div>
//         </div>
//     </div>

// </div>
// </div>      
//             );
//     }
//     componentDidMount(){
//         const signUpButton = document.getElementById('signUp');
//       const signInButton = document.getElementById('signIn');
//       const container111 = document.getElementById('containerTest11');
      
//       signUpButton.addEventListener('click', () => {
//           container111.classList.add("right-panel-active");
//       });
      
//       signInButton.addEventListener('click', () => {
//           container111.classList.remove("right-panel-active");
//       });
//       }
// }

// export default Now;