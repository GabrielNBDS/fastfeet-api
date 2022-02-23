import User from '../../Models/User'

export default async function CreateUserService(name: string, cpf: string) {
  const user = await User.create({ name, cpf, password: 'senhatemporaria' })

  return user
}
