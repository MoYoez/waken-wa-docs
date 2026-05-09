---
sidebar_position: 2
---

# Installation and Deployment

In most cases, deploying Waken-Wa means you will need a cloud server, or you can look into a Serverless option.

If you have deployed Sleepy or a similar personal status dashboard before, the process should feel familiar.

You can also reuse an older machine or deploy to platforms such as Rainyun. If you see the [docker-compose.yml](https://github.com/MoYoez/waken-wa/blob/main/docker-compose.yml), you can ask an AI assistant to import it into Docker Compose in a minimal format and run it.

~~If you wonder why it is not listed in those platform stores, I tried, and it still did not pass after more than half a month.~~

The minimum practical requirement is around 1 core and 2 GB RAM. The theoretical lower bound is about 512 MB RAM + 0.5 CPU.

> If you want to use status reporting, pair it with [Waken-Wa-Reporter](https://github.com/MoYoez/waken-wa-reporter).

### 1. Local deployment

#### Docker, using the packaged one-click script

You need **Docker** with `docker compose` installed. Run this in a terminal:

```bash
curl -fsSL https://waken-wa.xwx.today | bash
```

> The script automatically fetches the latest **stable version tag** and starts the matching `moyoez/waken-wa:<tag>` Docker Hub image. It does not track `main` by default, which is better for day-to-day self-hosting. SQLite data is stored in a Docker volume by default. See the repository `docker-compose.yml` for details. Environment variables can follow `.env.example`, or you can edit `.env` in the deployment directory.

> Depending on your network, you may need access to Docker Hub or a proxy for Docker.

If you want to deploy the latest `main` branch explicitly, enable it like this:

```bash
curl -fsSL https://waken-wa.xwx.today | USE_LATEST_VERSION=1 bash
```

To specify a branch, repository, image, or install directory, override the environment variables:

```bash
curl -fsSL https://waken-wa.xwx.today | WAKEN_BRANCH=main bash
curl -fsSL https://waken-wa.xwx.today | WAKEN_IMAGE=moyoez/waken-wa:v0.40 bash
curl -fsSL https://waken-wa.xwx.today | WAKEN_WORKSPACE=~/waken-wa-deploy bash
```

#### Build from source

Run this in the root of a cloned repository. **Git** and **Docker** are required:

```bash
chmod +x deploy-build-from-source.sh   # Required the first time on Unix
./deploy-build-from-source.sh
# Or: bash deploy-build-from-source.sh
```

> The script prepares `.env` by copying `.env.example` if needed, generates `JWT_SECRET` when necessary, and runs `docker compose up -d --build`. You can also specify the branch and directory with environment variables such as `WAKEN_BRANCH`, `WAKEN_REPO_URL`, and `WAKEN_DEPLOY_DIR`; see the comments inside the script.

#### Deploy on Windows

##### 1. Prepare the environment

Install the following tools:

- **Docker Desktop** (recommended), or another Docker Compose-compatible container tool such as Podman Desktop
- **Git** (optional, but strongly recommended for syncing and managing code)
- If Git is not installed, you can download the source from GitHub with "Code" -> "Download ZIP", then extract it locally

##### 2. Get the project code

Using Git is recommended:

```powershell
git clone https://github.com/MoYoez/waken-wa.git
cd waken-wa
```

Alternatively, download and extract the ZIP, then enter the project directory.

##### 3. Configure environment variables

- Copy `.env.example` to `.env` and adjust it if needed. In most cases you can leave it alone unless you need customization.

##### 4. Start the containers

If you only need to run the official image and do not need to build from source, open PowerShell or CMD in the project root and run:

```powershell
docker compose up -d
```

##### 5. Build from source, if you need custom changes or a custom image

Run this in the project root:

```powershell
docker compose up -d --build
```

##### 6. Notes

- The first startup may automatically prepare the database and volumes; no manual operation is needed
- To stop the service, run `docker compose down`
- To upgrade, pull the latest code with Git and restart the service
- If you encounter port conflicts, environment variable issues, or platform-specific problems, check the repository docs or open an issue

---

### 2. Railway

[![Deploy on Railway](https://railway.com/button.svg)](https://railway.com/deploy/waken-wa)

> Railway may require the Hobby plan.

### 3. Vercel

> Vercel requires PostgreSQL (SupaBase / Neon) + Redis, and the cost may be higher because SSE long connections and Realtime POSTs are frequent.

> If you deploy on Vercel, consider uploading activity in non-Realtime mode and enabling Polling in the admin panel.

[![Deploy with Vercel](https://vercel.com/button)](
https://vercel.com/new/clone?repository-url=https://github.com/MoYoez/waken-wa
)

> Do not worry if the first deployment errors. In the project's "Integrations" page, use "Marketplace" to find **PostgreSQL** and **Redis** providers, install them, connect them to the project, and redeploy.

> If you use your own provider, set its address in `DATABASE_URL`. Watch out for URL compatibility on Serverless platforms such as Vercel, otherwise deployment may fail.
