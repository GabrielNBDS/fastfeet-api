import Package from 'App/Modules/Packages/Models/Package'
import { v4 as uuidv4 } from 'uuid'

class CreatePackageService {
  public static async execute(name: string, recipient: string, address: string, userId: number) {
    return await Package.create({
      name,
      recipient,
      address,
      userId,
      postedDate: new Date(),
      code: uuidv4(),
    })
  }
}

export default CreatePackageService
