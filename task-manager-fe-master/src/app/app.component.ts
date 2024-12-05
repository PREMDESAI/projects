import { Component } from '@angular/core';
import { HeaderComponent } from "./components/shared/header/header.component";
import { FooterComponent } from "./components/shared/footer/footer.component";
import { HomeComponent } from "./components/home/home.component";

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, FooterComponent, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'task-manager-fe';
}
