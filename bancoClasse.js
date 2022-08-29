/* Crie um código com um objeto chamado “Banco”. Ele deverá ter propriedades que incluem conta, saldo, tipo de conta 
e agência e os seus métodos devem ser: buscar saldo, depósito, saque e número da conta.

Observações:
- buscar saldo deve retornar o valor atual do saldo;
- para o depósito, você deverá passar um valor como parâmetro e adicioná-lo no saldo final do objeto;
- para o saque, você deverá passar um valor como parâmetro e subtraí-lo no saldo final do objeto;
- o número da conta deve retornar o número da conta.

Trabalhe esse código em seu IDE, suba ele para sua conta no GitHub e compartilhe o link desse projeto no campo 
ao lado para que outros desenvolvedores possam analisá-lo.
*/

console.log("Desenvolvimento 09 - Banco");

class Banco {
	constructor(nome,conta,tipoDaConta,agencia,saldo){
	this.nome = nome;
	this.conta = conta;
	this.tipoDaConta = tipoDaConta;
	this.agencia = agencia;
	this.saldo = saldo;
	}

	getSaldo() {
    	return `O Saldo da Conta eh: ${this.saldo} reais`;
	}

	getConta() {
		return `O Numero da conta eh: ${this.conta}`;
	}

	getTipo() {
		return `O Tipo da Conta eh: ${this.tipoDaConta}`;
	}
	getAgencia() {
		return `A Agencia eh: ${this.agencia}`;
	}

	deposito(valor){
    	return `O Valor Atual do Saldo eh: ${this.saldo += valor} reais`;
	}

	saque(valor){
		return `O Valor Atual do Saldo eh: ${this.saldo -= valor} reais`;	
	}
}

var readlineSync = require('readline-sync');
var nome = readlineSync.question("Digite o nome: ");
var conta = readlineSync.question("Digite a conta: ");
var tipoDaConta = readlineSync.question("Digite o tipo da conta: ");
var agencia = readlineSync.question("Digite a agencia: ");
var saldo = parseFloat(readlineSync.question("Digite o saldo inicial: "));

const cliente1 = new Banco(nome,conta,tipoDaConta,agencia,saldo);

do{
	var res = readlineSync.question("Digite 1 para Deposito ou 2 para Saque ou 3 para Ver Saldo:");
if (res=="1"){
	var valor = parseFloat(readlineSync.question("Digite o valor do Deposito: "));
	console.log(cliente1.deposito(valor));	
}else if (res=="2"){
	var valor = parseFloat(readlineSync.question("Digite o valor do Saque: "));
	console.log(cliente1.saque(valor));
}else if (res=="3"){
	console.log(cliente1.getSaldo());
}else {
	console.log("Opcao Invalida");
}
var res2 = readlineSync.question("Digite s para fazer outra opercao: ");
}while(res2=="s");
	console.log("Fim do Programa.");
