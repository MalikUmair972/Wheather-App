async function callApi() {
    const city = document.getElementById('city').value;
    const response = await fetch(`https://goweather.herokuapp.com/weather/${city}`);
    const data = await response.json();


    document.getElementById('temperature').innerHTML = `Temperature: ${data.temperature}`;
    document.getElementById('wind').innerHTML = `Wind: ${data.wind}`;

}
