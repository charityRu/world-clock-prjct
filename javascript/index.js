document.addEventListener("DOMContentLoaded", function() {
    
    updateCitiesTime();

    
    setInterval(updateCitiesTime, 1000);
});


function updateCitiesTime() {
    
    let losAngelesElement = document.querySelector("#Los-Angeles");
    if (losAngelesElement) {
        let losAngelesDateElement = losAngelesElement.querySelector(".date");
        let losAngelesTimeElement = losAngelesElement.querySelector(".time");
        let losAngelesTime = moment().tz("America/Los_Angeles");

        losAngelesDateElement.innerHTML = losAngelesTime.format("MMMM Do YYYY");
        losAngelesTimeElement.innerHTML = losAngelesTime.format("h:mm:ss[<small>] A[</small>]");
    }

    
    let sydneyElement = document.querySelector("#Sydney");
    if (sydneyElement) {
        let sydneyDateElement = sydneyElement.querySelector(".date");
        let sydneyTimeElement = sydneyElement.querySelector(".time");
        let sydneyTime = moment().tz("Australia/Sydney");

        sydneyDateElement.innerHTML = sydneyTime.format("MMMM Do YYYY");
        sydneyTimeElement.innerHTML = sydneyTime.format("h:mm:ss[<small>] A[</small>]");
    }
}



function updateCity(event){
    let cityTimeZone=event.target.value;
    if(cityTimeZone==="current"){
        cityTimeZone=moment.tz.guess();
    }
    let cityTime=moment().tz(cityTimeZone);
    let citiesElement=document.querySelector("#cities");
    citiesElement.innerHTML= 
    `
    <div class="city" >
       <div>
        <h2>${cityTimeZone}</h2>
        <div class="date">${cityTime.format("MMMM Do YYYY")}
        </div>
    </div>
        <div class="time">${cityTime.format("h:mm:ss")}<small>${cityTime.format("A")}</small></div>
    </div>
    <a href="/">All cities</a>`
}







let citiesSelectElement=document.querySelector("#city")
citiesSelectElement.addEventListener("change",updateCity)