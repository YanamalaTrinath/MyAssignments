function Mail(HRMail , TeamLeadMail) {
    
    console.log(`Checking the Mail name`);

    setTimeout(() => {
        console.log(`Email ${HRMail}is availble`);
        TeamLeadMail()
    }, 2000);
    
}
function TeamLeadMail() {
    console.log(`Rejected mail`);
}
Mail("Planned leave",TeamLeadMail)