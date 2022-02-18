import Route from '@ioc:Adonis/Core/Route'
import CreatePackageController from '../UseCases/CreatePackage/CreatePackageController'

Route.post('/packages', CreatePackageController.create).middleware('auth')
