import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {
   url:string = "http://localhost:3000/users/";
  
   users : any[] = [];
   constructor(private http:HttpClient, private router:Router){}
   ngOnInit(){
     this.getUser(); 
   }
   getUser(){
     this.http.get( this.url ).subscribe((data:any) =>{
       this.users = data;
     });
   } 

   deletUser(id:any){
     this.http.delete(this.url + id).subscribe((response:any) =>{
       if(response){
         this.getUser();

         this.router.navigate(['/admin/dashboard', {queryParms:'user'}]);
        

         
       }
     });
     };
   }
    