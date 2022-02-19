import 'reflect-metadata'
import { join } from 'path'
import getPort from 'get-port'
import { configure } from 'japa'
import sourceMapSupport from 'source-map-support'
import execa from 'execa'

process.env.NODE_ENV = 'testing'
process.env.ADONIS_ACE_CWD = join(__dirname)
process.env.PG_DB_NAME = 'tests'
process.env.LOG_LEVEL = 'fatal'
sourceMapSupport.install({ handleUncaughtExceptions: false })

async function runMigrations() {
  await execa.node('ace', ['migration:run'], {
    stdio: 'inherit',
  })
}

async function rollbackMigrations() {
  await execa.node('ace', ['migration:rollback', '--batch=0'], {
    stdio: 'inherit',
  })
}

async function startHttpServer() {
  const { Ignitor } = await import('@adonisjs/core/build/src/Ignitor')
  process.env.PORT = String(await getPort())
  await new Ignitor(__dirname).httpServer().start()
}

/**
 * Configure test runner
 */
configure({
  files: ['app/Modules/**/UseCases/**/*.spec.ts'],
  before: [runMigrations, startHttpServer],
  after: [rollbackMigrations],
})
