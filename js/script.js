const leftInput = document.querySelector('#left-input-temperature');
const leftTemperatureUnit = document.querySelector('#left-temperature-unit');
const rightInput = document.querySelector('#right-input-temperature');
const rightTemperatureUnit = document.querySelector('#right-temperature-unit');
const calculationProcessDisplay = document.querySelector('#calculation-process-display');
const tittleText = document.querySelector('#title-text');
const formulaDisplay = document.querySelector('#formula-display');
const reverseButton = document.querySelector('#reverse-button');
let result = "";
let unit = '';
let inputUnitCharacter = "";
let outputUnitCharacter = "";

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
    if(isNaN(input)){
        input = 0;
    }
    calculationProcessDisplay.innerHTML = `${input}${unit} = ${input}${unit}`;

    if (inputUnit === outputUnit) {
        result = input;
        display.value = result;
        unit = units(inputUnit);
        calculationProcessDisplay.innerHTML = `${input}${unit} = ${input}${unit}`;
        tittleText.innerHTML = ":";
        formulaDisplay.innerHTML = "";
    } else if(inputUnit === 'celcius' && outputUnit === 'kelvin') {
        result = input+ 273.15;
        display.value = result;
        inputUnitCharacter = units(inputUnit);
        outputUnitCharacter = units(outputUnit);
        calculationProcessDisplay.innerHTML = `${input}${inputUnitCharacter} + 273.15 = ${result}${outputUnitCharacter}`;
        // tittleText.innerHTML = " dari " + inputUnit + "(" + inputUnitCharacter + ") ke " + outputUnit + "(" + outputUnitCharacter + ") adalah:";
        formulaDisplay.innerHTML = `${outputUnitCharacter} = ${inputUnitCharacter} + 273.15`;
    } else if(inputUnit === 'celcius' && outputUnit === 'fahrenheit') {
        result = input * 9 / 5 + 32;
        display.value = result;
        inputUnitCharacter = units(inputUnit);
        outputUnitCharacter = units(outputUnit);
        calculationProcessDisplay.innerHTML = `${input}${inputUnitCharacter} * 9 / 5 + 32 = ${result}${outputUnitCharacter}`;
        // tittleText.innerHTML = " dari " + inputUnit + "(" + inputUnitCharacter + ") ke " + outputUnit + "(" + outputUnitCharacter + ") adalah:";
        formulaDisplay.innerHTML = `${outputUnitCharacter} = ${inputUnitCharacter} * 9 / 5 + 32`;
    } else if(inputUnit === 'celcius' && outputUnit === 'reaumur') {
        result = input * 4 / 5;
        display.value = result;
        inputUnitCharacter = units(inputUnit);
        outputUnitCharacter = units(outputUnit);
        calculationProcessDisplay.innerHTML = `${input}${inputUnitCharacter} * 4 / 5 = ${result}${outputUnitCharacter}`;
        // tittleText.innerHTML = " dari " + inputUnit + "(" + inputUnitCharacter + ") ke " + outputUnit + "(" + outputUnitCharacter + ") adalah:";
        formulaDisplay.innerHTML = `${outputUnitCharacter} = ${inputUnitCharacter} * 4 / 5`;
    } else if(inputUnit === 'kelvin' && outputUnit === 'celcius') {
        result = input - 273.15;
        display.value = result;
        inputUnitCharacter = units(inputUnit);
        outputUnitCharacter = units(outputUnit);
        calculationProcessDisplay.innerHTML = `${input}${inputUnitCharacter} - 273.15 = ${result}${outputUnitCharacter}`;
        // tittleText.innerHTML = " dari " + inputUnit + "(" + inputUnitCharacter + ") ke " + outputUnit + "(" + outputUnitCharacter + ") adalah:";
        formulaDisplay.innerHTML = `${outputUnitCharacter} = ${inputUnitCharacter} - 273.15`;
    } else if(inputUnit === 'kelvin' && outputUnit === 'fahrenheit') {
        result = (input - 273.15) * 9 / 5 + 32
        display.value = result;
        inputUnitCharacter = units(inputUnit);
        outputUnitCharacter = units(outputUnit);
        calculationProcessDisplay.innerHTML = `(${input}${inputUnitCharacter} - 273.15) * 9 / 5 + 32 = ${result}${outputUnitCharacter}`;
        // tittleText.innerHTML = " dari " + inputUnit + "(" + inputUnitCharacter + ") ke " + outputUnit + "(" + outputUnitCharacter + ") adalah:";
        formulaDisplay.innerHTML = `${outputUnitCharacter} = (${inputUnitCharacter} - 273.15) * 9 / 5 + 32`;
    } else if(inputUnit === 'kelvin' && outputUnit === 'reaumur') {
        result = (input - 273.15) * 4 / 5;
        display.value = result;
        inputUnitCharacter = units(inputUnit);
        outputUnitCharacter = units(outputUnit);
        calculationProcessDisplay.innerHTML = `(${input}${inputUnitCharacter} - 273.15) * 4 / 5 = ${result}${outputUnitCharacter}`;
        // tittleText.innerHTML = " dari " + inputUnit + "(" + inputUnitCharacter + ") ke " + outputUnit + "(" + outputUnitCharacter + ") adalah:";
        formulaDisplay.innerHTML = `${outputUnitCharacter} = (${inputUnitCharacter} - 273.15) * 4 / 5`;
    } else if(inputUnit === 'fahrenheit' && outputUnit === 'celcius') {
        result = (input - 32) * 5 / 9;
        display.value = result;
        inputUnitCharacter = units(inputUnit);
        outputUnitCharacter = units(outputUnit);
        calculationProcessDisplay.innerHTML = `(${input}${inputUnitCharacter} - 32) * 5 / 9 = ${result}${outputUnitCharacter}`;
        // tittleText.innerHTML = " dari " + inputUnit + "(" + inputUnitCharacter + ") ke " + outputUnit + "(" + outputUnitCharacter + ") adalah:";
        formulaDisplay.innerHTML = `${outputUnitCharacter} = (${inputUnitCharacter} - 32) * 5 / 9`;
    } else if(inputUnit === 'fahrenheit' && outputUnit === 'kelvin') {
        result = (input - 32) * 5 / 9 + 273.15;
        display.value = result;
        inputUnitCharacter = units(inputUnit);
        outputUnitCharacter = units(outputUnit);
        calculationProcessDisplay.innerHTML = `(${input}${inputUnitCharacter} - 32) * 5 / 9 + 273.15 = ${result}${outputUnitCharacter}`;
        // tittleText.innerHTML = " dari " + inputUnit + "(" + inputUnitCharacter + ") ke " + outputUnit + "(" + outputUnitCharacter + ") adalah:";
        formulaDisplay.innerHTML = `${outputUnitCharacter} = (${inputUnitCharacter} - 32) * 5 / 9 + 273.15`;
    } else if(inputUnit === 'fahrenheit' && outputUnit === 'reaumur') {
        result = (input - 32) * 4 / 9;
        display.value = result;
        inputUnitCharacter = units(inputUnit);
        outputUnitCharacter = units(outputUnit);
        calculationProcessDisplay.innerHTML = `(${input}${inputUnitCharacter} - 32) * 4 / 9 = ${result}${outputUnitCharacter}`;
        // tittleText.innerHTML = " dari " + inputUnit + "(" + inputUnitCharacter + ") ke " + outputUnit + "(" + outputUnitCharacter + ") adalah:";
        formulaDisplay.innerHTML = `${outputUnitCharacter} = (${inputUnitCharacter} - 32) * 4 / 9`;
    } else if(inputUnit === 'reaumur' && outputUnit === 'celcius') {
        result = input * 5 / 4;
        display.value = result;
        inputUnitCharacter = units(inputUnit);
        outputUnitCharacter = units(outputUnit);
        calculationProcessDisplay.innerHTML = `${input}${inputUnitCharacter} * 5 / 4 = ${result}${outputUnitCharacter}`;
        // tittleText.innerHTML = " dari " + inputUnit + "(" + inputUnitCharacter + ") ke " + outputUnit + "(" + outputUnitCharacter + ") adalah:";
        formulaDisplay.innerHTML = `${outputUnitCharacter} = ${inputUnitCharacter} * 5 / 4`;
    } else if(inputUnit === 'reaumur' && outputUnit === 'kelvin') {
        result = input * 5 / 4 + 273.15;
        display.value = result;
        inputUnitCharacter = units(inputUnit);
        outputUnitCharacter = units(outputUnit);
        calculationProcessDisplay.innerHTML = `${input}${inputUnitCharacter} * 5 / 4 + 273.15 = ${result}${outputUnitCharacter}`;
        // tittleText.innerHTML = " dari " + inputUnit + "(" + inputUnitCharacter + ") ke " + outputUnit + "(" + outputUnitCharacter + ") adalah:";
        formulaDisplay.innerHTML = `${outputUnitCharacter} = ${inputUnitCharacter} * 5 / 4 + 273.15`;
    } else if(inputUnit === 'reaumur' && outputUnit === 'fahrenheit') {
        result = input * 9 / 4 + 32;
        display.value = result;
        inputUnitCharacter = units(inputUnit);
        outputUnitCharacter = units(outputUnit);
        calculationProcessDisplay.innerHTML = `${input}${inputUnitCharacter} * 9 / 4 + 32 = ${result}${outputUnitCharacter}`;
        // tittleText.innerHTML = " dari " + inputUnit + "(" + inputUnitCharacter + ") ke " + outputUnit + "(" + outputUnitCharacter + ") adalah:";
        formulaDisplay.innerHTML = `${outputUnitCharacter} = ${inputUnitCharacter} * 9 / 4 + 32`;
    }
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