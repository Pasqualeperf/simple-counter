const numberCounter = document.querySelector('#theNumber');
const addButton = document.querySelector('#addButton');
const removeButton = document.querySelector('#removeButton');


addButton.addEventListener('click', () => {
    let value = Number(numberCounter.innerText);
    value++;
    numberCounter.innerText = value;
})

removeButton.addEventListener('click', () => {
    if (Number(numberCounter.innerText) > 0) {
        let value = Number(numberCounter.innerText);
        value--;
        numberCounter.innerText = value;
    }
})
