

const bdy = document.getElementById("bdy");




//  for (let i = 1; i <= 4; i++){
//     care(i);
// }
       
// function care(i) {
//     var jma3a = document.createElement('div');
//     var imgg = document.createElement('img');

//     var four = document.createElement('h4');
//     var six = document.createElement('h6');
//     var three = document.createElement('h3');

//     imgg.src=`/backgrnd/${i}.png`;


//     btn.innerHTML = "imad";  
//     btn.innerHTML = "PAINTER";  
//     hsx.innerHTML = 'Street , City ,Country';

//     jma3a.id = 'jma3a'; 

//     jma3a.appendChild(four);
//     jma3a.appendChild(six);
//     jma3a.appendChild(three);
    
//     bdy.appendChild(jma3a);
// }






























// document.addEventListener("DOMContentLoaded", function() {


// // تعريف المصفوفات
// const namess = ["lazhar", "imad", "yacin", "mohamed", "ilyas", "ayman", "lakhdar", "salim", "mokhtar", "djamal"];
// const images = ["/backgrnd/1.png", "/backgrnd/1.png", "/backgrnd/1.png", "/backgrnd/1.png", "/backgrnd/1.png", "/backgrnd/1.png", "/backgrnd/1.png", "/backgrnd/1.png", "/backgrnd/1.png", "/backgrnd/1.png"];


// function charg(nom, image) {
//     // البحث عن العنصر "bdy"
//     const bdy = document.getElementById("bdy");
   

//     // إنشاء العناصر وإعدادها
//     const jma3a = document.createElement('div');
//     const h4 = document.createElement('h4');
//     const h3 = document.createElement('h3');
//     const img = document.createElement('img');

//     jma3a.id = 'jma3a'; 
    
//     h4.innerHTML = nom;       // إضافة الاسم من المصفوفة
//     h3.innerHTML = "PAINTER"; // النص الثابت "PAINTER"
//     img.src = image;          // إضافة الصورة من المصفوفة
//     img.alt = "error";

//     jma3a.appendChild(img);
//     jma3a.appendChild(h4);
//     jma3a.appendChild(h3);

//     bdy.appendChild(jma3a);
// }

// // التأكد من أن العنصر "bdy" موجود في HTML قبل استدعاء الدالة
// for (let i = 0; i < 10; i++) {
//     charg(namess[i], images[i]);
// }

// })


















// for (let i = 1; i <= 4; i++) {
//     care(i);
// }
// function care(i) {
//     var car = document.createElement('div');
//     var btn = document.createElement('button');
//     var hsx = document.createElement('h6');
//     var gren = document.createElement('div'); 


//     btn.innerHTML = 'Click';  
//     // const ray=[1,2,3,4]
//     const ray = [{ num: "دهان" }, { num: "حلاف" }, { num: "بناء" }, { num: "سباك" }];
//     hsx.innerHTML = `${ray[i-1].num}`;

//     car.id = 'car'; 
//     car.style.backgroundImage= ` url("/backgrnd/${i}.png")`;
    
//     gren.id = 'gren'; 

//     gren.appendChild(btn);
//     gren.appendChild(hsx);
//     car.appendChild(gren);
//     bdy.appendChild(car);
// }

// -------------------------------------------------------------------------------------------------


































document.addEventListener("DOMContentLoaded", function() {
    TakeColr();
});

const a1a = document.getElementById("a1");
const a2a = document.getElementById("a2");
const a3a = document.getElementById("a3");
const a4a = document.getElementById("a4");

function TakeColr() {
   let lnk =  window.location.href ;
   
    if (lnk === "http://localhost:3000/group?") {
        a1a.style.backgroundColor="#39e19b";
    } 
    if (lnk === "https://amer-3.onrender.com/groupHalak?") {
        a2a.style.backgroundColor="#39e19b";
        a1a.style.backgroundColor="#1b1b1c";
    }
    if (lnk === "https://amer-3.onrender.com/groupSaback?") {
        a3a.style.backgroundColor="#39e19b";
        a1a.style.backgroundColor="#1b1b1c";
    }
   
    if (lnk === "https://amer-3.onrender.com/groupDahan?") {
        a4a.style.backgroundColor="#39e19b";
        a1a.style.backgroundColor="#1b1b1c";
    }
}