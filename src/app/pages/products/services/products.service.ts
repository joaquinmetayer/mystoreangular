import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../interfaces/product.interface';

@Injectable({
  // Servcio disponible para toda mi aplicacion
  // El service es una capa que usamos para manejar los datos
  providedIn: 'root'
})
export class ProductsService {
  private apiURl = 'http://localhost:3000/products';
  constructor(private http: HttpClient) { }

  // El obervable es como hacer una promesa para traer los datos como en react
  // El Product[] viene de la interface diciendole que checkee que sea con esa interface y me
  // traiga todos los datos en un array
  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiURl);
  }

  updateStock(productId: number, stock: number): Observable<any> {
    const body = { "stock": stock };
    return this.http.patch<any>(`${this.apiURl}/${productId}`, body);
  }


}
