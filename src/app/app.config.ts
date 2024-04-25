import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import {provideAuth,getAuth} from '@angular/fire/auth';
import {provideFirebaseApp, initializeApp} from '@angular/fire/app';



import { routes } from './app.routes';

const firebaseConfig = {
  apiKey: "AIzaSyDkhDklt80JWW8R8-O3iVMTXZhl-LQTP9M",
  authDomain: "sala-de-juegos-laboiv-a8803.firebaseapp.com",
  projectId: "sala-de-juegos-laboiv-a8803",
  storageBucket: "sala-de-juegos-laboiv-a8803.appspot.com",
  messagingSenderId: "180597478060",
  appId: "1:180597478060:web:ba336c80f25e9cdefdc509"
};

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes),
  importProvidersFrom([
    provideFirebaseApp(()=> initializeApp(firebaseConfig)),
  provideAuth(()=>getAuth())])
]

};
//const app = initializeApp(firebaseConfig);
