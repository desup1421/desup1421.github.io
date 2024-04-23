const leftInput = document.querySelector('#left-input-temperature');
const leftTemperatureUnit = document.querySelector('#left-temperature-unit');
const rightInput = document.querySelector('#right-input-temperature');
const rightTemperatureUnit = document.querySelector('#right-temperature-unit');
const calculationProcessDisplay = document.querySelector('#calculation-process-display');
const formulaDisplay = document.querySelector('#formula-display');
const formulaExplanationDisplayOne = document.querySelector('#formula-explanation-display-one');
const formulaExplanationDisplayTwo = document.querySelector('#formula-explanation-display-two');
const where = document.querySelector('#where');
const reverseButton = document.querySelector('#reverse-button');
const resetButton = document.querySelector('#reset-button');
let result = "";
let unit = '';
let inputUnitCharacter = "";
let outputUnitCharacter = "";

resetButton.addEventListener('click', function(){
    const input = '';
    const display = rightInput;
    const inputUnit = 'celcius';
    leftInput.value = input;
    leftTemperatureUnit.value = inputUnit;
    rightTemperatureUnit.value = inputUnit;
    calculations(input, display, inputUnit, inputUnit);
});
reverseButton.addEventListener('click', function(){
    const input = parseFloat(rightInput.value);
    const display = rightInput;
    const inputUnit = rightTemperatureUnit.value;
    const outputUnit = leftTemperatureUnit.value;
    leftInput.value = rightInput.value;
    leftTemperatureUnit.value = inputUnit;
    rightTemperatureUnit.value = outputUnit;
    calculations(input, display, inputUnit, outputUnit);
});
leftInput.addEventListener('input', function(){
    const input = parseFloat(leftInput.value);
    const display= rightInput;
    const inputUnit = leftTemperatureUnit.value;
    const outputUnit = rightTemperatureUnit.value;
    calculations(input, display, inputUnit, outputUnit);
});
rightInput.addEventListener('input', function(){
    const input = parseFloat(rightInput.value);
    const display= leftInput;
    const inputUnit = rightTemperatureUnit.value;
    const outputUnit = leftTemperatureUnit.value;
    calculations(input, display, inputUnit, outputUnit);
});
leftTemperatureUnit.addEventListener('input', function(){
    const input = parseFloat(leftInput.value);
    const display= rightInput;
    const inputUnit = leftTemperatureUnit.value;
    const outputUnit = rightTemperatureUnit.value;
    calculations(input, display, inputUnit, outputUnit);
});
rightTemperatureUnit.addEventListener('input', function(){
    const input = parseFloat(leftInput.value);
    const display= rightInput;
    const inputUnit = leftTemperatureUnit.value;
    const outputUnit = rightTemperatureUnit.value;
    calculations(input, display, inputUnit, outputUnit);
});


function calculations(input, display, inputUnit, outputUnit){    
    inputUnitCharacter = units(inputUnit);
    outputUnitCharacter = units(outputUnit);

    if(isNaN(input)){
        input = 0;
    }

    if (inputUnit === outputUnit) {
        result = input;
        display.value = result;
        unit = units(inputUnit);
        calculationProcessDisplay.innerHTML = `${input}${unit} = ${input}${unit}`;
        formulaDisplay.innerHTML = "";
        where.innerHTML = '';
        formulaExplanationDisplayOne.innerHTML = '';
        formulaExplanationDisplayTwo.innerHTML = '';
        return;
    } else if(inputUnit === 'celcius' && outputUnit === 'kelvin') {
        result = input+ 273.15;
        calculationProcessDisplay.innerHTML = `${input}${inputUnitCharacter} + 273.15 = ${result}${outputUnitCharacter}`;
        formulaDisplay.innerHTML = `S<sub>(${outputUnitCharacter})</sub> = S<sub>(${inputUnitCharacter})</sub> + 273.15`;
    } else if(inputUnit === 'celcius' && outputUnit === 'fahrenheit') {
        result = input * 9 / 5 + 32;
        calculationProcessDisplay.innerHTML = `${input}${inputUnitCharacter} * 9 / 5 + 32 = ${result}${outputUnitCharacter}`;
        formulaDisplay.innerHTML = `S<sub>(${outputUnitCharacter})</sub> = S<sub>(${inputUnitCharacter})</sub> * 9 / 5 + 32`;
    } else if(inputUnit === 'celcius' && outputUnit === 'reaumur') {
        result = input * 4 / 5;
        calculationProcessDisplay.innerHTML = `${input}${inputUnitCharacter} * 4 / 5 = ${result}${outputUnitCharacter}`;
        formulaDisplay.innerHTML = `S<sub>(${outputUnitCharacter})</sub> = S<sub>(${inputUnitCharacter})</sub> * 4 / 5`;
    } else if(inputUnit === 'kelvin' && outputUnit === 'celcius') {
        result = input - 273.15;
        calculationProcessDisplay.innerHTML = `${input}${inputUnitCharacter} - 273.15 = ${result}${outputUnitCharacter}`;
        formulaDisplay.innerHTML = `S<sub>(${outputUnitCharacter})</sub> = S<sub>(${inputUnitCharacter})</sub> - 273.15`;
    } else if(inputUnit === 'kelvin' && outputUnit === 'fahrenheit') {
        result = (input - 273.15) * 9 / 5 + 32
        calculationProcessDisplay.innerHTML = `(${input}${inputUnitCharacter} - 273.15) * 9 / 5 + 32 = ${result}${outputUnitCharacter}`;
        formulaDisplay.innerHTML = `S<sub>(${outputUnitCharacter})</sub> = (S<sub>(${inputUnitCharacter})</sub> - 273.15) * 9 / 5 + 32`;
    } else if(inputUnit === 'kelvin' && outputUnit === 'reaumur') {
        result = (input - 273.15) * 4 / 5;
        calculationProcessDisplay.innerHTML = `(${input}${inputUnitCharacter} - 273.15) * 4 / 5 = ${result}${outputUnitCharacter}`;
        formulaDisplay.innerHTML = `S<sub>(${outputUnitCharacter})</sub> = (S<sub>(${inputUnitCharacter})</sub> - 273.15) * 4 / 5`;
    } else if(inputUnit === 'fahrenheit' && outputUnit === 'celcius') {
        result = (input - 32) * 5 / 9;
        calculationProcessDisplay.innerHTML = `(${input}${inputUnitCharacter} - 32) * 5 / 9 = ${result}${outputUnitCharacter}`;
        formulaDisplay.innerHTML = `S<sub>(${outputUnitCharacter})</sub> = (S<sub>(${inputUnitCharacter})</sub> - 32) * 5 / 9`;
    } else if(inputUnit === 'fahrenheit' && outputUnit === 'kelvin') {
        result = (input - 32) * 5 / 9 + 273.15;
        calculationProcessDisplay.innerHTML = `(${input}${inputUnitCharacter} - 32) * 5 / 9 + 273.15 = ${result}${outputUnitCharacter}`;
        formulaDisplay.innerHTML = `S<sub>(${outputUnitCharacter})</sub> = (S<sub>(${inputUnitCharacter})</sub> - 32) * 5 / 9 + 273.15`;
    } else if(inputUnit === 'fahrenheit' && outputUnit === 'reaumur') {
        result = (input - 32) * 4 / 9;
        calculationProcessDisplay.innerHTML = `(${input}${inputUnitCharacter} - 32) * 4 / 9 = ${result}${outputUnitCharacter}`;
        formulaDisplay.innerHTML = `S<sub>(${outputUnitCharacter})</sub> = (S<sub>(${inputUnitCharacter})</sub> - 32) * 4 / 9`;
    } else if(inputUnit === 'reaumur' && outputUnit === 'celcius') {
        result = input * 5 / 4;
        calculationProcessDisplay.innerHTML = `${input}${inputUnitCharacter} * 5 / 4 = ${result}${outputUnitCharacter}`;
        formulaDisplay.innerHTML = `S<sub>(${outputUnitCharacter})</sub> = S<sub>(${inputUnitCharacter})</sub> * 5 / 4`;
    } else if(inputUnit === 'reaumur' && outputUnit === 'kelvin') {
        result = input * 5 / 4 + 273.15;
        calculationProcessDisplay.innerHTML = `${input}${inputUnitCharacter} * 5 / 4 + 273.15 = ${result}${outputUnitCharacter}`;
        formulaDisplay.innerHTML = `S<sub>(${outputUnitCharacter})</sub> = S<sub>(${inputUnitCharacter})</sub> * 5 / 4 + 273.15`;
    } else if(inputUnit === 'reaumur' && outputUnit === 'fahrenheit') {
        result = input * 9 / 4 + 32;
        calculationProcessDisplay.innerHTML = `${input}${inputUnitCharacter} * 9 / 4 + 32 = ${result}${outputUnitCharacter}`;
        formulaDisplay.innerHTML = `S<sub>(${outputUnitCharacter})</sub> = S<sub>(${inputUnitCharacter})</sub> * 9 / 4 + 32`;
    }
    display.value = result;
    formulas(inputUnit, outputUnit, inputUnitCharacter, outputUnitCharacter);
}
function units(inputUnit) {
    if(inputUnit === 'celcius'){
        unit = '&deg;C';
    } else if(inputUnit === 'kelvin'){
        unit = 'K';
    } else if(inputUnit === 'fahrenheit'){
        unit = '&deg;F';
    } else if(inputUnit === 'reaumur'){
        unit = '&deg;R';
    }
    return unit;
}
function formulas(inputUnit, outputUnit, inputUnitCharacter, outputUnitCharacter) {
    where.innerHTML = "Di mana:"
    formulaExplanationDisplayOne.innerHTML = `S<sub>(${outputUnitCharacter})</sub> = Suhu dalam ${capitalizeFirstLetter(outputUnit)}`;
    formulaExplanationDisplayTwo.innerHTML = `S<sub>(${inputUnitCharacter})</sub> = Suhu dalam ${capitalizeFirstLetter(inputUnit)}`;
}
function capitalizeFirstLetter(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
}