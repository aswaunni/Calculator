
let num1 = '';
let num = '';
let ans;
let op = '';
let outputString = "";
const _display = document.querySelector('#display');

const _num = document.querySelectorAll('.num');
_num.forEach( button => {
    button.addEventListener('click', () => {
        num += button.innerText;
        outputString = outputString + button.innerText;
        _display.innerText = outputString;
    })
});

let calc = () => {
    if (num1.length != 0) {

        switch(op) {
            case '+':
                ans = parseFloat(num1) + parseFloat(num);
                break;
            case '-':
                ans = parseFloat(num1) - parseFloat(num);
                break;
            case '*':
                ans = parseFloat(num1) * parseFloat(num);
                break;
            case '/':
                ans = parseFloat(num1) / parseFloat(num);
                break;
        }
    }
}

const _op = document.querySelectorAll('.op');
_op.forEach ( operator => {
    operator.addEventListener('click', (event) => {
        ans = parseFloat(num);

        calc();

        op = operator.innerText;

        num1 = `${ans}`;
        num = '';
        outputString = outputString + operator.innerText;
        _display.innerText = outputString;
    })
});

const _equal = document.querySelector('.equal');
_equal.addEventListener('click', (event) => {
    calc();
    num = `${ans}`;
    num1 = '';
    outputString = `${ans}`;
    _display.innerText = ans;
});

const _clear = document.querySelector('#clear');
_clear.addEventListener('click', (event) => {
    outputString = '';
    _display.innerText = '';
    ans = 0;
    num1 = '';
    num = '';
    op = '';
});

const _delete = document.querySelector('#delete');
_delete.addEventListener('click', (event) => {
    outputString = outputString.slice(0, -1);
    _display.innerText = outputString;
    num = num.slice(0, -1);
})
