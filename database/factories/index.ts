import Factory from '@ioc:Adonis/Lucid/Factory'
import Package from 'App/Modules/Packages/Models/Package'
import User from 'App/Modules/Users/Models/User'
import { v4 as uuidv4 } from 'uuid'

export const PackageFactory = Factory.define(Package, ({ faker }) => {
  const status = 0 as 0 | 1 | 2

  return {
    name: faker.commerce.product(),
    recipient: faker.name.findName(),
    address: faker.address.streetAddress(),
    status,
    postedDate: new Date(),
    code: uuidv4(),
  }
}).build()

export const UserFactory = Factory.define(User, ({ faker }) => {
  const role = 'user' as 'user' | 'admin'

  function generateCpf() {
    let cpf = ''

    for (let index = 0; index < 11; index++) {
      cpf += faker.datatype.number({ min: 0, max: 9 }).toString()
    }

    return cpf
  }

  return {
    cpf: generateCpf(),
    name: faker.name.findName(),
    password: faker.internet.password(),
    role,
  }
})
  .relation('packages', () => PackageFactory)
  .build()
