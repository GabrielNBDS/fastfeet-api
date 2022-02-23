import Route from '@ioc:Adonis/Core/Route'
import CreatePackageController from '../UseCases/CreatePackage/CreatePackageController'
import FindPackageByCodeController from '../UseCases/FindPackageByCode/FindPackageByCodeController'
import IndexPackageByOwnerController from '../UseCases/IndexPackageByOwner/IndexPackageByOwnerController'
import WithdrawPackageController from '../UseCases/WithdrawPackage/WithdrawPackageController'

Route.get('/packages', IndexPackageByOwnerController.index).middleware('auth')
Route.get('/packages/:code', FindPackageByCodeController.find)
Route.post('/packages', CreatePackageController.create).middleware('auth')
Route.patch('/packages/:id', WithdrawPackageController.withdraw).middleware('auth')
