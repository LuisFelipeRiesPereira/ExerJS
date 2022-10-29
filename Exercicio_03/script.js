let maioridade = [];
let menoridade = [];
let $result = document.querySelector("#result");

function adicionar(){
    let $input = document.querySelector("#idade");

    if($input.value == ''){
        $result.innerHTML = "digite um valor";
    }
    else if(parseInt($input.value) >= 18){
        maioridade.push(parseInt($input.value));
        $result.innerHTML = "valor digitado: " + $input.value;
        $input.value = '';
    }
    else if(parseInt($input.value) < 18){
        menoridade.push(parseInt($input.value));
        $result.innerHTML = "valor digitado: " + $input.value;
        $input.value = '';
    }
    else{
        $result.innerHTML = "digite um valor  válido";
    }
}

function verificar(){

    $result.innerHTML = "Total de pessoas com que atingiram a maioridade: " + maioridade.length + "<br>" +  "Total de pessoas abaixo da maioridade: " + menoridade.length;
}