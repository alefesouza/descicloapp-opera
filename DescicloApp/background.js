window.addEventListener( 'load', function(){
			var theButton;
			var ToolbarUIItemProperties = {
					disabled: false,
					title: 'Desciclop\u00E9dia',
					icon: 'icons/icon.png',
					popup: {
						href: 'popup.html',
						width: 320,
						height: 375
					}
				}
			theButton = opera.contexts.toolbar.createItem(ToolbarUIItemProperties);
			opera.contexts.toolbar.addItem(theButton);
		}, false );