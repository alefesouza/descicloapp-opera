function salvar() {
  var select = document.getElementById("alternativo");
  var alternativo = select.children[select.selectedIndex].value;
  localStorage["alternativo_favorito"] = alternativo;
  localStorage["cor-favorita"] = document.getElementById("cor-favorita").value;
  if(document.getElementById("coricone").checked == true) { localStorage["iricone"] = "imagens/avancarwp7.png"; localStorage["editaricone"] = "imagens/novowp7.png"; localStorage["pesquisaricone"] = "imagens/buscawp7.png"; } else { localStorage["iricone"] = "imagens/avancarwp7b.png"; localStorage["editaricone"] = "imagens/novowp7b.png"; localStorage["pesquisaricone"] = "imagens/buscawp7b.png";};
  if(username.value != "") { localStorage["hifen"] = '&nbsp;-&nbsp'; } else { localStorage["hifen"] = ''};
  localStorage["username"] = document.getElementById("username").value;
  $(function() {
	$( "#alerta-salvar" ).dialog({
		buttons: {
			Ok: function() {
				$( this ).dialog( "close" );
				}
			}
		});
	}); 
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

function descicloApp(){
	window.open('http://' + localStorage.getItem('alternativo_favorito') + '/wiki/Usu%C3%A1rio:%C3%81s/DescicloApp')
}
	
window.onload = function() {
	set_css = function() {
		$('hr').css('background-color',document.getElementById("cor-favorita").value);
	};
	if (Modernizr) {
		$('.pickme').change(function() {
			set_css();
		});
			set_css();
	}
	$('#faq').click(function(){  
		window.location="faq.html";
	});
	$('#changelog').click(function() {   
		window.location="changelog.html";
	});
	$('#opcoes').click(function() {  
		window.location="opcoes.html";
	});
	$('#sobre').click(function() { 
		window.location="sobre.html";
	});
	if(localStorage.getItem('iricone') != "imagens/avancarwp7b.png") { document.getElementById("coricone").checked = true; } else { document.getElementById("coricone2").checked = true; };
	document.getElementById("cor-favorita").value = localStorage.getItem('cor-favorita');
	document.getElementById("username").value = localStorage.getItem('username');
	$('hr').css('background-color',localStorage.getItem('cor-favorita'));
	$('#descicloapp').click(function() { descicloApp() });
	$('#salvar').click(function() { salvar() });
	restaurar();
}
