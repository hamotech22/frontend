import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-guards-list',
  templateUrl: './guards-list.component.html',
  styleUrls: ['./guards-list.component.css']
})
export class GuardsListComponent {
    url:string = "http://localhost:3000/guards/";
  
  
  listGuards : any[] = [];

  
  constructor(private http:HttpClient ){}


  ngOnInit(){
    this.getguards();
   
   
  }
  
  
  
  getguards(){
    this.http.get( this.url ).subscribe((data:any) =>{
      this.listGuards = data;
    });
  }
  
  
  deletCustm(id:any){
    this.http.delete(this.url + id).subscribe((response:any) =>{
      if(response){
        this.getguards();
      }
    });
    };





}
