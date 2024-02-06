import Country from "./Country.js";
class Game{
    static score = 0;

    constructor(allCountriesShuffled){
        this.countries = allCountriesShuffled;
        this.countryIndex = 0;
        this.isOver = this.isGameOver;
        this.currentCountry = new Country(this.countries[this.countryIndex]);
    }

    addScore(){
        score += 1;
    }

    isGameOver(){
        if (this.countryIndex > allCountriesShuffled.size()){
            alert("Game Over!");
            return true;
        } return false;
    }

    nextCountry(){
        
    }

}
localStorage.setItem("highscore",`${highscore}`);
export default Game;