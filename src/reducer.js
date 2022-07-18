export const initialStatef = {
	user: null,
	token: null,
	playlists: [],
	genres: [],
	discover_weekly: {
		tracks: {
			items: [
				{
					track: {
						album: {
							name: "hh",
							images: [{ url: "hh" }, { url: "hh" }, { url: "hh" }],
						},
						name: "hh",
						artists: [{ name: "hh" }],
					},
				},
			],
		},
		images: [{ url: "hh" }],
		discription: "hh",
	},
	playing: false,
	item: null,
};

const reducerf = (state, action) => {
	// action -> type , [payload]
	console.log(action);
	switch (action.type) {
		case "SET_USER":
			return { ...state, user: action.user };
		case "SET_TOKEN":
			return { ...state, token: action.token };
		case "SET_PLAYLISTS":
			return { ...state, playlists: action.playlists };
		case "SET_GENRES":
			return { ...state, genres: action.genres };
		case "SET_DISCOVER_WEEKLY":
			return { ...state, discover_weekly: action.discover_weekly };
		default:
			return state;
	}
};

export default reducerf;
