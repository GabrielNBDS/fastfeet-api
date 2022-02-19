import Database from '@ioc:Adonis/Lucid/Database'
import test from 'japa'
import Redis from '@ioc:Adonis/Addons/Redis'
import CreateUserService from './CreateUserService'
import User from '../../Models/User'
import faker from 'faker'

test.group('CreateUserService', (group) => {
  group.beforeEach(async () => {
    await Database.beginGlobalTransaction()
  })

  group.afterEach(async () => {
    await Database.rollbackGlobalTransaction()
    await Redis.flushdb()
  })

  test('if can create a user', async (assert) => {
    const user = await CreateUserService.execute(faker.name.findName(), '12345678900')

    assert.instanceOf(user, User)
  })
})
