
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var menuItem1 = {};	// @menuItem
// @endregion// @endlock

// eventHandlers// @lock

	menuItem1.click = function menuItem1_click (event)// @startlock
	{// @endlock
		     Desktop.getDesktop().browse(new URI("http://www.codigosparadesarrolladores.blogspot.com"));

        } catch (URISyntaxException ex) {

            System.out.println(ex);

        }catch(IOException e){

            System.out.println(e);

        }// Add your code here
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("menuItem1", "click", menuItem1.click, "WAF");
// @endregion
};// @endlock
