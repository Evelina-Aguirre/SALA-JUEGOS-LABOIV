import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { QuienSoyComponent } from './quien-soy/quien-soy.component';
import { RegistroComponent } from './registro/registro.component';

export const routes: Routes = [

    { path: '', redirectTo: '/Login', pathMatch: "full" },
    { path: 'registro', component: RegistroComponent },
    { path: 'login', component: LoginComponent },
    { path: 'home', component: HomeComponent },
    { path: 'quien-soy', component: QuienSoyComponent },
    { path: '**', redirectTo: '/login' }

];
