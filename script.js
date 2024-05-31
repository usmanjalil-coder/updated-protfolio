let mobileDark = document.getElementById('reponsiveDarkMoon');
const darkmode = () => {
    // for bg color of body and navbar 
    document.querySelectorAll('.dark').forEach(item => item.classList.toggle('bg-dark-color'))

    document.querySelectorAll('.dark-mode-white-text').forEach(item => item.classList.toggle('text-light'))

    // for tools and technlogy cards 
    document.querySelectorAll('.tools-card').forEach(item => item.classList.toggle('dark-mode-shadow'))

    document.querySelectorAll('.projects-card').forEach(item => item.classList.toggle('dark-mode-shadow'))
    // 150, 226

    document.querySelectorAll('input,textarea').forEach(item => item.classList.toggle('bg-transparent'));
    // swal("Here's a message!", "It's pretty, isn't it?")
}

// reponsive butten for mobile
mobileDark.addEventListener('click', () => {
    darkmode();
    mobileDark.classList.toggle('sunWhite')
    if (mobileDark.classList.contains('bi-moon-stars-fill')) {
        mobileDark.classList.remove('bi-moon-stars-fill')
        mobileDark.classList.add('bi-brightness-high-fill')
    }
    else {
        mobileDark.classList.add('bi-moon-stars-fill')
        mobileDark.classList.remove('bi-brightness-high-fill')
    }

})

darkMoon.addEventListener('click', () => {
    darkmode();
    darkMoon.classList.toggle('sunWhite')
    if (darkMoon.classList.contains('bi-moon-stars-fill')) {
        darkMoon.classList.remove('bi-moon-stars-fill')
        darkMoon.classList.add('bi-brightness-high-fill')
    }
    else {
        darkMoon.classList.add('bi-moon-stars-fill')
        darkMoon.classList.remove('bi-brightness-high-fill')
    }
})

// For email 
let buttonImage = document.getElementById('button-image')
let buttonP = document.getElementById('button-p')
let button = document.getElementById('bttn')
const email_send = () => {
    buttonImage.classList.toggle('display-none')
    buttonP.classList.toggle('display-none')
    button.classList.toggle('click-bg')
    const params = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value
    }

    const serviceId = "service_p86bzei";
    const templateId = "template_awz67pi";

    emailjs.send(serviceId, templateId, params).then(response => {
        document.getElementById('name').value = ""
        document.getElementById('email').value = ""
        document.getElementById('subject').value = ""
        document.getElementById('message').value = ""
        buttonImage.classList.toggle('display-none')
        buttonP.classList.toggle('display-none')
        button.classList.toggle('click-bg')

        // showToast('Your Mail send successfully','success')
        swal("Success!", "Your Mail sended!", "success")
        console.log(response);
    }).catch(() => {
        buttonImage.classList.toggle('display-none')
        buttonP.classList.toggle('display-none')
        button.classList.toggle('click-bg')

    })
}

let navLinks = document.querySelectorAll('li a');
let sections = document.querySelectorAll('section');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 170;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                document.querySelector('li a[href*=' + id + ']').classList.add('active');
            })
        }
    })
}

// toast 
function showToast() {
    Toastify({
        text: "Downloading Start......!",
        duration: 4000,
        destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "center", // `left`, `center` or `right`
        backgroundColor: "linear-gradient(to right, #00b09b, #9333ea)",
        stopOnFocus: true, // Prevents dismissing of toast on hover
        onClick: function () { } // Callback after click
    }).showToast();
}

document.getElementById('download-btn').addEventListener('click', () => {
    document.getElementById('download-a').click();
    showToast()
})

