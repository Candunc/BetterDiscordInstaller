//This is really a waste, but AppleScript doesn't do javascript, and we already have node...
var https = require('https');

//Download using https - Taken from the BetterDiscord source code.
function download(host, path, callback) {
    var options = {
        host: host,
        path: path,
        headers: {'user-agent': 'Mozilla/5.0'},
    }

    https.get(options, function(res) {
        var data = "";
        res.on('data', function(chunk) {
            data += chunk;
        });
        res.on("end", function() {
            callback(data);
        });
    }).on("error", function() {
        console.log("error");
        callback(null);
    });
}

download("api.github.com", "/repos/Jiiks/BetterDiscordApp/releases/latest", function(raw) {
    _info = JSON.parse(raw);
    console.log(_info["assets"][0]["browser_download_url"]);
});