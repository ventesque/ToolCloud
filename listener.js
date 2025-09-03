(function () { 

    function checkThenExecute(selector, fn) {
        const element = document.querySelector(selector);
        if (!element) {
            return "unknown";
        }
        
        return fn(element);
    }

    chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
        switch (message.action) {
            case "skip":
                ToolCloudPlayer.skipControl();
                break;

            case "previous":
                ToolCloudPlayer.previousControl();
                break;

            case "play":
                ToolCloudPlayer.playControl();
                break;

            case "getPlaybackStatus":
                sendResponse(
                    checkThenExecute(
                        ".playControl.sc-ir.playControls__control.sc-button-play.sc-button-large.sc-mr-2x",
                        playButton => playButton.classList.contains("playing") ? "playing" : "paused"
                    )
                );
                return true;

            case "getPlaybackTime_timeline":
                sendResponse(
                    checkThenExecute(
                        ".playbackTimeline__progressHandle.sc-ir",
                        playbackTimeline => parseFloat(playbackTimeline.style.left)
                    )
                );
                return true;

            case "getPlaybackTime_timer":
                sendResponse(
                    checkThenExecute(
                        ".playbackTimeline__progressWrapper.sc-mx-1x",
                        playbackTimer => parseInt(playbackTimer.getAttribute('aria-valuenow'))
                    )
                 );
                return true;

            case "getSongDuration_timer":
                sendResponse(
                    checkThenExecute(
                        ".playbackTimeline__progressWrapper.sc-mx-1x",
                        songDuration => parseInt(songDuration.getAttribute('aria-valuemax'))
                    )
                );
                return true;

            case "getSongTitle":
                sendResponse(
                    checkThenExecute(
                        ".playbackSoundBadge__titleLink.sc-truncate.sc-text-h5.sc-link-primary",
                        songTitle => songTitle.title
                    )
                )
                return true;

            default:
                ToolCloudUtils.warn("No action found with message:", message.action);
                break;
        }
    });

}) ();