import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Package from '../../Models/Package'
import WithdrawPackageService from './WithdrawPackageService'

class WithdrawPackageController {
  public static async withdraw({ params, bouncer }: HttpContextContract) {
    const packageToBeWithdrawn = await Package.findOrFail(params.id)

    await bouncer.with('PackagePolicy').authorize('isOwner', packageToBeWithdrawn)

    return await WithdrawPackageService.execute(packageToBeWithdrawn)
  }
}

export default WithdrawPackageController
