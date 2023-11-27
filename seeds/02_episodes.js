/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
    await knex('episodes').del();
    await knex('episodes').insert([
        {
            id: "3QqRh1JVuQWCveIGzedlkf",
            title: "The Tetris Company: Henk Rogers",
            description: "Tetris is one of the most popular video games of all time, and Henk Rogers helped make it happen. He first discovered the game at a convention in 1988, and immediately saw how elegant and addictive it was. As a software developer based in Japan, Henk set out to obtain selected publishing rights, but waded into a tangle of red tape that stretched from Japan to the U.S. to the Soviet Union. He eventually ventured behind the Iron Curtain to bluster his way into the obscure government office that managed Tetris. While in Moscow, Henk also met the game’s inventor, Alexey Pajitnov, and the two of them hit it off. After much legal wrangling across many time zones, Henk and Alexey won the worldwide rights to the game; and today, Tetris has sold over 500 million copies.",
            channel: "How I Built This with Guy Raz",
            category: 1,
            likes: 0, 
            saves: 0 
        },
        {
            id: "4Gqw5HFlq8Y7zNK6wqA5lK",
            title: "Supergoop!: Holly Thaggard",
            description: "In 2005, the trajectory of Holly Thaggard's life completely changed when a good friend of hers was diagnosed with skin cancer. Holly realized that most people weren't taking sunscreen seriously, so she sidelined her vocation as a harpist to dive headfirst into the unfamiliar world of SPF. After a false start trying to market her sunscreen to elementary schools, Holly pivoted to retail, hiring a publicist she could barely afford. She eventually got her products into Sephora, a success that helped turn Supergoop! into a multi-million dollar brand.",
            channel: "How I Built This with Guy Raz",
            category: 1,
            likes: 0, 
            saves: 0 
        },
        {
            id: "1vg2pChLepN1TCzsCBglNQ",
            title: "Etsy: Rob Kalin",
            description: "Rob Kalin founded Etsy for people like him: makers and hobbyists. In 2005, he was kicking around New York trying to find buyers for his hand-made furniture, when he noticed that other craftspeople had the same need. So he and a few friends built a website where makers could sell a wide range of goods. Rob named it after an Italian phrase he heard in a Fellini film, and within three years, Etsy passed $10 million in sales. But as a young founder, Rob struggled to manage the rapidly-growing company; and in 2011, after being fired without warning, he returned to a quieter life as a maker and small-businessman. Meanwhile, Etsy has become one of the most popular online marketplaces in the world, with $2.5 billion in revenue.",
            channel: "How I Built This with Guy Raz",
            category: 1,
            likes: 0, 
            saves: 0 
        },
        {
            id: "7da6rfAIJcMfHIpplg5fK3",
            title: "Be Useful - Arnold Schwarzenegger on 7 Tools for Life, Thinking Big, Building Resilience, Processing Grief, and More",
            description: "Arnold Schwarzenegger is an Austrian-born bodybuilder, actor, businessman, philanthropist, bestselling author, and politician. He served as the thirty-eighth governor of California. His new book, Be Useful: Seven Tools for Life, is out October 10th, and his daily email newsletter Pump Club recently hit more than 500,000 subscribers and continues to grow as a positive corner of the Internet.",
            channel: "The Tim Ferriss Show",
            category: 1,
            likes: 0, 
            saves: 0 
        },
        {
            id: "1z61cbpzCMQmJDiRMsOcG4",
            title: "Jake Muise - The Relentless Pursuit of Innovation, Quality, and Meaning",
            description: "Jake Muise is CEO at Maui Nui Venison, a company he co-founded in 2017 that works to balance invasive axis deer populations on the island of Maui, channeling that management into incredible nutrient-dense food. Maui Nui was selected for Fast Company’s “Top 10 Most Innovative Companies in Agriculture of 2023,” and its venison has been served in restaurants across the country, including Alinea, The French Laundry, and Saison. Prior to Maui Nui, Jake was executive director of the Axis Deer Institute for 12 years, part of a two-decades-long project focused on axis deer and their long-term management in Hawai’i.",
            channel: "The Tim Ferriss Show",
            category: 1,
            likes: 0, 
            saves: 0 
        },
        {
            id: "2eKwHbr2oY3nppyAi5xPDb",
            title: "Professor John Vervaeke - How to Build a Life of Wisdom, Flow, and Contemplation",
            description: "John Vervaeke is a professor of psychology at the University of Toronto. He currently teaches courses on thinking and reasoning with an emphasis on cognitive development, intelligence, rationality, mindfulness, and the psychology of wisdom. Vervaeke is the director of UToronto’s Consciousness and Wisdom Studies Laboratory and its Cognitive Science program, where he teaches Introduction to Cognitive Science and The Cognitive Science of Consciousness, emphasizing the 4E model, which contends that cognition and consciousness are embodied, embedded, enacted, and extended beyond the brain. Vervaeke has taught courses on Buddhism and Cognitive Science in the Buddhism, Psychology, and Mental Health program for 15 years.",
            channel: "The Tim Ferriss Show",
            category: 1,
            likes: 0, 
            saves: 0
        },
        {
            id: "5Lz9Cbpk3XlOaZkoEnUU6z",
            title: "Apple Supporting RCS in 2024- iMessage Gets RCS, Mircosoft Ignite, AI Chatbots",
            description: "Apple has reversed course and is adding RCS support to iMessage next year. What was announced at Microsoft Ignite 2023? And Common Sense Media has ratings for ten chatbots & AI services that parents should be cautious with when their kids interact with them. Breaking news Thursday morning as Apple has announced that they are adding RCS support to iMessage next year. Will Sattelberg of Android Police shares the details of what this means. Microsoft Ignite 2023 is happening in Seattle currently, and a lot has been announced at the event. Daniel Rubino of Windows Central breaks down some of the announcements made. Jason shares an exciting story about noise-canceling headphones that could let users choose which sounds they may want to hear. Mikah talks about Common Sense Media's ratings of chatbots and other AI services that warn parents about how certain AI services may be unsafe for kids.",
            channel: "Tech News Weekly",
            category: 2,
            likes: 0, 
            saves: 0 
        },
        {
            id: "51BA6tlVpdUJx7Lhw4I7s8",
            title: "Cell Phones: The Origin Story- Apple Event Preview, Apple/Google Search Battle, Cell Phones Turn 40",
            description: "This week on Tech News Weekly, Jason and Mikah go back in time to the origins of cell phones with an AT&T engineer who helped build the first network, get the inside scoop on Apple's next event from Bloomberg's Mark Gurman, social media trends, and more. We kick off the show by chatting with Stu Tartarone, a veteran of AT&T who helped develop the first cell phone network and make the first cell phone call back in 1983. They discuss the skepticism around early cell phone market research, the distributed network architecture that enabled cellular technology, and how concepts like pre-dialing numbers were revolutionary at the time. Mark Gurman of Bloomberg joins to preview Apple's upcoming 'Scary Fast' October event. He explains that the name hints at new M3 chips for the MacBook Pro and 24-inch iMac. Mark also shares details on the future of AirPods and AirPods Max. Mikah analyzes Google's reported plan to block Apple from making inroads in search through lobbying and pushing its own apps. Google pays Apple billions to remain the iPhone's default search, but wants to prevent Apple's Spotlight from becoming competition. Jason covers the shutdown of Twitter alternative T2, renamed Pebble. It never gained traction despite its familiar format and focus on safety. Social media platforms are struggling to retain users divided across multiple networks.",
            channel: "Tech News Weekly",
            category: 2,
            likes: 0, 
            saves: 0 
        },
        {
            id: "4uSJdUCGbxgNrSzCdQDimN",
            title: "Developers Unite Against Unity- Smart Car Privacy, MGM Resorts, Google Antitrust",
            description: "Game developers using the Unity Engine are crying afoul over Unity's pricing structure. Why are cars the worst product category for user privacy? A cyberattack shut down MGM Resorts for some time. And why the U.S. government is blasting Google for paying $10 billion a year to cut out search rivals. Unity has updated its pricing structure, leading many within the gaming & developer community to grow frustrated with the game engine. Kyle Orland of Ars Technica stops by the show to explain what happened. Misha Rykov of the Mozilla Foundation joins the show to discuss the Mozilla Foundation's Privacy Not Included guide and why cars are not the best product for a user's security and privacy. Jason Howell shares how a cyberattack against MGM Resorts shut down its services for a period of time. And Mikah Sargent talks about the U.S. government's anti-trial against Google as the company is taken to trial over its monopolistic grasp on online searching.",
            channel: "Tech News Weekly",
            category: 2,
            likes: 0, 
            saves: 0 
        },
        {
            id: "7MyTlSNl8uxWvVPhegcwuq",
            title: "Dear Tim Apple, You Fix It",
            description: "Capturing spatial video on iPhone, our font opinions, whether we use journaling apps, and when we tell our non-techy friends to update their software.",
            channel: "Clockwise",
            category: 2,
            likes: 0, 
            saves: 0 
        },
        {
            id: "5qXYyc2GLW7KZkQncB3ini",
            title: "Grumpy About Changes",
            description: "The 'Twitter replacements' we're using, our hopeful finds for Prime Day, how Apple will or won't comply with the Digital Markets Act, and our toxic relationship with streaming services.",
            channel: "Clockwise",
            category: 2,
            likes: 0, 
            saves: 0 
        },
        {
            id: "2rVSVPwIZKCpor9RTn6pF8",
            title: "That Satisfying Click",
            description: "Our current device-charging setups, how we manage our windows, our weather apps of choice, and the travel items that have saved our bacon.",
            channel: "Clockwise",
            category: 2,
            likes: 0, 
            saves: 0 
        },
        {
            id: "43B7xc68AY2PO7jckZF6TB",
            title: "Unhappy Billionaires",
            description: "The Minimalists speak with Rey Flemings, “concierge to the 1%,” about the problem with luxury goods, finding happiness in what we already have, and why people care too much about the size of their homes.",
            channel: "The Minimalists Podcast",
            category: 3,
            likes: 0, 
            saves: 0 
        },
        {
            id: "2F4RYiMi8h9FbQyhrSUFjr",
            title: "Mind Shift",
            description: "The Minimalists speak with Erwin Raphael McManus about the upsides and downsides of changing your mind, finding the motivation to pursue your dreams, and more.",
            channel: "The Minimalists Podcast",
            category: 3,
            likes: 0, 
            saves: 0 
        },
        {
            id: "0qQbEwstqDnq4yXRTiXLUd",
            title: "Building a Non-Anxious Life",
            description: "The Minimalists speak with psychologist Dr. John Delony about finding peace in difficult times.",
            channel: "The Minimalists Podcast",
            category: 3,
            likes: 0, 
            saves: 0 
        },
        {
            id: "0v4AcCvSia5kXMUXMm73ge",
            title: "The 5 Biggest Muscle-Building Mistakes- With Jay Ferruggia",
            description: "If you want to get healthier, stronger, and more resilient, one of the best things you can do is build muscle. Regular strength training can contribute to your longevity, improve your brain health, optimize your metabolism, and so much more. But unfortunately, there are a lot of myths and misconceptions out there about what it takes to put on muscle. My friend Jay Ferrugia is an elite fitness and mindset coach. His client base spans from professional athletes to everyday folks. Jay is so successful because he makes training simple and realistic. He’s back on The Model Health Show to share the five biggest mistakes people make when they’re trying to build muscle. You’ll learn about selecting the right exercises, the right weights, and other habits and behaviors that can help you get better results. We’re diving into topics like progressive overload, recovery, and nutrition. Jay is a seasoned expert in the realm of fitness, and I know his insights are going to empower you to build muscle as effectively as possible. Enjoy!",
            channel: "The Model Health Show",
            category: 3,
            likes: 0, 
            saves: 0 
        },
        {
            id: "0SOdGAk89hiZOYPi2uxw17",
            title: "Boost Fat Loss & Upgrade Your Health With Science-Backed Tools For Beating Stress",
            description: "Life’s stressors are a normal part of human existence. In fact, your body’s stress response system is a critical survival mechanism that allows you to respond in the event of a threat. And while we can never entirely eliminate stressors in our lives, we can improve the way we respond to stress. On this episode of The Model Health Show, you’re going to learn powerful strategies on how to improve your body’s natural stress responses. This compilation episode features three world leading experts on the topics of stress, adrenal health, and rewiring your brain. You’ll hear how habits like sleep, exercise, and nutrition can increase your resilience, and specific practices you can implement to optimally respond to stress. Building your resilience to stressful circumstances is an impactful life skill we can all implement. This episode is bringing you powerful insights on how to decompress, heal, and become a healthier, happier version of yourself. So click play, listen in, and enjoy the show!",
            channel: "The Model Health Show",
            category: 3,
            likes: 0, 
            saves: 0 
        },
        {
            id: "2FflNQxpqXogWXt2aTk1iY",
            title: "The Truth About Overeating, Addiction, & The Scarcity Brain- With Michael Easter",
            description: "What is the underlying factor that drives humans to engage in behaviors that are damaging? Whether it’s gambling, drinking, or eating to excess, it’s not uncommon in our society for folks to get sucked into repetitive, detrimental habits. It turns out, there’s an evolutionary foundation behind this behavior, and it’s the topic of the new book, The Scarcity Brain. Today’s guest, Michael Easter is a professor and the author of The Comfort Crisis and The Scarcity Brain. His work encompasses the idea of utilizing modern science and evolutionary wisdom in order to lead healthier, more fulfilled lives. He joins this episode of The Model Health Show to share the fascinating science of scarcity, moderation, fixation, and happiness. You’re going to learn about the scarcity loop and how it drives us to repeat unhealthy habits. We’ll talk about the psychology of gambling, overeating, excessive screen time, and so much more. If you want to break the cycle of constantly craving more, this interview will help you create meaningful change. I hope you enjoy this interview with Michael Easter!",
            channel: "The Model Health Show",
            category: 3,
            likes: 0,
            saves: 0 
        },
        {
            id: "6dzOd1fP9cVlcflIIuaQp1",
            title: "Eagles & Chiefs: A Super Bowl Rematch on Monday Night Football",
            description: "After more than a few lackluster primetime games over the first half of the NFL season, tonight’s Monday Night Football matchup between the Philadelphia Eagles and Kansas City Chiefs is sure to deliver a feast to kick off Thanksgiving Week. Not only is it the two best teams from each conference, with two presumptive MVP candidates at quarterback on each side, it’s also only the second time we’ve seen a rematch from the previous year’s Super Bowl on Monday Night Football. So today, Andrew Hawkins joins the show to break down every major aspect ahead of tonight’s game, and gives his take on one…well actually two… of the most anticipated meetings of the season.",
            channel: "ESPN Daily",
            category: 4,
            likes: 0, 
            saves: 0 
        },
        {
            id: "6teCGosTmGyhstNkyiaj45",
            title: "Men's College Basketball Looks a Lot Different This Year. Here's Why",
            description: "Another season of men’s college basketball is upon us…and we really don’t know what to make of it. The usual teams adorn the top of the preseason polls: Kansas, Duke, and Michigan State, but there’s really no clear frontrunner that looks primed to stand above the crowd. Add to the wide-open field a whole crop of familiar faces in new places, as NIL deals and the transfer portal continue to dominate the sport. So today, Myron Medcalf returns to give us some clarity as the marathon towards March Madness starts.",
            channel: "ESPN Daily",
            category: 4,
            likes: 0, 
            saves: 0 
        },
        {
            id: "6A7YiJ090l6qdOMMGI8t5m",
            title: "Jeff Passan's 2023 World Series Preview",
            description: "When the baseball season got underway, the World Series favorites were: big market juggernauts like the Yankees, Dodgers, Padres, and Mets; annual contenders like the Braves, and Astros; and plucky dark horses like the Phillies and Blue Jays. But fast forward to the end of October, and none of those front runners remain standing. The Texas Rangers and the Arizona Diamondbacks — who had a combined 2% chance to lift the trophy — are ready to face off in a battle of underdogs. So Jeff Passan tells David Dennis Jr. how they got here, and how he thinks this series will unfold. Arizona Diamondbacks, Texas Rangers, Corbin Carroll, Jordan Montgomery, Max Scherzer, Zac Gallen, Evan Longoria, Christian Walker, Tommy Pham, Corey Seager, Marcus Semien, Adolis Garcia,",
            channel: "ESPN Daily",
            category: 4,
            likes: 0, 
            saves: 0 
        },
        {
            id: "0JZBtRdXzecwKGB1JZFje3",
            title: "Ryan Fitzpatrick, Andrew Whitworth, NFL Week 11 Picks And Preview, Fyre Fest And The Bengals Might Be Dead",
            description: "Joe Burrow is injured and what shouldve been the best TNF was a huge bummer. Ravens offense looked good and we had drone delays. Week 11 Picks and Preview for every game including memes trying to spinzone himself into a 3rd string running back, can the Rams win a game, Browns starting DTR and more. Fantasy fuccbois. Andrew Whitworth and Ryan Fitzpatrick join us in studio to talk about TNF, what they miss from the the league, quarterback and line play and tons more. We finish with Fyre Fest of the week.",
            channel: "Pardon My Take",
            category: 4,
            likes: 0, 
            saves: 0 
        },
        {
            id: "0c5tB5femGxEW3r0xZBHX6",
            title: "Clarissa Thompson, 4X World Series Champ Bruce Bochy, CFB And The Bills Are In Trouble",
            description: "The Bills are broken. We talk MNF and the resurgence of Russell Wilson. College Football talk, Harbaugh remains the best quote, Jimbo fired, Jayden Daniels Heisman and getting JMU into a bowl game. Hot Seat/Cool Throne including Hank’s final lighthouse report asking what exactly is real? And the Waterdogs are in Philly. Charissa Thompson joins us in studio to talk football, TNF, her career in broadcasting, blocking out the haters and more. Texas Rangers Manager Bruce Bochy joins the show to talk about the World Series Run, managing baseball, Tim Lincecum, his love of baseball and more. We finish with guys on chicks.",
            channel: "Pardon My Take",
            category: 4,
            likes: 0, 
            saves: 0 
        },
        {
            id: "6gWn1NixTxWr4E9PudHHGh",
            title: "Mike Florio, Thanksgiving Day Preview, Week 11 Picks, CFB & Lotteryballgate",
            description: "Monday Night Football Recap after the Eagles big win and the Chiefs may be in trouble with their wide receivers. We talk about every Thanksgiving game and Black Friday Jets/Dolphins mixed in with some listener Questions about Thanksgiving. Hot Seat/Cool Throne including talk about CFB and the big weekend ahead of us. Our crazy uncle Mike Florio joins the show to talk NFL, Bengals injury report, Hank vs Florio on fan fiction and tons more. We then do Week 11 preview and picks for every Sunday game and finish with Lottery Ball Gate as Big Cat addresses Max being a loser and coward and everything that is wrong with America.",
            channel: "Pardon My Take",
            category: 4,
            likes: 0, 
            saves: 0 
        },
        {
            id: "0M2MiAX4LPq8pmDjcMTWuQ",
            title: "The Rock",
            description: "Dwayne \"The Rock\" Johnson is an actor, producer, entrepreneur, and retired professional wrestler.",
            channel: "The Joe Rogan Experience",
            category: 5,
            likes: 0, 
            saves: 0 
        },
        {
            id: "7edwvm2c6Ieuzun4xtFYCJ",
            title: "Elon Musk",
            description: "Elon Musk is a business magnate, designer, and engineer. His portfolio of businesses include Tesla, Inc., SpaceX, Neuralink, X, and many others.",
            channel: "The Joe Rogan Experience",
            category: 5,
            likes: 0, 
            saves: 0 
        },
        {
            id: "66edV3LAbUXa26HG1ZQaKB",
            title: "Sam Altman",
            description: "Sam Altman is the CEO of OpenAI, an artificial intelligence research and development company.",
            channel: "The Joe Rogan Experience",
            category: 5,
            likes: 0, 
            saves: 0 
        },
        {
            id: "6Fcmx9F4PjvJzU9RSH57qp",
            title: "Lucy Hale: Sober Doesn't Mean Boring",
            description: "Join Alex in the studio for a powerful sit-down interview with Lucy Hale. Lucy opens up about the struggles she was facing behind the scenes and reveals the absolute rock bottom moment that led to her getting sober. She reflects on how drinking negatively impacted both her friendships and romantic relationships. Lucy tells Alex about what life looks like sober and how she’s been navigating dating and sex without alcohol. Daddy Gang, get ready because this is an amazing and inspiring conversation you won't want to miss!",
            channel: "Call Her Daddy",
            category: 5,
            likes: 0, 
            saves: 0 
        },
        {
            id: "34oUT332TRjsnXKVBXTrNi",
            title: "Alix Earle: Secrets, Sex & Scandals",
            description: "Daddy gang, get ready for the season 4 premiere of Call Her Daddy with the Internet’s biggest “It Girl,” Alix Earle. Travel to New Jersey to meet Alix’s entire family and step inside her home to experience the chaos up close. For the first time, Alix opens up about the years of embarrassment and bullying after a public scandal tore her family apart. She addresses the rumors head-on regarding a certain NFL player and her alleged role as a homewrecker. She invites Alex Cooper to her first post-grad apartment in Miami to experience life from her POV. The girls get ready for a night out and talk about Alix’s dating life, her A-list DMs, her most toxic traits, and more! Alix spills the tea during a game of truth or drink and talks about her sex life for the first time ever. From the club to the beach to the deep hungover talks the morning after - this episode takes you on a full journey. Prepare to get to know Alix Earle like never before.",
            channel: "Call Her Daddy",
            category: 5,
            likes: 0, 
            saves: 0 
        },
        {
            id: "7rpxJQvDaop8SI510dZnJ7",
            title: "Kristin Cavallari: So You Want to Date an Athlete?",
            description: "This week, Father Cooper sits down with Kristin Cavallari. Can you imagine being in high school and having grown men with cameras following you around to stir up drama? Kristin can - and she reflects on those Laguna Beach days and explains why MTV should now be paying for the entire cast’s therapy. And, with Alex and Kristin well experienced in the world of hooking up with professional athletes, they give the inside scoop on what it’s like to date (or marry) one. Kristin opens up about her divorce - and how she knew when it was time to end her marriage to Jay Cutler. Kristin is hilariously honest and details a date gone horribly wrong with a stuntman, why she’s attracting an influx of 26 year olds, and what she looks for in a partner.",
            channel: "Call Her Daddy",
            category: 5,
            likes: 0, 
            saves: 0 
        },
        {
            id: "5Px9irXe1RfgLTqPJuKHrx",
            title: "Where Scams Are Born",
            description: "An app for open money laundering, a corridor of massive casinos in the middle of nowhere, and the global scamdemic.",
            channel: "Slate Daily Feed",
            category: 6,
            likes: 0, 
            saves: 0 
        },
        {
            id: "7Aj1VomGV18BzpUTznveFr",
            title: "Inside OpenAI's Implosion",
            description: "OpenAI was the hottest startup in Silicon Valley off the success of ChatGPT. Then, the board fired Sam Altman.",
            channel: "Slate Daily Feed",
            category: 6,
            likes: 0, 
            saves: 0 
        },
        {
            id: "1NWSPg3TigUFh0dpAo4Fp7",
            title: "Self-Driving Cars Crash Into Reality",
            description: "In August, California regulators voted to allow self-driving car companies like Cruise and Waymo to expand their operations and start offering robotaxi services. After a litany of questionable behaviors ranging from the annoying to terrifying, the California DMV has suspended Cruise’s permits, effective immediately. Is this just a temporary setback, or is the driverless future further off than it looked just a few months ago?",
            channel: "Slate Daily Feed",
            category: 6,
            likes: 0, 
            saves: 0 
        },
        {
            id: "7nxeDBOb6BBKoecyq7SrVU",
            title: "The Supreme Court's Shadow Docket",
            description: "Roe. Brown. Obergefell. Dobbs. These Supreme Court decisions are the ones that make headlines, and eventually history books. But today, the vast majority of the Court's work actually happens out of the public eye, on what's become known as the shadow docket. The story of that transformation spans more than a century, and doesn't fall neatly along partisan lines. Today, thanks to our friends at : how the so-called court of last resort has gained more and more power over American policy, and why the debates we don't see are often more important than the ones we do.",
            channel: "The NPR Politics Podcast",
            category: 6,
            likes: 0, 
            saves: 0 
        },
        {
            id: "6cqxA1a4xAcGvp8Ina9TD2",
            title: "Israel and Hamas Agree to Temporary Ceasefire and Hostage Release",
            description: "After six weeks of war, Israel and Hamas have agreed to a four-day pause in hostilities. As part of the agreement, 50 hostages currently held by Hamas and 150 Palestinian prisoners held in Israel will be released. The deal is the result of weeks of negotiations, but a long-term solution remains elusive.",
            channel: "The NPR Politics Podcast",
            category: 6,
            likes: 0, 
            saves: 0 
        },
        {
            id: "7a6sbqc1HMWRh6fhOqL6H6",
            title: "GOP Presidential Hopefuls Are Trying To Thread The Needle On Abortion",
            description: "For decades, abortion has been a motivating force for the Republican base. But in a post-Roe, world, it's become a political liability in general elections. That leaves 2024 presidential hopefuls attempting a balancing act: how to appeal to primary base voters that oppose abortion rights, without alienating the moderate, independent and swing voters who support them.",
            channel: "The NPR Politics Podcast",
            category: 6,
            likes: 0, 
            saves: 0 
        },
        {
            id: "08dm5v1mt37ShKZWG5SMiZ",
            title: "Fine Art and Meat Cleavers",
            description: "In 1913, museums and art galleries in London received a memo from the police. It told them to be careful when they let in visitors – women might try to attack the art.",
            channel: "Criminal",
            category: 7,
            likes: 0, 
            saves: 0 
        },
        {
            id: "6of1oaiqcMxCTXa5DTBuy3",
            title: "The Newsroom",
            description: "Jeff German was a reporter for over 40 years in Las Vegas. He spent his life covering the mafia, corruption, and murder. In 2022, he was found killed outside his home. His colleagues at the Las Vegas Review-Journal tried to figure out why he had died—and if his death had anything to do with his work.",
            channel: "Criminal",
            category: 7,
            likes: 0, 
            saves: 0 
        },
        //////////above need comments
        {
            id: "1IFdGnmCYEdGUGTrXnlEmC",
            title: "The Magdalene Laundries",
            description: "When she was 14 years old, Elizabeth Coppin was sent to a place called Peacock Lane in Cork, Ireland. It was a laundry business run by a Catholic order of nuns. Elizabeth noticed bars on its windows.",
            channel: "Criminal",
            category: 7,
            likes: 0, 
            saves: 0 
        },
        {
            id: "4841efUVCloiMZo0tr2K7J",
            title: "MISSING: Reed Jeppson",
            description: "Reed Jeppson, a Salt Lake City teen, went outside to feed his dogs one Sunday afternoon in 1964 – and vanished, with the dogs, into thin air. Decades later, his heartbroken family still has so many unanswered questions. If you have any information about Reed, please contact Salt Lake City police at 801-799-3000. If Reed is alive today, he’s 74-years-old. He’s white, with medium blond hair and blue eyes. At the time of his disappearance, he was 5’6 and 140 pounds, and he had braces on his top and bottom teeth.",
            channel: "Crime Junkie",
            category: 7,
            likes: 0, 
            saves: 0 
        },
        {
            id: "54BbccglItzSKlxDf3ed6A",
            title: "MURDERED: Patricia Newsom",
            description: "After nearly 50 years as East Haven, Connecticut’s Jane Doe, police have finally identified the murder victim found behind Bradlees Department Store as 18-year-old Patricia Newsom. Now, they need your help to catch her killer – or killers. If you have any information about Patricia Newsom, call East Haven police at 203-468-3824.",
            channel: "Crime Junkie",
            category: 7,
            likes: 0, 
            saves: 0 
        },
        {
            id: "0cvZ3q2oWtpvA1mVYUUx9d",
            title: "MYSTERIOUS DEATH OF: Molly Young",
            description: "On March 24th, 2012, Molly Young rushed to her on-again, off-again boyfriend Richie Minton's aid, only to be found dead hours later in his Carbondale, Illinois apartment with a gunshot wound to the head. Did she take her own life, or was she the victim of foul play? With lingering doubts about the investigation's integrity, the search for answers continues.",
            channel: "Crime Junkie",
            category: 7,
            likes: 0, 
            saves: 0 
        },
        {
            id: "1RJB8ZpC1ggFHoyGl1m4IH",
            title: "Italian Deli vs Jewish Deli with Louis Katz & Ian Fidance",
            description: "Today's episode is an Italian Deli vs Jewish Deli with Louis Katz & Ian Fidance!",
            channel: "Sal Vulcano & Joe DeRosa are Taste Buds",
            category: 8,
            likes: 0, 
            saves: 0 
        },
        {
            id: "2DO5xvoqcbBYkUMeqv27fF",
            title: "Eggs Benedict vs Pancakes with Josh Nasar",
            description: "Today the buddies are joined by comedian Josh Nasar! The battle today is Eggs Benedict vs Pancakes! Who you got?!",
            channel: "Sal Vulcano & Joe DeRosa are Taste Buds",
            category: 8,
            likes: 0, 
            saves: 0 
        },
        {
            id: "1rYKpdRb8JIChFW4GXcmg6",
            title: "Adulthood vs Childhood",
            description: "Today's battle is Adulthood vs Childhood with comedian Rick Glassman.",
            channel: "Sal Vulcano & Joe DeRosa are Taste Buds",
            category: 8,
            likes: 0, 
            saves: 0 
        },
        {
            id: "25nWDO1mIQmiMEOshixvCr",
            title: "Married with No Benefits",
            description: "Conan talks to Cammy from Buenos Aires about her work as a translator, the rules of dating, and Conan’s potential as a wingman.",
            channel: "Conan O'Brien Needs A Friend",
            category: 8,
            likes: 0, 
            saves: 0 
        },
        {
            id: "7J61x1S5IEm4gJww7vplXa",
            title: "It's Wine O'Clock Everywhere",
            description: "Conan chats with Yvonne from Hawke's Bay, New Zealand about smelling wine, tasting wine, and then just all be drunk.",
            channel: "Conan O'Brien Needs A Friend",
            category: 8,
            likes: 0, 
            saves: 0 
        },
        {
            id: "3fZZX7kyG4TS9xOOGqEwOT",
            title: "Three Days From Retirement",
            description: "Conan chats with Bill from Winthrop Harbor, Illinois about his German Shepherd Hondo, working for a funeral home, and retirement life for dogs.",
            channel: "Conan O'Brien Needs A Friend",
            category: 8,
            likes: 0, 
            saves: 0 
        }
    ]);
};