# Adonis 6 multi tenancy demo

This is a demo project to show how to implement a schema based multi tenancy in Adonis 6.

## Features

- [x] **Tenant isolation**: Each tenant has its own database schema.
- [ ] **Tenant commands**: Migrate, seed, rollback, and run commands for a specific tenant.
- [x] **Tenant middleware**: Automatically switch the tenant based on the request header.
- [x] **Tenant models**: Lucid models are automatically scoped to the current tenant.
- [x] **Backoffice isolation**: Backoffice models, requests and controllers are isolated from tenants.
- [x] **Public schema**: Shared tables are stored in the public schema.

## WIP
