import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-guard',
  templateUrl: './add-guard.component.html',
  styleUrls: ['./add-guard.component.css']
})

export class AddGuardComponent {

  base64:any = ''
  message:boolean = false;


  url: string = "http://localhost:3000/guards/";
  guards  = {
    name: '',
    photo: '',
    description: '',
     
  };
  


  constructor(private http: HttpClient, private router: Router) {}


  submit(form:any) {
    this.http.post(this.url, this.guards).subscribe((response: any) => {
      this.guards = response; 
      form.resetForm();   
    }); 

    
    this.message = true;
    setTimeout(() => {
      this.message = false;    
    }, 3000);

  }




  getimagepath(event: any) {
    // نحصل على أول ملف اختاره المستخدم من العنصر <input type="file">
    const file = event.target.files[0];
  
    // نستخدم FileReader لقراءة محتوى الملف
    const reader = new FileReader();
  
    // نقرأ الملف كـ Data URL (Base64) عشان نقدر نخزنه كنص
    reader.readAsDataURL(file);
  
    // لما يتم الانتهاء من القراءة:
    reader.onload = () => {
      // نحفظ النتيجة (الصورة بصيغة base64) داخل حقل photo في كائن guards
      this.guards.photo = reader.result as string;
  
      // نطبع الناتج في الكونسول للتأكد
      console.log('Base64 Image:', this.guards.photo);
    };
  }
  
  

  
}






