document.getElementById("calculate-button").onclick = function(){
	/*
	//coletar números dentro da caixa  de input.
	*/
	let elem1 = document.getElementById('elem-1');
	let elem2 = document.getElementById('elem-2');

	let val1 = parseInt(elem1.value);
	let val2 = parseInt(elem2.value);
	let choice = document.querySelector('input[name="operation"]:checked');

	if ( Number.isNaN(val1) || Number.isNaN(val2)) {
		alert('Deve preencher os campos!');
	} else if (choice == null ){
		alert('Selecione uma operação!');
	}
		else{
			let operation = choice.value;
			let operationResult =getResult(val1,val2,operation);
			let resultElement = document.getElementById('result');
			resultElement.innerHTML = operationResult;
		}
}
/*
**Função para executar as operações
*/
function getResult(val1, val2, operation){
	if (operation === '+') {
		return val1 + val2;
	} else if (operation === '-'){
		return val1 - val2;
	} else if (operation === '*'){
		return val1 * val2;
	}else if (operation === '/'){
		return val1 / val2;
	}
}

