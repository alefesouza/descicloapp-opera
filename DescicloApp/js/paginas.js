function voce(){
	window.open('http://' + localStorage.getItem('alternativo_favorito') + '/wiki/Voc%C3%AA')
}

function servidor(){
	window.open('http://' + localStorage.getItem('alternativo_favorito') + '/wiki/Servidor_da_Desciclop%C3%A9dia')
}

function yourbase(){
	window.open('http://' + localStorage.getItem('alternativo_favorito') + '/wiki/All_your_base_are_belong_to_us')
}

function me(){
	window.open('http://' + localStorage.getItem('alternativo_favorito') + '/wiki/Usu%C3%A1rio:%C3%81s');
}

function descicloApp(){
	window.open('http://' + localStorage.getItem('alternativo_favorito') + '/wiki/Usu%C3%A1rio:%C3%81s/DescicloApp')
}

function chrome(){
	window.open('http://desciclopedia.org/wiki/Usu%C3%A1rio:%C3%81s/DescicloApp/Chrome', '_blank')
}

function firefox(){
	window.open('firefox.html', '_self')
}

function usuario(){
	window.open('http://' + localStorage.getItem('alternativo_favorito') + '/wiki/Usu%C3%A1rio:%C3%81s');
}

function flamewar(){
	window.open('http://' + localStorage.getItem('alternativo_favorito') + '/wiki/Flamewar')
}

function discussao(){
	window.open('http://' + localStorage.getItem('alternativo_favorito') + '/wiki/Usu%C3%A1rio_Discuss%C3%A3o:%C3%81s')
}

function johnny(){
	window.open('http://' + localStorage.getItem('alternativo_favorito') + '/wiki/Usu%C3%A1rio:UltraJohnn%C3%BF')
}

function sipho(){
	window.open('http://' + localStorage.getItem('alternativo_favorito') + '/wiki/Usu%C3%A1rio:Siphodemos')
}

function ounao(){
	window.open('http://' + localStorage.getItem('alternativo_favorito') + '/wiki/Ou_n%C3%A3o')
}

function dar(){
	window.open('http://' + localStorage.getItem('alternativo_favorito') + '/wiki/Dar')
}

function shareFacebook(){
	window.open('https://www.facebook.com/sharer/sharer.php?u=http://desciclopedia.org/wiki/Usu%C3%A1rio:%C3%81s/DescicloApp', '', 'width=657,height=367')
}

function shareTwitter(){
	window.open('https://twitter.com/intent/tweet?source=webclient&text=Estou+usando+o+DescicloApp,+um+aplicativo+@DaDesciclopedia,+o+%C3%BAnico+aprovado+por+Chuck+Norris,+baixe+voc%C3%AA+tamb%C3%A9m%21%21+http://vales.ca/descicloapp', '', 'width=600,height=257')
}

function shareGooglePlus(){
	window.open('https://plus.google.com/share?url=http://desciclopedia.org/wiki/Usu%C3%A1rio:%C3%81s/DescicloApp', '', 'width=600,height=400')
}

window.onload=function(){
	$('hr').css('background-color',localStorage.getItem('hr-color'));
	$('#faq').click(function(){  
		window.location="faq.html";
	});
	$('#changelog').click(function() {   
		window.location="changelog.html";
	});
	$('#opcoes').click( function() {  
		window.location="opcoes.html";
	});
	$('#sobre').click(function() { 
		window.location="sobre.html";
	});
	$('#voce').click(function() { voce() });
	$('#servidor').click(function() { servidor() });
	$('#store').click(function() { store() });
	$('#yourbase').click(function() { yourbase() });
	$('#me').click(function() { me() });
	$('#descicloapp').click(function() { descicloApp() });
	$('#info').click(function() { descicloApp() });
	$('#chrome').click(function() { chrome() });
	$('#firefox').click(function() { firefox() });
	$('#usuario').click(function() { usuario() });
	$('#usuario').html('http://' + localStorage.getItem('alternativo_favorito') + '/wiki/Usu&aacute;rio:&Aacute;s');
	$('#flamewar').click(function() { flamewar() });
	$('#discussao').click(function() { discussao() });
	$('#johnny').click(function() { johnny() });
	$('#sipho').click(function() { sipho() });
	$('#ounao').click(function() { ounao() });
	$('#dar').click(function() { dar() });
	$('#sharefacebook').click(function() { shareFacebook() });
	$('#sharetwitter').click(function() { shareTwitter() });
	$('#sharegoogleplus').click(function() { shareGooglePlus() });
}