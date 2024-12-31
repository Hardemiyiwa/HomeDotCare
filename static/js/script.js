
var nav = document.querySelector('nav');
window.addEventListener('scroll', function () {
    if(window.pageYOffset > 30){
        nav.classList.add('scrolled')
    }else{
        nav.classList.remove('scrolled')
    }
})

document.getElementById('myToggler').addEventListener('click', function(){
    this.classList.toggle('active')
})

// Highlight the current date
const days = ["Sun", "Mon", "Tue", "wed", "Thu", "Fri", "Sat", "Sun"];
const currentDay = new Date().getDate();

const hourList = document.getElementById('hourList').children;
for (const item of hourList) {
    if (item.querySelector('.day').textContent === days[currentDay]) {
        item.classList.add('highlight');
    }
}