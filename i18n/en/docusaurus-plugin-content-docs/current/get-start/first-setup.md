---
sidebar_position: 3
toc_min_heading_level: 2
toc_max_heading_level: 4
---

# First Setup

## Open the site first

If everything is working, you should see your site configuration at http://localhost:3000.

If you are not deploying locally, use the address shown in the network panel as a reference:

![picture 3](/articles/358cea1a54775d7e259588ebe9862139ebc0515d4dd80f4858c631c56fd5e679.png)  

Try visiting the address shown under Network. If it is not reachable, consider setting up a reverse proxy so the service can be accessed.

This guide will not go further into reverse proxy setup, since that belongs outside the core first-run flow.

Some control panels also provide Docker reverse proxy services, which can work fine as well.

## Basic setup

![picture 5](/articles/849759bc82e8d836f3adff9ca7dd5fa77bbd0c8d41bf9a1761c56a5f2fb1456b.png)  

If everything is OK, this is the first set of fields you should see.

### Admin information

Start with the minimum required setup: configure the admin information. This becomes the credential you use to log in later, so keep it private.

:::tip
Use a reasonably strong password that you can still remember. Avoid very simple passwords such as `123456` or `password`; the setup helper will not accept them lightly.
:::

### Homepage profile

#### Site title

In most cases, this refers to the title shown here:

![picture 6](/articles/0331b72023a5df5769656c703950f36722c2bbc03624020d07448b33a8c971b5.png)  

It also affects search engine indexing:

![picture 7](/articles/c0441163246386fe7d98e63b5e0ca74c57976195be96f3309533a28c46be8d34.png)  

#### Homepage name

This is generally the public display name:

![picture 8](/articles/4701eafcf8053bffc64437467a4927d2a921b61813cfbe8b429b78cfccdc86d6.png)  

#### Homepage description

This usually describes your identity or positioning:

![picture 9](/articles/960b4bd25a3d74110557f61b90cb8642ed79fe687efbdeaeeab93f541b614b12.png)  

#### Homepage note

This section can be customized manually, or later replaced with Hitokoto in the settings:

![picture 10](/articles/8792bafdb0ba2c2479cd0285515005eaf9210b3c6e629921cbcb4f6f78b48af4.png)  

#### Avatar URL

This field supports avatar sources such as Gravatar / Cravatar. If you have one, paste it here.

If not, you can upload an avatar manually.

![picture 11](/articles/aa3e03323f648994ceba8fd8eaffa56b6e84eb589d8f8714733993be61c721ac.png)  

:::tip
- Remote avatar URL detected. Allow the server to fetch the avatar?

This option helps users who cannot directly access remote avatar services. For example, Gravatar may not be reachable from mainland China, and this server-side fetch can work around that.
:::

#### Other settings

![picture 12](/articles/0c014d9d30af0d6c9f58dcb10673ee97c774e0005ce49d436a61215fd82f7224.png)  

- History display window (minutes): the time range in which the public site can show your public activity. It is commonly used by quick activity entry and some API logic. In most cases you do not need to change it.

- "Current" section title:

![picture 13](/articles/c1106def821f007306ff180546c951b1cbd0c60631f99dcd5a2d171514e25715.png)  

This is the text field for that section. You can edit it. It does not automatically change with the language environment.

- Inspiration section title:

![picture 14](/articles/6429de00eca44ea604b86d10f978df7b94ef9fabfcbd8931a1363cefd886a4de.png)  

This is the text field for that section, with the same display rule as the "Current" section title.

- Admin entry text:

![picture 15](/articles/49bd0bb857482fa20d8fa014e58b1755a5b0a73aea38bf87267acfe57b31b9d1.png)  

This controls the text shown in that location.

## Client configuration

Once the basic section is complete, you can start configuring the device-side client.

Download the required client here:

[Waken-Wa-Reporter](https://github.com/MoYoez/waken-wa-reporter/releases/latest)

![picture 16](/articles/4f22667356bc75f2a1386c54518772c701c4da1bfe7151e66c4a9032022a60b6.png)  

In general, only the PC client supports full sync. Other platforms are limited for now; Android can do basic app-usage sync.

Most of the time:

- `x64-setup.exe` / `x64_en-US.msi` are for Windows
- `amd64.deb` / `amd64.AppImage` are for Linux
- `aarch64.dmg` is for macOS
- `apk` / `js` are usually for Android, but support is not complete. You can download the [Auto JS](https://github.com/MoYoez/waken-wa-reporter/releases/download/v0.40/activity.js) version for sync

The remaining steps use Windows as the example:

:::tip
On macOS, the app may be reported as damaged on first launch. Run `sudo xattr -c` in Terminal, then drag the app into Terminal to complete the path.

On first setup, the app may default to English. Use Maybe Later -> Setting to change the language, then restart.
:::

![picture 17](/articles/74e194d5946b44377e4c5f399457162c2fb8444173c45298b2414c69d28cea8e.png)  

Open settings. The client will ask for Base64 configuration information.

At this point, generate an API token from the web admin panel that is allowed to access the service.

![picture 18](/articles/0d52df4f5b70d58cd23242800fabee985065916a1d3c2bf2e5f82b68ac66be01.png)  

Use a token name you can recognize.

![picture 19](/articles/9bd374629e7e1220c9ef809ffbc8edd7cecbde35fc249c7a93f7e9a7d5e83d4b.png)  

You will usually receive two values. In most cases, the one-click access configuration is all you need.

![picture 20](/articles/4c3f312f2dbee2804274d43e6838eed73e5b068a1c6678e6d58673486c304cc7.png)  

Return to the client and paste the configuration here.

![picture 21](/articles/78de9f70b37ad48e6ff8199cfb29c552811082520515798d5a98617e20cfe5df.png)  

![picture 22](/articles/f72e396740bd7c15cd9e357aa253a611c0aad2402418e43cb98b2aa8254dbadf.png)  

If this popup appears, the setup is generally fine. Complete the flow.

### Extra: platform check

> This mainly matters for non-Windows platforms.

Because each platform is implemented differently, platforms other than Windows need different handling.

You can verify whether everything works through Reporter Settings -> Manage sync status -> Platform check.

![picture 23](/articles/a13f596273e838e899e844169cf20faf9956c34de03c7ff647a55902962a3b48.png)  

#### macOS

On macOS, window title capture uses [axuielement_h](https://developer.apple.com/documentation/applicationservices/axuielement_h). This requires accessibility permissions. **You need to grant accessibility permission, otherwise most apps cannot provide titles.**

> v0.60+ uses a bridge to call Objective-C through [mediaremote-adapter](https://github.com/ungive/mediaremote-adapter). This may include breaking changes. If you care about security details, review their project first.

:::warning

Before v0.60, `nowplaying-cli` is required for song information.
:::

After these steps, most macOS setups should work.

#### Linux

- Audio

Audio is implemented through the `mpris` library. Install it through your distribution's package source.

- X11

For any X11 desktop, no extra action is needed to capture desktop content.

- Wayland

Currently only KDE and GNOME are supported.

1. GNOME: uses `Focused Window D-Bus`
2. KDE Plasma: uses `kdotool`

###### GNOME

Preferred support:

- GNOME Shell extension [Focused Window D-Bus](https://extensions.gnome.org/extension/5592/focused-window-d-bus/)
- `gdbus`

##### KDE Plasma

Preferred support:

- [`kdotool`](https://github.com/jinliu/kdotool)

### Enable the device

After clicking allow, the device usually needs approval in the specified location.

![picture 24](/articles/5dcf69a3a6b234396df209ca71c88dda57068f45802132e1e889a6b38c54d454.png)  

You can approve it through the link, or from the device management page.

![picture 25](/articles/81e9458241703ffc4bdbcc6a76583b2e902b043ac6aa45e910e033dd081c9bff.png)  

Devices that require approval usually show this button. Click it.

![picture 26](/articles/795b58802c6e81f0d1fbb420a7842bea653472e6079bc2146008d2a805334d6b.png)  

Compare the information. If it looks right, approve it.

![picture 27](/articles/8cc32e5d122d8fdf29a2139b29b3de1b9163f1cdd97168b5dd2cbe701a0e22d5.png)  

## Congratulations!

The first basic step is complete. You can now move on to other settings.
