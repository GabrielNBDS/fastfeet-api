import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import CreateUserService from './CreateUserService'
import CreateUserValidator from './CreateUserValidator'

class CreateUserController {
  public static async create({ request, bouncer }: HttpContextContract) {
    await bouncer.with('UserPolicy').authorize('isAdmin')

    const { name, cpf } = await request.validate(CreateUserValidator)

    return CreateUserService.execute(name, cpf)
  }
}

export default CreateUserController
