const buttons = document.querySelectorAll('button');
const display = document.querySelector('.display');
const clear = document.querySelector('.clear');

function clearDisplay() {
    display.innerHTML = '';
}

function add(i) {
    return function() {
        if(buttons[i].innerHTML == '*') {
            display.innerHTML += '*';
        } else if (buttons[i].innerHTML == '+') {
            display.innerHTML += '+';
        } else if(buttons[i].innerHTML == '/') {
            display.innerHTML += '/';
        } else if(buttons[i].innerHTML == '-') {
        display.innerHTML += '-'; 
        } else {
            display.innerHTML += buttons[i].innerHTML;
            console.log('num')
        }
    } 
}

function calc() {
    return function() {
        display.innerHTML = eval(display.innerHTML);
    }
    
}

for(let i = 0; i < buttons.length; i++) {
    if(buttons[i].innerHTML == '=') {
        buttons[i].addEventListener('click', calc());
    } else if(buttons[i].innerHTML.toLowerCase() == 'c') {
        buttons[i].addEventListener('click', clearDisplay);
    } else if(buttons[i].innerHTML) {
        buttons[i].addEventListener('click', add(i))
    } 
}
