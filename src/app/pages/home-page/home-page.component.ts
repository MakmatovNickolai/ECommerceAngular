import { Component } from '@angular/core';
import { ProductListComponent } from '../../components/product-list/product-list.component';
import { TopNavigationComponent } from '../../components/top-navigation/top-navigation.component';
import { CategoryListComponent } from '../../components/category-list/category-list.component';
import { CarouselBannerComponent } from '../../components/carousel-banner/carousel-banner.component';
import { TopMessageBarComponent } from '../../components/top-message-bar/top-message-bar.component';
import { HomePageDivideHeadingComponent } from '../../components/home-page-divide-heading/home-page-divide-heading.component';
import { CategoryListImgComponent } from '../../components/category-list-img/category-list-img.component';
import { BenefitsListComponent } from '../../components/benefits-list/benefits-list.component';
import { BottomNavigationComponent } from '../../components/bottom-navigation/bottom-navigation.component';
import { HomeExclusiveOfferComponent } from '../../components/home-exclusive-offer/home-exclusive-offer.component';
import { NewProductsGridComponent } from '../../components/new-products-grid/new-products-grid.component';


@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    ProductListComponent,
    TopNavigationComponent,
    CategoryListComponent,
    CarouselBannerComponent,
    TopMessageBarComponent,
    HomePageDivideHeadingComponent,
    CategoryListImgComponent,
    HomeExclusiveOfferComponent,
    BenefitsListComponent,
    BottomNavigationComponent,
    NewProductsGridComponent
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

}
