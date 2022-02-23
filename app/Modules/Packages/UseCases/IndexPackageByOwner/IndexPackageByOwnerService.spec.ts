import test from 'japa'
import Database from '@ioc:Adonis/Lucid/Database'
import Redis from '@ioc:Adonis/Addons/Redis'
import { UserFactory } from 'Database/factories'
import IndexPackageByOwnerService from './IndexPackageByOwnerService'

test.group('IndexPackageByOwnerService', (group) => {
  group.beforeEach(async () => {
    await Database.beginGlobalTransaction()
  })

  group.afterEach(async () => {
    await Database.rollbackGlobalTransaction()
    await Redis.flushdb()
  })

  test('if index packages by owner', async (assert) => {
    const user = await UserFactory.with('packages', 2).create()

    const { data } = await IndexPackageByOwnerService(user.id, 1)

    assert.equal(data[0].id, user.packages[0].id)
  })
})
