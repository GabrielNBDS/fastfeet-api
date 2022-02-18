import Route from '@ioc:Adonis/Core/Route'

import 'App/Modules/Users/Routes/users.routes'
import 'App/Modules/Users/Routes/auth.routes'
import 'App/Modules/Packages/Routes/packages.routes'

Route.get('/', async () => {
  return { hello: 'world' }
})
