import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import User from 'App/Modules/Users/Models/User'

export default class RootUserSeeder extends BaseSeeder {
  public async run() {
    await User.create({
      cpf: '12345678900',
      name: 'Root',
      password: '123456789',
      role: 'admin',
    })
  }
}
