import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { SobreMi } from './pages/sobre-mi/sobre-mi';
import { MisProyectos } from './pages/mis-proyectos/mis-proyectos';
import { Contacto } from './pages/contacto/contacto';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: Home },
    { path: 'sobre-mi', component: SobreMi },
    { path: 'mis-proyectos', component: MisProyectos },
    { path: 'contacto', component: Contacto },
    { path: '**', redirectTo: '/home' }
];
