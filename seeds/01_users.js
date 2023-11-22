/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
    // Deletes ALL existing entries
    await knex('users').del();
    await knex('users').insert([
        {
            id: 202,
            first_name: 'Parmin', 
            last_name: 'Andrew',
            email: 'pandrew@admin.com',
            password: "qwerty123",
            },
        {
            id: 303,
            first_name: 'George', 
            last_name: 'Lyon',
            email: 'glyon@global.com',
            password: 'welcome123',
            },
        {
            id: 404,
            first_name: 'Katie',
            last_name: 'Smith',
            email: 'ksmith@podcast.com',
            password: 'abc123',
        },
        ]);
        };