
exports.up = function(knex, Promise) {
  return knex.schema.createTable("recipes", (tbl) => {
      tbl.increments();
      tbl.string("name", 128).notNullable();
      tbl
        .integer("dish_id")
        .unsigned()
        .notNullable()
        .reference("id")
        .inTable("dishes");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("recipes");
};
