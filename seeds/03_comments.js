/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
    // Deletes ALL existing entries
    await knex('comments').del();
    await knex('comments').insert([
        {
            id: 456789766,
            episode_id: "3QqRh1JVuQWCveIGzedlkf",
            user_id: "202",
            timestamp: "2023-11-21 12:30:00",
            description: "This Tetris episode is fascinating!"
        },
        {
            id: 678971266,
            episode_id: "3QqRh1JVuQWCveIGzedlkf",
            user_id: "202",
            timestamp: "2023-11-21 13:45:00",
            description: "Henk Rogers' journey is truly inspiring."
        },
        {
            id: 126789766,
            episode_id: "4Gqw5HFlq8Y7zNK6wqA5lK",
            user_id: "303",
            timestamp: "2023-11-22 09:15:00",
            description: "Holly Thaggard's story is a testament to perseverance."
        },
        {
            id: 126789745,
            episode_id: "1vg2pChLepN1TCzsCBglNQ",
            user_id: "404",
            timestamp: "2023-11-23 14:00:00",
            description: "Etsy has transformed the way we buy and sell handmade goods."
        },
        {
            id: 126666766,
            episode_id: "7da6rfAIJcMfHIpplg5fK3",
            user_id: "404",
            timestamp: "2023-11-24 11:45:00",
            description: "Arnold Schwarzenegger's insights are valuable!"
        },
        {
            id: 133789766,
            episode_id: "1z61cbpzCMQmJDiRMsOcG4",
            user_id: "303",
            timestamp: "2023-11-25 08:30:00",
            description: "Jake Muise's work with Maui Nui Venison is commendable."
        },
        {
            id: 126789111,
            episode_id: "2eKwHbr2oY3nppyAi5xPDb",
            user_id: "202",
            timestamp: "2023-11-26 16:20:00",
            description: "Professor John Vervaeke's teachings on wisdom are thought-provoking."
        },
        {
            id: 226789762,
            episode_id: "3QqRh1JVuQWCveIGzedlkf",
            user_id: "404",
            timestamp: "2023-11-21 14:15:00",
            description: "I can't believe Tetris has such a fascinating backstory!"
        },
        {
            id: 336789763,
            episode_id: "4Gqw5HFlq8Y7zNK6wqA5lK",
            user_id: "303",
            timestamp: "2023-11-22 10:45:00",
            description: "Holly Thaggard's journey is truly inspiring. Go Supergoop!"
        },
        {
            id: 126333766,
            episode_id: "1vg2pChLepN1TCzsCBglNQ",
            user_id: "202",
            timestamp: "2023-11-22 10:45:00",
            description: "Etsy revolutionized the handmade marketplace. Kudos to Rob Kalin!"
        },
        {
            id: 126781116,
            episode_id: "7da6rfAIJcMfHIpplg5fK3",
            user_id: "202",
            timestamp: "2023-11-22 10:45:00",
            description: "Arnold Schwarzenegger's book 'Be Useful' is a must-read!"
        },
        {
            id: 886789766,
            episode_id: "1z61cbpzCMQmJDiRMsOcG4",
            user_id: "303",
            timestamp: "2023-11-22 10:45:00",
            description: "Maui Nui Venison's impact on the food industry is impressive."
        },
        {
            id: 906789788,
            episode_id: "2eKwHbr2oY3nppyAi5xPDb",
            user_id: "404",
            timestamp: "2023-11-22 10:45:00",            
            description: "Professor Vervaeke's teachings on wisdom have changed my perspective."
        },
        {
            id: 666789101,
            episode_id: "3QqRh1JVuQWCveIGzedlkf",
            user_id: "404",
            timestamp: "2023-11-22 10:45:00",
            description: "Tetris is a timeless classic! Henk Rogers' efforts were worth it."
        },
        {
            id: 644489766,
            episode_id: "4Gqw5HFlq8Y7zNK6wqA5lK",
            user_id: "202",
            timestamp: "2023-11-22 10:45:00",
            description: "Supergoop! has become a staple in my skincare routine."
        },
        {
            id: 446744766,
            episode_id: "1vg2pChLepN1TCzsCBglNQ",
            user_id: "303",
            timestamp: "2023-11-22 10:45:00",
            description: "Etsy's impact on supporting artisans is commendable."
        },
        {
            id: 326789733,
            episode_id: "7da6rfAIJcMfHIpplg5fK3",
            user_id: "404",
            timestamp: "2023-11-22 10:45:00",
            description: "Arnold Schwarzenegger's resilience is truly inspiring!"
        },
    ]);
};