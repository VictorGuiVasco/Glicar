
exports.up = function (knex) {
  return knex.schema.createTable('alimentos', (table) => {
    table.increments()
    table.string('nome').notNullable()
    table.decimal('cho').notNullable()
    table.decimal('calorias').notNullable()
    table.decimal('proteinas').notNullable()
  })
};

exports.down = function (knex) {
  return knex.schema.dropTable('alimentos');
};
