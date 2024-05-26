import { Injectable } from '@angular/core';
import { CartaInterface } from '../home/juegos/mayormenor/carta.interface';

@Injectable({
  providedIn: 'root'
})
export class CartasService {

  constructor() { }

 public mazo: CartaInterface[] = [];
  generarMazo(): CartaInterface[] {
   
  let a2:CartaInterface={
    numero:2, rutaImagen:"../../../../assets/images/cartas/a2"
  }
  let a3:CartaInterface={
    numero:3, rutaImagen:"../../../../assets/images/cartas/a3"
  }
  let a4:CartaInterface={
    numero:4, rutaImagen:"../../../../assets/images/cartas/a4"
  }
  let a5:CartaInterface={
    numero:5, rutaImagen:"../../../../assets/images/cartas/a5"
  }
   let a6:CartaInterface={
    numero:6, rutaImagen:"../../../../assets/images/cartas/a6"
  }
  let a7:CartaInterface={
    numero:7, rutaImagen:"../../../../assets/images/cartas/a7"
  }
  let a8:CartaInterface={
    numero:8, rutaImagen:"../../../../assets/images/cartas/a8"
  }
  let a9:CartaInterface={
    numero:9, rutaImagen:"../../../../assets/images/cartas/a9"
  }
  let a10:CartaInterface={
    numero:10, rutaImagen:"../../../../assets/images/cartas/a10"
  }
  let a11:CartaInterface={
    numero:11, rutaImagen:"../../../../assets/images/cartas/a11"
  }
  let a12:CartaInterface={
    numero:12, rutaImagen:"../../../../assets/images/cartas/a12"
  }
  let b2:CartaInterface={
    numero:2, rutaImagen:"../../../../assets/images/cartas/b2"
  }
  let b3:CartaInterface={
    numero:3, rutaImagen:"../../../../assets/images/cartas/b3"
  }
  let b4:CartaInterface={
    numero:4, rutaImagen:"../../../../assets/images/cartas/b4"
  }
  let b5:CartaInterface={
    numero:5, rutaImagen:"../../../../assets/images/cartas/b5"
  }
   let b6:CartaInterface={
    numero:6, rutaImagen:"../../../../assets/images/cartas/b6"
  }
  let b7:CartaInterface={
    numero:7, rutaImagen:"../../../../assets/images/cartas/b7"
  }
  let b8:CartaInterface={
    numero:8, rutaImagen:"../../../../assets/images/cartas/b8"
  }
  let b9:CartaInterface={
    numero:9, rutaImagen:"../../../../assets/images/cartas/b9"
  }
  let b10:CartaInterface={
    numero:10, rutaImagen:"../../../../assets/images/cartas/b10"
  }
  let b11:CartaInterface={
    numero:11, rutaImagen:"../../../../assets/images/cartas/b11"
  }
  let b12:CartaInterface={
    numero:12, rutaImagen:"../../../../assets/images/cartas/b12"
  }
  let c2:CartaInterface={
    numero:2, rutaImagen:"../../../../assets/images/cartas/c2"
  }
  let c3:CartaInterface={
    numero:3, rutaImagen:"../../../../assets/images/cartas/c3"
  }
  let c4:CartaInterface={
    numero:4, rutaImagen:"../../../../assets/images/cartas/c4"
  }
  let c5:CartaInterface={
    numero:5, rutaImagen:"../../../../assets/images/cartas/c5"
  }
   let c6:CartaInterface={
    numero:6, rutaImagen:"../../../../assets/images/cartas/c6"
  }
  let c7:CartaInterface={
    numero:7, rutaImagen:"../../../../assets/images/cartas/c7"
  }
  let c8:CartaInterface={
    numero:8, rutaImagen:"../../../../assets/images/cartas/c8"
  }
  let c9:CartaInterface={
    numero:9, rutaImagen:"../../../../assets/images/cartas/c9"
  }
  let c10:CartaInterface={
    numero:10, rutaImagen:"../../../../assets/images/cartas/c10"
  }
  let c11:CartaInterface={
    numero:11, rutaImagen:"../../../../assets/images/cartas/c11"
  }
  let c12:CartaInterface={
    numero:12, rutaImagen:"../../../../assets/images/cartas/c12"
  }

  let d2:CartaInterface={
    numero:2, rutaImagen:"../../../../assets/images/cartas/d2"
  }
  let d3:CartaInterface={
    numero:3, rutaImagen:"../../../../assets/images/cartas/d3"
  }
  let d4:CartaInterface={
    numero:4, rutaImagen:"../../../../assets/images/cartas/d4"
  }
  let d5:CartaInterface={
    numero:5, rutaImagen:"../../../../assets/images/cartas/d5"
  }
   let d6:CartaInterface={
    numero:6, rutaImagen:"../../../../assets/images/cartas/d6"
  }
  let d7:CartaInterface={
    numero:7, rutaImagen:"../../../../assets/images/cartas/d7"
  }
  let d8:CartaInterface={
    numero:8, rutaImagen:"../../../../assets/images/cartas/d8"
  }
  let d9:CartaInterface={
    numero:9, rutaImagen:"../../../../assets/images/cartas/d9"
  }
  let d10:CartaInterface={
    numero:10, rutaImagen:"../../../../assets/images/cartas/d10"
  }
  let d11:CartaInterface={
    numero:11, rutaImagen:"../../../../assets/images/cartas/d11"
  }
  let d12:CartaInterface={
    numero:12, rutaImagen:"../../../../assets/images/cartas/d12"
  }

  this.mazo.push(a2);
  this.mazo.push(a3);
  this.mazo.push(a4);
  this.mazo.push(a5);
  this.mazo.push(a6);
  this.mazo.push(a7);
  this.mazo.push(a8);
  this.mazo.push(a9);
  this.mazo.push(a10);
  this.mazo.push(a11);
  this.mazo.push(a12);
  this.mazo.push(b2);
  this.mazo.push(b3);
  this.mazo.push(b4);
  this.mazo.push(b5);
  this.mazo.push(b6);
  this.mazo.push(b7);
  this.mazo.push(b8);
  this.mazo.push(b9);
  this.mazo.push(b10);
  this.mazo.push(b11);
  this.mazo.push(b12);
  this.mazo.push(c2);
  this.mazo.push(c3);
  this.mazo.push(c4);
  this.mazo.push(c5);
  this.mazo.push(c6);
  this.mazo.push(c7);
  this.mazo.push(c8);
  this.mazo.push(c9);
  this.mazo.push(c10);
  this.mazo.push(c11);
  this.mazo.push(c12);
  this.mazo.push(d2);
  this.mazo.push(d3);
  this.mazo.push(d4);
  this.mazo.push(d5);
  this.mazo.push(d6);
  this.mazo.push(d7);
  this.mazo.push(d8);
  this.mazo.push(d9);
  this.mazo.push(d10);
  this.mazo.push(d11);
  this.mazo.push(d12);

    return this.mazo;
  }
}
