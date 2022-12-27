import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { __values } from 'tslib';

@Injectable({
  providedIn: 'root'
})
export class CartService {
   cartItemListArray : any =[]
   cartItemList = new BehaviorSubject([]);  
  constructor() { }
  getProducts(){
  return this.cartItemList.asObservable();
 
  
  }

  addtocart(product : any){
    this.cartItemListArray.push(product);
     this.cartItemList.next(this.cartItemListArray);
    console.log(this.cartItemListArray)
    let cart=this.cartItemList['_value']
    localStorage.setItem("cart",JSON.stringify(cart))

  }
  }