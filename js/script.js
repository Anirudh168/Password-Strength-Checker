const pwd = document.getElementById('password');
const bx = document.querySelector('.bxs-hide');
const str = document.getElementById('strength');
const msg = document.getElementById('message');
const inputgrp = document.querySelector('.input-group');
msg.style.display="none";
pwd.addEventListener('input',checkPassword);
bx.addEventListener('click',toggle);
let res = 1;
function toggle()
{
    if(res==1)
    {
        document.getElementById('password').type ="text";
        bx.classList.replace('bxs-hide','bxs-show');
        res = 0;
    }
    else 
    {
        document.getElementById('password').type ="password";
        bx.classList.replace('bxs-show','bxs-hide');
        res = 1; 
    }
}
function checkPassword()
{
    if(pwd.value.length==0)
    {
        msg.style.display="none";
        str.innerHTML="";
        msg.style.color="#fff";
        inputgrp.style.borderColor="#fff";
    }
    else if(pwd.value.length<=4)
    {
        msg.style.display="block";
        str.innerHTML="weak";
        msg.style.color="red";
        inputgrp.style.borderColor="red";
    }
    else if(pwd.value.length>4&&pwd.value.length<=8)
    {
        msg.style.display="block";
        str.innerHTML="medium";
        msg.style.color="yellow";
        inputgrp.style.borderColor="yellow";
    }
    else if(pwd.value.length>8)
    {
        msg.style.display="block";
        str.innerHTML="strong";
        msg.style.color="green";
        inputgrp.style.borderColor="green";
    }
}