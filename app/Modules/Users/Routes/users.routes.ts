import Route from '@ioc:Adonis/Core/Route'
import CreateUserController from '../UseCases/CreateUser/CreateUserController'

Route.post('/users', CreateUserController.create).middleware('auth')
