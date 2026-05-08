---
sidebar_position: 2
---

# 平台与访问

## 关于 后台明暗，后台外观

![picture 0](/articles/e0ab74d69f83cfad2fd931af22fc38358a5559aae272cb55cd805832cafa6177.png)  

这部分可以根据你的需要对后台进行调色，因为我觉得棕色有点不好看了，可以简单调整一下外观，这个功能不影响用户侧的前台页面

![picture 1](/articles/ef3a49d498d975568d01794dbe63740f8e211d216b8ff08ccd6001dfc2c6780a.png)  


## 通过服务器获取远程头像

为了防止有一些用户无法访问直链头像地址，这个功能会通过一层转发，将用户的头像通过本机的路由重定向给用户

![picture 2](/articles/0b4b3d60d310c59bdf914661c8936c83bc98860c32197a1e8d348ed8adfbc632.png)  

效果如上，可根据需要开启。

## 启用 Skills / MCP

本质上来说，就是将接口暴露出去，并提供相关文档，让 AI 可以对一部分危害低的数据进行操作

此处我使用 Skills 模式 + Oauth 认证 + Lobehub (Deepseek v4 Flash) 进行演示，实际接入演出可能会根据您用的软件或者版本有所不同，仅供参考，~~MCP理论上过时了~~

![picture 3](/articles/6e1e87be19dc268c315d0b00dd15333fb2c68f8020bebf563f7b05a38d4a1483.png)  

认证方式我们使用 Oauth 模式，对于 APIKEY 的话，**我的建议是保存为常量，让AI通过环境变量来发送请求**

:::danger

请不要告诉 AI 您的 API KEY，可被视作为 泄露！如果无法设置 APIKEY，请考虑使用 Oauth 模式！

:::

![picture 6](/articles/09e811b5229997938f7f3cecc54716b256baa29e2e41475c06ea178cd45826a2.png)  

一般来说，Skills 模式下，这个作为AI需要的文档


![picture 7](/articles/8547a1280ed511bc2af0d00890d5b94da76845ccbc5a60f1722cd9c74749f1e7.png)  

导入后让AI准备授权

![picture 9](/articles/286f164378ccf5f61fe452614ff0c57bac1174fcfbf89ebcaef66534211aad8e.png)  

差不多这样子就可以让AI修改了

![picture 10](/articles/624c28e2ecab61281073ae77a20f6df4e92179cf000fa96be1e1d2f7e24e4cbf.png)  


## 开放 OpenAPI 文档

![picture 4](/articles/0d876158705a67e7da1e307525dd913dd6d6a080eae7638596a9f807201d3fc7.png)  

会进入 Scalar 的 API 文档，如果你是考虑做一点衍生产品 / 开发，可以看看这个w

## 启用 hcaptcha

![picture 5](/articles/d3f9f6673a9e0950b7f1e4dda7131e9d96458434fd816d6af8745bc63dac9c15.png)  

会在您的 **页面锁** + **管理登陆页面** 添加 Hcaptcha 认证，一般是用来防刷的
