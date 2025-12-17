import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router  } from '@angular/router';

@Component({
  selector: 'app-edit-guard',
  templateUrl: './edit-guard.component.html',
  styleUrls: ['./edit-guard.component.css']
})
export class EditGuardComponent {
  guard_id:any = "";
  message:boolean = false;

  url:any = "http://localhost:3000/guards/";
  guards:any = {
    photo: '',
    name: '',
    descripton:'',
  }
  constructor(private http:HttpClient, private activatedRoute: ActivatedRoute, private router: Router){}
  ngOnInit(){
    this.activatedRoute.paramMap.subscribe((response)=>{
      this.guard_id = response.get('id') || '';
    });
    this.http.get( this.url+ this.guard_id).subscribe((response)=>{
      this.guards = response;
    });

   
  }



  update(){
     // نعمل تحديث للبيانات باستخدام HTTP PUT
    this.http.put(this.url+ this.guard_id, this.guards).subscribe((response)=>{

      // بعد ما التحديث يتم بنجاح، نحول المستخدم إلى صفحة الـ dashboard
    // لكن نضيف queryParam اسمه comp علشان نعرف شنو نعرض جوّا الـ dashboard

      this.message = true;
      setTimeout(() => {
        this.message = false;  
        this.router.navigate(['/admin/dashboard'], {
          queryParams: { comp: '/view-guards' }
        });
      }, 3000);
      
    });

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
