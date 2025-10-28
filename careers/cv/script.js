document.getElementById("cv-form").addEventListener("submit", function(e){
    e.preventDefault(); 

    emailjs.sendForm("service_5n2h5gs", "template_f9cg8ja", this)
    .then(function(response){
        alert("CV sent successfully!");
        console.log(response);
    }, function(error){
        alert("Failed to send CV.");
        console.error(error);
    });
});
