import test from 'japa'
import Database from '@ioc:Adonis/Lucid/Database'
import Redis from '@ioc:Adonis/Addons/Redis'
import { PackageFactory } from 'Database/factories'
import FindPackageByCodeService from './FindPackageByCodeService'

test.group('FindPackageByCodeService', (group) => {
  group.beforeEach(async () => {
    await Database.beginGlobalTransaction()
  })

  group.afterEach(async () => {
    await Database.rollbackGlobalTransaction()
    await Redis.flushdb()
  })

  test('if can find package by code', async (assert) => {
    const createdPackage = await PackageFactory.create()

    const foundPackage = await FindPackageByCodeService(createdPackage.code)

    assert.equal(foundPackage.id, createdPackage.id)
  })
})
