import { schema, rules } from '@ioc:Adonis/Core/Validator'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class CreatePackageValidator {
  constructor(protected ctx: HttpContextContract) {}
  public schema = schema.create({
    name: schema.string({ trim: true }),
    recipient: schema.string({ trim: true }),
    address: schema.string({ trim: true }),
    userId: schema.number([rules.exists({ table: 'users', column: 'id' })]),
  })

  public messages = {
    'required': 'O campo {{ field }} é obrigatório',
    'userId.exists': 'Usuário com o ID enviado não existe',
  }
}
