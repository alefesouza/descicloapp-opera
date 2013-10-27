function novaguia(){
	window.open('http://' + localStorage.getItem('alternativo_favorito') + '/wiki/Special:Recentchanges/250', '_blank');
};

window.onload = function(){
	$('hr').css('background-color',localStorage.getItem('cor-favorita'));
	$('#fechar').click(function() { window.close(); })
	$('#novaguia').click(function() { novaguia(); window.close(); });
}