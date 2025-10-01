import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SignUpPageComponent } from './pages/sign-up-page/sign-up-page.component';
import { LogInPageComponent } from './pages/log-in-page/log-in-page.component';
import { WishListPageComponent } from './pages/wish-list-page/wish-list-page.component';
import { CartPageComponent } from './pages/cart-page/cart-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';

export const routes: Routes = [
    { path: 'home-page', component: HomePageComponent },
    { path: 'sign-up-page', component: SignUpPageComponent },
    { path: 'log-in-page', component: LogInPageComponent },
    { path: 'wish-list-page', component: WishListPageComponent },
    { path: 'cart-page', component: CartPageComponent },
    { path: 'about-page', component: AboutPageComponent },
    { path: 'contact-page', component: ContactPageComponent },
];
