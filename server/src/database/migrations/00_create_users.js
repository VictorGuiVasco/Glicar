export async function up(Knex) {
    return Knex.schema.createTable('users', (table) => {
        table.increments('id').primary()
        table.string('name').notNullable()
        table.string('email').notNullable()
        table.string('password').notNullable()
        table.date('dtnasc').notNullable()
        table.string('sexo').notNullable()
        table.decimal('altura').notNullable()
        table.decimal('peso').notNullable()
        table.decimal('imc').notNullable()
    })
}

export async function down(knex) {
    return knex.schema.dropTable('users');
  }