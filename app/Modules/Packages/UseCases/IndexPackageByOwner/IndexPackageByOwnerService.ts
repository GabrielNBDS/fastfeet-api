import Package from '../../Models/Package'

class IndexPackageByOwnerService {
  public static async execute(userId: number, page: number) {
    const packages = await Package.query().where('user_id', userId).paginate(page, 5)

    return packages.toJSON()
  }
}

export default IndexPackageByOwnerService
