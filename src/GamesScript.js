function videoGame(title, developer, release_date, description, price, genre, rating, platform, image) {
    this.title = title;
    this.developer = developer;
    this.release_date = release_date;
    this.description = description;
    this.price = price;
    this.genre = genre;
    this.rating = rating;
    this.platform = platform;
    this.image = image;
}
var gameArray = new Array();
//Action Games
var gameOne = new videoGame ("Spider-Man","Insomniac Games", "September 7, 2018",
    "An all-new Spider-Man experience Starring one of the world’s most iconic Super Heroes, Spider-Man features the acrobatic abilities, improvisation and web-slinging that the wall-crawler is famous for, while also introducing elements never-before-seen in a Spider-Man game. From traversing with parkour and unique environmental interactions, to new combat and cinematic blockbuster set pieces, it’s Spider-Man unlike any you’ve played before. Sony Interactive Entertainment, Insomniac Games, and Marvel have teamed up to create a brand-new and authentic Spider-Man adventure. This isn’t the Spider-Man you’ve met before, or seen in a movie. This is an experienced Peter Parker who’s more masterful at fighting big crime in New York City. At the same time, he’s struggling to balance his chaotic personal life and career while the fate of millions of New Yorkers rest upon his shoulders."
    , "60", "Action", "5", "PS4", "images/SpiderMan_BoxArt.png");
var gameTwo = new videoGame ("Sunset Overdrive", "Insomniac Games", "October 8 2014",
    "Sunset Overdrive transforms an open-world apocalypse into your tactical playground. Zip, grind and wall-run across Sunset City while using a devastating, unconventional arsenal. With hyper-agility, unique weapons, and customizable special abilities, Sunset Overdrive rewrites the rules of traditional shooters and delivers an explosive and irreverent adventure in the end times."
    , "60", "Action", "4", "Xbox One", "images/SunsetOverdrive_BoxArt.jpg");
var gameThree = new videoGame("Quantuam Break", "Remedy", "April 5, 2016",
    "From the creators of Max Payne and Alan Wake, comes Quantum Break, a revolutionary entertainment experience that blurs the lines between television and gaming. With Quantum Break, Remedy Games delivers an action-packed, fast paced game in which you bend and shape time in order to survive. Master unique powers, bending and warping time to outmaneuver and outwit the enemy. Epic moments of destruction, captured in time, become your playground."
    + "How you play the game shapes a personalized version of the television show.Watching the show gives you strategies and insights that will impact the way you play the game and helps you discover unique content within the game.Together, the game and the show deliver a holistic entertainment experience, possible only on Xbox One."
    , "60", "Action", "4", "Xbox One", "images/QuantuamBreak_BoxArt.jpg");
var gameFour = new videoGame("Paper Mario: The Oragami King", "Intelligent Systems", "July 17,2020",
    "A new paper-crafted Mario adventure unfolds on Nintendo Switch!"+
    "The kingdom has been ravaged by an origami menace! Join Mario and his new partner, Olivia, as they battle evil Folded Soldiers, repair the damaged landscape, and try to free Princess Peach’s castle from the clutches of King Olly in this comedy - filled adventure, only on the Nintendo Switch system."+
    "Master strategic, ring - based battles.Line up scattered enemies and plan your attack to maximize damage with the new, ring - based battle system that requires both puzzle - solving skills and a quick wit."+
    "Mario and Luigi receive an invitation from Princess Peach to attend an origami festival and excitedly hurry to Toad Town…but something’s amiss.After investigating the eerily empty town, the duo finds a fearsome(and folded) Princess Peach—she’s been turned into origami by King Olly, ruler of the Origami Kingdom! With five giant streamers under his control, King Olly binds Princess Peach’s Castle and transports it to a distant mountain as part of his plan to re - fold the world."+
    "On his journey to liberate Peach’s Castle and repair the ravaged paper landscape, Mario meets Olivia, King Olly’s sister, and the two join forces to put a stop to Olly’s origami onslaught.Even Bowser falls victim to Olly’s plot when his minions are turned into origami Folded Soldiers and betray their Koopa king, forcing him to ally with Mario and Olivia!"+
    "Battle the Folded Soldiers in ring - based battles that challenge you to strategically line up enemies to maximize damage! Out of battle, Mario can use the arm - extending 1, 000 - Fold Arms ability in specific spots to interact with the landscape to pull, peel, hit, and more! Join Mario, Olivia, and their companions on a journey of laughter and emotion, thrills, and a whole lot of folding."
    , "60", "Action", "4", "Nintendo Switch", "images/OragamiKing_BoxArt.jpg");
var gameFive = new videoGame("Last of Us Part 2", "Naughty Dog", "June 19, 2020",
    "Five years after their dangerous journey across the post-pandemic United States, Ellie and Joel have settled down in Jackson, Wyoming. Living amongst a thriving community of survivors has allowed them peace and stability, despite the constant threat of the infected and other, more desperate survivors. When a violent event disrupts thatpeace, Ellie embarks on a relentless journey to carry out justice and find closure. As she hunts those responsible one by one, she is confronted with the devastating physical and emotional repercussions of her actions."
    , "60", "Action", "5", "PS4", "images/LastofUs2_BoxArt.jpg");
//RPG Games
var gameSix = new videoGame("Persona 5:Royal", "Atlus", "March 31, 2020"
    , "Prepare for an all-new RPG experience in Persona 5 Royal based in the universe of the award-winning series, Persona! Don the mask of Joker and join the Phantom Thieves of Hearts. Break free from the chains of modern society and stage grand heists to infiltrate the minds of the corrupt and make them change their ways! Persona 5 Royal is packed with new characters, confidants, story depth, new locations to explore, and a new grappling hook mechanic for stealthy access to new areas. With a new semester at Shujin Academy, get ready to strengthen your abilities in the metaverse and in your daily life. Persona 5 Royal presents a unique visual style and award nominated composer Shoji Meguro returns with an all-new soundtrack. Explore Tokyo, unlock new Personas, customize your own personal Thieves Den, discover a never-before-seen story arc, cutscenes, alternate endings, and more!"
    , "60", "RPG", "5", "PS4","images/Persona5_BoxArt.jpg");
var gameSeven = new videoGame("Fallout 4", "Bethesda Softworks", "November 10, 2015"
    , "Bethesda Game Studios, the award-winning creators of Fallout 3 and Skyrim, welcomes you to the world of Fallout 4. Winner of more than 50 Game of the Year awards, including top honors at the 2016 D.I.C.E. Awards. Fallout 4 is the studio's most ambitious game ever and the next generation of open-world gaming. As the sole survivor of Vault 111, you enter a world destroyed by nuclear war. Only you can rebuild and determine the fate of the Wasteland. Welcome home."
    , "60", "RPG", "4", "PS4,Xbox One, PC", "images/Fallout4_BoxArt.jpg");
var gameEight = new videoGame("Xenoblade Chronicles 2", "Monolith Software", "December 1, 2017"
    , "Explore an endless Ocean of Clouds, where the last remnants of Civilization live on the backs of colossal Beasts called titans. This title has been rated teen language, suggestive themes, use of alcohol and tobacco, violence."
    , "60", "RPG", "5", "Nintendo Switch","images/Xenoblade2_BoxArt.jpg");
var gameNine = new videoGame("Final Fantasy 15", "Square Enix", "November 29, 2016",
    "Get ready to be at the centre of the ultimate fantasy adventure.Enter the world of FINAL FANTASY XV, and experience epic action - packed battles along your journey of discovery.You are Noctis, the Crown Prince of the Kingdom of Lucis, and your quest is to reclaim your homeland from the clutches of the imperial army.Joined by your closest friends, you will take the wheel and experience a voyage like no other, travelling through the breath - taking world of Eos encountering larger - than - life beasts and unforgiving enemies.You will learn to master the skills of weaponry and magic, channeling the power of your ancestors allowing you to effortlessly warp through the air in thrilling combat.Fresh faces and long - time fans, fulfil your destiny and experience a brand new kind of fantasy.Pre - order the Day One Edition to receive the exclusive FINAL FANTASY series weapon - the Masamune!"
    , "60", "RPG", "4", "PS4,Xbox One, PC", "images/FinalFantasy15_BoxArt.jpg");
var gameTen = new videoGame("Mass Effect Andromeda", "BioWare", "March 21, 2017"
    , "Mass Effect: Andromeda takes players to the Andromeda galaxy, far beyond the Milky Way. There, players will lead our fight for a new home in hostile territory as the Pathfinder-a leader of military-trained explorers. This is the story of humanity's next chapter, and player choices throughout the game will ultimately determine our survival."
    , "60", "RPG", "3", "PS4,Xbox One,PC", "images/MassEffectAndromeda_BoxArt.jpeg");
//Platform Games
var gameEleven = new videoGame("Super Mario Odyssey","Nintendo", "October 27,2017"
    , "Join Mario on a massive, globe-trotting 3D adventure and use his incredible abilities to collect Moons so you can power up your airship, the Odyssey, and rescue Princess Peach from Bowser's wedding plans. This 3D Mario adventure is packed with secrets and surprises, and with Mario's moves like cap throw, cap jump, and capture, you'll have fun and exciting gameplay experiences unlike anything you've enjoyed in a Mario game before. Get ready to be whisked away to strange and amazing places far from the Mushroom Kingdom. Explore huge 3D kingdoms filled with secrets and surprises, including costumes for Mario and lots of ways to interact with the diverse environments - such as cruising around them in vehicles that incorporate the HD rumble feature of the Joy-Con controller or exploring sections as Pixel Mario. Thanks to his friend, Cappy, Mario has moves for you to master, like cap throw, cap jump and capture. With capture, Mario can take control of all sorts of things, including objects and enemies. Visit astonishing locales, like skyscraper-packed Donk City, and run into familiar friends and foes as you try to save Princess Peach from Bowser's clutches and foil his dastardly wedding plans."
    , "60", "Platform", "5", "Nintendo Switch","images/SuperMarioOdyssey_BoxArt.jpg");
var gameTwelve = new videoGame("New Super Luckys Tale", "Playful Corp", "November 8,2019"
    , "Leap into a Playful Platforming Adventure for all ages! New Super Lucky’s Tale is a beautiful 3D platformer with fun challenges for gamers of all skill levels. Run, jump, climb incredible heights, burrow deep underground, overcome enemies, and explore amazing worlds on an epic quest to rescue the Book of Ages from the mysterious Jinx and his nefarious Kitty Litter!"
    , "60", "Platform", "3", "PS4,Xbox One, Nintendo Switch,PC","images/SuperLuckysTale_BoxArt.jpg");
var gameThirteen = new videoGame("Super Mario 3D All-Stars", "Nintendo", "September 18,2020"
    , "Play three of Mario’s greatest 3D platforming adventures—all in one package!"+
    "Play three iconic games at home or on the go—all in one package on the Nintendo Switch system! Jump into paintings in Super Mario 64, clean up paint - like goop in Super Mario Sunshine, and fly from planet to planet in Super Mario Galaxy."+
    "Run, jump, and dive with ease!"+
    "Make Mario move using the Nintendo Switch system’s Joy - Con controllers.You can also pass a Joy - Con controller to a friend to play the Super Mario Galaxy game in Co - Star Mode * !Mario’s movements are as smooth as ever with HD resolution for each game, while still retaining the look and feel of the originals."+
    "Listen to timeless Super Mario tunes"+
    "Listen to a total of 175 iconic tunes from all three games! Whether you want to get up and dance or take a minute to relax—this collection has music to fit your mood!"+
    "Even when you aren’t playing, you can enjoy the sounds that these worlds(and galaxies!) are so famous for.With three games, modern upgrades, and music - player mode, this collection is filled with fun for both new players and 3D platforming Mario masters.Super Mario 3D All - Stars will be available as a limited - run retail edition and a digital edition that is available for a limited time until the end of March 2021. The physical version of Super Mario 3D All - Stars(released Sep. 18) will continue to be shipped to retailers and available for purchase through March 31, 2021 or while supplies last.The digital version of Super Mario 3D All - Stars will be available for purchase through March 31, 2021. Once the digital edition has been purchased on your Nintendo Account, it can be re - downloaded and played if deleted from your device."
    , "60", "Platform", "4", "Nintendo Switch","images/SuperMario3D_BoxArt.jpg");
var gameFourteen = new videoGame("My Friend Pedro", "Deadtoast Entertainment", "June 20,2019"
    , "My friend pedro is a violent ballet about friendship, imagination, and one Man's struggle to obliterate anyone in his path at the behest of a sentient Banana. The strategic use of split aiming, slow motion, and the ol' Stylish window breach create One sensational action sequence after another in an explosive battle through the violent underworld."
    , "60", "Platform", "3.5", "PS4,Xbox One, Nintendo Switch,PC", "images/MyFriendPedro_BoxArt.jpg");
var gameFifteen = new videoGame("Ori and the Will of the Whisps", "Moon Studios", "March 11, 2020"
    , "From the creators of “Ori and the Blind Forest” with over 50 awards and nominations comes the highly anticipated sequel: “Ori and the Will of the Wisps”. Embark on an adventure with all new combat and customization options while exploring a vast, exotic world encountering larger than life enemies and challenging puzzles. Seek help from discoverable allies on your path to unravel Ori’s true destiny."
    , "60", "Platform", "5", "Xbox One,Xbox Series X,Nintendo Switch,PC", "images/OriWill_BoxArt.jpg");
//Shooter Games
var gameSixteen = new videoGame("Call of Duty: Modern Warfare", "Infinity Ward", "October 25, 2019"
    , "Prepare to go dark, Modern Warfare is back!"+
       "Experience the global phenomenon.The stakes have never been higher as players take on the role of lethal Tier One operators in a heart - racing saga that will affect the global balance of power."+
        "Call of Duty: Modern Warfare engulfs fans in an incredibly raw, gritty, provocative narrative that shines a light on the changing nature of modern war.Developed by the studio that started it all, Infinity Ward, experience an epic reimagining of the iconic Modern Warfare series from the ground up.In the visceral and dramatic single - player story campaign, Call of Duty: Modern Warfare pushes boundaries and breaks rules the way only Modern Warfare can."+
        "Embark on a desperate mission alongside Captain Price and the SAS to retrieve stolen chemical weapons.Fight in locations across the globe including London and the Middle East to prevent all out global war.Ready up, Soldier!"
    , "50", "Shooter", "3.8", "PS4,Xbox One,PC","images/ModernWarfare_BoxArt.jpg");
var gameSeventeen = new videoGame("Borderlands 3", "Gearbox Software", "September 13, 2019"
    , "The original shooter looter returns, packing bazillions of guns and an all new mayhem fueled adventure! Blast through new worlds and enemies as one of four brand new Vault Hunters the ultimate treasure seeking badasses of the Borderlands, each with deep skill trees, abilities and customization. Play solo or join with friends to take on insane enemies, score loads of loot and save your home from the most ruthless cult leaders in the galaxy."
    ,"60","Shooter","4","PS4,PS5,Xbox One,Xbox Series X,PC,Stadia","images/Borderlands3_BoxArt.jpg");
var gameEighteen = new videoGame("Battlefield 5", "DICE", "November 20, 2018"
    , "Enter mankind's greatest conflict with Battlefield V as the series goes back to its roots in a never-before-seen portrayal of World War 2. Take on physical, all-out multiplayer with your squad in modes like the vast Grand Operations and the cooperative Combined Arms, or witness human drama set against global combat in the single player War Stories. As you fight in epic, unexpected locations across the globe, enjoy the richest and most immersive Battlefield yet."
    , "20", "Shooter", "3", "PS4,Xbox One,PC","images/Battlefield5_BoxArt.png");
var gameNinteen = new videoGame("Gears 5", "The Coalition", "September 10,2019"
    , "From one of gaming’s most acclaimed sagas, Gears is bigger than ever, with five thrilling modes and the deepest campaign yet. With all out war descending, Kait Diaz breaks away to uncover her connection to the enemy and discovers the true danger to Sera – herself"
    , "30", "Shooter", "4", "Xbox One,PC","images/Gears5_BoxArt.jpg");
var gameTwenty = new videoGame("Halo 5: Guardians", "343 Studios", "October 27, 2015"
    , "343 Industries continues the legendary first-person shooter series with Halo 5: Guardians -- the first Halo title for the Xbox One gaming platform. Halo 5 featuresthe most ambitious campaign and multiplayer experience in franchise history, all running at 60 frames per second on dedicated servers."
    , "20", "Shooter", "3.5", "Xbox One","images/Halo5_BoxArt.jpg");
//Sports Games
var gameTwentyOne = new videoGame("NHL 20 ", "EA Canada", "September 13, 2019"
    , "In EA SPORTS NHL 20, your favorite NHL stars now look and feel more authentic with new Signature Shots and over 45 new shot types that make every attack a threat. A new broadcast package celebrates your biggest plays as you take on all-new game modes, including the new winner-take-all Eliminator mode where you play solo or team up with friends to take down the competition."
    , "30", "Sports", "3", "PS4,Xbox One","images/NHL20_BoxArt.jpg");
var gameTwentyTwo = new videoGame("Fifa 20", "EA Canada", "September 27, 2019"
    , "Powered by Frostbite, EA Sports FIFA 20 brings two sides of The World’s Game to life -- the prestige of the professional stage and an all-new authentic street football experience in EA Sports Volta."
    , "30", "Sports", "3", "PS4,Xbox One,PC","images/Fifa20_BoxArt.jpg");
var gameTwentyThree = new videoGame("Madden 20", "EA Tiburon", "August 2, 2019"
    , "Achieve gridiron greatness while having more fun playing with or against friends in Madden NFL 20. Take your team from pre-season to the Super Bowl, and be at the center of every play so you can achieve gridiron greatness."
    ,"20","Sports","2","PS4,Xbox One,PC","images/Madden20_BoxArt.jpg");
var gameTwentyFour = new videoGame("NBA 2k20", "Visual Concepts", "September 6, 2019"
    , "2K continues to redefine what’s possible in sports gaming with NBA 2K20, featuring best in class graphics & gameplay, ground breaking game modes, and unparalleled player control and customization."
    , "10", "Sports", "3", "PS4,Xbox One,Nintendo Switch,PC,Stadia", "images/NBA2K20_BoxArt.jpg");
var gameTwentyFive = new videoGame("MLB The Show 20", "SIE San Diego Studio", "March 17, 2020"
    , "MLB The Show 20 is what baseball dreams are made of. Write your own baseball legacy in an expansive RPG experience, or build and manage the team of your dreams to face intense online competition."
    , "60", "Sports", "3.5", "PS4", "images/TheShow20_BoxArt.jpg");

//Adding Video_game Objects to array
gameArray.unshift(gameOne);
gameArray.unshift(gameTwo);
gameArray.unshift(gameThree);
gameArray.unshift(gameFour);
gameArray.unshift(gameFive);
gameArray.unshift(gameSix);
gameArray.unshift(gameSeven);
gameArray.unshift(gameEight);
gameArray.unshift(gameNine);
gameArray.unshift(gameTen);
gameArray.unshift(gameEleven);
gameArray.unshift(gameTwelve);
gameArray.unshift(gameThirteen);
gameArray.unshift(gameFourteen);
gameArray.unshift(gameFifteen);
gameArray.unshift(gameSixteen);
gameArray.unshift(gameEighteen);
gameArray.unshift(gameNinteen);
gameArray.unshift(gameTwenty);
gameArray.unshift(gameTwentyOne);
gameArray.unshift(gameTwentyTwo);
gameArray.unshift(gameTwentyThree);
gameArray.unshift(gameTwentyFour);
gameArray.unshift(gameTwentyFive);

var comingSoonImages = new Array("images/haloinfinite_comingsoon.png", "images/milesmorales_comingsoon.jpg", "images/ratchet_comingsoon.jpg");
var maxPriceValue;


window.onload = function () {
    var consoleList = document.getElementById("console-list");
    var maxPrice = document.getElementById("price-filter");
    var genreList = document.getElementById("genre-list");
    var game = document.getElementById("game-info");
    var gameInput = document.getElementById("add-game-form");
    var comingSoonDiv = document.getElementById("coming-soon-games");

    var maxPriceButton = document.getElementById("set-max-price");
    var showGameForm = document.getElementById("show-input-button");
    var gameInputButton = document.getElementById("add-game-submit");
    var gameCancelButton = document.getElementById("add-game-cancel");
    var comingSoonNextButton = document.getElementById("next-image");

    var comingSoonBackButton = document.getElementById("back-image");
    comingSoonBackButton.style.display = "none";
    game.style.display = "none";
    gameInput.style.display = "none";

    var comingsoon_swing_count = 0;

    comingSoonNextButton.onclick = function(){
        comingsoon_swing_count++;
        comingSoonDiv.style.backgroundImage = "url(" + comingSoonImages[comingsoon_swing_count] + ")";
        if (comingsoon_swing_count == comingSoonImages.length - 1) {
            comingSoonNextButton.style.display = "none";
        }
        comingSoonBackButton.style.display = "inline";
    }
    comingSoonBackButton.onclick = function () {
        comingsoon_swing_count--;
        comingSoonDiv.style.backgroundImage = "url(" + comingSoonImages[comingsoon_swing_count] + ")";
        if (comingsoon_swing_count == 0) {
            comingSoonBackButton.style.display = "none";
        }
        comingSoonNextButton.style.display = "inline";
    }
    for (var i = 0; i < gameArray.length; i++) {
        makeContent(gameArray[i]);
    }
    consoleList.onchange = function () {
        clearDisplay();
        for (var i = 0; i < gameArray.length; i++) {
            if (consoleList.value == "All") {
                makeContent(gameArray[i]);
            } else {
                if (gameArray[i].platform.search(this.value) == -1) {

                } else {
                    makeContent(gameArray[i]);
                }
            }
        }
        if (maxPrice.value != "") {
            maxPrice.value = "";
            maxPriceValue = undefined;
        }
        if (genreList.value != "None") {
            genreList.value = "None";
        }
    }
    maxPriceButton.onclick = function () {
        if (maxPrice.value != "") {
            clearDisplay();
            maxPriceValue = maxPrice.value;
            for (var i = 0; i < gameArray.length; i++) {
                if (consoleList.value == "All") {
                    if (genreList.value == "None") {
                        if (gameArray[i].price <= maxPriceValue) {
                            makeContent(gameArray[i]);
                        }
                    } else {
                        if (gameArray[i].genre == genreList.value && gameArray[i].price <= maxPriceValue) {
                            makeContent(gameArray[i]);
                        }
                    }
                } else {
                    if (gameArray[i].platform.search(consoleList.value) == -1) {

                    } else {
                        if (genreList.value == "None") {
                            if (gameArray[i].price <= maxPriceValue) {
                                makeContent(gameArray[i]);
                            }
                        } else {
                            if (gameArray[i].genre == genreList.value && gameArray[i].price <= maxPriceValue) {
                                makeContent(gameArray[i]);
                            }
                        }
                    }
                }
            }
         } else {
             alert("There is not price given");
         }
      }
    genreList.onchange = function () {
        clearDisplay();
        for (var i = 0; i < gameArray.length; i++) {
            if (consoleList.value == "All") {
                if (genreList.value != "None") {
                    if (gameArray[i].genre == genreList.value) {
                        if (maxPrice == undefined) {
                            makeContent(gameArray[i]);
                        } else {
                            if (gameArray[i].price <= maxPriceValue) {
                                makeContent(gameArray[i]);
                            }
                        }
                    }
                } else {
                    if (maxPriceValue == undefined) {
                        makeContent(gameArray[i]);
                    } else {
                        if (gameArray[i].price <= maxPriceValue) {
                            makeContent(gameArray[i]);
                        }
                    }
                }
            } else {
                if (gameArray[i].platform.search(consoleList.value) == -1) {

                } else {
                    if (genreList.value != "None") {
                        if (gameArray[i].genre == genreList.value) {
                            if (maxPriceValue == undefined) {
                                makeContent(gameArray[i]);
                            } else {
                                if (gameArray[i].price <= maxPriceValue) {
                                    makeContent(gameArray[i]);
                                }
                            }
                        }
                    } else {
                        if (maxPrice == undefined) {
                            makeContent(gameArray[i]);
                        } else {
                            if (gameArray[i].price <= maxPriceValue) {
                                makeContent(gameArray[i]);
                            }
                        }
                    }
                }
            }
        }
    }
    showGameForm.onclick = function () {
    
        window.location.href = "#add-game-form";
        gameInput.style.display = "inline";
    }
    gameInputButton.onclick = function () {
        var title = document.getElementById("game-title-input");
        var developer = document.getElementById("game-developer-input");
        var month = document.getElementById("month");
        var day = document.getElementById("day");
        var year = document.getElementById("year");
        var price = document.getElementById("game-price-input");
        var genre = document.getElementsByName("genre");
        var platform = document.getElementsByName("platform");
        var rating = document.getElementById("rating");
        var image = document.getElementById("image-input");
        var description = document.getElementById("description-input");

        var gameForm = document.getElementById("game-form");

        if (gameForm.checkValidity() == true) {
           
            var platformString = "";

            for (var i = 0; i < platform.length; i++) {
                if (platform[i].checked) {
                    platformString += platform[i].value + ", ";
                }
            }
            var genre;
            for (var i = 0; i < genre.length; i++) {
                if (genre[i].checked) {
                    genre = genre[i].value;
                    break;
                }
            }
            var game = new videoGame(title.value, developer.value, (month.value + day.value + "," + year.value), description.value, price.value, genre, rating.value, platformString, image.value);

            gameArray.unshift(game);

            var message = "You have added a game to our website! (Due to technical difficulties '\n'"
                + "you might not see the game on the site. '\n'"
                + "Title: " + game.title + "\n"
                + "Developer: " + game.developer + "\n"
                + "Release Date: " + game.release_date + "\n"
                + "Description: " + game.description + "\n"
                + "Price: " + game.price + "\n"
                + "Genre: " + game.genre + "\n"
                + "Rating: " + game.rating + "\n"
                + "Platform: " + game.platform + "\n"
                + "Image URL: " + game.image + "\n";
            alert(message);


            location.reload();
        } else {
            alert("You missed to input something!");
        }


    }
    gameCancelButton.onclick = function () {
        gameInput.style.display = "none";
        window.location.href = "#tool-header";

    }
}
function clearDisplay() {
    var display = document.getElementById("output-text");
    while (display.hasChildNodes()) {
        display.removeChild(display.firstChild);
    }
}
function clearGame() {
    var gamedisplay = document.getElementById("game-info");
    while (gamedisplay.hasChildNodes()) {
        gamedisplay.removeChild(gamedisplay.firstChild);
    }
}
function makeContent(game) {
    var display = document.getElementById("output-text");
    var imageContainer = document.createElement("div");
    var image = document.createElement("img");
    var title = document.createElement("p");
    var price = document.createElement("p");

    imageContainer.className = "image-container";

    image.src = game.image;
    image.className = "image";

    var titletext = document.createTextNode(game.title);
    title.appendChild(titletext);
    title.className = "game-title";
    title.rating = game.rating;

    var pricetext = document.createTextNode("$" + game.price);
    price.appendChild(pricetext);
    price.className = "price";
    price.price = game.price;

    imageContainer.appendChild(image);
    imageContainer.appendChild(title);
    imageContainer.appendChild(price);

    imageContainer.value = game.title;

    display.appendChild(imageContainer);

    imageContainer.onclick = function () {
        var gameDisplay = document.getElementById("game-info");

        display.style.display = "none";
        gameDisplay.style.display = "inline";

        
        for (var i = 0; i < gameArray.length; i++) {
            if (gameArray[i].title == imageContainer.value) {
                makeGameContent(gameArray[i]);
                break;
            }
        }
    }
}
function makeGameContent(game) {
    var display = document.getElementById("game-info");

    var header = document.createElement("h2");
    var imageSection = document.createElement("div");
    var infoSection = document.createElement("div");
    var descriptionSection = document.createElement("div");

    var image = document.createElement("img");

    var infoList = document.createElement("ul");
    var title = document.createElement("li");
    var developer = document.createElement("li");
    var platforms = document.createElement("li");
    var releasedate = document.createElement("li");
    var price = document.createElement("li");
    var rating = document.createElement("li");
    var description = document.createElement("p");
    var backButton = document.createElement("button");

    header.id = "game-header";
    imageSection.id = "image-section";
    infoSection.id = "info-section";
    descriptionSection.id = "description-section";

    title.id = "game-title";
    developer.id = "game-developer";
    platforms.id = "game-platforms";
    releasedate.id = "game-release";
    price.id = "game-price";
    rating.id = "game-rating";

    var headertext = document.createTextNode(game.title);
    header.appendChild(headertext);

    var titleText = document.createTextNode(game.title);
    var developerText = document.createTextNode(game.developer);
    var platformsText = document.createTextNode(game.platform);
    var releaseDateText = document.createTextNode(game.release_date);
    var priceText = document.createTextNode("$" + game.price);
    var ratingText = document.createTextNode(game.rating + "/5 stars");

    title.appendChild(titleText);
    developer.appendChild(developerText);
    platforms.appendChild(platformsText);
    releasedate.appendChild(releaseDateText);
    price.appendChild(priceText);
    rating.appendChild(ratingText);

    infoList.appendChild(title);
    infoList.appendChild(developer);
    infoList.appendChild(platforms);
    infoList.appendChild(releasedate);
    infoList.appendChild(price);

    var descriptionText = document.createTextNode(game.description);
    description.appendChild(descriptionText);

    var backtext = document.createTextNode("Back");
    backButton.appendChild(backtext);
    backButton.id = "game-page-back";

    image.src = game.image;

    imageSection.appendChild(image);
    infoSection.appendChild(infoList);
    descriptionSection.appendChild(description);
    descriptionSection.appendChild(backButton);

    display.appendChild(header);
    display.appendChild(imageSection);
    display.appendChild(infoSection);
    display.appendChild(descriptionSection);

    backButton.onclick = function () {

        var lastScreen = document.getElementById("output-text");
        clearGame();
        lastScreen.style.display = "inline";
    }
}