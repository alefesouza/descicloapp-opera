window.addEventListener( 'load', function(){
			var AloogleDescicloAppButton;
			var ToolbarUIItemProperties = {
					disabled: false,
					title: 'Desciclop\u00E9dia',
					icon: 'icons/icon.png',
					popup: {
						href: 'popup.html',
						width: 345,
						height: 420
					}
				}
			AloogleDescicloAppButton = opera.contexts.toolbar.createItem(ToolbarUIItemProperties);
			opera.contexts.toolbar.addItem(AloogleDescicloAppButton);
		}, false );

if(!localStorage.primeira){
    opera.extension.tabs.create({url: "paginas/opcoes.html"});
    localStorage.primeira = "true";
}

if(!localStorage.storagepadrao){
	localStorage["alternativo_favorito"] = "desciclopedia.org";
	localStorage["cor-favorita"] = "#00ffff";
	localStorage["iricone"] = "imagens/avancarwp7.png";
	localStorage["editaricone"] = "imagens/novowp7.png";
	localStorage["pesquisaricone"] = "imagens/buscawp7.png";
    localStorage.storagepadrao = "true";
}