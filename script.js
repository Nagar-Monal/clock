let hour = document.getElementById("hour");
let minutes = document.getElementById("minutes");
let second = document.getElementById("second");
let am = document.getElementById("am");
function updateTime() {
  const d = new Date();
  let hours = d.getHours();
  let amOrPm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12 || 12;

  hour.innerText = hours < 10 ? "0" + hours : hours;
  minutes.innerText =
    d.getMinutes() < 10 ? "0" + d.getMinutes() : d.getMinutes();
  second.innerText =
    d.getSeconds() < 10 ? "0" + d.getSeconds() : d.getSeconds();
  am.innerText = amOrPm;
  setTimeout(() => {
    updateTime();
  }, 1000);
}

updateTime();
