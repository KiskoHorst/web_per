'use strict';
const num1 = document.getElementById('num1');
const num2 = document.getElementById('num2');
const sum = document.getElementById('sum');
const sub = document.getElementById('sub');
const multi = document.getElementById('multi');
const div = document.getElementById('div');
const vastaus = document.getElementById('vastaus');

const yhteen = (e) => (vastaus.innerHTML = parseFloat(num1.value)+parseFloat(num2.value));
const vahennys = (e) => (vastaus.innerHTML = parseFloat(num1.value)-parseFloat(num2.value));
const kerto = (e) => (vastaus.innerHTML = parseFloat(num1.value)*parseFloat(num2.value));
const jako = (e) => (vastaus.innerHTML = parseFloat(num1.value)/parseFloat(num2.value));

sum.addEventListener('click', yhteen);
sub.addEventListener('click', vahennys);
multi.addEventListener('click', kerto);
div.addEventListener('click', jako);