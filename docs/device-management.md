---
sidebar_position: 5
---

# 📱 设备管理

![picture 0](/articles/0d88a1963b3053e91cfe99625b2f9db8ed9236aa19ffa2abace1bb5f43b34721.png)  


## 快速添加设备部分

![picture 1](/articles/f89cb443927739f0397255f9fe28f49e34d02ea73ee9bebfc476ac8517d99c1b.png)  

:::info
 一般来说，你用不到这个
:::

适用场景：如果有的 客户端 ，**并没有正常装 Waken-Wa 客户端，但还是想正常能上报并展示相关状态**，可以使用这个进行预先绑定 

适用于 AppleScript（快捷指令），上报 Active 活动。

具体可以参考上报相关的文档。


## 设备管理列表

![picture 2](/articles/60266cc736d0fdf0b242f592920ac59327a169e0e9a0ff482eefd06c4653def6.png)  

左侧的搜索可以通过 名称 / Key 进行搜索， 右侧的状态可以筛选目前设备的状态。

### 设备置顶显示

目前 Waken-Wa 对于 多个设备的排序策略如下：以最优先为准，如果没有置顶的处理，将会一直在最顶部。

### 状态卡片显示 Steam 正在游玩

:::warning
需要在后台进行配置 Steam 集成
:::

效果如下：

![picture 3](/articles/48b25235b36351c7d0239a3ca2a48630392a792aa75596cc863fd67df5b5f0bf.png)  

> 仅当此设备在线并且有配置 Steam 游玩显示的时候才会出现

> 如果音乐不存在的话，这部分会自动移位到左侧，即使用音乐的位置展示

### 自定义状态配置

![picture 4](/articles/94cfb01f8c9e8ee3152731d83265a37f6ad76ceb8ac99e7492d6ab0f9b15947c.png)  

#### 离线状态 / 锁屏状态

如果设备不在线，但是想显示出来，可以使用此功能

一般启动后，如果设备并没有及时上报相关数据，且相关功能启用了，将会使用此时设置的状态

![picture 5](/articles/c2467227be87fb6827422883e9959ec7e9e1842bdb9c5c0271e893492ee782f9.png)  

如果是锁屏的话，则 Icon 会变成<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-hourglass-icon lucide-hourglass"><path d="M5 22h14"/><path d="M5 2h14"/><path d="M17 22v-4.172a2 2 0 0 0-.586-1.414L12 12l-4.414 4.414A2 2 0 0 0 7 17.828V22"/><path d="M7 2v4.172a2 2 0 0 0 .586 1.414L12 12l4.414-4.414A2 2 0 0 0 17 6.172V2"/></svg>

:::tip

锁屏的处理只做了两种：Win 11 下的 lockAPP 和 MacOS 的 LockWindows

其他的情况没有做处理，如果发现您的系统不工作，可以发issue

:::