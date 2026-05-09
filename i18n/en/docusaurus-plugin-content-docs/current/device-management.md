---
sidebar_position: 5
---

# 📱 Device Management

![picture 0](/articles/0d88a1963b3053e91cfe99625b2f9db8ed9236aa19ffa2abace1bb5f43b34721.png)  

## Quick device binding

![picture 1](/articles/f89cb443927739f0397255f9fe28f49e34d02ea73ee9bebfc476ac8517d99c1b.png)  

:::info
You usually will not need this.
:::

Use case: if a client does **not have the Waken-Wa client installed normally, but still needs to report and display status**, you can pre-bind it here.

This is useful for AppleScript / Shortcuts setups that report Active activity.

See the reporting docs for more details.

## Device list

![picture 2](/articles/60266cc736d0fdf0b242f592920ac59327a169e0e9a0ff482eefd06c4653def6.png)  

The search box on the left can filter by name or key, while the status filters on the right narrow down the current device state.

### Pinning devices to the top

Waken-Wa sorts multiple devices by priority. If nothing is pinned, the device will stay at the top.

### Show Steam gameplay on the status card

:::warning
Steam integration must be configured in the admin panel first.
:::

It looks like this:

![picture 3](/articles/48b25235b36351c7d0239a3ca2a48630392a792aa75596cc863fd67df5b5f0bf.png)  

> This only appears when the device is online and Steam gameplay display is enabled.

> If there is no music info, this block shifts left and uses the music slot.

### Custom status settings

![picture 4](/articles/94cfb01f8c9e8ee3152731d83265a37f6ad76ceb8ac99e7492d6ab0f9b15947c.png)  

#### Offline / lock screen state

If a device is offline but you still want it to be shown, use this feature.

After startup, if the device does not report data in time and the feature is enabled, the configured state here will be used.

![picture 5](/articles/c2467227be87fb6827422883e9959ec7e9e1842bdb9c5c0271e893492ee782f9.png)  

If it is a lock screen state, the icon changes to <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-hourglass-icon lucide-hourglass"><path d="M5 22h14"/><path d="M5 2h14"/><path d="M17 22v-4.172a2 2 0 0 0-.586-1.414L12 12l-4.414 4.414A2 2 0 0 0 7 17.828V22"/><path d="M7 2v4.172a2 2 0 0 0 .586 1.414L12 12l4.414-4.414A2 2 0 0 0 17 6.172V2"/></svg>

:::tip

Lock screen handling only covers two cases: Windows 11 `lockAPP` and macOS `LockWindows`.

Other cases are not handled. If your system does not work, please open an issue.

:::
