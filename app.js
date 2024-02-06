"use strict";
import Country from "./Country.js";
import Game from "./Game.js";
import { shuffle } from "lodash";

async function getCountryData() {
    try {
        const countryData = await fetch("https://restcountries.com/v3.1/all");
        const countries = await countryData.json();
        console.log(countries);
        const countriesShuffled = shuffle(countries);
        console.log(countriesShuffled);
        countriesShuffled.forEach(country => {
            const newCountry = new Country (country.translations, country.flag);
        })
    } catch (error) {
        console.log("Couldn't reach API or there's an error in the code");
    }
}

document.querySelector("button").addEventListener("click", function (e) {
    e.preventDefault();
  });
getCountryData();