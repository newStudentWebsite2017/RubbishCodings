var fa = setInterval(Movenum,1000);

var daynum_ten = document.querySelector('#day-ten');
var daynum_one = document.querySelector('#day-one');
var hournum_ten = document.querySelector('#hour-ten');
var hournum_one = document.querySelector('#hour-one');
var minnum_ten = document.querySelector('#min-ten');
var minnum_one = document.querySelector('#min-one');
var secnum_ten = document.querySelector('#sec-ten');
var secnum_one = document.querySelector('#sec-one');


var day,hour,min,sec;
var dayten,dayone,hourten,hourone,minten,minone,secten,secone;


CalculateRemainTime();
Setnum();

function CalculateRemainTime() {
    var termstart = 1504886400000;
    var now = new Date();
    now = now.getTime();
    var remain = termstart - now;
    day = Math.floor(remain/3600/24/1000);
    hour = Math.floor((remain-day*1000*3600*24)/3600/1000);
    min = Math.floor((remain - day*1000*3600*24 - hour*3600*1000)/1000/60);
    sec = Math.floor((remain - day*1000*3600*24 - hour*3600*1000 - min*1000*60)/1000);
    var test = '离开学还有'+day+'天'+hour+'小时'+min+'分'+sec+'秒';
    console.log(test);
}


function Setnum() {

    var swtich = Math.floor(sec/10);
    swtich = sec - swtich*10;
    secone = -(38*10-swtich*38);
    secnum_one.style.backgroundPositionY = secone + 'px'; 

    secten = Math.floor(sec/10);
    secten = -(38*6-secten*38);
    secnum_ten.style.backgroundPositionY = secten + 'px';

    swtich = Math.floor(min/10);
    swtich = min - swtich*10;
    minone = -(38*10-swtich*38);
    minnum_one.style.backgroundPositionY = minone + 'px';

    minten = Math.floor(min/10);
    minten = -(38*6-minten*38);
    minnum_ten.style.backgroundPositionY = minten + 'px';

    swtich = Math.floor(hour/10);
    swtich = hour - swtich*10;
    hourone = -(38*10-swtich*38);
    hournum_one.style.backgroundPositionY = hourone + 'px';

    hourten = Math.floor(hour/10);
    hourten = -(38*6-hourten*38);
    hournum_ten.style.backgroundPositionY = hourten + 'px';

    swtich = Math.floor(day/10);
    swtich = day - swtich*10;
    dayone = -(38*10-swtich*38);
    daynum_one.style.backgroundPositionY = dayone + 'px';

    dayten = Math.floor(day/10);
    dayten = -(38*6-dayten*38);
    daynum_ten.style.backgroundPositionY = dayten + 'px'; 

}

function Movenum() {
    CalculateRemainTime();
    Setnum();
}

// function movenum() {
    
    
//     //dayten = Math.floor(sec/10);
    
//     // if (dayten == - ) {
//     //     daynum_ten.style.transition = "0.3s";
        

//     // }
    
//     secone -=38;
//     secten -=38/10;
//     console.log(secten);
//     secnum_one.style.backgroundPositionY = secone + 'px'; 
//     secnum_ten.style.backgroundPositionY = secten + 'px';
// }
// // movenum();
