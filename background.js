'use strict';

chrome.webRequest.onBeforeSendHeaders.addListener(    
    function(details) {
          for (var i = 0; i < details.requestHeaders.length; ++i) {
            if(details.requestHeaders[i].name === 'Cookie') {
                
              details.requestHeaders[i].value = details.requestHeaders[i].value.replace ('idpdisco_istidpdisco_lastidp=https%3A%2F%2Fadfs.aarhuskommune.dk%2Fadfs%2Fservices%2Ftrust','idpdisco_istidpdisco_lastidp=https%3A%2F%2Fatlas.uni-login.dk%2Fsimplesaml%2Fsaml2%2Fidp%2Fmetadata.php')
                                
                
//             details.requestHeaders[i].value = '';
              break;
             }
          }
          return {requestHeaders: details.requestHeaders};
        },
        {urls: ["https://saml.personale.tabulex.dk/simplesaml/*",
        "https://fravaer.tabulex.net/"]},
    
        ["blocking", "requestHeaders", "extraHeaders"]);
