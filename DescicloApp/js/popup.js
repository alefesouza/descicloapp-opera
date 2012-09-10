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

window.onload = function(){
		$('ir').onclick=ir;
		$('editar').onclick=editar;
		$('pesquisar').onclick=pesquisar;
}

window.onkeypress = function(){
		enter()
}