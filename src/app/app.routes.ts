import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { QuienSoyComponent } from './quien-soy/quien-soy.component';

export const routes: Routes = [

    { path: '', redirectTo: '/Login', pathMatch: "full" },
    { path: 'login', component: LoginComponent },
    { path: 'home', component: HomeComponent },
    { path: 'quien-soy', component: QuienSoyComponent },
    { path: '', redirectTo: '/login', pathMatch: 'full' }, 
    { path: '**', redirectTo: '/login' }

];
