import React from 'react'
import '../Css/login.css'
import Navbar from '../Components/Navbar.js'
export default function Login() {
	return (
		<>
			<Navbar />
			<div className="container">
				<form action="login.php" className="form" method="POST">
					<h2>SIGN IN</h2>
					<input type="text" className="box" name="username" value="" placeholder="Username" />
					<input type="password" className="box" name="password" value="" placeholder="Password" />
					<input type="submit" className="box" id="sub" value="Log In" />
					<br /><br />
					<p className="link">Don't Have an Account<br />
						<a href="Registration.php" >Sign up</a> here</p>
				</form>

				<div className="side">
					<img src="/media/logo.svg" alt="" />
				</div>
			</div>
		</>
	)
}
