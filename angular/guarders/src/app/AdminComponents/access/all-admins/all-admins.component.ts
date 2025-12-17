import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-all-admins',
  templateUrl: './all-admins.component.html',
  styleUrls: ['./all-admins.component.css']
})
export class AllAdminsComponent {
     url:string = "http://localhost:3000/admins/";
    
     admins : any[] = [];
     constructor(private http:HttpClient){}
     ngOnInit(){
       this.getAdmins(); 
     }
     getAdmins(){
       this.http.get( this.url ).subscribe((data:any) =>{
         this.admins = data;
       });
     } 
  
     deletAdmins(id:any){
       this.http.delete(this.url + id).subscribe((response:any) =>{
         if(response){
           this.getAdmins();
         }
       });
       };

}
