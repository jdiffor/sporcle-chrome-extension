document.getElementById('category').addEventListener("change", categorySelected);
document.getElementById('saveButton').addEventListener('click', saveSettings);

function saveSettings() {
    var e = document.getElementById("category");
    var selectedCategory = e.options[e.selectedIndex].value;
    if(selectedCategory == 'none') {
        localStorage["urlExtension"] = "";
    } else {
        var d = document.getElementById("subcategory");
        var selectedSubcategory = d.options[d.selectedIndex].value;
        if(selectedSubcategory == 'none') {
            localStorage["urlExtension"] = '?c=' + selectedCategory;
        } else {
            localStorage["urlExtension"] = '?sc=' + selectedSubcategory;
        }
    }
    document.getElementById("saved").innerHTML = "Saved!";
    fadeOut(document.getElementById("saved"));
}

function fadeOut(elem) {
    var fadeEffect = setInterval(function () {
        if (!elem.style.opacity) {
            elem.style.opacity = 1;
        }
        if (elem.style.opacity > 0) {
            elem.style.opacity -= 0.1;
        } else {
            clearInterval(fadeEffect);
        }
    }, 80);
    // elem.innerHTML = "";
    // elem.style.opacity = 1;
}

function categorySelected() {
    var e = document.getElementById("category");
    var selectedCategory = e.options[e.selectedIndex].value;
    loadSubcategories(selectedCategory);
}

function loadSubcategories(cat) {
    switch(cat) {
        case 'none':
            choseAny();
            break;
        case 'sports':
            choseSports();
            break;
        case 'geography':
            choseGeography();
            break;
        case 'music':
            choseMusic();
            break;
        case 'movies':
            choseMovies();
            break;
        case 'television':
            choseTelevision();
            break;
        case 'fun':
            choseFun();
            break;
        case 'miscellaneous':
            choseMiscellaneous();
            break;
        case 'history':
            choseHistory();
            break;
        case 'literature':
            choseLiterature();
            break;
        case 'language':
            choseLanguage();
            break;
        case 'science':
            choseScience();
            break;
        case 'gaming':
            choseGaming();
            break;
        case 'entertainment':
            choseEntertainment();
            break;
        case 'religion':
            choseReligion();
            break;
        case 'holiday':
            choseHoliday();
            break;
        default:
            choseAny();
            break;
    }
}

function choseAny() {
    output = `
        <option value="none">Any</option>
    `;
    document.getElementById('subcategory').innerHTML = output;
    document.getElementById("subcategory").disabled = true;
}

function choseSports() {
    output = `
        <option value="none">Any</option>
        <option value="autoracing">Auto Racing</option>
        <option value="baseball">Baseball</option>
        <option value="basketball">Basketball</option>
        <option value="cricket">Cricket</option>
        <option value="football">Football</option>
        <option value="golf">Golf</option>
        <option value="hockey">Hockey</option>
        <option value="marchmadness">March Madness</option>
        <option value="mlb">MLB</option>
        <option value="nba">NBA</option>
        <option value="ncaa">NCAA</option>
        <option value="nfl">NFL</option>
        <option value="nhl">NHL</option>
        <option value="olympics">Olympics</option>
        <option value="premierleague">Premier League</option>
        <option value="rugby">Rugby</option>
        <option value="soccer">Soccer</option>
        <option value="sportsteams">Sports Teams</option>
        <option value="tennis">Tennis</option>
        <option value="worldcup">World Cup</option>
        <option value="wwe">WWE</option>
    `;
    document.getElementById('subcategory').innerHTML = output;
    document.getElementById("subcategory").disabled = false;
}

function choseGeography() {
    output = `
        <option value="none">Any</option>
        <option value="africa">Africa</option>
        <option value="asia">Asia</option>
        <option value="border">Border</option>
        <option value="canada">Canada</option>
        <option value="capital">Capital</option>
        <option value="city">City</option>
        <option value="continent">Continent</option>
        <option value="country">Country</option>
        <option value="europe">Europe</option>
        <option value="flags">Flags</option>
        <option value="northamerica">North America</option>
        <option value="oceania">Oceania</option>
        <option value="population">Population</option>
        <option value="southamerica">South America</option>
        <option value="state">State</option>
        <option value="topography">Topography</option>
        <option value="unitedkingdom">United Kingdom</option>
        <option value="unitedstates">United States</option>
        <option value="world">World</option>
    `;
    document.getElementById('subcategory').innerHTML = output;
    document.getElementById("subcategory").disabled = false;
}

function choseMusic() {
    output = `
        <option value="none">Any</option>
        <option value="album">Album</option>
        <option value="artist">Artist</option>
        <option value="bands">Bands</option>
        <option value="thebeatles">The Beatles</option>
        <option value="billboard">Billboard</option>
        <option value="classical">Classical</option>
        <option value="clip">Clip</option>
        <option value="countrymusic">Country Music</option>
        <option value="figureoutthelyrics">Figure Out the Lyrics</option>
        <option value="kpop">Kpop</option>
        <option value="lyrics">Lyrics</option>
        <option value="rap">Rap</option>
        <option value="rock">Rock</option>
        <option value="singers">Singers</option>
        <option value="song">Song</option>
        <option value="taylorswift">Taylor Swift</option>
    `;
    document.getElementById('subcategory').innerHTML = output;
    document.getElementById("subcategory").disabled = false;
}

function choseMovies() {
    output = `
        <option value="none">Any</option>
        <option value="actor">Actor</option>
        <option value="actress">Actress</option>
        <option value="bestpicture">Best Picture</option>
        <option value="boxoffice">Box Office</option>
        <option value="director">Director</option>
        <option value="disney">Disney</option>
        <option value="horrormovies">Horror Movies</option>
        <option value="jamesbond">James Bond</option>
        <option value="moviecharacters">Movie Characters</option>
        <option value="moviequotes">Movie Quotes</option>
        <option value="movieresume">Movie Resume</option>
        <option value="movietitles">Movie Titles</option>
        <option value="nominee">Nominee</option>
        <option value="oscar">Oscar</option>
        <option value="pixar">Pixar</option>
        <option value="role">Role</option>
        <option value="starwars">Star Wars</option>
    `;
    document.getElementById('subcategory').innerHTML = output;
    document.getElementById("subcategory").disabled = false;
}

function choseTelevision() {
    output = `
        <option value="none">Any</option>
        <option value="arresteddevelopment">Arrested Development</option>
        <option value="thebigbangtheory">The Big Bang Theory</option>
        <option value="cast">Cast</option>
        <option value="doctorwho">Doctor Who</option>
        <option value="emmy">Emmy</option>
        <option value="familyguy">Family Guy</option>
        <option value="friends">Friends</option>
        <option value="howimetyourmother">How I Met Your Mother</option>
        <option value="lost(abc)">Lost (ABC)</option>
        <option value="montypython">Monty Python</option>
        <option value="network">Network</option>
        <option value="theoffice">The Office</option>
        <option value="realityshows">Reality Shows</option>
        <option value="seinfeld">Seinfeld</option>
        <option value="sherlock">Sherlock</option>
        <option value="thesimpsons">The Simpsons</option>
        <option value="sitcom">Sitcom</option>
        <option value="southpark">South Park</option>
        <option value="spongebob">SpongeBob</option>
        <option value="startrek">Star Trek</option>
        <option value="tvshow">TV Show</option>
        <option value="thewalkingdead">The Walking Dead</option>
    `;
    document.getElementById('subcategory').innerHTML = output;
    document.getElementById("subcategory").disabled = false;
}

function choseFun() {
    output = `
        <option value="none">Any</option>
        <option value="alphabet">Alphabet</option>
        <option value="blitz">Blitz</option>
        <option value="clickable">Clickable</option>
        <option value="color">Color</option>
        <option value="followthatline">Follow That Line</option>
        <option value="logic">Logic</option>
        <option value="minefield">Minefield</option>
        <option value="missingword">Missing Word</option>
        <option value="mixedword">Mixed Word</option>
        <option value="puzzle">Puzzle</option>
        <option value="quickpick">Quick Pick</option>
        <option value="sporcle">Sporcle</option>
        <option value="thisorthat">This or That</option>
        <option value="typing">Typing</option>
        <option value="wordladder">Word Ladder</option>
        <option value="wordplay">Word Play</option>
    `;
    document.getElementById('subcategory').innerHTML = output;
    document.getElementById("subcategory").disabled = false;
}

function choseMiscellaneous() {
    output = `
        <option value="none">Any</option>
        <option value="automobiles">Automobiles</option>
        <option value="babynames">Baby Names</option>
        <option value="college">College</option>
        <option value="company">Company</option>
        <option value="food">Food</option>
        <option value="generalknowledge">General Knowledge</option>
        <option value="grabbag">Grab Bag</option>
        <option value="justice">Justice</option>
        <option value="letter">Letter</option>
        <option value="logo">Logo</option>
        <option value="numbers">Numbers</option>
        <option value="popular">Popular</option>
        <option value="restaurants">Restaurants</option>
        <option value="slogans">Slogans</option>
        <option value="university">University</option>
    `;
    document.getElementById('subcategory').innerHTML = output;
    document.getElementById("subcategory").disabled = false;
}

function choseHistory() {
    output = `
        <option value="none">Any</option>
        <option value="art">Art</option>
        <option value="biography">Biography</option>
        <option value="century">Century</option>
        <option value="decade">Decade</option>
        <option value="discovery">Discovery</option>
        <option value="nation">Nation</option>
        <option value="onthisday">On This Day</option>
        <option value="politics">Politics</option>
        <option value="uspresidents">US Presidents</option>
        <option value="war">War</option>
        <option value="worldleaders">World Leaders</option>
        <option value="year">Year</option>
    `;
    document.getElementById('subcategory').innerHTML = output;
    document.getElementById("subcategory").disabled = false;
}

function choseLiterature() {
    output = `
        <option value="none">Any</option>
        <option value="asongoficeandfire">A Song of Ice and Fire</option>
        <option value="author">Author</option>
        <option value="book">Book</option>
        <option value="childrensbooks">Children's Books</option>
        <option value="divergent">Divergent</option>
        <option value="harrypotter">Harry Potter</option>
        <option value="thehungergames">The Hunger Games</option>
        <option value="literarycharacter">Literary Character</option>
        <option value="lordoftherings">Lord of the Rings</option>
        <option value="novel">Novel</option>
        <option value="percyjackson">Percy Jackson</option>
        <option value="play">Play</option>
        <option value="poem">Poem</option>
        <option value="shakespeare">Shakespeare</option>
        <option value="youngadult">Young Adult</option>
    `;
    document.getElementById('subcategory').innerHTML = output;
    document.getElementById("subcategory").disabled = false;
}

function choseLanguage() {
    output = `
        <option value="none">Any</option>
        <option value="beginsandends">Begins and Ends</option>
        <option value="chinese">Chinese</option>
        <option value="definition">Definition</option>
        <option value="french">French</option>
        <option value="german">German</option>
        <option value="italian">Italian</option>
        <option value="japanese">Japanese</option>
        <option value="latin">Latin</option>
        <option value="spanish">Spanish</option>
        <option value="translation">Translation</option>
        <option value="vocabulary">Vocabulary</option>
    `;
    document.getElementById('subcategory').innerHTML = output;
    document.getElementById("subcategory").disabled = false;
}

function choseScience() {
    output = `
        <option value="none">Any</option>
        <option value="anatomy">Anatomy</option>
        <option value="animal">Animal</option>
        <option value="astronomy">Astronomy</option>
        <option value="biology">Biology</option>
        <option value="chemistry">Chemistry</option>
        <option value="computer">Computer</option>
        <option value="elements">Elements</option>
        <option value="generalscience">General Science</option>
        <option value="geology">Geology</option>
        <option value="math">Math</option>
        <option value="physics">Physics</option>
    `;
    document.getElementById('subcategory').innerHTML = output;
    document.getElementById("subcategory").disabled = false;
}

function choseGaming() {
    output = `
        <option value="none">Any</option>
        <option value="boardgames">Board Games</option>
        <option value="cardgames">Card Games</option>
        <option value="console">Console</option>
        <option value="finalfantasy">Final Fantasy</option>
        <option value="leagueoflegends">League of Legends</option>
        <option value="legendofzelda">Legend of Zelda</option>
        <option value="mario">Mario</option>
        <option value="minecraft">Minecraft</option>
        <option value="nintendo">Nintendo</option>
        <option value="pokémon">Pokémon</option>
        <option value="toys">Toys</option>
        <option value="videogames">Video Games</option>
    `;
    document.getElementById('subcategory').innerHTML = output;
    document.getElementById("subcategory").disabled = false;
}

function choseEntertainment() {
    output = `
        <option value="none">Any</option>
        <option value="animation">Animation</option>
        <option value="anime">Anime</option>
        <option value="broadway">Broadway</option>
        <option value="cartoons">Cartoons</option>
        <option value="celebrity">Celebrity</option>
        <option value="comicbooks">Comic Books</option>
        <option value="dccomics">DC Comics</option>
        <option value="famous">Famous</option>
        <option value="goldenglobes">Golden Globes</option>
        <option value="marvel">Marvel</option>
        <option value="musical">Musical</option>
        <option value="quote">Quote</option>
        <option value="show">Show</option>
        <option value="superhero">Superhero</option>
    `;
    document.getElementById('subcategory').innerHTML = output;
    document.getElementById("subcategory").disabled = false;
}

function choseReligion() {
    output = `
        <option value="none">Any</option>
        <option value="bible">Bible</option>
        <option value="catholicism">Catholicism</option>
        <option value="christianity">Christianity</option>
        <option value="church">Church</option>
        <option value="islam">Islam</option>
        <option value="judaism">Judaism</option>
        <option value="mythology">Mythology</option>
        <option value="scripture">Scripture</option>
        <option value="testament">Testament</option>
        <option value="verse">Verse</option>
    `;
    document.getElementById('subcategory').innerHTML = output;
    document.getElementById("subcategory").disabled = false;
}

function choseHoliday() {
    output = `
        <option value="none">Any</option>
        <option value="aprilfools">April Fools'</option>
        <option value="carol">Carol</option>
        <option value="christmas">Christmas</option>
        <option value="easter">Easter</option>
        <option value="halloween">Halloween</option>
        <option value="holidaysongs">Holiday Songs</option>
        <option value="nationalholiday">National Holiday</option>
        <option value="religiousholiday">Religious Holiday</option>
        <option value="stpatricksday">St Patrick's Day</option>
        <option value="thanksgiving">Thanksgiving</option>
        <option value="valentinesday">Valentine's Day</option>
    `;
    document.getElementById('subcategory').innerHTML = output;
    document.getElementById("subcategory").disabled = false;
}
