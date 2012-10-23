function enter(){
if(event.keyCode=='13'){
		window.open('http://' + document.getElementById('alternativo').value + '/wiki/' + document.getElementById('q').value); window.close(); }
}

function ir(){
	var irei = document.getElementById('q');
	if(irei.value != "") {
		window.open('http://' + document.getElementById('alternativo').value + '/wiki/' + document.getElementById('q').value); window.close(); }
	else {
		$(function() {
			$( "#alerta-ir" ).dialog({
				buttons: {
					Ok: function() {
					$( this ).dialog( "close" );
				}
			}
		});
	}); }
}

function editar(){
	var editarei = document.getElementById('q');
	if(editarei.value != "") {
		window.open('http://' + document.getElementById('alternativo').value + '/index.php?title=' + document.getElementById('q').value + '&action=edit'); window.close() }
	else {
		$(function() {
			$( "#alerta-editar" ).dialog({
				buttons: {
					Ok: function() {
					$( this ).dialog( "close" );
				}
			}
		});
	}); }
}

function pesquisar(){
	var pesquisarei = document.getElementById('q');
	if(pesquisarei.value != "") {
		window.open('http://' + document.getElementById('alternativo').value + '/index.php?title=Especial%3ABusca&search=' + document.getElementById('q').value); window.close() }
	else {
		$(function() {
			$( "#alerta-pesquisar" ).dialog({
				buttons: {
					Ok: function() {
					$( this ).dialog( "close" );
				}
			}
		});
	}); }
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

function mais(){
	if (this.parentNode.nextSibling.childNodes[0].style.display != '') {
		document.getElementById('mais').innerHTML = '<img src="imagens/cimawp7.png" width="16px"> Menos';
		this.parentNode.nextSibling.childNodes[0].style.display = ''; }
	else {
	document.getElementById('mais').innerHTML = '<img src="imagens/baixowp7.png" width="16px"> Mais';
	this.parentNode.nextSibling.childNodes[0].style.display = 'none';}
}

function desnoticias(){
	if(q.value != "") {
		window.open('http://' + document.getElementById('alternativo').value + '/index.php?action=edit&preload=Predefini%C3%A7%C3%A3o%3ANova+not%C3%ADcia&title=DesNot%C3%ADcias%3A' + document.getElementById('q').value + '&create=Criar+p%C3%A1gina'); window.close(); }
	else {
		window.open('http://' + document.getElementById('alternativo').value + '/wiki/Desnot%C3%ADcias:P%C3%A1gina_principal'); window.close(); }
}

function descionario(){
	if(q.value != "") {
		window.open('http://' + document.getElementById('alternativo').value + '/index.php?action=edit&preload=Predefini%C3%A7%C3%A3o%3ANovo+verbete&title=Descion%C3%A1rio%3A' + document.getElementById('q').value + '&create=Criar+p%C3%A1gina'); window.close(); }
	else {
		window.open('http://' + document.getElementById('alternativo').value + '/wiki/Desnot%C3%ADcias:P%C3%A1gina_principal'); window.close(); }
}

function deslivros(){
	if(q.value != "") {
		window.open('http://' + document.getElementById('alternativo').value + '/index.php?action=edit&preload=Predefini%C3%A7%C3%A3o%3ANovo+deslivro&title=Deslivros%3A' + document.getElementById('q').value + '&create=Criar+p%C3%A1gina'); window.close(); }
	else {
		window.open('http://' + document.getElementById('alternativo').value + '/wiki/Deslivros:P%C3%A1gina_principal'); window.close(); }
}

function despoesias(){
	if(q.value != "") {
		window.open('http://' + document.getElementById('alternativo').value + '/index.php?action=edit&preload=Predefini%C3%A7%C3%A3o%3ANova+despoesia&title=Despoesias%3A' + document.getElementById('q').value + '&create=Criar+p%C3%A1gina'); window.close(); }
	else {
		window.open('http://' + document.getElementById('alternativo').value + '/wiki/Despoesias:P%C3%A1gina_principal'); window.close(); }
}

function descifras(){
	if(q.value != "") {
		window.open('http://' + document.getElementById('alternativo').value + '/index.php?action=edit&preload=Predefini%C3%A7%C3%A3o%3ANova+descifra&title=Descifras%3A' + document.getElementById('q').value + '&create=Criar+p%C3%A1gina'); window.close(); }
	else {
		window.open('http://' + document.getElementById('alternativo').value + '/wiki/Descifras:P%C3%A1gina_principal'); window.close(); }
}

function desentrevistas(){
	if(q.value != "") {
		window.open('http://' + document.getElementById('alternativo').value + '/index.php?action=edit&preload=Predefini%C3%A7%C3%A3o%3Adesentrevistasnova&title=Desentrevistas%3A' + document.getElementById('q').value + '&create=Criar+p%C3%A1gina'); window.close(); }
	else {
		window.open('http://' + document.getElementById('alternativo').value + '/wiki/Desentrevistas:P%C3%A1gina_principal'); window.close(); }
}

function descitacoes(){
	if(q.value != "") {
		window.open('http://' + document.getElementById('alternativo').value + '/index.php?action=edit&preload=Predefini%C3%A7%C3%A3o%3ANova+Descita%C3%A7%C3%A3o&editintro=Predefini%C3%A7%C3%A3o%3AAviso+Descita%C3%A7%C3%B5es&title=Descita%C3%A7%C3%B5es%3A' + document.getElementById('q').value + '&create=Criar+p%C3%A1gina'); window.close(); }
	else {
		window.open('http://' + document.getElementById('alternativo').value + '/wiki/Descita%C3%A7%C3%B5es:P%C3%A1gina_principal'); window.close(); }
}

function deslistas(){
	if(q.value != "") {
		window.open('http://' + document.getElementById('alternativo').value + '/index.php?action=edit&preload=Predefini%C3%A7%C3%A3o%3ADeslistas%2Fpreload&title=Deslistas%3A' + document.getElementById('q').value + '&create=Criar+p%C3%A1gina'); window.close(); }
	else {
		window.open('http://' + document.getElementById('alternativo').value + '/wiki/Deslistas:P%C3%A1gina_principal'); window.close(); }
}

function desinopses(){
	if(q.value != "") {
		window.open('http://' + document.getElementById('alternativo').value + '/index.php?title=Desinopses:' + document.getElementById('q').value + '&action=edit&preload=Predefini%C3%A7%C3%A3o:Criar%20novo%20roteiro/preload'); window.close(); }
	else {
		window.open('http://' + document.getElementById('alternativo').value + '/wiki/Desinopses:P%C3%A1gina_principal'); window.close(); }
}

function fatos(){
	if(q.value != "") {
		window.open('http://' + document.getElementById('alternativo').value + '/index.php?action=edit&preload=Predefini%C3%A7%C3%A3o%3ACriar+novos+fatos%2Fpreload&title=Fatos%3A' + document.getElementById('q').value + '&create=Criar+p%C3%A1gina'); window.close(); }
	else {
		window.open('http://' + document.getElementById('alternativo').value + '/wiki/Fatos:P%C3%A1gina_principal'); window.close(); }
}

function facebook(){
	window.open('http://facebook.com/Desciclopedia', '_blank'); window.close();
}

function twitter(){
	window.open('http://twitter.com/DaDesciclopedia', '_blank'); window.open();
}

function blog(){
	window.open('http://descicloblog.blogspot.com', '_blank'); window.close();
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
		$('hr').css('background-color',localStorage.getItem('hr-color'));
		$('#ir').click(function() { ir() });
		$('#editar').click(function() { editar() });
		$('#pesquisar').click(function() { pesquisar() });
		$('#irb').click(function() { irb() });
		$('#pagina').click(function() { pagina() });
		$('#discussao').click(function() { discussao() });
		$('#contribuicao').click(function() { contribuicao() });
		$('#vigiado').click(function() { vigiado() });
		$('#carregar').click(function() { carregar() });
		$('#mensagem').click(function() { mensagem() });
		$('#recentes').click(function() { recentes() });
		document.getElementById('mais').onclick=mais;
		$('#desnoticias').click(function() { desnoticias() });
		$('#descionario').click(function() { descionario() });
		$('#deslivros').click(function() { deslivros() });
		$('#despoesias').click(function() { despoesias() });
		$('#descifras').click(function() { descifras() });
		$('#desentrevistas').click(function() { desentrevistas() });
		$('#descitacoes').click(function() { descitacoes() });
		$('#deslistas').click(function() { deslistas() });
		$('#desinopses').click(function() { desinopses() });
		$('#fatos').click(function() { fatos() });
		$('#facebook').click(function() { facebook() });
		$('#twitter').click(function() { twitter() });
		$('#blog').click(function() { blog() });
		restaurar();
}

window.onkeypress = function(){
		enter()
}