document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Verhindert das Standardverhalten des Formulars

    // Formulardaten sammeln
    const formData = new FormData(this);

    // Formulardaten an Formspree senden
    fetch(this.action, {
        method: this.method,
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
    })
    .then(response => {
        if (response.ok) {
            alert('Vielen Dank für deine Nachricht! Ich werde mich so schnell wie möglich bei dir melden.');
            this.reset(); // Formular zurücksetzen
        } else {
            alert('Es gab ein Problem beim Senden deiner Nachricht. Bitte versuche es später erneut.');
        }
    })
    .catch(error => {
        alert('Es gab ein Problem beim Senden deiner Nachricht. Bitte versuche es später erneut.');
    });
});
