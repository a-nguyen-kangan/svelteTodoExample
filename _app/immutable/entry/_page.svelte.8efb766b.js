import{S as E,i as B,s as A,k as h,a as $,q as T,l as _,m as g,c as v,r as k,h as u,n as b,b as I,G as f,J as D,u as V,H as N,K as j,L as q,g as C,v as z,f as G,d as x,M as J,y as H,z as L,A as M,B as R,N as K,o as F}from"../chunks/index.71bf7d7a.js";function Q(d){let t,l,o,n,m,r=d[0].title+"",a,c,e;return{c(){t=h("div"),l=h("input"),m=$(),a=T(r),this.h()},l(i){t=_(i,"DIV",{});var s=g(t);l=_(s,"INPUT",{id:!0,type:!0}),m=v(s),a=k(s,r),s.forEach(u),this.h()},h(){b(l,"id",o=d[0].title),b(l,"type","checkbox"),l.checked=n=d[0].completed},m(i,s){I(i,t,s),f(t,l),f(t,m),f(t,a),c||(e=D(l,"click",d[1]),c=!0)},p(i,[s]){s&1&&o!==(o=i[0].title)&&b(l,"id",o),s&1&&n!==(n=i[0].completed)&&(l.checked=n),s&1&&r!==(r=i[0].title+"")&&V(a,r)},i:N,o:N,d(i){i&&u(t),c=!1,e()}}}function W(d,t,l){const o=j();let{item:n}=t;function m(){o("onChangedItem",{...n,completed:!n.completed})}return d.$$set=r=>{"item"in r&&l(0,n=r.item)},[n,m]}class X extends E{constructor(t){super(),B(this,t,W,Q,A,{item:0})}}function Y(d){let t,l,o,n,m,r,a,c,e,i,s,w;return{c(){t=h("div"),l=h("input"),o=$(),n=h("button"),m=T("Add"),r=$(),a=h("br"),c=$(),e=h("button"),i=T("Remove Completed"),this.h()},l(y){t=_(y,"DIV",{});var p=g(t);l=_(p,"INPUT",{id:!0,type:!0}),o=v(p),n=_(p,"BUTTON",{});var S=g(n);m=k(S,"Add"),S.forEach(u),r=v(p),a=_(p,"BR",{}),c=v(p),e=_(p,"BUTTON",{});var U=g(e);i=k(U,"Remove Completed"),U.forEach(u),p.forEach(u),this.h()},h(){b(l,"id","inp-todoText"),b(l,"type","text")},m(y,p){I(y,t,p),f(t,l),f(t,o),f(t,n),f(n,m),f(t,r),f(t,a),f(t,c),f(t,e),f(e,i),s||(w=[D(n,"click",d[0]),D(e,"click",d[1])],s=!0)},p:N,i:N,o:N,d(y){y&&u(t),s=!1,q(w)}}}function Z(d){const t=j();function l(){if(document.getElementById("inp-todoText").value){let m={completed:!1,title:document.getElementById("inp-todoText").value,userId:1};t("onNewItem",{item:m}),document.getElementById("inp-todoText").value=""}}function o(){t("removeCompleted","")}return[l,o]}class ee extends E{constructor(t){super(),B(this,t,Z,Y,A,{})}}function O(d,t,l){const o=d.slice();return o[4]=t[l],o}function P(d){let t,l;return t=new X({props:{item:d[4]}}),t.$on("onChangedItem",d[2]),{c(){H(t.$$.fragment)},l(o){L(t.$$.fragment,o)},m(o,n){M(t,o,n),l=!0},p(o,n){const m={};n&1&&(m.item=o[4]),t.$set(m)},i(o){l||(C(t.$$.fragment,o),l=!0)},o(o){x(t.$$.fragment,o),l=!1},d(o){R(t,o)}}}function te(d){let t,l,o,n,m,r=d[0],a=[];for(let e=0;e<r.length;e+=1)a[e]=P(O(d,r,e));const c=e=>x(a[e],1,1,()=>{a[e]=null});return{c(){t=T("Number of todos: "),l=T(d[1]),o=$(),n=h("div");for(let e=0;e<a.length;e+=1)a[e].c();this.h()},l(e){t=k(e,"Number of todos: "),l=k(e,d[1]),o=v(e),n=_(e,"DIV",{class:!0});var i=g(n);for(let s=0;s<a.length;s+=1)a[s].l(i);i.forEach(u),this.h()},h(){b(n,"class","todo-items svelte-gbt690")},m(e,i){I(e,t,i),I(e,l,i),I(e,o,i),I(e,n,i);for(let s=0;s<a.length;s+=1)a[s]&&a[s].m(n,null);m=!0},p(e,[i]){if((!m||i&2)&&V(l,e[1]),i&1){r=e[0];let s;for(s=0;s<r.length;s+=1){const w=O(e,r,s);a[s]?(a[s].p(w,i),C(a[s],1)):(a[s]=P(w),a[s].c(),C(a[s],1),a[s].m(n,null))}for(z(),s=r.length;s<a.length;s+=1)c(s);G()}},i(e){if(!m){for(let i=0;i<r.length;i+=1)C(a[i]);m=!0}},o(e){a=a.filter(Boolean);for(let i=0;i<a.length;i+=1)x(a[i]);m=!1},d(e){e&&u(t),e&&u(l),e&&u(o),e&&u(n),J(a,e)}}}function oe(d,t,l){let o,{todoItems:n=[{completed:!1,text:"Learn Svelte"},{completed:!1,text:"Make Toast"},{completed:!0,text:"Make Coffee"}]}=t;function m(r){K.call(this,d,r)}return d.$$set=r=>{"todoItems"in r&&l(0,n=r.todoItems)},d.$$.update=()=>{d.$$.dirty&1&&l(1,o=n.length)},[n,o,m]}class ne extends E{constructor(t){super(),B(this,t,oe,te,A,{todoItems:0})}}function le(d){let t,l,o,n,m,r,a;return n=new ee({}),n.$on("onNewItem",d[1]),n.$on("removeCompleted",d[3]),r=new ne({props:{todoItems:d[0]}}),r.$on("onChangedItem",d[2]),{c(){t=h("h1"),l=T("Todo App"),o=$(),H(n.$$.fragment),m=$(),H(r.$$.fragment)},l(c){t=_(c,"H1",{});var e=g(t);l=k(e,"Todo App"),e.forEach(u),o=v(c),L(n.$$.fragment,c),m=v(c),L(r.$$.fragment,c)},m(c,e){I(c,t,e),f(t,l),I(c,o,e),M(n,c,e),I(c,m,e),M(r,c,e),a=!0},p(c,[e]){const i={};e&1&&(i.todoItems=c[0]),r.$set(i)},i(c){a||(C(n.$$.fragment,c),C(r.$$.fragment,c),a=!0)},o(c){x(n.$$.fragment,c),x(r.$$.fragment,c),a=!1},d(c){c&&u(t),c&&u(o),R(n,c),c&&u(m),R(r,c)}}}function ie(d,t,l){let o=[{completed:!1,text:"Do Svelte"},{completed:!0,text:"Turn on computer"}],n=-1;function m(e){n++;let i={...e.detail.item,id:n};l(0,o=[...o,i]),console.log("New Item: ",i)}function r(e){console.log("detail",e.detail);let i=o.findIndex(s=>e.detail.title===s.title);l(0,o[i].completed=e.detail.completed,o)}function a(){c()}function c(){l(0,o=o.filter(e=>e.completed===!1))}return F(async()=>{const e=await fetch("https://jsonplaceholder.typicode.com/todos");l(0,o=await e.json()),n=o[o.length-1].id}),[o,m,r,a]}class ae extends E{constructor(t){super(),B(this,t,ie,le,A,{})}}export{ae as default};