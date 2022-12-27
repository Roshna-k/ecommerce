import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { MenComponent } from './men/men.component';
import { MoreProductsComponent } from './more-products/more-products.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ViewProductComponent } from './view-product/view-product.component';
import { WomenComponent } from './women/women.component';

const routes: Routes = [
  {
    path:'',component:ProductListComponent
  },
  {
    path:'moreProducts',component:MoreProductsComponent
  },
  {
    path:'men',component:MenComponent
  },
  {
    path:'women',component:WomenComponent
  },
  {
    path:'view-product/:id',component:ViewProductComponent
  },
 
  {
    path:'cart',component:CartComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
