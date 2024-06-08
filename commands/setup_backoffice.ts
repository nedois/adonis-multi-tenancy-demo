import { BaseCommand } from '@adonisjs/core/ace'
import type { CommandOptions } from '@adonisjs/core/types/ace'
import db from '@adonisjs/lucid/services/db'

export default class SetupBackoffice extends BaseCommand {
  static readonly commandName = 'backoffice:setup'

  static readonly description = 'Create backoffice schema in database'

  static readonly options: CommandOptions = {
    startApp: true,
  }

  async run() {
    await db.rawQuery('CREATE SCHEMA IF NOT EXISTS backoffice')
  }
}
