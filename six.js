import {timePasses} from './timePasses.mjs';

console.log('this');
setTimeout(() => console.log('.'), 1000);
console.log('is');
setTimeout(() => console.log('six'), 100);
console.log('sample');

while (timePasses(Number.MAX_SAFE_INTEGER)) {
    // don't do this.
}