







const  cntc= document.getElementById("car1");
cntc.addEventListener('click', function() {
    window.location.href = "https://amer-3.onrender.com/group?";
});

const  cntc1= document.getElementById("car2");
cntc1.addEventListener('click', function() {
    window.location.href = "https://lazhar.onrender.com/groupHalak?";
});

const  cntc2= document.getElementById("car3");
cntc2.addEventListener('click', function() {
    window.location.href = "https://lazhar.onrender.com/groupSaback?";
});

const  cntc3= document.getElementById("car4");
cntc3.addEventListener('click', function() {
    window.location.href = "lazhar.onrender.com/groupDahan?";
    window.location.href = "https://lazhar.onrender.com/groupDahan?";

});



// for (let i = 1; i <= 6; i++) {
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
      
//  ---------------------------------------------------------------------------------------------------




  
async function loginUser (email, password) {
    const response = await fetch('/Login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });
  
    const data = await response.json();
  
    if (data.success) {
      // Redirect to home page and pass the userName
      localStorage.setItem('userName', data.userName); // Store userName in localStorage
      window.location.href = data.redirectUrl; // Redirect to home
    } else {
      alert(data.message); // Display error message
    }
  }