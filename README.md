# Adonis 6 multi tenancy demo

This is a demo project to show how to implement a schema based multi tenancy in Adonis 6.

## Features

- [x] **Tenant isolation**: Each tenant has its own database schema.
- [ ] **Tenant commands**: Migrate, seed, rollback, and run commands for a specific tenant.
- [x] **Tenant middleware**: Automatically switch the tenant based on the request header.
- [x] **Tenant models**: Lucid models are automatically scoped to the current tenant.
- [x] **Backoffice isolation**: Backoffice models, requests and controllers are isolated from tenants.
- [x] **Public schema**: Shared tables are stored in the public schema.

## Get started

1. Install dependencies:

```bash
npm install
```

2. Create a `.env` file:

```bash
cp .env.example .env
```

3. Mount storage services

```bash
docker-compose up -d
```

4. Setup public and backoffice schemas

```bash
node ace migration:run -c=public
node ace db:seed -c=public

node ace backoffice:setup
node ace migration:run -c=backoffice
node ace db:seed -c=backoffice
```

5. Start the server and bull queue

```bash
npm run dev
node ace queue:listen
```

## Demo routes

### Public

- `GET /countries`: List all countries.

### Backoffice

- `POST /backoffice/login`: Login to the backoffice. [email: john.doe@example.com, password: 123456789]
- `DELETE /backoffice/logout`: Logout from the backoffice.
- `GET /backoffice/account`: Return the current user account.
- `GET /backoffice/tenants`: List all tenants.
- `POST /backoffice/tenants`: Create a new tenant.

### Tenant

All routes below require the `X-Tenant-Id` header to be set with the tenant id.

- `POST /tenant/login`: User tenant login.
- `DELETE /tenant/logout`: User tenant logout.
- `POST /tenant/signup`: User tenant signup.
- `GET /tenant/account`: Return the current user account.
- `GET /tenant/users`: List all users.

## How to

- Get the current tenant: `request.tenant()`
- Start a database transaction in the tenant scope: `tenant.getConnection().transaction(async (trx) => { ... })`
- Migrate a single tenant: `node ace migration:tenant:run -t=tenantId`
- Migrate all tenants: `node ace migration:tenant:run`
