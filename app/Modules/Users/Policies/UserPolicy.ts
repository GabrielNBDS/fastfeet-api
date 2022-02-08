import { BasePolicy } from '@ioc:Adonis/Addons/Bouncer'
import User from '../Models/User'

export default class UserPolicy extends BasePolicy {
  public async isAdmin(user: User) {
    return user.role === 'admin'
  }
}
