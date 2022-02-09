import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

class LoginUserController {
  public static async login({ auth, request }: HttpContextContract) {
    const cpf = request.input('cpf')
    const password = request.input('password')

    return await auth.use('api').attempt(cpf, password)
  }
}

export default LoginUserController
