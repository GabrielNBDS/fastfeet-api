import Package from '../../Models/Package'

class WithdrawPackageService {
  public static async execute(package_: Package) {
    package_.withdrawalDate = new Date()

    await package_.save()

    return package_
  }
}

export default WithdrawPackageService
