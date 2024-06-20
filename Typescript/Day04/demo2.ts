class Myclass{
   private id:number;
   public fname:string;
   protected lname:string;

    constructor(id:number,f:string,l:string){
        this.id=id;
        this.fname=f;
        this.lname=l;
    }

    

    display(){
        console.log(`
          ID        :: ${this.id}  
          First name:: ${this.fname}
          Last name :: ${this.lname}
         `)
    }

}

let obj=new Myclass(9,"Spruha",'Raokhande');
obj.display();