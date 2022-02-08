import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import CreateUserService from './CreateUserService'
import CreateUserValidator from './CreateUserValidator'

class CreateUserController {
  public static async create({ request, bouncer }: HttpContextContract) {
    const { name, cpf } = await request.validate(CreateUserValidator)

    await bouncer.with('UserPolicy').authorize('isAdmin')

    return CreateUserService.execute(name, cpf)
  }
}

export default CreateUserController
