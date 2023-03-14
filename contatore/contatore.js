let p = document.getElementById('counter')
let counterValue = parseInt(sessionStorage.getItem("lastCounterValue")) || 0;

setInterval(function() {
p.innerHTML = counterValue++;
sessionStorage.setItem("lastCounterValue", counterValue);
}, 1000);




