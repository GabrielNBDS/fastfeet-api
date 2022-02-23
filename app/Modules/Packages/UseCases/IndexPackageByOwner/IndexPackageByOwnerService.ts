import Package from '../../Models/Package'

export default async function IndexPackageByOwnerService(userId: number, page: number) {
  const packages = await Package.query().where('user_id', userId).paginate(page, 5)

  return packages.toJSON()
}
