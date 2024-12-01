let el_moon = document.querySelector(".moon");
let el_i = document.querySelector(".ri-moon-line");
let el_body = document.querySelector("body");

el_moon.onclick = ()=> {
    el_i.classList.toggle("active");
    el_body.classList.toggle("light");
    localStorage.setItem("light", `${el_body.className}`);
}

el_body.className = localStorage.getItem("light");


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

// ================================[localStorage]=================================
let el_img = document.querySelector('img');
el_img.src = `.${localStorage.getItem('image')}`;
console.log(localStorage.getItem('image'));

// ================================[end_localStorage]=================================

// ================================[projects]=================================

if (localStorage.getItem('image') === './img/projects/p1.png') {
    let el_link_git = document.querySelector('.link_git');
    el_link_git.href = 'https://a3h3.github.io/E-commerce-website/';
    let el_imgs = document.querySelector('.imgs');
    let img = document.createElement('img');
    img.src = '../img/home_all_img/موقع منتجات/p2.png';
    el_imgs.appendChild(img);
    // ==============================================
    let img2 = document.createElement('img');
    img2.src = '../img/home_all_img/موقع منتجات/p3.png';
    el_imgs.appendChild(img2);
    // =============================================
    let img3 = document.createElement('img');
    img3.src = '../img/home_all_img/موقع منتجات/p4.png';
    el_imgs.appendChild(img3);
    // =============================================
    let img4 = document.createElement('img');
    img4.src = '../img/home_all_img/موقع منتجات/p5.png';
    el_imgs.appendChild(img4);
}
// ===================================================================================
if (localStorage.getItem('image') === './img/projects/p2.png') {
    let el_link_git = document.querySelector('.link_git');
    el_link_git.href = 'https://a3h3.github.io/Movies-website/';
    let el_imgs = document.querySelector('.imgs');
    let img = document.createElement('img');
    img.src = '../img/home_all_img/موقع افلام 2/p1.png';
    el_imgs.appendChild(img);
    // ==============================================
    let img2 = document.createElement('img');
    img2.src = '../img/home_all_img/موقع افلام 2/p3.png';
    el_imgs.appendChild(img2);
    // =============================================
    let img3 = document.createElement('img');
    img3.src = '../img/home_all_img/موقع افلام 2/p4.png';
    el_imgs.appendChild(img3);
     // =============================================
     let img4 = document.createElement('img');
     img4.src = '../img/home_all_img/موقع افلام 2/p5.png';
     el_imgs.appendChild(img4);
}
// ===================================================================================
if (localStorage.getItem('image') === './img/projects/p3.png') {
    let el_link_git = document.querySelector('.link_git');
    el_link_git.href = 'https://a3h3.github.io/Tourist-site/';
    // =============================================
    let el_imgs = document.querySelector('.imgs');
    let img = document.createElement('img');
    img.src = '../img/home_all_img/موقع سياحه/p1.png';
    el_imgs.appendChild(img);
    // ==============================================
    let img2 = document.createElement('img');
    img2.src = '../img/home_all_img/موقع سياحه/p2.png';
    el_imgs.appendChild(img2);
    // =============================================
    let img3 = document.createElement('img');
    img3.src = '../img/home_all_img/موقع سياحه/p3.png';
    el_imgs.appendChild(img3);
    // =============================================
    let img4 = document.createElement('img');
    img4.src = '../img/home_all_img/موقع سياحه/p4.png';
    el_imgs.appendChild(img4);
    // =============================================
    let img5 = document.createElement('img');
    img5.src = '../img/home_all_img/موقع سياحه/p5.png';
    el_imgs.appendChild(img5);
}
// =================================================================================
if (localStorage.getItem('image') === './img/projects/p4.png') {
    let el_link_git = document.querySelector('.link_git');
    el_link_git.href = '#';
    // =============================================
    let el_imgs = document.querySelector('.imgs');
    let img = document.createElement('img');
    img.src = '../img/projects/p1.png';
    el_imgs.appendChild(img);
    // ==============================================
    let img2 = document.createElement('img');
    img2.src = '../img/projects/p2.png';
    el_imgs.appendChild(img2);
    // =============================================
    let img3 = document.createElement('img');
    img3.src = '../img/projects/p3.png';
    el_imgs.appendChild(img3);
}
// =================================================================================
if (localStorage.getItem('image') === './img/projects/p5.png') {
    let el_link_git = document.querySelector('.link_git');
    el_link_git.href = '#';
    // =============================================
    let el_imgs = document.querySelector('.imgs');
    let img = document.createElement('img');
    img.src = '../img/projects/p1.png';
    el_imgs.appendChild(img);
    // ==============================================
    let img2 = document.createElement('img');
    img2.src = '../img/projects/p2.png';
    el_imgs.appendChild(img2);
    // =============================================
    let img3 = document.createElement('img');
    img3.src = '../img/projects/p3.png';
    el_imgs.appendChild(img3);
}

// =================================================================================
if (localStorage.getItem('image') === './img/projects/p6.png') {
    let el_link_git = document.querySelector('.link_git');
    el_link_git.href = '#';
    // =============================================
    let el_imgs = document.querySelector('.imgs');
    let img = document.createElement('img');
    img.src = '../img/projects/p1.png';
    el_imgs.appendChild(img);
    // ==============================================
    let img2 = document.createElement('img');
    img2.src = '../img/projects/p2.png';
    el_imgs.appendChild(img2);
    // =============================================
    let img3 = document.createElement('img');
    img3.src = '../img/projects/p3.png';
    el_imgs.appendChild(img3);
}

// =================================================================================

if (localStorage.getItem('image') === './img/projects/p7.png') {
    let el_link_git = document.querySelector('.link_git');
    el_link_git.href = '#';
    // =============================================
    let el_imgs = document.querySelector('.imgs');
    let img = document.createElement('img');
    img.src = '../img/projects/p1.png';
    el_imgs.appendChild(img);
    // ==============================================
    let img2 = document.createElement('img');
    img2.src = '../img/projects/p2.png';
    el_imgs.appendChild(img2);
    // =============================================
    let img3 = document.createElement('img');
    img3.src = '../img/projects/p3.png';
    el_imgs.appendChild(img3);
}

// =================================================================================

if (localStorage.getItem('image') === './img/projects/p8.png') {
    let el_link_git = document.querySelector('.link_git');
    el_link_git.href = '#';
    // =============================================
    let el_imgs = document.querySelector('.imgs');
    let img = document.createElement('img');
    img.src = '../img/projects/p1.png';
    el_imgs.appendChild(img);
    // ==============================================
    let img2 = document.createElement('img');
    img2.src = '../img/projects/p2.png';
    el_imgs.appendChild(img2);
    // =============================================
    let img3 = document.createElement('img');
    img3.src = '../img/projects/p3.png';
    el_imgs.appendChild(img3);
}

// =================================[imgs]============================================
let el_imgs_img = document.querySelectorAll('.imgs img')

let el_left_line = document.querySelector('.left_line');
let el_right_line = document.querySelector('.right_line');

let index = 0;

el_left_line.addEventListener('click', ()=>{
    remove()
    index--;
    if(index < 0){
        index = el_imgs_img.length - 1;
    }
    el_imgs_img[index].classList.add('active');
})

el_right_line.addEventListener('click', ()=>{
    remove()
    index++;
    if(index >= el_imgs_img.length){
        index = 0;
    }
    el_imgs_img[index].classList.add('active');
})


function remove(){
    el_imgs_img.forEach((el, index)=>{
        el.classList.remove('active')
    })
}