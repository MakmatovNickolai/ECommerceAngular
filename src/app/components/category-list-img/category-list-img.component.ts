import { Component } from '@angular/core';

@Component({
  selector: 'app-category-list-img',
  standalone: true,
  imports: [],
  templateUrl: './category-list-img.component.html',
  styleUrl: './category-list-img.component.scss'
})
export class CategoryListImgComponent {

  numbers = Array.from({ length: 15 }, (_, i) => i + 1);

}
