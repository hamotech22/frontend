import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { GuarderService } from 'src/app/services/guarder.service';

@Component({
  selector: 'app-newsletter-list',
  templateUrl: './newsletter-list.component.html',
  styleUrls: ['./newsletter-list.component.css']
})
export class NewsletterListComponent {
  url:any = "http://localhost:3000/newsletter/";
  newsdata:any[] = [];


  constructor(private api:GuarderService , private http:HttpClient){}
  ngOnInit(){
    this.getnewsletter();

  }

  getnewsletter(){
    this.api.getnewsletter().subscribe((res:any)=>{
      this.newsdata = res;    
    })
  }


  
    

  
  delete(id:any){
    this.http.delete(this.url + id).subscribe((res:any)=>{
      if(res){
        this.getnewsletter();
      }
    })

  }

}
