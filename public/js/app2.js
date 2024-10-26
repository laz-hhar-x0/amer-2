const contactform = document.querySelector('.form-container');


    let namee = document.getElementById('name');
    let email = document.getElementById('email');
    let subject = document.getElementById('subject');
    let message = document.getElementById('message');

    contactform.addEventListener('submit',(e)=>{
    e.preventDefault();

    let formData = {
        name : namee.value ,
        email : email.value ,
        subject : subject.value ,
        message : message.value 
    };


    let xhr = new XMLHttpRequest();
    xhr.open('POST', '/Contact');
    xhr.setRequestHeader('content-type','application/json'); 
    xhr.onload = function(){
        console.log(xhr.responseText);
        if(xhr.responseText == 'success'){
            alert('email sent');
            namee.value = '';
            email.value = '';
            subject.value = '';
            message.value = '';
        }else{
            alert('email not sent somthin is wrong .... \n');
        }
    }

     xhr.send(JSON.stringify(formData));
})


