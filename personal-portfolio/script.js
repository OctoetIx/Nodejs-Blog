let ul = document.querySelector('.navbar');
let li = document.querySelectorAll('a');

li.forEach(el =>{
    el.addEventListener('click',()=>{
        ul.querySelector('.active').classList.remove('active');
        el.classList.add('active')
    })
})