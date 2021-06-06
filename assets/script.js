// set api base URL and key
const api = {
    key: '5eb289bb53abf02581c3494d598b36af',
    baseurl: 'https://api.openweathermap.org/data/2.5/'
}
// set what happens when a user submits their zip code
const searchButton = document.querySelector('#submit')
searchButton.addEventListener('click', setLocation);

function setLocation(event){
    getLocation(searchButton.value);
    localStorage.setItem('location', searchButton.value );
    console.log(searchButton.value);
}

function getLocation (query) {
    fetch (`${api.baseurl}weather?zip=${searchButton.value}&units=imperial&appid=${api.key}`)
    .then (weather =>{
        return weather.json();
    }).then (displayCurrent);
}
function displayCurrent(weather){
    console.log(weather);
    let location = document.querySelector('.display-panel');
    location.innerText = `${weather.name}, ${weather.sys.country}`;
}