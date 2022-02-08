import { schema, rules } from '@ioc:Adonis/Core/Validator'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class CreateUserValidator {
  constructor(protected ctx: HttpContextContract) {}
  public schema = schema.create({
    name: schema.string({ trim: true }),
    cpf: schema.string({ trim: true }, [
      rules.minLength(11),
      rules.maxLength(11),
      rules.unique({ column: 'cpf', table: 'users' }),
    ]),
  })

  public messages = {
    'cpf.maxLength': 'O campo CPF deve ter no máximo 11 caracteres',
    'cpf.minLength': 'O campo CPF deve ter no mínimo 11 caracteres',
    'cpf.unique': 'CPF já utilizado',
  }
}
