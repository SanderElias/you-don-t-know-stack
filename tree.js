console.log('this');
setTimeout(() => go('three'), 100);
go('is');
setTimeout(() => console.log('.'), 1000);
go('sample');

function go(msg) {
  up(msg);
}

function up(msg) {
  theStack(msg);
}

function theStack(msg) {
  console.log(msg);
}
