// Задание 5
// Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input), подставляет его текущее значение 
// в span#name - output.Если инпут пустой, в спане должна отображаться строка 'незнакомец'.

// <input type="text" placeholder="Ваше имя?" id="name-input" />
// <h1>Привет, <span id="name-output">незнакомец</span>!</h1>

const ref = {
input: document.querySelector('#name-input'),
output: document.querySelector('#name-output'),
}

ref.input.addEventListener('input', onInputChange);

function onInputChange(event){
    if( ref.output.textContent = event.currentTarget.value) {
       
        console.log(event.currentTarget.value)
    }
    else {
        ref.output.textContent = `Незнакомец`; 
    };

    
}
console.log(ref.input.value);