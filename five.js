import {itBreaks} from './timePasses.mjs';

console.log('this');
itBreaks(() => console.log('. <-- should be there!'), 1000);
console.log('is');
setTimeout(() => console.log('five'), 100);
console.log('sample');

