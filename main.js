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
  document.querySelector("#beolvasasIde").innerHTML=`
  <table>
      <thead>
        <tr>
          <th>Megrendelő</th>
          <th>Email</th>
          <th>Bankkártya</th>
          <th>Település</th>
          <th>Kiszállítva</th>
        </tr>
      </thead>
      <tbody id="tablazatIde">
      </tbody>
    </table>
  `;
  const url="https://retoolapi.dev/KSKxiJ/sor";
  const tablazatIde=document.getElementById("tablazatIde");
  fetch(url).then(httpResponse => httpResponse.json())
  .then(responseBody => {
    tablazatIde.innerHTML="";
    responseBody.forEach(sor => {
      const tablazatSor=document.createElement("tr");
      const idTableData=document.createElement("td");
      const megrendeloTableData=document.createElement("td");
      const emailTableData=document.createElement("td");
      const bankkartyaTableData=document.createElement("td");
      const telepulesTableData=document.createElement("td");
      const kiszallitvaTableData=document.createElement("td");
      idTableData.textContent=sor.id;
      megrendeloTableData.textContent=sor.megrendelo;
      emailTableData.textContent=sor.email;
      bankkartyaTableData.textContent=sor.bankkartya;
      telepulesTableData.textContent=sor.telepules;
      kiszallitvaTableData.textContent=sor.kiszallitva;
      tablazatSor.appendChild(idTableData);
      tablazatSor.appendChild(megrendeloTableData);
      tablazatSor.appendChild(emailTableData);
      tablazatSor.appendChild(bankkartyaTableData);
      tablazatSor.appendChild(telepulesTableData);
      tablazatSor.appendChild(kiszallitvaTableData);
      tablazatIde.appendChild(tablazatSor);
    });
  });

}); //az oldal betöltésekor meghatározom, hogy honnan hova akarok az index.html-be betölteni vmit

