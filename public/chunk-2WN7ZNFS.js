import"./chunk-DU7PST4P.js";import"./chunk-COEVRZ7D.js";import{a as b}from"./chunk-X5P4WEWV.js";import"./chunk-YKPFCSF3.js";import"./chunk-WXI33M2S.js";import"./chunk-XSWI5Y2W.js";import"./chunk-IWIFR2SF.js";import"./chunk-DSQA2Z77.js";import"./chunk-KWVZHXL5.js";import{a as v}from"./chunk-D24SSPTD.js";import{a as f}from"./chunk-DX3CIRH3.js";import{e as d}from"./chunk-KP2RCBHH.js";import{Ga as r,ab as i,ac as h,bb as a,cb as p,ha as m,ib as s,qb as c,xb as g}from"./chunk-UO2NVOAF.js";import"./chunk-WCZP2BTM.js";import"./chunk-CQCHLVVT.js";var P=(()=>{let t=class t{constructor(e,n,o){this.router=e,this.authService=n,this.msjError=o,this.usuarioLogueado=null}ngOnInit(){this.authService.getCurrentUser().subscribe(e=>{e?this.usuarioLogueado=e?.email:this.usuarioLogueado=null})}logout(){this.authService.logout().then(()=>{this.router.navigate(["/login"])}).catch(e=>{console.error("Error al cerrar sesi\xF3n:",e)})}navegar(e){this.router.navigate([e])}};t.\u0275fac=function(n){return new(n||t)(r(d),r(f),r(b))},t.\u0275cmp=m({type:t,selectors:[["app-home"]],standalone:!0,features:[g],decls:9,vars:0,consts:[[1,"container"],[1,"juegos-button",3,"click"],[1,"chat-button",3,"click"],[1,"quiensoy-button",3,"click"]],template:function(n,o){n&1&&(i(0,"body"),p(1,"app-navbar"),i(2,"div",0)(3,"button",1),s("click",function(){return o.navegar("/juegos")}),c(4,"Juegos"),a(),i(5,"button",2),s("click",function(){return o.navegar("/chat")}),c(6,"Chat"),a(),i(7,"button",3),s("click",function(){return o.navegar("/quien-soy")}),c(8,"\xBFQui\xE9n Soy?"),a()()())},dependencies:[h,v],styles:['body[_ngcontent-%COMP%]{background-image:url("./media/f4-AZC6R3VF.jpg");margin:0;font-family:Ubuntu,sans-serif;background-size:100% 100%;height:100vh;width:100%}.quiensoy-button[_ngcontent-%COMP%], .chat-button[_ngcontent-%COMP%], .juegos-button[_ngcontent-%COMP%]{border:.5px solid #fff;background:#844fff75;border-radius:10px;box-shadow:0 0 10px #000;color:#fff;padding:100px 120px;margin:100px 0 0 100px;text-align:center;white-space:nowrap;text-decoration:none;display:inline-block;width:350px;height:250px;font-size:30px;cursor:pointer;transition:box-shadow .3s ease;display:flex;justify-content:center;align-items:center}.quiensoy-button[_ngcontent-%COMP%]:hover, .chat-button[_ngcontent-%COMP%]:hover, .juegos-button[_ngcontent-%COMP%]:hover{box-shadow:0 0 30px #000}.quiensoy-button[_ngcontent-%COMP%]{white-space:nowrap;line-height:50px}.container[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;height:50vh}']});let u=t;return u})();export{P as HomeComponent};
