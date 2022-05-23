// Data escolhida da qual vai ser contada
var countDown = new Date("Jun 12, 2022 00:00:00").getTime();

// Percorrer pela função a cada segundo
var func = setInterval(function() {

var now = new Date().getTime();
var timeleft = countDown - now;
    
// Calculando os dias, horas, minutos e segundos faltando
var days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
var hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);
    
// Colocar o resultado nos elementos específicos
document.getElementById("days").innerHTML = days.toLocaleString('pt-BR', { minimumIntegerDigits: 2, useGrouping: false });
document.getElementById("hours").innerHTML = hours.toLocaleString('pt-BR', { minimumIntegerDigits: 2, useGrouping: false });
document.getElementById("mins").innerHTML = minutes.toLocaleString('pt-BR', { minimumIntegerDigits: 2, useGrouping: false });
document.getElementById("secs").innerHTML = seconds.toLocaleString('pt-BR', { minimumIntegerDigits: 2, useGrouping: false });
    
// Quando o tempo chegar a zero, permanecer com '00'
if (timeleft < 0) {
    clearInterval(func);
    document.getElementById("days").innerHTML = "00";
    document.getElementById("hours").innerHTML = "00"; 
    document.getElementById("mins").innerHTML = "00";
    document.getElementById("secs").innerHTML = "00";
}
}, 1000);

