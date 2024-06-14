import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MasculinoComponent } from './components/masculinoPage/masculino/masculino.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path:'masculino',
        component: MasculinoComponent
    },
    {
        path: 'feminino',
        component: HomeComponent
    },
    {
        path: 'infantil',
        component: HomeComponent
    },
];
