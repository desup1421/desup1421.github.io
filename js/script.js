const leftInput = document.querySelector('#left-input-temperature');
const leftTemperatureUnit = document.querySelector('#left-temperature-unit');
const rightInput = document.querySelector('#right-input-temperature');
const rightTemperatureUnit = document.querySelector('#right-temperature-unit');
let result = "";


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
    if (inputUnit === outputUnit) {
        result = input;
        display.value = result;
    } else if(inputUnit === 'celcius' && outputUnit === 'kelvin') {
        result = input+ 273.15;
        display.value = result;
    } else if(inputUnit === 'celcius' && outputUnit === 'fahrenheit') {
        result = input * 9 / 5 + 32;
        display.value = result;
    } else if(inputUnit === 'celcius' && outputUnit === 'reaumur') {
        result = input * 4 / 5;
        display.value = result;
    } else if(inputUnit === 'kelvin' && outputUnit === 'celcius') {
        result = input - 273.15;
        display.value = result;
    } else if(inputUnit === 'kelvin' && outputUnit === 'fahrenheit') {
        result = (input - 273.15) * 9 / 5 + 32
        display.value = result;
    } else if(inputUnit === 'kelvin' && outputUnit === 'reaumur') {
        result = (input - 273.15) * 4 / 5;
        display.value = result;
    } else if(inputUnit === 'fahrenheit' && outputUnit === 'celcius') {
        result = (input - 32) * 5 / 9;
        display.value = result;
    } else if(inputUnit === 'fahrenheit' && outputUnit === 'kelvin') {
        result = (input - 32) * 5 / 9 + 273.15;
        display.value = result;
    } else if(inputUnit === 'fahrenheit' && outputUnit === 'reaumur') {
        result = (input - 32) * 4 / 9;
        display.value = result;
    } else if(inputUnit === 'reaumur' && outputUnit === 'celcius') {
        result = input * 5 / 4;
        display.value = result;
    } else if(inputUnit === 'reaumur' && outputUnit === 'kelvin') {
        result = input * 5 / 4 + 273.15;
        display.value = result;
    } else if(inputUnit === 'reaumur' && outputUnit === 'fahrenheit') {
        result = input * 9 / 4 + 32;
        display.value = result;
    }
}