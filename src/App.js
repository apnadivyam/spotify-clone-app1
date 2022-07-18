import { useEffect } from "react";
import "./App.css";
import LogIn from "./components/log_in";
import { getTokenFromResponse } from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";
import Player from "./components/Player";
import { useStateValue } from "./dataLayer";

const spotify = new SpotifyWebApi();

function App() {
	// const [token, setToken] = useState(null);
	const [{ token }, dispatch] = useStateValue();

	useEffect(() => {
		const hash = getTokenFromResponse();
		window.location.hash = "";
		const _token = hash.access_token; // _ is a convention which means that it is temporary use variable
		// const _token = "jjjjjjjjjjjjjjjj";

		if (_token) {
			// setToken(_token);
			spotify.setAccessToken(_token);
			dispatch({
				type: "SET_TOKEN",
				token: _token,
			});

			spotify.getMe().then((user) => {
				dispatch({
					type: "SET_USER",
					user,
				});
			});
			spotify.getUserPlaylists().then((playlists) => {
				dispatch({
					type: "SET_PLAYLISTS",
					playlists,
				});
			});
			spotify.getPlaylist("37i9dQZEVXcPrT7uNC99bD").then((discover_weekly) => {
				dispatch({
					type: "SET_DISCOVER_WEEKLY",
					discover_weekly,
				});
			});
			spotify.getAvailableGenreSeeds((err, data) => {
				if (err) {
					console.log(err);
					return;
				}
				// console.log("getAvailableGenreSeeds => ", data?.genres);
				dispatch({
					type: "SET_GENRES",
					genres: data?.genres,
				});
			});
		}
	}, [dispatch]);

	// console.log("👦", user);
	// console.log("👽", token);
	// console.log("🔥", playlists);

	return <div className="app">{token ? <Player spotify={spotify} /> : <LogIn />}</div>;
}

export default App;
