function launchBrowser(browserName){
    if (browserName === "Chrome") {
        console.log("Chrome Browser");
    } else if(browserName === "Edge"){
        console.log("Edge Browser");
    } else {
        console.log("Other than chrome or Edge");
    }
}

function runTests(testType){
    switch (testType) {
        case "smoke":
            console.log("Running "+ testType +" testing");
            break;
        case "sanity":
            console.log("Running "+ testType +" testing");
            break;
        case "regression":
            console.log("Running "+ testType +" testing");
            break;
    
        default:
            console.log("Running smoke testing by default");
            break;
    }
}

launchBrowser ("Chrome");
runTests("regression");
runTests();