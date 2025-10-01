import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomePageComponent } from "./pages/home-page/home-page.component";
import { TopMessageBarComponent } from "./components/top-message-bar/top-message-bar.component";
import { TopNavigationComponent } from "./components/top-navigation/top-navigation.component";
import { BottomNavigationComponent } from "./components/bottom-navigation/bottom-navigation.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HomePageComponent,
    TopMessageBarComponent,
    TopNavigationComponent,
    BottomNavigationComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ECommerce';
}
