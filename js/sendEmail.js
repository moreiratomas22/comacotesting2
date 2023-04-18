const sendEmailButton = document.getElementById("sendEmailButton")


const sendEmail = (e) => {
    e.preventDefault()
    const from_name = document.getElementById("name").value
    const from_email = document.getElementById("email").value
    const subject = document.getElementById("subject").value
    const message = document.getElementById("message").value
    if (!from_email || !from_name || !subject || !message) {
        Swal.fire(
            'Por favor, complete todos los campos antes de enviar el email',
            "",
            'error'
        )
    } else {
        var templateParams = {
            from_name: from_name,
            from_email: from_email,
            subject: subject,
            message: message
        };
        emailjs.send('service_yhu5xkv', 'template_j7adplr', templateParams)
            .then(function (response) {
                console.log('SUCCESS!', response.status, response.text);
                Swal.fire(
                    'Mensaje enviado con éxito',
                    "",
                    'success'
                )
            }, function (error) {
                console.log('FAILED...', error);
                alert("Ha ocurrido un error al intentar enviar el correr, por favor intentelo más tarde")
            });
    }
}


sendEmailButton.addEventListener("click", sendEmail)