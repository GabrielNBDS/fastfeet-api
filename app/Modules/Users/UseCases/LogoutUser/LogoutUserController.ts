import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default async function LogoutUserController({ auth, response }: HttpContextContract) {
  await auth.logout()

  return response.noContent()
}
