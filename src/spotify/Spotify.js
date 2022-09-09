
const clientId = "1a84bdd09b1c44709570c14b848ea428";
const redirectUri = "http://localhost:3000/";

const scopes = [
    "user-library-modify",
    "user-library-read",
    "ugc-image-upload",
    "user-modify-playback-state",
    "user-read-playback-state",
    "user-read-currently-playing",
    "user-follow-modify",
    "user-follow-read",
    "user-read-recently-played",
    "user-read-playback-position",
    "user-top-read",
    "playlist-read-collaborative",
    "playlist-modify-public",
    "playlist-read-private",
    "playlist-modify-private",
    "app-remote-control",
    "streaming",
    "user-read-email",
    "user-read-private",
].join(',');



export const loginUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes}&response_type=token&show_dialog=true`;


export const getToken = () => {
    return window.location.hash
        .substring(1)
        .split('&')
        .reduce((initial, item) => {
            let parts = item.split('=');
            initial[parts[0]] = decodeURIComponent(parts[1]);

            return initial;
        }, {});
}

