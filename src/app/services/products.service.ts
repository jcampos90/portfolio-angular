import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../interfaces/product.interface';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  isLoading = true;
  products: Product[] = [];
  filteredProducts: Product[] = [];

  constructor(private http: HttpClient) {
    this.getProducts();
  }

  private getProducts() {
    return new Promise((resolve, reject) => {
      this.http
        .get<Product[]>(
          'https://angular-portfolio-1266c-default-rtdb.firebaseio.com/products_idx.json'
        )
        .subscribe((data) => {
          //console.log(data);
          this.products = data;
          this.isLoading = false;
          resolve(1);
        });
    });
  }

  getProduct<T>(id: string) {
    return this.http.get<T>(
      `https://angular-portfolio-1266c-default-rtdb.firebaseio.com/products/${id}.json`
    );
  }

  searchProducts(filterText: string) {
    if (this.products.length == 0) {
      // esperar la carga de productos
      this.getProducts().then(() => {
        this.filterProducts(filterText);
      });
    } else {
      this.filterProducts(filterText);
    }
  }

  private filterProducts(filterText: string) {
    this.filteredProducts = [];

    filterText = filterText.toLowerCase();

    this.products.forEach((p) => {
      if (
        p.categoria.toLowerCase().indexOf(filterText) >= 0 ||
        p.titulo.toLowerCase().indexOf(filterText) >= 0
      ) {
        this.filteredProducts.push(p);
      }
    });
  }
}
