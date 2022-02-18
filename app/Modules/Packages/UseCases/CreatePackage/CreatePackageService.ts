import Package from 'App/Modules/Packages/Models/Package'

class CreatePackageService {
  public static async execute(name: string, recipient: string, address: string, userId: number) {
    return await Package.create({ name, recipient, address, userId, postedDate: new Date() })
  }
}

export default CreatePackageService
