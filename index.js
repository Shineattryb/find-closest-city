//to be fetched from visitorinfo
let city='Thane';
let citylatitude='19.21833';
let citylongitude='72.97808';

const tierOneCities=[
   {cityName: 'Bangalore', latitude: 12.97164, longitude: 77.59460},
   {cityName: 'Mumbai',latitude: 19.07600, longitude: 72.87770},
  {cityName: 'Chennai',latitude: 13.08268, longitude: 80.27072},
   {cityName:'Delhi',latitude: 28.62739, longitude: 77.17169},
   {cityName: 'Hyderabad',latitude: 17.38504, longitude: 78.48667},
  { cityName: 'Kolkata',latitude: 22.57264, longitude: 88.36389},
   {cityName: 'Ahmedabad',latitude: 23.02250, longitude: 72.57136},
   {cityName: 'Pune',latitude: 18.52043, longitude: 73.85674}
];
function deg2rad(deg) {
 return deg*(Math.PI/180)
  }

//use haversine distance to calaculate distance between cities(using longitude and latitude)
let R=6371; //Radius of earth in km
function haversineDistance( tierOneLatitude, tierOneLongitude,citylatitude,citylongitude){
      // Calculate differences in latitude and longitude
    var latitudeDiff= deg2rad(tierOneLatitude-citylatitude);
    var longitudeDiff=deg2rad(tierOneLongitude-citylongitude);
    const dist=2*(R) * Math.asin(Math.sqrt(Math.sin(latitudeDiff/2) ** 2 + Math.cos(deg2rad(citylatitude))* Math.cos(deg2rad(tierOneLatitude)) * Math.sin(longitudeDiff/2)** 2 ))
  
    return dist; //in km
}
// Function to find the closest city within a threshold distance
function findClosestCity(){
    let thresholdDistance=25; //in km
  
    const citiesWithDistance = tierOneCities.map(tierOneCity => {
        const distance = haversineDistance(tierOneCity.latitude, tierOneCity.longitude,citylatitude,citylongitude);
        return {
            city: tierOneCity.cityName,
            distance, 
            isWithinThreshold: distance <= thresholdDistance,
            distanceMeasuredFromCity:city
        };
    });

    return citiesWithDistance; 
    
}
const citiesWithDistance = findClosestCity();
console.log(citiesWithDistance);