export const authEndpoint = "https://accounts.spotify.com/authorize";
const redirectUri = "https://effulgent-taiyaki-e4817d.netlify.app/";
const clientId = "c011c4555a8c447b9654a5a3f455d757";
const scopes = [
	"user-read-currently-playing",
	"user-read-recently-played",
	"user-read-playback-state",
	"user-top-read",
	"user-modify-playback-state",
];

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
	"%20",
)}&response_type=token&show_dialog=true`;

export const getTokenFromResponse = () => {
	return window.location.hash
		.substring(1)
		.split("&")
		.reduce((initial, item) => {
			var parts = item.split("=");
			initial[parts[0]] = decodeURIComponent(parts[1]);

			return initial;
		}, {});
};
