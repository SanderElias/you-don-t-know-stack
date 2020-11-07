console.log('this');

console.log('is');

go();

console.log('two');

console.log('.');

function go() {
  up();
}

function up() {
  theStack();
}

function theStack() {
  console.log('tree');
}