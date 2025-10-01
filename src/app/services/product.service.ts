import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, retry } from "rxjs";
import { Product } from "../models/product.model";
import { environment } from '../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

    private baseUrl = environment.apiBaseUrl;

    constructor(private http: HttpClient) { }

    getAll(): Observable<Product[]> {
        return this.http.get<Product[]>(this.baseUrl);
    }

    getProductImageIds(productId: string): Observable<string[]> {        
        return this.http.get<string[]>(`${this.baseUrl}/${productId}/images`);
    }

    getById(id: string): Observable<Product> {
        return this.http.get<Product>(`${this.baseUrl}/${id}`);
    }
}