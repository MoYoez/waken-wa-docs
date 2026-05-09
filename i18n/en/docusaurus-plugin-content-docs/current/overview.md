---
sidebar_position: 2
---

# 🏠 Overview

![picture 0](/articles/b09223e81dfd575878971a1b898b70021c45502d782804353d491a5d8fef2332.png)  

The overview is split into three parts: current online visitors, quick activity entry, and recent records.

## Current online visitors

This section counts visitors by recording short-lived `/api/vistor` requests sent within a short time window. The implementation is fairly simple.

![picture 1](/articles/b9663973f98d26170fc5461f5386c26a0eb2d47eb4f209bff29cfbca1b9bf8d7.png)  

:::info
If the user blocks cookies, this mechanism should stop working.
:::

## Quick activity entry

This project uses two kinds of activity:

- Realtime activity: user activity that is live and online right now
- Active activity: longer-lived activity that can stay in place for a while

:::warning
Note that Active activity can be overridden by Realtime activity. Realtime activity should have the highest priority.
:::

Quick activity entries are created as Active activity.

If the user adds it through the owning device's web interface, it will be treated as **a new device state isolated from other devices**.

If another device is selected, it will be treated as a state update for **the selected device**.

![picture 2](/articles/cf2957a634c8ba54ff244428dc0fb0fe3f23c38f85dc25c19de264dec19cf5f4.png)  

The first line is usually the device display name.

The process name and process title usually map to the second line, and **can be processed by rules**.

Battery is optional. If it is filled in or reported, it usually shows up like this, especially on mobile devices.

![picture 3](/articles/6c8169d8067f213419ecee22845ed21cc87deecfc1794abdb31d8b0a19451327.png)  

If the device is charging, a charging badge will appear.

## Recent activity

This usually shows the latest 20 activities (version 0.70+; older versions showed 5). Active activities can also be ended early here.

![picture 4](/articles/cb4f5cd448a8746579743d463a8341b7f92ed49d95315243bd1f5407b0907f87.png)  

### API

* Make sure the admin OpenAPI docs are enabled, then visit this route:

api-reference#tag/device/POST/api/activity
