function $(id){  
		return document.getElementById(id);  
	}  

function enter(){
	if(event.keyCode=='13'){
		window.open('http://' + document.getElementById('alternativo').value + '/index.php?title=User_talk:' + document.getElementById('q').value + '&action=edit&section=new'); window.close(); }
}

function ir(){
	var irei = document.getElementById('q');
	if(irei.value != "") {
		//Coloquei e ingles (user_talk) porque se colocasse em portugues (Usu%C3%A1rio_Discuss%C3%A3o) dava um erro estranho quando o user tinha acento
		window.open('http://' + document.getElementById('alternativo').value + '/index.php?title=User_talk:' + document.getElementById('q').value + '&action=edit&section=new'); window.close(); }
	else {
		alert('Escreva algo primeiro: Digite na barra de texto o username de um usu�rio que voc� quer enviar uma mensagem (er�tica), via p�gina de discuss�o') }
}

function editar(){
	var editarei = document.getElementById('q');
	if(editarei.value != "") {
		window.open('http://' + document.getElementById('alternativo').value + '/wiki/Especial:Contatar_usu%C3%A1rio/' + document.getElementById('q').value); window.close(); }
	else {
		alert('Escreva algo primeiro: Digite na barra de texto o username de um usu�rio que voc� quer enviar um e-mail na Desciclop�dia (bem particular, s� voc�s dois (ui!)), via Contatar usu�rio') }
}

window.onload = function(){
	$('voltar').onclick = function(){  
		window.location="popup.html";
	}
	$('ir').onclick=ir;
	$('editar').onclick=editar;
}

window.onkeypress = function(){
	enter()
}