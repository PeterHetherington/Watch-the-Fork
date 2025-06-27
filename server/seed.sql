create table gameReviews(
  id INT generated always as identity primary key,
  name TEXT,
  game_id INT references games(id),
  review TEXT,
  rating NUMERIC(3, 1)
);

create table games(
  id INT generated always as identity primary key,
  name TEXT,
  pc boolean,
  ps5 boolean,
  xbox boolean,
  nintendo boolean,
  genre TEXT,
  maxPlayers INT,
  description TEXT,
  img TEXT
);

CREATE TABLE movies (
  id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  name TEXT, 
  genre TEXT,
  description TEXT,
  rating TEXT
);

CREATE TABLE movie_reviews(
  id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  name TEXT,
  movies_id INT REFERENCES movies(id),
  reviews TEXT,
  user_ratings NUMERIC(3, 1)
);

ALTER TABLE movies ADD img TEXT;

ALTER Table gameReviews ADD COLUMN likes INT DEFAULT 0;

ALTER Table movie_reviews ADD COLUMN likes INT DEFAULT 0;

INSERT INTO games(name, pc, ps5, xbox, nintendo, genre, maxPlayers, description, img) VALUES
('Hollow Knight', true, true, true, true, 'Metroidvania', 1, 'Explore a vast, ruined kingdom of insects in this atmospheric action-platformer.', 'https://upload.wikimedia.org/wikipedia/en/0/04/Hollow_Knight_first_cover_art.webp'),
('Elden Ring', true, true, true, false, 'Action RPG', 1, 'An open-world fantasy epic from the creators of Dark Souls, filled with danger and mystery.', 'https://upload.wikimedia.org/wikipedia/en/b/b9/Elden_Ring_Box_art.jpg'),
('Baldurs Gate 3', true, true, true, false, 'RPG', 2, 'A deep, story-driven RPG set in the Dungeons & Dragons universe.', 'https://upload.wikimedia.org/wikipedia/en/1/12/Baldur%27s_Gate_3_cover_art.jpg'),
('God of War Ragnarok', false, true, false, false, 'Action-Adventure', 1, 'Kratos and Atreus journey through Norse realms in this mythic action sequel.', 'https://upload.wikimedia.org/wikipedia/en/e/ee/God_of_War_Ragnar%C3%B6k_cover.jpg'),
('Minecraft', true, true, true, true, 'Sandbox', 4, 'Build, explore, and survive in a blocky, procedurally generated world.', 'https://upload.wikimedia.org/wikipedia/en/b/b6/Minecraft_2024_cover_art.png'),
('Fortnite', true, true, true, true, 'Battle Royale', 4, 'A fast-paced battle royale with building mechanics and seasonal events.', 'https://upload.wikimedia.org/wikipedia/en/7/72/Fortnite_BR_cover.jpg'),
('Call of Duty Modern Warfare III', true, true, true, false, 'Shooter', 6, 'The latest installment in the iconic military shooter series.', 'https://upload.wikimedia.org/wikipedia/en/f/f6/MWIII_Cover_Art.png'),
('League of Legends', true, false, false, false, 'MOBA', 5, 'A competitive 5v5 strategy game with a massive champion roster.', 'https://cdn.mobygames.com/covers/17214947-league-of-legends-windows-front-cover.jpg'),
('Valorant', true, true, true, false, 'Shooter', 5, 'A tactical hero shooter blending precise gunplay with unique abilities.', 'https://upload.wikimedia.org/wikipedia/en/thumb/b/ba/Valorant_cover.jpg/250px-Valorant_cover.jpg'),
('Apex Legends', true, true, true, false, 'Battle Royale', 3, 'A squad-based battle royale with unique characters and fast movement.', 'https://upload.wikimedia.org/wikipedia/en/d/db/Apex_legends_cover.jpg'),
('Cyberpunk 2077', true, true, true, false, 'RPG', 1, 'Explore a dystopian future as a mercenary in Night City.', 'https://upload.wikimedia.org/wikipedia/en/9/9f/Cyberpunk_2077_box_art.jpg'),
('Stardew Valley', true, true, true, true, 'Simulation', 4, 'Grow crops, raise animals, and build relationships in a charming rural town.', 'https://upload.wikimedia.org/wikipedia/en/f/fd/Logo_of_Stardew_Valley.png'),
('Animal Crossing New Horizons', false, false, false, true, 'Simulation', 1, 'Create your dream island life with adorable animal villagers.', 'https://upload.wikimedia.org/wikipedia/en/1/1f/Animal_Crossing_New_Horizons.jpg'),
('Among Us', true, true, true, true, 'Party', 15, 'Uncover the impostor in this social deduction game set in space.', 'https://upload.wikimedia.org/wikipedia/en/thumb/9/9a/Among_Us_cover_art.jpg/250px-Among_Us_cover_art.jpg'),
('Overwatch 2', true, true, true, false, 'Shooter', 5, 'Team up as heroes in this fast-paced, objective-based shooter.', 'https://upload.wikimedia.org/wikipedia/en/thumb/8/89/Overwatch_2_Steam_artwork.jpg/250px-Overwatch_2_Steam_artwork.jpg'),
('Genshin Impact', true, true, true, false, 'Action RPG', 1, 'Explore the magical world of Teyvat in this anime-inspired RPG.', 'https://image.api.playstation.com/vulcan/ap/rnd/202008/0611/7oIqBcp65WyzT2TFwwS3FD8N.png'),
('The Witcher 3 Wild Hunt', true, true, true, true, 'RPG', 1, 'Become Geralt of Rivia and hunt monsters in a richly detailed fantasy world.', 'https://upload.wikimedia.org/wikipedia/en/0/0c/Witcher_3_cover_art.jpg'),
('Red Dead Redemption 2', true, true, true, false, 'Action-Adventure', 2, 'Live the life of an outlaw in a stunningly detailed Wild West.', 'https://upload.wikimedia.org/wikipedia/en/4/44/Red_Dead_Redemption_II.jpg'),
('Grand Theft Auto V', true, true, true, false, 'Action-Adventure', 2, 'Switch between three criminals in a sprawling open-world crime saga.', 'https://upload.wikimedia.org/wikipedia/en/a/a5/Grand_Theft_Auto_V.png'),
('Hades', true, true, true, true, 'Roguelike', 1, 'Battle out of the Underworld in this fast-paced, mythological roguelike.', 'https://upload.wikimedia.org/wikipedia/en/c/cc/Hades_cover_art.jpg'),
('Celeste', true, true, true, true, 'Platformer', 1, 'Climb a mountain and face your inner demons in this emotional platformer.', 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Celeste_box_art_full.png/1200px-Celeste_box_art_full.png'),
('Cuphead', true, true, true, true, 'Run and Gun', 2, 'Fight surreal bosses in a 1930s cartoon-inspired world.', 'https://upload.wikimedia.org/wikipedia/en/e/eb/Cuphead_%28artwork%29.png'),
('Monster Hunter World', true, true, true, false, 'Action RPG', 4, 'Hunt massive beasts in lush, living ecosystems.', 'https://upload.wikimedia.org/wikipedia/en/1/1b/Monster_Hunter_World_cover_art.jpg'),
('Final Fantasy XVI', false, true, false, false, 'Action RPG', 1, 'A dark fantasy tale of war, magic, and fate.', 'https://upload.wikimedia.org/wikipedia/en/thumb/0/00/Final_Fantasy_XVI_cover_art.png/250px-Final_Fantasy_XVI_cover_art.png'),
('Dead by Daylight', true, true, true, true, 'Horror', 5, 'A 4v1 horror game where survivors must escape a relentless killer.', 'https://upload.wikimedia.org/wikipedia/en/b/b7/Dead_by_Daylight_Steam_header.jpg'),
('Dark Souls III', true, true, true, false, 'Action RPG', 1, 'A punishing and rewarding journey through a dying world.', 'https://upload.wikimedia.org/wikipedia/en/thumb/b/bb/Dark_souls_3_cover_art.jpg/250px-Dark_souls_3_cover_art.jpg'),
('Sekiro Shadows Die Twice', true, true, true, false, 'Action-Adventure', 1, 'Master swordplay and stealth in feudal Japan.', 'https://upload.wikimedia.org/wikipedia/en/6/6e/Sekiro_art.jpg'),
('It Takes Two', true, true, true, true, 'Co-op Adventure', 2, 'A heartfelt co-op journey through a magical world of relationships.', 'https://upload.wikimedia.org/wikipedia/en/a/aa/It_Takes_Two_cover_art.png'),
('A Way Out', true, true, true, false, 'Co-op Adventure', 2, 'Escape prison and survive together in this split-screen narrative.', 'https://upload.wikimedia.org/wikipedia/en/8/83/A_Way_Out_Logo.jpg'),
('Rocket League', true, true, true, true, 'Sports', 4, 'Play soccer with rocket-powered cars in this high-octane game.', 'https://upload.wikimedia.org/wikipedia/en/1/13/Rocket_League_cover.png'),
('Mortal Kombat 11', true, true, true, true, 'Fighting', 2, 'Brutal 1v1 battles with iconic characters and cinematic storylines.', 'https://upload.wikimedia.org/wikipedia/en/7/7e/Mortal_Kombat_11_cover_art.png'),
('Street Fighter 6', true, true, true, false, 'Fighting', 2, 'Classic arcade-style fighting with modern visuals and mechanics.', 'https://upload.wikimedia.org/wikipedia/en/9/94/Street_Fighter_6_box_art.jpg'),
('Tekken 8', true, true, true, false, 'Fighting', 2, 'The next chapter in the legendary 3D fighting series.', 'https://upload.wikimedia.org/wikipedia/en/b/b4/Tekken_8_cover_art.jpg'),
('Super Smash Bros Ultimate', false, false, false, true, 'Fighting', 8, 'A massive crossover brawler featuring Nintendo and third-party icons.', 'https://upload.wikimedia.org/wikipedia/en/5/50/Super_Smash_Bros._Ultimate.jpg'),
('Splatoon 3', false, false, false, true, 'Shooter', 4, 'Colorful team-based ink battles with squid kids.', 'https://upload.wikimedia.org/wikipedia/en/4/4f/Splatoon.3.jpg'),
('Fall Guys', true, true, true, true, 'Party', 4, 'Wacky obstacle course chaos in a battle royale format.', 'https://upload.wikimedia.org/wikipedia/en/thumb/5/5e/Fall_Guys_cover.jpg/250px-Fall_Guys_cover.jpg'),
('Phasmophobia', true, false, false, false, 'Horror', 4, 'Co-op ghost hunting with voice recognition and jump scares.', 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/739630/capsule_616x353.jpg?t=1747947938'),
('Terraria', true, true, true, true, 'Sandbox', 4, 'Dig, build, and battle in a 2D pixelated world.', 'https://upload.wikimedia.org/wikipedia/en/1/1a/Terraria_Steam_artwork.jpg'),
('Borderlands 3', true, true, true, false, 'Looter Shooter', 4, 'Chaotic co-op shooter with wild humor and billions of guns.', 'https://upload.wikimedia.org/wikipedia/en/2/21/Borderlands_3_cover_art.jpg'),
('Divinity Original Sin 2', true, true, true, false, 'RPG', 2, 'A deep, tactical fantasy RPG with rich storytelling and co-op.', 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/435150/capsule_616x353.jpg?t=1725653917'),
('Fallout New Vegas', true, false, true, false, 'Action RPG', 1, 'A post-apocalyptic open-world RPG set in the Mojave Wasteland, where you shape the fate of New Vegas through choices and alliances.', 'https://upload.wikimedia.org/wikipedia/en/thumb/3/34/Fallout_New_Vegas.jpg/250px-Fallout_New_Vegas.jpg'),
('UNO', true, true, true, true, 'Card Game', 4, 'A classic shedding-type card game where players race to discard all their cards using colors, numbers, and action cards.', 'https://upload.wikimedia.org/wikipedia/en/9/97/Uno_video_game_cover.jpg'),
('Inscryption', true, true, true, true, 'Roguelike Deckbuilder', 1, 'A dark, genre-blending card game that mixes deck-building, escape-room puzzles, and psychological horror into a surreal narrative.', 'https://upload.wikimedia.org/wikipedia/en/4/48/Inscryption_Cover_Art.jpg');

INSERT INTO gamereviews (name, game_id, review, rating) VALUES
('Ava Thompson', 1, 'Hollow Knight is a hauntingly beautiful Metroidvania with tight controls and a world that begs to be explored.', 9.5),
('Liam Patel', 2, 'Elden Ring redefines open-world RPGs with its breathtaking scale and brutal rewarding combat.', 9.8),
('Sophie Nguyen', 3, 'Baldurs Gate 3 is a masterclass in storytelling and player choice—every decision feels meaningful.', 9.7),
('Noah Kim', 4, 'God of War Ragnarok delivers an emotional action-packed finale to Kratos Norse saga.', 9.6),
('Isabella Garcia', 5, 'Minecraft remains the ultimate sandbox—its creative freedom is unmatched.', 9.0),
('Ethan Brooks', 6, 'Fortnite keeps evolving with fresh content and crossovers though it can feel overwhelming for newcomers.', 8.2),
('Maya Singh', 7, 'Modern Warfare III has solid gunplay but feels like a retread of familiar ground.', 7.4),
('Jackson Lee', 8, 'League of Legends is endlessly deep and competitive but its community can be tough for new players.', 8.0),
('Chloe Adams', 9, 'Valorant blends precise gunplay with unique agent abilities for a thrilling tactical shooter.', 8.7),
('Benjamin Rivera', 10, 'Apex Legends is fast fluid and full of personality—still one of the best battle royales.', 8.9),
('Grace Chen', 11, 'Cyberpunk 2077 has come a long way since launch. The story and world-building are top-notch.', 8.5),
('Owen Martinez', 12, 'Stardew Valley is cozy charming and surprisingly deep. A perfect escape.', 9.3),
('Emily Zhao', 13, 'Animal Crossing New Horizons is a relaxing wholesome experience thats easy to get lost in.', 8.8),
('Lucas Bennett', 14, 'Among Us is simple but brilliant. Great with friends though it needs fresh content.', 8.0),
('Natalie Cruz', 15, 'Overwatch 2 refines the formula but doesnt feel like a true sequel. Still fun.', 7.9),
('Jaden Scott', 16, 'Genshin Impact is gorgeous and generous for a free-to-play game though grindy at times.', 8.4),
('Zara Ali', 17, 'The Witcher 3 is a storytelling triumph. Geralts journey is unforgettable.', 9.6),
('Leo Morgan', 18, 'Red Dead Redemption 2 is a slow burn but its world is breathtaking and immersive.', 9.4),
('Sienna Hughes', 19, 'GTA V is still a blast to play especially online. A modern classic.', 9.2),
('Caleb Foster', 20, 'Hades is a roguelike masterpiece—fast stylish and endlessly replayable.', 9.5),
('Amelia Ross', 21, 'Celeste is a heartfelt platformer with tight mechanics and a powerful message.', 9.1),
('Nathaniel Price', 22, 'Cuphead is brutally hard but stunning to look at. A true test of skill.', 8.8),
('Harper Diaz', 23, 'Monster Hunter World is addictive and rewarding especially with friends.', 8.9),
('Miles Turner', 24, 'Final Fantasy XVI is cinematic and bold though it leans heavily on action over RPG depth.', 8.3),
('Layla Simmons', 25, 'Dead by Daylight is tense and fun with friends but matchmaking can be rough.', 7.8),
('Isaac Bell', 26, 'Dark Souls III is punishing but fair. A fitting end to the trilogy.', 9.0),
('Jasmine Ford', 27, 'Sekiro is brutally difficult but incredibly satisfying once mastered.', 9.2),
('Theo Walsh', 28, 'It Takes Two is a co-op gem—creative heartfelt and full of surprises.', 9.4),
('Mila Grant', 29, 'A Way Out is a unique co-op experience with a gripping story.', 8.5),
('Dominic Shaw', 30, 'Rocket League is endlessly fun and deceptively deep. A modern esport staple.', 9.0),
('Elena Barker', 31, 'Mortal Kombat 11 is flashy and brutal with a surprisingly good story mode.', 8.6),
('Kieran Doyle', 32, 'Street Fighter 6 is a return to form—accessible yet deep.', 8.9),
('Talia West', 33, 'Tekken 8 looks great and plays even better. A strong entry in the series.', 8.8),
('Finn Maxwell', 34, 'Smash Ultimate is the ultimate party fighter. So much content so much fun.', 9.3),
('Ruby Ellis', 35, 'Splatoon 3 is colorful chaotic and surprisingly strategic.', 8.4),
('Omar Patel', 36, 'Fall Guys is silly fun though it can get repetitive without new modes.', 7.9),
('Freya Newton', 37, 'Phasmophobia is terrifying in the best way. Great with friends.', 8.2),
('Reuben Blake', 38, 'Terraria is a 2D sandbox with endless possibilities. A pixelated treasure.', 9.0),
('Nina Walsh', 39, 'Borderlands 3 is loud chaotic and full of loot. Not for everyone but fans will love it.', 8.1),
('Elliot Fraser', 40, 'Divinity Original Sin 2 is one of the best RPGs ever made. Deep tactical and rich in story.', 9.6),
('Tessa Doyle', 41, 'Fallout New Vegas is rough around the edges but full of charm and choice.', 8.7),
('Zachary Reid', 42, 'UNO is a timeless classic. Simple chaotic and always fun with friends.', 7.5),
('Imani Brooks', 43, 'Inscryption is a mind-bending card game that constantly surprises. A must-play.', 9.1);

INSERT INTO movies (name, genre, description, rating) VALUES
('Inception',
 'Sci-Fi',
 'A thief who infiltrates dreams is given a chance at redemption by planting an idea.',
 'PG-13'),
 
('The Lion King',
 'Animation',
 'A lion cub flees his kingdom only to learn the true meaning of responsibility and bravery.',
 'G'),

('Interstellar',
 'Sci-Fi',
 'A team of explorers travel through a wormhole in space to ensure humanity''s survival.',
 'PG-13'),

('The Dark Knight',
 'Action',
 'Batman faces his greatest psychological and physical tests when the Joker emerges in Gotham.',
 'PG-13'),

('Coco',
 'Animation',
 'A young boy embarks on a journey to the Land of the Dead to find his great-great-grandfather.',
 'PG');

INSERT INTO movies (name, genre, description, rating) VALUES
('Guardians of the Galaxy', 'Sci-Fi', 'A band of misfits teams up to save the galaxy.', 'PG-13'),
('Mad Max: Fury Road', 'Action', 'Road-warriors battle across a post-apocalyptic wasteland.', 'R'),
('Parasite', 'Thriller', 'A poor family schemes to infiltrate a wealthy household.', 'R'),
('Spirited Away', 'Animation', 'A girl enters a magical world of spirits to save her parents.', 'PG'),
('The Prestige', 'Drama', 'Two magicians engage in a fierce rivalry.', 'PG-13'),
('City of God', 'Crime', 'Two boys growing up in a violent Brazilian slum take different paths.', 'R'),
('Whiplash', 'Drama', 'A drummer endures extreme coaching to achieve greatness.', 'R'),
('La Haine', 'Drama', '24 hours in the life of three friends in the Parisian suburbs.', 'R'),
('The Departed', 'Crime', 'An undercover cop and a mole play a dangerous cat-and-mouse game.', 'R'),
('The Shining', 'Horror', 'A family heads to an isolated hotel where evil lurks.', 'R'),
('Amélie', 'Romantic Comedy', 'A whimsical Parisian woman decides to help others find happiness.', 'R'),
('Alien', 'Sci-Fi', 'The crew of a spaceship encounters a deadly alien.', 'R'),
('The Big Lebowski', 'Comedy', '“The Dude” gets mixed in a kidnapping scheme after a rug.', 'R'),
('Schindler''s List', 'Historical Drama', 'A man saves Jews during the Holocaust.', 'R'),
('Fight Club', 'Drama', 'An insomniac meets a soap salesman and starts a fight club.', 'R'),
('Back to the Future', 'Sci-Fi', 'A teen travels back in time and must ensure his parents meet.', 'PG'),
('The Truman Show', 'Drama', 'A man discovers his life is a televised reality show.', 'PG'),
('Goodfellas', 'Crime', 'A young man rises through the ranks of organized crime.', 'R'),
('Pan''s Labyrinth', 'Fantasy', 'A girl enters a dark fantasy world during Franco''s Spain.', 'R'),
('Hereditary', 'Horror', 'A family uncovers dark secrets after a tragic death.', 'R'),
('The Grandmaster', 'Martial Arts', 'The story of Yip Man, Bruce Lee''s mentor.', 'PG-13'),
('The Wolf of Wall Street', 'Biography', 'A stockbroker rises and falls in a world of excess.', 'R'),
('Spiderman: Into the Spider-Verse', 'Animation', 'Teen Miles Morales becomes Spider-Man in his universe.', 'PG'),
('A Beautiful Mind', 'Biography', 'A brilliant mathematician struggles with schizophrenia.', 'PG-13'),
('The Social Dilemma', 'Documentary', 'Explores the dangerous human impact of social networking.', 'PG-13'),
('The Princess Bride', 'Fantasy', 'A farmhand sets out to rescue his true love.', 'PG'),
('Moonlight', 'Drama', 'A young black man grapples with identity and sexuality.', 'R'),
('No Country for Old Men', 'Crime', 'A hunter finds a stash of money and bloodshed follows.', 'R'),
('Blade Runner', 'Sci-Fi', 'A blade runner must hunt down replicants.', 'R'),
('Logan', 'Action', 'An aging Wolverine cares for an ailing mutant child.', 'R'),
('The Pianist', 'War Drama', 'A pianist survives the Holocaust in Warsaw.', 'R'),
('Whale Rider', 'Drama', 'A Maori girl fights to become chief in a male-dominated culture.', 'PG-13'),
('The Intouchables', 'Biography', 'An aristocrat hires a young man from the projects to be his caregiver.', 'R'),
('Her', 'Romance', 'A man develops an unusual relationship with an AI.', 'R'),
('Silver Linings Playbook', 'Romantic Comedy', 'Two troubled people find solace in each other.', 'R'),
('Oldboy', 'Thriller', 'A man is held captive for years then released suddenly.', 'R'),
('Get Out', 'Horror', 'A young black man uncovers a disturbing secret at a family retreat.', 'R'),
('Lady Bird', 'Drama', 'A teenager navigates life, family, and first love.', 'R'),
('The Imitation Game', 'Biography', 'Alan Turing decrypts Nazi communications during WWII.', 'PG-13');


 INSERT INTO movie_reviews (name, movies_id, reviews, user_ratings) VALUES
('Alice Thompson', 1, 'Mind-bending plot with incredible visuals. A bit complex, but rewarding.', 9.1),
('Bob Martinez', 2, 'Timeless classic. Stunning animation and emotional storytelling.', 9.5),
('Charlie Nguyen', 3, 'A beautiful space journey that is both emotional and intellectually rich.', 10.0),
('Diana Blake', 4, 'Dark, thrilling, and brilliantly acted. Ledger steals the show.', 9.4),
('Ethan Patel', 5, 'Heartwarming and visually stunning. The music and message are unforgettable.', 9.2);


INSERT INTO movie_reviews (name, movies_id, reviews, user_ratings) VALUES
('Felicity Dawson', 6, 'Fun space adventure with great humor and heart.', 8.7),
('George Sullivan', 7, 'A non-stop visual thrill ride. Intense!', 9.2),
('Hannah Mitchell', 8, 'A brilliant social critique wrapped in suspense.', 9.5),
('Ian Carmichael', 9, 'Enchanting and deeply emotional animated masterpiece.', 9.6),
('Jasmine Carter', 10, 'An engrossing tale of obsession and artistry.', 9.1),
('Kevin Randall', 11, 'True to life and brutally honest.', 9.3),
('Laura Phelps', 12, 'Incredible tension and outstanding performances.', 9.4),
('Michael Stone', 13, 'Raw, powerful, and unforgettable.', 9.4),
('Natalie Green', 14, 'Compelling crime drama with depth.', 9.0),
('Owen Barnes', 15, 'Spooky and atmospheric—still creeps me out.', 8.9),
('Paula Fisher', 16, 'Sweet, whimsical, and heartwarming in Paris.', 9.5),
('Quentin Monroe', 17, 'Terrifyingly good—horror done right.', 9.2),
('Rachel Stone', 18, 'Endlessly quotable and endlessly funny.', 8.8),
('Sean Stewart', 19, 'Devastating but important.', 9.7),
('Tessa Allen', 20, 'Mind-bending and deeply thought-provoking.', 9.2),
('Ulrich Meyer', 21, 'Nostalgic, funny, and heartwarming.', 8.6),
('Violet Shaw', 22, 'Quietly moving and deeply reflective.', 9.3),
('Warren Ortega', 23, 'Gripping tale of ambition and betrayal.', 9.1),
('Xandra Boone', 24, 'Rich fantasy with emotional punch.', 9.4),
('Yosef Walters', 25, 'Terrifying family drama with lasting impact.', 8.8),
('Zoey Fischer', 26, 'Elegant, stylish martial arts biopic.', 8.9),
('Aaron Lambert', 27, 'Wild and excessive, but riveting.', 9.0),
('Bethany Curtis', 28, 'Unique animation that breaks boundaries.', 9.1),
('Charles Boone', 29, 'Inspiring story of genius and struggle.', 9.2),
('Dana Fletcher', 30, 'Deeply unsettling, but smart and necessary.', 9.0),
('Elliot Gomez', 31, 'Fun, romantic, and full of charm.', 8.8),
('Faith Bowen', 32, 'Powerful coming-of-age drama.', 9.5),
('Gavin Edwards', 33, 'Bleak and haunting—a heavy watch.', 9.3),
('Hailey McIntyre', 34, 'Beautifully paced and visually stunning.', 8.9),
('Isaac Navarro', 35, 'Strong performances in a dark story.', 9.4),
('Jade Foster', 36, 'Quiet and moving indigenous tale.', 9.2),
('Kyle Ramsey', 37, 'Heartfelt and inspirational buddy story.', 9.1),
('Lara Jennings', 38, 'A touching romance with quirky charm.', 8.7),
('Mason Dean', 39, 'Violent and vengeful but brilliant.', 8.6),
('Nora Pratt', 40, 'Innovative horror with important social commentary.', 8.9),
('Orion Steele', 41, 'Tender and messy teen life feels so real.', 9.0),
('Penelope Kerr', 42, 'Harrowing and unforgettable family drama.', 9.3),
('Quentin Drake', 43, 'Terrifying and unpredictable horror.', 8.8),
('Riley Walsh', 44, 'Smart and emotional war-time survival story.', 9.2)


UPDATE movies SET rating = '12A' WHERE rating = 'PG-13'
UPDATE movies SET rating = '15' WHERE rating = 'R'
UPDATE movies SET rating = 'U' WHERE rating = 'G'

UPDATE movies SET rating = '18' WHERE name IN (
  'Mad Max: Fury Road',
  'City of God',
  'Whiplash',
  'The Departed',
  'The Shining',
  'Fight Club',
  'Schindler''s List',
  'The Wolf of Wall Street',
  'Oldboy',
  'No Country for Old Men',
  'Hereditary'
);