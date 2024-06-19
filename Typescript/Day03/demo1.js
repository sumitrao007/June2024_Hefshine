// let a:number[]=[10,20,30,40];
// for(let i=0;i<a.length;i++){
//     console.log("Array value is "+a[i])
// }
// console.log(a);
// console.log(a.join(" "))
// console.log(a.join())
// a.forEach((myvalue,i,arr)=>{
//     console.log(myvalue+" Index is "+i+" Array is "+arr)
// });
// let a:number[]=[];
// push & Pop
// LIFO Principal 
// a.push(10);
// console.log(a);
// a.push(20,30,60);
// console.log(a);
// let temp=a.pop();
// console.log(a);
// console.log("Poped value is "+temp)
// let a:number[]=[10,20,50,80];
// // splice
// a.splice(2,0,100);
// console.log(a);
// a.splice(1,0,200,800,900);
// console.log(a);
// a.splice(3,1);
// console.log(a);
// a.splice(1,2);
// console.log(a);
// map method
// 
var a = [2, 3, 4, 5, 6];
var sqrarr = a.map(function (myvalue) {
    return (myvalue * myvalue);
});
console.log(a);
console.log("Sqr Array " + sqrarr);
