---
sidebar_position: 3
toc_min_heading_level: 2
toc_max_heading_level: 4
---

# 首次配置


## 首先，要先进去吧x

好欸！如果一切正常的话，你应该在 http://localhost:3000 看到你的网站配置了！

如果你不是在本地部署的话，可以参考这个w:

![picture 3](/articles/358cea1a54775d7e259588ebe9862139ebc0515d4dd80f4858c631c56fd5e679.png)  

具体按照 NetWork 展示的地址可以尝试访问，如果没有的话，可以考虑一下配置反向代理之类的以确保能访问到

本文就在这里不继续讲述了，毕竟这属于之外的内容。

当然了，一些面板也有提供 Docker 的 反向代理服务，可以用服务挂上去 也是 OK 的。


## 简单的基础设置

![picture 5](/articles/849759bc82e8d836f3adff9ca7dd5fa77bbd0c8d41bf9a1761c56a5f2fb1456b.png)  

如果一切 Ok 的话，您应该是先看到这些内容

### 管理员信息

按照最小的原则，首先你需要配置 管理员信息，这是用来作为您以后登录的凭证，可千万不能给坏人了哦xwx，不然就被看光光了！坏欸！/(*/ω＼*)

尽量设置一个复杂的密码哦，当然你要能记住，不要太简单的 123456 和 password 了啦！这边的小工具可不会就这样随便通过你的密码！

### 首页资料

#### 网站标题

大部分情况下，指的都是这个

![picture 6](/articles/0331b72023a5df5769656c703950f36722c2bbc03624020d07448b33a8c971b5.png)  

同时也会影响搜索引擎的检索

![picture 7](/articles/c0441163246386fe7d98e63b5e0ca74c57976195be96f3309533a28c46be8d34.png)  

#### 首页名称

一般是指这个，大部分情况下 我们都会使用此名字（即对外展示）

![picture 8](/articles/4701eafcf8053bffc64437467a4927d2a921b61813cfbe8b429b78cfccdc86d6.png)  

#### 首页简介

一般是这个，可以声明为自己的定位

![picture 9](/articles/960b4bd25a3d74110557f61b90cb8642ed79fe687efbdeaeeab93f541b614b12.png)  

#### 首页备注

一般是这部分，可以自定义，也可以在之后配置的时候使用一言

![picture 10](/articles/8792bafdb0ba2c2479cd0285515005eaf9210b3c6e629921cbcb4f6f78b48af4.png)  


#### 头像地址

一般是支持 Gravatar / Cravatar 的 来源地址，如果有的话可以填这个

当然没有的话 可以手动上传w

![picture 11](/articles/aa3e03323f648994ceba8fd8eaffa56b6e84eb589d8f8714733993be61c721ac.png)  

> 检测到远程头像 URL，是否允许通过服务器获取头像？

> 此功能是为了 防止一部分用户无法访问到远程头像地址 (e.g. 中国大陆无法访问到 Gravatar 的 头像服务，可以通过此进行绕过)


#### 其他配置

![picture 12](/articles/0c014d9d30af0d6c9f58dcb10673ee97c774e0005ce49d436a61215fd82f7224.png)  

- 历史展示窗口（分钟）：公共**实际**可以在这个时间内，可以访问到你具体公开活动的时限。一般用作 快速添加活动 / 一些 API 处理的，一般可以不用动

- “当前”区块标题：

![picture 13](/articles/c1106def821f007306ff180546c951b1cbd0c60631f99dcd5a2d171514e25715.png)  

指的是这个地方的文字字段，你可以改，在英文环境下不会跟随语言变动

- 随想录区块标题：

![picture 14](/articles/6429de00eca44ea604b86d10f978df7b94ef9fabfcbd8931a1363cefd886a4de.png)  

指的是这个地方的文字字段，和 “当前”区块标题 的显示规则一致

- 后台入口文案

![picture 15](/articles/49bd0bb857482fa20d8fa014e58b1755a5b0a73aea38bf87267acfe57b31b9d1.png)  

指的是这个地方，和其他没有什么区别


## 客户端配置

这部分完成了，一般来说我们可以开始配置设备端了~

首先去这个地方下载我们所需的客户端

[Waken-Wa-Reporter](https://github.com/MoYoez/waken-wa-reporter/releases/latest)

![picture 16](/articles/4f22667356bc75f2a1386c54518772c701c4da1bfe7151e66c4a9032022a60b6.png)  


一般来说，只有 PC 端才有 同步功能，其他端的，目前有 Android 可以实现基础的 使用应用同步

大部分情况下：

- x64-setup.exe | x64_en-US.msi 是给 Windows 使用的
- amd64.deb | amd64.AppImage 是给 Linux 平台使用的
- aarch64.dmg 是给 MacOS 使用的
- apk / js 一般是给 Android 用的，但是因为支持不完善，所以可以在此处下载 [Auto JS](https://github.com/MoYoez/waken-wa-reporter/releases/download/v0.40/activity.js) 的版本以用作同步


我们这里就以 Windows 平台为例，开始做剩余的配置：

> 对了 如果你是 MacOS，第一次应用会碰到损坏, 在 终端执行 sudo xattr -c ,将程序拖进去终端补全路径即可

> 如果您是第一次配置，可能默认为英文环境，需要通过 Maybe Later -> Setting 修改语言后重启

![picture 17](/articles/74e194d5946b44377e4c5f399457162c2fb8444173c45298b2414c69d28cea8e.png)  

通过 打开设置，他会问你要Base64的配置信息

这时候我们可以 Web 端的 API Token 生成一个允许被访问的 Token
 
![picture 18](/articles/0d52df4f5b70d58cd23242800fabee985065916a1d3c2bf2e5f82b68ac66be01.png)  

Token 名称填写你能记住的即可

![picture 19](/articles/9bd374629e7e1220c9ef809ffbc8edd7cecbde35fc249c7a93f7e9a7d5e83d4b.png)  

一般来说 会给你返回这两个，一般只需要使用一键接入配置即可

![picture 20](/articles/4c3f312f2dbee2804274d43e6838eed73e5b068a1c6678e6d58673486c304cc7.png)  

返回软件，在此处填写你的配置即可

![picture 21](/articles/78de9f70b37ad48e6ff8199cfb29c552811082520515798d5a98617e20cfe5df.png)  

![picture 22](/articles/f72e396740bd7c15cd9e357aa253a611c0aad2402418e43cb98b2aa8254dbadf.png)  

一般这么弹出就是没有问题了，完成即可

### 附加：平台检查

> 一般来说，非 Windows 平台需要看这些东西

因为部分平台的实现问题，除Win平台，其他平台需要不同的处理

这部分你可以通过 Reporter 的 设置 -> 管理同步状态 的 平台检测来判断是否正常工作

![picture 23](/articles/a13f596273e838e899e844169cf20faf9956c34de03c7ff647a55902962a3b48.png)  


#### MacOS

对于 MacOS 来说，标题部分获取 需要通过 [axuielement_h](https://developer.apple.com/documentation/applicationservices/axuielement_h) 获取 程式的 标题，这部分涉及到辅助功能，我们需要点击获取辅助功能授权，否则大部分程序都无法获取标题

其次对于 MacOS，音频的获取需要依赖 私有 API，这里我们通过了 [Nowplaying-Cli](https://github.com/kirtan-shah/nowplaying-cli) 来获取，请先通过 Brew 进行安装

一般来说经过这些操作，大部分都是 OK 了。


#### Linux

- 音频

通过调用 mpris 库实现，可以通过各家的 发行源 进行安装即可

- X11

对于任何 X11 的桌面（不过我已经没见过几个在用了x11了吧。。。。。应该）桌面获取内容不需要任何操作

- Wayland

目前仅支持 KDE 和 GNOME

1. GNOME：直接调用 `Focused Window D-Bus`
2. KDE Plasma：直接调用 `kdotool`

###### GNOME

优先支持：

- GNOME Shell 扩展 [Focused Window D-Bus](https://extensions.gnome.org/extension/5592/focused-window-d-bus/)
- `gdbus`

##### KDE Plasma

优先支持：

- [`kdotool`](https://github.com/jinliu/kdotool)

### 启用

一般来说，点击允许后需要到指定位置进行过审


![picture 24](/articles/5dcf69a3a6b234396df209ca71c88dda57068f45802132e1e889a6b38c54d454.png)  


你可以通过链接，或者在设备管理页面上进行处理

![picture 25](/articles/81e9458241703ffc4bdbcc6a76583b2e902b043ac6aa45e910e033dd081c9bff.png)  

一般需要过审的设备都有这个，点击即可

![picture 26](/articles/795b58802c6e81f0d1fbb420a7842bea653472e6079bc2146008d2a805334d6b.png)  

比对一下，如果没问题的话，就可以了

![picture 27](/articles/8cc32e5d122d8fdf29a2139b29b3de1b9163f1cdd97168b5dd2cbe701a0e22d5.png)  

## Congratulations！

基础的第一步已经完成了！接下来可以去做别的配置了！