
/* ========================toggle icon nav bar ================================*/
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
    menuIcon.classList.toggle("bx-x");
    navbar.classList.toggle('active');
}



/* ========================scroll sections avtive  link ================================*/

let section = document.querySelectorAll("section")
let navLinks = document.querySelectorAll(".header nav a");

window.onscroll = () => {
    section.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute("id")

        if(top>= offset && top < offset + height) {
            navLinks.forEach( link => {
                link.classList.remove("active")
                let terget = document.querySelector(".header nav a[href*=" + id +"]");
                if(terget) {
                    terget.classList.add("active");
                }
            });
        };
    } );

/* ========================styki navebar ================================*/
    let header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 100);


/* ======================== remove toggle icon navbar when click  ================================*/


    menuIcon.classList.remove("bx-x");
    navbar.classList.remove('active'); 

};


/* ======================== scroll revall  ================================*/
  ScrollReveal({
    // reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200 

  });

  ScrollReveal().reveal('.home-content, .heading ', {origin: 'top'});
  ScrollReveal().reveal('.home-content h1 , .about-img ', {origin: 'left'});
  ScrollReveal().reveal('.home-content p , .about-content ', {origin: 'right'});
  ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form ', {origin: 'bottom'});

  /*================ typed js =======================*/

    const typed = new Typed('.multiple-text', {
        strings: ['Graphic Desingner', 'Apps Developer', 'Web Developer'],
        typeSpeed: 100,
        backSpeed: 100, 
        backDelay: 1000,
        loop: true,
    } )
  

/* ======================== dark light mode  ================================*/// Step 1: Initialize EmailJS with your Public Key
// Step 1: Initialize EmailJS with your public key

// 

emailjs.init("pyheYxKkwMWxmrgP3");

function sendMessage() {
    const serviceId = "alom_123";
    const templateId = "template_7b7p4xt";

    const params = {
        sendName: document.getElementById("fullName").value,
        sendEmail: document.getElementById("gmail").value,
        sendmessage: document.getElementById("message").value,
        sendNumber: document.getElementById("number").value,
        sendSubject: document.getElementById("subject").value
    };

    emailjs.send(serviceId, templateId, params)
        .then(res => {
            alert("Thank you, " + params["sendName"] + ". Your message has been sent successfully.");
            document.getElementById("contact-form").reset(); // ফর্ম ক্লিয়ার করা
        })
        .catch(err => {
            alert("Failed to send message. Please try again later.");
            console.error("Error sending email:", err);
        });
}

// ফর্ম সাবমিট ইভেন্ট হ্যান্ডলার
document.getElementById("contact-form").addEventListener("submit", function(e) {
    e.preventDefault();
    sendMessage();
});


// ==================== button toggling ================

// function redMore() {
//     window.location.href ="/aboutme";
// }
// function redMoreGraf() {
//     window.location.href ="/aboutme#graphic";
// }
// function redMoreWeb() {
//     window.location.href ="/aboutme#web";
// }
// function redMoreapps() {
//     window.location.href ="/aboutme#apps";
// }





