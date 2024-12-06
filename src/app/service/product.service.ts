import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../model/product/product.model';


const baseUrl = 'http://localhost:3000/api/products/';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private _http: HttpClient) {}

  getAllProducts(): Observable<Product[]> {
    return this._http.get<Product[]>(baseUrl + `getAllProducts`);
  }


  getProductById(id: any): Observable<Product> {
    return this._http.get<Product>(`${baseUrl}/getProductById/${id}`);
  }
}
