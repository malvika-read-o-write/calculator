const display = document.querySelector('#display');
const buttons = document.querySelectorAll('button');

buttons.forEach(item => {
    item.onclick = () =>{
        if(item.id == 'clear'){
            display.innerText = '';}
            else if(item.id == 'backspace'){
                let stringg = display.innerText.toString();
                display.innerText = stringg.substr(0,stringg.length -1);}
                else if(display.innerText!= '' &&  item.id =='equal'){
                    display.innerText = eval(display.innerText);
                }
                else if (display.innerText == '' && item.id =='equal'){
                    display.innerText = 'Empty!';
                    setTimeout(()=> (display.innerText = ''),2000);
                }
                else{
                    display.innerText += item.id;
                }
    }
});

const toggleThemeBtn = document.querySelector('.toggle-theme');
const calc = document.querySelector('.calc');
const toggleBtn = document.querySelector('.toggler-icon');

let isDark = true;
toggleThemeBtn.onclick = () => {
    calc.classList.toggle('dark');
    toggleThemeBtn.classList.toggle('active');
    isDark = !isDark;
}