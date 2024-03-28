function submitForm() {
    let form =document.forms['contact-form']
    let userName = form['user-name'].value;
    let userEmail = form['email'].value;
    let userDestination = form['destination'].value;

    let validationNumber = 0;

    if (userName == '') {
        validationNumber = 1;
    }

    if (userEmail == '') {
        validationNumber = 2;
    }

    if (userEmail == '' && userName == '') {
        validationNumber = 3;
    }

    switch (validationNumber) {
        case 1 :
            alert('Isi bagian Username');
            break;
        case 2:
            alert('Isi bagian Email');
            break;
        case 3:
            alert("Isi bagian Email dan Username");
        }
    }

document.getElementById('submit-form').addEventListener('click', () =>submitForm());

// Image Slider Script

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs(slideIndex +=n);
}

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("feedback-img");
    if (n > x.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = x.length;
    }

    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }

    x[slideIndex-1].style.display = "block";
    setTimeout(showDivs, 2000);
}