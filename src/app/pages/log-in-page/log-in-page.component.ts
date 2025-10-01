import { Component } from '@angular/core';
import { LogInFormComponent } from "../../components/log-in-form/log-in-form.component";

@Component({
  selector: 'app-log-in-page',
  standalone: true,
  imports: [LogInFormComponent],
  templateUrl: './log-in-page.component.html',
  styleUrl: './log-in-page.component.scss'
})
export class LogInPageComponent {

}
