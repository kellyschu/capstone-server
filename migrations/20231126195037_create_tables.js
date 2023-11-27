/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.up = function(knex) {
    
    return knex.schema
    .createTable('users', (table) => {
        table.string('id', 36).primary();
        table.string('first_name');
        table.string('last_name');
        table.string('email');
        table.string('password');
    })
    .createTable('episodes', (table) => {
            table.string('id').primary();
            table.string('title');
            table.longtext('description');
            table.string('channel');
            table.integer('category');
            table.integer('likes');
            table.integer('saves');
        })
    .createTable('comments', (table) => {
        table.string('id', 36).primary();
        table
            .string('episode_id', 36)
            .references('id')
            .inTable('episodes')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
        table
            .string('user_id', 36)
            .references('id')
            .inTable('users')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
        table.timestamp('timestamp');
        table.string('content');
    })
    
    };
    
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema
    .dropTable('comments')
    .dropTable('episodes')
    .dropTable('users')
};


