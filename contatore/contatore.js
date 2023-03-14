//  primo esercizio

const save = document.getElementById('save')
const del = document.getElementById('delete')
const input = document.getElementById('nome')
const tuoNome = document.getElementById('tuoNome')

save.addEventListener("click", function(){
    localStorage.setItem("nome:", input.value);
    tuoNome.innerHTML = input.value
    console.log(input.value);
    localStorage.getItem(input.value)
})
del.addEventListener("click", function(){
    localStorage.clear();
    tuoNome.innerHTML = ""
    input.value = ""
})


// secondo esercizio

let p = document.getElementById('counter')
let counterValue = parseInt(sessionStorage.getItem("lastCounterValue")) || 0;

setInterval(function() {
p.innerHTML = counterValue++;
sessionStorage.setItem("lastCounterValue", counterValue);
}, 1000);




