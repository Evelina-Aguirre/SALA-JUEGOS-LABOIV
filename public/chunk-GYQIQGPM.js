import{u as U}from"./chunk-GU3WLOXQ.js";import"./chunk-WXI33M2S.js";import{a as P,b as y,c as w,d as E,e as O}from"./chunk-YX4OES2B.js";import{b as R}from"./chunk-QONWCG6S.js";import{e as C,q as v,t as _,w as x}from"./chunk-Y3H75ORC.js";import{Ga as u,Ha as s,bb as r,cb as a,db as l,ha as h,jb as M,rb as g,vb as m,wb as p,xb as c,zb as b}from"./chunk-EUBEZLGX.js";import"./chunk-WCZP2BTM.js";import"./chunk-CQCHLVVT.js";var z=(()=>{let n=class n{constructor(e,o,t){this.auth=e,this._snackBar=o,this.router=t,this.nuevoUsuarioPDW="",this.nuevoUsuarioMail="",this.usarMail="",this.usrPWD="",this.usuarioLogueado=null}Registrar(){x(this.auth,this.nuevoUsuarioMail,this.nuevoUsuarioPDW).then(e=>{this.usarMail!=null?(this.usuarioLogueado=e.user.email,console.log(this.usuarioLogueado),this.router.navigate(["./home"])):this.mostrarError("ERROR, intent\xE1 nuevamente.")}).catch(e=>{e.code==="auth/invalid-email"?this.mostrarError("El formato del mail es inv\xE1lido."):e.code==="auth/email-already-in-use"?this.mostrarError("El email ya se encuentra en uso."):e.code==="auth/missing-password"?this.mostrarError("Debes completar ambos campos."):this.mostrarError("La contrase\xF1a debe contener al menos 6 car\xE1cteres."),console.error("Error de autenticaci\xF3n:",e)})}mostrarError(e){this._snackBar.open(e,"Cerrar",{duration:3e3,verticalPosition:"bottom"})}};n.\u0275fac=function(o){return new(o||n)(s(_),s(U),s(C))},n.\u0275cmp=h({type:n,selectors:[["app-registro"]],standalone:!0,features:[b],decls:13,vars:2,consts:[[1,"login"],[1,"login-header"],[1,"login-form","registro"],["type","text","placeholder","Correo electr\xF3nico","required","",3,"ngModelChange","ngModel"],["type","password","placeholder","Contrase\xF1a","required","",3,"ngModelChange","ngModel"],[1,"registro-button",3,"click"]],template:function(o,t){o&1&&(r(0,"body"),l(1,"app-navbar"),r(2,"div",0)(3,"div",1)(4,"h1"),g(5,"Registrate"),a()(),r(6,"div",2)(7,"input",3),c("ngModelChange",function(i){return p(t.nuevoUsuarioMail,i)||(t.nuevoUsuarioMail=i),i}),a(),l(8,"br"),r(9,"input",4),c("ngModelChange",function(i){return p(t.nuevoUsuarioPDW,i)||(t.nuevoUsuarioPDW=i),i}),a(),l(10,"br"),r(11,"button",5),M("click",function(){return t.Registrar()}),g(12,"Registrarse"),a()()()()),o&2&&(u(7),m("ngModel",t.nuevoUsuarioMail),u(2),m("ngModel",t.nuevoUsuarioPDW))},dependencies:[O,P,y,E,w,v,R],styles:['body[_ngcontent-%COMP%]{background-image:url("./media/f4-AZC6R3VF.jpg");margin:0;font-family:Ubuntu,sans-serif;background-size:100% 100%;height:100vh;width:100%}img[_ngcontent-%COMP%]{width:500px;float:left;padding-top:5%;padding-left:6%}.login[_ngcontent-%COMP%]{margin:-5% auto;max-width:500px}.login-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{padding-top:200px;color:#fff;text-align:center;font-size:350%;text-shadow:2px 5px 15px #000}.login-form[_ngcontent-%COMP%]{border:.5px solid #fff;background:#844fff75;border-radius:10px;box-shadow:0 0 10px #000;box-sizing:border-box;padding-top:20px;padding-bottom:5%;margin:10% auto;text-align:center}.login[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%], .login[_ngcontent-%COMP%]   input[type=password][_ngcontent-%COMP%]{max-width:400px;width:80%;line-height:3em;font-family:Ubuntu,sans-serif;margin:1em 2em;border-radius:5px;border:2px solid #f2f2f2;outline:none;padding-left:10px}.registro-button[_ngcontent-%COMP%]{color:#545455;width:200px;height:40px;margin:auto;border-radius:10px}.registro[_ngcontent-%COMP%]{display:block;color:#ffffffea;text-align:center;font-size:10px;margin-top:50px}.registro[_ngcontent-%COMP%]:hover{color:#fff}']});let d=n;return d})();export{z as RegistroComponent};
