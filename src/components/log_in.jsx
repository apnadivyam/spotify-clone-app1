import React from "react";
import "./css/log_in.css";
import { loginUrl } from "../spotify";

const LogIn = () => {
	return (
		<div className="login">
			{/* Spotify Logo */}
			<img
				src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
				alt="loading....."
			/>
			{/* Login Button */}
			<a href={loginUrl}>LOGIN WITH SPOTIFY</a>
			👉 Clone by Divyam Kumar 🔥🔥🔥
		</div>
	);
};

export default LogIn;
