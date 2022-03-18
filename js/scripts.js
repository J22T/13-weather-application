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