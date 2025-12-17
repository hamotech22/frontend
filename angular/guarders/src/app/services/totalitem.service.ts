import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TotalitemService {

  constructor(private  http:HttpClient) { }

  useritem(){
    return this.http.get("http://localhost:3000/users/");
  }

  custmitem(){
    return this.http.get("http://localhost:3000/customers/");
  }

  guarditem(){
    return this.http.get("http://localhost:3000/guards/");
  }
  newsletterItem(){
    return this.http.get("http://localhost:3000/newsletter/");
  }

}


