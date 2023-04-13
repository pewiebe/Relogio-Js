const horas = document.getElementById('horas'); //VARIAVEL TIPO TEMPO "CONST" PODE SER UMA VARIAVEL PARA CHAMAR O ELEMENTO EM QUE VC CRIOU NO INDEX
                                                //DOCUMENT = document representa a página da web atual em que o código está sendo executado. Ele fornece uma interface para interagir com o conteúdo da página, como elementos HTML, estilos, eventos e outras propriedades
                                                //document.GetelementByID = pega elemento pelo Id
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');

const relogio = setInterval(function time (){ // "CONST" variavel para o "RELOGIO"
    // setInterval = Função tempo OU função
    let dateToday = new Date(); // Let Objeto "algo" variáveis que vc pode criar 
    let hr = dateToday.getHours();
    let min = dateToday.getMinutes();
    let s = dateToday.getSeconds();

    if(hr < 10) hr = '0' + hr;

    if(min < 10) min = '0' + min;

    if(s < 10) s = '0' + s

    horas.textContent = hr;
    minutos.textContent = min;
    segundos.textContent = s;
})
