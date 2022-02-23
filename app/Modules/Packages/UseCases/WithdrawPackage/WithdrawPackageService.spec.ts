import test from 'japa'
import Database from '@ioc:Adonis/Lucid/Database'
import Redis from '@ioc:Adonis/Addons/Redis'
import { PackageFactory } from 'Database/factories'
import WithdrawPackageService from './WithdrawPackageService'

test.group('WithdrawPackageService', (group) => {
  group.beforeEach(async () => {
    await Database.beginGlobalTransaction()
  })

  group.afterEach(async () => {
    await Database.rollbackGlobalTransaction()
    await Redis.flushdb()
  })

  test('if can withdraw package', async (assert) => {
    const packageToBeWithdrawn = await PackageFactory.create()

    assert.isUndefined(packageToBeWithdrawn.withdrawalDate)

    const withdrawnPackage = await WithdrawPackageService(packageToBeWithdrawn)

    assert.exists(withdrawnPackage.withdrawalDate)
  })
})
