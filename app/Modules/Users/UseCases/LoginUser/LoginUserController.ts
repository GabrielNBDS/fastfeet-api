import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default async function LoginUserController({ auth, request }: HttpContextContract) {
  const cpf = request.input('cpf')
  const password = request.input('password')

  return await auth.use('api').attempt(cpf, password)
}
