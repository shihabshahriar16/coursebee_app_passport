const Vimeo = require('vimeo').Vimeo;
const { VIMEO_CLIENT_ID, VIMEO_CLIENT_SECRET } = process.env
const client = new Vimeo(VIMEO_CLIENT_ID, VIMEO_CLIENT_SECRET);

const scopes = ["private", "delete", "upload", "video_files", "create"]
redirect_uri = "http://localhost:3000/mentor/dashboard/createcourse/"
const getVimeoAuthUrl = () => {
    var url = client.buildAuthorizationEndpoint(redirect_uri, scopes)
    return url
}

/*client.accessToken(code, redirect_uri, function (err, response) {
    if (err) {
        return response.end("error\n" + err);
    }

    if (response.access_token) {
        client.setAccessToken(response.access_token);

        // Other useful information is included alongside the access token,
        // which you can dump out to see, or visit our API documentation.
        //
        // We include the final scopes granted to the token. This is
        // important because the user, or API, might revoke scopes during
        // the authentication process.
        var scopes = response.scope;

        // We also include the full user response of the newly
        // authenticated user.
        var user = response.user;
    }
});*/

module.exports = {
    getVimeoAuthUrl: getVimeoAuthUrl
}