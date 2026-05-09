---
sidebar_position: 2
---

# Platform and Access

## Admin theme and appearance

![picture 0](/articles/e0ab74d69f83cfad2fd931af22fc38358a5559aae272cb55cd805832cafa6177.png)  

You can adjust the admin panel colors here. I thought the brown palette was not very pretty, so this gives you a simple way to tweak the appearance. It does not affect the public frontend page.

![picture 1](/articles/ef3a49d498d975568d01794dbe63740f8e211d216b8ff08ccd6001dfc2c6780a.png)  

## Fetch remote avatars through the server

Some users may not be able to access direct avatar URLs. This feature adds a forwarding layer and redirects avatar requests through the local route.

![picture 2](/articles/0b4b3d60d310c59bdf914661c8936c83bc98860c32197a1e8d348ed8adfbc632.png)  

Enable it as needed.

## Enable Skills / MCP

In essence, this exposes selected APIs and related documentation so AI tools can operate on some lower-risk data.

This example uses Skills mode + OAuth + Lobehub (Deepseek v4 Flash). The actual integration flow may differ depending on your tool and version. Treat this as a reference. ~~MCP may be somewhat outdated in theory.~~

![picture 3](/articles/6e1e87be19dc268c315d0b00dd15333fb2c68f8020bebf563f7b05a38d4a1483.png)  

This demo uses OAuth authentication. For API keys, **I recommend storing them as constants and letting the AI send requests through environment variables**.

:::danger

Do not tell an AI your API key. That should be treated as a leak. If you cannot configure an API key safely, consider using OAuth.

:::

![picture 6](/articles/09e811b5229997938f7f3cecc54716b256baa29e2e41475c06ea178cd45826a2.png)  

In Skills mode, this is generally the documentation the AI needs.

![picture 7](/articles/8547a1280ed511bc2af0d00890d5b94da76845ccbc5a60f1722cd9c74749f1e7.png)  

After importing it, ask the AI to prepare authorization.

![picture 9](/articles/286f164378ccf5f61fe452614ff0c57bac1174fcfbf89ebcaef66534211aad8e.png)  

At this point, the AI can start making changes.

![picture 10](/articles/624c28e2ecab61281073ae77a20f6df4e92179cf000fa96be1e1d2f7e24e4cbf.png)  

## Expose OpenAPI docs

![picture 4](/articles/0d876158705a67e7da1e307525dd913dd6d6a080eae7638596a9f807201d3fc7.png)  

This opens the Scalar API documentation. If you want to build integrations or derived products, this is worth checking.

## Enable hCaptcha

![picture 5](/articles/d3f9f6673a9e0950b7f1e4dda7131e9d96458434fd816d6af8745bc63dac9c15.png)  

Adds hCaptcha to the **page lock** and **admin login page**, mainly to reduce automated abuse.
