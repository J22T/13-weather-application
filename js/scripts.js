const apiURL = "//https://api.openweathermap.org/data/2.5/weather?id=5410902&appid=f02e792d64350e7f05c1bb65d77dd55c&units=imperial"

fetch (apiURL)
    .then((response)) => response.json())
    .then((weatherInfo) => {
        console.log(weatherInfo);

        document.getElementById('place').innerHTML=weatherInfo.name;
}); // end of .then



// fetch ("testdata.json")
// .then((mydata) => mydata.json())
// .then((mydata) => {
//     console.log(mydata);
//     console.log(mydata.url);

//     document.getElementById("Primary").innerHTML = mydata.url;

//     let sample = document.createElement("h1");
//     sample.textContent = mydata.url;
//     document.getElementById("Primary").appendChild(sample);
// });








// const mydate = new Date();

// const y = mydate.getDay();
// console.log(y);5



// const myweekday = new Array(7);

// myweekday[0] = "Sunday";
// myweekday[1] = "Monday";
// myweekday[2] = "Tuesday";
// myweekday[3] = "Wednesday";
// myweekday[4] = "Thursday";
// myweekday[5] = "Friday";
// myweekday[6] = "Saturday";

// console.log(myweekday[3]);