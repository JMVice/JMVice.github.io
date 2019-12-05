/* VARIABLES */
var value_1 = "0";
var value_2 = "0";
var operator = "+";
var current_value = "value_1";

/* 0 TO 9, C AND = BUTTONS */
function button_1() {
    if (value_1 != '0') {
        
    } else {
        value_1 = '1';
    }
}

function button_2() {
    if (value_1 != '0') {
    } else {
        value_1 = '2';
    }
}
function button_3() {
    if (value_1 != '0') {
    } else {
        value_1 = '3';
    }
}
function button_4() {
    if (value_1 != '0') {
    } else {
        value_1 = '4';
    }
}
function button_5() {
    if (value_1 != '0') {
    } else {
        value_1 = '5';
    }
}
function button_6() {
    if (value_1 != '0') {
    } else {
        value_1 = '6';
    }
}
function button_7() {
    if (value_1 != '0') {
    } else {
        value_1 = '7';
    }
}
function button_8() {
    if (value_1 != '0') {
    } else {
        value_1 = '8';
    }
}
function button_9() {
    if (value_1 != '0') {
    } else {
        value_1 = '9';
    }
}

function button_0() {
    if (value_1 != '0') {
    } else {
        value_1 = '0';
    }
}

function button_C() {
    value_1 = "0";
    value_2 = "0";
    current_value = "value_1";
}


/* LOGICAL BUTTONS */
function show_value_on_alert() {
    alert(value_1);
}

function overwrite_text_box(value) {
    document.getElementById("text_bar").value = value;
}

function calculate() {
    if (current_value != "value_1") {
        switch (operator) {
            case "+":
                var result;
                result = parseInt(value_1, 10) + parseInt(value_2, 10);
                overwrite_text_box(result);
                break;
            case "-":
                // code block
                break;
            case "/":
                // code block
                break;
            case "x":
                // code block
                break;
            default:
            // code block
        }
    }
}

/* OPERANT BUTTONS */
function plus() {
    operator = "+";
    current_value = "value_2";
}

function minus() {
    operator = "-";
    current_value = "value_2";
}

function division() {
    operator = "/";
    current_value = "value_2";
}

function multiply() {
    operator = "*";
    current_value = "value_2";
}
