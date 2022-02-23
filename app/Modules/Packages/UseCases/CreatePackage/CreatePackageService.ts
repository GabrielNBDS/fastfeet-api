import Package from 'App/Modules/Packages/Models/Package'
import { v4 as uuidv4 } from 'uuid'

export default async function CreatePackageService(
  name: string,
  recipient: string,
  address: string,
  userId: number
) {
  return await Package.create({
    name,
    recipient,
    address,
    userId,
    postedDate: new Date(),
    code: uuidv4(),
  })
}
