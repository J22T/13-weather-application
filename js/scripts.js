const d = new Date();
console.log(d);

const todayDayNumber = d.getDay();
console.log(todayDayNumber);

const myweekday = new Array(7);
    myweekday[0] = "Sunday";
    myweekday[1] = "Monday";
    myweekday[2] = "Tuesday";
    myweekday[3] = "Wednesday";
    myweekday[4] = "Thursday";
    myweekday[5] = "Friday";
    myweekday[6] = "Saturday";

const apiURL = "//api.openweathermap.org/data/2.5/weather?id=5410902&appid=f02e792d64350e7f05c1bb65d77dd55c&units=imperial";

fetch [apiURL]
    .then((response)) => response.json())
    .then((weatherInfo) => {
        console.log(weatherInfo);

        document.getElementById("townName").textContent = weatherInfo.city.name;

        let mylist = weatherInfo.list;

            let forecastDayNumber = todayDayNumber;
            console.log(forecastDayNumber);

            for (i = 0; i < mylist.length; i++) {


                let time = mylist[i].dt_txt;

                if (time.includes('21:00:00')) {
                    console.log(Found an entry with 21:00:00
                    in the time. It was report "+i+" from the mylist of 40");

                    forecasetDayNumber +=1;
                    if(forecastDayNumber ===7) {forecastDayNumber = 0;}
                    console.log("Forecast Day Number " +
                    forecastDayNumber+" which is
                    "+weekday[forecastDayNumber]);

                    let theDayName = document.createElement("span");
                    theDayName.textContent = weekday[forecastDayNumber];

                    let theTemp = document.createElement("p");
                    theTemp.textContent = weatherInfo.list[i].main.temp + "\xB0";

                    console.log("TEMPERATURE>"+weatherInfo.list[i].main.temp);

                    let iconcode = weatherInfo.list[i].weather[0].icon;
                    let iconPath = "//openweathermap.org/img/w/" + iconcode + ".png";
                    let theIcon = document.createElement("img");
                    theIcon.src=iconPath;

                    let theDay = document.createElement("div");
                    theDay.appendChild(theDayName);
                    theDay.appendChild(theTemp);
                    theDay.appendChild(theIcon);

                    document.getElementById('weatherforecast').appendChild(theDay);

                } // end if

        } // end for

    }); // end of "then" for arrow function




















































        // document.getElementById('place').innerHTML=weatherInfo.name;
        // document.getElementById('currentTemp').innerHTML=weatherInfo.main.temp;
        // document.getElementById('windSpeed').innerHTML=weatherInfo.wind.speed;

        // const iconcode = weatherInfo.weather_icon
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






















// console.log(myweekday[3]);








// for (i = 0; i< MediaQueryList.length; i++) {

//     var time = mylist[i].dt_txt;
//     if (time.includes('21:00:00')) {

//     } //end if

// } // end for








// forecsetDayNumber += 1;

// if (forecastDayNumber ===7){
//     forecastDayNumber = 0;
// }





// if (time.includes('21:00:00')) {
//     let theDayName = document.createElement("span");
//     theDayName.textContent = weekday[forecastDayNumber];
//     console.log(">"+weekday[forecastDayNumber]);
// } // end if


// if (time.includes('21:00:00')) {


// } // end if



// if (time.includes('21:00:00')) {




// } // end if








//api.openweathermap.org/data/2.5/weather?zip=92886,{US}&appid=f02e792d64350e7f05c1bb65d77dd55c

// const apiURL = "//api.openweathermap.org/data/2.5/weather?id=5410902&appid=f02e792d64350e7f05c1bb65d77dd55c&units=imperial";












// document.getElementById('weatherforecast').appendChild(theDay);