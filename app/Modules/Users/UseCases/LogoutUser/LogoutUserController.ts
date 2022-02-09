import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

class LogoutUserController {
  public static async logout({ auth, response }: HttpContextContract) {
    await auth.logout()

    return response.noContent()
  }
}

export default LogoutUserController
