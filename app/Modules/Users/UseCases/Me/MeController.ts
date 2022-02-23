import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

class MeController {
  public static async handle({ auth }: HttpContextContract) {
    return auth.user!
  }
}

export default MeController
