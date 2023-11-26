/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */


exports.seed = async function (knex) {
    await knex('comments').del();
    await knex('comments').insert([
        {
            id: "1f0a8ae0-1fe4-4e32-b185-5f06bfe869d4",
            episode_id: "3QqRh1JVuQWCveIGzedlkf",
            user_id: "f0f3c389-987a-4e66-9a1b-21e26c28b95a",
            timestamp: "2023-11-21 12:30:00",
            content: "This Tetris episode is fascinating!"
        },
        {
            id: "3e8f03d4-2077-4f5b-843e-61e36a120f87",
            episode_id: "3QqRh1JVuQWCveIGzedlkf",
            user_id: "f2cfa14b-9f6c-4ea2-bf9a-b4d187b4b33a",
            timestamp: "2023-11-21 13:45:00",
            content: "Henk Rogers' journey is truly inspiring."
        },
        {
            id: "56438856-18b1-45a6-9c9b-6c33f0fb1a87",
            episode_id: "4Gqw5HFlq8Y7zNK6wqA5lK",
            user_id: "f0f3c389-987a-4e66-9a1b-21e26c28b95a",
            timestamp: "2023-11-22 09:15:00",
            content: "Holly Thaggard's story is a testament to perseverance."
        },
        {
            id: "89036978-c3e7-4cb6-bc4d-f98ee1d5d0a2",
            episode_id: "1vg2pChLepN1TCzsCBglNQ",
            user_id: "d02e95b7-d4a3-4c15-9df3-5cc8c2ecf5af",
            timestamp: "2023-11-23 14:00:00",
            content: "Etsy has transformed the way we buy and sell handmade goods."
        },
        {
            id: "2d8d5f2d-6e77-4ec1-9be2-9e64616e7118",
            episode_id: "7da6rfAIJcMfHIpplg5fK3",
            user_id: "f2cfa14b-9f6c-4ea2-bf9a-b4d187b4b33a",
            timestamp: "2023-11-24 11:45:00",
            content: "Arnold Schwarzenegger's insights are valuable!"
        },
        {
            id: "a7b2bfb5-9e7b-48c1-8540-9a742d394e88",
            episode_id: "1z61cbpzCMQmJDiRMsOcG4",
            user_id: "f2cfa14b-9f6c-4ea2-bf9a-b4d187b4b33a",
            timestamp: "2023-11-25 08:30:00",
            content: "Jake Muise's work with Maui Nui Venison is commendable."
        },
        {
            id: "c2a410fb-7795-4e72-835b-456f3cd4b7f8",
            episode_id: "2eKwHbr2oY3nppyAi5xPDb",
            user_id: "d02e95b7-d4a3-4c15-9df3-5cc8c2ecf5af",
            timestamp: "2023-11-26 16:20:00",
            content: "Professor John Vervaeke's teachings on wisdom are thought-provoking."
        },
        {
            id: "49e3d87d-61b2-4e1b-8ab2-235f9d7f9b6c",
            episode_id: "3QqRh1JVuQWCveIGzedlkf",
            user_id: "7a8e0fc8-34da-4e61-89cd-5e80afed8609",
            timestamp: "2023-11-21 14:15:00",
            content: "I can't believe Tetris has such a fascinating backstory!"
        },
        {
            id: "8f3fbbe6-94e9-40c5-88ab-f1db831a1c22",
            episode_id: "4Gqw5HFlq8Y7zNK6wqA5lK",
            user_id: "d02e95b7-d4a3-4c15-9df3-5cc8c2ecf5af",
            timestamp: "2023-11-22 10:45:00",
            content: "Holly Thaggard's journey is truly inspiring. Go Supergoop!"
        },
        {
            id: "712a1ec2-6ba7-4c9d-8913-1a672ae63c8f",
            episode_id: "1vg2pChLepN1TCzsCBglNQ",
            user_id: "f0f3c389-987a-4e66-9a1b-21e26c28b95a",
            timestamp: "2023-11-22 10:45:00",
            content: "Etsy revolutionized the handmade marketplace. Kudos to Rob Kalin!"
        },
        {
            id: "f9f80c6c-7799-45c4-96ea-717f4d17e125",
            episode_id: "7da6rfAIJcMfHIpplg5fK3",
            user_id: "4b71b461-e32f-4b63-a5f1-570bae9254a5",
            timestamp: "2023-11-22 10:45:00",
            content: "Arnold Schwarzenegger's book 'Be Useful' is a must-read!"
        },
        {
            id: "b11d58c3-73c4-4ef3-b8a9-0c0b8cf981b1",
            episode_id: "1z61cbpzCMQmJDiRMsOcG4",
            user_id: "7a8e0fc8-34da-4e61-89cd-5e80afed8609",
            timestamp: "2023-11-22 10:45:00",
            content: "Maui Nui Venison's impact on the food industry is impressive."
        },
        {
            id: "a26586f1-49f3-4a4c-99d4-5580591542c9",
            episode_id: "2eKwHbr2oY3nppyAi5xPDb",
            user_id: "4b71b461-e32f-4b63-a5f1-570bae9254a5",
            timestamp: "2023-11-22 10:45:00",            
            content: "Professor Vervaeke's teachings on wisdom have changed my perspective."
        },
        {
            id: "8e13ee94-d5fc-4e4a-8c84-131b645bf1bf",
            episode_id: "3QqRh1JVuQWCveIGzedlkf",
            user_id: "4b71b461-e32f-4b63-a5f1-570bae9254a5",
            timestamp: "2023-11-22 10:45:00",
            content: "Tetris is a timeless classic! Henk Rogers' efforts were worth it."
        },
        {
            id: "c9eb2434-8c6a-4c77-98d7-8f2e5c0c64e2",
            episode_id: "4Gqw5HFlq8Y7zNK6wqA5lK",
            user_id: "f0f3c389-987a-4e66-9a1b-21e26c28b95a",
            timestamp: "2023-11-22 10:45:00",
            content: "Supergoop! has become a staple in my skincare routine."
        },
        {
            id: "6708907e-8a05-4ea7-8dd4-44ac3d641ab5",
            episode_id: "1vg2pChLepN1TCzsCBglNQ",
            user_id: "b4b3d3bd-156c-4cf3-a6e0-929d9a71b1e2",
            timestamp: "2023-11-22 10:45:00",
            content: "Etsy's impact on supporting artisans is commendable."
        },
        {
            id: "a8f6a5da-76ef-415b-84d6-45c8a0902c3e",
            episode_id: "7da6rfAIJcMfHIpplg5fK3",
            user_id: "b4b3d3bd-156c-4cf3-a6e0-929d9a71b1e2",
            timestamp: "2023-11-22 10:45:00",
            content: "Arnold Schwarzenegger's resilience is truly inspiring!"
        },
    ]);
};