/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.seed = async function (knex) {
    await knex('users').del();
    await knex('users').insert([
        {
            id: "f2cfa14b-9f6c-4ea2-bf9a-b4d187b4b33a",
            first_name: 'Pamela', 
            last_name: 'Andrew',
            email: 'pandrew@admin.com',
            password: "qwerty123",
        },
        {
            id: "d02e95b7-d4a3-4c15-9df3-5cc8c2ecf5af",
            first_name: 'George', 
            last_name: 'Lyon',
            email: 'glyon@global.com',
            password: 'welcome123',
            },
        {
            id: "7a8e0fc8-34da-4e61-89cd-5e80afed8609",
            first_name: 'John',
            last_name: 'Johnson',
            email: 'jjohnson@business.com',
            password: 'john000',
        },
        {
            id: "4b71b461-e32f-4b63-a5f1-570bae9254a5",
            first_name: 'Sanda',
            last_name: 'Peterson',
            email: 'speterson@streaming.com',
            password: 'alpha098',
        },
        {
            id: "f0f3c389-987a-4e66-9a1b-21e26c28b95a",
            first_name: 'Melissa',
            last_name: 'Samson',
            email: 'msamson@yahoo.com',
            password: 'hi999',
        },
        {
            id: "b4b3d3bd-156c-4cf3-a6e0-929d9a71b1e2",
            first_name: 'Kevin',
            last_name: 'Klein',
            email: 'kklein@gmail.com',
            password: 'kev456',
        },
    ]);
};