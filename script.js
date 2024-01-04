let password = document.getElementById('password');
let message = document.getElementById('message');
let strength = document.getElementById('strength');


password.addEventListener('input', ()=>{
    if(password.value.lenght > 0){
        message.style.display = 'block';
    }else{
        message.style.display = 'none';
    }
    if(password.value.lenght < 4){
        strength.innerHTML = 'weak';
    }else if(password.value.lenght >= 4 && password.value.lenght <= 8){
        strength.innerHTML = 'medium';
    }else{
        strength.innerHTML = 'strong';
    }
})