/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
    // Deletes ALL existing entries
    await knex('episodes').del();
    await knex('episodes').insert([
        {
            id: "3QqRh1JVuQWCveIGzedlkf",
            title: "The Tetris Company: Henk Rogers",
            description: "Tetris is one of the most popular video games of all time, and Henk Rogers helped make it happen. He first discovered the game at a convention in 1988, and immediately saw how elegant and addictive it was. As a software developer based in Japan, Henk set out to obtain selected publishing rights, but waded into a tangle of red tape that stretched from Japan to the U.S. to the Soviet Union. He eventually ventured behind the Iron Curtain to bluster his way into the obscure government office that managed Tetris. While in Moscow, Henk also met the game’s inventor, Alexey Pajitnov, and the two of them hit it off. After much legal wrangling across many time zones, Henk and Alexey won the worldwide rights to the game; and today, Tetris has sold over 500 million copies.",
            channel: "How I Built This with Guy Raz",
            category: 1
            },
        {
            id: "4Gqw5HFlq8Y7zNK6wqA5lK",
            title: "Supergoop!: Holly Thaggard",
            description: "In 2005, the trajectory of Holly Thaggard's life completely changed when a good friend of hers was diagnosed with skin cancer. Holly realized that most people weren't taking sunscreen seriously, so she sidelined her vocation as a harpist to dive headfirst into the unfamiliar world of SPF. After a false start trying to market her sunscreen to elementary schools, Holly pivoted to retail, hiring a publicist she could barely afford. She eventually got her products into Sephora, a success that helped turn Supergoop! into a multi-million dollar brand.",
            channel: "How I Built This with Guy Raz",
            category: 1
            },
        {
            id: "1vg2pChLepN1TCzsCBglNQ",
            title: "Etsy: Rob Kalin",
            description: "Rob Kalin founded Etsy for people like him: makers and hobbyists. In 2005, he was kicking around New York trying to find buyers for his hand-made furniture, when he noticed that other craftspeople had the same need. So he and a few friends built a website where makers could sell a wide range of goods. Rob named it after an Italian phrase he heard in a Fellini film, and within three years, Etsy passed $10 million in sales. But as a young founder, Rob struggled to manage the rapidly-growing company; and in 2011, after being fired without warning, he returned to a quieter life as a maker and small-businessman. Meanwhile, Etsy has become one of the most popular online marketplaces in the world, with $2.5 billion in revenue.",
            channel: "How I Built This with Guy Raz",
            category: 1
            },
        {
            id: "7da6rfAIJcMfHIpplg5fK3",
            title: "#696: Be Useful - Arnold Schwarzenegger on 7 Tools for Life, Thinking Big, Building Resilience, Processing Grief, and More",
            description: "Arnold Schwarzenegger is an Austrian-born bodybuilder, actor, businessman, philanthropist, bestselling author, and politician. He served as the thirty-eighth governor of California. His new book, Be Useful: Seven Tools for Life, is out October 10th, and his daily email newsletter Pump Club recently hit more than 500,000 subscribers and continues to grow as a positive corner of the Internet.",
            channel: "The Tim Ferriss Show",
            category: 1
            },
        {
            id: "1z61cbpzCMQmJDiRMsOcG4",
            title: "#678: Jake Muise - The Relentless Pursuit of Innovation, Quality, and Meaning",
            description: "Jake Muise is CEO at Maui Nui Venison, a company he co-founded in 2017 that works to balance invasive axis deer populations on the island of Maui, channeling that management into incredible nutrient-dense food. Maui Nui was selected for Fast Company’s “Top 10 Most Innovative Companies in Agriculture of 2023,” and its venison has been served in restaurants across the country, including Alinea, The French Laundry, and Saison. Prior to Maui Nui, Jake was executive director of the Axis Deer Institute for 12 years, part of a two-decades-long project focused on axis deer and their long-term management in Hawai’i.",
            channel: "The Tim Ferriss Show",
            category: 1
            },
        {
            id: "2eKwHbr2oY3nppyAi5xPDb",
            title: "#657: Professor John Vervaeke - How to Build a Life of Wisdom, Flow, and Contemplation",
            description: "John Vervaeke is a professor of psychology at the University of Toronto. He currently teaches courses on thinking and reasoning with an emphasis on cognitive development, intelligence, rationality, mindfulness, and the psychology of wisdom. Vervaeke is the director of UToronto’s Consciousness and Wisdom Studies Laboratory and its Cognitive Science program, where he teaches Introduction to Cognitive Science and The Cognitive Science of Consciousness, emphasizing the 4E model, which contends that cognition and consciousness are embodied, embedded, enacted, and extended beyond the brain. Vervaeke has taught courses on Buddhism and Cognitive Science in the Buddhism, Psychology, and Mental Health program for 15 years.",
            channel: "The Tim Ferriss Show",
            category: 1
        },
    ]);
};