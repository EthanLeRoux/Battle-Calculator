//Player choices
let p1Choice =undefined;
let p2Choice =undefined;

//chars import
import {makima,rika, sakura, hallibel,shinra,denji, saitama} from "./chars.js"
console.log(makima.ATK);

//Buttons P1
let makimaBtn = document.getElementById('makima');
let sakuraBtn = document.getElementById('sakura');
let rikaBtn = document.getElementById('rika');
let hallibelBtn = document.getElementById('hallibel');
let shinraBtn = document.getElementById('shinra');
let denjiBtn = document.getElementById('denji');
let saitamaBtn = document.getElementById('saitama');


//Buttons P2
let makimaBtn2 = document.getElementById('makima2');
let sakuraBtn2 = document.getElementById('sakura2');
let rikaBtn2 = document.getElementById('rika2');
let hallibelBtn2 = document.getElementById('hallibel2');
let shinraBtn2 = document.getElementById('shinra2');
let denjiBtn2 = document.getElementById('denji2');
let saitamaBtn2 = document.getElementById('saitama2');

//Btns Click Events P1
makimaBtn.addEventListener('click', function () {
    document.getElementById('p1').setAttribute('src','img/m2.jpg')
    p1Choice= makima;
})

rikaBtn.addEventListener('click', function () {
    document.getElementById('p1').setAttribute('src','img/rika.jpg')
    p1Choice= rika;
})

sakuraBtn.addEventListener('click', function () {
    document.getElementById('p1').setAttribute('src','img/sakura.jpg')
    p1Choice= sakura;
})

hallibelBtn.addEventListener('click', function () {
    document.getElementById('p1').setAttribute('src','img/tier.jpg')
    p1Choice= hallibel;
})

shinraBtn.addEventListener('click', function () {
    document.getElementById('p1').setAttribute('src','img/shinra.jpg')
    p1Choice= shinra;
})

denjiBtn.addEventListener('click', function () {
    document.getElementById('p1').setAttribute('src','img/denji.jpg')
    p1Choice= denji;
})

saitamaBtn.addEventListener('click', function () {
    document.getElementById('p1').setAttribute('src','img/saitama.jpg')
    p1Choice= saitama;
})

//Btns Click Events P2
makimaBtn2.addEventListener('click', function () {
    document.getElementById('p2').setAttribute('src','img/makima.jpg')
    p2Choice= makima;
})

rikaBtn2.addEventListener('click', function () {
    document.getElementById('p2').setAttribute('src','img/rika.jpg')
    p2Choice= rika;
})

sakuraBtn2.addEventListener('click', function () {
    document.getElementById('p2').setAttribute('src','img/sakura.jpg')
    p2Choice= sakura;
})

hallibelBtn2.addEventListener('click', function () {
    document.getElementById('p2').setAttribute('src','img/tier.jpg')
    p2Choice= hallibel;
})

shinraBtn2.addEventListener('click', function () {
    document.getElementById('p2').setAttribute('src','img/shinra.jpg')
    p1Choice= shinra;
})

denjiBtn2.addEventListener('click', function () {
    document.getElementById('p2').setAttribute('src','img/denji.jpg')
    p1Choice= denji;
})

saitamaBtn2.addEventListener('click', function () {
    document.getElementById('p2').setAttribute('src','img/saitama.jpg')
    p2Choice= saitama;
})

//Results
results.addEventListener('click', function() {

    if (p1Choice.ATK>p2Choice.ATK) {
    document.getElementById('resText1').innerHTML= `P1 ATK:${JSON.stringify(p1Choice.ATK)}<br>P2 ATK:${JSON.stringify(p2Choice.ATK)}`;
    document.getElementById('resText').innerHTML= "Player 1's ATK is higher than Player 2's. P1 Wins."
    //document.getElementById('resText').innerHTML= `${p1Choice}'s ATK is higher than ${p2Choice}'s.${p1Choice} Wins. `

}

    if (p1Choice.ATK<p2Choice.ATK) {
    document.getElementById('resText1').innerHTML= "P1 ATK:"+JSON.stringify(p1Choice.ATK,) + "<br>"+"P2 ATK:"+JSON.stringify(p2Choice.ATK);;
    document.getElementById('resText').innerHTML= "Player 2's ATK is higher than Player 1's. P2 Wins."
}

    else if(p1Choice.ATK=p2Choice.ATK) {
        document.getElementById('resText').innerHTML= "Player 1's ATK is the same as Player 2's. Stalemate."
    }
})

