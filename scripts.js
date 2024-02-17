//VARIAVEIS

const hoursElement   = document.getElementById('hours') //Pegando o elemento com id hours
const minutesElement = document.getElementById('minutes') //Pegando o elemento com id minutes
const secondsElement = document.getElementById('seconds') // Pegando o elemento com id seconds


//FUNÇÕES

//A condição time < 10 verifica se o valor da variável time é menor que 10. Se essa condição for verdadeira, o valor retornado será a concatenação da string '0' com o valor de time. Caso contrário, ou seja, se a condição for falsa, o valor retornado será o próprio valor de time.

function fixTime(time){
    return time < 10 ? '0'+time : time
}

function newTime(){
    const date    = new Date() //Pegando a data atual
    const hours   = date.getHours() //Pegando as horas
    const minutes = date.getMinutes() //Pegando os minutos
    const seconds = date.getSeconds() //Pegando os segundos
    
    hoursElement.textContent   = fixTime(hours) //Atribuindo o valor de hours para o elemento hoursElement
    minutesElement.textContent = fixTime(minutes) //Atribuindo o valor de minutes para o elemento minutesElement
    secondsElement.textContent = fixTime(seconds) //Atribuindo o valor de seconds para o elemento secondsElement
}

//EVENTOS

newTime() //Chamando a função newTime para que o relógio seja atualizado assim que a página for carregada
setInterval(newTime, 1000) //Chamando a função newTime a cada 1000 milissegundos (1 segundo)