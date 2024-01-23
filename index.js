// // import {x} from './app'

const app = require('./app');
// console.log(app.x);
// console.log(app.y);
// console.log(app.z());

let arr = [1,2,3,4,5,6,5];

let result = arr.filter((item)=>{
    return item==5;
});
console.log(result);