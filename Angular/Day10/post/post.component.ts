import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  posts:any[]=[];
  id:number=0;
  title:string='';
  body!:string;
  isHidden:boolean=true;

  constructor(private service:HttpService){
  }

  ngOnInit(): void {
    this.getData();
  }

  getData(){
    this.service.getPostData()
    .subscribe((myresponse:any)=>{
        // console.log(myresponse);
        this.posts=myresponse;
    },(myerror)=>{
      alert("Error Occured...");
    })
  }


  onSend(mytitle:any,mybody:any){
    let obj={
      title:mytitle,
      body:mybody
    }

    this.service.postData(obj)
    .subscribe((response)=>{
        console.log(response);
    })

  }

  onEdit(item:any){
    console.log(item);
    this.id=item.id;
    this.title=item.title;
    this.body=item.body;
    this.isHidden=false;
  }

  onUpdate(){
    let obj={
      id:this.id,
      title:this.title,
      body:this.body
    }

    this.service.updatedata(obj)
    .subscribe((response)=>{
      console.log(response);
    })
  }

  onDelete(id:any){
    this.service.deleteData(id)
    .subscribe((response)=>{
      console.log(response);
    })
  }


}
