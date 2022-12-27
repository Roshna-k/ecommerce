import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-more-products',
  templateUrl: './more-products.component.html',
  styleUrls: ['./more-products.component.css']
})
export class MoreProductsComponent implements OnInit {
  productList:any=[]
search:any
  constructor(private api:ApiService,private cartService:CartService) { }

  ngOnInit(): void {
    this.api.getProducts()
    .subscribe((result)=>{
      this.productList=result
      console.log( this.productList);

    })
    this.api.searchTerm.subscribe((data)=>{
      this.search=data
    })
  }

  addtocart(item: any){
    this.cartService.addtocart(item);
    alert("Product added to cart")

  }
  

}
