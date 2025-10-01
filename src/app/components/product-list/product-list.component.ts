import { Component, Input, OnInit } from '@angular/core';

import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product.model';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-product-list',
  standalone: true,
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent  implements OnInit {

  @Input() isGrid: boolean = false;

  products: Product[] = [];
  
  numbers = Array.from({ length: 8 }, (_, i) => i + 1); // 1 to 8

  constructor(private productService: ProductService) {}

  ngOnInit(): void {    
    this.productService.getAll().subscribe(products => {
      if (products.length > 10) {
        this.products = products.slice(0, 10); 
      } else {
        this.products = products; 
      }
           
      products.forEach(product => {
        this.getProductImageIds(product.id);
      })
    })
  }

  getProductImageIds(productId: string) {
    this.productService.getProductImageIds(productId).subscribe(imageIds => {
      this.products.find(x => x.id === productId)!.imageIds = imageIds;
    })
  }

  getImageUrl(imageId?: string) {
    const url = environment.apiBaseUrl + '/images/' + imageId;
    return url;
  }
}
