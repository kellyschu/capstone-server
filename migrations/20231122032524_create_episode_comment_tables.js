/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema
        .createTable('users', (table) => {
            table.integer('id').primary();
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
        })
        .createTable('comments', (table) => {
            table.integer('id').primary().unsigned();
            table.timestamp('timestamp');
            table.string('description');
            table.integer('user_id').references('users.id');
            table.string('episode_id').references('episodes.id');
        })
    };
    
    exports.down = (knex) => {
        return knex.schema
        .dropTable('comments')
        .dropTable('episodes')
        .dropTable('users')
    };
