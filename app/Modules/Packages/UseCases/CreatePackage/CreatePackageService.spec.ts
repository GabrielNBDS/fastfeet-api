import Database from '@ioc:Adonis/Lucid/Database'
import test from 'japa'
import Redis from '@ioc:Adonis/Addons/Redis'
import CreatePackageService from './CreatePackageService'
import { UserFactory } from 'Database/factories'
import Package from '../../Models/Package'

test.group('CreatePackageService', (group) => {
  group.beforeEach(async () => {
    await Database.beginGlobalTransaction()
  })

  group.afterEach(async () => {
    await Database.rollbackGlobalTransaction()
    await Redis.flushdb()
  })

  test('if can create a package', async (assert) => {
    const user = await UserFactory.with('packages').create()

    const createdPackage = await CreatePackageService(
      'Any name',
      'Any recipient',
      'Any address',
      user.id
    )

    assert.instanceOf(createdPackage, Package)
  })
})
