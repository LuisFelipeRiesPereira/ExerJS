let nomes = [];
let $result = document.querySelector("#result");
let $input = document.querySelector("#nome");

function adicionar()
    if($input.value == ''){
        return false;
    }
    else{
        nomes.push("<br>"+$input.value);
        $result.innerHTML = "Nome digitados: " + nomes;
        $input.value = '';
    }

function inverter(){
    if(nomes == []){
        $result.innerHTML = "Adicione nomes";
    }
    else{
        $result.innerHTML = nomes.reverse();
        nomes = [];
    }

}