import Route from '@ioc:Adonis/Core/Route'
import CreateUserController from '../UseCases/CreateUser/CreateUserController'
import MeController from '../UseCases/Me/MeController'

Route.get('/me', MeController.handle).middleware('auth')
Route.post('/users', CreateUserController.create).middleware('auth')
