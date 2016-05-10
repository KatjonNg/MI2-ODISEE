/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
/*
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};
*/

/*
 * Own code
 */
$(document).ready(function() {
    // Dit lijntje zorgt er voor dat je browser en ook brackets makkelijker fouten zal zien en zal tegenhouden.
    "use strict";

	// Navigate to home Page
	function changeHomePage() {
		$.mobile.navigate( "#homePage", { transition: 'slideup'} );
	}// End function changeRegisterPage()

	// Navigate to les 1 Page
	function changeLes1Page() {
		$.mobile.navigate( "#les1Page", { transition: 'slideup'} );
	}// End function changeRegisterPage()

    // Navigate to les 2 Page
    function changeLes2Page() {
        $.mobile.navigate( "#les2Page", { transition: 'slideup'} );
    }// End function changeLes2Page()

    // Navigate to les 3
    function changeLes3Page() {
        $.mobile.navigate( "#les3Page", { transition: 'slideup'} );
    }// End function changeLes3Page()

    // Navigate to les 3 Page Oef 2.3 Page
    function changeLes3Oef23Page() {
        $.mobile.navigate( "#les3Oef23Page", { transition: 'slideup'} );
    }// End function changeLes3Oef23Page()

    // Navigate to les 3 Page Oef 2.4 Page
    function changeLes3Oef24Page() {
        $.mobile.navigate( "#les3Oef24Page", { transition: 'slideup'} );
    }// End function changeLes3Oef23Page()

    // Navigate to les 3 Page Oef 3.2.2 Page
    function changeLes3Oef322Page() {
        $.mobile.navigate( "#les3Oef322Page", { transition: 'slideup'} );
    }// End function changeLes3Oef24Page()

    // Navigate to les 3 Page Oef 3.3 Page
    function changeLes3Oef33Page() {
        $.mobile.navigate( "#les3Oef33Page", { transition: 'slideup'} );
    }// End function changeLes3Oef24Page()

    // Navigate to les 4 Page
    function changeLes4Page() {
        $.mobile.navigate( "#les4Page", { transition: 'slideup'} );
    }// End function changeRegisterPage()

    // Navigate to les 5 Page
    function changeLes5Page() {
        $.mobile.navigate( "#les5Page", { transition: 'slideup'} );
    }// End function changeRegisterPage()

    // Navigate to les 5 Page Oef 1 Page
    function changeLes5Oef1Page() {
        $.mobile.navigate( "#les5Oef1", { transition: 'slideup'} );
    }// End function changeLes5Oef1Page()

    // Navigate to les 5 Page Oef 2 Page
    function changeLes5Oef2Page() {
        $.mobile.navigate( "#les5Oef2", { transition: 'slideup'} );
    }// End function changeLes5Oef2Page()

    // Navigate to les 6 Page
    function changeLes6Page() {
        $.mobile.navigate( "#les6Page", { transition: 'slideup'} );
    }// End function changeRegisterPage()

    // Navigate to les 6 Page Oef 5.1 Page
    function changeLes6Oef51Page() {
        $.mobile.navigate( "#les6Oef51", { transition: 'slideup'} );
    }// End function changeLes6Oef51Page()

    // Navigate to les 6 Page Oef 5.2 Page
    function changeLes6Oef52Page() {
        $.mobile.navigate( "#les6Oef52", { transition: 'slideup'} );
    }// End function changeLes6Oef52Page()

    // Navigate to les 6 Page Oef 5.1 Page
    function changeLes6Oef53Page() {
        $.mobile.navigate( "#les6Oef53", { transition: 'slideup'} );
    }// End function changeLes6Oef53Page()

    // Navigate to les 7 Page
    function changeLes7Page() {
        $.mobile.navigate( "#les7Page", { transition: 'slideup'} );
    }// End function changeRegisterPage()

    // Navigate to les 8 Page
    function changeLes8Page() {
        $.mobile.navigate( "#les8Page", { transition: 'slideup'} );
    }// End function changeRegisterPage()

    // Navigate to les 9 Page
    function changeLes9Page() {
        $.mobile.navigate( "#les9Page", { transition: 'slideup'} );
    }// End function changeRegisterPage()

    // Navigate to les 10 Page
    function changeLes10Page() {
        $.mobile.navigate( "#les10Page", { transition: 'slideup'} );
    }// End function changeLes1Page()

    // Navigate to Game Page
    function changeGamePage() {
        $.mobile.navigate( "#GamePage", { transition: 'slideup'} );
    }// End function changeLes1Page()

    // Navigation when clicked
	$( "#btnHome" ).on( "click", changeHomePage );
	$( "#btnHome1" ).on( "click", changeHomePage );
	$( "#btnHome2" ).on( "click", changeHomePage );
	$( "#btnHome3" ).on( "click", changeHomePage );
	$( "#btnHome4" ).on( "click", changeHomePage );
	$( "#btnHome5" ).on( "click", changeHomePage );
	$( "#btnHome6" ).on( "click", changeHomePage );
	$( "#btnHome7" ).on( "click", changeHomePage );
	$( "#btnHome8" ).on( "click", changeHomePage );
	$( "#btnHome9" ).on( "click", changeHomePage );
	$( "#btnHome10" ).on( "click", changeHomePage );
	$( "#btnHome11" ).on( "click", changeHomePage );
	$( "#btnHome12" ).on( "click", changeHomePage );
	$( "#btnHome13" ).on( "click", changeHomePage );
	$( "#btnHome14" ).on( "click", changeHomePage );
	$( "#btnHome15" ).on( "click", changeHomePage );
	$( "#btnHome16" ).on( "click", changeHomePage );
	$( "#btnHome17" ).on( "click", changeHomePage );
	$( "#btnLes1" ).on( "click", changeLes1Page );
	$( "#btnLes2" ).on( "click", changeLes2Page );
	$( "#btnLes3" ).on( "click", changeLes3Page );
	$( "#btnLes31" ).on( "click", changeLes3Page );
	$( "#btnLes32" ).on( "click", changeLes3Page );
	$( "#btnLes33" ).on( "click", changeLes3Page );
	$( "#btnLes34" ).on( "click", changeLes3Page );
	$( "#btnOef23" ).on( "click", changeLes3Oef23Page );
	$( "#btnOef24" ).on( "click", changeLes3Oef24Page );
	$( "#btnOef322" ).on( "click", changeLes3Oef322Page );
	$( "#btnOef33" ).on( "click", changeLes3Oef33Page );
	$( "#btnLes4" ).on( "click", changeLes4Page );
	$( "#btnLes5" ).on( "click", changeLes5Page );
	$( "#btnLes51" ).on( "click", changeLes5Page );
	$( "#btnLes52" ).on( "click", changeLes5Page );
	$( "#btnLes5Oef1" ).on( "click", changeLes5Oef1Page );
	$( "#btnLes5Oef2" ).on( "click", changeLes5Oef2Page );
	$( "#btnLes6" ).on( "click", changeLes6Page );
	$( "#btnLes61" ).on( "click", changeLes6Page );
	$( "#btnLes62" ).on( "click", changeLes6Page );
	$( "#btnLes63" ).on( "click", changeLes6Page );
	$( "#btnLes6Oef51" ).on( "click", changeLes6Oef51Page );
	$( "#btnLes6Oef52" ).on( "click", changeLes6Oef52Page );
	$( "#btnLes6Oef53" ).on( "click", changeLes6Oef53Page );
	$( "#btnLes7" ).on( "click", changeLes7Page );
	$( "#btnLes8" ).on( "click", changeLes8Page );
	$( "#btnLes9" ).on( "click", changeLes9Page );
	$( "#btnLes10" ).on( "click", changeLes10Page );
	$( "#btnGame" ).on( "click", changeGamePage );


});// End document ready