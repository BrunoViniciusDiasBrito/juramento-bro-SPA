import broCode from "./data";

const domRules = document.querySelector(".rules"),
  ruleLine = broCode;

const htmlInjection = (obj, index) => {
  let htmlMarkup = `
        <p><span class="iQuestion">${Number(index) + 1})</span> ${obj}</p>
    `;
  domRules.insertAdjacentHTML("afterbegin", htmlMarkup);
};

function rules(r, fnInsert) {
  domRules.innerHTML = "";

  //Criar uma regra de negócio para inverter a ordem de exibição

  for (let i in r) {
    fnInsert(r[i]["rule"], i);
  }
}

rules(ruleLine, htmlInjection);
