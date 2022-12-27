import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
   products:any=[]
   totalPrice =0
   cartItemList = new BehaviorSubject([])

  cartItemListArray:any=[]
    constructor(private cartService:CartService,private router:Router) { }

  ngOnInit(): void {
  if(localStorage.getItem("cart")){
    this.products=JSON.parse(localStorage.getItem('cart')!)
this.cartItemListArray.push(this.products)
console.log(this.cartItemListArray);
  }

}
removeItemCart(products:any){
  this.products.map((item:any,index:any)=>{
    if(products.id==item.id){
      this.products.splice(index,1)
    }
  })
  this.cartItemList.next(this.products)
}

checkout(){
 
    alert('Your order is confirmed!!!')
  this.router.navigateByUrl("")
  }
  
}


