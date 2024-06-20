// Array of Object 
let arrObj=[
    {
        id:9,
        fname:"Sumit",
        lname:"Raokhande",
        country:{
            cid:1,
            cname:"India"
        },
        month:["Jan","March","Dec"],
        result:[
            {
                subj:"M1",
                marks:40
            },
            {
                subj:"M2",
                marks:45
            },
            {
                subj:"M3",
                marks:55
            }
        ]
    },
    {
        id:6,
        fname:"Kiran",
        lname:"Raokhande",
        country:{
            cid:2,
            cname:"US"
        },
        month:["Feb","May","Aug"],
        result:[
            {
                subj:"M1",
                marks:50
            },
            {
                subj:"M2",
                marks:60
            },
            {
                subj:"M3",
                marks:68
            }
        ]
    },
    {
        id:3,
        fname:"Spruha",
        lname:"Raokhande",
        country:{
            cid:3,
            cname:"Japan"
        },
        month:["April","July","Oct"],
        result:[
            {
                subj:"M1",
                marks:50
            },
            {
                subj:"M2",
                marks:85
            },
            {
                subj:"M3",
                marks:75
            }
        ]
    }
];

    for(let i=0;i<arrObj.length;i++){
        console.log(`
           ID           :: ${arrObj[i].id} 
           First Name   :: ${arrObj[i].fname}
           Last Name    :: ${arrObj[i].lname}
           Country      :: ${arrObj[i].country.cname}
           Month        :: ${arrObj[i].month.join(" ")}
            ==============Result==============
         `);

         for(let j=0;j<arrObj[i].result.length;j++){

            console.log(`
                    Subject :: ${arrObj[i].result[j].subj}
                    Marks   :: ${arrObj[i].result[j].marks}
                `)
         }

    }