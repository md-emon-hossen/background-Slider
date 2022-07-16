var add=document.querySelector(".add");
var remove=document.querySelector(".remove");
var show=document.querySelector(".show");
var img=['img/E-Commerce-Website-Development-company-In-India.jpg',"img/pexels-photo-399161.jpeg","img/pngtree-3d-rendering-for-display-product-banner-on-website-image_453005.jpg","img/pngtree-pink-background-isometric-online-shopping-concept-image_662223.jpg"];
var i=0;
add.addEventListener("click",()=>{

adding();
})
remove.addEventListener("click",()=>{
  
    i--;
    if(i <0){
        i=(img.length)-1;
    }
    show.src=img[i];
});

function adding(){
    i++;
if(i>(img.length)-1){
    i=0;
}
show.src=img[i];
}

setInterval(adding,3000);
