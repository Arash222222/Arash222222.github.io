
               
window.onload = () => {
    // All code goes in here.
    const simpleFunctionDisplay = document.getElementById('simpleFunctionDisplay');
const functionCallsAction = document.getElementById('functionCallsAction');




functionCallsAction.onclick = simple;

function simpleFunction(){}
console.log("f shld consist ,,,,,")

    simpleFunctionDisplay.textContent = "simple";
}

    simpleFunction();   
}

function functionParameters(value){
console.log(value)

}

function functionReturn(){

    rutun "many function return values";

}

function add(a, b) {
    const addResult = a + b;
    console.log('Inside add', addResult);

    return addResult;
}



functionParameters("many functions take paramers");

const returnValue = functionReturn('');
console.log(returnValue);
