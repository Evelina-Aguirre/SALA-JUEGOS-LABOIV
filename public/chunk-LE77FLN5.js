import{a as b}from"./chunk-NVY3IQLK.js";import{$ as Ve,A as mr,B as _r,C as wr,D as _e,E as Ue,F as yr,G as C,H as Er,I as vr,J as Ar,K as br,L as Tr,M as kr,N as Cr,O as Ir,P as Sr,Q as we,R as Pr,S as We,T as He,U as xr,V as Dr,W as Rr,X as Mr,Y as Nr,Z as Or,_ as Ke,a as Xt,aa as Fr,b as Jt,ba as jr,c as Zt,ca as ze,d as q,da as $r,e as Yt,ea as Lr,f as er,fa as Br,g as tr,ga as qr,h as rr,ha as Ur,i as nr,ia as Wr,j as ir,ja as Hr,k as or,ka as Kr,l as sr,la as Vr,m as Y,ma as zr,n as Be,o as ar,p as me,q as qe,r as cr,s as lr,u as ur,v as dr,w as hr,x as fr,y as pr,z as gr}from"./chunk-5SPS7XNB.js";import{a as Ht,b as Kt,c as Vt,e as zt}from"./chunk-OEGFN2SO.js";import{a as Gt,b as Qt}from"./chunk-OFQDYSSM.js";import{k as Z,l as ge,m}from"./chunk-PRH22CQJ.js";import{$ as p,$b as jt,A as z,Aa as G,Ab as Mt,Bb as Nt,Ga as M,Ha as ue,I as vt,K as At,Kb as Fe,N as ae,O as ce,P as Re,Pa as Q,R as le,S as R,T as Me,Xa as Ne,Y as B,Za as de,Zb as Ot,_b as Ft,ac as $t,ba as l,bb as k,bc as Lt,c as K,cb as N,db as Tt,eb as kt,ec as fe,f as wt,fb as Ct,h as yt,ha as bt,jb as It,k as V,l as se,lb as Oe,m as S,n as P,r as f,rb as X,tb as he,ub as St,vb as Pt,wb as xt,yb as Dt,z as Et,zb as Rt}from"./chunk-77ICT66O.js";import{L as pe,M as J,O as Wt,S as $e,Z as Le,c as Bt,h as je,s as qt,u as Ut}from"./chunk-WCZP2BTM.js";import{a as oe,b as De,f as I}from"./chunk-CQCHLVVT.js";var An=new Map,bn={activated:!1,tokenObservers:[]},Tn={initialized:!1,enabled:!1};function v(r){return An.get(r)||Object.assign({},bn)}function Zr(){return Tn}var kn="https://content-firebaseappcheck.googleapis.com/v1";var Cn="exchangeDebugToken",Gr={OFFSET_DURATION:5*60*1e3,RETRIAL_MIN_WAIT:30*1e3,RETRIAL_MAX_WAIT:16*60*1e3},Oi=24*60*60*1e3;var Qe=class{constructor(e,t,n,i,o){if(this.operation=e,this.retryPolicy=t,this.getWaitDuration=n,this.lowerBound=i,this.upperBound=o,this.pending=null,this.nextErrorWaitInterval=i,i>o)throw new Error("Proactive refresh lower bound greater than upper bound!")}start(){this.nextErrorWaitInterval=this.lowerBound,this.process(!0).catch(()=>{})}stop(){this.pending&&(this.pending.reject("cancelled"),this.pending=null)}isRunning(){return!!this.pending}process(e){return I(this,null,function*(){this.stop();try{this.pending=new je,this.pending.promise.catch(t=>{}),yield In(this.getNextRun(e)),this.pending.resolve(),yield this.pending.promise,this.pending=new je,this.pending.promise.catch(t=>{}),yield this.operation(),this.pending.resolve(),yield this.pending.promise,this.process(!0).catch(()=>{})}catch(t){this.retryPolicy(t)?this.process(!1).catch(()=>{}):this.stop()}})}getNextRun(e){if(e)return this.nextErrorWaitInterval=this.lowerBound,this.getWaitDuration();{let t=this.nextErrorWaitInterval;return this.nextErrorWaitInterval*=2,this.nextErrorWaitInterval>this.upperBound&&(this.nextErrorWaitInterval=this.upperBound),t}}};function In(r){return new Promise(e=>{setTimeout(e,r)})}var Sn={"already-initialized":"You have already called initializeAppCheck() for FirebaseApp {$appName} with different options. To avoid this error, call initializeAppCheck() with the same options as when it was originally called. This will return the already initialized instance.","use-before-activation":"App Check is being used before initializeAppCheck() is called for FirebaseApp {$appName}. Call initializeAppCheck() before instantiating other Firebase services.","fetch-network-error":"Fetch failed to connect to a network. Check Internet connection. Original error: {$originalErrorMessage}.","fetch-parse-error":"Fetch client could not parse response. Original error: {$originalErrorMessage}.","fetch-status-error":"Fetch server returned an HTTP error status. HTTP status: {$httpStatus}.","storage-open":"Error thrown when opening storage. Original error: {$originalErrorMessage}.","storage-get":"Error thrown when reading from storage. Original error: {$originalErrorMessage}.","storage-set":"Error thrown when writing to storage. Original error: {$originalErrorMessage}.","recaptcha-error":"ReCAPTCHA error.",throttled:"Requests throttled due to {$httpStatus} error. Attempts allowed again after {$time}"},x=new Ut("appCheck","AppCheck",Sn);function Yr(r){if(!v(r).activated)throw x.create("use-before-activation",{appName:r.name})}function en(n,i){return I(this,arguments,function*({url:r,body:e},t){let o={"Content-Type":"application/json"},a=t.getImmediate({optional:!0});if(a){let _=yield a.getHeartbeatsHeader();_&&(o["X-Firebase-Client"]=_)}let s={method:"POST",body:JSON.stringify(e),headers:o},c;try{c=yield fetch(r,s)}catch(_){throw x.create("fetch-network-error",{originalErrorMessage:_?.message})}if(c.status!==200)throw x.create("fetch-status-error",{httpStatus:c.status});let u;try{u=yield c.json()}catch(_){throw x.create("fetch-parse-error",{originalErrorMessage:_?.message})}let h=u.ttl.match(/^([\d.]+)(s)$/);if(!h||!h[2]||isNaN(Number(h[1])))throw x.create("fetch-parse-error",{originalErrorMessage:`ttl field (timeToLive) is not in standard Protobuf Duration format: ${u.ttl}`});let E=Number(h[1])*1e3,L=Date.now();return{token:u.token,expireTimeMillis:L+E,issuedAtTimeMillis:L}})}function tn(r,e){let{projectId:t,appId:n,apiKey:i}=r.options;return{url:`${kn}/projects/${t}/apps/${n}:${Cn}?key=${i}`,body:{debug_token:e}}}var Pn="firebase-app-check-database",xn=1,Xe="firebase-app-check-store";var ye=null;function Dn(){return ye||(ye=new Promise((r,e)=>{try{let t=indexedDB.open(Pn,xn);t.onsuccess=n=>{r(n.target.result)},t.onerror=n=>{var i;e(x.create("storage-open",{originalErrorMessage:(i=n.target.error)===null||i===void 0?void 0:i.message}))},t.onupgradeneeded=n=>{let i=n.target.result;switch(n.oldVersion){case 0:i.createObjectStore(Xe,{keyPath:"compositeKey"})}}}catch(t){e(x.create("storage-open",{originalErrorMessage:t?.message}))}}),ye)}function Rn(r,e){return Mn(Nn(r),e)}function Mn(r,e){return I(this,null,function*(){let n=(yield Dn()).transaction(Xe,"readwrite"),o=n.objectStore(Xe).put({compositeKey:r,value:e});return new Promise((a,s)=>{o.onsuccess=c=>{a()},n.onerror=c=>{var u;s(x.create("storage-set",{originalErrorMessage:(u=c.target.error)===null||u===void 0?void 0:u.message}))}})})}function Nn(r){return`${r.options.appId}-${r.name}`}var Je=new Wt("@firebase/app-check");function Ge(r,e){return qt()?Rn(r,e).catch(t=>{Je.warn(`Failed to write token to IndexedDB. Error: ${t}`)}):Promise.resolve()}function rn(){return Zr().enabled}function nn(){return I(this,null,function*(){let r=Zr();if(r.enabled&&r.token)return r.token.promise;throw Error(`
            Can't get debug token in production mode.
        `)})}var On={error:"UNKNOWN_ERROR"};function Fn(r){return Bt.encodeString(JSON.stringify(r),!1)}function Ze(r,e=!1){return I(this,null,function*(){let t=r.app;Yr(t);let n=v(t),i=n.token,o;if(i&&!ee(i)&&(n.token=void 0,i=void 0),!i){let c=yield n.cachedTokenPromise;c&&(ee(c)?i=c:yield Ge(t,void 0))}if(!e&&i&&ee(i))return{token:i.token};let a=!1;if(rn()){n.exchangeTokenPromise||(n.exchangeTokenPromise=en(tn(t,yield nn()),r.heartbeatServiceProvider).finally(()=>{n.exchangeTokenPromise=void 0}),a=!0);let c=yield n.exchangeTokenPromise;return yield Ge(t,c),n.token=c,{token:c.token}}try{n.exchangeTokenPromise||(n.exchangeTokenPromise=n.provider.getToken().finally(()=>{n.exchangeTokenPromise=void 0}),a=!0),i=yield v(t).exchangeTokenPromise}catch(c){c.code==="appCheck/throttled"?Je.warn(c.message):Je.error(c),o=c}let s;return i?o?ee(i)?s={token:i.token,internalError:o}:s=Xr(o):(s={token:i.token},n.token=i,yield Ge(t,i)):s=Xr(o),a&&Bn(t,s),s})}function jn(r){return I(this,null,function*(){let e=r.app;Yr(e);let{provider:t}=v(e);if(rn()){let n=yield nn(),{token:i}=yield en(tn(e,n),r.heartbeatServiceProvider);return{token:i}}else{let{token:n}=yield t.getToken();return{token:n}}})}function $n(r,e,t,n){let{app:i}=r,o=v(i),a={next:t,error:n,type:e};if(o.tokenObservers=[...o.tokenObservers,a],o.token&&ee(o.token)){let s=o.token;Promise.resolve().then(()=>{t({token:s.token}),Qr(r)}).catch(()=>{})}o.cachedTokenPromise.then(()=>Qr(r))}function on(r,e){let t=v(r),n=t.tokenObservers.filter(i=>i.next!==e);n.length===0&&t.tokenRefresher&&t.tokenRefresher.isRunning()&&t.tokenRefresher.stop(),t.tokenObservers=n}function Qr(r){let{app:e}=r,t=v(e),n=t.tokenRefresher;n||(n=Ln(r),t.tokenRefresher=n),!n.isRunning()&&t.isTokenAutoRefreshEnabled&&n.start()}function Ln(r){let{app:e}=r;return new Qe(()=>I(this,null,function*(){let t=v(e),n;if(t.token?n=yield Ze(r,!0):n=yield Ze(r),n.error)throw n.error;if(n.internalError)throw n.internalError}),()=>!0,()=>{let t=v(e);if(t.token){let n=t.token.issuedAtTimeMillis+(t.token.expireTimeMillis-t.token.issuedAtTimeMillis)*.5+3e5,i=t.token.expireTimeMillis-5*60*1e3;return n=Math.min(n,i),Math.max(0,n-Date.now())}else return 0},Gr.RETRIAL_MIN_WAIT,Gr.RETRIAL_MAX_WAIT)}function Bn(r,e){let t=v(r).tokenObservers;for(let n of t)try{n.type==="EXTERNAL"&&e.error!=null?n.error(e.error):n.next(e)}catch{}}function ee(r){return r.expireTimeMillis-Date.now()>0}function Xr(r){return{token:Fn(On),error:r}}var Ye=class{constructor(e,t){this.app=e,this.heartbeatServiceProvider=t}_delete(){let{tokenObservers:e}=v(this.app);for(let t of e)on(this.app,t.next);return Promise.resolve()}};function qn(r,e){return new Ye(r,e)}function Un(r){return{getToken:e=>Ze(r,e),getLimitedUseToken:()=>jn(r),addTokenListener:e=>$n(r,"INTERNAL",e),removeTokenListener:e=>on(r.app,e)}}var Wn="@firebase/app-check",Hn="0.8.4";var Kn="app-check",Jr="app-check-internal";function Vn(){$e(new J(Kn,r=>{let e=r.getProvider("app").getImmediate(),t=r.getProvider("heartbeat");return qn(e,t)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((r,e,t)=>{r.getProvider(Jr).initialize()})),$e(new J(Jr,r=>{let e=r.getProvider("app-check").getImmediate();return Un(e)},"PUBLIC").setInstantiationMode("EXPLICIT")),Le(Wn,Hn)}Vn();var zn=["localhost","0.0.0.0","127.0.0.1"],zi=typeof window<"u"&&zn.includes(window.location.hostname);var Gn="firebase",Qn="10.12.1";b.registerVersion(Gn,Qn,"app-compat");var Xn=["ngOnDestroy"],cn=(r,e,t,n={})=>new Proxy(r,{get:(i,o)=>t.runOutsideAngular(()=>{if(r[o])return n?.spy?.get&&n.spy.get(o,r[o]),r[o];if(Xn.indexOf(o)>-1)return()=>{};let a=e.toPromise().then(s=>{let c=s?.[o];return typeof c=="function"?c.bind(s):c?.then?c.then(u=>t.run(()=>u)):t.run(()=>c)});return new Proxy(()=>{},{get:(s,c)=>a[c],apply:(s,c,u)=>a.then(h=>{let E=h?.(...u);return n?.spy?.apply&&n.spy.apply(o,u,E),E})})})});var et=class{constructor(e){return e}},Ee=new p("angularfire2.app.options"),ve=new p("angularfire2.app.name");function Ae(r,e,t){let n=typeof t=="string"&&t||"[DEFAULT]",i=typeof t=="object"&&t||{};i.name=i.name||n;let a=b.apps.filter(s=>s&&s.name===i.name)[0]||e.runOutsideAngular(()=>b.initializeApp(r,i));try{if(JSON.stringify(r)!==JSON.stringify(a.options)){let s=!!module.hot;Jn("error",`${a.name} Firebase App already initialized with different options${s?", you may need to reload as Firebase is not HMR aware.":"."}`)}}catch{}return new et(a)}var Jn=(r,...e)=>{Fe()&&typeof console<"u"&&console[r](...e)};function be(r,e,t,n,i){let[,o,a]=globalThis.\u0275AngularfireInstanceCache.find(s=>s[0]===r)||[];if(o)return Zn(i,a)||(an("error",`${e} was already initialized on the ${t} Firebase App with different settings.${Yn?" You may need to reload as Firebase is not HMR aware.":""}`),an("warn",{is:i,was:a})),o;{let s=n();return globalThis.\u0275AngularfireInstanceCache.push([r,s,i]),s}}function Zn(r,e){try{return r.toString()===e.toString()}catch{return r===e}}var Yn=typeof module<"u"&&!!module.hot,an=(r,...e)=>{Fe()&&typeof console<"u"&&console[r](...e)};globalThis.\u0275AngularfireInstanceCache||=[];var rt=new p("angularfire2.auth.use-emulator"),nt=new p("angularfire2.auth.settings"),it=new p("angularfire2.auth.tenant-id"),ot=new p("angularfire2.auth.langugage-code"),st=new p("angularfire2.auth.use-device-language"),at=new p("angularfire.auth.persistence"),ct=(r,e,t,n,i,o,a,s)=>be(`${r.name}.auth`,"AngularFireAuth",r.name,()=>{let c=e.runOutsideAngular(()=>r.auth());if(t&&c.useEmulator(...t),n&&(c.tenantId=n),c.languageCode=i,o&&c.useDeviceLanguage(),a)for(let[u,h]of Object.entries(a))c.settings[u]=h;return s&&c.setPersistence(s),c},[t,n,i,o,a,s]),ln=(()=>{class r{authState;idToken;user;idTokenResult;credential;constructor(t,n,i,o,a,s,c,u,h,E,L,_){let re=new wt,D=P(void 0).pipe(V(a.outsideAngular),R(()=>o.runOutsideAngular(()=>import("./chunk-KJXRQX6Z.js"))),f(()=>Ae(t,o,n)),f(A=>ct(A,o,s,u,h,E,c,L)),Re({bufferSize:1,refCount:!1}));if(fe(i))this.authState=this.user=this.idToken=this.idTokenResult=this.credential=P(null);else{D.pipe(At()).subscribe();let A=D.pipe(R(d=>d.getRedirectResult().then(w=>w,()=>null)),m,Re({bufferSize:1,refCount:!1})),ne=D.pipe(R(d=>new K(w=>({unsubscribe:o.runOutsideAngular(()=>d.onAuthStateChanged(y=>w.next(y),y=>w.error(y),()=>w.complete()))})))),ie=D.pipe(R(d=>new K(w=>({unsubscribe:o.runOutsideAngular(()=>d.onIdTokenChanged(y=>w.next(y),y=>w.error(y),()=>w.complete()))}))));this.authState=A.pipe(Me(ne),se(a.outsideAngular),V(a.insideAngular)),this.user=A.pipe(Me(ie),se(a.outsideAngular),V(a.insideAngular)),this.idToken=this.user.pipe(R(d=>d?S(d.getIdToken()):P(null))),this.idTokenResult=this.user.pipe(R(d=>d?S(d.getIdTokenResult()):P(null))),this.credential=Et(A,re,this.authState.pipe(z(d=>!d))).pipe(f(d=>d?.user?d:null),se(a.outsideAngular),V(a.insideAngular))}return cn(this,D,o,{spy:{apply:(A,ne,ie)=>{(A.startsWith("signIn")||A.startsWith("createUser"))&&ie.then(d=>re.next(d))}}})}static \u0275fac=function(n){return new(n||r)(l(Ee),l(ve,8),l(G),l(Q),l(ge),l(rt,8),l(nt,8),l(it,8),l(ot,8),l(st,8),l(at,8),l(Z,8))};static \u0275prov=B({token:r,factory:r.\u0275fac,providedIn:"any"})}return r})();var oi="@firebase/firestore-compat",si="0.3.32";function pt(r,e){if(e===void 0)return{merge:!1};if(e.mergeFields!==void 0&&e.merge!==void 0)throw new q("invalid-argument",`Invalid options passed to function ${r}(): You cannot specify both "merge" and "mergeFields".`);return e}function un(){if(typeof Uint8Array>"u")throw new q("unimplemented","Uint8Arrays are not available in this environment.")}function dn(){if(!rr())throw new q("unimplemented","Blobs are unavailable in Firestore in this environment.")}var Te=class r{constructor(e){this._delegate=e}static fromBase64String(e){return dn(),new r(_e.fromBase64String(e))}static fromUint8Array(e){return un(),new r(_e.fromUint8Array(e))}toBase64(){return dn(),this._delegate.toBase64()}toUint8Array(){return un(),this._delegate.toUint8Array()}isEqual(e){return this._delegate.isEqual(e._delegate)}toString(){return"Blob(base64: "+this.toBase64()+")"}};function lt(r){return ai(r,["next","error","complete"])}function ai(r,e){if(typeof r!="object"||r===null)return!1;let t=r;for(let n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}var ut=class{enableIndexedDbPersistence(e,t){return dr(e._delegate,{forceOwnership:t})}enableMultiTabIndexedDbPersistence(e){return hr(e._delegate)}clearIndexedDbPersistence(e){return fr(e._delegate)}},ke=class{constructor(e,t,n){this._delegate=t,this._persistenceProvider=n,this.INTERNAL={delete:()=>this.terminate()},e instanceof nr||(this._appCompat=e)}get _databaseId(){return this._delegate._databaseId}settings(e){let t=this._delegate._getSettings();!e.merge&&t.host!==e.host&&Jt("You are overriding the original host. If you did not intend to override your settings, use {merge: true}."),e.merge&&(e=Object.assign(Object.assign({},t),e),delete e.merge),this._delegate._setSettings(e)}useEmulator(e,t,n={}){sr(this._delegate,e,t,n)}enableNetwork(){return gr(this._delegate)}disableNetwork(){return mr(this._delegate)}enablePersistence(e){let t=!1,n=!1;return e&&(t=!!e.synchronizeTabs,n=!!e.experimentalForceOwningTab,ir("synchronizeTabs",t,"experimentalForceOwningTab",n)),t?this._persistenceProvider.enableMultiTabIndexedDbPersistence(this):this._persistenceProvider.enableIndexedDbPersistence(this,n)}clearPersistence(){return this._persistenceProvider.clearIndexedDbPersistence(this)}terminate(){return this._appCompat&&(this._appCompat._removeServiceInstance("firestore-compat"),this._appCompat._removeServiceInstance("firestore")),this._delegate._delete()}waitForPendingWrites(){return pr(this._delegate)}onSnapshotsInSync(e){return $r(this._delegate,e)}get app(){if(!this._appCompat)throw new q("failed-precondition","Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._appCompat}collection(e){try{return new H(this,Be(this._delegate,e))}catch(t){throw g(t,"collection()","Firestore.collection()")}}doc(e){try{return new T(this,me(this._delegate,e))}catch(t){throw g(t,"doc()","Firestore.doc()")}}collectionGroup(e){try{return new $(this,ar(this._delegate,e))}catch(t){throw g(t,"collectionGroup()","Firestore.collectionGroup()")}}runTransaction(e){return qr(this._delegate,t=>e(new Ce(this,t)))}batch(){return ur(this._delegate),new Ie(new Br(this._delegate,e=>Lr(this._delegate,e)))}loadBundle(e){return _r(this._delegate,e)}namedQuery(e){return wr(this._delegate,e).then(t=>t?new $(this,t):null)}},U=class extends Sr{constructor(e){super(),this.firestore=e}convertBytes(e){return new Te(new _e(e))}convertReference(e){let t=this.convertDocumentKey(e,this.firestore._databaseId);return T.forKey(t,this.firestore,null)}};function ci(r){Xt(r)}var Ce=class{constructor(e,t){this._firestore=e,this._delegate=t,this._userDataWriter=new U(e)}get(e){let t=O(e);return this._delegate.get(t).then(n=>new F(this._firestore,new we(this._firestore._delegate,this._userDataWriter,n._key,n._document,n.metadata,t.converter)))}set(e,t,n){let i=O(e);return n?(pt("Transaction.set",n),this._delegate.set(i,t,n)):this._delegate.set(i,t),this}update(e,t,n,...i){let o=O(e);return arguments.length===2?this._delegate.update(o,t):this._delegate.update(o,t,n,...i),this}delete(e){let t=O(e);return this._delegate.delete(t),this}},Ie=class{constructor(e){this._delegate=e}set(e,t,n){let i=O(e);return n?(pt("WriteBatch.set",n),this._delegate.set(i,t,n)):this._delegate.set(i,t),this}update(e,t,n,...i){let o=O(e);return arguments.length===2?this._delegate.update(o,t):this._delegate.update(o,t,n,...i),this}delete(e){let t=O(e);return this._delegate.delete(t),this}commit(){return this._delegate.commit()}},W=class r{constructor(e,t,n){this._firestore=e,this._userDataWriter=t,this._delegate=n}fromFirestore(e,t){let n=new Pr(this._firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,null);return this._delegate.fromFirestore(new j(this._firestore,n),t??{})}toFirestore(e,t){return t?this._delegate.toFirestore(e,t):this._delegate.toFirestore(e)}static getInstance(e,t){let n=r.INSTANCES,i=n.get(e);i||(i=new WeakMap,n.set(e,i));let o=i.get(t);return o||(o=new r(e,new U(e),t),i.set(t,o)),o}};W.INSTANCES=new WeakMap;var T=class r{constructor(e,t){this.firestore=e,this._delegate=t,this._userDataWriter=new U(e)}static forPath(e,t,n){if(e.length%2!==0)throw new q("invalid-argument",`Invalid document reference. Document references must have an even number of segments, but ${e.canonicalString()} has ${e.length}`);return new r(t,new Y(t._delegate,n,new tr(e)))}static forKey(e,t,n){return new r(t,new Y(t._delegate,n,e))}get id(){return this._delegate.id}get parent(){return new H(this.firestore,this._delegate.parent)}get path(){return this._delegate.path}collection(e){try{return new H(this.firestore,Be(this._delegate,e))}catch(t){throw g(t,"collection()","DocumentReference.collection()")}}isEqual(e){return e=pe(e),e instanceof Y?qe(this._delegate,e):!1}set(e,t){t=pt("DocumentReference.set",t);try{return t?Ke(this._delegate,e,t):Ke(this._delegate,e)}catch(n){throw g(n,"setDoc()","DocumentReference.set()")}}update(e,t,...n){try{return arguments.length===1?Ve(this._delegate,e):Ve(this._delegate,e,t,...n)}catch(i){throw g(i,"updateDoc()","DocumentReference.update()")}}delete(){return Fr(this._delegate)}onSnapshot(...e){let t=hn(e),n=fn(e,i=>new F(this.firestore,new we(this.firestore._delegate,this._userDataWriter,i._key,i._document,i.metadata,this._delegate.converter)));return ze(this._delegate,t,n)}get(e){let t;return e?.source==="cache"?t=Dr(this._delegate):e?.source==="server"?t=Rr(this._delegate):t=xr(this._delegate),t.then(n=>new F(this.firestore,new we(this.firestore._delegate,this._userDataWriter,n._key,n._document,n.metadata,this._delegate.converter)))}withConverter(e){return new r(this.firestore,e?this._delegate.withConverter(W.getInstance(this.firestore,e)):this._delegate.withConverter(null))}};function g(r,e,t){return r.message=r.message.replace(e,t),r}function hn(r){for(let e of r)if(typeof e=="object"&&!lt(e))return e;return{}}function fn(r,e){var t,n;let i;return lt(r[0])?i=r[0]:lt(r[1])?i=r[1]:typeof r[0]=="function"?i={next:r[0],error:r[1],complete:r[2]}:i={next:r[1],error:r[2],complete:r[3]},{next:o=>{i.next&&i.next(e(o))},error:(t=i.error)===null||t===void 0?void 0:t.bind(i),complete:(n=i.complete)===null||n===void 0?void 0:n.bind(i)}}var F=class{constructor(e,t){this._firestore=e,this._delegate=t}get ref(){return new T(this._firestore,this._delegate.ref)}get id(){return this._delegate.id}get metadata(){return this._delegate.metadata}get exists(){return this._delegate.exists()}data(e){return this._delegate.data(e)}get(e,t){return this._delegate.get(e,t)}isEqual(e){return He(this._delegate,e._delegate)}},j=class extends F{data(e){let t=this._delegate.data(e);return this._delegate._converter||Zt(t!==void 0,"Document in a QueryDocumentSnapshot should exist"),t}},$=class r{constructor(e,t){this.firestore=e,this._delegate=t,this._userDataWriter=new U(e)}where(e,t,n){try{return new r(this.firestore,C(this._delegate,Er(e,t,n)))}catch(i){throw g(i,/(orderBy|where)\(\)/,"Query.$1()")}}orderBy(e,t){try{return new r(this.firestore,C(this._delegate,vr(e,t)))}catch(n){throw g(n,/(orderBy|where)\(\)/,"Query.$1()")}}limit(e){try{return new r(this.firestore,C(this._delegate,Ar(e)))}catch(t){throw g(t,"limit()","Query.limit()")}}limitToLast(e){try{return new r(this.firestore,C(this._delegate,br(e)))}catch(t){throw g(t,"limitToLast()","Query.limitToLast()")}}startAt(...e){try{return new r(this.firestore,C(this._delegate,Tr(...e)))}catch(t){throw g(t,"startAt()","Query.startAt()")}}startAfter(...e){try{return new r(this.firestore,C(this._delegate,kr(...e)))}catch(t){throw g(t,"startAfter()","Query.startAfter()")}}endBefore(...e){try{return new r(this.firestore,C(this._delegate,Cr(...e)))}catch(t){throw g(t,"endBefore()","Query.endBefore()")}}endAt(...e){try{return new r(this.firestore,C(this._delegate,Ir(...e)))}catch(t){throw g(t,"endAt()","Query.endAt()")}}isEqual(e){return cr(this._delegate,e._delegate)}get(e){let t;return e?.source==="cache"?t=Nr(this._delegate):e?.source==="server"?t=Or(this._delegate):t=Mr(this._delegate),t.then(n=>new te(this.firestore,new We(this.firestore._delegate,this._userDataWriter,this._delegate,n._snapshot)))}onSnapshot(...e){let t=hn(e),n=fn(e,i=>new te(this.firestore,new We(this.firestore._delegate,this._userDataWriter,this._delegate,i._snapshot)));return ze(this._delegate,t,n)}withConverter(e){return new r(this.firestore,e?this._delegate.withConverter(W.getInstance(this.firestore,e)):this._delegate.withConverter(null))}},dt=class{constructor(e,t){this._firestore=e,this._delegate=t}get type(){return this._delegate.type}get doc(){return new j(this._firestore,this._delegate.doc)}get oldIndex(){return this._delegate.oldIndex}get newIndex(){return this._delegate.newIndex}},te=class{constructor(e,t){this._firestore=e,this._delegate=t}get query(){return new $(this._firestore,this._delegate.query)}get metadata(){return this._delegate.metadata}get size(){return this._delegate.size}get empty(){return this._delegate.empty}get docs(){return this._delegate.docs.map(e=>new j(this._firestore,e))}docChanges(e){return this._delegate.docChanges(e).map(t=>new dt(this._firestore,t))}forEach(e,t){this._delegate.forEach(n=>{e.call(t,new j(this._firestore,n))})}isEqual(e){return He(this._delegate,e._delegate)}},H=class r extends ${constructor(e,t){super(e,t),this.firestore=e,this._delegate=t}get id(){return this._delegate.id}get path(){return this._delegate.path}get parent(){let e=this._delegate.parent;return e?new T(this.firestore,e):null}doc(e){try{return e===void 0?new T(this.firestore,me(this._delegate)):new T(this.firestore,me(this._delegate,e))}catch(t){throw g(t,"doc()","CollectionReference.doc()")}}add(e){return jr(this._delegate,e).then(t=>new T(this.firestore,t))}isEqual(e){return qe(this._delegate,e._delegate)}withConverter(e){return new r(this.firestore,e?this._delegate.withConverter(W.getInstance(this.firestore,e)):this._delegate.withConverter(null))}};function O(r){return or(r,Y)}var ht=class r{constructor(...e){this._delegate=new Ue(...e)}static documentId(){return new r(er.keyField().canonicalString())}isEqual(e){return e=pe(e),e instanceof Ue?this._delegate._internalPath.isEqual(e._internalPath):!1}};var ft=class r{constructor(e){this._delegate=e}static serverTimestamp(){let e=Wr();return e._methodName="FieldValue.serverTimestamp",new r(e)}static delete(){let e=Ur();return e._methodName="FieldValue.delete",new r(e)}static arrayUnion(...e){let t=Hr(...e);return t._methodName="FieldValue.arrayUnion",new r(t)}static arrayRemove(...e){let t=Kr(...e);return t._methodName="FieldValue.arrayRemove",new r(t)}static increment(e){let t=Vr(e);return t._methodName="FieldValue.increment",new r(t)}isEqual(e){return this._delegate.isEqual(e._delegate)}};var li={Firestore:ke,GeoPoint:yr,Timestamp:Yt,Blob:Te,Transaction:Ce,WriteBatch:Ie,DocumentReference:T,DocumentSnapshot:F,Query:$,QueryDocumentSnapshot:j,QuerySnapshot:te,CollectionReference:H,FieldPath:ht,FieldValue:ft,setLogLevel:ci,CACHE_SIZE_UNLIMITED:lr};function ui(r,e){r.INTERNAL.registerComponent(new J("firestore-compat",t=>{let n=t.getProvider("app-compat").getImmediate(),i=t.getProvider("firestore").getImmediate();return e(n,i)},"PUBLIC").setServiceProps(Object.assign({},li)))}function di(r){ui(r,(e,t)=>new ke(e,t,new ut)),r.registerVersion(oi,si)}di(b);function hi(r,e=yt){return new K(t=>{let n;return e!=null?e.schedule(()=>{n=r.onSnapshot({includeMetadataChanges:!0},t)}):n=r.onSnapshot({includeMetadataChanges:!0},t),()=>{n?.()}})}function pn(r,e){return hi(r,e)}function fi(r,e){return pn(r,e).pipe(le(void 0),ae(),f(t=>{let[n,i]=t;return i.exists?n?.exists?{payload:i,type:"modified"}:{payload:i,type:"added"}:{payload:i,type:"removed"}}))}function _t(r,e){return pn(r,e).pipe(f(t=>({payload:t,type:"query"})))}var Se=class{ref;afs;constructor(e,t){this.ref=e,this.afs=t}set(e,t){return this.ref.set(e,t)}update(e){return this.ref.update(e)}delete(){return this.ref.delete()}collection(e,t){let n=this.ref.collection(e),{ref:i,query:o}=_n(n,t);return new xe(i,o,this.afs)}snapshotChanges(){return fi(this.ref,this.afs.schedulers.outsideAngular).pipe(m)}valueChanges(e={}){return this.snapshotChanges().pipe(f(({payload:t})=>e.idField?De(oe({},t.data()),{[e.idField]:t.id}):t.data()))}get(e){return S(this.ref.get(e)).pipe(m)}};function Pe(r,e){return _t(r,e).pipe(le(void 0),ae(),f(t=>{let[n,i]=t,o=i.payload.docChanges(),a=o.map(s=>({type:s.type,payload:s}));return n&&JSON.stringify(n.payload.metadata)!==JSON.stringify(i.payload.metadata)&&i.payload.docs.forEach((s,c)=>{let u=o.find(E=>E.doc.ref.isEqual(s.ref)),h=n?.payload.docs.find(E=>E.ref.isEqual(s.ref));u&&JSON.stringify(u.doc.metadata)===JSON.stringify(s.metadata)||!u&&h&&JSON.stringify(h.metadata)===JSON.stringify(s.metadata)||a.push({type:"modified",payload:{oldIndex:c,newIndex:c,type:"modified",doc:s}})}),a}))}function gn(r,e,t){return Pe(r,t).pipe(ce((n,i)=>pi(n,i.map(o=>o.payload),e),[]),vt(),f(n=>n.map(i=>({type:i.type,payload:i}))))}function pi(r,e,t){return e.forEach(n=>{t.indexOf(n.type)>-1&&(r=gi(r,n))}),r}function gt(r,e,t,...n){let i=r.slice();return i.splice(e,t,...n),i}function gi(r,e){switch(e.type){case"added":if(!(r[e.newIndex]&&r[e.newIndex].doc.ref.isEqual(e.doc.ref)))return gt(r,e.newIndex,0,e);break;case"modified":if(r[e.oldIndex]==null||r[e.oldIndex].doc.ref.isEqual(e.doc.ref))if(e.oldIndex!==e.newIndex){let t=r.slice();return t.splice(e.oldIndex,1),t.splice(e.newIndex,0,e),t}else return gt(r,e.newIndex,1,e);break;case"removed":if(r[e.oldIndex]&&r[e.oldIndex].doc.ref.isEqual(e.doc.ref))return gt(r,e.oldIndex,1);break}return r}function mn(r){return(!r||r.length===0)&&(r=["added","removed","modified"]),r}var xe=class{ref;query;afs;constructor(e,t,n){this.ref=e,this.query=t,this.afs=n}stateChanges(e){let t=Pe(this.query,this.afs.schedulers.outsideAngular);return e&&e.length>0&&(t=t.pipe(f(n=>n.filter(i=>e.indexOf(i.type)>-1)))),t.pipe(le(void 0),ae(),z(([n,i])=>i.length>0||!n),f(([,n])=>n),m)}auditTrail(e){return this.stateChanges(e).pipe(ce((t,n)=>[...t,...n],[]))}snapshotChanges(e){let t=mn(e);return gn(this.query,t,this.afs.schedulers.outsideAngular).pipe(m)}valueChanges(e={}){return _t(this.query,this.afs.schedulers.outsideAngular).pipe(f(t=>t.payload.docs.map(n=>e.idField?De(oe({},n.data()),{[e.idField]:n.id}):n.data())),m)}get(e){return S(this.query.get(e)).pipe(m)}add(e){return this.ref.add(e)}doc(e){return new Se(this.ref.doc(e),this.afs)}},mt=class{query;afs;constructor(e,t){this.query=e,this.afs=t}stateChanges(e){return!e||e.length===0?Pe(this.query,this.afs.schedulers.outsideAngular).pipe(m):Pe(this.query,this.afs.schedulers.outsideAngular).pipe(f(t=>t.filter(n=>e.indexOf(n.type)>-1)),z(t=>t.length>0),m)}auditTrail(e){return this.stateChanges(e).pipe(ce((t,n)=>[...t,...n],[]))}snapshotChanges(e){let t=mn(e);return gn(this.query,t,this.afs.schedulers.outsideAngular).pipe(m)}valueChanges(e={}){return _t(this.query,this.afs.schedulers.outsideAngular).pipe(f(n=>n.payload.docs.map(i=>e.idField?oe({[e.idField]:i.id},i.data()):i.data())),m)}get(e){return S(this.query.get(e)).pipe(m)}},mi=new p("angularfire2.enableFirestorePersistence"),_i=new p("angularfire2.firestore.persistenceSettings"),wi=new p("angularfire2.firestore.settings"),yi=new p("angularfire2.firestore.use-emulator");function _n(r,e=t=>t){return{query:e(r),ref:r}}var wn=(()=>{class r{schedulers;firestore;persistenceEnabled$;constructor(t,n,i,o,a,s,c,u,h,E,L,_,re,D,A,ne,ie){this.schedulers=c;let d=Ae(t,s,n),w=h;E&&ct(d,s,L,re,D,A,_,ne),[this.firestore,this.persistenceEnabled$]=be(`${d.name}.firestore`,"AngularFirestore",d.name,()=>{let y=s.runOutsideAngular(()=>d.firestore());if(o&&y.settings(o),w&&y.useEmulator(...w),i&&!fe(a)){let En=()=>{try{return S(y.enablePersistence(u||void 0).then(()=>!0,()=>!1))}catch(vn){return typeof console<"u"&&console.warn(vn),P(!1)}};return[y,s.runOutsideAngular(En)]}else return[y,P(!1)]},[o,w,i])}collection(t,n){let i;typeof t=="string"?i=this.firestore.collection(t):i=t;let{ref:o,query:a}=_n(i,n),s=this.schedulers.ngZone.run(()=>o);return new xe(s,a,this)}collectionGroup(t,n){let i=n||(a=>a),o=this.firestore.collectionGroup(t);return new mt(i(o),this)}doc(t){let n;typeof t=="string"?n=this.firestore.doc(t):n=t;let i=this.schedulers.ngZone.run(()=>n);return new Se(i,this)}createId(){return this.firestore.collection("_").doc().id}static \u0275fac=function(n){return new(n||r)(l(Ee),l(ve,8),l(mi,8),l(wi,8),l(G),l(Q),l(ge),l(_i,8),l(yi,8),l(ln,8),l(rt,8),l(nt,8),l(it,8),l(ot,8),l(st,8),l(at,8),l(Z,8))};static \u0275prov=B({token:r,factory:r.\u0275fac,providedIn:"any"})}return r})();var yn=(()=>{let e=class e{constructor(n){this.firestore=n,this.mensajesCollection=this.firestore.collection("chats")}getMessages(){return this.mensajesCollection.valueChanges()}addMessage(n,i){let o=new Date().getTime();this.mensajesCollection.add({user:n,text:i,timestamp:o})}};e.\u0275fac=function(i){return new(i||e)(l(wn))},e.\u0275prov=B({token:e,factory:e.\u0275fac,providedIn:"root"});let r=e;return r})();var Ai=(r,e)=>({"mensaje-propio":r,"mensaje-otro":e});function bi(r,e){if(r&1&&(kt(0),k(1,"span",10),X(2),N(),Ct()),r&2){let t=Oe().$implicit;M(2),he(" ",t.user,":")}}function Ti(r,e){if(r&1&&(k(0,"div",6),Ne(1,bi,3,1,"ng-container",7),k(2,"span",8),X(3),N(),k(4,"span",9),X(5),Mt(6,"date"),N()()),r&2){let t=e.$implicit,n=Oe();de("ngClass",Rt(7,Ai,t.user===n.usuarioLogueado,t.user!==n.usuarioLogueado)),M(),de("ngIf",t.user!==n.usuarioLogueado),M(2),he(" ",t.text,""),M(2),he(" ",Nt(6,4,t.timestamp,"dd/MM HH:mm"),"")}}var Go=(()=>{let e=class e{constructor(n,i,o){this.chatService=n,this.authService=i,this.msjError=o,this.usuarioLogueado=null,this.mensajes=[],this.nuevoMensaje="",this.chatService.getMessages().subscribe(a=>{this.mensajes=a})}ngOnInit(){this.authService.getCurrentUser().subscribe(n=>{n?this.usuarioLogueado=n?.email:this.usuarioLogueado=null}),this.chatService.getMessages().subscribe(n=>{this.mensajes=n.sort((i,o)=>o.timestamp-i.timestamp)})}enviarMensaje(){if(this.usuarioLogueado!=null){if(this.nuevoMensaje.trim()!==""){let n=this.usuarioLogueado||"usuario an\xF3nimo";this.chatService.addMessage(n,this.nuevoMensaje),this.nuevoMensaje=""}}else this.msjError.mostrarError("Debes loguearte para utilizar el chat.");console.log("ya sal\xED")}};e.\u0275fac=function(i){return new(i||e)(ue(yn),ue(Gt),ue(zr))},e.\u0275cmp=bt({type:e,selectors:[["app-chat"]],standalone:!0,features:[Dt],decls:9,vars:2,consts:[[1,"chat-container"],[1,"mensajes-wrapper"],["class","mensaje",3,"ngClass",4,"ngFor","ngForOf"],[1,"input-container"],["placeholder","Escribe un mensaje...",1,"input",3,"ngModelChange","ngModel"],[1,"button",3,"click"],[1,"mensaje",3,"ngClass"],[4,"ngIf"],[1,"text"],[1,"timestamp"],[1,"user"]],template:function(i,o){i&1&&(k(0,"body"),Tt(1,"app-navbar"),k(2,"div",0)(3,"div",1),Ne(4,Ti,7,10,"div",2),N(),k(5,"div",3)(6,"input",4),xt("ngModelChange",function(s){return Pt(o.nuevoMensaje,s)||(o.nuevoMensaje=s),s}),N(),k(7,"button",5),It("click",function(){return o.enviarMensaje()}),X(8,"Enviar"),N()()()()),i&2&&(M(4),de("ngForOf",o.mensajes),M(2),St("ngModel",o.nuevoMensaje))},dependencies:[Lt,Ot,Ft,jt,$t,zt,Ht,Kt,Vt,Qt],styles:['body[_ngcontent-%COMP%]{background-image:url("./media/f4-AZC6R3VF.jpg");margin:0;font-family:Ubuntu,sans-serif;background-size:100% 100%;height:100vh;width:100%}.chat-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;height:90%;justify-content:center;align-items:center}.mensajes-wrapper[_ngcontent-%COMP%]{display:flex;flex-direction:column;border:1px solid #ccc;border-radius:20px;padding:30px;width:800px;max-height:800px;overflow-y:auto;background-color:#000000a1;margin:0 auto;scroll-padding-bottom:50px;transform:rotateX(180deg)}.mensajes-wrapper[_ngcontent-%COMP%]::-webkit-scrollbar{width:15px}.mensajes-wrapper[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background:#facd394b;border-radius:6px}.mensajes-wrapper[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover{background:#facd398e}.mensaje-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;flex:1;overflow-y:auto;margin-top:100px}.mensaje[_ngcontent-%COMP%]{display:flex;flex-direction:column;max-width:70%;margin-bottom:10px;padding:10px;border-radius:15px;transform:rotateX(180deg)}.mensaje-propio[_ngcontent-%COMP%]{background-color:#51ff00;color:#000;align-self:flex-end}.mensaje-otro[_ngcontent-%COMP%]{background-color:#083ccc;color:#fff;align-self:flex-start}.user[_ngcontent-%COMP%]{font-weight:700;text-decoration:underline}.timestamp[_ngcontent-%COMP%]{align-self:flex-end}.input-container[_ngcontent-%COMP%]{display:flex;align-items:center;padding:5px;margin-top:auto;width:50%}.input[_ngcontent-%COMP%]{flex:1;padding:10px;margin-right:5px;border-radius:20px}.button[_ngcontent-%COMP%]{padding:10px 20px;background-color:#007bff;color:#fff;border:none;cursor:pointer;border-radius:20px}']});let r=e;return r})();export{Ee as a,Go as b};
