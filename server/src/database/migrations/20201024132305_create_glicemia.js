exports.up = function(knex) {
    return knex.schema.createTable('glicemia', (table) => {
        table.increments()
        table.decimal('glic').notNullable()
        table.date('date').notNullable()
        table.time('hours').notNullable()

        table.integer('user_id').notNullable()

        table.foreign('user_id').references('id').inTable('users');
    })
};

exports.down = function(knex) {

    return knex.schema.dropTable('glicemia');
};