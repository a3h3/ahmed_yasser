let el_nav = document.querySelectorAll("nav a");
let el_section_container = document.querySelectorAll("section");
let bg_active = document.querySelectorAll(".bg");
let el_home__article = document.querySelectorAll('.home__article');

el_nav.forEach((link, index)=> {
    link.addEventListener("click", ()=> {
        remove()
        link.classList.add("active");
        // =========================
        el_section_container[index].classList.add("active");
        bg_active[index].classList.add("active");
    })
    // =========================
    el_home__article.forEach((el)=> {
        el.addEventListener("click", ()=> {
            remove()
            el_nav[3].classList.add("active");
            el_section_container[3].classList.add("active");
            bg_active[3].classList.add("active");
        })  
    })
})

function remove() {
    el_nav.forEach((link, index)=> {
        link.classList.remove("active");
        el_section_container[index].classList.remove("active");
        bg_active[index].classList.remove("active");
    })
}

// =====================================

let el_moon = document.querySelector(".moon");
let el_i = document.querySelector(".ri-moon-line");
let el_body = document.querySelector("body");

el_moon.onclick = ()=> {
    el_i.classList.toggle("active");
    el_body.classList.toggle("light");
    localStorage.setItem("light", `${el_body.className}`);
}

el_body.className = localStorage.getItem("light");
// =====================================================================

// let el_nav_scroll = document.querySelector("nav");
// window.addEventListener("scroll", () => {
//     if (window.scrollY > 20) {
//         el_nav_scroll.style.background = 'none';
//     } else {
//         el_nav_scroll.style.background = "var(--bg_nav_2)";
//     }
//   });

// ====================================================================
let el_about_cards = document.querySelectorAll('.about_cards .card');
let el_about_header = document.querySelectorAll('.about_header .about_information');

el_about_cards.forEach((card, index)=> {
    card.addEventListener('click', ()=> {
        remove_active();
        el_about_cards[index].classList.add('active');
        el_about_header[index].classList.add('active');
    })
})

function remove_active() {
    el_about_cards.forEach((card)=> {
        card.classList.remove('active');
    })
    el_about_header.forEach((header)=> {
        header.classList.remove('active');
    })
}


// =================================[cursor]=======================================
let el_inner_cursor = document.querySelector('.inner_cursor');
let el_outer_cursor = document.querySelector('.outer_cursor');

document.addEventListener('mousemove', moveCursor);

function moveCursor(e) {
    let x = e.clientX;
    let y = e.clientY;
    
    el_inner_cursor.style.left = `${x}px`;
    el_inner_cursor.style.top = `${y}px`;
    el_outer_cursor.style.left = `${x}px`;
    el_outer_cursor.style.top = `${y}px`;
}

let el_links = Array.from(document.querySelectorAll('a,img,span,i'));

el_links.forEach((link)=> {
    link.addEventListener('mouseover', ()=> {
        el_inner_cursor.classList.add('grow');
    })
    link.addEventListener('mouseleave', ()=> {
        el_inner_cursor.classList.remove('grow');
    })
});

// ==============================[end_cursor]======================================

// ==============================[start_hover]==================================
let el_education__card = document.querySelectorAll('.education__card');
let bg_education_span = document.querySelectorAll('.bg_education span');
el_education__card.forEach((card, index)=> {
    card.addEventListener('mouseover', ()=> {
        bg_education_span[index].classList.add('active');
    })
    card.addEventListener('mouseleave', ()=> {
        bg_education_span[index].classList.remove('active');
    })
});
// ==============================[end_hover]====================================

// ==============================[start_certificate]====================================
let el_certificate__active1 = document.querySelectorAll('.certificate__active1');
let el_education__btn = document.querySelectorAll('.education__btn_cert');
el_education__btn.forEach((el, num)=> {
    el.addEventListener('click', ()=> {
        el_certificate__active1[num].classList.add('active');
        document.querySelector('body').classList.add('body_scroll');
    });
})
let el_certificate__close = document.querySelectorAll('.certificate_close');
document.querySelector('body').classList.remove('body_scroll');
el_certificate__close.forEach((el, num)=> {
    el.addEventListener('click', ()=> {
        el_certificate__active1[num].classList.remove('active');
        document.querySelector('body').classList.remove('body_scroll');
    });
})
// ==============================[end_certificate]======================================

let swiper_home = new Swiper('.home__swiper', {
    loop: true,
    spaceBetween: -24, 
    grabCursor: true,
    slidesPerView: 'auto',
    centeredSlides: 'auto',

    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },

    breakpoints: {
        1220: {
            spaceBetween: -32, // قيمة إيجابية لنقاط الانهيار
        },
    },
});

// =====================================[filter-buttons]=============================================

let filterButtons = document.querySelectorAll("#filter-buttons button");
let filterableCards = document.querySelectorAll("#filterable-cards .card");

// Function to filter cards based on filter buttons
let filterCards = (e) => {
    document.querySelector("#filter-buttons .active").classList.remove("active");
    e.target.classList.add("active");

    filterableCards.forEach(card => {
        // show the card if it matches the clicked filter or show all cards if "all" filter is clicked
        if(card.dataset.name === e.target.dataset.filter || e.target.dataset.filter === "all") {
            return card.classList.replace("hide", "show");
        }
        card.classList.add("hide");
    });
}
filterButtons.forEach(button => button.addEventListener("click", filterCards));
// =====================================[filter-buttons]=============================================

/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById('contact-form'),
      contactMessage = document.getElementById('contact-message');

const sendEmail = (e) => {
    e.preventDefault();

    // serviceID - templateID - #form - publicKey
    emailjs.sendForm('service_3b7oo1h', 'template_81pl8cd', '#contact-form', 'ahDo2vss8rYuTbxgf')
    .then(() => {
        // Show sent message
        contactMessage.textContent = 'Message sent successfully ✅'

        // Remove message after five seconds
        setTimeout(() => {
            contactMessage.textContent = ''
        }, 5000)

        // Clear input fields
        contactForm.reset()
    }, () => {
        // Show error message
        contactMessage.textContent = 'Message not sent (service error) ❌'
    })
}
contactForm.addEventListener('submit', sendEmail)