import cipher from './cipher.js';

var fator;
var cifrar;
var decifrar;

document.getElementById("botao-cifrar").addEventListener("click", function() {
	fator = parseInt(document.getElementById("texto-fator").value);
	cifrar = document.getElementById("texto-cifrar").value;
	document.getElementById("texto-criptografado").innerHTML = cipher.encode(fator, cifrar);
});


document.getElementById("botao-decifrar").addEventListener("click", function() {
	fator = parseInt(document.getElementById("texto-fator").value);
	decifrar = document.getElementById("texto-decifrar").value;
	document.getElementById("texto-criptografado").innerHTML = cipher.decode(fator, decifrar);
});


document.getElementById("jogo-1").addEventListener("click", function() {
	
	// A vida é paradigma das palavras.

	visibleGame();

	document.getElementById("jogo-palavra-1-code").value = "T ";
	document.getElementById("jogo-palavra-2-code").value = "tgby é ";
	document.getElementById("jogo-palavra-3-code").value = "cnenqvtzn ";
	document.getElementById("jogo-palavra-4-code").value = "gdv ";
	document.getElementById("jogo-palavra-5-code").value = "xitidzia.";

	document.getElementById("jogo-questao-1").innerHTML = "Questão 1. Quantidade de dedos de um ex presidente brasileiro."; // 19
	document.getElementById("jogo-questao-2").innerHTML = "Questão 2. Quantidade de países europeus."; // 50
	document.getElementById("jogo-questao-3").innerHTML = "Questão 3. Raíz quadrada de 169."; // 13
	document.getElementById("jogo-questao-4").innerHTML = "Questão 4. 1+1-1+1*1+1 = ?"; //3
	document.getElementById("jogo-questao-5").innerHTML = "Questão 5. Quantidade de irmãos do Michael Jackson."; // 8

});

document.getElementById("jogo-2").addEventListener("click", function() {

	// Escolher o seu tempo é ganhar tempo.

	visibleGame();

	document.getElementById("jogo-palavra-1-code").value = "Ftdpmifs ";
	document.getElementById("jogo-palavra-2-code").value = "m qcs ";
	document.getElementById("jogo-palavra-3-code").value = "altwv é ";
	document.getElementById("jogo-palavra-4-code").value = "eylfyp ";
	document.getElementById("jogo-palavra-5-code").value = "vgorq.";

	document.getElementById("jogo-questao-1").innerHTML = "Questão 1.  2-2*2+2+2-2/2 = ?"; //1
	document.getElementById("jogo-questao-2").innerHTML = "Questão 2. Quantidade de estados dos Estados Unidos."; //50
	document.getElementById("jogo-questao-3").innerHTML = "Questão 3. Ano de lançamento do álbum Bad Romance - Lady Gaga."; //2009
	document.getElementById("jogo-questao-4").innerHTML = "Questão 4. Quantidade de ossos do corpo humano."; // 206
	document.getElementById("jogo-questao-5").innerHTML = "Questão 5. Quantidade de estrelas de sistemas planetários binários."; // 2

});

document.getElementById("jogo-3").addEventListener("click", function() {

	// Vencer a si próprio é a maior das vitórias.

	visibleGame();

	document.getElementById("jogo-palavra-1-code").value = "Wfodfs b ";
	document.getElementById("jogo-palavra-2-code").value = "aq ";
	document.getElementById("jogo-palavra-3-code").value = "uwóuwnt é ";
	document.getElementById("jogo-palavra-4-code").value = "i uiqwz ";
	document.getElementById("jogo-palavra-5-code").value = "xum pcnólcum.";

	document.getElementById("jogo-questao-1").innerHTML = "Questão 1. 53%26."; // 1
	document.getElementById("jogo-questao-2").innerHTML = "Questão 2. Quantidade de iterações deste looping ´for (let i=0; i<=14; i+=2)´."; // 8
	document.getElementById("jogo-questao-3").innerHTML = "Questão 3. A versão mais atual do HTML. "; // 5
	document.getElementById("jogo-questao-4").innerHTML = "Questão 4. Quantidade de bits de 1 byte."; // 8
	document.getElementById("jogo-questao-5").innerHTML = "Questão 5. Ano de criação do Javascript."; // 1996

});

document.getElementById("instrucao-botao").addEventListener("click", function() {

	// Vencer a si próprio é a maior das vitórias.
	
	document.getElementById("titulo-questoes-jogo").innerHTML = "Instruções";

	document.getElementById("form-instrucoes").style.display = "block";


	document.getElementById("jogo-questao-1").style.display = "none";
	document.getElementById("jogo-questao-2").style.display = "none";
	document.getElementById("jogo-questao-3").style.display = "none";
	document.getElementById("jogo-questao-4").style.display = "none";
	document.getElementById("jogo-questao-5").style.display = "none";

	document.getElementById("instrucao-texto-1").style.display = "block";
	document.getElementById("instrucao-texto-2").style.display = "block";
	document.getElementById("instrucao-texto-3").style.display = "block";
	document.getElementById("instrucao-texto-4").style.display = "block";

	document.getElementById("instrucao-texto-1").innerHTML = "Escolha uma das opções de jogos na tela ao lado.";
	document.getElementById("instrucao-texto-2").innerHTML = "Descubra a resposta da questão e insira a resposta numérica no campo do fator de cifragem.";
	document.getElementById("instrucao-texto-3").innerHTML = "Insira o texto da caixa número 1 no campo de decifragem acima, e clique em decifrar.";
	document.getElementById("instrucao-texto-4").innerHTML = "Cole a resposta no campo vazio abaixo e descubra a mensagem secreta!";

	
});	

function visibleGame () {
	document.getElementById("titulo-questoes-jogo").innerHTML = "Questões";

	document.getElementById("form-instrucoes").style.display = "none";

	document.getElementById("jogo-questao-1").style.display = "block";
	document.getElementById("jogo-questao-2").style.display = "block";
	document.getElementById("jogo-questao-3").style.display = "block";
	document.getElementById("jogo-questao-4").style.display = "block";
	document.getElementById("jogo-questao-5").style.display = "block";

	document.getElementById("jogo-palavra-1-original").value = "";
	document.getElementById("jogo-palavra-2-original").value = "";
	document.getElementById("jogo-palavra-3-original").value = "";
	document.getElementById("jogo-palavra-4-original").value = "";
	document.getElementById("jogo-palavra-5-original").value = "";
}



document.getElementById("instrucao-botao").click();