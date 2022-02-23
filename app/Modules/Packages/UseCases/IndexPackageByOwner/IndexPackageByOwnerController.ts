import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import IndexPackageByOwnerService from './IndexPackageByOwnerService'

export default async function IndexPackageByOwnerController({
  auth,
  request,
}: HttpContextContract) {
  const user = auth.user!
  const page = request.input('page', 1)

  return await IndexPackageByOwnerService(user.id, page)
}
