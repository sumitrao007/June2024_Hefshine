// annonymous function
// function does not have name 
// It excecute there itself 
var temp1 = function () {
    console.log("First type of annonymous function");
};
// temp1();
var temp2 = function (a, b) {
    return (a + b);
};
var res = temp2(10, 20);
// console.log("Result is "+res)
// fat arrow function/ Arrow function 
var temp3 = function () {
    console.log("First type of fat arrow function is called ");
};
// temp3();
var temp4 = function (a, b) {
    return (a + b);
};
// console.log("Addition is "+temp4(40,5));
// Optional Parameter Function 
function add1(a, b) {
    console.log("Value of a is " + a); //41
    console.log("Value of b is " + b); //undefined
    console.log("Addition of a+b is " + (a + b)); // NAN=> Not a Number
}
// add1(41);
// add1(41,2);
function add2(a, b) {
    console.log("Value of a is " + a); //41
    console.log("Value of b is " + b); //undefined
    console.log("Addition of a+b is " + (a + b)); // NAN=> Not a Number
}
// add2();
//Default parameter Function 
function add3(a, b) {
    if (b === void 0) { b = 10; }
    console.log("Value of a is " + a); //50
    console.log("Value of b is " + b); //10
    console.log("Addition of a+b is " + (a + b)); // 30 
}
// add3(20);
// add3(50,7);
function add4(a, b) {
    if (a === void 0) { a = 20; }
    console.log("Value of a is " + a); //50
    console.log("Value of b is " + b); //10
    console.log("Addition of a+b is " + (a + b)); // 30 
}
// add4(40,7)
function add5(a, b) {
    if (a === void 0) { a = 20; }
    console.log("Value of a is " + a); //50
    console.log("Value of b is " + b); //10
    console.log("Addition of a+b is " + (a + b)); // 30 
}
add5();
