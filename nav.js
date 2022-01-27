var menu = document.getElementById("menu");
var nav = document.getElementById("nav");
var exit = document.getElementById("exit");

menu.addEventListener('click', function(e){
    nav.classList.toggle("zombie");
    e.preventDefault();
});

exit.addEventListener('click', (e) => {
    nav.classList.add("zombie");
    e.preventDefault();
});

/*
function toogle(){
        nav.classList.toggle("zombie");
        e.preventDefault();
}
*/
const darkk = document.querySelector(".moon").addEventListener("click", () => {
    document.body.classList.toggle('dark');
});
const sunny = document.querySelector('.sun').addEventListener('click', () => {
    document.body.classList.toggle('dark');
});