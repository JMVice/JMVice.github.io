function run() {
    let number = document.getElementById("Number").value;
    if (number == parseInt(number)) {
        if (number >= 1 && number <= 9) {
            /* alert(number); */
            start_math_t(number);
        } else {
            alert("Just numbers between 1 and 9 allowed.");
        }
    } else {
        alert("No empty spaces or letters allowed.");
    }
}

function start_math_t(Number) {
    let number_changing = Number;
    let html_text = "<p>Your number multiplied: " + number_changing + " x 2 = " + (number_changing = (number_changing * 2)) + "</p><p>Your summed number: " + number_changing + "  + 6 = " + (number_changing = (number_changing + 6)) + "</p>";
    html_text += "<p>Your divided number: " + number_changing + " / 2 = " + (number_changing = (number_changing / 2)) + "</p>";
    html_text += "<p>Your number subtracted by its initial value: " + number_changing + " - " + Number + " = " + (number_changing = (number_changing - Number)) + "</p>";
    html_text += "</br><p>The result is = " + number_changing + "</p>";
    document.getElementById("content").innerHTML = html_text;
}