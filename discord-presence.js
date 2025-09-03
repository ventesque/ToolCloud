(function () {
    const WS_URL = "ws://localhost:3000";

    let ws = null;
    function connect() {
        ws = new WebSocket(WS_URL);

        ws.onopen = () => ToolCloudUtils.log("Bridge connected");
        ws.onclose = () => setTimeout(connect, 5000);
    }

    connect();

    function sendTrackData(trackData) {
        ws.send(JSON.stringify(trackData));
    }

    window.DiscordPresence = {
        sendTrackData,
    };
}) ();