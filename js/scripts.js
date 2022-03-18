fetch ("testdata.json")
.then((mydata) => mydata.json())
.then((mydata) => {
    console.log(mydata);
    console.log(mydata.url);

    document.getElementById("Primary").innerHTML = mydata.url;

    let sample = document.createElement("h1");
    sample.textContent = mydata.url;
    document.getElementById("Primary").appendChild(sample);
});


fetch (apiURL)
.then((response)) => resonse.json())
.then((weatherInfo) => {
    console.log(weatherInfo);
}); // end of .then



const apiURL = "//https://api.openweathermap.org/data/2.5/weather?id=5410902&appid=f02e792d64350e7f05c1bb65d77dd55c&units=imperial"

