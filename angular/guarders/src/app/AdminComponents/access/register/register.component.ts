import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { users } from 'src/app/models/user';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
    // دي بخذن فيها بيانات ال api
    allusers: any = [];
    issuccess:boolean = false; // الرساله دي بتتحقق في حاله الشرط الاول اتحقق فقط
    issuccess2:boolean = false;
  url: string = "http://localhost:3000/users/";
  // user = new users();
  user:any = new users();
 

    constructor(private http:HttpClient , private router:Router){}

    isSubmitted: boolean = false;  // Flag to show success message
    ngOnInit(){
      this.getAllUsers();
      
  
    }
 
     // هنا انا خذنت البيانات من ال api  الي المصفوفه allusers
  getAllUsers() {
    this.http.get(this.url).subscribe((res: any) => {
      this.allusers = res;
    });
  }


    onSubmit(data:any){
       // تحقق هل الايميل موجود ولا لا
    const index = this.allusers.findIndex((user: any) => user.email === this.user.email);

    // الشرط دا لو موجود طيبع لي انه موجود
    if (index !== -1) {
      this.issuccess = true;
      setTimeout(() => {
        this.issuccess = false;
       }, 3000);
      console.log("هذا الايميل موجود بالفعل");
      
      // الشرط دا لو ما موجود يضيفه لي 
    } else {
      this.http.post(this.url, this.user).subscribe((res: any) => {
        console.log("تم إنشاء مستخدم جديد");
        // this.adduser = {};  // تصفير الفورم
        this.getAllUsers(); // تحديث بيانات المستخدمين بعد الإضافة
        this.issuccess2 = true;
        setTimeout(()=>{
          this.issuccess2 = false;
          this.router.navigateByUrl('/login')
          
        }, 3000)
      });
    }
  }
    }


