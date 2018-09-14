
exports.up = function(knex, Promise) {
    return knex.schema.createTable("recipes_ingredients", (tbl) => {
        tbl.increments();
        tbl
          .integer("recipe_id")
          .unsigned()
          .notNullable()
          .reference("id")
          .inTable("recipes");
        tbl
          .integer("ingredient_id")
          .unsigned()
          .notNullable()
          .reference("id")
          .inTable("ingredients");
        tbl
          .integer("quantity_id");

    });
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTable("recipes_ingredients");
  };
  