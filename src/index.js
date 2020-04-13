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

