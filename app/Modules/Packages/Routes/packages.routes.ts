import Route from '@ioc:Adonis/Core/Route'
import CreatePackageController from '../UseCases/CreatePackage/CreatePackageController'
import FindPackageByCodeController from '../UseCases/FindPackageByCode/FindPackageByCodeController'

Route.get('/packages/:code', FindPackageByCodeController.find)
Route.post('/packages', CreatePackageController.create).middleware('auth')
