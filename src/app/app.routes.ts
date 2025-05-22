import { Routes } from '@angular/router';
import {LabsComponent} from './pages/labs/labs.component';
import {HomeComponent} from './pages/home/home.component';
import path from 'path';


export const routes: Routes = [
    {
        path: 'home',
        component : HomeComponent

    },
      {
        path: 'labs',
        component : LabsComponent

    },
];
