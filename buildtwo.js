function showNav() {
    "use strict";
        let a = document.getElementById('theNav');
    if(a.style.visibility == 'visible') {
       	a.style.height = '0em';
        a.style.visibility = 'hidden';
	    } else {
        a.style.height = '8em';
        a.style.visibility = "visible";
        }
}
function hideNav() {
    "use strict";
    let c = document.getElementById('theNav');
    c.style.visibility = 'hidden';
    c.style.height = '0px';
}
