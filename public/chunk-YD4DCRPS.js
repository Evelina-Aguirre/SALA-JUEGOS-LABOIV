import{a as g}from"./chunk-D24SSPTD.js";import{a as p}from"./chunk-DX3CIRH3.js";import{e as m}from"./chunk-KP2RCBHH.js";import{Da as u,Ga as s,ab as e,bb as i,cb as a,ha as d,qb as n,xb as l}from"./chunk-UO2NVOAF.js";import"./chunk-WCZP2BTM.js";import"./chunk-CQCHLVVT.js";var C=(()=>{let r=class r{constructor(t,o){this.router=t,this.authService=o,this.usuarioLogueado=null}ngOnInit(){this.authService.getCurrentUser().subscribe(t=>{t?this.usuarioLogueado=t?.email:this.usuarioLogueado=null})}logout(){this.authService.logout().then(()=>{this.router.navigate(["/login"])}).catch(t=>{console.error("Error al cerrar sesi\xF3n:",t)})}};r.\u0275fac=function(o){return new(o||r)(s(m),s(p))},r.\u0275cmp=d({type:r,selectors:[["app-quien-soy"]],standalone:!0,features:[l],decls:24,vars:0,consts:[["charset","UTF-8"],["name","viewport","content","width=device-width, initial-scale=1.0"],["href",u`https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css`,"rel","stylesheet"],["id","carta",1,"container","d-flex"],[1,"card"],[1,"titulo"],["src","../../assets/images/foto.jpg","id","foto","alt","Foto",1,"card-img-top"],[1,"card-body"],[1,"card-title"],[1,"card-text"],[1,"juego"],[1,"otra-card"]],template:function(o,h){o&1&&(e(0,"head"),a(1,"meta",0)(2,"meta",1),e(3,"title"),n(4,"Qui\xE9n Soy "),i(),a(5,"link",2),i(),e(6,"body"),a(7,"app-navbar"),e(8,"div",3)(9,"div",4)(10,"h1",5),n(11,"Qui\xE9n soy"),i(),a(12,"img",6),e(13,"div",7)(14,"h1",8),n(15,"Evelina Aguirre"),i(),e(16,"p",9),n(17," Estudiante TUP UTN, primer cuatrimestre 2024. Divisi\xF3n 4\xB0B. "),i()()(),e(18,"div",10)(19,"h1"),n(20,"Descripci\xF3n del Juego:"),i(),e(21,"div",11)(22,"p"),n(23," Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem delectus, nemo deserunt esse commodi aperiam cum aliquid. Pariatur est, placeat saepe facere id, recusandae ex tempora ratione, eaque aspernatur totam. "),i()()()()())},dependencies:[g],styles:['body[_ngcontent-%COMP%]{background-image:url("./media/f4-AZC6R3VF.jpg");margin:0;font-family:Ubuntu,sans-serif;background-size:100% 100%;height:100vh;width:100%;color:bisque}.titulo[_ngcontent-%COMP%], .card-title[_ngcontent-%COMP%], .juego[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{color:#fff;font-size:24px;text-align:center;text-shadow:4px 1px 2px rgb(0,0,0)}.titulo[_ngcontent-%COMP%]{font-size:30px}.juego[_ngcontent-%COMP%]{padding-top:100px;flex:5;margin-right:20px;background:#0000;border-radius:10px;text-align:center}.card[_ngcontent-%COMP%]{width:400px;background-color:#0000;text-align:center}.otra-card[_ngcontent-%COMP%]{border-radius:10px;margin-left:2%;margin-right:2%;margin-top:10%;background-color:#3717e985;padding:20px}#carta[_ngcontent-%COMP%]{padding-top:50px}.titulo[_ngcontent-%COMP%]{text-align:center;margin-bottom:20px}#foto[_ngcontent-%COMP%]{width:100%;border-radius:300px}']});let c=r;return c})();export{C as QuienSoyComponent};
