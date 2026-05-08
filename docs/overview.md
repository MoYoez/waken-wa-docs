---
sidebar_position: 2
---

# 🏠 概览

![picture 0](/articles/b09223e81dfd575878971a1b898b70021c45502d782804353d491a5d8fef2332.png)  

概览分为三部分：当前在线访客，快速添加活动和最近记录

## 当前在线访客

当前在线访客，本质上就是通过用户在短时间发送一个 /api/vistor REQ，记录短时间内存在的REQ，从而实现计数，实现上并不麻烦。

![picture 1](/articles/b9663973f98d26170fc5461f5386c26a0eb2d47eb4f209bff29cfbca1b9bf8d7.png)  

- 如果用户屏蔽了 Cookie，此机制应当会失效

## 快速添加活动

这个项目分为 Realtime 活动和 active 活动。

- Realtime 活动 代指：用户实时且在线的活动
- active 活动 代指：用户长期可持续的活动

> 请注意，Active 活动是可以被 Realtime 实时活动所覆盖，Realtime 活动理论上应当是最高优先级

其中快速活动作为 Active 活动，被用户添加。

如果用户通过 归属设备的 Web 添加，将会被视作为**一台新的，与其他设备隔离**的设备状态显示

如果选择其他设备，将会被视作**被选中的设备**的状态更新。

![picture 2](/articles/cf2957a634c8ba54ff244428dc0fb0fe3f23c38f85dc25c19de264dec19cf5f4.png)  

第一行一般是 设备显示名称，一般设备的名称显示都在这里

进程名称 和 进程标题 一般代指第二行，**可以被规则处理**

电量一般是可选的，如果填写了（或者上报了）一般会显示成这样子，这种一般在移动端上报会有显示

![picture 3](/articles/6c8169d8067f213419ecee22845ed21cc87deecfc1794abdb31d8b0a19451327.png)  

如果充电中，会有一个充电中的标识。


## 最近活动

一般是展示最近的五条活动，如果是本身是 Active 属性的 活动，可以在此处被 提前结束

![picture 4](/articles/cb4f5cd448a8746579743d463a8341b7f92ed49d95315243bd1f5407b0907f87.png)  

### API

* 请开启 后台的 API 开放 OpenAPI 文档后，访问此路由查看

api-reference#tag/device/POST/api/activity