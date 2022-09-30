import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { DemoListComponent } from './demo-list/demo-list.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  {
    path: "product",
    component: ProductsComponent,
  },
  {
    path: "demo",
    component: DemoListComponent,
  },
  {
    path: "cart",
    component: CartComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
