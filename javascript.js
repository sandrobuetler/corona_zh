const colorarray = ['ff1000', 'ff1800', 'ff2000', 'ff2800', 'ff3000', 'ff3800', 'ff4000', 'ff4800', 'ff5000', 'ff5800', 'ff6000', 'ff6800', 'ff7000', 'ff7800', 'ff8000', 'ff8800', 'ff9000', 'ff9800', 'ffa000', 'ffa800', 'ffb000', 'ffb800', 'ffc000', 'ffc800', 'ffd000', 'ffd800', 'ffe000', 'ffe800', 'fff000', 'fff800', 'ffff00', 'f7ff00', 'efff00', 'e7ff00', 'dfff00', 'd7ff00', 'cfff00', 'c7ff00', 'bfff00', 'b7ff00', 'afff00', 'a7ff00', '9fff00', '97ff00', '8fff00', '87ff00', '7fff00', '77ff00', '6fff00', '67ff00', '5fff00', '57ff00', '4fff00', '47ff00', '3fff00', '37ff00', '2fff00', '27ff00', '1fff00', '17ff00']
const reversed = colorarray.reverse();
const utc = new Date().toJSON().slice(0,10).replace(/-/g,'/');
const utc2 = new Date().toJSON().slice(0,10).replace(/-/g,'-');
const dates_as_int = (Date.parse);
const now = dates_as_int(utc)+86800000;

document.getElementById("rangeControlledByDate").setAttribute("max", now);
document.getElementById("dateControlledByRange").setAttribute("max", utc2);
document.getElementById("dateControlledByRange").setAttribute("max", utc2);

window.addEventListener('load', setup);
window.addEventListener('load', tablefunction);
window.addEventListener('load', labelfunction);



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


async function tablefunction() {
    const globalTemps = await getData();
    const arrayOne = globalTemps.date;
    const arrayTwo = globalTemps.plz;
    const arrayThree = globalTemps.newcases;
    const arrayfour = globalTemps.population;

    const maxSize = Math.max(arrayOne.length, arrayTwo.length, arrayThree.length, arrayfour.length);
    $('#table-content').empty();
    for (let i = 0; i < maxSize; i++) {
        if (arrayOne[i] == document.getElementById("dateControlledByRange").value && globalTemps.plz[i].toString()!= "PLZ_uebrige" && globalTemps.plz[i].toString()!= "unbekannt") {
            let row = $('<tr>');
            row.append($('<td>').html(arrayOne[i]));
            row.append($('<td>').html(arrayTwo[i]));
            row.append($('<td>').html(arrayThree[i]));
            row.append($('<td>').html(arrayfour[i]));
            $('#table-content').append(row);
        }
    }
}

async function labelfunction() {
    const globalTemps = await getData();
    const arrayOne = globalTemps.date;
    const arrayTwo = globalTemps.plz;
    const arrayThree = globalTemps.newcases;
    const arrayfour = globalTemps.population;
    const maxSize = Math.max(arrayOne.length, arrayTwo.length, arrayThree.length, arrayfour.length);
    $('#vergleich').empty();
    $('#vergleich1').empty();
    for (let i = 0; i < maxSize; i++) {
        if (arrayOne[i] == document.getElementById("dateControlledByRange").value && arrayTwo[i] == document.getElementById("vergleicheins").value){
            let row = $('<div>');
            row.append($('<div>').html('Datum: '+arrayOne[i]));
            row.append($('<div>').html('PLZ: '+arrayTwo[i]));
            row.append($('<div>').html('Neue Fälle: '+arrayThree[i]));
            row.append($('<div>').html('Population: '+arrayfour[i]));
            $('#vergleich').append(row);
        }
    }
    for (let j = 0; j < maxSize; j++) {
        if (arrayOne[j] == document.getElementById("dateControlledByRange").value && arrayTwo[j] == document.getElementById("vergleichzwei").value){
            let row = $('<div>');
            row.append($('<div>').html('Datum: '+arrayOne[j]));
            row.append($('<div>').html('PLZ: '+arrayTwo[j]));
            row.append($('<div>').html('Neue Fälle: '+arrayThree[j]));
            row.append($('<div>').html('Population: '+arrayfour[j]));
            $('#vergleich1').append(row);
        }
    }
}
