// const buttons = document.querySelector('.buttons');
const plzBereiche = Array.from(document.querySelectorAll('g'))
    //.filter(plzBereich => isPlzBereich(plzBereich));

function isPlzBereich(plzBereich) {
    if (plzBereich.id != null && plzBereich.data != null){
        return true
    }else {
        return false
    }
}

console.log(plzBereiche)
