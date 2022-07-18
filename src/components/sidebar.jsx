import React from "react";
import SidebarOption from "./sidebarOption";
import "./css/sidebar.css";
import HomeIcon from "@mui/icons-material/Home";
import SearchSharpIcon from "@mui/icons-material/SearchSharp";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";
import { useStateValue } from "../dataLayer";

export default function Sidebar() {
	const [{ playlists, genres }] = useStateValue();
	// console.log("playlsist +=>", playlists);
	return (
		<div className="sidebar">
			<img
				className="sidebar_logo"
				src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
				alt="spotify logo"
			/>
			<SidebarOption Icon={HomeIcon} title="Home" />
			<SidebarOption Icon={SearchSharpIcon} title="Search" />
			<SidebarOption Icon={LibraryMusicIcon} title="Your Library" />
			<div className="sb_title">
				<h5>PLAYLIST</h5>
			</div>
			{playlists?.items?.map((playlist) => (
				<SidebarOption title={playlist.name} />
			))}
			<div className="sb_title">
				<h5>GENRES</h5>
			</div>
			<select name="kk" id="kk">
				{genres.map((x) => (
					<option>{x}</option>
				))}
			</select>
		</div>
	);
}
