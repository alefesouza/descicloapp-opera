function $(id){  
		return document.getElementById(id);  
	}

function enter(){
if(event.keyCode=='13'){
		window.open('http://' + document.getElementById('alternativo').value + '/wiki/' + document.getElementById('q').value); window.close(); }
}

function ir(){
	var irei = document.getElementById('q');
	if(irei.value != "") {
		window.open('http://' + document.getElementById('alternativo').value + '/wiki/' + document.getElementById('q').value); window.close(); }
	else {
		//As notificacoes desktop do DescicloApp para Chrome nao sao compativeis com o Opera, por isso eu coloquei alert() mesmo 
		alert('Escreva algo primeiro: Digite na barra de texto que página você quer ir na Desciclopédia, poser') }
}

function editar(){
	var editarei = document.getElementById('q');
	if(editarei.value != "") {
		window.open('http://' + document.getElementById('alternativo').value + '/index.php?title=' + document.getElementById('q').value + '&action=edit'); window.close() }
	else {
		alert('Escreva algo primeiro: Digite na barra de texto que página você quer editar ou criar na Desciclopédia, só não vai fazer merda pra um sysop não te pegar, seu n00b!!') }
}

function pesquisar(){
	var pesquisarei = document.getElementById('q');
	if(pesquisarei.value != "") {
		window.open('http://' + document.getElementById('alternativo').value + '/index.php?title=Especial%3ABusca&search=' + document.getElementById('q').value); window.close() }
	else {
		alert('Escreva algo primeiro: Digite na barra de texto o que você quer pesquisar na (Xvideos) Desciclopédia, ou não') }
}

function irb(){
	window.open('http://' + document.getElementById('alternativo').value + '/wiki/P%C3%A1gina_principal'); window.close();
}

function pagina(){
	//Eu usei window.open() porque com ele demora mais pra aparecer a url, dando a impressao de que a extensao descobriu sozinha o username
	window.open('http://' + document.getElementById('alternativo').value + '/wiki/Especial:Minha_p%C3%A1gina'); window.close();
}

function discussao(){
	window.open('http://' + document.getElementById('alternativo').value + '/wiki/Especial:Minha_discuss%C3%A3o'); window.close();
}

function contribuicao(){
	window.open('http://' + document.getElementById('alternativo').value + '/wiki/Special:MyContributions'); window.close();
}

function vigiado(){
	window.open('http://' + document.getElementById('alternativo').value + '/wiki/Especial:P%C3%A1ginas_vigiadas'); window.close();
}

function carregar(){
	window.open('http://' + document.getElementById('alternativo').value + '/wiki/Especial:Carregar_arquivo'); window.close();
}

function mensagem(){
	window.open('msg.html', '_self')
}

function recentes(){
	window.open('http://' + document.getElementById('alternativo').value + '/wiki/Special:Recentchanges/250'); window.close();
}

function facebook(){
	window.open('http://facebook.com/Desciclopedia'); window.close();
}

function twitter(){
	window.open('http://twitter.com/DaDesciclopedia', '_blank'); window.open();
}

function blog(){
	window.open('http://descicloblog.blogspot.com', '_blank'); window.close();
}

function tumblr(){
	window.open('http://desciclopedia.tumblr.com/', '_blank'); window.close();
}

function ajuda(){
	window.open('paginas/faq.html', '_blank'); window.close();
}

window.onload = function(){
		$('ir').onclick=ir;
		$('editar').onclick=editar;
		$('pesquisar').onclick=pesquisar;
		$('irb').onclick=irb;
		$('pagina').onclick=pagina;
		$('discussao').onclick=discussao;
		$('contribuicao').onclick=contribuicao;
		$('vigiado').onclick=vigiado;
		$('carregar').onclick=carregar;
		$('mensagem').onclick=mensagem;
		$('recentes').onclick=recentes;
		$('facebook').onclick=facebook;
		$('twitter').onclick=twitter;
		$('blog').onclick=blog;
		$('tumblr').onclick=tumblr;
		$('ajuda').onclick=ajuda;
}

window.onkeypress = function(){
		enter()
}