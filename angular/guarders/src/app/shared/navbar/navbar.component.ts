import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  url:string = "http://localhost:3000/users/";

  public totalItem: number = 0;


  
  user!:any ;
  isAdmin:boolean = false;
  isLoggedIn: boolean = false;

  constructor(private router: Router, private http:HttpClient){}
  
 
  ngOnInit(){

    // نتحقق هل المفتاح 'admin' موجود
    this.isAdmin = localStorage.getItem('admin') !== null;

    // التحقق من تسجيل الدخول سواء كان user أو admin
    const user = localStorage.getItem('user');
    const admin = localStorage.getItem('admin');
    this.isLoggedIn = !!(user || admin); // true لو فيه واحد منهم
    

  

    this.http.get(this.url).subscribe((res:any)=>{
      this.totalItem = res.length;
    })
    const userData = localStorage.getItem('user');
    this.user = userData ? JSON.parse(userData) : null;

   
    
  }
  logOut(){
    localStorage.removeItem('user');
    this.user = null;
    this.router.navigateByUrl('/login')

  }
  // scroll to top 
  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }


  



  
}
