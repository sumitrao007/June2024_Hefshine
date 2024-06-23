import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {

    strMsg:string="Welcome to Angular Module...";

    jsonObj={
      id:9,
      fname:"Sumit"
    };
    receivedStrData:any='';
    receivedArrObj:any[]=[];

}
