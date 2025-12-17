import { HttpClient } from '@angular/common/http';
import { Component, CSP_NONCE } from '@angular/core';
import { Router } from '@angular/router';
import { Admins } from 'src/app/models/admin';
import { users } from 'src/app/models/user';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
 
  user = new users();
  admin = new Admins();
  message = 'the email or passworld is incurrect';
  helloMesage = '';

    constructor(private http:HttpClient, private router:Router){}
    ngOnInit(){
      this.onLogin;    
    }

    isSubmitted: boolean = false;  // Flag to show success message
    unSubmitted: boolean = false;  // Flag to show unSuccess message

    onLogin(data: any) {
      // تنفيذ الطلبين معًا باستخدام forkJoin
      forkJoin({
        admins: this.http.get("http://localhost:3000/admins"),
        users: this.http.get("http://localhost:3000/users"),
      }).subscribe({
        next: ({ admins, users }: any) => {
          // البحث عن admin
          const admin = admins.find((data: any) => 
            data.email == this.admin.email && data.password == this.admin.password
          );
    
          // البحث عن user
          const user = users.find((data: any) => 
            data.email == this.admin.email && data.password == this.admin.password
          );
    
          if (admin) {
            localStorage.setItem('admin', JSON.stringify(admin));
            setTimeout(() => {
              this.isSubmitted = true;
              this.router.navigateByUrl('/admin');
             }, 2000);

             setTimeout(() => {
              this.isSubmitted = true;
             }, 100);

            this.helloMesage = data.name;
          } else if (user) {
            localStorage.setItem('user', JSON.stringify(user));
            this.helloMesage = data.name;
            setTimeout(() => {
              this.isSubmitted = true;
              this.router.navigateByUrl('/home');
             }, 2000);

             setTimeout(() => {
              this.isSubmitted = true;
             }, 100);
          
            
          } else {
            
            console.log('Invalid credentials');
            this.unSubmitted = true;
            setTimeout(() => {
              this.unSubmitted = false;
              
            }, 3000);        
          }
          
        },
        // error: (err) => {
        //   console.error('Error fetching data:', err);
        //   this.message = 'An error occurred while logging in. Please try again later.';
          
        // },
      });

      

     
    }
    

    
    


    

    



  
    
    

}
