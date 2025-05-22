import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-labs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './labs.component.html',
  styleUrl: './labs.component.css'
})
export class LabsComponent {
  title = 'todoapp';
  welcome = 'Bienvenido a tu lista de tareas';
  tasks=[
    'instalar angular Cli',
    'crear proyecto',
    'crear componente',
    'crear servicio'
  ];
}
