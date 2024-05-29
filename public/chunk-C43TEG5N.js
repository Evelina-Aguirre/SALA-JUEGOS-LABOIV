import{a as V,b as K,c as D,d as k,f as S}from"./chunk-VO3ADXFZ.js";import{b as Y}from"./chunk-ZN5QAZKN.js";import{a as O}from"./chunk-XZGO7AMH.js";import{Da as v,Ga as i,Ha as x,Xa as m,Y as F,Za as c,ac as B,ba as w,bb as r,bc as M,cb as s,db as U,dc as P,gb as h,ha as y,jb as C,lb as l,qa as g,r as b,ra as d,rb as u,sb as p,ub as A,vb as j,wb as _,xb as E,zb as N}from"./chunk-SQWIEUAN.js";import"./chunk-WCZP2BTM.js";import"./chunk-CQCHLVVT.js";var R=(()=>{let e=class e{constructor(t){this.http=t}traerDatosApi(){return this.http.get("https://mocki.io/v1/e00dfa95-d483-47d9-9df0-c3cf111aa011").pipe(b(t=>t.preguntas.map(n=>({id:n.id,pregunta:n.pregunta,respuesta:n.respuesta,imgUrl:n.imgUrl}))))}};e.\u0275fac=function(n){return new(n||e)(w(O))},e.\u0275prov=F({token:e,factory:e.\u0275fac,providedIn:"root"});let o=e;return o})();function G(o,e){if(o&1){let f=h();r(0,"div",11)(1,"input",12),E("ngModelChange",function(n){g(f);let a=l();return _(a.respuestaSeleccionada,n)||(a.respuestaSeleccionada=n),d(n)}),s(),r(2,"label",13),u(3),s()()}if(o&2){let f=e.$implicit,t=l();i(),c("id",f)("name","opcion")("value",f),j("ngModel",t.respuestaSeleccionada),i(),c("for",f),i(),p(f)}}function T(o,e){if(o&1){let f=h();r(0,"div",14)(1,"span"),u(2),s(),r(3,"button",15),C("click",function(){g(f);let n=l();return d(n.proximaPregunta())}),u(4,"Continuar"),s()()}if(o&2){let f=l();i(2),p(f.mensaje)}}var $=(()=>{let e=class e{constructor(t){this.pregServ=t,this.preguntas=[],this.opciones=[],this.respuestaCorrecta="",this.preguntaAMostrar="",this.rtaAMostrar="",this.resultado=!1,this.mensaje="",this.img="",this.contadorIntentos=0,this.contadorGano=0,this.respuestaSeleccionada="",this.continuar=!1,this.obtenerPreguntas()}obtenerPreguntas(){this.pregServ.traerDatosApi().subscribe(t=>{this.preguntas=t,this.preguntas.length>0&&(this.preguntaArrayActual=this.preguntas[0],this.preguntaAMostrar=this.preguntas[0].pregunta,console.log("OBTENERPRG PREG ARRAY ACTUAL",this.preguntaArrayActual),this.mostrarNuevaPregunta()),console.log("Preguntas OBTENER PREGUNTA:",this.preguntas),this.mostrarNuevaPregunta()})}mostrarNuevaPregunta(){let t=Math.floor(Math.random()*this.preguntas.length);this.preguntaArrayActual=this.preguntas[t],this.preguntaAMostrar=this.preguntas[t].pregunta,this.rtaAMostrar=this.preguntas[t].respuesta,this.img=this.preguntas[t].imgUrl,this.preguntaArrayActual?(this.respuestaCorrecta=this.preguntaArrayActual.respuesta,this.opciones=this.obtenerOpciones()):console.log("No se pudo conseguir nueva pregunta"),this.continuar=!1}obtenerOpciones(){let t=[];for(t.push(this.respuestaCorrecta);t.length<4;){let n=this.preguntas[Math.floor(Math.random()*this.preguntas.length)].respuesta;t.includes(n)||t.push(n)}return this.shuffle(t)}shuffle(t){return t.sort(()=>Math.random()-.5)}verificarRespuesta(){this.respuestaSeleccionada===this.respuestaCorrecta?(this.resultado=!0,this.mensaje="\\(^\u25BD^)/ Respuesta correcta!",this.contadorGano++):(this.resultado=!0,this.mensaje="(\u2565_\u2565) La respuesta correcta era:  "+this.respuestaCorrecta+"  "),this.contadorIntentos++}proximaPregunta(){this.mensaje="",this.mostrarNuevaPregunta()}};e.\u0275fac=function(n){return new(n||e)(x(R))},e.\u0275cmp=y({type:e,selectors:[["app-preguntados"]],standalone:!0,features:[N],decls:18,vars:7,consts:[[1,"container"],[1,"preguntaActual"],[1,"contador"],[1,"pregunta-imagen-respuesta"],[1,"imagen"],[1,"imagen-container"],["alt","",3,"src"],[1,"opciones-container"],["class","opciones",4,"ngFor","ngForOf"],[1,"contestar-button",3,"click","disabled"],["class","mensajeResultado",4,"ngIf"],[1,"opciones"],["type","radio",3,"ngModelChange","id","name","value","ngModel"],[3,"for"],[1,"mensajeResultado"],[1,"continuar",3,"click"]],template:function(n,a){n&1&&(r(0,"body"),U(1,"app-navbar"),r(2,"div",0)(3,"div",1)(4,"div",2)(5,"p"),u(6),s()(),r(7,"h2"),u(8),s()(),r(9,"div",3)(10,"div",4)(11,"div",5),U(12,"img",6),s()(),r(13,"div",7),m(14,G,4,6,"div",8),s()(),r(15,"button",9),C("click",function(){return a.verificarRespuesta()}),u(16,"Contestar"),s(),m(17,T,5,1,"div",10),s()()),n&2&&(i(6),A("Pregunta numero: ",a.contadorIntentos," | Puntos acumulados: ",a.contadorGano,""),i(2),p(a.preguntaAMostrar),i(4),c("src",a.img,v),i(2),c("ngForOf",a.opciones),i(),c("disabled",!a.respuestaSeleccionada),i(2),c("ngIf",a.mensaje!==""))},dependencies:[Y,P,B,M,S,V,k,K,D],styles:['@font-face{font-family:Ubuntu;font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/ubuntu/v20/4iCs6KVjbNBYlgoKcg72j00.woff2) format("woff2");unicode-range:U+0460-052F,U+1C80-1C88,U+20B4,U+2DE0-2DFF,U+A640-A69F,U+FE2E-FE2F}@font-face{font-family:Ubuntu;font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/ubuntu/v20/4iCs6KVjbNBYlgoKew72j00.woff2) format("woff2");unicode-range:U+0301,U+0400-045F,U+0490-0491,U+04B0-04B1,U+2116}@font-face{font-family:Ubuntu;font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/ubuntu/v20/4iCs6KVjbNBYlgoKcw72j00.woff2) format("woff2");unicode-range:U+1F00-1FFF}@font-face{font-family:Ubuntu;font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/ubuntu/v20/4iCs6KVjbNBYlgoKfA72j00.woff2) format("woff2");unicode-range:U+0370-0377,U+037A-037F,U+0384-038A,U+038C,U+038E-03A1,U+03A3-03FF}@font-face{font-family:Ubuntu;font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/ubuntu/v20/4iCs6KVjbNBYlgoKcQ72j00.woff2) format("woff2");unicode-range:U+0100-02AF,U+0304,U+0308,U+0329,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:Ubuntu;font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/ubuntu/v20/4iCs6KVjbNBYlgoKfw72.woff2) format("woff2");unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}@font-face{font-family:Ubuntu;font-style:normal;font-weight:500;font-display:swap;src:url(https://fonts.gstatic.com/s/ubuntu/v20/4iCv6KVjbNBYlgoCjC3jvWyNL4U.woff2) format("woff2");unicode-range:U+0460-052F,U+1C80-1C88,U+20B4,U+2DE0-2DFF,U+A640-A69F,U+FE2E-FE2F}@font-face{font-family:Ubuntu;font-style:normal;font-weight:500;font-display:swap;src:url(https://fonts.gstatic.com/s/ubuntu/v20/4iCv6KVjbNBYlgoCjC3jtGyNL4U.woff2) format("woff2");unicode-range:U+0301,U+0400-045F,U+0490-0491,U+04B0-04B1,U+2116}@font-face{font-family:Ubuntu;font-style:normal;font-weight:500;font-display:swap;src:url(https://fonts.gstatic.com/s/ubuntu/v20/4iCv6KVjbNBYlgoCjC3jvGyNL4U.woff2) format("woff2");unicode-range:U+1F00-1FFF}@font-face{font-family:Ubuntu;font-style:normal;font-weight:500;font-display:swap;src:url(https://fonts.gstatic.com/s/ubuntu/v20/4iCv6KVjbNBYlgoCjC3js2yNL4U.woff2) format("woff2");unicode-range:U+0370-0377,U+037A-037F,U+0384-038A,U+038C,U+038E-03A1,U+03A3-03FF}@font-face{font-family:Ubuntu;font-style:normal;font-weight:500;font-display:swap;src:url(https://fonts.gstatic.com/s/ubuntu/v20/4iCv6KVjbNBYlgoCjC3jvmyNL4U.woff2) format("woff2");unicode-range:U+0100-02AF,U+0304,U+0308,U+0329,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:Ubuntu;font-style:normal;font-weight:500;font-display:swap;src:url(https://fonts.gstatic.com/s/ubuntu/v20/4iCv6KVjbNBYlgoCjC3jsGyN.woff2) format("woff2");unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}@font-face{font-family:Ubuntu;font-style:normal;font-weight:700;font-display:swap;src:url(https://fonts.gstatic.com/s/ubuntu/v20/4iCv6KVjbNBYlgoCxCvjvWyNL4U.woff2) format("woff2");unicode-range:U+0460-052F,U+1C80-1C88,U+20B4,U+2DE0-2DFF,U+A640-A69F,U+FE2E-FE2F}@font-face{font-family:Ubuntu;font-style:normal;font-weight:700;font-display:swap;src:url(https://fonts.gstatic.com/s/ubuntu/v20/4iCv6KVjbNBYlgoCxCvjtGyNL4U.woff2) format("woff2");unicode-range:U+0301,U+0400-045F,U+0490-0491,U+04B0-04B1,U+2116}@font-face{font-family:Ubuntu;font-style:normal;font-weight:700;font-display:swap;src:url(https://fonts.gstatic.com/s/ubuntu/v20/4iCv6KVjbNBYlgoCxCvjvGyNL4U.woff2) format("woff2");unicode-range:U+1F00-1FFF}@font-face{font-family:Ubuntu;font-style:normal;font-weight:700;font-display:swap;src:url(https://fonts.gstatic.com/s/ubuntu/v20/4iCv6KVjbNBYlgoCxCvjs2yNL4U.woff2) format("woff2");unicode-range:U+0370-0377,U+037A-037F,U+0384-038A,U+038C,U+038E-03A1,U+03A3-03FF}@font-face{font-family:Ubuntu;font-style:normal;font-weight:700;font-display:swap;src:url(https://fonts.gstatic.com/s/ubuntu/v20/4iCv6KVjbNBYlgoCxCvjvmyNL4U.woff2) format("woff2");unicode-range:U+0100-02AF,U+0304,U+0308,U+0329,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:Ubuntu;font-style:normal;font-weight:700;font-display:swap;src:url(https://fonts.gstatic.com/s/ubuntu/v20/4iCv6KVjbNBYlgoCxCvjsGyN.woff2) format("woff2");unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}body[_ngcontent-%COMP%]{background-image:url("./media/f4-AZC6R3VF.jpg");margin:0;font-family:Ubuntu,sans-serif;background-size:100% 100%;height:100vh;width:100%}.container[_ngcontent-%COMP%]{background-color:#8142429c;width:100%;max-width:500px;border-radius:10px;padding:20px;margin:20px auto}.pregunta-imagen-respuesta[_ngcontent-%COMP%]{display:flex;justify-content:space-between;margin-top:20px}.preguntaActual[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{background-color:#000000a8;color:#fffdfd;text-align:center;text-shadow:1px 1px 3px rgba(0,0,0,.842)}.opciones-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:flex-start;gap:10px;margin-top:0;justify-content:center;align-self:auto}.opciones[_ngcontent-%COMP%]{display:flex;flex-direction:row;gap:10px}.opciones[_ngcontent-%COMP%]   input[type=radio][_ngcontent-%COMP%]{margin-right:5px}.opciones[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{font-size:18px;color:#fff;text-shadow:1px 1px 2px rgba(0,0,0,.2);background-color:#003fc7d0;padding:5px 20px;border-radius:5px;transition:background-color .3s ease}.opciones[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]:hover{background-color:#5c05ffe6}.imagen[_ngcontent-%COMP%]{margin-top:20px;margin-left:20px;text-align:end}.imagen-container[_ngcontent-%COMP%]{width:300px;height:200px;overflow:hidden;border-radius:10px}.imagen[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:auto}.contador[_ngcontent-%COMP%]{margin-top:0;margin-bottom:20px;text-align:center;color:#1a232b;font-size:18px;border-radius:0%;background-color:#fbff007c;padding:10px 55px 5px 50px}.contestar-button[_ngcontent-%COMP%]{margin-top:10px;padding:10px 20px;font-size:18px;border:none;border-radius:5px;cursor:pointer;background-color:#003fc7d0;color:#fff;transition:background-color .3s ease;margin-left:200px}.mensajeResultado[_ngcontent-%COMP%]{margin-top:20px;text-align:center;font-size:18px;color:#fff;background-color:#b85503d7;padding:10px;border-radius:5px;box-shadow:0 4px 15px #0000004d}.continuar[_ngcontent-%COMP%]{margin-top:10px;font-size:18px;border:none;border-radius:5px;cursor:pointer;background-color:#003fc7d0;color:#fff;transition:background-color .3s ease;padding:10px 20px}']});let o=e;return o})();export{$ as PreguntadosComponent};
