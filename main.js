//ØVING 2, OPPGAVE 6: ENDRE OVERSKRIFT (H1) VED HJELP AV JAVASCRIPT
const myHeading = document.querySelector("h1");
// Store a reference to the <h1> in a variable
myHeading.textContent = "Eksempel på rødlisteart";
// Update the text content of the <h1>

//ØVING 2, OPPGAVE 7: SPRETT-OPP VINDU (ALERT BOX) NÅR KNAPP KLIKKES
//neste 3 rad er satt i kommentar for å bli ignorert for tiden
// myHeading.addEventListener("click", () => {
//  return alert("Au");
//});

//FORKLARING: her skal det komme en alert-boks (pop-up eller sprett-opp vindu) med teksten "Au" når knappen klikkes
//bruker addEventListener for å lytte etter klikk på knappen og kjøre funksjonen når knappen klikkes.
//bruker piler (=>) for å definere en anonym funksjon som kjøres når knappen klikkes.
//bruker return for å returnere verdien av alert-funksjonen, som viser en melding i en dialogboks.
//dette gjør at brukeren får en melding når de klikker på knappen.
//knappen må være definert i HTML med riktig id for at dette skal fungere.

//ØVING 2, OPPGAVE 8: KLIKKE-TELLER
let antall = 0;
myHeading.addEventListener("click", () => {
  antall = antall + 1;
  return alert("Au! Du har trykket meg " + antall + " ganger.");
});
