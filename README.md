# Adonis 6 multi tenancy demo

This is a demo project to show how to implement a schema based multi tenancy in Adonis 6.

## Features

- **Tenant isolation**: Each tenant has its own database schema.
- **Tenant commands**: Migrate, seed, rollback, and run commands for a specific tenant.
- **Tenant middleware**: Automatically switch the tenant based on the request header.
- **Tenant models**: Lucid models are automatically scoped to the current tenant.
- **Backoffice isolation**: Backoffice models, requests and controllers are isolated from tenants.
- **Public schema**: Shared tables are stored in the public schema.

## WIP
