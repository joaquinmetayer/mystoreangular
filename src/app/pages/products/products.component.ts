import { Component, OnInit } from '@angular/core';
import { ProductsService } from './services/products.service';
import { tap } from 'rxjs/operators';
import { Product } from './interfaces/product.interface';
import { ShoppingCartService } from 'src/app/shared/services/shopping-cart.service';

// El componente productos es el encargado de mostrar todos los productos que se encuentren en la API
// creando asi muchos product... como si fuese un map de react

@Component({
  selector: 'app-products',
  // decaro a este componente un template inline para no agregar el HTML
  template: `
    <section class="products">
      <app-product (addToCartClick)="addToCart($event)" [product]="product" *ngFor="let product of products"></app-product>
    </section>`,
  styleUrls: ['./products.component.scss']
})

export class ProductsComponent implements OnInit {
  products!: Product[];

  // Ejecutamos el constructor
  constructor(private productSvc: ProductsService, private shoppingCartSvc: ShoppingCartService) { }

  // Ejecutamos el onInit cuando se inicia el componente
  ngOnInit(): void {
    this.productSvc.getProducts()
      // pipe nos ayuda a convertir datos
      .pipe(
        tap((products: Product[]) => this.products = products)
      )
      .subscribe();
  }
 
  // Le paso como parametro el producto que seleccione
  // diciendole que el producto que le digo es igual al Product, o sea el que le pase
  addToCart(product: Product): void {
    console.log('Add to cart', product);
    this.shoppingCartSvc.updateCart(product);
  }

}
