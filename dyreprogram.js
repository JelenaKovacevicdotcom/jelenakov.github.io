const myImage = document.querySelector("img");
myImage.addEventListener("click", () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "bilder/Parnassius_apollo.jpg") {
    myImage.setAttribute("src", "bilder/Apollo_butterfly.jpg");
  } else if (mySrc === "bilder/Apollo_butterfly.jpg") {
    myImage.setAttribute("src", "bilder/apollo3.jpg");
  } else {
    myImage.setAttribute("src", "bilder/Parnassius_apollo.jpg");
  }
});
//her skal bilde skiftes med hver klikk (fre bilde 1 til bilde 2 til bilde 3 og tilbake til bilde 1)
//funksjon IF, ELSE IF, ELSE brukes for å sjekke hvilket bilde som vises, og bytte til neste bilde i sekvensen.
//bruker getAttribute for å hente src-attributtet til bildet, og setAttribute for å endre det.
//addEventListener lytter etter klikk på bildet og kjører funksjonen når bildet klikkes.
//bruker piler (=>) for å definere en anonym funksjon som kjøres når bildet klikkes.
//dette gjør at brukeren kan klikke på bildet for å se forskjellige bilder av Apollosommerfugl.
//bildene må være i mappen "bilder" i prosjektet for at dette skal fungere.
//filnavnene må også stemme overens med de som er brukt i koden.
