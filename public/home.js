const bdy = document.getElementById("bdy");


for (let i = 1; i <= 4; i++) {
    // const element = array[i];
    
    care(i);
    

}
       
function care(i) {
    var car = document.createElement('div');
    var btn = document.createElement('button');
    var hsx = document.createElement('h6');

    btn.innerHTML = 'Click';  
    hsx.innerHTML = 'If using margin, gap between';

    car.id = 'car'; 
    car.style.backgroundImage= ` url("/backgrnd/${i}.png")`;
    var gren = document.createElement('div'); 
    gren.id = 'gren'; 

    gren.appendChild(btn);
    gren.appendChild(hsx);

    car.appendChild(gren);
    
    bdy.appendChild(car);
}


      
 


