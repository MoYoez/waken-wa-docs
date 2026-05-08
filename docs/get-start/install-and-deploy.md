---
sidebar_position: 2
---

# 安装与部署

正常来说，如果你要部署的话...多半需要一台云服务器，或者看看其他的 Serverless 方案nya?

当然了，如果你部署过 Sleepy 或者其他的 视奸面板 之类的话，这些内容对你来说易如反掌www

或者你想老机子利用一下，放到雨云之类的平台nya? 也是可以的，看到 [docker-compose.yml](https://github.com/MoYoez/waken-wa/blob/main/docker-compose.yml) 了吗，扔给AI，让他以最小化的格式导入 docker compose 运行即可

~~当然你要问了，主播主播，为什么不上架他们的商店，问就是试过了，半个多月都没pass~~

最小的需求一般是1h2g左右的内存就可以跑了，理论上最低的需求是 512mbRAM + 0.5CPU

> 如果需要使用，请配合 [Waken-Wa-Reporter](https://github.com/MoYoez/waken-wa-reporter)

### 1. 本机部署

#### Docker（使用已打包的一键脚本）

需已安装 **Docker**（含 `docker compose`）。在终端执行：

```bash
curl -fsSL https://waken-wa.xwx.today | bash
```

> 脚本会自动获取当前最新的 **稳定版本 tag**，并使用对应的 `moyoez/waken-wa:<tag>` Docker Hub 镜像启动；默认不会直接追踪 `main`，适合日常自托管使用。SQLite 数据默认保存在 Docker 卷中，详见仓库内 `docker-compose.yml`。环境变量可参照仓库中的 `.env.example`，或在部署目录中编辑 `.env`。

> 当然了，你需要一点点的科学上网，或者会给 Docker 挂上代理也是可以的

如果你想部署最新的 `main` 分支版本，可以显式启用：

```bash
curl -fsSL https://waken-wa.xwx.today | USE_LATEST_VERSION=1 bash
```

如需指定分支、仓库、镜像或安装目录，可使用环境变量覆盖：

```bash
curl -fsSL https://waken-wa.xwx.today | WAKEN_BRANCH=main bash
curl -fsSL https://waken-wa.xwx.today | WAKEN_IMAGE=moyoez/waken-wa:v0.40 bash
curl -fsSL https://waken-wa.xwx.today | WAKEN_WORKSPACE=~/waken-wa-deploy bash
```

#### 自编译（源码）

在已克隆的本仓库根目录执行（需 **Git**、**Docker**）：

```bash
chmod +x deploy-build-from-source.sh   # Unix 首次需要
./deploy-build-from-source.sh
# 或: bash deploy-build-from-source.sh
```

> 脚本会准备 `.env`（若无则从 `.env.example` 复制）、按需生成 `JWT_SECRET`，并执行 `docker compose up -d --build`。也可通过环境变量指定分支与目录，例如 `WAKEN_BRANCH`、`WAKEN_REPO_URL`、`WAKEN_DEPLOY_DIR`（见脚本内注释）。

#### 在 Windows 下部署

##### 1. 准备环境

确保已安装以下工具：

- **Docker Desktop**（推荐）或 Podman Desktop 等支持 Docker Compose 的容器工具
- **Git**（可选，但强烈推荐，方便同步和管理代码）
- 如未安装 Git，也可直接通过 GitHub 网页点击 “Code” -> “Download ZIP” 下载项目源码，再解压到本地

##### 2. 获取项目代码

使用 Git（推荐）：

```powershell
git clone https://github.com/MoYoez/waken-wa.git
cd waken-wa
```

或手动下载 ZIP 并解压后进入项目目录。

##### 3. 配置环境变量

- 复制仓库中的 `.env.example` 为 `.env`，根据需要调整配置，一般来说你可以不用配置，定制化需要。

##### 4. 启动容器

如果只需直接运行官方镜像（无需自行编译），在项目根目录打开 PowerShell 或 CMD，执行：

```powershell
docker compose up -d
```

##### 5. 从源码自定义构建（如需源码修改或自定义镜像）

在项目根目录运行：

```powershell
docker compose up -d --build
```

##### 6. 其他说明

- 首次启动后可能会自动准备数据库和相关数据卷，无需手动操作
- 如需关闭服务，执行：`docker compose down`
- 升级项目可使用 Git 拉取最新代码后重启服务
- 如果遇到端口冲突、环境变量问题等，请参考仓库内文档或 issue 提问

---

### 2. Railway

[![Deploy on Railway](https://railway.com/button.svg)](https://railway.com/deploy/waken-wa)

> Railway 可能需要使用 Hobby 方案.

### 3. Vercel

> 需要使用 PostgresSQL (SupaBase / Neon) + Redis ，且开销较高 (SSE 长连接 / Realtime POST 多)

> 如需使用请考虑 非 Realtime 模式上传活动，并且在后台启用 Polling （轮询）

[![Deploy with Vercel](https://vercel.com/button)](
https://vercel.com/new/clone?repository-url=https://github.com/MoYoez/waken-wa
)

> 第一次部署后不用担心报错，在项目的 "Integrations" 中 通过 "Marketplace"找到 **PostgreSQL** 和 **Redis** 供应商，Install 后 Connect 到此项目，Redeploy 即可。

> 如果你想用自己的供应商，请在 env 的 DATABASE_URL 中 写入地址即可，请注意 Vercel 这类 Serverless 平台的URL兼容性，以防止部署失败。
