import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-guards',
  templateUrl: './guards.component.html',
  styleUrls: ['./guards.component.css']
})
export class GuardsComponent {
  url:string = "http://localhost:3000/guards";
  localApi:string = "assets/db/db.json";

  guards : any[] = [];



  constructor(private http: HttpClient){}
  ngOnInit(){
    this.getGuard();

  }
  getGuard(){
    this.http.get(this.url).subscribe((response:any)=>{
      this.guards = response;
    },
  
  (error) =>{
    this.http.get(this.localApi).subscribe((res:any)=>{
      this.guards = res.guards;
    })
  })
  }

  
  showAll = false; // متغير للتحكم في عرض جميع العناصر

}


