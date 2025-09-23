const browserName ="chrome"
function getBrowserName() {
    if (browserName =="chrome") {

        var browserName = "New Chrome";
        console.log("insdie if block using var:",browserName);   
     }
    console.log("outside if block using var:", browserName);
}
getBrowserName(browserName);
console.log("gobal browserName(const):", browserName);

const browserNameLet = "Firefox"
function getBrowserNameLet(browserNameLet) {
    if (browserNameLet == "Firefox") {
         let browserNameLet = "New Firefox";

        
    }
    console.log("Outside the block"+browserNameLet);  
}
getBrowserNameLet(browserNameLet);
console.log("outside the block"+getBrowserNameLet);
