window.onscroll = function() {
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
        document.getElementById('navbar').classList.add('scrolled');
    }
    else {
        document.getElementById('navbar').classList.remove('scrolled');
    }
}

AOS.init({
    duration: 800,
});

// link twitter
function twitter() {
    location.href='https://twitter.com/heiirams';
}

// link instagram
function instagram() {
    location.href='https://www.instagram.com/adinramaar_/';
}

// link linkedin
function linkedin() {
    location.href='https://www.linkedin.com/in/adin-rama-ariyanto-putra-671612234/';
}

// link github
function github() {
    location.href='https://github.com/adinramaar20';
}

// send to my email
function sendEmail() {
    Email.send({
        SecureToken: "98bcde45-65c9-4f42-908b-d08ed0785b58",
        To : "adinramaariyantoputra@gmail.com",
        From : document.getElementById("email").value,
        Subject : "New Contact From Enquiry",
        Body : "Name : " + document.getElementById("name").value
            + "<br>Telp : " + document.getElementById("phone").value
            + "<br>Email : " + document.getElementById("email").value
            + "<br>Subject : " + document.getElementById("subject").value
            + "<br>Messange : " + document.getElementById("message").value
    }).then(
      message => alert("Message sent succesfully")
    );
}