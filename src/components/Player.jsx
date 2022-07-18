import React, { Component } from "react";
import "./css/player.css";
import Body from "./body";
import Footer from "./footer";
import Sidebar from "./sidebar";
// import Foot from "./footer";

class Player extends Component {
	render() {
		return (
			<div className="player">
				<div className="player_body">
					<Sidebar />
					<Body sotify={this.props.sotify} />
				</div>
				<Footer />
			</div>
		);
	}
}

export default Player;
