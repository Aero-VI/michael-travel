// Geocode database for Michael's travel locations
const GEOCODE = {
  busStations: {
    'London Victoria Coach Station':[51.4952,-0.1486],
    'London':[51.5074,-0.1278],
    'Dover Cruise Terminal':[51.1279,1.3134],
    'Dover':[51.1279,1.3134]
  },
  airports: {
    CPH:[55.618,12.6508],LHR:[51.4700,-0.4543],
    ICN:[37.4602,126.4407],HIJ:[34.4361,132.9194],
    BCN:[41.2974,2.0833],FCO:[41.8003,12.2389],
    ATH:[37.9364,23.9445]
  },
  ports: {
    // Panorama transpacific
    'Singapore':[1.2644,103.8200],
    'Singapore Cruise Centre':[1.2644,103.8200],
    'Phu My (Ho Chi Minh City)':[10.5458,107.0143],
    'Ho Chi Minh City':[10.8231,106.6297],
    'Kota Kinabalu':[5.9749,116.0724],
    'Manila':[14.5995,120.9842],
    'Guam':[13.4443,144.7937],
    'Hagatna':[13.4443,144.7937],
    'Honolulu':[21.3069,-157.8583],
    'Long Beach':[33.7542,-118.2165],
    'Port of Long Beach':[33.7542,-118.2165],
    // Sapphire Princess Baltic
    'Copenhagen':[55.6761,12.5683],
    'Copenhagen Cruise Port':[55.6961,12.6136],
    'Oslo':[59.9139,10.7522],
    'Skagen':[57.7209,10.5835],
    'Bornholm':[55.1036,14.9142],
    'Visby':[57.6349,18.2948],
    'Stockholm':[59.3293,18.0686],
    'Helsinki':[60.1699,24.9384],
    'Tallinn':[59.4370,24.7536],
    'Riga':[56.9496,24.1052],
    'Gdynia':[54.5189,18.5305],
    'Gdansk (Gdynia)':[54.5189,18.5305],
    // Liberty of the Seas
    'Southampton':[50.8998,-1.4044],
    'Port of Southampton':[50.8998,-1.4044],
    'Hamburg':[53.5461,9.9937],
    'Zeebrugge':[51.3285,3.1757],
    'Bruges (Zeebrugge)':[51.3285,3.1757],
    // Carnival Miracle UK & Iceland
    'Dover':[51.1279,1.3134],
    'Dover Cruise Terminal':[51.1279,1.3134],
    'Belfast':[54.6079,-5.9264],
    'Seydisfjordur':[65.2583,-14.0053],
    'Akureyri':[65.6835,-18.0878],
    'Grundarfjordur':[64.9220,-23.2561],
    'Reykjavik':[64.1466,-21.9426],
    'Heimaey':[63.4393,-20.2686],
    'Heimaey (Westman Islands)':[63.4393,-20.2686],
    'Invergordon':[57.6886,-4.1767],
    // Mardi Gras transatlantic
    'Barcelona':[41.3784,2.1699],
    'Port of Barcelona':[41.3784,2.1699],
    'Malaga':[36.7213,-4.4214],
    'Cadiz':[36.5298,-6.2926],
    'Cadiz (Seville)':[36.5298,-6.2926],
    'Santa Cruz de Tenerife':[28.4636,-16.2518],
    'Tenerife':[28.4636,-16.2518],
    'Freeport':[26.5285,-78.6967],
    'Celebration Key':[26.5285,-78.6967],
    'Cape Canaveral':[28.4084,-80.6101],
    'Port Canaveral':[28.4084,-80.6101],
    // Miracle Med I
    'Civitavecchia':[42.0936,11.7864],
    'Civitavecchia (Rome)':[42.0936,11.7864],
    'Naples':[40.8429,14.2681],
    'Messina':[38.1938,15.5540],
    'Dubrovnik':[42.6507,18.0944],
    'Corfu':[39.6243,19.9217],
    'Katakolon':[37.6378,21.3163],
    'Katakolon (Olympia)':[37.6378,21.3163],
    // Miracle Med II
    'Santorini':[36.3932,25.4615],
    'Kusadasi':[37.8611,27.2620],
    'Kusadasi (Ephesus)':[37.8611,27.2620],
    'Istanbul':[41.0082,28.9784],
    'Mykonos':[37.4415,25.3285],
    'Athens':[37.9838,23.7275],
    'Athens (Piraeus)':[37.9422,23.6463],
    'Valletta':[35.8989,14.5146],
    // Mardi Gras Caribbean
    'Charlotte Amalie':[18.3358,-64.9307],
    'St. Thomas':[18.3358,-64.9307],
    'Philipsburg':[18.0237,-63.0458],
    'St. Maarten':[18.0237,-63.0458],
    'San Juan':[18.4655,-66.1057],
    'Puerto Plata':[19.7934,-70.6884],
    'Amber Cove':[19.7934,-70.6884]
  },
  trains: {
    'Dover Priory Station':[51.1262,1.3076],
    'London Victoria Station':[51.4952,-0.1439],
    'Hiroshima Station':[34.3963,132.4594],
    'Hiroshima':[34.3963,132.4594],
    'Shin-Osaka Station':[34.7336,135.5001],
    'Osaka':[34.6937,135.5023],
    'Tokyo Station':[35.6812,139.7671],
    'Tokyo':[35.6762,139.6503]
  },
  events: {
    'Belfast':[54.6079,-5.9264],
    'Seydisfjordur':[65.2583,-14.0053],
    'Grindavik':[63.8422,-22.4326],
    'Tokyo':[35.6762,139.6503],
    'Athens':[37.9838,23.7275],
    'Istanbul':[41.0082,28.9784]
  },
  cities: {
    'Singapore':[1.3521,103.8198],
    'Ho Chi Minh City':[10.8231,106.6297],
    'Kota Kinabalu':[5.9749,116.0724],
    'Manila':[14.5995,120.9842],
    'Hagatna':[13.4443,144.7937],
    'Honolulu':[21.3069,-157.8583],
    'Long Beach':[33.7542,-118.2165],
    'Copenhagen':[55.6761,12.5683],
    'Oslo':[59.9139,10.7522],
    'Skagen':[57.7209,10.5835],
    'Bornholm':[55.1036,14.9142],
    'Visby':[57.6349,18.2948],
    'Stockholm':[59.3293,18.0686],
    'Helsinki':[60.1699,24.9384],
    'Tallinn':[59.4370,24.7536],
    'Riga':[56.9496,24.1052],
    'Gdynia':[54.5189,18.5305],
    'Southampton':[50.8998,-1.4044],
    'Hamburg':[53.5461,9.9937],
    'Zeebrugge':[51.3285,3.1757],
    'London':[51.5074,-0.1278],
    'Dover':[51.1279,1.3134],
    'Belfast':[54.6079,-5.9264],
    'Seydisfjordur':[65.2583,-14.0053],
    'Akureyri':[65.6835,-18.0878],
    'Grundarfjordur':[64.9220,-23.2561],
    'Reykjavik':[64.1466,-21.9426],
    'Heimaey':[63.4393,-20.2686],
    'Invergordon':[57.6886,-4.1767],
    'Crawley':[51.1092,-0.1872],
    'Seoul':[37.5665,126.9780],
    'Hiroshima':[34.3963,132.4594],
    'Osaka':[34.6937,135.5023],
    'Tokyo':[35.6762,139.6503],
    'Barcelona':[41.3874,2.1686],
    'Rome':[41.9028,12.4964],
    'Civitavecchia':[42.0936,11.7864],
    'Naples':[40.8429,14.2681],
    'Messina':[38.1938,15.5540],
    'Dubrovnik':[42.6507,18.0944],
    'Corfu':[39.6243,19.9217],
    'Katakolon':[37.6378,21.3163],
    'Santorini':[36.3932,25.4615],
    'Kusadasi':[37.8611,27.2620],
    'Istanbul':[41.0082,28.9784],
    'Mykonos':[37.4415,25.3285],
    'Athens':[37.9838,23.7275],
    'Valletta':[35.8989,14.5146],
    'Malaga':[36.7213,-4.4214],
    'Cadiz':[36.5298,-6.2926],
    'Santa Cruz de Tenerife':[28.4636,-16.2518],
    'Freeport':[26.5285,-78.6967],
    'Cape Canaveral':[28.4084,-80.6101],
    'St. Thomas':[18.3358,-64.9307],
    'St. Maarten':[18.0237,-63.0458],
    'San Juan':[18.4655,-66.1057],
    'Puerto Plata':[19.7934,-70.6884],
    'Grindavik':[63.8422,-22.4326]
  }
};

function geocode(type, name, city, code) {
  if (type === 'Flight' && code && GEOCODE.airports[code]) return GEOCODE.airports[code];
  if (type === 'Cruise') {
    if (GEOCODE.ports[name]) return GEOCODE.ports[name];
    if (GEOCODE.ports[city]) return GEOCODE.ports[city];
  }
  if (type === 'Bus') {
    if (GEOCODE.busStations[name]) return GEOCODE.busStations[name];
    if (GEOCODE.busStations[city]) return GEOCODE.busStations[city];
  }
  if (type === 'Train') {
    if (GEOCODE.trains[name]) return GEOCODE.trains[name];
    if (GEOCODE.trains[city]) return GEOCODE.trains[city];
  }
  if (GEOCODE.cities[name]) return GEOCODE.cities[name];
  if (GEOCODE.cities[city]) return GEOCODE.cities[city];
  if (GEOCODE.ports[name]) return GEOCODE.ports[name];
  if (GEOCODE.ports[city]) return GEOCODE.ports[city];
  if (GEOCODE.events[city]) return GEOCODE.events[city];
  if (GEOCODE.events[name]) return GEOCODE.events[name];
  return null;
}
