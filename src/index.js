import { body } from 'msw/lib/types/context';
import './less/index.less'

// Örnek bir event kullanımı aşağıdadır. Çalıştırmak için comment dışına alın
// document.querySelector("h1").addEventListener("click",function(e){
// alert("Bana tıkladın!")
// });


// Kodlar buraya gelecek!

document.querySelectorAll("img").forEach(resim => {
    resim.addEventListener("mouseover", (event) => {
        event.target.style.filter = "grayscale(100%)";
        // resim.style.filter= "grayscale(100%)";
    })
    resim.addEventListener("mouseout", (event) => {
        event.target.style.filter = "grayscale(0)";
        // resim.style.filter= "grayscale(100%)";
    })
})

window.addEventListener("load", function (event) {

    setTimeout(() => {
        document.querySelector("body").style.background = "red";
    }, "2000");
})

images.forEach(resim => {
    resim.addEventListener("click", (event) => {
        event.target.style.width="50%"
    })

    resim.addEventListener("dblclick", (event) => {
        event.target.style.width="100%"
    })
})

document.addEventListener("keydown", (event) => {
    console.log("keydown");

        document.querySelectorAll("img").forEach(resim=>{
            resim.removeEventListener("click", ()=>{
          })
     })
})

window.onscroll =function (event){
    const scroll =window.pageYOffset;
    if(scroll< 300){
        body.style.backgroundColor= "#fff";
        images.forEach(image=>{
            image.style.borderRadius =0 
        });
    }
    else if (scroll >= 300 && scroll < 600 ) {
        body.style.backgroundColor = '#4bbeab8f';
        images.forEach(image=> {
            image.style.borderRadius = "100%";
        });
    } else {
        body.style.backgroundColor = '#4032c98f';
  }
};

window.addEventListener("resize", (e)=>{
    if(window.outerWidth< 600){
    body.style.backgroundColor= "red"
}});
