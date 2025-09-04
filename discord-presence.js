// this is meant to be used with the script on my github:
// https://github.com/ventesque/Discord-RPC-for-ToolCloud
// to display a discord rich presence about the current
// song details

(function () {
    const WS_URL = "ws://localhost:3000";

    let ws = null;
    function connect() {
        // opens a websocket to communicate with the rpc script
        ws = new WebSocket(WS_URL);

        ws.onopen = () => ToolCloudUtils.log("Bridge connected");
        ws.onclose = () => setTimeout(connect, 5000);
    }

    connect();

    // communication function
    function sendTrackData(trackData) {
        ws.send(JSON.stringify(trackData));
    }

    window.DiscordPresence = {
        sendTrackData,
    };
}) ();