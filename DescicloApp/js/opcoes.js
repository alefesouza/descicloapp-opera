function $$(id){  
		return document.getElementById(id);  
}

function salvar() {
  var select = document.getElementById("alternativo");
  var alternativo = select.children[select.selectedIndex].value;
  localStorage["alternativo_favorito"] = alternativo;
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
	
window.onload = function() {
	set_css = function() {
		$('hr').css('background-color',localStorage.getItem('background-color'));
	};
	if (Modernizr.localstorage) {
		$('.pickme').change(function() {
			localStorage.setItem(this.id,this.value);
			set_css();
		});
			set_css();
	}
	$$('faq').onclick = function(){  
		window.location="faq.html";
	}
	$$('changelog').onclick = function(){  
		window.location="changelog.html";
	}
	$$('opcoes').onclick = function(){  
		window.location="opcoes.html";
	}
	$$('sobre').onclick = function(){  
		window.location="sobre.html";
	}
	$$('salvar').onclick = salvar;
	restaurar();
}