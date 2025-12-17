import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Admins } from 'src/app/models/admin';

@Component({
  selector: 'app-add-admin',
  templateUrl: './add-admin.component.html',
  styleUrls: ['./add-admin.component.css']
})
export class AddAdminComponent {
    url: string = "http://localhost:3000/admins/";
    admin = new Admins();
  


  
    // Admins : any[] = [];  
      constructor(private http:HttpClient, private router:Router){}
      ngOnInit(){
        this.onSubmit;
        
    
      }
        
      
      onSubmit(data:any){
        this.http.post( this.url , this.admin ).subscribe((data:any) =>{
          this.admin = data;
          this.router.navigateByUrl('/login');

        });
      }
  

}
