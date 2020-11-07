import {timePasses} from './timePasses.mjs';

console.log('this');
console.log('is');
setTimeout(() => console.log('.'), 1000);
setTimeout(go, 100);

let count = 0;
while (timePasses(1500)) {}

console.log('sample');

function go() {
  up();
}

function up() {
  theStack();
}

function theStack() {
  console.log('tree');
}
