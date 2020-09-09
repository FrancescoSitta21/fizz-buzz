//Variabile primaria
var message = document.getElementById('message')

//numeri da 1 a 100
for (var i = 1; i <= 100; i++) {
//creo la lista corretta
var list = 1;

//controllo se sono multipli di 3, di 5 o entrambi
if (i % 15 == 0) {
  list = 'FizzBuzz!';
} else if (i % 3 == 0) {
  list = 'Fizz!';
} else if (i % 5 == 0) {
  list = 'Buzz!';
}

//Stampo la lista
message.innerHTML += '<li>' + list + '</li>'
}
