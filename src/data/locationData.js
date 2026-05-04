const DB = {
  "connaught place": {
    name: "Connaught Place",
    areaType: "Shopping & Commercial Hub",
    nearestMetro: "Rajiv Chowk",
    popularFor: "Shopping, Food",
    bestTime: "Morning & Evening",
    risk: "Moderate Risk: Crowded area, beware of overcharging",
    highlights: ["Palika Bazaar", "Central Park"],
    transport: ["Metro: Rajiv Chowk", "Bus: Multiple routes", "Auto/Cab available"]
  },

  "karol bagh": {
    name: "Karol Bagh",
    areaType: "Shopping & Residential",
    nearestMetro: "Karol Bagh",
    popularFor: "Electronics, Clothes, Street Food",
    bestTime: "Evening",
    risk: "Moderate Risk: Busy market area",
    highlights: ["Ajmal Khan Road", "Gaffar Market", "Tank Road"],
    transport: ["Metro: Karol Bagh", "Bus: DTC routes", "Rickshaw available"]
  },

  "paharganj": {
    name: "Paharganj",
    areaType: "Budget Tourism Hub",
    nearestMetro: "New Delhi",
    popularFor: "Budget Hotels, Backpacker Market",
    bestTime: "Evening",
    risk: "High Risk: Scams & overpricing possible",
    highlights: ["Main Bazaar", "Arakashan Road"],
    transport: ["Metro: New Delhi", "Walking distance to Railway Station", "Autos available"]
  },

  "lajpat nagar": {
    name: "Lajpat Nagar",
    areaType: "Market & Residential",
    nearestMetro: "Lajpat Nagar",
    popularFor: "Clothes, Fabrics, Street Food",
    bestTime: "Evening",
    risk: "Low Risk: Safe but crowded",
    highlights: ["Central Market", "Nearby Khan Market", "South Ex"],
    transport: ["Metro: Lajpat Nagar", "Bus: Multiple routes"]
  },

  "saket": {
    name: "Saket",
    areaType: "Mall & Residential",
    nearestMetro: "Saket",
    popularFor: "Malls, Restaurants, Multiplex",
    bestTime: "Afternoon & Evening",
    risk: "Low Risk: Safe area",
    highlights: ["Select Citywalk", "DLF Avenue"],
    transport: ["Metro: Saket", "Cabs easily available"]
  },

  "old delhi": {
    name: "Old Delhi",
    areaType: "Heritage & Market",
    nearestMetro: "Chandni Chowk",
    popularFor: "Street Food, Spices, Heritage",
    bestTime: "Morning",
    risk: "Moderate Risk: Very crowded, pickpocket risk",
    highlights: ["Chandni Chowk", "Jama Masjid", "Red Fort", "Khari Baoli"],
    transport: ["Metro: Chandni Chowk", "Cycle rickshaw inside lanes"]
  },

  "hauz khas": {
    name: "Hauz Khas",
    areaType: "Upscale Village & Nightlife",
    nearestMetro: "Hauz Khas",
    popularFor: "Cafes, Art, Nightlife",
    bestTime: "Evening & Night",
    risk: "Low Risk: Safe area",
    highlights: ["Hauz Khas Village", "Deer Park", "IIT Delhi area"],
    transport: ["Metro: Hauz Khas", "Cabs easily available"]
  },

  "south extension": {
    name: "South Extension",
    areaType: "Shopping & Residential",
    nearestMetro: "South Extension",
    popularFor: "Branded Shops, Cafes",
    bestTime: "Evening",
    risk: "Low Risk",
    highlights: ["South Ex Part I & II", "Ring Road Market"],
    transport: ["Metro: South Extension", "Autos & cabs"]
  },

  "dwarka": {
    name: "Dwarka",
    areaType: "Sub-City & Residential",
    nearestMetro: "Dwarka Sector 10/14/21",
    popularFor: "Residential Areas, Local Markets",
    bestTime: "Morning & Evening",
    risk: "Low Risk",
    highlights: ["Sector 21 Hub"],
    transport: ["Metro: Multiple Dwarka stations", "Autos available"]
  },

  "nehru place": {
    name: "Nehru Place",
    areaType: "IT & Electronics Hub",
    nearestMetro: "Nehru Place",
    popularFor: "Computer Hardware, Software, IT Goods",
    bestTime: "Daytime",
    risk: "Moderate Risk: Check product authenticity",
    highlights: ["Main Complex", "Ansal Plaza", "Outer Circle"],
    transport: ["Metro: Nehru Place", "Bus: Multiple routes"]
  },

  "airport": {
    name: "IGI Airport (T3)",
    areaType: "International Airport",
    nearestMetro: "IGI Airport (Orange Line)",
    popularFor: "Air Travel, Transit",
    bestTime: "Anytime",
    risk: "Low Risk",
    highlights: ["Terminal 3", "Aerocity", "Duty Free Area"],
    transport: ["Metro: Orange Line", "Prepaid Taxi", "Ola/Uber available"]
  },

  "mayur vihar": {
    name: "Mayur Vihar",
    areaType: "Residential",
    nearestMetro: "Mayur Vihar Phase 1",
    popularFor: "Residential, Local Markets",
    bestTime: "Morning & Evening",
    risk: "Low Risk: Safe residential area",
    highlights: ["Local Markets", "Parks"],
    transport: ["Metro: Mayur Vihar", "Autos & e-rickshaws"]
  },

  "gurudwara bangla sahib": {
    name: "Gurudwara Bangla Sahib",
    areaType: "Religious",
    nearestMetro: "Patel Chowk",
    popularFor: "Spiritual, Langar, Sarovar",
    bestTime: "Early Morning & Evening",
    risk: "Low Risk: Well-managed, police presence",
    highlights: ["Golden Sarovar", "Free Langar", "Museum", "24/7 Open"],
    transport: ["Metro: Patel Chowk", "Bus", "Auto & Taxi"]
  },
  "jama masjid": {
    name: "Jama Masjid",
    areaType: "Religious & Heritage",
    nearestMetro: "Jama Masjid (Yellow Line)",
    popularFor: "Mughal Architecture, Friday Prayers, Street Food",
    bestTime: "Morning & Late Afternoon",
    risk: "Moderate Risk: Crowded, beware of touts",
    highlights: ["Largest Mosque in India", "Minaret Views", "Nearby Karim's Restaurant"],
    transport: ["Metro: Jama Masjid", "Cycle Rickshaw", "Auto"]
  },
  "red fort": {
    name: "Red Fort",
    areaType: "Heritage & Monument",
    nearestMetro: "Lal Quila (Red Fort)",
    popularFor: "Mughal History, Independence Day, Light & Sound Show",
    bestTime: "Morning (7AM-11AM)",
    risk: "Low Risk: ASI Protected, security present",
    highlights: ["Diwan-i-Aam", "Diwan-i-Khas", "Lahori Gate", "Sound & Light Show"],
    transport: ["Metro: Lal Quila", "Bus", "Auto & Taxi"]
  },
  "qutub minar": {
    name: "Qutub Minar",
    areaType: "UNESCO Heritage Monument",
    nearestMetro: "Qutub Minar",
    popularFor: "Tallest Brick Minaret, Indo-Islamic Architecture",
    bestTime: "Morning (Sunrise to 11AM)",
    risk: "Low Risk: Well-patrolled tourist area",
    highlights: ["73m Tall Minaret", "Iron Pillar", "Quwwat-ul-Islam Mosque", "Iltutmish's Tomb"],
    transport: ["Metro: Qutub Minar", "Auto", "Cab/Ola/Uber"]
  },
  "lotus temple": {
    name: "Lotus Temple",
    areaType: "Religious & Architectural",
    nearestMetro: "Kalkaji Mandir",
    popularFor: "Bahai House of Worship, Meditation, Architecture",
    bestTime: "Morning & Late Afternoon",
    risk: "Low Risk: Clean, secure premises",
    highlights: ["Lotus-shaped Architecture", "Silent Meditation Hall", "Lush Gardens"],
    transport: ["Metro: Kalkaji Mandir", "Auto", "DTC Bus"]
  },
  "majnu ka tila": {
    name: "Majnu Ka Tila",
    areaType: "Cultural & Residential",
    nearestMetro: "Vidhan Sabha",
    popularFor: "Tibetan Culture, Cafes, Budget Shopping",
    bestTime: "Late Morning to Evening",
    risk: "Low Risk: Peaceful Tibetan colony",
    highlights: ["Tibetan Monastery", "Momos & Thukpa", "Handicraft Shops", "Cafe Culture"],
    transport: ["Metro: Vidhan Sabha", "Auto", "Bus from ISBT"]
  },
  "gurudwara sis ganj": {
    name: "Gurudwara Sis Ganj Sahib",
    areaType: "Religious & Tourist",
    nearestMetro: "Chandni Chowk",
    popularFor: "Sikh Pilgrimage Site, Historical Significance, Langar, Old Delhi Visit",
    bestTime: "Morning & Evening",
    risk: "Moderate Risk: Very crowded area, beware of pickpocketing and heavy traffic",
    highlights: ["Historic Gurudwara", "Langar Service", "Chandni Chowk Market", "Red Fort Nearby", "Street Food"],
    transport: ["Metro: Chandni Chowk (Yellow Line)", "E-Rickshaw", "Cycle Rickshaw", "Walking (narrow lanes)"]
},
  "gurudwara nanak piao": {
    name: "Gurudwara Nanak Piao Sahib",
    areaType: "Religious & Heritage",
    nearestMetro: "GTB Nagar",
    popularFor: "Guru Nanak's Historical Site, Langar, Peace",
    bestTime: "Morning & Evening",
    risk: "Low Risk: Calm spiritual environment",
    highlights: ["Historic Water Well", "Free Langar", "Peaceful Ambience"],
    transport: ["Metro: GTB Nagar", "Auto", "Bus"]
  },
  "marghat wale baba mandir": {
    name: "Marghat Wale Baba Mandir",
    areaType: "Religious",
    nearestMetro: "Kashmere Gate",
    popularFor: "Local Devotion, Cremation Ground Deity",
    bestTime: "Morning & Evening (Aarti Time)",
    risk: "Low Risk: Local neighbourhood temple",
    highlights: ["Unique Deity", "Morning & Evening Aarti", "Local Cultural Experience"],
    transport: ["Metro: Kashmere Gate", "Auto", "E-Rickshaw"]
  },
  "prachin hanuman mandir": {
    name: "Prachin Hanuman Mandir",
    areaType: "Religious",
    nearestMetro: "Connaught Place",
    popularFor: "Ancient Hanuman Temple, Tuesday Prayers, Central Delhi",
    bestTime: "Early Morning & Tuesday Evenings",
    risk: "Low Risk: Prime central location",
    highlights: ["One of Delhi's Oldest Temples", "Massive Tuesday Crowds", "Near Jantar Mantar"],
    transport: ["Metro: Connaught Place / Rajiv Chowk", "Bus", "Auto"]
  },
  "iskcon temple delhi": {
    name: "ISKCON Temple (Sri Sri Radha Parthasarathi Mandir)",
    areaType: "Religious & Cultural",
    nearestMetro: "Nehru Place",
    popularFor: "Krishna Devotion, Prasadam, Spiritual Discourses",
    bestTime: "Morning & Evening Aarti (6AM & 7PM)",
    risk: "Low Risk: Secure, well-maintained premises",
    highlights: ["Deity Darshan", "Vegetarian Restaurant", "Gift Shop", "Weekend Programs"],
    transport: ["Metro: Nehru Place", "Auto", "Cab/Ola/Uber"]
  },
  "iskcon temple dwarka": {
    name: "ISKCON Temple Dwarka",
    areaType: "Religious",
    nearestMetro: "Dwarka Sector 10",
    popularFor: "Peaceful Prayers, Community Programs",
    bestTime: "Morning & Evening",
    risk: "Low Risk: Residential, calm area",
    highlights: ["Beautiful Deity Hall", "Bhagavad Gita Classes", "Sunday Feast"],
    transport: ["Metro: Dwarka Sector 10", "Auto", "Bus"]
  },
  "iskcon temple punjabi bagh": {
    name: "ISKCON Temple Punjabi Bagh",
    areaType: "Religious",
    nearestMetro: "Punjabi Bagh (Green Line)",
    popularFor: "Morning Aarti, Hare Krishna Chanting",
    bestTime: "Early Morning",
    risk: "Low Risk: Safe residential colony",
    highlights: ["Intimate Temple Setting", "Prasadam Distribution", "Kirtan Programs"],
    transport: ["Metro: Punjabi Bagh", "Auto", "Bus"]
  },
  "iskcon temple rohini": {
    name: "ISKCON Temple Rohini",
    areaType: "Religious",
    nearestMetro: "Rohini East / West",
    popularFor: "Devotional Programs, Community Gatherings",
    bestTime: "Evening",
    risk: "Low Risk: Safe suburban area",
    highlights: ["Large Community Hall", "Cultural Programs", "Prasadam"],
    transport: ["Metro: Rohini East", "Auto", "E-Rickshaw"]
  },
  "lodi garden": {
    name: "Lodi Garden",
    areaType: "Heritage Park",
    nearestMetro: "Jor Bagh / Khan Market",
    popularFor: "Jogging, Picnics, Lodi-era Tombs, Birdwatching",
    bestTime: "Early Morning & Evening",
    risk: "Low Risk: Well-maintained, patrolled park",
    highlights: ["Muhammad Shah's Tomb", "Shisha Gumbad", "Seasonal Flora", "Birdwatching Trails"],
    transport: ["Metro: Jor Bagh / Khan Market", "Auto", "Cab"]
  },
  "amrit udyan": {
    name: "Amrit Udyan (Mughal Gardens)",
    areaType: "Botanical Garden & State Heritage",
    nearestMetro: "Central Secretariat",
    popularFor: "Seasonal Flowers, Presidential Estate, Annual Public Opening",
    bestTime: "Morning (Feb-March during public opening)",
    risk: "Low Risk: High-security Presidential zone",
    highlights: ["Tulip & Rose Gardens", "Herbal Garden", "Musical Garden", "Inside Rashtrapati Bhavan"],
    transport: ["Metro: Central Secretariat", "Auto", "Bus"]
  },
  "botanical garden noida": {
    name: "Botanical Garden",
    areaType: "Nature & Recreation",
    nearestMetro: "Botanical Garden (Blue/Aqua Line)",
    popularFor: "Greenery, Nature Walks, Family Picnics",
    bestTime: "Morning & Late Afternoon",
    risk: "Low Risk: Open green space",
    highlights: ["Diverse Plant Species", "Jogging Tracks", "Lake & Boating", "Children's Park"],
    transport: ["Metro: Botanical Garden", "Auto", "Bus from Noida"]
  },
  "delhi zoo": {
    name: "Delhi Zoo (National Zoological Park)",
    areaType: "Wildlife & Recreation",
    nearestMetro: "Pragati Maidan",
    popularFor: "Wildlife, Family Outings, White Tigers",
    bestTime: "Morning (9AM-11AM, avoid noon heat)",
    risk: "Low Risk: Supervised, fenced enclosures",
    highlights: ["White Tigers", "African Safari Zone", "Reptile House", "Aviary"],
    transport: ["Metro: Pragati Maidan", "Bus", "Auto & Taxi"]
  },

  "india gate": {
    name: "India Gate",
    areaType: "National Monument",
    nearestMetro: "Central Secretariat",
    popularFor: "War Memorial, Picnics, Kartavya Path, Evening Walks",
    bestTime: "Evening & Night",
    risk: "Low Risk: High security, central government zone",
    highlights: ["War Memorial Arch", "Amar Jawan Jyoti", "Kartavya Path", "Boat Rides"],
    transport: ["Metro: Central Secretariat", "Bus", "Auto & Cab"]
  },

  "kashmere gate": {
    name: "Kashmere Gate",
    areaType: "Heritage & Transit Hub",
    nearestMetro: "Kashmere Gate",
    popularFor: "1857 Mutiny History, ISBT, Inter-city Buses",
    bestTime: "Morning & Evening",
    risk: "Moderate Risk: Busy transit area, watch belongings",
    highlights: ["1857 Siege Memorial", "Mughal-era Gate", "ISBT Bus Terminal", "Heritage Walk"],
    transport: ["Metro: Kashmere Gate (Yellow/Red/Violet)", "DTC Bus", "Auto & E-Rickshaw"]
  },

  "seelampur": {
    name: "Seelampur",
    areaType: "Residential & Commercial",
    nearestMetro: "Seelampur",
    popularFor: "Electronics Market, Mobile Resale, Local Commerce",
    bestTime: "Morning to Afternoon",
    risk: "High Risk: Dense market area, watch belongings",
    highlights: ["Largest Mobile Resale Market", "Wholesale Electronics", "Local Street Food"],
    transport: ["Metro: Seelampur (Red Line)", "DTC Bus", "Auto & E-Rickshaw"]
  },

  "adgips": {
    name: "ADGIPS (Dr. Akhilesh Das Gupta Institute of Professional Studies)",
    areaType: "Educational",
    nearestMetro: "Rohini East",
    popularFor: "Engineering & Management College, Student Life, Campus Culture",
    bestTime: "Weekday Mornings",
    risk: "Low Risk: Secure college campus",
    highlights: ["GGSIPU Affiliated College", "Engineering & MBA Programs", "Student Canteen", "Annual College Fest"],
    transport: ["Metro: Rohini East (Red Line)", "DTC Bus", "Auto & E-Rickshaw"]
  },

  "shastri park": {
    name: "Shastri Park",
    areaType: "Residential & Transit",
    nearestMetro: "Shastri Park",
    popularFor: "Local Markets, Residential Area, Daily Commute Hub",
    bestTime: "Morning & Evening",
    risk: "Moderate Risk: Busy local area, stay alert at night",
    highlights: ["Local Weekly Market", "Yamuna River Nearby", "Affordable Street Food", "Bus Terminal"],
    transport: ["Metro: Shastri Park (Red Line)", "DTC Bus", "Auto & E-Rickshaw"]
  },

  "rohini": {
    name: "Rohini",
    areaType: "Residential & Commercial",
    nearestMetro: "Rohini West / Rohini East",
    popularFor: "Residential Area, Shopping Complexes, Parks, Family Living",
    bestTime: "Evening",
    risk: "Low to Moderate Risk: Generally safe, but stay cautious in less crowded areas at night",
    highlights: ["DDA Parks", "Unity One Mall", "Japanese Park", "Sector Markets", "Adventure Island Nearby"],
    transport: ["Metro: Rohini West & East (Red Line)", "DTC Bus", "Auto & E-Rickshaw"]
},
"iit delhi": {
  name: "IIT Delhi",
  areaType: "Educational Institution & Campus Area",
  nearestMetro: "Hauz Khas",
  popularFor: "Premier engineering institute, research, cultural and tech fests",
  bestTime: "Morning to Evening (Campus hours); Fest times for vibrant experience",
  risk: "Low Risk: Secure campus with restricted entry; follow entry protocols",
  highlights: [
    "Main Campus (Hauz Khas)",
    "Dogra Hall",
    "Central Library",
    "Lecture Hall Complex",
    "SAC (Student Activity Center)"
  ],
  transport: [
    "Metro: Hauz Khas (Yellow Line, Magenta Line)",
    "Bus: Multiple DTC routes via Aurobindo Marg",
    "Auto and cab services available"
  ]
},

"pitampura": {
  name: "Pitampura",
  areaType: "Residential & Commercial Area",
  nearestMetro: "Pitampura",
  popularFor: "Netaji Subhash Place (NSP), shopping hubs, cafes, and TV Tower landmark",
  bestTime: "Evening for markets and food spots; Morning for parks",
  risk: "Low to Moderate Risk: Generally safe, but crowded markets require basic caution",
  highlights: [
    "Netaji Subhash Place (NSP)",
    "Dilli Haat Pitampura",
    "Pitampura TV Tower",
    "District Park Pitampura"
  ],
  transport: [
    "Metro: Pitampura (Red Line), Netaji Subhash Place (Red & Pink Line interchange)",
    "Bus: Well-connected via Ring Road and Outer Ring Road",
    "Auto and cab services easily available"
  ]
},

"adarsh nagar": {
  name: "Adarsh Nagar",
  areaType: "Residential & Local Market Area",
  nearestMetro: "Adarsh Nagar",
  popularFor: "Affordable housing, Azadpur Mandi proximity, local street markets",
  bestTime: "Morning for mandi activity; Evening for local shopping and food",
  risk: "Moderate Risk: Busy roads and market areas; watch for traffic and pickpocketing in crowded spots",
  highlights: [
    "Azadpur Mandi",
    "Adarsh Nagar Market",
    "Nearby Jahangirpuri area",
    "Local parks and temples"
  ],
  transport: [
    "Metro: Adarsh Nagar (Yellow Line)",
    "Bus: Good connectivity via GT Karnal Road",
    "Auto and e-rickshaw services widely available"
  ]
},

"vasundhara enclave": {
  name: "Vasundhara Enclave",
  areaType: "Residential & Gated Society Area",
  nearestMetro: "New Ashok Nagar",
  popularFor: "Residential societies, proximity to Noida, peaceful environment",
  bestTime: "Morning and Evening for walks and local exploration",
  risk: "Low Risk: Generally safe and quiet; standard precautions at night",
  highlights: [
    "DDA Flats & Housing Societies",
    "Local parks and community spaces",
    "Nearby Mayur Vihar Phase 1",
    "Close access to Noida Sector 15/16"
  ],
  transport: [
    "Metro: New Ashok Nagar (Blue Line), Mayur Vihar Phase 1 (Blue & Pink Line)",
    "Bus: Connected via NH-24 and nearby routes",
    "Auto, e-rickshaw, and cab services available"
  ]
}
};

export default DB;