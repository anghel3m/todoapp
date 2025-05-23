import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'todoapp';
  welcome = 'Bienvenido a tu lista de tareas';
  tasks=[
    'instalar angular Cli',
    'crear proyecto',
    'crear componente',
    'crear servicio'
  ];
}
