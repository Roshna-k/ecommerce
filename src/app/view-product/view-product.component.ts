import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit {
id:any
body:any
productList:any

  constructor(private api:ApiService,private activatedRoute:ActivatedRoute,private cartService:CartService) { }

  ngOnInit(): void {
this.activatedRoute.params.subscribe((data)=>{
  this.id=data['id']
  
})

    this.api.viewProduct(this.id)
    .subscribe((result)=>{
this.body=result
console.log('body',this.body);
      this.productList = result;
      this.productList.forEach((a:any)=>{
        Object.assign(a,{total:a.price})
      })

    })
  }
  
  
  
  addtocart(item: any){
    this.cartService.addtocart(item);
    alert("Product added to cart")

  }
  

}
