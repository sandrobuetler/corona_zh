const colorarray = ['ff1000', 'ff1800', 'ff2000', 'ff2800', 'ff3000', 'ff3800', 'ff4000', 'ff4800', 'ff5000', 'ff5800', 'ff6000', 'ff6800', 'ff7000', 'ff7800', 'ff8000', 'ff8800', 'ff9000', 'ff9800', 'ffa000', 'ffa800', 'ffb000', 'ffb800', 'ffc000', 'ffc800', 'ffd000', 'ffd800', 'ffe000', 'ffe800', 'fff000', 'fff800', 'ffff00', 'f7ff00', 'efff00', 'e7ff00', 'dfff00', 'd7ff00', 'cfff00', 'c7ff00', 'bfff00', 'b7ff00', 'afff00', 'a7ff00', '9fff00', '97ff00', '8fff00', '87ff00', '7fff00', '77ff00', '6fff00', '67ff00', '5fff00', '57ff00', '4fff00', '47ff00', '3fff00', '37ff00', '2fff00', '27ff00', '1fff00', '17ff00']
const reversed = colorarray.reverse();
var utc = new Date().toJSON().slice(0,10).replace(/-/g,'/');
var utc2 = new Date().toJSON().slice(0,10).replace(/-/g,'-');
var dates_as_int = (Date.parse);
const now = dates_as_int(utc)+86800000;
document.getElementById("rangeControlledByDate").setAttribute("max", now);
console.log(now)
document.getElementById("dateControlledByRange").setAttribute("max", utc2);
console.log(utc2)
window.addEventListener('load', setup);
document.getElementById("dateControlledByRange").setAttribute("max", utc2);
async function setup() {
    const globalTemps = await getData();
    for (var i = 0; i < globalTemps.date.length; i++) {
        if (globalTemps.date[i] == document.getElementById("dateControlledByRange").value) {
            if (globalTemps.newcases[i].toString().length < 4 && globalTemps.plz[i].toString()!= "PLZ_uebrige" && globalTemps.plz[i].toString()!= "unbekannt") {
                document.getElementById("_" + globalTemps.plz[i]).style.fill = "#" + reversed[parseInt(globalTemps.newcases[i].toString().slice(-1) / 3)];
            } else if (globalTemps.newcases[i].toString().length < 6 && globalTemps.plz[i].toString()!= "PLZ_uebrige" && globalTemps.plz[i].toString()!= "unbekannt") {
                document.getElementById("_" + globalTemps.plz[i]).style.fill = "#" + reversed[parseInt(globalTemps.newcases[i].toString().slice(-2) / 3)];
            } else if (globalTemps.newcases[i].toString().length < 8 && globalTemps.plz[i].toString()!= "PLZ_uebrige" && globalTemps.plz[i].toString()!= "unbekannt") {
                document.getElementById("_" + globalTemps.plz[i]).style.fill = "#" + reversed[parseInt(globalTemps.newcases[i].toString().slice(-3) / 3)];
            }

        }
    }
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
jQuery(function($) {

    $('#dateControlledByRange').on('input', function() {
        $('#rangeControlledByDate').prop('valueAsNumber', $.prop(this, 'valueAsNumber'));
    });
    $('#rangeControlledByDate').on('input', function() {
        $('#dateControlledByRange').prop('valueAsNumber', $.prop(this, 'valueAsNumber'));
    });
});


