//  primo esercizio

const save = document.getElementById('save')
const del = document.getElementById('delete')
const input = document.getElementById('nome')

save.addEventListener("click", function(){
    localStorage.setItem("nome:", input.value);
    console.log(input.value);
    localStorage.getItem(input.value)
})


// secondo esercizio

let p = document.getElementById('counter')
let counterValue = parseInt(sessionStorage.getItem("lastCounterValue")) || 0;

setInterval(function() {
p.innerHTML = counterValue++;
sessionStorage.setItem("lastCounterValue", counterValue);
}, 1000);




