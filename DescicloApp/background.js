window.addEventListener( 'load', function(){
			var AloogleDescicloAppButton;
			var ToolbarUIItemProperties = {
					disabled: false,
					title: 'Desciclop\u00E9dia',
					icon: 'icons/icon.png',
					popup: {
						href: 'popup.html',
						width: 345,
						height: 410
					}
				}
			AloogleDescicloAppButton = opera.contexts.toolbar.createItem(ToolbarUIItemProperties);
			opera.contexts.toolbar.addItem(AloogleDescicloAppButton);
		}, false );