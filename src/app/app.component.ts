import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// Componentes de la landing page
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Ioxmedica';
}
