import Package from '../../Models/Package'

export default async function FindPackageByCodeService(code: string) {
  return await Package.findByOrFail('code', code)
}
