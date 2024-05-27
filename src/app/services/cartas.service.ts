import { Injectable } from '@angular/core';
import { CartaInterface } from '../home/juegos/mayormenor/carta.interface';


@Injectable({
  providedIn: 'root'
})
export class CartasService {

  constructor() { }
public cartaSignoPregunta:CartaInterface = {numero:1,rutaImagen:"../../../../assets/images/abcd.png"};
public cartaInicial:CartaInterface = {numero:7,rutaImagen:"../../../../assets/images/cartas/c7.png"}
 public mazo: CartaInterface[] = [];
  generarMazo(): CartaInterface[] {
   
  let a2:CartaInterface={
    numero:2, rutaImagen:"../../../../assets/images/cartas/a2.png"
  }
  let a3:CartaInterface={
    numero:3, rutaImagen:"../../../../assets/images/cartas/a3.png"
  }
  let a4:CartaInterface={
    numero:4, rutaImagen:"../../../../assets/images/cartas/a4.png"
  }
  let a5:CartaInterface={
    numero:5, rutaImagen:"../../../../assets/images/cartas/a5.png"
  }
   let a6:CartaInterface={
    numero:6, rutaImagen:"../../../../assets/images/cartas/a6.png"
  }
  let a7:CartaInterface={
    numero:7, rutaImagen:"../../../../assets/images/cartas/a7.png"
  }
  let a8:CartaInterface={
    numero:8, rutaImagen:"../../../../assets/images/cartas/a8.png"
  }
  let a9:CartaInterface={
    numero:9, rutaImagen:"../../../../assets/images/cartas/a9.png"
  }
  let a10:CartaInterface={
    numero:10, rutaImagen:"../../../../assets/images/cartas/a10.png"
  }
  let a11:CartaInterface={
    numero:11, rutaImagen:"../../../../assets/images/cartas/a11.png"
  }
  let a12:CartaInterface={
    numero:12, rutaImagen:"../../../../assets/images/cartas/a12.png"
  }
  let b2:CartaInterface={
    numero:2, rutaImagen:"../../../../assets/images/cartas/b2.png"
  }
  let b3:CartaInterface={
    numero:3, rutaImagen:"../../../../assets/images/cartas/b3.png"
  }
  let b4:CartaInterface={
    numero:4, rutaImagen:"../../../../assets/images/cartas/b4.png"
  }
  let b5:CartaInterface={
    numero:5, rutaImagen:"../../../../assets/images/cartas/b5.png"
  }
   let b6:CartaInterface={
    numero:6, rutaImagen:"../../../../assets/images/cartas/b6.png"
  }
  let b7:CartaInterface={
    numero:7, rutaImagen:"../../../../assets/images/cartas/b7.png"
  }
  let b8:CartaInterface={
    numero:8, rutaImagen:"../../../../assets/images/cartas/b8.png"
  }
  let b9:CartaInterface={
    numero:9, rutaImagen:"../../../../assets/images/cartas/b9.png"
  }
  let b10:CartaInterface={
    numero:10, rutaImagen:"../../../../assets/images/cartas/b10.png"
  }
  let b11:CartaInterface={
    numero:11, rutaImagen:"../../../../assets/images/cartas/b11.png"
  }
  let b12:CartaInterface={
    numero:12, rutaImagen:"../../../../assets/images/cartas/b12.png"
  }
  let c2:CartaInterface={
    numero:2, rutaImagen:"../../../../assets/images/cartas/c2.png"
  }
  let c3:CartaInterface={
    numero:3, rutaImagen:"../../../../assets/images/cartas/c3.png"
  }
  let c4:CartaInterface={
    numero:4, rutaImagen:"../../../../assets/images/cartas/c4.png"
  }
  let c5:CartaInterface={
    numero:5, rutaImagen:"../../../../assets/images/cartas/c5.png"
  }
   let c6:CartaInterface={
    numero:6, rutaImagen:"../../../../assets/images/cartas/c6.png"
  }
  let c7:CartaInterface={
    numero:7, rutaImagen:"../../../../assets/images/cartas/c7.png"
  }
  let c8:CartaInterface={
    numero:8, rutaImagen:"../../../../assets/images/cartas/c8.png"
  }
  let c9:CartaInterface={
    numero:9, rutaImagen:"../../../../assets/images/cartas/c9.png"
  }
  let c10:CartaInterface={
    numero:10, rutaImagen:"../../../../assets/images/cartas/c10.png"
  }
  let c11:CartaInterface={
    numero:11, rutaImagen:"../../../../assets/images/cartas/c11.png"
  }
  let c12:CartaInterface={
    numero:12, rutaImagen:"../../../../assets/images/cartas/c12.png"
  }

  let d2:CartaInterface={
    numero:2, rutaImagen:"../../../../assets/images/cartas/d2.png"
  }
  let d3:CartaInterface={
    numero:3, rutaImagen:"../../../../assets/images/cartas/d3.png"
  }
  let d4:CartaInterface={
    numero:4, rutaImagen:"../../../../assets/images/cartas/d4.png"
  }
  let d5:CartaInterface={
    numero:5, rutaImagen:"../../../../assets/images/cartas/d5.png"
  }
   let d6:CartaInterface={
    numero:6, rutaImagen:"../../../../assets/images/cartas/d6.png"
  }
  let d7:CartaInterface={
    numero:7, rutaImagen:"../../../../assets/images/cartas/d7.png"
  }
  let d8:CartaInterface={
    numero:8, rutaImagen:"../../../../assets/images/cartas/d8.png"
  }
  let d9:CartaInterface={
    numero:9, rutaImagen:"../../../../assets/images/cartas/d9.png"
  }
  let d10:CartaInterface={
    numero:10, rutaImagen:"../../../../assets/images/cartas/d10.png"
  }
  let d11:CartaInterface={
    numero:11, rutaImagen:"../../../../assets/images/cartas/d11.png"
  }
  let d12:CartaInterface={
    numero:12, rutaImagen:"../../../../assets/images/cartas/d12.png"
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
