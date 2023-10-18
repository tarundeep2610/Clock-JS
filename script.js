const sec_hand= document.querySelector('#sec-hand');
const hour_hand= document.querySelector('#hour-hand');
const min_hand= document.querySelector('#min-hand');

function updateClock(){
    const now= new Date();

    console.log(now.getMinutes()+" "+now.getHours());
    const seconds= now.getSeconds();
    const secondDeg= seconds*6 + 90;

    sec_hand.style.transform= `rotate(${secondDeg}deg)`;

    const minutes= now.getMinutes();
    const minDeg= minutes*6 +90;
    min_hand.style.transform=  `rotate(${minDeg}deg)`;

    const hours= now.getHours();
    const hourDeg= (hours/12)*360 +90;
    hour_hand.style.transform=  `rotate(${hourDeg}deg)`;
}

setInterval(updateClock,1000);