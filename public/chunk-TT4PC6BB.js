import{e as P}from"./chunk-YX4OES2B.js";import{b as O}from"./chunk-QONWCG6S.js";import"./chunk-Y3H75ORC.js";import{Da as f,Ga as c,Ha as _,Xa as M,Y as z,Za as m,ac as v,bb as r,cb as i,cc as A,db as g,gb as b,ha as I,jb as l,lb as x,qa as d,ra as h,rb as s,ub as C,zb as y}from"./chunk-EUBEZLGX.js";import"./chunk-WCZP2BTM.js";import"./chunk-CQCHLVVT.js";var k=(()=>{let e=class e{constructor(){this.cartaSignoPregunta={numero:1,rutaImagen:"../../../../assets/images/abcd.png"},this.cartaInicial={numero:7,rutaImagen:"../../../../assets/images/cartas/c7.png"},this.mazo=[]}generarMazo(){let a={numero:2,rutaImagen:"../../../../assets/images/cartas/a2.png"},n={numero:3,rutaImagen:"../../../../assets/images/cartas/a3.png"},t={numero:4,rutaImagen:"../../../../assets/images/cartas/a4.png"},u={numero:5,rutaImagen:"../../../../assets/images/cartas/a5.png"},j={numero:6,rutaImagen:"../../../../assets/images/cartas/a6.png"},E={numero:7,rutaImagen:"../../../../assets/images/cartas/a7.png"},S={numero:8,rutaImagen:"../../../../assets/images/cartas/a8.png"},w={numero:9,rutaImagen:"../../../../assets/images/cartas/a9.png"},T={numero:10,rutaImagen:"../../../../assets/images/cartas/a10.png"},V={numero:11,rutaImagen:"../../../../assets/images/cartas/a11.png"},N={numero:12,rutaImagen:"../../../../assets/images/cartas/a12.png"},R={numero:2,rutaImagen:"../../../../assets/images/cartas/b2.png"},F={numero:3,rutaImagen:"../../../../assets/images/cartas/b3.png"},U={numero:4,rutaImagen:"../../../../assets/images/cartas/b4.png"},D={numero:5,rutaImagen:"../../../../assets/images/cartas/b5.png"},Y={numero:6,rutaImagen:"../../../../assets/images/cartas/b6.png"},G={numero:7,rutaImagen:"../../../../assets/images/cartas/b7.png"},L={numero:8,rutaImagen:"../../../../assets/images/cartas/b8.png"},Z={numero:9,rutaImagen:"../../../../assets/images/cartas/b9.png"},$={numero:10,rutaImagen:"../../../../assets/images/cartas/b10.png"},q={numero:11,rutaImagen:"../../../../assets/images/cartas/b11.png"},B={numero:12,rutaImagen:"../../../../assets/images/cartas/b12.png"},H={numero:2,rutaImagen:"../../../../assets/images/cartas/c2.png"},J={numero:3,rutaImagen:"../../../../assets/images/cartas/c3.png"},K={numero:4,rutaImagen:"../../../../assets/images/cartas/c4.png"},Q={numero:5,rutaImagen:"../../../../assets/images/cartas/c5.png"},W={numero:6,rutaImagen:"../../../../assets/images/cartas/c6.png"},X={numero:7,rutaImagen:"../../../../assets/images/cartas/c7.png"},tt={numero:8,rutaImagen:"../../../../assets/images/cartas/c8.png"},at={numero:9,rutaImagen:"../../../../assets/images/cartas/c9.png"},et={numero:10,rutaImagen:"../../../../assets/images/cartas/c10.png"},nt={numero:11,rutaImagen:"../../../../assets/images/cartas/c11.png"},rt={numero:12,rutaImagen:"../../../../assets/images/cartas/c12.png"},st={numero:2,rutaImagen:"../../../../assets/images/cartas/d2.png"},ot={numero:3,rutaImagen:"../../../../assets/images/cartas/d3.png"},it={numero:4,rutaImagen:"../../../../assets/images/cartas/d4.png"},ct={numero:5,rutaImagen:"../../../../assets/images/cartas/d5.png"},mt={numero:6,rutaImagen:"../../../../assets/images/cartas/d6.png"},ut={numero:7,rutaImagen:"../../../../assets/images/cartas/d7.png"},lt={numero:8,rutaImagen:"../../../../assets/images/cartas/d8.png"},gt={numero:9,rutaImagen:"../../../../assets/images/cartas/d9.png"},pt={numero:10,rutaImagen:"../../../../assets/images/cartas/d10.png"},dt={numero:11,rutaImagen:"../../../../assets/images/cartas/d11.png"},ht={numero:12,rutaImagen:"../../../../assets/images/cartas/d12.png"};return this.mazo.push(a),this.mazo.push(n),this.mazo.push(t),this.mazo.push(u),this.mazo.push(j),this.mazo.push(E),this.mazo.push(S),this.mazo.push(w),this.mazo.push(T),this.mazo.push(V),this.mazo.push(N),this.mazo.push(R),this.mazo.push(F),this.mazo.push(U),this.mazo.push(D),this.mazo.push(Y),this.mazo.push(G),this.mazo.push(L),this.mazo.push(Z),this.mazo.push($),this.mazo.push(q),this.mazo.push(B),this.mazo.push(H),this.mazo.push(J),this.mazo.push(K),this.mazo.push(Q),this.mazo.push(W),this.mazo.push(X),this.mazo.push(tt),this.mazo.push(at),this.mazo.push(et),this.mazo.push(nt),this.mazo.push(rt),this.mazo.push(st),this.mazo.push(ot),this.mazo.push(it),this.mazo.push(ct),this.mazo.push(mt),this.mazo.push(ut),this.mazo.push(lt),this.mazo.push(gt),this.mazo.push(pt),this.mazo.push(dt),this.mazo.push(ht),this.mazo}};e.\u0275fac=function(n){return new(n||e)},e.\u0275prov=z({token:e,factory:e.\u0275fac,providedIn:"root"});let o=e;return o})();function xt(o,e){if(o&1){let p=b();r(0,"div",12)(1,"div",13)(2,"h1"),s(3,"GANASTE! "),r(4,"button",14),l("click",function(){d(p);let n=x();return h(n.continuar())}),s(5,"Continuar"),i()()()()}}function zt(o,e){if(o&1){let p=b();r(0,"div",12)(1,"div",13)(2,"h1"),s(3,"UPS! VOLVE A INTENTAR! "),r(4,"button",14),l("click",function(){d(p);let n=x();return h(n.continuar())}),s(5,"Continuar"),i()()()()}}var yt=(()=>{let e=class e{constructor(a){this.cartas=a,this.mazo=[],this.prediccion="",this.cartaAnterior=null,this.cartaActual=null,this.transitoria=null,this.puntosAcumulados=0,this.gano=!1,this.perdio=!1,this.contador=0,this.mensajeElegido=null,this.intentos=0,a.generarMazo(),this.mazo=a.mazo,this.inicializar()}inicializar(){this.cartaAnterior=this.cartas.cartaInicial,this.cartaActual=this.cartas.cartaSignoPregunta,this.transitoria=this.cartas.cartaInicial}obtenerCarta(){let a=Math.floor(Math.random()*this.mazo.length);this.cartaActual=this.mazo[a]}seleccionar(a){this.mensajeElegido=`Elegiste ${a}`,this.prediccion=a}jugar(){if(this.cartaActual&&this.cartaAnterior&&this.transitoria){console.log("jugar principio actual:",this.cartaAnterior),console.log("jugar principio anterior:",this.cartaActual),this.obtenerCarta(),this.cartaAnterior=this.transitoria;let a=this.cartaAnterior.numero,n=this.cartaActual.numero;this.intentos++;let t=this.prediccion==="MAYOR"&&n>a||this.prediccion==="MENOR"&&n<a;return console.log("Carta anterior:",a),console.log("Carta actual:",n),console.log("Predicci\xF3n correcta:",t),console.log(this.contador),this.contador++,t?this.puntosAcumulados++:this.perdio=!0,console.log("jugar final actual:",this.cartaAnterior),console.log("jugar final anterior:",this.cartaActual),this.gano=t}return!1}continuar(){this.cartaAnterior=this.cartaActual,this.transitoria=this.cartaActual,this.cartaActual=this.cartas.cartaSignoPregunta,this.gano=!1,this.perdio=!1,this.mensajeElegido=null}};e.\u0275fac=function(n){return new(n||e)(_(k))},e.\u0275cmp=I({type:e,selectors:[["app-mayormenor"]],standalone:!0,features:[y],decls:28,vars:8,consts:[[1,"container"],[1,"titulo-container"],[1,"cartas-container"],[1,"botones"],["type","button",1,"botonMayorMenor",3,"click","disabled"],[1,"puntos"],[1,"cartas"],[1,"carta"],["alt","Carta Anterior",1,"carta-img",3,"src"],[1,"carta-descripcion"],["alt","Carta Actual",1,"carta-img",3,"src"],["class","resultado",4,"ngIf"],[1,"resultado"],[1,"mensajeResultado"],["type","button",1,"continuar-button",3,"click"]],template:function(n,t){n&1&&(r(0,"body"),g(1,"app-navbar"),r(2,"div",0)(3,"div",1)(4,"h1"),s(5,"Mayor o Menor?"),i(),r(6,"h2"),s(7,"Adivin\xE1 si la pr\xF3xima carta va a ser mayor o menor"),i()(),r(8,"div",2)(9,"div",3)(10,"button",4),l("click",function(){return t.seleccionar("MAYOR")})("click",function(){return t.jugar()}),s(11,"Mayor"),i(),r(12,"button",4),l("click",function(){return t.seleccionar("MENOR")})("click",function(){return t.jugar()}),s(13,"Menor"),i()(),r(14,"div",5)(15,"h2"),s(16),i()(),r(17,"div",6)(18,"div",7),g(19,"img",8),r(20,"span",9),s(21,"Carta Anterior"),i()(),r(22,"div",7),g(23,"img",10),r(24,"span",9),s(25,"Nueva carta"),i()()()(),M(26,xt,6,0,"div",11)(27,zt,6,0,"div",11),i()()),n&2&&(c(10),m("disabled",t.gano||t.perdio),c(2),m("disabled",t.gano||t.perdio),c(4),C("Puntos acumulados : ",t.puntosAcumulados," | Intentos:",t.intentos,""),c(3),m("src",t.cartaAnterior==null?null:t.cartaAnterior.rutaImagen,f),c(4),m("src",t.cartaActual==null?null:t.cartaActual.rutaImagen,f),c(3),m("ngIf",t.gano),c(),m("ngIf",t.perdio))},dependencies:[O,A,v,P],styles:['body[_ngcontent-%COMP%]{background-image:url("./media/f4-AZC6R3VF.jpg");margin:0;font-family:Ubuntu,sans-serif;background-size:100% 100%;height:100vh;width:100%}.container[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:center;width:80%;height:80%;margin-top:auto;margin-left:auto;margin-right:auto;border-radius:10px}.titulo-container[_ngcontent-%COMP%]{text-align:center;margin-bottom:20px;color:#f0f8ff;text-shadow:4px 4px 5px rgba(0,0,0,.795);padding-bottom:10px}.titulo-container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:45px;color:#f0f8ff;margin:0}.titulo-container[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:30px;color:#f0f8ff;margin-top:20px;margin-bottom:10px}.cartas-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:center;width:100%}.botones[_ngcontent-%COMP%]{margin-bottom:15px;display:flex;gap:20px}.botonMayorMenor[_ngcontent-%COMP%]{padding:20px 30px;font-size:18px;border:none;border-radius:5px;cursor:pointer;background-color:#003fc7d0;color:#fff;transition:background-color .3s ease}.botonMayorMenor[_ngcontent-%COMP%]:disabled{background-color:#585a61a8;color:#8a8a8afb;cursor:auto}.boton[_ngcontent-%COMP%]:hover{background-color:#45a049ce}.puntos[_ngcontent-%COMP%]{color:#1a232b;font-size:24;border-radius:20%;background-color:#fbff007c;padding-left:50px;padding-right:55px;padding-top:10px;margin-bottom:3%}.mensaje[_ngcontent-%COMP%]{position:fixed;right:740px;bottom:270px;background-color:#333;padding:20px 90px;border-radius:10px;font-size:16px;color:#fff;text-align:justify;box-shadow:0 0 10px #0003;z-index:999}.cartas[_ngcontent-%COMP%]{display:flex;justify-content:center;gap:50px}.carta[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:center}.carta-img[_ngcontent-%COMP%]{width:200px;height:auto;border-radius:8px;box-shadow:0 4px 15px #0000001a}.carta-descripcion[_ngcontent-%COMP%]{margin-top:10px;font-size:16px;color:#333;text-shadow:1px 1px 2px rgba(255,253,253,.411)}.resultado[_ngcontent-%COMP%]{position:absolute;bottom:20px;left:50%;transform:translate(-50%);text-align:center}.resultado[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{padding:20px 40px;background-color:#df67059a;color:#fff;font-size:24px;margin:0;display:flex;flex-direction:column}.continuar-button[_ngcontent-%COMP%]{padding:10px 20px;font-size:18px;border:none;border-radius:5px;cursor:pointer;background-color:#003fc7d0;color:#fff;transition:background-color .3s ease;margin-top:auto}.continuar-button[_ngcontent-%COMP%]:hover{background-color:#45a049ce}']});let o=e;return o})();export{yt as MayormenorComponent};
