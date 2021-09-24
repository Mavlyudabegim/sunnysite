const toggleBtn=document.querySelector('.toggle-btn');
const ul=document.querySelector('.nav-list');

toggleBtn.addEventListener('click', function(){
    ul.classList.toggle('show');
})