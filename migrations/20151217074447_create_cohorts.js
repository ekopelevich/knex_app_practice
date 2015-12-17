
exports.up = function(knex, Promise) {
  return knex.schema.createTable('cohorts', function(table){
    table.increments();
    table.string('name');
  });
};

exports.down = function(knex, Promise) {

};
