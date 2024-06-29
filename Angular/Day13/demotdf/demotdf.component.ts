import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-demotdf',
  templateUrl: './demotdf.component.html',
  styleUrls: ['./demotdf.component.css']
})
export class DemotdfComponent {


  onSubmit(f:NgForm){
    console.log("Username:: "+f.value.myusername);
    console.log("Comment:: "+f.value.comment);

    
  }
}
