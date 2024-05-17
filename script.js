search = async () => {
  let countryName = country.value;
  if (countryName) {
    const response = await fetch(
      `https://restcountries.com/v3.1/name/${countryName}?fullText=true`
    );
    response.json().then((data) => {
      let common_name = data[0].name.common;
      let official_name = data[0].name.official;
      let currencies = data[0].currencies;
      //   let currency_key = "";
      //   for (let key in currencies) {
      //     currency_key = key;
      //   }
      //   let currency_name = data[0].currencies[currency_key].name;
      //   let currency_symbol = data[0].currencies[currency_key].symbol;
      for (let currency in data[0].currencies) {
        var currency_name = data[0].currencies[currency].name;
        var currency_symbol = data[0].currencies[currency].symbol;
      }
      console.log(currency_name, currency_symbol);
      let country_capital = data[0].capital[0];
      let languageObj = data[0].languages;
      let language = "";
      for (let key in languageObj) {
        language += `${languageObj[key]} `;
      }
      //another method
      //----------------------------
      // national_language=[]
      //for(let lang in data[0].langauges){
      //     national_language.push(data[0].languages[lang])
      //   }
      let bordersObj = data[0].borders;
      let border = "";
      for (let key in bordersObj) {
        border += `${bordersObj[key]} `;
      }
      let area = data[0].area;
      let map = data[0].maps.googleMaps;
      let population = data[0].population;
      let timezones = data[0].timezones;
      let continent = data[0].continents;
      let flags = data[0].flags.png;
      console.log(map);
      searchResult.innerHTML = `<div class="card mb-3 country-card shadow">
      <div
        class="d-flex justify-content-center align-items-center mt-4"
      >
        <img
          src="${flags}"
          class="card-img-top w-75"
          alt="..."
          height="300px"
        />
      </div>
      <div class="card-body">
        <ul class="list-group list-group-flush" id="countryDetails">
          <li
            class="list-group-item text-center bg-transparent "
          >
            ${official_name}
          </li>
          <li
            class="list-group-item text-center bg-transparent "
          >
          Common name: ${common_name}
          </li>
          <li
            class="list-group-item text-center bg-transparent "
          >
          Capital: ${country_capital}          </li>
          <li
            class="list-group-item text-center bg-transparent "
          >
          Borders: ${border}          </li>
          <li
            class="list-group-item text-center bg-transparent "
          >
          Population: ${population}          </li> <li
          class="list-group-item text-center bg-transparent "
        >
        Timezone: ${timezones}          </li> <li
        class="list-group-item text-center bg-transparent "
      >
      Area: ${area}          </li> <li
      class="list-group-item text-center bg-transparent "
    >
    Continent: ${continent}          </li> <li
    class="list-group-item text-center bg-transparent "
  >
  National language: ${language}          </li> <li
  class="list-group-item text-center bg-transparent "
>
Currency: ${currency_name} ${currency_symbol}           </li>
<li
  class="list-group-item text-center bg-transparent "
>
Map: <a href="${map}" target="_blank">View on Google Maps</a>
</li>
        </ul>
      </div>
    </div>`;
    });
  } else {
    alert("Enter a valid input");
  }
};

//common name . officila name,curreniceis(name , symbol),capital,languages,borders,area,maps(googlemaps),population,timezones,continents,flags(png)
