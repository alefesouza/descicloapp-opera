function enter(){
	if(event.keyCode=='13'){
		window.open('http://' + document.getElementById('alternativo').value + '/index.php?title=User_talk:' + document.getElementById('q').value + '&action=edit&section=new') }
}

function mensagem(){
	if(q.value != "") {
		//Coloquei em ingles (user_talk) porque se colocasse em portugues (Usu%C3%A1rio_Discuss%C3%A3o) dava um erro estranho quando o user tinha acento
		window.open('http://' + document.getElementById('alternativo').value + '/index.php?title=User_talk:' + document.getElementById('q').value + '&action=edit&section=new') }
	else {
		alert('Escreva algo primeiro: Digite na barra de texto o username de um usu\u00E1rio que voc\u00ea quer enviar uma mensagem, via p\u00E1gina de discuss\u00E3o') }
}

function email(){
	if(q.value != "") {
		window.open('http://' + document.getElementById('alternativo').value + '/wiki/Especial:Contatar_usu%C3%A1rio/' + document.getElementById('q').value) }
	else {
		alert('Escreva algo primeiro: Digite na barra de texto o username de um usu\u00E1rio que voc\u00ea quer enviar um e-mail na Desciclop\u00E9dia, via Contatar usu\u00E1rio') }
}

function restaurar() {
  var favorite = localStorage["alternativo_favorito"];
  if (!favorite) {
    return;
  }
  var select = document.getElementById("alternativo");
  for (var i = 0; i < select.children.length; i++) {
    var child = select.children[i];
    if (child.value == favorite) {
      child.selected = "true";
      break;
    }
  }
}

window.onload = function(){
	$('hr').css('background-color',localStorage.getItem('cor-favorita'));
	$('#voltar').click(function(){  
		window.location="popup.html";
	});
	$('#mensagem').click(function() { mensagem() });
	$('#email').click(function() { email() });
	document.getElementById('q').focus();
	restaurar();
}

window.onkeypress = function(){
	enter()
}