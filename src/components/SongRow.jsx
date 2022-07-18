import React from "react";
import "./css/SongRow.css";

export default function SongRow({ track }) {
	return (
		<div className="songRow">
			<img src={track.album.images[2].url} alt="track album image" />
			<div className="songRow_info">
				<h1>{track.name}</h1>
				<p>
					{track.artists.map((artist) => artist.name).join(", ")}
					{track.album.name}
				</p>
			</div>
		</div>
	);
}
