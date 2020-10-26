'use strict';

const hostname = location.host;
// console.log(hostname);  Kan bruges til at finde hostname

switch(hostname) {
    case 'saml.personale.tabulex.dk':
       handleTabulex();
        break;
    case 'broker.unilogin.dk':
       handleUnilogin();
        break;
    default:
        break;   
}


function handleTabulex() {
    const buttons = document.getElementsByTagName("button"); // getElementsById hvis knappen har et id
    console.log (location);
    for (const button of buttons) {
        inspectTabulexButton(button);
    }
}
              
function inspectTabulexButton(button) {

    const onClickAttribute=button.getAttribute('onclick');

    if(onClickAttribute && onClickAttribute.includes('atlas.uni-login.dk')) {        
        hide();
        button.click();
    }
}

function handleUnilogin() {

    const forms = document.getElementsByTagName("form");
    if (forms.length > 0) {

        hide();

        const form = forms[0];
        const selectedIdp = document.createElement("input");
        selectedIdp.setAttribute("type", "hidden");
        selectedIdp.setAttribute("name", "selectedIdp");
        selectedIdp.setAttribute("value", "aarhus");
        form.appendChild(selectedIdp);
        form.submit();
    }
}

function hide() {
    const rootElement = document.documentElement;
    rootElement.hidden = true;
}
