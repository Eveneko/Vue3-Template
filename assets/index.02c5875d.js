var e=Object.defineProperty,t=Object.defineProperties,s=Object.getOwnPropertyDescriptors,a=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,c=(t,s,a)=>s in t?e(t,s,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[s]=a,r=(e,t)=>{for(var s in t||(t={}))n.call(t,s)&&c(e,s,t[s]);if(a)for(var s of a(t))o.call(t,s)&&c(e,s,t[s]);return e},i=(e,a)=>t(e,s(a));import{_ as u,a as l,b as d,c as p,d as m,p as v,e as h,o as b,f,w as x,g as y,h as g,u as _,r as O,i as k,t as C,j as A,k as P,l as V,m as E,n as T,q as j,s as w,v as L,x as H,y as I,z as M,F as R,A as S,B as F}from"./vendor.98d96717.js";let N;const U={};var D=m({name:"Home"});const B=x();v("data-v-4a53233e");const q={class:"home-container page-container"},$=y("img",{class:"vue-element-plus-logo",alt:"Vue logo",src:"./assets/logo.03d6d6da.png"},null,-1),z=y("div",{class:"page-title"},"Vite2.x + Vue3.x + TypeScript + Element Plus",-1);h();const G=B(((e,t,s,a,n,o)=>(b(),f("div",q,[$,z]))));D.render=G,D.__scopeId="data-v-4a53233e";const W=g({state:{text:"This is Vuex Root.state.text"},getters:{},mutations:{},actions:{},modules:{numFactoryModule:{namespaced:!0,state:{name:"numFactory-module",count:1},mutations:{DOUBLE_COUNT(e){e.count*=2}},actions:{}}}}),X=Symbol("vue-store");var J=m({name:"Vuex",setup(){const e=_(X),t=O({text:k((()=>e.state.text)),count:k((()=>e.state.numFactoryModule.count))});return i(r({},C(t)),{double:()=>{e.commit("numFactoryModule/DOUBLE_COUNT")}})}});const K={class:"vuex-container page-container"},Q=y("div",{class:"page-title"},"Vuex Test Page",-1),Y=E("double");J.render=function(e,t,s,a,n,o){const c=A("el-button");return b(),f("div",K,[Q,y("p",null,"store Root is: "+P(e.text),1),y("p",null,"store doubleCount is: "+P(e.count),1),y(c,{type:"primary",onClick:e.double},{default:V((()=>[Y])),_:1},8,["onClick"])])};var Z=m({name:"Vuex",setup(){const e=T(0);return{count:e,increment:()=>{e.value+=1}}}});const ee=x();v("data-v-d105b414");const te={class:"test-container page-container"},se=y("div",{class:"page-title"},"Unit Test Page",-1);h();const ae=ee(((e,t,s,a,n,o)=>(b(),f("div",te,[se,y("p",null,"count is: "+P(e.count),1),y("button",{onClick:t[1]||(t[1]=(...t)=>e.increment&&e.increment(...t))},"increment")]))));Z.render=ae,Z.__scopeId="data-v-d105b414";const ne=[{path:"/",name:"Home",component:D},{path:"/vuex",name:"Vuex",component:J},{path:"/axios",name:"Axios",component:()=>function(e,t){if(!t)return e();if(void 0===N){const e=document.createElement("link").relList;N=e&&e.supports&&e.supports("modulepreload")?"modulepreload":"preload"}return Promise.all(t.map((e=>{if(e in U)return;U[e]=!0;const t=e.endsWith(".css"),s=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${s}`))return;const a=document.createElement("link");return a.rel=t?"stylesheet":N,t||(a.as="script",a.crossOrigin=""),a.href=e,document.head.appendChild(a),t?new Promise(((e,t)=>{a.addEventListener("load",e),a.addEventListener("error",t)})):void 0}))).then((()=>e()))}((()=>import("./Axios.462129e6.js")),["./assets/Axios.462129e6.js","./assets/Axios.f89d1dba.css","./assets/vendor.98d96717.js"])},{path:"/test",name:"Test",component:Z}],oe=j({history:w(),routes:ne});v("data-v-bc3cfd00");const ce={class:"header"},re=y("i",{class:"icon el-icon-s-promotion"},null,-1),ie=E(" GitHub");h();const ue=m({name:"Header"});var le=m(i(r({},ue),{expose:[],setup(e){const t=H(),s=()=>{window.open("https://github.com/XPoet/vite-vue3-starter")};return(e,a)=>(b(),f("div",ce,[y("div",{class:"title",onClick:a[1]||(a[1]=e=>L(t).push("/"))},"Vite2.x + Vue3.x + TypeScript Starter"),y("div",{class:"go-github",onClick:s},[re,ie])]))}}));le.__scopeId="data-v-bc3cfd00";var de=m({name:"Nav",setup(){const e=H(),t=O({navList:[{name:"Home",isActive:!1,path:"/"},{name:"Vuex",isActive:!1,path:"/vuex"},{name:"Axios",isActive:!1,path:"/axios"},{name:"Test",isActive:!1,path:"/test"}],navClick(t){e.push(t.path)}}),s=e=>{t.navList.forEach((t=>{const s=t;return s.isActive=s.path===e,s}))};return I((()=>e.currentRoute.value),(e=>{s(e.path)})),M((()=>{e.isReady().then((()=>{s(e.currentRoute.value.path)}))})),r({},C(t))}});const pe=x();v("data-v-65079fd3");const me={class:"nav"},ve={class:"nav-list"};h();const he=pe(((e,t,s,a,n,o)=>(b(),f("aside",me,[y("ul",ve,[(b(!0),f(R,null,S(e.navList,((t,s)=>(b(),f("li",{class:["nav-item flex-center",{active:t.isActive}],key:s,onClick:s=>e.navClick(t)},P(t.name),11,["onClick"])))),128))])]))));de.render=he,de.__scopeId="data-v-65079fd3";var be=m({name:"Main",components:{Header:le,Nav:de}});const fe=x();v("data-v-c4c6769c");const xe={class:"main-container"},ye={class:"top"},ge={class:"bottom"},_e={class:"left"},Oe={class:"right"},ke={class:"content"};h();const Ce=fe(((e,t,s,a,n,o)=>{const c=A("Header"),r=A("Nav"),i=A("router-view");return b(),f("main",xe,[y("div",ye,[y(c)]),y("div",ge,[y("div",_e,[y(r)]),y("div",Oe,[y("div",ke,[y(i)])])])])}));be.render=Ce,be.__scopeId="data-v-c4c6769c";var Ae=m({name:"App",components:{Main:be}});Ae.render=function(e,t,s,a,n,o){const c=A("Main");return b(),f(c)};const Pe=F(Ae);var Ve;(Ve=Pe,Ve.use(u).use(l).use(d).use(p),Ve).use(oe).use(W,X).mount("#app");