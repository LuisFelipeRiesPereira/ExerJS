let nums = [];
let $result = document.querySelector("#result");

function adicionar(){
    let $input = document.querySelector("#numero");


    if($input.value == ''){
        $result.innerHTML = "invalido"
    }
    else{
        nums.push(parseFloat($input.value));
        $result.innerHTML = "o número digitado foi: " + $input.value;
        $input.value = '';

    }
}

function verificar(){
    
    const maxValue = nums.reduce(function(prev, current) { 
        return prev > current ? prev : current; 
    });

    $result.innerHTML = "O maior número digitado foi: " + maxValue;
}