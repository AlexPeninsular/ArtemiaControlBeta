
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var button8 = {};	// @button
// @endregion// @endlock

// eventHandlers// @lock

	button8.click = function button8_click (event)// @startlock
	{// @endlock
		// Add your code here
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("button8", "click", button8.click, "WAF");
// @endregion
};// @endlock
