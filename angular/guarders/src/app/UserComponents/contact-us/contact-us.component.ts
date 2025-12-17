import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Route, Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})

export class ContactUsComponent {
  url:string = 'http://localhost:3000/customers/';

  addCostamer:any = {
    name: '',
    gmail: '',
    phone: '',
    message: '',
  }





 isSubmitted: boolean = false;  // Flag to show success message

  constructor(private http:HttpClient, private router: Router){}
 submit(form:NgForm){
  this.http.post(this.url, this.addCostamer).subscribe((response:any)=>{
    this.addCostamer = response;
     // Show success message
     this.isSubmitted = true;

     form.resetForm();
     
     setTimeout(() => {
      this.isSubmitted = false;   
     }, 3000);
  });


 }


}



 


