console.log('this');

console.log('is');

go('sample');

console.log('two');

go('.');

function go(msg) {
  up(msg);
}

function up(msg) {
  theStack(msg);
}

function theStack(msg) {
  console.log(msg);
}