import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent {
  url:string = "http://localhost:3000/customers/";


customers : any[] = [];


constructor(private http:HttpClient){}
ngOnInit(){
  this.getCustomer();
 
}



getCustomer(){
  this.http.get( this.url ).subscribe((data:any) =>{
    this.customers = data;
  });
}



deletCustm(id:any){
  this.http.delete(this.url + id).subscribe((response:any) =>{
    if(response){
      this.getCustomer();
    }
  });
  };

}
