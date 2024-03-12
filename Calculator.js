let input = document.querySelector('.display');
let buttons = document.querySelectorAll('.button'); // Update to select elements with class 'button'

let string = "";
let arr = Array.from(buttons);

arr.forEach(button => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML === '=') {
            try {
                string = eval(string);
                if (isNaN(string) || !isFinite(string)) {
                    input.value = "Error";
                } else {
                    input.value = string;
                }
            } catch (error) {
                input.value = "Error";
            }
            string = ""; // Clear the string after evaluation
        } else if (e.target.innerHTML === 'AC') {
            string = "";
            input.value = string;
        } else if (e.target.innerHTML === 'DEL') {
            string = string.substring(0, string.length - 1);
            input.value = string;
        } else {
            string += e.target.innerHTML;
            input.value = string;
        }
    });
});