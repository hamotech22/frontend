import { Component , } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {  ActivatedRoute, Params, Router } from '@angular/router';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { TotalitemService } from 'src/app/services/totalitem.service';
import { BehaviorSubject } from 'rxjs';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {


  // *****************  total item by index ****************
  public usertotalItem: number = 0;
  public custmtotalItem:number = 0;
  public guardtotalItem:number = 0;
  public newslettertotalItem:number = 0;
  //***************************//


  currentComponent: string = ''; // لتحديد المكون الذي سيتم عرضه

  showComponent(component: string) {
    this.currentComponent = component;
  }


  admin!:any ;
  constructor(private router: Router , private http: HttpClient,  private api: TotalitemService, private route:ActivatedRoute){
  const loggedIn = localStorage.getItem('admin');
  if (loggedIn === null || JSON.parse(loggedIn) === false) {
    this.router.navigateByUrl('/login');
  }


  }
  
  
  ngOnInit(){
    //////////////// total item //////////////////////


    this.api.useritem().subscribe((res:any)=>{
      this.usertotalItem = res.length;
    });
    this.api.custmitem().subscribe((res:any)=>{
      this.custmtotalItem = res.length;
    });
    this.api.guarditem().subscribe((res:any)=>{
      this.guardtotalItem = res.length;
    });

    this.api.newsletterItem().subscribe((res:any)=>{
      this.newslettertotalItem = res.length;
    });

   
    const adminData = localStorage.getItem('admin');
    this.admin = adminData ? JSON.parse(adminData) : null;
  
  }



  logOut(){
    localStorage.removeItem('admin');
    // this.admin = null;
    this.router.navigateByUrl('/login')

  }


  // activeItem: string = '';
  // setActive(item: string): void  {
  //   this.activeItem = item;
  // }

  

}
