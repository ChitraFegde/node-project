const app=require('./app')
console.log(app.xyz());
console.log(app.x);

var a='20';
var b=20;
var c=60;
console.log(a+b+c);
// Loop
for(i=0; i <=10 ; i++ ) {
    console.log(i);
}
//  Conditions
if(a === 20){
    console.log('Matched');
}else{
    console.log('Not matched');
}

if(b == 20){
    console.log('Matched');
}else{
    console.log('Not matched');
}
//  Array
const arr=[4,1,6,3,4,89,0];
console.log(arr);
console.log(arr[1]);

let array=[4,1,6,3,4,89,0];

const result =array.filter((item)=>{
    // console.log(item);
    // return item===3
    return item>=4
});

console.log(result);


fs.W