// let a = 20;
// let b = 40;

// setTimeout(()=>{
//     b=20;
// })

// console.log(a+b);


// >>>>>>>>>>>>>>>>>>>>>>Handle async programing <<<<<<<<<<<<<<<<

let a = "vik";
let b = 40;

let watingData = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve(20);
    },2000)
})

watingData.then((data)=>{
    b=data;
    console.log(a/b);
})
