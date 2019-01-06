
$(document).ready(function () {

    setActivePage();
    loadCarPanels();
    setCarBrandButtonActive();
});


function setActivePage() {
    var link = location.pathname.split("/")

    if (link.length < 3 || link[2].includes('index')) {
        $("#homeAnchor").addClass("text-dark");
        $("#aboutAnchor").removeClass("text-dark");
        $("#projectAnchor").removeClass("text-dark");
        $("#contactAnchor").removeClass("text-dark");

    } else {
        if (link[2].includes('about')) {
            $("#aboutAnchor").addClass("text-dark");
            $("#homeAnchor").removeClass("text-dark");
            $("#projectAnchor").removeClass("text-dark");
            $("#contactAnchor").removeClass("text-dark");
        }
        if (link[2].includes('project')) {
            $("#projectAnchor").addClass("text-dark");
            $("#homeAnchor").removeClass("text-dark");
            $("#aboutAnchor").removeClass("text-dark");
            $("#contactAnchor").removeClass("text-dark");
        }
        if (link[2].includes('contact')) {
            $("#contactAnchor").addClass("text-dark");
            $("#homeAnchor").removeClass("text-dark");
            $("#aboutAnchor").removeClass("text-dark");
            $("#projectAnchor").removeClass("text-dark");
        }
    }

}


var states = [
    {
        "name": "Alabama",
        "abbreviation": "AL",
        "cities": [
            "Birmingham",
            "Montgomery",
            "Mobile",
            "Huntsville",
            "Tuscaloosa",
            "Hoover",
            "Dothan",
            "Auburn",
            "Decatur",
            "Madison",
            "Florence",
            "Gadsden"
        ]
    },
    {
        "name": "Alaska",
        "abbreviation": "AK",
        "cities": ["Anchorage"]
    },
    {
        "name": "Arizona",
        "abbreviation": "AZ",
        "cities": [
            "Phoenix",
            "Tucson",
            "Mesa",
            "Chandler",
            "Glendale",
            "Scottsdale",
            "Gilbert",
            "Tempe",
            "Peoria",
            "Surprise",
            "Yuma",
            "Avondale",
            "Goodyear",
            "Flagstaff",
            "Buckeye",
            "Lake Havasu City",
            "Casa Grande",
            "Sierra Vista",
            "Maricopa",
            "Oro Valley",
            "Prescott",
            "Bullhead City",
            "Prescott Valley",
            "Marana",
            "Apache Junction"
        ]
    },
    {
        "name": "Arkansas",
        "abbreviation": "AR"
        ,
        "cities": [
            "Little Rock",
            "Fort Smith",
            "Fayetteville",
            "Springdale",
            "Jonesboro",
            "North Little Rock",
            "Conway",
            "Rogers",
            "Pine Bluff",
            "Bentonville"
        ]
    },
    {
        "name": "California",
        "abbreviation": "CA",
        "cities": [
            "Los Angeles",
            "San Diego",
            "San Jose",
            "San Francisco",
            "Fresno",
            "Sacramento",
            "Long Beach",
            "Oakland",
            "Bakersfield",
            "Anaheim",
            "Santa Ana",
            "Riverside",
            "Stockton",
            "Chula Vista",
            "Irvine",
            "Fremont",
            "San Bernardino",
            "Modesto",
            "Fontana",
            "Oxnard",
            "Moreno Valley",
            "Huntington Beach",
            "Glendale",
            "Santa Clarita",
            "Garden Grove",
            "Oceanside",
            "Rancho Cucamonga",
            "Santa Rosa",
            "Ontario",
            "Lancaster",
            "Elk Grove",
            "Corona",
            "Palmdale",
            "Salinas",
            "Pomona",
            "Hayward",
            "Escondido",
            "Torrance",
            "Sunnyvale",
            "Orange",
            "Fullerton",
            "Pasadena",
            "Thousand Oaks",
            "Visalia",
            "Simi Valley",
            "Concord",
            "Roseville",
            "Victorville",
            "Santa Clara",
            "Vallejo",
            "Berkeley",
            "El Monte",
            "Downey",
            "Costa Mesa",
            "Inglewood",
            "Carlsbad",
            "San Buenaventura (Ventura)",
            "Fairfield",
            "West Covina",
            "Murrieta",
            "Richmond",
            "Norwalk",
            "Antioch",
            "Temecula",
            "Burbank",
            "Daly City",
            "Rialto",
            "Santa Maria",
            "El Cajon",
            "San Mateo",
            "Clovis",
            "Compton",
            "Jurupa Valley",
            "Vista",
            "South Gate",
            "Mission Viejo",
            "Vacaville",
            "Carson",
            "Hesperia",
            "Santa Monica",
            "Westminster",
            "Redding",
            "Santa Barbara",
            "Chico",
            "Newport Beach",
            "San Leandro",
            "San Marcos",
            "Whittier",
            "Hawthorne",
            "Citrus Heights",
            "Tracy",
            "Alhambra",
            "Livermore",
            "Buena Park",
            "Menifee",
            "Hemet",
            "Lakewood",
            "Merced",
            "Chino",
            "Indio",
            "Redwood City",
            "Lake Forest",
            "Napa",
            "Tustin",
            "Bellflower",
            "Mountain View",
            "Chino Hills",
            "Baldwin Park",
            "Alameda",
            "Upland",
            "San Ramon",
            "Folsom",
            "Pleasanton",
            "Union City",
            "Perris",
            "Manteca",
            "Lynwood",
            "Apple Valley",
            "Redlands",
            "Turlock",
            "Milpitas",
            "Redondo Beach",
            "Rancho Cordova",
            "Yorba Linda",
            "Palo Alto",
            "Davis",
            "Camarillo",
            "Walnut Creek",
            "Pittsburg",
            "South San Francisco",
            "Yuba City",
            "San Clemente",
            "Laguna Niguel",
            "Pico Rivera",
            "Montebello",
            "Lodi",
            "Madera",
            "Santa Cruz",
            "La Habra",
            "Encinitas",
            "Monterey Park",
            "Tulare",
            "Cupertino",
            "Gardena",
            "National City",
            "Rocklin",
            "Petaluma",
            "Huntington Park",
            "San Rafael",
            "La Mesa",
            "Arcadia",
            "Fountain Valley",
            "Diamond Bar",
            "Woodland",
            "Santee",
            "Lake Elsinore",
            "Porterville",
            "Paramount",
            "Eastvale",
            "Rosemead",
            "Hanford",
            "Highland",
            "Brentwood",
            "Novato",
            "Colton",
            "Cathedral City",
            "Delano",
            "Yucaipa",
            "Watsonville",
            "Placentia",
            "Glendora",
            "Gilroy",
            "Palm Desert",
            "Cerritos",
            "West Sacramento",
            "Aliso Viejo",
            "Poway",
            "La Mirada",
            "Rancho Santa Margarita",
            "Cypress",
            "Dublin",
            "Covina",
            "Azusa",
            "Palm Springs",
            "San Luis Obispo",
            "Ceres",
            "San Jacinto",
            "Lincoln",
            "Newark",
            "Lompoc",
            "El Centro",
            "Danville",
            "Bell Gardens",
            "Coachella",
            "Rancho Palos Verdes",
            "San Bruno",
            "Rohnert Park",
            "Brea",
            "La Puente",
            "Campbell",
            "San Gabriel",
            "Beaumont",
            "Morgan Hill",
            "Culver City",
            "Calexico",
            "Stanton",
            "La Quinta",
            "Pacifica",
            "Montclair",
            "Oakley",
            "Monrovia",
            "Los Banos",
            "Martinez"
        ]
    },
    {
        "name": "Colorado",
        "abbreviation": "CO",
        "cities": [
            "Denver",
            "Colorado Springs",
            "Aurora",
            "Fort Collins",
            "Lakewood",
            "Thornton",
            "Arvada",
            "Westminster",
            "Pueblo",
            "Centennial",
            "Boulder",
            "Greeley",
            "Longmont",
            "Loveland",
            "Grand Junction",
            "Broomfield",
            "Castle Rock",
            "Commerce City",
            "Parker",
            "Littleton",
            "Northglenn"
        ]
    },
    {
        "name": "Connecticut",
        "abbreviation": "CT",
        "cities": [
            "Bridgeport",
            "New Haven",
            "Stamford",
            "Hartford",
            "Waterbury",
            "Norwalk",
            "Danbury",
            "New Britain",
            "Meriden",
            "Bristol",
            "West Haven",
            "Milford",
            "Middletown",
            "Norwich",
            "Shelton"
        ]
    },
    {
        "name": "Delaware",
        "abbreviation": "DE",
        "cities": [
            "Wilmington",
            "Dover"
        ]
    },
    {
        "name": "District Of Columbia",
        "abbreviation": "DC",
        "cities": [
            "Washington"
        ]
    },
    {
        "name": "Florida",
        "abbreviation": "FL",
        "cities":[
            "Jacksonville",
            "Miami",
            "Tampa",
            "Orlando",
            "St. Petersburg",
            "Hialeah",
            "Tallahassee",
            "Fort Lauderdale",
            "Port St. Lucie",
            "Cape Coral",
            "Pembroke Pines",
            "Hollywood",
            "Miramar",
            "Gainesville",
            "Coral Springs",
            "Miami Gardens",
            "Clearwater",
            "Palm Bay",
            "Pompano Beach",
            "West Palm Beach",
            "Lakeland",
            "Davie",
            "Miami Beach",
            "Sunrise",
            "Plantation",
            "Boca Raton",
            "Deltona",
            "Largo",
            "Deerfield Beach",
            "Palm Coast",
            "Melbourne",
            "Boynton Beach",
            "Lauderhill",
            "Weston",
            "Fort Myers",
            "Kissimmee",
            "Homestead",
            "Tamarac",
            "Delray Beach",
            "Daytona Beach",
            "North Miami",
            "Wellington",
            "North Port",
            "Jupiter",
            "Ocala",
            "Port Orange",
            "Margate",
            "Coconut Creek",
            "Sanford",
            "Sarasota",
            "Pensacola",
            "Bradenton",
            "Palm Beach Gardens",
            "Pinellas Park",
            "Coral Gables",
            "Doral",
            "Bonita Springs",
            "Apopka",
            "Titusville",
            "North Miami Beach",
            "Oakland Park",
            "Fort Pierce",
            "North Lauderdale",
            "Cutler Bay",
            "Altamonte Springs",
            "St. Cloud",
            "Greenacres",
            "Ormond Beach",
            "Ocoee",
            "Hallandale Beach",
            "Winter Garden",
            "Aventura"
          ]
    },
    {
        "name": "Georgia",
        "abbreviation": "GA",
        "cities":[
            "Atlanta",
            "Columbus",
            "Augusta-Richmond County",
            "Savannah",
            "Athens-Clarke County",
            "Sandy Springs",
            "Roswell",
            "Macon",
            "Johns Creek",
            "Albany",
            "Warner Robins",
            "Alpharetta",
            "Marietta",
            "Valdosta",
            "Smyrna",
            "Dunwoody"
          ]
    },
    {
        "name": "Hawaii",
        "abbreviation": "HI",
        "cities": ["Honolulu"]
    },
    {
        "name": "Idaho",
        "abbreviation": "ID",
        "cities":[
            "Boise City",
            "Nampa",
            "Meridian",
            "Idaho Falls",
            "Pocatello",
            "Caldwell",
            "Coeur d'Alene",
            "Twin Falls"
          ]
    },
    {
        "name": "Illinois",
        "abbreviation": "IL",
        "cities":[
            "Chicago",
            "Aurora",
            "Rockford",
            "Joliet",
            "Naperville",
            "Springfield",
            "Peoria",
            "Elgin",
            "Waukegan",
            "Cicero",
            "Champaign",
            "Bloomington",
            "Arlington Heights",
            "Evanston",
            "Decatur",
            "Schaumburg",
            "Bolingbrook",
            "Palatine",
            "Skokie",
            "Des Plaines",
            "Orland Park",
            "Tinley Park",
            "Oak Lawn",
            "Berwyn",
            "Mount Prospect",
            "Normal",
            "Wheaton",
            "Hoffman Estates",
            "Oak Park",
            "Downers Grove",
            "Elmhurst",
            "Glenview",
            "DeKalb",
            "Lombard",
            "Belleville",
            "Moline",
            "Buffalo Grove",
            "Bartlett",
            "Urbana",
            "Quincy",
            "Crystal Lake",
            "Plainfield",
            "Streamwood",
            "Carol Stream",
            "Romeoville",
            "Rock Island",
            "Hanover Park",
            "Carpentersville",
            "Wheeling",
            "Park Ridge",
            "Addison",
            "Calumet City"
          ]
    },
    {
        "name": "Indiana",
        "abbreviation": "IN",
        "cities":[
            "Indianapolis",
            "Fort Wayne",
            "Evansville",
            "South Bend",
            "Carmel",
            "Bloomington",
            "Fishers",
            "Hammond",
            "Gary",
            "Muncie",
            "Lafayette",
            "Terre Haute",
            "Kokomo",
            "Anderson",
            "Noblesville",
            "Greenwood",
            "Elkhart",
            "Mishawaka",
            "Lawrence",
            "Jeffersonville",
            "Columbus",
            "Portage"
          ]
    },
    {
        "name": "Iowa",
        "abbreviation": "IA",
        "cities":[
            "Des Moines",
            "Cedar Rapids",
            "Davenport",
            "Sioux City",
            "Iowa City",
            "Waterloo",
            "Council Bluffs",
            "Ames",
            "West Des Moines",
            "Dubuque",
            "Ankeny",
            "Urbandale",
            "Cedar Falls"
          ]
    },
    {
        "name": "Kansas",
        "abbreviation": "KS",
        "cities":[
            "Wichita",
            "Overland Park",
            "Kansas City",
            "Olathe",
            "Topeka",
            "Lawrence",
            "Shawnee",
            "Manhattan",
            "Lenexa",
            "Salina",
            "Hutchinson"
          ]
    },
    {
        "name": "Kentucky",
        "abbreviation": "KY",
        "cities":[
            "Louisville/Jefferson County",
            "Lexington-Fayette",
            "Bowling Green",
            "Owensboro",
            "Covington"
          ]
    },
    {
        "name": "Louisiana",
        "abbreviation": "LA",
        "cities":[
            "New Orleans",
            "Baton Rouge",
            "Shreveport",
            "Lafayette",
            "Lake Charles",
            "Kenner",
            "Bossier City",
            "Monroe",
            "Alexandria"
          ]
    },
    {
        "name": "Maine",
        "abbreviation": "ME",
        "cities":[
            "Portland"
          ]
    },
    {
        "name": "Maryland",
        "abbreviation": "MD",
        "cities":[
            "Baltimore",
            "Frederick",
            "Rockville",
            "Gaithersburg",
            "Bowie",
            "Hagerstown",
            "Annapolis"
          ]
    },
    {
        "name": "Massachusetts",
        "abbreviation": "MA",
        "cities":[
            "Boston",
            "Worcester",
            "Springfield",
            "Lowell",
            "Cambridge",
            "New Bedford",
            "Brockton",
            "Quincy",
            "Lynn",
            "Fall River",
            "Newton",
            "Lawrence",
            "Somerville",
            "Waltham",
            "Haverhill",
            "Malden",
            "Medford",
            "Taunton",
            "Chicopee",
            "Weymouth Town",
            "Revere",
            "Peabody",
            "Methuen",
            "Barnstable Town",
            "Pittsfield",
            "Attleboro",
            "Everett",
            "Salem",
            "Westfield",
            "Leominster",
            "Fitchburg",
            "Beverly",
            "Holyoke",
            "Marlborough",
            "Woburn",
            "Chelsea"
          ]
    },
    {
        "name": "Michigan",
        "abbreviation": "MI",
        "cities":[
            "Detroit",
            "Grand Rapids",
            "Warren",
            "Sterling Heights",
            "Ann Arbor",
            "Lansing",
            "Flint",
            "Dearborn",
            "Livonia",
            "Westland",
            "Troy",
            "Farmington Hills",
            "Kalamazoo",
            "Wyoming",
            "Southfield",
            "Rochester Hills",
            "Taylor",
            "Pontiac",
            "St. Clair Shores",
            "Royal Oak",
            "Novi",
            "Dearborn Heights",
            "Battle Creek",
            "Saginaw",
            "Kentwood",
            "East Lansing",
            "Roseville",
            "Portage",
            "Midland",
            "Lincoln Park",
            "Muskegon"
          ]
    },
    {
        "name": "Minnesota",
        "abbreviation": "MN",
        "cities":[
            "Minneapolis",
            "St. Paul",
            "Rochester",
            "Duluth",
            "Bloomington",
            "Brooklyn Park",
            "Plymouth",
            "St. Cloud",
            "Eagan",
            "Woodbury",
            "Maple Grove",
            "Eden Prairie",
            "Coon Rapids",
            "Burnsville",
            "Blaine",
            "Lakeville",
            "Minnetonka",
            "Apple Valley",
            "Edina",
            "St. Louis Park",
            "Mankato",
            "Maplewood",
            "Moorhead",
            "Shakopee"
          ]
    },
    {
        "name": "Mississippi",
        "abbreviation": "MS",
        "cities":[
            "Jackson",
            "Gulfport",
            "Southaven",
            "Hattiesburg",
            "Biloxi",
            "Meridian"
          ]
    },
    {
        "name": "Missouri",
        "abbreviation": "MO",
        "cities":[
            "Kansas City",
            "St. Louis",
            "Springfield",
            "Independence",
            "Columbia",
            "Lee's Summit",
            "O'Fallon",
            "St. Joseph",
            "St. Charles",
            "St. Peters",
            "Blue Springs",
            "Florissant",
            "Joplin",
            "Chesterfield",
            "Jefferson City",
            "Cape Girardeau"
          ]
    },
    {
        "name": "Montana",
        "abbreviation": "MT",
        "cities":[
            "Billings",
            "Missoula",
            "Great Falls",
            "Bozeman"
          ]
    },
    {
        "name": "Nebraska",
        "abbreviation": "NE",
        "cities":[
            "Omaha",
            "Lincoln",
            "Bellevue",
            "Grand Island"
          ]
    },
    {
        "name": "Nevada",
        "abbreviation": "NV",
        "cities":[
            "Las Vegas",
            "Henderson",
            "Reno",
            "North Las Vegas",
            "Sparks",
            "Carson City"
          ]
    },
    {
        "name": "New Hampshire",
        "abbreviation": "NH",
        "cities":[
            "Manchester",
            "Nashua",
            "Concord"
          ]
    },
    {
        "name": "New Jersey",
        "abbreviation": "NJ",
        "cities":[
            "Newark",
            "Jersey City",
            "Paterson",
            "Elizabeth",
            "Clifton",
            "Trenton",
            "Camden",
            "Passaic",
            "Union City",
            "Bayonne",
            "East Orange",
            "Vineland",
            "New Brunswick",
            "Hoboken",
            "Perth Amboy",
            "West New York",
            "Plainfield",
            "Hackensack",
            "Sayreville",
            "Kearny",
            "Linden",
            "Atlantic City"
          ]
    },
    {
        "name": "New Mexico",
        "abbreviation": "NM",
        "cities":[
            "Albuquerque",
            "Las Cruces",
            "Rio Rancho",
            "Santa Fe",
            "Roswell",
            "Farmington",
            "Clovis"
          ]
    },
    {
        "name": "New York",
        "abbreviation": "NY",
        "cities":[
            "New York",
            "Buffalo",
            "Rochester",
            "Yonkers",
            "Syracuse",
            "Albany",
            "New Rochelle",
            "Mount Vernon",
            "Schenectady",
            "Utica",
            "White Plains",
            "Hempstead",
            "Troy",
            "Niagara Falls",
            "Binghamton",
            "Freeport",
            "Valley Stream"
          ]
    },
    {
        "name": "North Carolina",
        "abbreviation": "NC",
        "cities":[
            "Charlotte",
            "Raleigh",
            "Greensboro",
            "Durham",
            "Winston-Salem",
            "Fayetteville",
            "Cary",
            "Wilmington",
            "High Point",
            "Greenville",
            "Asheville",
            "Concord",
            "Gastonia",
            "Jacksonville",
            "Chapel Hill",
            "Rocky Mount",
            "Burlington",
            "Wilson",
            "Huntersville",
            "Kannapolis",
            "Apex",
            "Hickory",
            "Goldsboro"
          ]
    },
    {
        "name": "North Dakota",
        "abbreviation": "ND",
        "cities":[
            "Fargo",
            "Bismarck",
            "Grand Forks",
            "Minot"
          ]
    },
    {
        "name": "Ohio",
        "abbreviation": "OH",
        "cities":[
            "Columbus",
            "Cleveland",
            "Cincinnati",
            "Toledo",
            "Akron",
            "Dayton",
            "Parma",
            "Canton",
            "Youngstown",
            "Lorain",
            "Hamilton",
            "Springfield",
            "Kettering",
            "Elyria",
            "Lakewood",
            "Cuyahoga Falls",
            "Middletown",
            "Euclid",
            "Newark",
            "Mansfield",
            "Mentor",
            "Beavercreek",
            "Cleveland Heights",
            "Strongsville",
            "Dublin",
            "Fairfield",
            "Findlay",
            "Warren",
            "Lancaster",
            "Lima",
            "Huber Heights",
            "Westerville",
            "Marion",
            "Grove City"
          ]
    },
    {
        "name": "Oklahoma",
        "abbreviation": "OK",
        "cities":[
            "Oklahoma City",
            "Tulsa",
            "Norman",
            "Broken Arrow",
            "Lawton",
            "Edmond",
            "Moore",
            "Midwest City",
            "Enid",
            "Stillwater",
            "Muskogee"
          ]
    },
    {
        "name": "Oregon",
        "abbreviation": "OR",
        "cities":[
            "Portland",
            "Eugene",
            "Salem",
            "Gresham",
            "Hillsboro",
            "Beaverton",
            "Bend",
            "Medford",
            "Springfield",
            "Corvallis",
            "Albany",
            "Tigard",
            "Lake Oswego",
            "Keizer"
          ]
    },
    {
        "name": "Pennsylvania",
        "abbreviation": "PA",
        "cities":[
            "Philadelphia",
            "Pittsburgh",
            "Allentown",
            "Erie",
            "Reading",
            "Scranton",
            "Bethlehem",
            "Lancaster",
            "Harrisburg",
            "Altoona",
            "York",
            "State College",
            "Wilkes-Barre"
          ]
    },
    {
        "name": "Rhode Island",
        "abbreviation": "RI",
        "cities":[
            "Providence",
            "Warwick",
            "Cranston",
            "Pawtucket",
            "East Providence",
            "Woonsocket"
          ]
    },
    {
        "name": "South Carolina",
        "abbreviation": "SC",
        "cities":[
            "Columbia",
            "Charleston",
            "North Charleston",
            "Mount Pleasant",
            "Rock Hill",
            "Greenville",
            "Summerville",
            "Sumter",
            "Goose Creek",
            "Hilton Head Island",
            "Florence",
            "Spartanburg"
          ]
    },
    {
        "name": "South Dakota",
        "abbreviation": "SD",
        "cities":[
            "Sioux Falls",
            "Rapid City"
          ]
    },
    {
        "name": "Tennessee",
        "abbreviation": "TN",
        "cities":[
            "Memphis",
            "Nashville-Davidson",
            "Knoxville",
            "Chattanooga",
            "Clarksville",
            "Murfreesboro",
            "Jackson",
            "Franklin",
            "Johnson City",
            "Bartlett",
            "Hendersonville",
            "Kingsport",
            "Collierville",
            "Cleveland",
            "Smyrna",
            "Germantown",
            "Brentwood"
          ]
    },
    {
        "name": "Texas",
        "abbreviation": "TX",
        "cities":[
            "Houston",
            "San Antonio",
            "Dallas",
            "Austin",
            "Fort Worth",
            "El Paso",
            "Arlington",
            "Corpus Christi",
            "Plano",
            "Laredo",
            "Lubbock",
            "Garland",
            "Irving",
            "Amarillo",
            "Grand Prairie",
            "Brownsville",
            "Pasadena",
            "McKinney",
            "Mesquite",
            "McAllen",
            "Killeen",
            "Frisco",
            "Waco",
            "Carrollton",
            "Denton",
            "Midland",
            "Abilene",
            "Beaumont",
            "Round Rock",
            "Odessa",
            "Wichita Falls",
            "Richardson",
            "Lewisville",
            "Tyler",
            "College Station",
            "Pearland",
            "San Angelo",
            "Allen",
            "League City",
            "Sugar Land",
            "Longview",
            "Edinburg",
            "Mission",
            "Bryan",
            "Baytown",
            "Pharr",
            "Temple",
            "Missouri City",
            "Flower Mound",
            "Harlingen",
            "North Richland Hills",
            "Victoria",
            "Conroe",
            "New Braunfels",
            "Mansfield",
            "Cedar Park",
            "Rowlett",
            "Port Arthur",
            "Euless",
            "Georgetown",
            "Pflugerville",
            "DeSoto",
            "San Marcos",
            "Grapevine",
            "Bedford",
            "Galveston",
            "Cedar Hill",
            "Texas City",
            "Wylie",
            "Haltom City",
            "Keller",
            "Coppell",
            "Rockwall",
            "Huntsville",
            "Duncanville",
            "Sherman",
            "The Colony",
            "Burleson",
            "Hurst",
            "Lancaster",
            "Texarkana",
            "Friendswood",
            "Weslaco"
          ]
    },
    {
        "name": "Utah",
        "abbreviation": "UT",
        "cities":[
            "Salt Lake City",
            "West Valley City",
            "Provo",
            "West Jordan",
            "Orem",
            "Sandy",
            "Ogden",
            "St. George",
            "Layton",
            "Taylorsville",
            "South Jordan",
            "Lehi",
            "Logan",
            "Murray",
            "Draper",
            "Bountiful",
            "Riverton",
            "Roy"
          ]
    },
    {
        "name": "Vermont",
        "abbreviation": "VT",
        "cities":[
            "Burlington"
          ]
    },
    {
        "name": "Virginia",
        "abbreviation": "VA",
        "cities":[
            "Virginia Beach",
            "Norfolk",
            "Chesapeake",
            "Richmond",
            "Newport News",
            "Alexandria",
            "Hampton",
            "Roanoke",
            "Portsmouth",
            "Suffolk",
            "Lynchburg",
            "Harrisonburg",
            "Leesburg",
            "Charlottesville",
            "Danville",
            "Blacksburg",
            "Manassas"
          ]
    },
    {
        "name": "Washington",
        "abbreviation": "WA",
        "cities":[
            "Seattle",
            "Spokane",
            "Tacoma",
            "Vancouver",
            "Bellevue",
            "Kent",
            "Everett",
            "Renton",
            "Yakima",
            "Federal Way",
            "Spokane Valley",
            "Bellingham",
            "Kennewick",
            "Auburn",
            "Pasco",
            "Marysville",
            "Lakewood",
            "Redmond",
            "Shoreline",
            "Richland",
            "Kirkland",
            "Burien",
            "Sammamish",
            "Olympia",
            "Lacey",
            "Edmonds",
            "Bremerton",
            "Puyallup"
          ]
    },
    {
        "name": "West Virginia",
        "abbreviation": "WV",
        "cities":[
            "Charleston",
            "Huntington"
          ]
    },
    {
        "name": "Wisconsin",
        "abbreviation": "WI",
        "cities":[
            "Milwaukee",
            "Madison",
            "Green Bay",
            "Kenosha",
            "Racine",
            "Appleton",
            "Waukesha",
            "Eau Claire",
            "Oshkosh",
            "Janesville",
            "West Allis",
            "La Crosse",
            "Sheboygan",
            "Wauwatosa",
            "Fond du Lac",
            "New Berlin",
            "Wausau",
            "Brookfield",
            "Greenfield",
            "Beloit"
          ]
    },
    {
        "name": "Wyoming",
        "abbreviation": "WY",
        "cities":[
            "Cheyenne",
            "Casper"
          ]
    }
]




$(document).ready(function () {

    loadStates();
    loadCity();

    $('#inputState').change(function () {
        $('#inputCity').empty();
        loadCity();
    });


});

function loadStates() {
    states.forEach(function (obj) {
        $('#inputState').append($('<option>', { value: obj.abbreviation, text: obj.name }));

    })
}

function loadCity() {
    states.forEach(function (obj) {
        if ($('#inputState').val() === obj.abbreviation) {
            obj.cities.forEach(function (city) {
                $('#inputCity').append($('<option>', { value: city, text: city }));
            })

        }

    })
}

// const ALLSTATES = [];

// function loadAllStatesAndContries() {
//     $.get("https://restcountries.eu/rest/v2/all", function (data) {
//         ALLSTATES = data;
//     })
//         .done(function () {
//             //
//         })
//         .fail(function () {
//             //
//         })
//         .always(function () {
//             //
//         });
// }


function loadCarPanels() {
    $('#carsPanel').load('panelNissan.html');
}


function setCarBrandButtonActive() {
    $('#nissanButton').click(function () {
        $("#nissanButton").addClass("active");
        $("#toyotaButton").removeClass("active");
        $("#subaruButton").removeClass("active");
        $("#hondaButton").removeClass("active");

        $('#carsPanel').load('panelNissan.html');
    });

    $('#toyotaButton').click(function () {
        $("#toyotaButton").addClass("active");
        $("#nissanButton").removeClass("active");
        $("#subaruButton").removeClass("active");
        $("#hondaButton").removeClass("active");

        $('#carsPanel').load('panelToyota.html');
    });

    $('#subaruButton').click(function () {
        $("#subaruButton").addClass("active");
        $("#toyotaButton").removeClass("active");
        $("#nissanButton").removeClass("active");
        $("#hondaButton").removeClass("active");

        $('#carsPanel').load('panelSubaru.html');
    });

    $('#hondaButton').click(function () {
        $("#hondaButton").addClass("active");
        $("#toyotaButton").removeClass("active");
        $("#subaruButton").removeClass("active");
        $("#nissanButton").removeClass("active");

        $('#carsPanel').load('panelHonda.html');
    });



}

// ===== Scroll to Top ==== 
$(window).scroll(function () {
    if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
        $('#return-to-top').fadeIn(200);    // Fade in the arrow
    } else {
        $('#return-to-top').fadeOut(200);   // Else fade out the arrow
    }
});
$('#return-to-top').click(function () {      // When arrow is clicked
    $('body,html').animate({
        scrollTop: 0                       // Scroll to top of body
    }, 500);
});