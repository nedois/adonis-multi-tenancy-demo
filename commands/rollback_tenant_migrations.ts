import { BaseCommand, flags } from '@adonisjs/core/ace'
import type { CommandOptions } from '@adonisjs/core/types/ace'
import Tenant from '#models/backoffice/tenant'

const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

export default class RunTenantMigrations extends BaseCommand {
  static readonly commandName = 'migration:tenants:rollback'

  static readonly description = 'Rollback the last tenant migration'

  static readonly options: CommandOptions = {
    startApp: true,
  }

  @flags.array({
    alias: 't',
    flagName: 'tenant',
    required: false,
    description: 'Tenant(s) id(s) to rollback. If not provided, all tenants will be rolled back',
  })
  declare tenantsIds?: string[]

  @flags.boolean({
    default: false,
    flagName: 'dry-run',
    description: 'Do not run actual queries. Instead view the SQL output',
  })
  declare dryRun: boolean

  @flags.boolean({
    default: false,
    flagName: 'disable-locks',
    description: 'Disable locks acquired to run migrations safely',
  })
  declare disableLocks: boolean

  @flags.boolean({
    default: false,
    flagName: 'verbose',
  })
  declare verbose: boolean

  async run() {
    const tenants =
      this.tenantsIds && this.tenantsIds.length > 0
        ? await Tenant.query().whereIn('id', this.tenantsIds)
        : await Tenant.all()

    for (const tenant of tenants) {
      await this.migrateTenant(tenant)
    }
  }

  private async migrateTenant(tenant: Tenant) {
    const tasks = this.ui.tasks({ verbose: this.verbose })

    await tasks
      .add(`Rolling back tenant "${tenant.name}": schema (${tenant.schemaName})`, async (task) => {
        try {
          task.update('Connecting to the tenant database')
          tenant.getConnection()

          task.update('Rolling back last migration')
          await tenant.migrate({
            direction: 'down',
            disableLocks: this.disableLocks,
            dryRun: this.dryRun,
          })

          return 'completed'
        } catch (error) {
          return this.verbose ? task.error(error.message) : task.error('failed')
        }
      })
      .run()
  }
}
