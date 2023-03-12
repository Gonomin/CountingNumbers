let decremental = 0;
function decreaseNumber(){
    let numberCounter = document.getElementById('counting');
    numberCounter.innerHTML = `${--decremental}`;
    if (decremental < 0) {
        let negativeColor = document.getElementById('counting');
        negativeColor.style.color = '#ff0000';
    } else if (decremental == 0) {
        document.getElementById('counting').style.color = '#fff'
    }
}

function resetNumber () {
    let numberCounter = document.getElementById('counting');
    numberCounter.innerHTML = `${decremental=0}`;
    document.getElementById('counting').style.color = "#fff"
}

function increaseNumber() {
    let numberCounter = document.getElementById('counting');
    numberCounter.innerHTML = `${++decremental}`;
    if (decremental > 0) {
        document.getElementById('counting').style.color = '#00ff00'
    } else if (decremental == 0) {
        document.getElementById('counting').style.color = '#fff'
    }
}
