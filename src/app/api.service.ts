import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import{BehaviorSubject} from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class ApiService {
searchTerm=new BehaviorSubject("")
  constructor(private http:HttpClient) { 

  }
  getProducts(){
    return this.http.get('http://localhost:3000/getProducts')
  }
  getMenProduct(){
    return this.http.get('http://localhost:3000/getMenProduct')
  }
  
  getWomenProduct(){
    return this.http.get('http://localhost:3000/getWomenProduct')
  }
  viewProduct(id:any){
    return this.http.get('http://localhost:3000/viewProduct/'+id)
  }
}
