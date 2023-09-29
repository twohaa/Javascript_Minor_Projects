//Digital Clock

setInterval(() => {
  let date = new Date();
  let options = {
    weekday: "long",
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  };
  let d = date.toLocaleString("en-us", options);
  time.innerHTML = d;
}, 1000);

setInterval(() => {
  let date = new Date();
  timee.innerHTML = date;
}, 1000);
