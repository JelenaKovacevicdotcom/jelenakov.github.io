// JavaScript-kode for å bytte bilder ved klikk på en knapp
const myImage = document.querySelector("img");
const button = document.getElementById("bilde"); //virker også med LET button = ...

button.addEventListener("click", () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "bilder/Parnassius_apollo.jpg") {
    myImage.setAttribute("src", "bilder/Apollo_butterfly.jpg");
  } else if (mySrc === "bilder/Apollo_butterfly.jpg") {
    myImage.setAttribute("src", "bilder/apollo3.jpg");
  } else {
    myImage.setAttribute("src", "bilder/Parnassius_apollo.jpg");
  }
});
