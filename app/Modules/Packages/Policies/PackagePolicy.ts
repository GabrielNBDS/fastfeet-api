import { BasePolicy } from '@ioc:Adonis/Addons/Bouncer'
import User from 'App/Modules/Users/Models/User'
import Package from '../Models/Package'

export default class UserPolicy extends BasePolicy {
  public async isOwner(user: User, package_: Package) {
    return user.id === package_.userId
  }
}
