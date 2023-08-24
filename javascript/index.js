function updateTime() {
  let amsterdamElement = document.querySelector("#amsterdam");
  let amsterdamDateElement = amsterdamElement.querySelector(".date");
  let amsterdamTimeElement = amsterdamElement.querySelector(".time");
  let amsterdamTime = moment().tz("Europe/Amsterdam");
  amsterdamDateElement.innerHTML = amsterdamTime.format("dddd, MMMM Do, YYYY");
  amsterdamTimeElement.innerHTML = amsterdamTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );

  let buenosAiresElement = document.querySelector("#buenos-aires");
  let buenosAiresDateElement = buenosAiresElement.querySelector(".date");
  let buenosAiresTimeElement = buenosAiresElement.querySelector(".time");
  let buenosAiresTime = moment().tz("America/Buenos_Aires");
  buenosAiresDateElement.innerHTML = buenosAiresTime.format(
    "dddd, MMMM Do, YYYY"
  );
  buenosAiresTimeElement.innerHTML = buenosAiresTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let continent = cityTimeZone.split("/")[0];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
  <div class="city">
          <div>
            <h2>${cityName}, ${continent}</h2>
            <div class="date">${cityTime.format("dddd, MMMM D, YYYY")}</div>
          </div>
          <div class="time">${cityTime.format(
            "h:mm:ss"
          )} <small>${cityTime.format("A")}</small></div>
        </div>
        <a href="index.html">All cities</a>
  `;
}

updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
