import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
