const words = {
    "a": "Aisle,Actually,Active,Anymore,Art,A,Ago,Authorized,Account,Added,Andesite,Anyone,All,Add,Acorn,Alarm,Alcohol,Alien,Alligator,America,Anchor,Angel,Ankle,Ant,Ants,Anvil,Apple,Arcade,Archer,Armor,Astronaut,Australia,Autumn,Axe,Air",
    "b": "Bob,Baby,Bacon,Bag,Bagel,Baggage,Balloon,Balloons,Bamboo,Banana,Bank,Barbie,Barn,Baseball,Basketball,Bathroom,Batman,Battery,Battleship,Beach,Beans,Bear,Beard,Beaver,Bed,Beehive,Beer,Bell,Bells,Belly,Bench,Berry,Bicycle,Bike,Bikini,Binoculars,Bird,Birthday,Blanket,Blocks,Blood,Boar,Boat,Bomb,Booger,Book,Bookcase,Bookstore,Boots,Booty,Bottle,Bow,Bowl,Bowtie,Box,Boy,Bracelet,Brain,Branch,Bread,Bridge,Broomstick,Brush,Bubble,Bucket,Bug,Building,Bumblebee,Bunny,Burger,Burn,Bus,Butterfly,Button,Bond",
    "c": "Cherry,Cabin,Cactus,Cake,Calculator,Camel,Camera,Camp,Campfire,Canada,Candle,Candy,Candy,Cane,Cannibal,Capture,Car,Card,Carrot,Castle,Cat,Cauldron,Cave,Cd,Cereal,Chair,Chalk,Chard,Charmander,Cheek,Cheese,Cheeseburger,Chef,Chess,Chest,Chestplate,Chicken,Children,Chimney,Chin,Chocolate,Christmas,Cigar,Cinema,Circle,Circus,Clock,Cloud,Clown,Coal,Coconut,Coffee,Cold,Comet,Compass,Computer,Cone,Confused,Cookie,Cookies,Cork,Couch,Cow,Crab,Crack,Crayon,Creeper,Crib,Crowd,Crown,Crying,Cup,Cupcake,Cyclop,Cyclops,Can,Cart,Club,Cream",
    "d": "Dab,Dance,Darts,Desert,Desk,Diamond,Diamonds,Diary,Dice,Dinosaur,Disco,Dog,Doll,Dolphin,Domino,Dominoes,Donut,Door,Doormat,Dragon,Draw,Dream,Dress,Drill,Drink,Drool,Drum,Drums,Duck,Dryer",
    "e": "Eddie,Eagle,Ear,Ears,Earth,Egg,Eggs,Elbow,Electricity,Elephant,Elevator,Emerald,Emeralds,Ender,Eraser,Erupt,Explosion,Eye,Eyepatch,Eyes",
    "f": "Far,Face,Facebook,Fall,Family,Farm,Fat,Father,Fighting,Filing,Finger,Fire,Fireplace,Fishing,Fist,Flag,Flamingo,Flashlight,Flint,Flower,Flowers,Flute,Food,Football,Forest,Fort,Fountain,Frenchfries,Fridge,Fries,Frisbee,Frog,Frozen",
    "g": "Good,George,Gary,Galaxy,Game,Gapples,Garbage,Garden,Gate,Ghast,Ghost,Giant,Gift,Gingerbread,Giraffe,Girl,Glacier,Glasses,Godzilla,Gold,Golem,Golf,Grapes,Grass,Grave,Gravestone,Graveyard,Grim,Guard,Guitar,Gun",
    "h": "Hair,Halloween,Hammer,Hamster,Hand,Handcuffs,Hands,Hang,Harry,Hat,Head,Headphones,Helicopter,Helmet,Hill,Hippo,Hobo,Hockey,Holding,Hook,Hoop,Horse,Hospital,Hot,Hotdog,House,Hula",
    "i": "I,Ice,Iceberg,Icecream,Icicle,Igloo,Ipod,Iron",
    "j": "Jam,James,Jellyfish,Jingle,Joker,Juggle,Jump,Jungle",
    "k": "Keemstar,Kangaroo,Key,Keyboard,King,Kirby,Kiss,Kite,Kitten,Knot",
    "l": "Larry,Licking,Ladybug,Lake,Lamp,Lance,Laptop,Lava,Lawnmower,Leaf,Leash,Letter,Letterbox,Light,Lightbulb,Lighthouse,Lightning,Lights,Lightsaber,Lion,Lipstick,Lizard,Llama,Lobster,Lollipop,Love,Luigi",
    "m": "Merry,Minesweeper,Mixer,Machine,Missions,Magic,Magnet,Mail,Mailman,Man,Mansion,Mario,Math,Mattress,Melon,Microsoft,Milk,Minecart,Minecraft,Mineplex,Miner,Money,Monitor,Monkey,Moon,Moose,Mosquito,Mother,Motorbike,Motorcycle,Mountain,Mouse,Movie,Mudkip,Muffin,Muscles,Mushroom,Music",
    "n": "Nexus,Nana,Natural,Neck,Necklace,Nether,Newspaper,Night,Nightmare,Ninja,Nintendo,Noodles,Notebook",
    "o": "Oscar,Obsidian,Ocean,Orange,Ore,Ornament,Owl",
    "p": "Plays,Plush,Plus,Plug,Paint,Painting,Pajamas,Palace,Pancake,Panda,Pants,Paper,Party,Peach,Peanut,Peasant,Pen,Pencil,Penguin,Pepper,Pepsi,Person,Phone,Photo,Photograph,Piano,Pickle,Picnic,Pie,Pig,Pigman,Pikachu,Pillow,Pineapple,Ping,Pinwheel,Pirate,Pistol,Piston,Pizza,Plane,Planet,Plant,Plate,Playstation,Plumber,Pokeball,Pokemon,Pole,Police,Pong,Pool,Poop,Popcorn,Portal,Pot,Potato,Potter,Pregnant,Present,Presenter,Pretzel,Prince,Princess,Prison,Prize,Pull,Pumpkin,Punch,Puppet,Puppy,Purse,Push,Pyramid",
    "q": "Queen,Quick",
    "r": "Random,Rabbit,Racecar,Racket,Radar,Radio,Rain,Rainbow,Raspberry,Reaper,Redstone,Refrigerator,Remote,Restaurant,Rhinoceros,Rice,Riding,Rifle,Ring,River,Robot,Rod,Roll,Roof,Rope,Rose,Round,Royal,Rubbish,Rug,Ruins,Ruler",
    "s": "Super,Saddle,Salad,Salsa,Salt,Sandwich,Santa,Scale,Scarf,School,Scissors,Screw,Sea,Seahorse,Seashell,Seesaw,Shark,Sheep,Shield,Shirt,Shoe,Shopping,Shorts,Shotgun,Shout,Shovel,Sideburns,Sidewalk,Sign,Skate,Skateboard,Skeleton,Ski,Skiing,Skinny,Skirt,Skull,Skunk,Skype,Sled,Sleeping,Slide,Slime,Slippers,Sloth,Smile,Snail,Snake,Snorlax,Snow,Snowball,Snowboard,Snowflake,Snowman,Soap,Sock,Soda,Song,Soup,Spaceship,Spaghetti,Speaker,Speedboat,Spider,Spikes,Sponge,Spoon,Spray,Spring,Sprout,Squid,Squirrel,Stable,Stage,Stain,Staircase,Stairs,Stamp,Stars,State,States,Statue,Stingray,Stomach,Stool,Stop,Stoplight,Storm,Strawberry,Stump,Sugar,Suitcase,Summer,Sun,Sunflower,Sunglasses,Sunrise,Sunset,Superman,Sushi,Swimming,Swing,Swordfish,Syrup",
    "t": "Tall,Table,Taco,Tail,Tank,Tape,Taxi,Teapot,Tears,Teddy,Telephone,Telescope,Television,Temple,Tennis,Tent,Tetris,Thief,Thorn,Thumb,Tiger,Time,Tiny,Toast,Toaster,Toilet,Tomato,Tooth,Toothbrush,Top,Torch,Tornado,Towel,Tower,Traffic,Trash,Treasure,Treat,Tree,Treehouse,Trick,Troll,Truck,Trumpet,Turtle,Tv,Twitter",
    "u": "Umbrella,Unicorn,United,Uppercut,Usb",
    "v": "Vex,Vest,Video,Violin,Volcano,Vomit",
    "w": "Wow,Wagon,Waist,Wallet,Watch,Water,Waterfall,Watering,Watermelon,Web,Whale,Wheat,Whisk,Whistle,Wind,Windmill,Window,Winter,Witch,Wither,Wizard,Wolf,Worm,Wrench",
    "x": "Xylophone,Xbox",
    "y": "YourMCAdmin,Yawn,Yelling,Yoshi,Youtube",
    "z": "Zebra,Zipper,Zombie,Zoo"
}
