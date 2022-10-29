function calcular(){
    let $input = document.querySelector("#numero");
    resultado = Math.pow($input.value, 2);
    let $result = document.querySelector("#result");

    if($input.value == ''){
        $result.innerHTML = "insira um resultado válido";
        $input.value = '';
    }
    else{
        $result.innerHTML = "O quadrado de " + $input.value + " é: " + resultado;
        $input.value = '';
    }
}