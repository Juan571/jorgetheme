$( document ).ready(function() {
	//Código highlight.js
	$('pre code').each(function(i, block) {
		hljs.highlightBlock(block);
	});
	//reemplaza esta linea de código por el tuyo
	console.log( "Funciona!" );
});
