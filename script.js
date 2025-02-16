const input = document.querySelector('input');
const button = document.querySelector('button');

button.addEventListener("click", function(){
    const inputValue = input.value;
    for(let i = 1 ; i <= 10; i++){
        document.write(inputValue + ' X ' + i + ' = ' + inputValue*i + '<br>');
    }
    
});