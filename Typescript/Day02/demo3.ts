// annonymous function
// function does not have name 
// It excecute there itself 

let temp1=function (){
    console.log("First type of annonymous function");
}

// temp1();

let temp2= function (a:number,b:number):number{
    return (a+b);
}

let res= temp2(10,20);
// console.log("Result is "+res)


// fat arrow function/ Arrow function 

let temp3= ()=>{
    console.log("First type of fat arrow function is called ")
}

// temp3();

let temp4= (a:number,b:number):number=>{
    return (a+b);
}
// console.log("Addition is "+temp4(40,5));



// Optional Parameter Function 

function add1(a:number,b?:number){
    console.log("Value of a is "+a);//41
    console.log("Value of b is "+b);//undefined
    console.log("Addition of a+b is "+(a+b!)); // NAN=> Not a Number
}

// add1(41);
// add1(41,2);

function add2(a?:number,b?:number){
    console.log("Value of a is "+a);//41
    console.log("Value of b is "+b);//undefined
    console.log("Addition of a+b is "+(a!+b!)); // NAN=> Not a Number
}

// add2();


//Default parameter Function 


function add3(a:number,b:number=10){
    console.log("Value of a is "+a);//50
    console.log("Value of b is "+b);//10
    console.log("Addition of a+b is "+(a+b)); // 30 
}

// add3(20);
// add3(50,7);

function add4(a:number=20,b:number){
    console.log("Value of a is "+a);//50
    console.log("Value of b is "+b);//10
    console.log("Addition of a+b is "+(a+b)); // 30 
}

// add4(40,7)

function add5(a:number=20,b?:number){
    console.log("Value of a is "+a);//50
    console.log("Value of b is "+b);//10
    console.log("Addition of a+b is "+(a+b)); // 30 
}

// add5();



