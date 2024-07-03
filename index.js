const numInput = document.querySelector("input[name='number']");
const inputForm = document.querySelector("form");
const numberBank = document.querySelector("#numberBank output");
const sortOne = document.querySelector("#sortOne");
const sortAll = document.querySelector("#sortAll");
const evensBank = document.querySelector("#evens output");
const oddsBank = document.querySelector("#odds output");

const numberStore = [];
const evens = [];
const odds = [];

inputForm.addEventListener("submit", function (e) {
    e.preventDefault();
    if (!isNaN(parseInt(numInput.value))) {
        numberStore.push(numInput.value);
        console.log(numberStore);
        numberBank.innerText = "";
        numberStore.forEach(
            (number) => (numberBank.innerText += `${number} \u00A0`)
        );
    }
});

sortOne.addEventListener("click", function () {
    if (!numberStore.length) return;
    const firstNum = numberStore.shift();
    if (firstNum % 2 === 0) {
        evens.push(firstNum);
        evensBank.innerText = "";
        evens.forEach((evenNum) => (evensBank.innerText += `${evenNum} \u00A0`));
    } else {
        odds.push(firstNum);
        oddsBank.innerText = "";
        odds.forEach((oddNum) => (oddsBank.innerText += `${oddNum} \u00A0`));
    }
    numberBank.innerText = "";
    numberStore.forEach(
        (number) => (numberBank.innerText += `${number} \u00A0`)
    );
    });

    sortAll.addEventListener("click", function (){
        while (numberStore.length) {
            const numToCheck = numberStore.shift();
            if (numToCheck % 2 === 0) {
                evensBank.innerText += `${numToCheck} \u00A0`;
            } else {
                oddsBank.innerText += `${numToCheck} \u00A0`;
            }
        }
        numberBank.innerText = "";
    });
