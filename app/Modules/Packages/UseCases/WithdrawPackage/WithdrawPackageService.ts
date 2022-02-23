import Package from '../../Models/Package'

export default async function WithdrawPackageService(package_: Package) {
  package_.withdrawalDate = new Date()

  await package_.save()

  return package_
}
