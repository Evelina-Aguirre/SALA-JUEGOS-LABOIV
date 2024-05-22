import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { QuienSoyComponent } from './quien-soy/quien-soy.component';
import { RegistroComponent } from './registro/registro.component';
import { ChatComponent } from './home/chat/chat.component';
import { JuegosComponent } from './home/juegos/juegos.component';

export const routes: Routes = [

    { path: '', redirectTo: '/Login', pathMatch: "full" },
    { path: 'registro', component: RegistroComponent },
    { path: 'login', component: LoginComponent },
    { path: 'chat', component: ChatComponent},
    { path: 'juegos', component: JuegosComponent},
    { path: 'home', component: HomeComponent },
    { path: 'quien-soy', component: QuienSoyComponent },
    { path: '**', redirectTo: '/login' }

];
