//to be fetched from visitorinfo
let city='Thane';
let citylatitude='19.2183';
let citylongitude='72.9783';
citylatitude = Number(citylatitude);
citylongitude = Number(citylongitude);
const tierOneCities=[
   {cityName: 'Bangalore', latitude: 12.9716, longitude: 77.5946},
   {cityName: 'Mumbai',latitude: 19.0760, longitude: 72.8777},
  { cityName: 'Chennai',latitude: 13.0827, longitude: 80.2707},
   {cityName:'Delhi',latitude: 28.7041, longitude: 77.1025},
   {cityName: 'Hyderabad',latitude: 17.3850, longitude: 78.4867},
  { cityName: 'Kolkata',latitude: 22.5726, longitude: 88.3639},
   {cityName: 'Ahmedabad',latitude: 23.0225, longitude: 72.5714},
   {cityName: 'Pune',latitude: 18.5204, longitude: 73.8567}
];
function deg2rad(deg) {
 return deg*(Math.PI/180)
  }

//use haversine distance to calaculate distance between cities(using longitude and latitude)
let R=6371; //Radius of earth in km
function haversineDistance( tierOneLatitude, tierOneLongitude){
    var latitudeDiff= deg2rad(tierOneLatitude-citylatitude);
    var longitudeDiff=deg2rad(tierOneLongitude-citylongitude);
    const dist=2*(R) * Math.asin(Math.sqrt(Math.sin(latitudeDiff/2) ** 2 + Math.cos(deg2rad(citylatitude))* Math.cos(deg2rad(tierOneLatitude)) * Math.sin(longitudeDiff/2)** 2 ))
   console.log(dist);
    return dist; //in km
}

function findClosestCity(){
    let thresholdDistance=25; //in km
    let ClosestCity=null;
    for(const city of tierOneCities){
        const distance=haversineDistance(city.latitude,city.longitude);
        if(distance<=thresholdDistance){
            thresholdDistance=distance;
            ClosestCity=city;
        }
    }
    return ClosestCity;
}
const closestCity = findClosestCity();
console.log(closestCity);