import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default async function MeController({ auth }: HttpContextContract) {
  return auth.user!
}
