import React from "react";
import "./css/header.css";
import SearchIcon from "@mui/icons-material/Search";
import { Avatar } from "@mui/material";
import { useStateValue } from "../dataLayer";

function Header({ spotify }) {
	const [{ user }] = useStateValue();

	return (
		<div className="header">
			<div className="header_left">
				<SearchIcon />
				<input placeholder="Search for Songs, Artists ans more" type="text" />
			</div>
			<div className="header_right">
				<Avatar src={user?.images[0]?.url} alt="dk" />
				<p>{user?.display_name}</p>
			</div>
		</div>
	);
}

export default Header;
