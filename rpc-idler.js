// this script calls the function that sends song info to the 
// discord rich presence websocket every 2 seconds 

function tick() {
    ToolCloudListener.initDiscordRpc();
}

const intervalId = setInterval(tick, 2000);

window.addEventListener("beforeunload", () => {
    clearInterval(intervalId);
});
