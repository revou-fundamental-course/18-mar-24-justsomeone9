function submitForm() {
    let form =document.forms['contact-form']
    let userName = form['user-name'].value;
    let userEmail = form['email'].value;
    let userDestination = form['destination'].value;

    if (userName == '') {
        alert("Periksa kembali isi form anda.")
    }
}

document.getElementById('submit-form').addEventListener('click', () =>submitForm());