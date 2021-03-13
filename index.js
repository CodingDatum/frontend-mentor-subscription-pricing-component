let toggleButton = document.querySelector(".toggle-button")

let yearlyPrices = ["199.99", "249.99", "399.99"]
let monthlyPrices = ["19.99", "24.99", "39.99"]

annualRate = true;

function moveButton(){
    toggleButton.classList.toggle("slide")

    let prices = document.querySelectorAll(".large-number")

    if(annualRate){

        for ( let i = 0 ; i < prices.length ; i++){
            prices[i].innerText = monthlyPrices[i]
    
        }

        annualRate = false;

    }else{

        for(let i = 0; i < prices.length ; i++){
            prices[i].innerText = yearlyPrices[i]
        }

        annualRate = true;
    }


}