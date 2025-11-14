let h1=document.querySelector('h1');
let increase=document.querySelector('#increase');
let decrease=document.querySelector('#decrease');
let re=document.querySelector('#re');

let a=0;

increase.addEventListener('click',function(){

    a++;
    h1.textContent=a;
});

decrease.addEventListener('click',function(){
if(a>0)
    a--;
    h1.textContent=a;
});

re.addEventListener('click',function(){
h1.textContent=0;
});