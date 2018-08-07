// declare global variables
var filledOrders = 0;
var failedOrders = 0;
var blueValue, greenValue, purpleValue, yellowValue, targetValue, currentValue;

function setGame() {
    blueValue = gemValue();
    greenValue = gemValue();
    purpleValue = gemValue();
    yellowValue = gemValue();
    targetValue = Math.floor((Math.random() * 102) + 19);
    $("#targetValue").text(targetValue);
    console.log("targetValue = " + targetValue);
    currentValue = 0;
    $("#currentValue").text(currentValue);
}

setGame();

console.log("blueValue" + blueValue);
console.log("greenValue" + greenValue);
console.log("purpleValue" + purpleValue);
console.log("yellowValue" + yellowValue);

function gemValue() {
    return Math.floor((Math.random() * 12) + 1);
}

function addBlue() {
    currentValue = currentValue + blueValue;
    $("#currentValue").text(currentValue);
    console.log("currentValue = " + currentValue);
    checkForWin();
    checkForLoss();
}

function addYellow() {
    currentValue = currentValue + yellowValue;
    $("#currentValue").text(currentValue);
    console.log("currentValue = " + currentValue);
    checkForWin();
    checkForLoss();
}

function addGreen() {
    currentValue = currentValue + greenValue;
    $("#currentValue").text(currentValue);
    console.log("currentValue = " + currentValue);
    checkForWin();
    checkForLoss();
}

function addPurple() {
    currentValue = currentValue + purpleValue;
    $("#currentValue").text(currentValue);
    console.log("currentValue = " + currentValue);
    checkForWin();
    checkForLoss();
}

function checkForWin() {
    if (currentValue === targetValue) {
        filledOrders++;
        $("#filledOrders").text(filledOrders);
        setGame();
    }
}

function checkForLoss() {
    if (currentValue > parseInt(targetValue)) {
        failedOrders++;
        $("#failedOrders").text(failedOrders);
        setGame();
    }
}
