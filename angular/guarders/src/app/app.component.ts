
import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import * as AOS from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  role:string = "";

  
  constructor(private router: Router){}
  ngOnInit(): void {
 
    const userData = localStorage.getItem('admin');
    this.role = userData ? JSON.parse(userData) : null;




    




    // AOS animaton
    AOS.init();
  }
  // scroll btn
  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }


  isLoading = true;  // يتم تفعيل الـ spinner عند بداية تحميل الصفحة

 
 

 





  

  
}

