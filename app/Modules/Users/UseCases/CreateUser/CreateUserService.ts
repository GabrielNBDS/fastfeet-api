import User from '../../Models/User'

class CreateUserService {
  public static async execute(name: string, cpf: string) {
    const user = await User.create({ name, cpf, password: 'senhatemporaria' })

    return user
  }
}

export default CreateUserService
