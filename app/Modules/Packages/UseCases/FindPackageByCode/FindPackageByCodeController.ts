import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import FindPackageByCodeService from './FindPackageByCodeService'

export default async function FindPackageByCodeController({ params }: HttpContextContract) {
  const { code } = params

  return await FindPackageByCodeService(code)
}
