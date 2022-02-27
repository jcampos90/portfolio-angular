import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../interfaces/product.interface';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  isLoading = true;
  products: Product[] = [];

  constructor(private http: HttpClient) {
    this.getProducts();
  }

  private getProducts() {
    this.http
      .get<Product[]>(
        'https://angular-portfolio-1266c-default-rtdb.firebaseio.com/products_idx.json'
      )
      .subscribe((data) => {
        console.log(data);
        this.products = data;
        setTimeout(() => {
          this.isLoading = false;
        }, 1000);
      });
  }
}
