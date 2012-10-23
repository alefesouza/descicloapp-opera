function salvar() {
  var select = document.getElementById("alternativo");
  var alternativo = select.children[select.selectedIndex].value;
  localStorage["alternativo_favorito"] = alternativo;
  localStorage["hr-color"] = document.getElementById("background-color").value;
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
		$('#amostra').css('background-color',document.getElementById("background-color").value);
		$('#amostra2').css('background-color',document.getElementById("background-color").value);
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
	$('#salvar').click(function() { salvar() });
	restaurar();
}