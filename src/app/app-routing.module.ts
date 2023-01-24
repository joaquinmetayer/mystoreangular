import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // Al ingresar, como router-oulet va a remplazar todo lo que se encuentre adntro y va a 
  // mostrar lo que le definimos, cuando ingrese en el / va a mostrar los products
  { path: '', redirectTo: '/products', pathMatch: 'full' },
  // Lazy loading de las rutas
  { path: 'products', loadChildren: () => import('./pages/products/products.module').then(m => m.ProductsModule) },
  { path: 'checkout', loadChildren: () => import('./pages/checkout/checkout.module').then(m => m.CheckoutModule) },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
