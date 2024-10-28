const bdy = document.getElementById("bdy");



for( let i = 1; i <5 ; i++ ){


}


 for (let i = 1; i <= 4; i++){
    care(i);
}
       
function care(i) {
    var jma3a = document.createElement('div');
    var imgg = document.createElement('img');

    var four = document.createElement('h4');
    var six = document.createElement('h6');
    var three = document.createElement('h3');

    imgg.src=`/backgrnd/${i}.png`;


    btn.innerHTML = "imad";  
    btn.innerHTML = "PAINTER";  
    hsx.innerHTML = 'Street , City ,Country';

    jma3a.id = 'jma3a'; 

    jma3a.appendChild(four);
    jma3a.appendChild(six);
    jma3a.appendChild(three);
    
    bdy.appendChild(jma3a);
}

