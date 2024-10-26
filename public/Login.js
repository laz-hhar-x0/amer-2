const incrct = document.getElementById("incrct");
const clk = document.getElementById("clk");



function firivi(){
    
    const namee ='admin';
    const pass = "admin";

    const one = document.getElementById("one").value;
    const two = document.getElementById("two").value;

   

   if ( (one === namee) && (two === pass ) ) {
        window.location.href = "http://localhost:3000/home";
    }else{
       alert(" 😒 YOUR NAME OR PASSWORD IS INCORRECTE 😒 .");
    }
}








