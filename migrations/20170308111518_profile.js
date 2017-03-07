
exports.up = function (knex, Promise) {
  return knex.schema.createTable('profile', function (table) {
    table.increments('id').primary()
    table.string('user_id')
    table.string('star_sign')
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('profile')
}
