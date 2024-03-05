
function updateClock(){

    const date = new Date();

    let hour = date.getHours().toString().padStart(2,0);

    const meridiem = hour>=12 ? "PM" : "AM";
    hour = hour%12 ||12;

    hour = hour.toString().padStart(2,0);
    const minute = date.getMinutes().toString().padStart(2,0);
    const second = date.getSeconds().toString().padStart(2,0);

    const time = `${hour}:${minute}:${second} ${meridiem}`

    document.getElementById("clock").textContent = time
}
updateClock();
setInterval(updateClock,1000);
