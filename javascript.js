const colorarray = ['ff1000','ff1000','ff1000','ff1000','ff1000','ff1000','ff1000','ff1000','ff1000','ff1000','ff1000','ff1000','ff1000','ff1000','ff1000','ff1000','ff1000','ff1000','ff1000','ff1000','ff1000','ff1000','ff1000','ff1000','ff1000','ff1000','ff1000','ff1000','ff1000','ff1000','ff1000','ff1000','ff1000','ff1000','ff1000','ff1000','ff1000','ff1000','ff1000','ff1000','ff1000','ff1000','ff1000','ff1000','ff1000','ff1000','ff1000','ff1000','ff1000','ff1000','ff1000','ff1000','ff1000','ff1000','ff1000','ff1000','ff1000','ff1000','ff1000','ff1000','ff1000','ff1000','ff1000','ff1000','ff1000','ff1000','ff1000','ff1000','ff1000','ff1000','ff1000','ff1000','ff1000','ff1000','ff1000','ff1000','ff1000','ff1000','ff1000','ff1000','ff1000','ff1000','ff1000','ff1000','ff1000','ff1000','ff1000','ff1000','ff1000','ff1000','ff1000','ff1000','ff1000','ff1000','ff1000','ff1000','ff1000','ff1000','ff1000','ff1000','ff1000','ff1000','ff1000','ff1000','ff1000','ff1000','ff1000','ff1000','ff1000','ff1000','ff1000','ff1000','ff1000','ff1000','ff1000','ff1000','ff1000','ff1000','ff1000','ff1000','ff1000','ff1000','ff1000','ff1000','ff1000','ff1000','ff1000','ff1000','ff1000','ff1000','ff1000','ff1000','ff1000','ff1000','ff1000','ff1000','ff1000','ff1000','ff1000','ff1000','ff1000','ff1000','ff1000','ff1000','ff1000','ff1000','ff1000','ff1000','ff1000','ff1000','ff1000','ff1000','ff1000','ff1000','ff1000','ff1000','ff1000','ff1000','ff1000','ff1000','ff1000','ff1000','ff1000','ff1000','ff1000','ff1000','ff1000','ff1000','ff1000','ff1000','ff1000','ff1000','ff1000','ff1000','ff1000','ff1000', 'ff1800', 'ff2000', 'ff2800', 'ff3000', 'ff3800', 'ff4000', 'ff4800', 'ff5000', 'ff5800', 'ff6000', 'ff6800', 'ff7000', 'ff7800', 'ff8000', 'ff8800', 'ff9000', 'ff9800', 'ffa000', 'ffa800', 'ffb000', 'ffb800', 'ffc000', 'ffc800', 'ffd000', 'ffd800', 'ffe000', 'ffe800', 'fff000', 'fff800', 'ffff00', 'f7ff00', 'efff00', 'e7ff00', 'dfff00', 'd7ff00', 'cfff00', 'c7ff00', 'bfff00', 'b7ff00', 'afff00', 'a7ff00', '9fff00', '97ff00', '8fff00', '87ff00', '7fff00', '77ff00', '6fff00', '67ff00', '5fff00', '57ff00', '4fff00', '47ff00', '3fff00', '37ff00', '2fff00', '27ff00', '1fff00', '17ff00']
const circlearray = [9, 8, 7, 11, 12, 14, 16, 17, 11, 14, 20, 40, 19, 30, 16, 28, 30, 20, 23, 18, 26, 20, 14, 9, 9 ,13, 22, 65, 6, 26, 21, 37, 19, 11, 9, 21, 6, 4, 12, 3, 36, 18, 25, 47, 47, 22, 37, 75, 8, 21, 56, 28, 57, 40, 29, 24, 30, 15, 45, 44, 71, 37, 17, 25, 30, 32, 80, 27, 28, 20, 38, 46, 60, 45, 25, 18, 39, 60, 8, 4, 11, 26, 4, 92, 43, 32, 18, 17, 68, 52, 48, 20, 32, 19, 29, 14, 17, 45, 14, 67, 12, 54, 62, 82, 20, 77, 13, 49, 78, 45,83, 30, 29, 50, 31, 65, 17, 31, 40, 48, 33, 51, 40, 12, 25, 56, 51, 24, 41, 21, 30, 16, 15, 29, 25, 29, 16, 17, 29, 15, 68, 11, 47, 24, 30, 21, 21, 39, 39, 36, 33, 62, 33, 44, 29, 38, 5, 18, 60, 27, 97, 24, 50, 52, 30, 70, 14, 98, 38, 29, 47, 38, 35, 48, 13, 29, 27, 53, 26, 13, 52, 15, 30, 19, 41, 75, 17, 26, 8, 36, 31, 63, 15, 11, 33, 30, 40, 48, 7, 14, 45, 42, 117, 12, 36, 21, 15, 43, 59, 19, 21, 37, 8, 16, 19, 13, 15, 14, 20, 45, 25, 49, 68, 53, 37, 18, 36, 57, 25, 36, 21, 31, 16, 37, 30, 35, 28, 37, 48, 16, 40, 61, 24, 35, 15, 34, 47, 5, 10, 15];
const reversed = colorarray.reverse();
const utc = new Date().toJSON().slice(0,10).replace(/-/g,'/');
const utc2 = new Date().toJSON().slice(0,10).replace(/-/g,'-');
const dates_as_int = (Date.parse);
const now = dates_as_int(utc)+86800000;

let hoverId = "null";
let cases = "null";
let population = "null";



document.getElementById("rangeControlledByDate").setAttribute("max", now);
document.getElementById("dateControlledByRange").setAttribute("max", utc2);
document.getElementById("dateControlledByRange").setAttribute("max", utc2);


window.addEventListener('load', setup);
window.addEventListener('load', tablefunction);
window.addEventListener('load', labelfunction);

const setPlzStyleByCases = (globalTemps, i) => {
    if (globalTemps.date[i] !== document.getElementById("dateControlledByRange").value) { // guard clause
        return;
    }
    const plz = globalTemps.plz[i];
    const newCases = globalTemps.newcases[i];
    if ("PLZ_uebrige" === plz.toString() || "unbekannt" === plz.toString()) { // yoda conditional
        return;
    }
    if        (newCases.toString().length < 4 ) {   // 0, 1, 2, 3
        document.getElementById("_" + plz).style.fill = "#" + reversed[parseInt(newCases.toString().slice(-1) / 3)];
    } else if (newCases.toString().length < 6 ) {   // 4, 5
        document.getElementById("_" + plz).style.fill = "#" + reversed[parseInt(newCases.toString().slice(-2) / 3)];
    } else if (newCases.toString().length < 8 ) {   // 6, 7
        document.getElementById("_" + plz).style.fill = "#" + reversed[parseInt(newCases.toString().slice(-3) / 3)];
    }

}
const setPlzStyleByPopulation = (globalTemps, i) => {
    if (globalTemps.date[i] !== document.getElementById("dateControlledByRange").value) { // guard clause
        return;
    }
    const plz = globalTemps.plz[i];
    const newCases = globalTemps.newcases[i];
    const population = globalTemps.population[i];
    if ("PLZ_uebrige" === plz.toString() || "unbekannt" === plz.toString()) { // yoda conditional
        return;
    }
    if        (newCases.toString().length < 4 ) {   // 0, 1, 2, 3
        document.getElementById("_" + plz).style.fill = "#" + reversed[parseInt(((newCases.toString().slice(-1) / 3)/population)*20000)];
    } else if (newCases.toString().length < 6 ) {   // 4, 5
        document.getElementById("_" + plz).style.fill = "#" + reversed[parseInt(((newCases.toString().slice(-2) / 3)/population)*20000)];
    } else if (newCases.toString().length < 8 ) {   // 6, 7
        document.getElementById("_" + plz).style.fill = "#" + reversed[parseInt(((newCases.toString().slice(-3) / 3)/population)*20000)];
    }

}
const setPlzStyleByDichte = (globalTemps, i) => {
    if (globalTemps.date[i] !== document.getElementById("dateControlledByRange").value) { // guard clause
        return;
    }
    const plz = globalTemps.plz[i];
    const newCases = globalTemps.newcases[i];
    const population = globalTemps.population[i];
    if ("PLZ_uebrige" === plz.toString() || "unbekannt" === plz.toString()) { // yoda conditional
        return;
    }
    if        (newCases.toString().length < 4 ) {   // 0, 1, 2, 3
        document.getElementById("_" + plz).style.fill = "#" + reversed[parseInt((newCases.toString().slice(-1) / 3)*(population/circlearray[i%251])/500)];
    } else if (newCases.toString().length < 6 ) {   // 4, 5
        document.getElementById("_" + plz).style.fill = "#" + reversed[parseInt((newCases.toString().slice(-2) / 3)*(population/circlearray[i%251])/500)];
    } else if (newCases.toString().length < 8 ) {   // 6, 7
        document.getElementById("_" + plz).style.fill = "#" + reversed[parseInt((newCases.toString().slice(-3) / 3)*(population/circlearray[i%251])/500)];
    }

}

async function setup() {
    const globalTemps = await getData();

    for (let i = 0; i < globalTemps.date.length; i++) {
        setPlzStyleByCases(globalTemps, i);
    }
    if(document.getElementById("anzahlPop").checked){
        for (let i = 0; i < globalTemps.date.length; i++) {
            setPlzStyleByPopulation(globalTemps, i);
        }
    }
    else if(document.getElementById("dichte").checked){
        for (let i = 0; i < globalTemps.date.length; i++) {
            setPlzStyleByDichte(globalTemps, i);
        }
    }
}

//Todo: Display: Ortsname/PLZ/Cases/Population
function updatePopupInfo(hoverId) {
    document.getElementById("plzPopup").innerHTML=hoverId;
    document.getElementById("casesPopup").innerHTML=cases;
    document.getElementById("populationPopup").innerHTML=population;
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

async function updateHoverData(id){
    const globalTemps = await getData();
    for (var i = 0; i < globalTemps.plz.length; i++) {
        if (globalTemps.plz[i]==id && globalTemps.date[i] == document.getElementById("dateControlledByRange").value) {
            hoverId = globalTemps.plz[i];
            cases = globalTemps.newcases[i];
            population = globalTemps.population[i];
        }
    }
    updatePopupInfo(hoverId);
    console.log(hoverId);
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
var myicon = document.getElementById("Dots");
var mypopup = document.getElementById("mypopup");

myicon.addEventListener("mouseover", showPopup);
myicon.addEventListener("mouseout", hidePopup);

function showPopup(evt) {
    var iconPos = myicon.getBoundingClientRect();
    mypopup.style.display = "block";
}

function hidePopup(evt) {
    mypopup.style.display = "none";
}
$(document).on('mousemove', function(e){
    $('#mypopup').css({
        left:  e.pageX+20,
        top:   e.pageY-70
    });
});

