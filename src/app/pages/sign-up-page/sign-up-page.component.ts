import { Component } from '@angular/core';
import { TopNavigationComponent } from "../../components/top-navigation/top-navigation.component";
import { TopMessageBarComponent } from "../../components/top-message-bar/top-message-bar.component";
import { BottomNavigationComponent } from "../../components/bottom-navigation/bottom-navigation.component";
import { SignUpFormComponent } from "../../components/sign-up-form/sign-up-form.component";
import { LogInFormComponent } from "../../components/log-in-form/log-in-form.component";

@Component({
  selector: 'app-sign-up-page',
  standalone: true,
  imports: [SignUpFormComponent, LogInFormComponent],
  templateUrl: './sign-up-page.component.html',
  styleUrl: './sign-up-page.component.scss'
})
export class SignUpPageComponent {

}
