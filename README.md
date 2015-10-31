# BetterDiscordInstaller

This software is a 'batteries included'  installer for [BetterDiscord](https://github.com/Jiiks/BetterDiscordApp/), written in AppleScript and [Node.js](https://nodejs.org/en/).

If you have probems with BetterDiscord, this is _not_ the proper repository for it. Please head to [Jiiks' Repository](https://github.com/Jiiks/BetterDiscordApp/) if you have any problems.

##Known Issues

* This outright doesn't work! Give me my <del>money</del> time back!
 * Uh, this is _somewhat_ my fault, the script requires a way to bypass the prompt in the installer file, however the BetterDiscord repository doesn't yet include my modification. After my fork gets merged, you'll probably have better luck.

* No progress window 
 * This is a limitation of the AppleScript, the progress window only works on OS X 10.10 or later. I did not include an alternate success message, as I didn't want duplicate popups on OS X 10.10. This _could_ be patched at a later time. :P
* Support for other operating systems
 * Believe it or not, AppleScript isn't compatible with Microsoft Windows. And, since there is no linux support for Discord, I didn't bother looking to see if this was possible. 