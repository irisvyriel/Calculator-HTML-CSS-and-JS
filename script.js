function clearDisplay() {
    document.getElementById("result").value = "";
}

function deleteLast() {
    var current = document.getElementById("result").value;
    document.getElementById("result").value = current.slice(0, -1);
}

function appendCharacter(character) {
    document.getElementById("result").value += character;
}

function calculateResult() {
    var result = document.getElementById("result").value;
    try {
        document.getElementById("result").value = eval(result);
    } catch (e) {
        document.getElementById("result").value = "Error";
    }
}
