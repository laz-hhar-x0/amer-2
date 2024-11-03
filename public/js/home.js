// const information =document.getElementById("informationHone");

// information.innerHTML
// document.getElementById("informationHone").innerHTML = `
// ${userData[0].emil} :  ${userData[1].pas}
// `;




// import userData from '../../app';

// console.log("User Data:", userData);
// console.log("User Data:", userData);
// console.log("User Data:", userData);
// console.log("User Data:", userData);














const bdy = document.getElementById("bdy");
bdy.addEventListener('click', function() {
    window.location.href = "http://localhost:3000/home";
});












for (let i = 1; i <= 4; i++) {
    care(i);
}




function care(i) {
    var car = document.createElement('div');
    var btn = document.createElement('button');
    var hsx = document.createElement('h6');
    var gren = document.createElement('div'); 


    btn.innerHTML = 'Click';  
    // const ray=[1,2,3,4]
    const ray = [{ num: "دهان" }, { num: "حلاف" }, { num: "بناء" }, { num: "سباك" }];
    hsx.innerHTML = `${ray[i-1].num}`;

    car.id = 'car'; 
    car.style.backgroundImage= ` url("/backgrnd/${i}.png")`;
    
    gren.id = 'gren'; 

    gren.appendChild(btn);
    gren.appendChild(hsx);
    car.appendChild(gren);
    bdy.appendChild(car);
}
      
//  ---------------------------------------------------------------------------------------------------


