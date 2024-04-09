function appendToDisplay(value) {
    if (document.getElementById('display').innerText === 'Press a number to get started' || document.getElementById('display').innerText === 'Cannot divide by zero') {
        document.getElementById('display').innerText = '';
        document.getElementById('display').style.fontSize = "24px";
        document.getElementById('display').style.color = "white";
    }
    document.getElementById('display').innerText += value;
}

function clearDisplay() {
    document.getElementById('display').innerText = '';
    document.getElementById('display').style.fontSize = "24px";
    document.getElementById('display').style.color = "white";
}

function backspace() {
    var displayValue = document.getElementById('display').innerText;
    document.getElementById('display').innerText = displayValue.slice(0, -1);
}

function calculateResult() {
    let expression = document.getElementById('display').innerText;
    try {
        let result = eval(expression);
        if (result === Infinity || isNaN(result)) {
            throw "But the Nihility envelops you and I... and everyone. And because of that, it's pointless.";
        }
        document.getElementById('display').innerText = result;
    } catch (error) {
        document.getElementById('display').innerText = error;
        document.getElementById('display').style.fontSize = "14px";
        document.getElementById('display').style.color = "red";
        setTimeout(function(){
            clearDisplay();
        }, 3000);
    }
}
