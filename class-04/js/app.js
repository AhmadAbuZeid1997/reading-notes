'use strict';
var t=0;
alert('Hi '+client+'! Welcome to our website:)')
var qu= confirm('Your are gonna to guessing some question about me, are you ready?')
console.log('qu',qu)
if (qu==true) {
var a= prompt('Is my gender female?(y/n)')
if (a.toLowerCase()=='y'||a.toLowerCase()=='yes') {
    var aa='incorrect' 
}else{if (a.toLowerCase()=='n'||a.toLowerCase()=='no') {
    aa='correct'
    t=t+1;
}else{
    aa= 'incorrect'}
}
console.log('Is my gender female?Answer '+a+', and it is '+aa)
alert('Is my gender female?Answer '+a+', and it is '+aa)
var b= prompt('Is my nationalty jordanian?(y/n) ')
if (b.toLowerCase()=='y'||b.toLowerCase()=='yes') {
    var ab='correct'
    t=t+1;
}else{
    ab= 'incorrect'
}
console.log('Is my nationalty jordanian?Answer '+b+', and it is '+ab)
alert('Is my nationalty jordanian?Answer '+b+', and it is '+ab)
var c= prompt('I have 10 brothers.?(y/n)')
if (c.toLowerCase()=='y'||c.toLowerCase()=='yes') {
    var ac='incorrect'
}else{if ((c.toLowerCase()=='n'||c.toLowerCase()=='no') ) {
    ac= 'correct'
    t=t+1;
} else {
    ac='incorrect'
}
    
}
console.log('I have 10 brothers.?Answer '+c+', and it is '+ac)
alert('I have 10 brothers.?Answer '+c+', and it is '+ac)
var e= prompt('I have 3 sisters.?(y/n)')
if (e.toLowerCase()=='y'||e.toLowerCase()=='yes') {
    var ae='correct'
    t=t+1;
}else{
    ae= 'incorrect'
}
console.log('I have 3 sisters.?Answer '+e+', and it is '+ae)
alert('I have 3 sisters.?Answer '+e+', and it is '+ae)
var d= prompt('Is that true about i love anime.?(y/n)')
if (d.toLowerCase()=='y'||d.toLowerCase()=='yes') {
    var ad='correct'
    t=t+1;
}else{
    ad= 'incorrect'
}
console.log('Is that true about i love anime.?Answer '+d+', and it is '+ad)
alert('Is that true about i love anime.?Answer '+d+', and it is '+ad)
}
var i=4
do {var ag=prompt("So guess how many person my family including me!?hint:5-15(you have "+i+" attempts)")
console.log('how many person my family including me! '+i+' attempt is'+ag)
    if (parseInt(ag)===10) {
        alert('you are right :)')
        t=t+1;
        break;
    } else {
        switch (ag) {
            case '5':
                alert('you are too low')
                break;
            case '6':
                alert('you are too low')
                break;
            case '7':
                alert('you are low')
                break;
            case '8':
                alert('you are close,but low')
                break;
            case '9':
                alert('you close, more one step ^-*')
                break;
            case '11':
                alert('you close, make a step down ^-*')
                break;
            case '12':
                alert('you close,but high')
                break;
            case '13':
                alert('you high')
                break;
            case '14':
                alert('you too high')
                break;
            case '15':
                alert('you too high')
                break;
            default:
                alert('please try in this range 5-15')
                break;
      
     }
     i--
    }
    while (i===0) {
        alert('Hard luck ):, We are 10')
        i--
    }
} while (i>0);
var nam=[30,26,38,33]
i=6
var j;
outer: do {
    var ga = prompt('guess the age one of my brothers?!(you have ' + i + ' attempt)')
    console.log('guess the age one of my brothers? '+i+' attempt is'+ga)
    for (let j = 0; j < nam.length; j++) {
        if (nam[j] === parseInt(ga)) {
            alert('you are right my one of my brother in ' + ga + ' years old')
            t=t+1;
            break outer;
        }
    }
   
while (i===1) {
    alert('hard luck ): my brother ages ' + nam[0]+' '+ nam[1]+' '+nam[2]+' '+ nam[3])
    break outer;
}
alert('wrong answer')
        i--
    }
while (i > 0);

alert('you have '+t+' correct answer from 7 answer')