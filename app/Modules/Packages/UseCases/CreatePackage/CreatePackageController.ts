import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import CreatePackageService from './CreatePackageService'
import CreatePackageValidator from './CreatePackageValidator'

class CreatePackageController {
  public static async create({ bouncer, request }: HttpContextContract) {
    await bouncer.with('UserPolicy').authorize('isAdmin')

    const { address, name, recipient, userId } = await request.validate(CreatePackageValidator)

    return await CreatePackageService.execute(name, recipient, address, userId)
  }
}

export default CreatePackageController
