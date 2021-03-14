const buttons = document.querySelector('.buttons');
const plzBereiche = Array.from(document.querySelectorAll('.cls-5'))
    .filter(plzs => isPlz(plzs));

console.log(plzBereiche)

plzBereiche.forEach(plzs => {
    const newButton = document.createElement('button');
    newButton.dataset.id = plzs.id;
    newButton.innerHTML = plzs.dataset.name;
    newButton.addEventListener('click', showPlz);
    buttons.appendChild(newButton);
});

function showPlz($event) {
    const selectedPlz = document.querySelector(`#${$event.target.dataset.id}`);
    selectedPlz.classList.toggle('show');
}

function isPlz(plz) {
    return plz.dataset.name;
}

window.addEventListener('load', setup);
async function setup() {
    const globalTemps = await getData();

    console.log(globalTemps.plz)
    console.log(globalTemps.date)
    console.log(globalTemps.population)
    console.log(globalTemps.newcases)
}
async function getData() {
    const response = await fetch('https://raw.githubusercontent.com/openZH/covid_19/master/fallzahlen_plz/fallzahlen_kanton_ZH_plz.csv');
    const data = await response.text();
    const plz = [];
    const date = [];
    const population = [];
    const newcases = [];
    const rows = data.split('\n').slice(1);
    rows.forEach(row => {
        const cols = row.split(',');
        plz.push(cols[0]);
        date.push(cols[1]);
        population.push(cols[2]);
        newcases.push(cols[3]);

    });
    return {plz, date, population, newcases};
}

