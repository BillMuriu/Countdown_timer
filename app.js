const countdown = () => {
    const countDate = new Date('Nov 30, 2022 00:00:00').getTime();
    const now = new Date().getTime();
    const timegap = countDate - now;
    
    //Bundle up the time into Days, Hours etc...

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    //calculate the text

    const textDay = Math.floor(timegap / day);
    const textHour = Math.floor((timegap % day) / hour); 
    const textMinute = Math.floor((timegap % hour) / minute);
    const textSecond = Math.floor((timegap % minute) / second);


    document.querySelector(".day").innerText = textDay;
    document.querySelector(".hour").innerText = textHour;
    document.querySelector(".minute").innerText = textMinute;
    document.querySelector(".second").innerText = textSecond;
};

setInterval(countdown, 1000);