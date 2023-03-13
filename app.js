//Player choices
let p1Choice =undefined;
let p2Choice =undefined;

//
const robot1 = {
    ATK: 10,
}

let robot2 = {
    ATK: 5,
}

//Choice Checkers

let p1ChoiceCheck = false;
let p2ChoiceCheck = false;

// P1Button choices
let bot1 = document.getElementById('p1c1');
let bot2 = document.getElementById('p1c2');

// P2Button choices
let bot3 = document.getElementById('p2c1');
let bot4 = document.getElementById('p2c2');

// P1 Event Clicks
bot1.addEventListener('click', function choiceDisplay() {
    document.getElementById('p1').innerHTML="bot1";
    p1Choice= robot1;
    console.log(p1Choice);
})

bot2.addEventListener('click', function choiceDisplay() {
    document.getElementById('p1').innerHTML="bot2";
    p1Choice= robot2;
    console.log(p1Choice);
})

// P2 Event Clicks
bot3.addEventListener('click', function choiceDisplay() {
    document.getElementById('p2').innerHTML="bot1";
    p2Choice= robot1;
    console.log(p2Choice);
})

bot4.addEventListener('click', function choiceDisplay() {
    document.getElementById('p2').innerHTML="bot2";
    p2Choice= robot2;
    console.log(p2Choice);
})

//Robot Results ATK Comaparisons
let results = document.getElementById('results');

//ATK
results.addEventListener('click', function() {
    document.getElementById('resText').innerHTML= p1Choice + "<br>"+p2Choice;

    if (p1Choice.ATK>p2Choice.ATK) {
    document.getElementById('resText1').innerHTML= "P1 ATK:"+JSON.stringify(p1Choice.ATK,) + "<br>"+"P2 ATK:"+JSON.stringify(p2Choice.ATK);
    document.getElementById('resText').innerHTML= "p1Choice's ATK is higher than p2Choice's. P1 Wins."
}

    if (p1Choice.ATK<p2Choice.ATK) {
    document.getElementById('resText1').innerHTML= "P1 ATK:"+JSON.stringify(p1Choice.ATK,) + "<br>"+"P2 ATK:"+JSON.stringify(p2Choice.ATK);;
    document.getElementById('resText').innerHTML= "p2Choice's ATK is higher than p1Choice's. P2 Wins."
}

 else {
    document.getElementById('resText1').innerHTML= "P1 ATK:"+JSON.stringify(p1Choice.ATK,) + "<br>"+"P2 ATK:"+JSON.stringify(p2Choice.ATK);
    document.getElementById('resText').innerHTML= "p1Choice's ATK are the same as p2Choice's.Stalemate"
}
})

