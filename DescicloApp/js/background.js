if(localStorage.getItem('buscacontexto') != "false") {
function irdescicloapp(info)
{
	var textoselecionado = info.selectionText;
	chrome.tabs.create({url: 'http://' + localStorage.getItem('alternativo_favorito') + '/wiki/' + textoselecionado})
}

function editardescicloapp(info)
{
	var textoselecionado = info.selectionText;
	chrome.tabs.create({url: 'http://' + localStorage.getItem('alternativo_favorito') + '/index.php?title=' + textoselecionado + '&action=edit'})
}

function buscadescicloapp(info)
{
	var textoselecionado = info.selectionText;
	chrome.tabs.create({url: 'http://' + localStorage.getItem('alternativo_favorito') + '/index.php?title=Especial%3ABusca&search=' + textoselecionado})
}

chrome.contextMenus.create({
	title: "Ir a '%s' na Desciclop\u00E9dia",
	contexts:["selection"],
	onclick: irdescicloapp
});

chrome.contextMenus.create({
	title: "Editar '%s' na Desciclop\u00E9dia",
	contexts:["selection"],
	onclick: editardescicloapp
});

chrome.contextMenus.create({
	title: "Pesquisar '%s' na Desciclop\u00E9dia",
	contexts:["selection"],
	onclick: buscadescicloapp
});
}

if(!localStorage.primeira){
    chrome.tabs.create({url: "paginas/opcoes.html"});
    chrome.tabs.create({url: "paginas/toolbar.html"});
    localStorage.primeira = "true";
}

if(!localStorage.storagepadrao){
	localStorage["alternativo_favorito"] = "desciclopedia.org";
	localStorage["cor-favorita"] = "#00ffff";
	localStorage["cor2"] = "black";
	localStorage["buscacontexto"] = "true";
	localStorage["descicloguia"] = "false";
	localStorage["coricone"] = "imagens/buscawp72.png";
	localStorage["iricone"] = "imagens/avancarwp7.png";
	localStorage["editaricone"] = "imagens/novowp7.png";
	localStorage["pesquisaricone"] = "imagens/buscawp7.png";
	localStorage["botaomais"] = "true";
	localStorage["barrabusca"] = "true";
	localStorage["botaofeedback"] = "true";
	localStorage["pref_tb_is_visible"] = "true";
    localStorage.storagepadrao = "true";
}

// Corrige bug no Facebook se a DescicloToolbar estiver ativada
if(localStorage.getItem('pref_tb_is_visible') == "true") { chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab){
  if(tab.url && tab.url.indexOf('https://www.facebook.com') > -1){
    chrome.tabs.insertCSS(tabId, {code: ".stickyHeaderWrap{top:30px;}"});
  }
}); }