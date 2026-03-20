async function BuscaTempo(){
    event.preventDefault();

    var cidade = document.getElementById("cidade").value;
    const url = "https://api.openweathermap.org/data/2.5/weather?q=" + cidade + "&lang=pt_br" + "&units=metric" + "&appid=91724d69db6f2cfba58a43c58418f1b2";
    
    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error(`Response status: ${response.status}`);
        
        const json = await response.json();
        console.log(json);

        var lat = json.coord.lat;
        var lon = json.coord.lon;
        var zoom = 13;

        var tipoClima = json.weather[0].main;
        changeapperance(tipoClima);

        var url_icone = "https://openweathermap.org/img/wn/" + json.weather[0].icon + "@2x.png";
        document.getElementById('local').innerText = json.name;
        document.getElementById("weathericon").src = url_icone;
        document.getElementById('descricao').innerText = json.weather[0].description;
        document.getElementById('temperatura').innerText = json.main.temp;
        document.getElementById('mintemp').innerHTML = json.main.temp_min;
        document.getElementById('maxtemp').innerHTML = json.main.temp_max;
        document.getElementById('umidade').innerText = json.main.humidity;
        document.getElementById('vento').innerText = json.wind.speed;
        document.getElementById('pressao').innerHTML = json.main.pressure;

        var url_mapa = 'https://www.openstreetmap.org/?#map=' + zoom + '/' + lat + '/' + lon;
        var esq = lon * 0.99;
        var topo = lat * 0.99;
        var dir = lon * 1.01;
        var rodape = lat * 1.01;
        
        document.getElementById("mapa").innerHTML = '<iframe width="500" height="250" src="https://www.openstreetmap.org/export/embed.html?bbox=' + esq + '%2C' + topo + '%2C' + dir + '%2C' + rodape + '&amp;layer=mapnik" style="border: 1px solid black"></iframe><br/><small><a href="' + url_mapa + '">Ver mapa ampliado</a></small>';
    
    } catch(error) {
        console.error(error.message);
    }
}

const x = document.getElementById("demo");

function buscarLocalizacao() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}

function showPosition(position) {
    x.innerHTML = "Latitude: " + position.coords.latitude +
        "<br>Longitude: " + position.coords.longitude;
}

function changeapperance(tipo){
    var body = document.querySelector('body');
    var painels = document.querySelectorAll('.umidade, .vento, .pressao');

    let bgColor, panelColor;
    switch(tipo){
        case "Thunderstorm":
            bgColor = 'rgb(30, 30, 50)';
            panelColor = 'rgb(40, 40, 60)';
            break;
        case "Drizzle":
            bgColor = 'rgb(50, 50, 70)';
            panelColor = 'rgb(60, 60, 80)';
            break;
        case "Rain":
            bgColor = 'rgb(40, 45, 60)';
            panelColor = 'rgb(50, 55, 70)';
            break;
        case "Snow":
            bgColor = 'rgb(60, 70, 90)';
            panelColor = 'rgb(70, 80, 100)';
            break;
        case "Clear":
            bgColor = 'rgb(50, 60, 80)';
            panelColor = 'rgb(60, 70, 90)';
            break;
        case "Clouds":
            bgColor = 'rgb(70, 80, 100)';
            panelColor = 'rgb(80, 90, 110)';
            break;
        default:
            bgColor = 'rgb(30, 30, 50)';
            panelColor = 'rgb(40, 40, 60)';
    }

    body.style.background = bgColor;
    painels.forEach(panel => {
        panel.style.background = panelColor;
    });
}