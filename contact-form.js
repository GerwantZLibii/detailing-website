document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const subject = document.getElementById('subject').value;
    const car_info = document.getElementById('brand').value;
    const message = document.getElementById('message').value;

    const mailtoLink = `mailto:pprokopski@outlook.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent('Imię i nazwisko: ' + name + '\nEmail: ' + email + '\nNr tel: ' + phone + '\nMarka i model auta: ' + car_info + '\n\n' + message)}`;

    window.location.href = mailtoLink;
});