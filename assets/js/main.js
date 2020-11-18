// Chiedere all’utente il cognome
// inserirlo in un array con altri cognomi: ‘Bianchi’, ‘Rossi’, ‘Duzioni’, ‘Balsano’, ‘Verdi’
// stampa la lista ordinata alfabeticamente
// scrivi anche la posizione "umana" della lista in cui il nuovo utente si trova

//Chidere il cognome all'utente
var richiestaCognome = prompt("Scrivi il tuo cognome");
var cognomeUtente = richiestaCognome.charAt(0).toUpperCase(0) + richiestaCognome.slice(1);

//lista cognomi
var listaCognomi = [
  "Bianchi",
  "Rossi",
  "Duzioni",
  "Balsano",
  "Verdi"
];

//Inserirlo in un array con altri cognomi
listaCognomi.push(cognomeUtente);

//Stampa della lista ordinata alfabeticamente
listaCognomi.sort();

for (var i = 0; i < listaCognomi.length; i++) {
  var item = listaCognomi[i];
  var contenutoLista = document.getElementById("lista_cognomi").innerHTML;
  document.getElementById("lista_cognomi").innerHTML = contenutoLista + "<li>" + item + "</li>";
}

//Stampa della posizione umana del nuovo utente nella lista
var posizioneUtente = document.getElementById("posizione_utente");
posizioneUtente.innerHTML = "La tua posizione in lista è la n. " + (listaCognomi.indexOf(cognomeUtente) +1);
