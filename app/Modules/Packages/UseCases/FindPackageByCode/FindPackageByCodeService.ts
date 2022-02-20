import Package from '../../Models/Package'

class FindPackageByCodeService {
  public static async execute(code: string) {
    return await Package.findByOrFail('code', code)
  }
}

export default FindPackageByCodeService
