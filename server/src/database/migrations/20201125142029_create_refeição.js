
exports.up = function (knex) {
  return knex.schema.createTable('refeicao', (table) => {
    table.increments()
    table.date('date').notNullable()
    table.time('hours').notNullable()

    table.integer('user_id').notNullable()
    table.integer('alimentos_id').notNullable()

    table.foreign('user_id').references('id').inTable('users');
    table.foreign('alimentos_id').references('id').inTable('alimentos');
  })
};

exports.down = function (knex) {
  return knex.schema.dropTable('refeicao');
};
