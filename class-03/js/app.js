'use strict';
alert('Hi '+client+'! Welcome to our website:)')
var qu= confirm('Your are gonna to guessing some question about me, are you ready?')
console.log('qu',qu)
if (qu==true) {
var a= prompt('Is my gender female?(y/n)')
if (a.toLowerCase()=='y'||a.toLowerCase()=='yes') {
    var aa='incorrect'
}else{if (a.toLowerCase()=='n'||a.toLowerCase()=='no') {
    aa='correct'
}else{
    aa= 'incorrect'}
}
console.log('Is my gender female?Answer '+a+', and it is '+aa)
alert('Is my gender female?Answer '+a+', and it is '+aa)
var b= prompt('Is my nationalty jordanian?(y/n) ')
if (b.toLowerCase()=='y'||b.toLowerCase()=='yes') {
    var ab='correct'
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
} else {
    ac='incorrect'
}
    
}
console.log('I have 10 brothers.?Answer '+c+', and it is '+ac)
alert('I have 10 brothers.?Answer '+c+', and it is '+ac)
var e= prompt('I have 3 sisters.?(y/n)')
if (e.toLowerCase()=='y'||e.toLowerCase()=='yes') {
    var ae='correct'
}else{
    ae= 'incorrect'
}
console.log('I have 3 sisters.?Answer '+e+', and it is '+ae)
alert('I have 3 sisters.?Answer '+e+', and it is '+ae)
var d= prompt('Is that true about i love anime.?(y/n)')
if (d.toLowerCase()=='y'||d.toLowerCase()=='yes') {
    var ad='correct'
}else{
    ad= 'incorrect'
}
console.log('Is that true about i love anime.?Answer '+d+', and it is '+ad)
alert('Is that true about i love anime.?Answer '+d+', and it is '+ad)
}
