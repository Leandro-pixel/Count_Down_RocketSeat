function startTimer(duration, display) { //a duração do tempo e aonde sera exibido esse display
    var timer = duration, days, hours, minutes, seconds;// aqui seta os mesmos valores de timer pra cada um só que arrumada depois na matemática para cada um contar certo

    setInterval(function(){ //uma função que a cada mil milisegundos atualiza
//parseInt analisa a string e retorna os valores
        seconds = parseInt(timer % 60, 10) //setando os segundos 
        minutes = parseInt(timer / 60, 10) //setando os minutos
        hours = parseInt(timer / 3600, 10)// setando horas
        days = parseInt(timer / 86400, 10 )

        minutes = hours ? minutes - (60 * hours) : minutes; //essa expressão vem antes para a hora não ser modificada antes dela
        hours = days ? hours - (24 * days) : hours
       
        /* a expressão acima, se hours for avaliado como verdadeiro (por exemplo, se for um número diferente de zero),
         a expressão minutes - (60 * hours) será atribuída a minutes.
          Caso contrário, minutes manterá o seu valor atual.
        */


        minutes = minutes < 10 ? "0" + minutes : minutes; // isso é um short hand do if, ? = condição, se sim faça => "0" + minutes, ":" = se não
        seconds = seconds < 10 ? "0" + seconds : seconds;
        hours = hours < 10 ? "0" + hours : hours;
        days = days < 10 ? "0" + days : days;
        
        display.textContent = `${days} : ${hours} : ${minutes} : ${seconds}`;

        if(--timer < 0) { // --timer é decremento, se timer decrementado for menor que 0
            timer = duration;
        }

    }, 1000);

}

window.onload = function(){
    var duration = 86400 * 8 ; //conversão em segundos
    var display = document.getElementById("timer")// elemento para exibir o timer

    startTimer(duration,display);//ijnicia a fnução
}