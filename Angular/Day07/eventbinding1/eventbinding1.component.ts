import { Component } from '@angular/core';

@Component({
  selector: 'app-eventbinding1',
  templateUrl: './eventbinding1.component.html',
  styleUrls: ['./eventbinding1.component.css']
})
export class Eventbinding1Component {
   num=0;
   result:number=0;
   name:string='';

  onClick(){  

    if(this.num==0){
      console.log("Click Event Occur...");
      this.num++;
    }
    
  }

  onImage(){
    console.log("Image Click Occur...")
  }

  onSend(myvalue:string){
    console.log(myvalue)
  }

  onAddition(num1:any,num2:any){

    // let n1=+num1;
    // let n2=+num2;
    // this.result=n1+n2;
    this.result=num1+num2;
  }

  onChange(myname:string){
    console.log(myname)
  }


  
}
