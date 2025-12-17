import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GuarderService {
  url:string = "http://localhost:3000/newsletter/"

  constructor(private http:HttpClient) { }
  getnewsletter(){
    return this.http.get(this.url);
  }
  
  addnewsletter(data:any){
    return this.http.post(this.url, data);
  }



}
