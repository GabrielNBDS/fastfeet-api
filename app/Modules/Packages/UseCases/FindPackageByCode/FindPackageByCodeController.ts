import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import FindPackageByCodeService from './FindPackageByCodeService'

class FindPackageByCodeController {
  public static async find({ params }: HttpContextContract) {
    const { code } = params

    return await FindPackageByCodeService.execute(code)
  }
}

export default FindPackageByCodeController
