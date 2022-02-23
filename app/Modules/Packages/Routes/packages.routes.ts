import Route from '@ioc:Adonis/Core/Route'
import CreatePackageController from '../UseCases/CreatePackage/CreatePackageController'
import FindPackageByCodeController from '../UseCases/FindPackageByCode/FindPackageByCodeController'
import IndexPackageByOwnerController from '../UseCases/IndexPackageByOwner/IndexPackageByOwnerController'
import WithdrawPackageController from '../UseCases/WithdrawPackage/WithdrawPackageController'

Route.get('/packages', IndexPackageByOwnerController).middleware('auth')
Route.get('/packages/:code', FindPackageByCodeController)
Route.post('/packages', CreatePackageController).middleware('auth')
Route.patch('/packages/:id', WithdrawPackageController).middleware('auth')
