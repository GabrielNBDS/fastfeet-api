import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import IndexPackageByOwnerService from './IndexPackageByOwnerService'

class IndexPackageByOwnerController {
  public static async index({ auth, request }: HttpContextContract) {
    const user = auth.user!
    const page = request.input('page', 1)

    return await IndexPackageByOwnerService.execute(user.id, page)
  }
}

export default IndexPackageByOwnerController
