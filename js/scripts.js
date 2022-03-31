// api key f02e792d64350e7f05c1bb65d77dd55c

// api call - city ID https://api.openweathermap.org/data/2.5/weather?id={city id}&appid={API key}

// api call - ZIP code https://api.openweathermap.org/data/2.5/weather?zip={zip code},{country code}&appid={API key}

// "id": 5410902,
// "name": "Yorba Linda",
// "state": "CA",
// "country": "US",
// "coord": {
//     "lon": -117.81311,
//     "lat": 33.88863


//api.openweathermap.org/data/2.5/weather?id=5410902&appid=f02e792d64350e7f05c1bb65d77dd55c&units=imperial



// const d = new Date();
// console.log(d);

// const todayDayNumber = d.getDay();
// console.log(todayDayNumber);


const d = new Date();

const todayDayNumber = d.getDay();

const myweekday = new Date(7);
    myweekday[0] = "Sunday";
    myweekday[1] = "Monday";
    myweekday[2] = "Tuesday";
    myweekday[3] = "Wednesday";
    myweekday[4] = "Thursday";
    myweekday[5] = "Friday";
    myweekday[6] = "Saturday";




    
    const apiURL = "//api.openweathermap.org/data/2.5/forecast?id=5410902&appid=f02e792d64350e7f05c1bb65d77dd55c&units=imperial";





fetch (apiURL)
    .then((response) => response.json())
    .then((weatherInfo) => {
        console.log(weatherInfo);

        document.getElementById('townName').textContent = weatherInfo.city.name;

        let list = weatherInfo.list;
        
                        let forecastDayNumber = todayDayNumber;

                        // console.log(forecastDayNumber);

                        for (i=0; i < list.length; i++) {

                                        let time = list[i].dt_txt;

                                        // var time = list[i].dt_txt;
                                        if (time.includes('21:00:00')) {

                                                            forecastDayNumber += 1;
                                                            if (forecastDayNumber === 7){forecastDayNumber = 0;}
                                                            console.log("Forecast Day Number " + forecastDayNumber+" which is"+myweekday[forecastDayNumber]);

                                                            let theDayName = document.createElement("span");
                                                            theDayName.textContent = myweekday [forecastDayNumber];
                                                            // console.log(">"+weekday[forecastDayNumber]);

                                                            let theTemp = document.createElement("p");
                                                            theTemp.textContent = weatherInfo.list[i].main.temp + "\xB0";

                                                            console.log("TEMPERATURE>"+weatherInfo.list[i].main.temp);

                                                            let iconcode =weatherInfo.list[i].weather[0].icon;
                                                            let iconPath ="//openweathermap.org/img/wn/" + iconcode + ".png";
                                                            let theIcon = document.createElement("img");
                                                            theIcon.src=iconPath;

                                                            let theDay = document.createElement("div");
                                                            theDay.appendChild(theDayName);
                                                            theDay.appendChild(theTemp);
                                                            theDay.appendChild(theIcon);
                                                
                                                            document.getElementById('weatherforecast').appendChild(theDay);
                                            }

                                        }

    }); // end of "then" for arrow function








        // document.getElementById('currentTemp').innerHTML=weatherInfo.list[0].main.temp;
        
        // const iconcode = weatherInfo.list[0].weather[0].icon;
        // console.log(iconcode);
        
        // const icon_path = "//openweathermap.org/img/wn/" + iconcode + ".png";
        // console.log(icon_path);
        
        // document.getElementById('weather_icon').src = icon_path;
        
        
        











        // console.log(myweekday[3]);
        // const y = myweekday.getDay();
        // console.log(weatherInfo.city.name);





























        // document.getElementById('windSpeed').innterHTML=weatherInfo.wind.speed;

        // const iconcode = weatherInfo.weather[0].icon;
        // console.log(iconcode);

        //openweathermap.org/img/w/04n.png

        // const icon_path ="//openwathermap.org/img/w/" +  iconcode + ".png";
        // console.log(icon_path);

        // let mylist = weatherInfo.list;

        //     let forecastDayNumber = todayDayNumber;
        //     console.log(forecastDayNumber);

        //     for (i = 0; i < mylist.length; i++) {


        //         let time = mylist[i].dt_txt;

        //         // if (time.includes('21:00:00')) {console.log(Found an entry with 21:00:00 in the time. It was report "+i+" from the mylist of 40"};

        //             forecastDayNumber +=1;
        //             if(forecastDayNumber ===7) {forecastDayNumber = 0;}
        //             console.log("Forecast Day Number " +
        //             forecastDayNumber+" which is"+weekday(forecastDayNumber);

        //             let theDayName = document.createElement("span");
        //             theDayName.textContent = weekday[forecastDayNumber];

        //             let theTemp = document.createElement("p");
        //             theTemp.textContent = weatherInfo.list[i].main.temp + "\xB0";

        //             console.log("TEMPERATURE">+weatherInfo.list[i].main.temp);

        //             let iconcode = weatherInfo.list[i].weather[0].icon;
        //             let iconPath = "//openweathermap.org/img/w/" + iconcode + ".png";
        //             let theIcon = document.createElement("img");
        //             theIcon.src=iconPath;

        //             let theDay = document.createElement("div");
        //             theDay.appendChild(theDayName);
        //             theDay.appendChild(theTemp);
        //             theDay.appendChild(theIcon);

        //             document.getElementById('weatherforecast').appendChild(theDay);

        //         } // end if

        // // } // end for




























        // document.getElementById('place').innerHTML=weatherInfo.name;
        // document.getElementById('currentTemp').innerHTML=weatherInfo.main.temp;
        // document.getElementById('windSpeed').innerHTML=weatherInfo.wind.speed;

        // const iconcode = weatherInfo.weather_icon
// }); // end of .then














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