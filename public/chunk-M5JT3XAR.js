import{b as Y}from"./chunk-ZN5QAZKN.js";import{f as I}from"./chunk-XZGO7AMH.js";import{$b as T,Bb as M,Ga as d,Ha as f,Xa as p,Za as c,ac as J,bb as a,bc as E,cb as s,db as h,dc as X,gb as v,ha as b,jb as m,lb as u,ob as k,pb as y,qa as _,qb as P,ra as C,rb as l,sb as x,ub as O,va as j,zb as w}from"./chunk-SQWIEUAN.js";import"./chunk-WCZP2BTM.js";import"./chunk-CQCHLVVT.js";var R=["laberintoContainer"],A=(e,t,r,i)=>({pasillo:e,pared:t,salida:r,jugador:i});function F(e,t){if(e&1&&h(0,"div",9),e&2){let r=t.$implicit,i=t.index,n=u().index,o=u();c("ngClass",M(1,A,r===0,r===1,r===2,n===o.jugadorX&&i===o.jugadorY))}}function z(e,t){if(e&1&&(a(0,"div",7),p(1,F,1,6,"div",8),s()),e&2){let r=t.$implicit;d(),c("ngForOf",r)}}function N(e,t){if(e&1){let r=v();a(0,"div",10)(1,"span"),l(2),s(),a(3,"button",11),m("click",function(){_(r);let n=u();return C(n.resultado())}),l(4,"Volver a jugar!"),s()()}if(e&2){let r=u();d(2),x(r.mensaje)}}var B=(()=>{let t=class t{constructor(i,n){this.router=i,this.elementRef=n,this.laberinto=[[0,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,0,0,1,0,1,0],[1,0,0,0,1,1,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0],[1,1,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,0,1,1,0,1,0,1,0,1,0],[0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,1,1,0,0,0,1,0,1,1,1,0],[1,0,1,1,1,0,1,0,1,1,1,0,1,0,1,0,1,0,1,0,1,0,1,1,1,0,1,0,1,0],[1,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0],[1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,0,0,1,0,1,0,1,0,1,0,1,0,1,0],[1,0,0,0,1,0,0,0,1,0,0,1,1,1,0,0,1,0,0,0,1,0,1,0,0,0,0,1,1,0],[1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,1,1,0,1,0],[0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,1,0,0,1,0,0,0,0,1,0,0,0,0,0,2]],this.jugadorX=0,this.jugadorY=0,this.mensaje="",this.tiempoRestante=0,this.tiempoTranscurrido=0,this.perdiste=!0,this.intentos=0,this.puntosAcumulados=0,this.inicioJuego=!1}iniciarJuego(){this.elementRef.nativeElement.focus(),this.inicioJuego=!0,this.intentos++;let i=15e3;this.perdiste=!1,this.timer=setInterval(()=>{this.tiempoTranscurrido<i&&(this.tiempoTranscurrido+=1e3),this.tiempoTranscurrido==i&&(clearInterval(this.timer),clearTimeout(this.timer),this.perdiste=!0,this.mensaje="Se acab\xF3 el tiempo! (\u2565_\u2565)")},1e3)}ngOnDestroy(){clearTimeout(this.timer)}moverJugador(i){if(console.log(this.perdiste),this.inicioJuego){switch(i.key){case"ArrowUp":console.log("arriba"),this.jugadorX>0&&this.laberinto[this.jugadorX-1][this.jugadorY]===0&&this.jugadorX--;break;case"ArrowDown":this.jugadorX<this.laberinto.length-1&&(this.laberinto[this.jugadorX+1][this.jugadorY]===2||this.laberinto[this.jugadorX+1][this.jugadorY]===0)&&this.jugadorX++;break;case"ArrowLeft":this.jugadorY>0&&(this.laberinto[this.jugadorX][this.jugadorY-1]===2||this.laberinto[this.jugadorX][this.jugadorY-1]===0)&&this.jugadorY--;break;case"ArrowRight":this.jugadorY<this.laberinto[this.jugadorX].length-1&&(this.laberinto[this.jugadorX][this.jugadorY+1]===2||this.laberinto[this.jugadorX][this.jugadorY+1]===0)&&this.jugadorY++;break}this.laberinto[this.jugadorX][this.jugadorY]===2&&!this.perdiste&&(this.puntosAcumulados++,this.mensaje="\xA1GANASTE! \\(^\u25BD^)/ ",clearInterval(this.timer),clearTimeout(this.timer))}}resultado(){this.router.navigateByUrl("/refresh",{skipLocationChange:!0}).then(()=>{this.router.navigate(["/laberinto"])})}};t.\u0275fac=function(n){return new(n||t)(f(I),f(j))},t.\u0275cmp=b({type:t,selectors:[["app-juego-propio"]],viewQuery:function(n,o){if(n&1&&k(R,5),n&2){let g;y(g=P())&&(o.startCell=g.first)}},standalone:!0,features:[w],decls:18,vars:5,consts:[[1,"container"],[1,"puntos"],[1,"laberinto-info"],[1,"iniciarJuego",3,"click"],["tabindex","0",1,"laberinto",3,"keydown"],["class","fila",4,"ngFor","ngForOf"],["class","mensajeResultado",4,"ngIf"],[1,"fila"],["class","celda",3,"ngClass",4,"ngFor","ngForOf"],[1,"celda",3,"ngClass"],[1,"mensajeResultado"],[1,"continuar",3,"click"]],template:function(n,o){n&1&&(a(0,"body"),h(1,"app-navbar"),a(2,"div",0)(3,"div",1)(4,"h4"),l(5),s()(),a(6,"h1"),l(7,"LABERINTO"),s(),a(8,"div",2)(9,"h3"),l(10,"Ten\xE9s 15 segundos para llegar a la salida!"),s(),a(11,"h2"),l(12),s()(),a(13,"button",3),m("click",function(){return o.iniciarJuego()}),l(14,"Iniciar Juego!"),s(),a(15,"div",4),m("keydown",function(S){return o.moverJugador(S)}),p(16,z,2,1,"div",5),s()(),p(17,N,5,1,"div",6),s()),n&2&&(d(5),O("Puntos acumulados : ",o.puntosAcumulados," | Intentos:",o.intentos,""),d(7),x(o.tiempoTranscurrido/1e3),d(4),c("ngForOf",o.laberinto),d(),c("ngIf",o.mensaje!==""))},dependencies:[Y,X,T,J,E],styles:['body[_ngcontent-%COMP%]{background-image:url("./media/f4-AZC6R3VF.jpg");margin:0;font-family:Ubuntu,sans-serif;background-size:100% 100%;height:100vh;width:100%}.container[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;align-items:center;height:70%;width:40%;margin-left:30%}.laberinto-info[_ngcontent-%COMP%]{display:flex;flex-direction:column}h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%]{color:#f0f8ff}h1[_ngcontent-%COMP%]{font-size:40px;text-shadow:3px 3px 5px rgba(0,0,0,.3)}h2[_ngcontent-%COMP%]{color:#fff;align-self:center;background-color:#f80b0b9d;padding-left:10px;padding-right:10px;text-shadow:3px 3px 5px rgba(0,0,0,.3)}h3[_ngcontent-%COMP%]{font-size:20px;padding:5px 15px;background-color:#000000a8;color:#fffdfd;text-align:center;text-shadow:1px 1px 3px rgba(230,221,221,.842)}.iniciarJuego[_ngcontent-%COMP%]{padding:20px 30px;font-size:18px;border:none;border-radius:5px;cursor:pointer;background-color:#003fc7d0;color:#fff;transition:background-color .3s ease;margin-bottom:20px}.laberinto[_ngcontent-%COMP%]{display:flex;flex-direction:column}.fila[_ngcontent-%COMP%]{display:flex}.celda[_ngcontent-%COMP%]{width:20px;height:20px;border:1px solid #000}.pasillo[_ngcontent-%COMP%]{background-color:#fff}.pared[_ngcontent-%COMP%]{background-color:#000}.salida[_ngcontent-%COMP%]{background-color:green}.jugador[_ngcontent-%COMP%]{background-color:#2600ff}.mensajeResultado[_ngcontent-%COMP%]{display:flex;flex-direction:column;margin-top:20px;margin-left:auto;margin-right:auto;text-align:center;font-size:20px;color:#fff;background-color:#b85503d7;padding:10px;border-radius:5px;box-shadow:0 4px 15px #0000004d;max-width:300px}span[_ngcontent-%COMP%]{margin-top:20px;margin-bottom:20px}.continuar[_ngcontent-%COMP%]{padding:10px 20px;font-size:18px;border:none;border-radius:5px;cursor:pointer;background-color:#003fc7d0;color:#fff;transition:background-color .3s ease}.puntos[_ngcontent-%COMP%]{color:#1a232b;font-size:24;border-radius:0%;background-color:#fbff007c;padding-left:50px;padding-right:55px;padding-top:10px;margin-bottom:4%}']});let e=t;return e})();export{B as JuegoPropioComponent};
