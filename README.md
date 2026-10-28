# microfrontend-module-federation

A React microfrontend setup built on webpack 5 Module Federation. A **host** app loads two independently built and served remote apps, **shop** and **admin**, at runtime and mounts their routes into one router.

## Structure

```
packages/
  build-config/   shared webpack config (loaders, plugins, dev server, resolvers)
  shared/         code shared across services (route constants, UserCard component)
services/
  host/    container app, port 3000 — consumes shop and admin
  shop/    remote, port 3001 — exposes ./router (/shop/main, /shop/second)
  admin/   remote, port 3002 — exposes ./router (/admin/about)
```

Each remote exposes its route array via `remoteEntry.js`. The host imports `shop/router` and `admin/router` and spreads them into its own `createBrowserRouter`. `react`, `react-dom` and `react-router-dom` are shared singletons across all apps.

## Getting started

npm workspaces link the packages, so install once from the root:

```sh
npm install
```

Start the remotes before the host, each in its own terminal:

```sh
cd services/shop  && npm start   # http://localhost:3001
cd services/admin && npm start   # http://localhost:3002
cd services/host  && npm start   # http://localhost:3000
```

Open http://localhost:3000.

## Scripts (per service)

| Script          | Description                                        |
| --------------- | -------------------------------------------------- |
| `start`         | Dev server on the service's port                   |
| `build:dev`     | Development build to `build/`                      |
| `build:prod`    | Production build to `build/`                       |
| `build:mobile`  | Production build with `__PLATFORM__ = "mobile"`    |
| `build:desktop` | Production build with `__PLATFORM__ = "desktop"`   |
| `analyzer`      | Production build with the bundle analyzer          |

## Pointing the host at deployed remotes

Remote URLs default to localhost and can be overridden with webpack env variables:

```sh
cd services/host
npx webpack --env mode=production \
  --env SHOP_REMOTE_URL=https://shop.example.com \
  --env ADMIN_REMOTE_URL=https://admin.example.com
```

## Stack

React 18, React Router 6, TypeScript, webpack 5 (Module Federation), Babel, SCSS modules, SVGR.
