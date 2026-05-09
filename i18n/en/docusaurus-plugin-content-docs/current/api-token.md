---
sidebar_position: 6
---

# 🔑 API Token

![picture 0](/articles/f776c3f652d08bcf77660c3b2cb5bd290b272834846e960593ee21c4e2a3471c.png)  

> If you have used AI gateways or relay services before, the idea is similar, though the implementation here is a bit different.

## Manage reporting credentials and access settings

An API token here is the unique authorization key for a user. It means **this key can modify and submit records**.

To avoid a user reusing the same key and accidentally pushing the wrong status to different devices, the key is also bound to a HashKey. That is why the first approval step is required.

:::tip
You may not know what HashKey means. In this project, we call it an identity badge.

In general, the Waken-Wa Reporter can create one automatically. Any random SHA-256-based string under 256 bytes works.

You can also create one yourself.
:::

:::tip
If you think this step is unnecessary, you can enable automatic approval in the admin settings.

Still, one identity badge maps to one key. If device A is bound with key A and then reported with key B, the system will still ask for a change.

The identity badge is one of the device's unique credentials. When sharing screenshots externally, make sure to blur it. **It is just as important as the API key.**

~~If you ask why I did not blur mine, it is because this is a test machine and I will switch the database back after finishing the tutorial.~~
:::
