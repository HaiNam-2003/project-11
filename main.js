const btnDel = document.querySelector('.del')
var toggle=document.getElementById('circle');
var body=document.querySelector('body');
var two=document.getElementById('two');
var one=document.getElementById('one');
var three=document.getElementById('three');


btnDel.addEventListener('click' ,() => {
    let inputValue = document.querySelector('#screen').value;
    inputValue = inputValue.substr(0, inputValue.length - 1);
    document.querySelector('#screen').value = inputValue;
})

var two=document.getElementById('two');
two.addEventListener('click',function(){
    body.classList.add('active1');
    body.classList.remove('active2');
    toggle.style.left='36%';
})

var one=document.getElementById('one');
one.addEventListener('click',function(){
    body.classList.remove('active1');
    body.classList.remove('active2');
    toggle.style.left='0';
})

var three=document.getElementById('three');
three.addEventListener('click',function(){
    body.classList.add('active2');
    body.classList.remove('active1');
    toggle.style.left='73%';
})
