console.log("okk");

$(document).ready(function (){

    $('.main-btn').click(function(event) {
        
        console.log("Clicked")

        var name=document.contact.name.value;
		var email=document.contact.email.value;
		var subject=document.contact.subject.value;
		var message=document.contact.message.value;
        
        if( (name == "") || (name == "undefined") )
		{
            event.preventDefault();
			alert("Inserire il nome.");
			document.contact.name.focus();
        }
        else
        if( (email.indexOf("@") == (-1)) || (email == "") || (email == "undefined") )
		{
            event.preventDefault();
			alert("Inserire un indirizzo email valido.");
			document.contact.email.focus();
		}
		else
		if( (subject == "") || (subject == "undefined") )
		{
            event.preventDefault();
			alert("Inserire il soggetto della mail.");
			document.contact.subject.focus();
		}
		else
		if( (message == "") || (message == "undefined") )
		{
            event.preventDefault();
			alert("Inserire testo del messaggio.");
			document.contact.message.focus();
		}
    })

})