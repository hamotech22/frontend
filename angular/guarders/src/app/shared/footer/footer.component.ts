import { HttpClient } from '@angular/common/http';
import { Component  } from '@angular/core';
import { NgForm } from '@angular/forms';
import { GuarderService } from 'src/app/services/guarder.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
url:string = "http://localhost:3000/footer/";
 localApi:string = "assets/db/db.json";
footer: any[] = [];
newsData:any = {}
newsllater:any = {}
message:boolean = false;


constructor(private  http:HttpClient, private api:GuarderService){}
ngOnInit(){
  this.getFoter();

}
  

getFoter(){
  this.http.get(this.url).subscribe((response:any)=>{
    this.footer = response;

  },
(error) =>{
  this.http.get(this.localApi).subscribe((res:any)=>{
    this.footer = res.footer;
    
  })
}

);
}


getnewsData(){
  this.api.getnewsletter().subscribe((res:any)=>{
    this.newsData = res;
  })
}

submit(form:NgForm){
  this.api.addnewsletter(this.newsllater).subscribe((res:any)=>{
    this.newsData = res;
    form.resetForm();

    this.message = true;
    setTimeout(() => {
      this.message = false     
    }, 3000);

  })


  

}

 // scroll to top 
 scrollToSection(sectionId: string) {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}

}
