let container =  document.querySelector('.main');
let darkCollor = document.querySelector('.header__darc-mode');
let title = document.querySelector('.timer__title');
let deadLine  = '2023-09-01';

function getTimeRemaining(endtime){
    const t = Date.parse(endtime) - Date.parse(new Date());
    const days = Math.floor(t / (1000 *60 *60 *24));
    const hours = Math.floor((t / (1000 *60 *60) % 24));
    const minutes = Math.floor((t / 1000 / 60) % 60);
    const seconds = Math.floor((t / 1000) %60);

    return {
        'total':t,
        'days': days,
        'hours':hours,
        'minutes':minutes,
        'seconds': seconds
    };
}

function getZero(num){
    if( num >= 0 && num < 10){
        return `0${num}`
    } else{
        return num
    }
 }

function setClock(endtime){
    let days = document.querySelector('.days');
    let hours = document.querySelector('.hours');
    let minutes = document.querySelector('.minutes');
    let seconds = document.querySelector('.seconds');
    let timeInterval = setInterval(updateClock, 1000);

    updateClock();

    function updateClock(){
        const t = getTimeRemaining(endtime);
            days.innerHTML = getZero(t.days);
            hours.innerHTML = getZero(t.hours);
            minutes.innerHTML = getZero(t.minutes);
            seconds.innerHTML = getZero(t.seconds);

            if(t.total <= 0){
                clearInterval(timeInterval);
            }
    }
}
setClock(deadLine)

darkCollor.addEventListener('click', (e)=>{
    console.dir(e.target);
    darkCollor.classList.toggle('active');
    container.classList.toggle('active'); 

    if(e.target && e.target.classList.contains('active')){
         console.log('Hello');
         title.style.color = '#b170fc';
         title.innerHTML ='Этот день скоро придёт'
         title.style.fontFamily = 'Ruslan Display', cursive;

    }else if
        (e.target && e.target.classList.contains('header__darc-mode')){
                console.log('Hello');
                title.style.color = 'white';
                title.innerHTML ='Отчёт времени до 1 сентября'
                title.style.fontFamily = 'Oswald', sans-serif;
    }
    
});





