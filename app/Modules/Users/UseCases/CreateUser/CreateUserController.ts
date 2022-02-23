import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import CreateUserService from './CreateUserService'
import CreateUserValidator from './CreateUserValidator'

export default async function CreateUserController({ request, bouncer }: HttpContextContract) {
  await bouncer.with('UserPolicy').authorize('isAdmin')

  const { name, cpf } = await request.validate(CreateUserValidator)

  return CreateUserService(name, cpf)
}
