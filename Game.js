import Country from "./Country.js";
class Game{
    static score = 0;

    constructor(allCountriesShuffled){
        this.countries = allCountriesShuffled;
        this.countryIndex = 0;
        this.isOver = this.isGameOver;
    }
    
    addScore(){
        score += 1;
    }

    isGameOver(){
        if (this.countryIndex > allCountriesShuffled.size()){
            return true;
        } return false;
    }

}
localStorage.setItem("highscore",`${highscore}`);
export default Game;