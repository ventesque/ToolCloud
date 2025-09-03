function tick() {
    ToolCloudListener.initDiscordRpc();
}

const intervalId = setInterval(tick, 2000);

window.addEventListener("beforeunload", () => {
    clearInterval(intervalId);
});
