import React from "react";
import "./css/footer.css";
import PlayCircleOutlinedIcon from "@mui/icons-material/PlayCircleOutlined";

// import SkipNextIcon from "@mui/icons-material/SkipNext";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import ShuffleIcon from "@mui/icons-material/Shuffle";
import RepeatIcon from "@mui/icons-material/Repeat";
// import RepeatOneIcon from "@mui/icons-material/RepeatOne";
// import ReplayIcon from "@mui/icons-material/Replay";

import { Grid, Slider } from "@mui/material";
import VolumeDownIcon from "@mui/icons-material/VolumeDown";
import PlaylistPlayIcon from "@mui/icons-material/PlaylistPlay";

export default function Footer() {
	return (
		<div className="footer">
			<div className="footer_left">
				<img
					className="footer_albumLogo"
					src="https://i.scdn.co/image/ab67616d00001e021c41f8da1a63e589a82e79d7"
					alt=""
				/>
				{false ? (
					<div className="footer_songInfo"></div>
				) : (
					<div className="footer_songInfo">
						<h4>Warfare</h4>
						<p>Satara</p>
					</div>
				)}
			</div>
			<div className="footer_center">
				<ShuffleIcon className="footer_green" />
				<SkipPreviousIcon className="footer_icon" />
				<PlayCircleOutlinedIcon fontSize="large" className="footer_icon" />
				<SkipPreviousIcon className="footer_icon" />
				<RepeatIcon className="footer_green" />
			</div>
			<div className="footer_right">
				<Grid className="footer_right_grid" container spacing={2}>
					<Grid item>
						<PlaylistPlayIcon />
					</Grid>
					<Grid item>
						<VolumeDownIcon />
					</Grid>
					<Grid item xs>
						<Slider aria-labelledby="continuous-slider" />
					</Grid>
				</Grid>
			</div>
		</div>
	);
}
