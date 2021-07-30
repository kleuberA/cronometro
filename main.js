const start = $('.start');
const pausar = $('.pausar');
const reiniciar = $('.reiniciar');
let milisegundos = 0;
let segundos = 0;
let minutos = 0;
let hora = 0;
let cronometro;


reiniciar.click(()=>{
	paraCronometro();
	milisegundos = 0;
	segundos = 0;
	minutos = 0;
	hora = 0;
	$('.miliSegundos').text('00');
	$('.segundos').text('00');
	$('.minutos').text('00');
	$('.hora').text('00');
	iniciaCronometro();
})

pausar.click(() => {paraCronometro();});


start.click(()=>{paraCronometro();iniciaCronometro();});


function iniciaCronometro(){
	cronometro = setInterval(() => {
		tempo();
	}, 10);
}


function tempo(){
	if((milisegundos += 10) == 1000){
		milisegundos = 0;
		segundos++;
	}
	if(segundos == 60){
		segundos = 0;
		minutos++;
	}
	if(minutos == 60){
		minutos = 0;
		hora++;
	}
	$('.miliSegundos').text(formataCronometro(milisegundos));
	$('.segundos').text(formataCronometro(segundos));
	$('.minutos').text(formataCronometro(minutos));
	$('.hora').text(formataCronometro(hora));
}


function formataCronometro(input){
	return input > 10 ? input : `0${input}`;
}

function paraCronometro(){
	clearInterval(cronometro);
}