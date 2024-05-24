import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { QuienSoyComponent } from './quien-soy/quien-soy.component';
import { RegistroComponent } from './registro/registro.component';
import { ChatComponent } from './home/chat/chat.component';
import { JuegosComponent } from './home/juegos/juegos.component';
import { usuarioLogueadoGGuard } from './guards/usuario-logueado-g.guard';

export const routes: Routes = [

    { path: '', redirectTo: '/Login', pathMatch: "full" },
    {
        path: 'registro',
        loadComponent: () => import('./registro/registro.component').then(m => m.RegistroComponent)
    },
    {
        path: 'login',
        loadComponent: () => import('./login/login.component').then(m => m.LoginComponent)
    },
    {
        path: 'chat',
        loadComponent: () => import('./home/chat/chat.component').then(m => m.ChatComponent),
        canActivate:[usuarioLogueadoGGuard]
        
    },
    {
        path: 'juegos',
        loadComponent: () => import('./home/juegos/juegos.component').then(m => m.JuegosComponent)
    },
    {
        path: 'home',
        loadComponent: () => import('./home/home.component').then(m => m.HomeComponent)
    },
    {
        path: 'quien-soy',
        loadComponent: () => import('./quien-soy/quien-soy.component').then(m => m.QuienSoyComponent)
    },
    { path: '**', redirectTo: '/login' },
    {
        path:'ahorcado',
        loadComponent:() => import('./juegos/ahorcado/ahorcado.component').then(m=>m.AhorcadoComponent)
    },
    {
        path:'mayormenor',
        loadComponent:() => import('./juegos/mayormenor/mayormenor.component').then(m=>m.MayormenorComponent)
    },
    {
        path:'preguntados',
        loadComponent:() => import('./juegos/preguntados/preguntados.component').then(m=>m.PreguntadosComponent)
    }

];
