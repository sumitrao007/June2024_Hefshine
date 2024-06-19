// json Object => java Script Object Notation
// Key & value Format 
var obj = {
    id: 9,
    "fname": "sumit",
    lname: "Raokhande"
};
// 1 dot operator 
// 2 square operator
// 1 dot operator 
// console.log(`
//         Id          :: ${obj.id}
//         First Name  :: ${obj.fname}
//         Last Name   :: ${obj.lname}
//     `);
// 2 square operator
console.log("\n    Id          :: ".concat(obj["id"], "\n    First Name  :: ").concat(obj['fname'], "\n    Last Name   :: ").concat(obj["lname"], "\n"));
