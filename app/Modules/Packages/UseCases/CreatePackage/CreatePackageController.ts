import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import CreatePackageService from './CreatePackageService'
import CreatePackageValidator from './CreatePackageValidator'

export default async function CreatePackageController({ bouncer, request }: HttpContextContract) {
  await bouncer.with('UserPolicy').authorize('isAdmin')

  const { address, name, recipient, userId } = await request.validate(CreatePackageValidator)

  return await CreatePackageService(name, recipient, address, userId)
}
