import Route from '@ioc:Adonis/Core/Route'
import LoginUserController from '../UseCases/LoginUser/LoginUserController'
import LogoutUserController from '../UseCases/LogoutUser/LogoutUserController'

Route.post('/login', LoginUserController.login)
Route.delete('/logout', LogoutUserController.logout)
