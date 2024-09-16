const fabars=document.querySelector('.fa-bars');
const navmenu=document.querySelector('.nav_menu');

const navitem=document.querySelectorAll('.nav-item');

fabars.addEventListener("click", ()=>{
    navmenu.classList.toggle('clasemenu');
});

navitem.forEach(function(item){
    item.addEventListener('click',()=>{
        navmenu.classList.remove('clasemenu');
    });
});