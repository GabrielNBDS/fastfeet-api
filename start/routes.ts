import Route from '@ioc:Adonis/Core/Route'

import 'App/Modules/Users/Routes/users.routes'

Route.get('/', async () => {
  return { hello: 'world' }
})
