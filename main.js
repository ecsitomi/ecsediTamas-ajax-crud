//ALAP MAIN.JS TARTALOM

/* import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`

setupCounter(document.querySelector('#counter')) */

//ALAP VÉGE!

document.addEventListener("DOMContentLoaded", () => {
  const url="https://retoolapi.dev/anO0Nz/data";
  const beolvasasIde=document.getElementById("beolvasasIde");
  betoltes(beolvasasIde, url);
}); //az oldal betöltésekor meghatározom, hogy honnan hova akarok az index.html-be betölteni vmit

function betoltes(beolvasasIde,url){ //a honnan hova folyamatba, az url-ről (retool api) lekérem az adatokat egy változóba és megírom a megjelenítő html kódot
  const tartalom=fetch(url)
  console.log(tartalom)
  document.querySelector('#tablazatIde').innerHTML = `
    <!--Ide jön a táblázat-->

  `;
  fetch(url).then(httpResponse => httpResponse.json())
};
