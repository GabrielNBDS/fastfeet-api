import Route from '@ioc:Adonis/Core/Route'
import LoginUserController from '../UseCases/LoginUser/LoginUserController'

Route.post('/login', LoginUserController.login)
