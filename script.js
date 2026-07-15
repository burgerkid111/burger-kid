
const nav = document.querySelector("nav");

/*==================================================

MENU COLOR

==================================================*/

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(!entry.isIntersecting) return;

        if(
            entry.target.id==="events" ||
            entry.target.id==="past-lives"
        ){

            nav.classList.add("blue");

        }else{

            nav.classList.remove("blue");

        }

    });

},{
    threshold:.5
});

document.querySelectorAll("section").forEach(section=>{

    observer.observe(section);

});


/*==================================================

LIGHTBOX

==================================================*/

const flyers=document.querySelectorAll(".flyer");
const lightbox=document.querySelector(".lightbox");
const lightboxImg=document.querySelector(".lightbox-img");
const close=document.querySelector(".close");

flyers.forEach(flyer=>{

    flyer.addEventListener("click",()=>{

        lightbox.classList.add("active");
        lightboxImg.src=flyer.src;

    });

});

close.addEventListener("click",()=>{

    lightbox.classList.remove("active");

});

lightbox.addEventListener("click",(e)=>{

    if(e.target===lightbox){

        lightbox.classList.remove("active");

    }

});

document.addEventListener("keydown",(e)=>{

    if(e.key==="Escape"){

        lightbox.classList.remove("active");

    }

});


/*==================================================

RECORD DROP GALLERY

==================================================*/

document.querySelectorAll(".record-image").forEach(record=>{

    const image=record.querySelector(".gallery");

    if(!image) return;

    const photos=image.dataset.images.split(",");

    const dots=record.querySelectorAll(".record-dots span");

    let current=0;

    record.addEventListener("click",()=>{

        current=(current+1)%photos.length;

        image.src=photos[current];

        dots.forEach(dot=>dot.classList.remove("active"));

        dots[current].classList.add("active");

    });

});