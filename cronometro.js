let tempoIntervalo
let tempoDecorrido = 0
document.getElementById('startBtn').addEventListener('click', function(){
    if(tempoIntervalo)
        return
    tempoIntervalo = defiIntervalo(() => {
        VelorTimer += 1000;
        document.getElementById('timer-display').textContent = new Date(VelorTimer).toISOString().slice(11, 19);
    }, 1000)
})

document.getElementById('pararBtn').addEventListener('click', function(){
    limparIntervalo(tempoIntervalo)
    tempoIntervalo = null
})

document.getElementById('resetarBtn').addEventListener('click', function(){
    limparIntervalo(tempoIntervalo)
    tempoIntervalo = null
    VelorTimer = 0
    document.getElementById('timer-display').textContent = '00:00:00'
})