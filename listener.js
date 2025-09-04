(function () { 

    const selectors = {
        playControlButton: ".playControl.sc-ir.playControls__control.sc-button-play.sc-button-large.sc-mr-2x",
        playbackTimeline: ".playbackTimeline__progressHandle.sc-ir",
        playbackTimer: ".playbackTimeline__progressWrapper.sc-mx-1x",
        songTitle: ".playbackSoundBadge__titleLink.sc-truncate.sc-text-h5.sc-link-primary",
        songArtist: ".playbackSoundBadge__lightLink.sc-link-light.sc-link-secondary.sc-truncate.sc-text-h5",
    }

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
                        selectors.playControlButton,
                        playButton => playButton.classList.contains("playing") ? "playing" : "paused"
                    )
                );
                return true;

            case "getPlaybackTime_timeline":
                sendResponse(
                    checkThenExecute(
                        selectors.playbackTimeline,
                        playbackTimeline => parseFloat(playbackTimeline.style.left)
                    )
                );
                return true;

            case "getPlaybackTime_timer":
                sendResponse(
                    checkThenExecute(
                        selectors.playbackTimer,
                        playbackTimer => parseInt(playbackTimer.getAttribute('aria-valuenow'))
                    )
                 );
                return true;

            case "getSongMaxDuration_timer":
                sendResponse(
                    checkThenExecute(
                        selectors.playbackTimer,
                        songMaxDuration => parseInt(songMaxDuration.getAttribute('aria-valuemax'))
                    )
                );
                return true;

            case "getSongTitle":
                sendResponse(
                    checkThenExecute(
                        selectors.songTitle,
                        songTitle => songTitle.title
                    )
                )
                return true;

            default:
                ToolCloudUtils.warn("No action found with message:", message.action);
                break;
        }
    });


    function initDiscordRpc() {
        const trackData = {
                    title: checkThenExecute(
                        selectors.songTitle,
                        songTitle => songTitle.title
                    ),
                    artist: checkThenExecute(
                        selectors.songArtist,
                        songArtist => songArtist.title
                    ),
                    duration: checkThenExecute(
                        selectors.playbackTimer,
                        songMaxDuration => parseInt(songMaxDuration.getAttribute('aria-valuemax') * 1000) //rpc needs millisecnds
                    ),
                    position: checkThenExecute(
                        selectors.playbackTimer,
                        playbackTimer => parseInt(playbackTimer.getAttribute('aria-valuenow') * 1000) //rpc needs milliseconds
                    ),
                    songLink: checkThenExecute(
                        selectors.songTitle,
                        songLink => songLink.href
                    )
        }
        DiscordPresence.sendTrackData(trackData);
    }

    window.ToolCloudListener = {
        initDiscordRpc
    }

}) ();