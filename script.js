/*---------LIKE BUTTON-------------------*/

var btn = document.querySelector('.like_div button');
var span = document.querySelector('.like_div span');
var counter = 0;

btn.addEventListener('click', function(){
    counter++;
    span.innerText = counter;
});