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

//import "./urlap.js"

const url="https://retoolapi.dev/KSKxiJ/sor";
document.addEventListener("DOMContentLoaded", () => { // ITT VAN VMI HIBA!!!!!!!!! AZÉRT NEM TÖLT BE
  /*const beolvasasIde=document.getElementById("beolvasasIde");
  beolvasasIde.innerHTML=`
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
        <tbody id="tablazatIde"> // Valószínűleg a tablazatIde -nél lehet a gond...
        </tbody>
      </table>
  `;*/
  listaz();
});

function listaz(){
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
    //ChatGPT-adta meg
  const urlap = document.getElementById("urlap");

  urlap.addEventListener("submit", (event) => {
    event.preventDefault();
    const maxId = Math.max(...responseBody.map((sor) => sor.id));
    const newId = maxId + 1;
    bekuld(event, newId);
    });
  });
};

  //Űrlap itt kezdődik
//const urlap=document.getElementById("urlap");

//urlap.addEventListener("submit", bekuld);

function bekuld(event, newId){
  event.preventDefault();
  const megrendelo=document.getElementById("megrendelo").value;
  const email=document.getElementById("email").value;
  const bankkartya=document.getElementById("bankkartya").value;
  const telepules=document.getElementById("telepules").value;
  const kiszallitva=document.getElementById("kiszallitva").value;
  const sor = {
    megrendelo: megrendelo,
    email: email,
    bankkartya: bankkartya,
    telepules: telepules,
    kiszallitva: kiszallitva,
    //id: idTableData+1 //az űrlap az ID nem kérdezi, korábbi funkcióban az ID meg van határozva, azt próbálom használni
    id: newId,
  };
  console.log(sor);
  console.log(JSON.stringify(sor));
  fetch(url, {
    method: "POST",
    body: JSON.stringify(sor),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((response) => {
    if (response.ok) {
      formNulla();
      listaz(); // Frissítse a táblázatot az új adatokkal
    }
  });
}

formNulla(); //lenullázni az ürlapot

function formNulla() {
  document.getElementById("megrendelo").value="";
  document.getElementById("email").value="";
  document.getElementById("bankkartya").value="";
  document.getElementById("telepules").value="";
  document.getElementById("kiszallitva").value="";
};
//});

