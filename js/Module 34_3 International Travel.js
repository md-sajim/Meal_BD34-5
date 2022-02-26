const lodeCountryData = () => {
  fetch("https://restcountries.com/v3.1/all")
    .then((res) => res.json())
    .then((data) => displayCountry(data));
};
lodeCountryData();
const displayCountry = (countryData) => {
  const divcontainer = document.getElementById("countryCountainer");
  countryData.forEach((element) => {
    // console.log(element);
    const div = document.createElement("div");
    div.classList.add("divStyle");
    div.innerHTML = `<h2>Country:${element.name.official}</h2> <h5>Population:${element.population}</h5> <h5>Region:${element.region} <h6><a target="_blank" href="${element.maps.googleMaps}">Country Maps</a></h6> <button onclick="countryDetail('${element.name.official}')">Country Details</button>`;
    // console.log(countryInfo);
    // const divCreat = document.createElement("div");
    divcontainer.appendChild(div);
  });
};
const countryDetail = (countryinfo) => {
  //   console.log(countryinfo);
  const url = `https://restcountries.com/v3.1/name/${countryinfo}`;
  //   console.log(url);
  fetch(url)
    .then((res) => res.json())
    .then((countryDetisInfo) => displayCountryinfo(countryDetisInfo[0]));
};
const displayCountryinfo = (info) => {
  const datileContainer = document.getElementById("detailsContainer");
  datileContainer.innerHTML = `<img src='${info.flags.png}'/>`;
  // console.log(info.flags.png);
};
