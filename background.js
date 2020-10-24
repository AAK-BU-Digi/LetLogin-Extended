'use strict';

// chrome.webRequest.onBeforeRequest.addListener(
//        function(details) {
//            handleTabulexCookie(); 
//            return {cancel: true};},
//                {urls: ["*://fravaer.tabulex.net/"]},
//                ["blocking"]);


chrome.webRequest.onBeforeRequest.addListener(
        function(details) {
            handleTabulexCookie();
                           return {cancel: true}; 
        },
        {urls: ["*://fravaer.tabulex.net/*"]},
        ["blocking"]);


function handleTabulexCookie() {
    console.log("diller");
    chrome.cookies.remove({"url": "https://fravaer.tabulex.net", "name": "SRVID"}, function(deleted_cookie) { console.log(deleted_cookie);});
          }


// https://stackoverflow.com/questions/37896287/removing-the-cookies-before-page-load#comment63281822_37898410

