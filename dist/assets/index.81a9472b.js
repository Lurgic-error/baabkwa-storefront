import{r as h,o as u,c as f,a,b as c,w as l,d as y,e as d,T as k,f as v,g as E,h as L,i as P,j as x}from"./vendor.57bdc1dd.js";const C=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const s of n.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&o(s)}).observe(document,{childList:!0,subtree:!0});function t(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerpolicy&&(n.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?n.credentials="include":e.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function o(e){if(e.ep)return;e.ep=!0;const n=t(e);fetch(e.href,n)}};C();var O="/assets/logo.b3cb9039.svg";var g=(_,r)=>{const t=_.__vccOpts||_;for(const[o,e]of r)t[o]=e;return t};const V={},A={class:"the__header"},S={class:"navbar navbar-expand-lg navbar-light bg-light w-100"},H={class:"container-fluid d-flex justify-content-between w-100 the__flex"},R=y('<div class="navbar-brand"><img src="'+O+'" alt="baabkubwa logo" width="200"></div><button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button><form class="d-flex"><input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"><button class="btn btn-outline-success" type="submit"> Search </button></form>',3),D={class:"navbar-nav mb-2 mb-lg-0 w-100 d-flex justify-content-end"},I={class:"nav-item"},$=d("Home"),z={class:"nav-item"},N=d("Shops"),B={class:"nav-item"},j=d("Product"),F={class:"nav-item"},W=d("Food"),M={class:"nav-item"},q=a("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-cart",viewBox:"0 0 16 16"},[a("path",{d:"M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"})],-1),K=d(" Cart "),U={class:"nav-item"},G=a("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-heart",viewBox:"0 0 16 16"},[a("path",{d:"m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"})],-1),J=d(" Wishlist ");function Q(_,r){const t=h("router-link");return u(),f("header",A,[a("nav",S,[a("div",H,[R,a("ul",D,[a("li",I,[c(t,{ref:"navLink",id:"TheHome",to:{name:"TheHome"},class:"nav-link","aria-current":"page"},{default:l(()=>[$]),_:1},512)]),a("li",z,[c(t,{ref:"navLink",id:"TheShops",to:{name:"TheShops"},class:"nav-link","aria-current":"page"},{default:l(()=>[N]),_:1},512)]),a("li",B,[c(t,{ref:"navLink",id:"TheProducts",to:{name:"TheProducts"},class:"nav-link","aria-current":"page"},{default:l(()=>[j]),_:1},512)]),a("li",F,[c(t,{ref:"navLink",id:"TheFoods",to:{name:"TheFoods"},class:"nav-link","aria-current":"page"},{default:l(()=>[W]),_:1},512)]),a("li",M,[c(t,{class:"nav-link d-flex align-items-center justify-content-between",style:{gap:".5rem"},to:{name:"TheCart"}},{default:l(()=>[q,K]),_:1})]),a("li",U,[c(t,{to:{name:"TheWishlist"},class:"nav-link d-flex align-items-center justify-content-between",style:{gap:".5rem"}},{default:l(()=>[G,J]),_:1})])])])])])}var X=g(V,[["render",Q]]);const Y={class:"base__app"},Z={setup(_){return(r,t)=>{const o=h("router-view");return u(),f("div",Y,[c(X),c(o,null,{default:l(({Component:e})=>[c(k,{name:"fade"},{default:l(()=>[(u(),v(E(e),{key:r.$route.path}))]),_:2},1024)]),_:1})])}}},ee="modulepreload",p={},te="/",i=function(r,t){return!t||t.length===0?r():Promise.all(t.map(o=>{if(o=`${te}${o}`,o in p)return;p[o]=!0;const e=o.endsWith(".css"),n=e?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${o}"]${n}`))return;const s=document.createElement("link");if(s.rel=e?"stylesheet":ee,e||(s.as="script",s.crossOrigin=""),s.href=o,document.head.appendChild(s),e)return new Promise((T,w)=>{s.addEventListener("load",T),s.addEventListener("error",w)})})).then(()=>r())},oe={};function ne(_,r){const t=h("router-view");return u(),v(t,{"keep-alive":"",transition:"","transition-mode":"out-in"})}var m=g(oe,[["render",ne]]);const ae=L({history:P("/"),routes:[{path:"/",component:m,children:[{path:"",name:"TheHome",component:()=>i(()=>import("./TheHome.81787bde.js"),["assets/TheHome.81787bde.js","assets/TheHome.c0754ee7.css","assets/ProductList.vue_vue_type_style_index_0_scoped_true_lang.690aa8f5.css","assets/TheFooter.08698cb4.js","assets/TheFooter.38bbf7d3.css","assets/vendor.57bdc1dd.js"])},{path:"shop",name:"TheShops",component:()=>i(()=>import("./TheShops.caaf091f.js"),["assets/TheShops.caaf091f.js","assets/TheFooter.08698cb4.js","assets/TheFooter.38bbf7d3.css","assets/vendor.57bdc1dd.js"])},{path:"products",name:"TheProducts",component:()=>i(()=>import("./TheProducts.ade9858c.js"),["assets/TheProducts.ade9858c.js","assets/TheProducts.4ea3599e.css","assets/ProductList.vue_vue_type_style_index_0_scoped_true_lang.690aa8f5.css","assets/TheFooter.08698cb4.js","assets/TheFooter.38bbf7d3.css","assets/vendor.57bdc1dd.js"])},{path:"product-detail",name:"ProductDetail",component:()=>i(()=>import("./ProductDetail.86ff529f.js"),["assets/ProductDetail.86ff529f.js","assets/vendor.57bdc1dd.js"])},{path:"food",name:"TheFoods",component:()=>i(()=>import("./TheFoods.db522d7e.js"),["assets/TheFoods.db522d7e.js","assets/TheFoods.3d92e6bf.css","assets/vendor.57bdc1dd.js"])},{path:"cart",name:"TheCart",component:()=>i(()=>import("./TheCart.aaed4407.js"),["assets/TheCart.aaed4407.js","assets/TheCart.20e0dd72.css","assets/TheFooter.08698cb4.js","assets/TheFooter.38bbf7d3.css","assets/vendor.57bdc1dd.js"])},{path:"wishlist",name:"TheWishlist",component:()=>i(()=>import("./TheWishlist.116702d6.js"),["assets/TheWishlist.116702d6.js","assets/vendor.57bdc1dd.js"])},{path:"checkout",name:"TheCheckout",component:()=>i(()=>import("./TheCheckout.8f54dd10.js"),["assets/TheCheckout.8f54dd10.js","assets/TheCheckout.7b3b8e29.css","assets/TheFooter.08698cb4.js","assets/TheFooter.38bbf7d3.css","assets/vendor.57bdc1dd.js"])},{path:"user-profile",component:m,children:[{path:"",name:"UserProfile",component:()=>i(()=>import("./UserProfile.321c8221.js"),["assets/UserProfile.321c8221.js","assets/UserProfile.0f665cfd.css","assets/vendor.57bdc1dd.js"])}]}]}]});const b=x(Z);b.use(ae);b.mount("#app");export{g as _,O as a};
