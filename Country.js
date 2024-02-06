import { countries } from "./data";

class Country{
    constructor(answers, flag){
        this.flag = flag;
        this.answers = this.extractAnswers(answers);
    }

    extractAnswers(answers){
        const answerSet = new Set();
        console.log(this.flag);
        console.log(answers);
        answers.forEach((element) => {
        })
    }

    showFlag(){
        document.querySelector("#flag").textContent = this.flag;
    }

    checkAnswer(){
        if (this.answers.has(userInput)){

        }
    }

}



export default Country;