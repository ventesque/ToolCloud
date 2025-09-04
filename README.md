# ToolCloud
This is a Firefox Browser-Addon designed to provide a variety of Quality of Life improvements to the SoundCloud.com Browser App. You can find it [here](https://addons.mozilla.org/en-US/firefox/addon/toolcloud/).

 This Browser-Addon only works with data from SoundCloud.com.  
 It accesses no data from any other websites and will automatically be disabled if you don't have a SoundCloud.com tab open.

# Features:
All features in this Browser-Addon will only work if toggled on via checkbox in the Addon overlay unless specifically stated otherwise.

## Auto-Scroll Playlists
Checks for URL changes every 1 second. When detecting a URL change where the URL contains "/sets/", this feature will automatically:
- scroll to the bottom of the playlist to load all of its songs
- scroll back to the top

__Caution:__ If this feature is enabled alongside other, similar features it might get overruled by them.

## Auto-Play Playlists on Shuffle
Checks for URL changes every 1 second. When detecting a URL change where the URL contains "/sets/", this feature will automatically:
- scroll to the bottom of the playlist to load all of its songs
- scroll back to the top for a better user experience
- activate shuffle, if not already activated 
- start playback on the playlist
- skip the first song for a true shuffle experience

__Caution:__ If this feature is enabled alongside other, similar features it might get overruled by them or overrule them.

## Playcontrol
A playback timeline in the addons shows you the current songs progress.
From there you can use previous, skip, play/pause buttons in the addon itself.

Control SoundCloud from __anywhere__ in your browser!

## Discord Rich Presence integration
There is a Discord Rich Presence integration baked into this Addon but it will only worked if used with the [Discord Rich Presence script](https://github.com/ventesque/Discord-RPC-for-ToolCloud).

When used together this will automatically display current song info on your discord rich presence.

## Credit:
Icons provided by: Md Tanvirul Haque: https://www.flaticon.com/authors/md-tanvirul-haque