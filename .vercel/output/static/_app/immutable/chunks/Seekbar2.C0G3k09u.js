import{s as C,n as b,r as D,c as S}from"./scheduler.C6UnpWtt.js";import{S as M,i as P,e as m,s as V,c as d,a as g,f as q,d as _,m as p,G as y,g as w,h as v,C as k,B as I,n as A,t as B,b as G,j as U,I as $}from"./index.C08rKovH.js";import{e as N}from"./each.BhP_wiSw.js";import{d as z,b as x}from"./store.CG4JpFtH.js";function E(s,t,e){const i=s.slice();return i[4]=t[e],i}function T(s){let t,e=j(s[4])+"",i;return{c(){t=m("span"),i=B(e),this.h()},l(r){t=d(r,"SPAN",{class:!0});var l=g(t);i=G(l,e),l.forEach(_),this.h()},h(){p(t,"class","text-xs")},m(r,l){w(r,t,l),v(t,i)},p(r,l){l&3&&e!==(e=j(r[4])+"")&&U(i,e)},d(r){r&&_(t)}}}function F(s){let t,e,i,r,l,h,c=N([s[1],s[0]]),o=[];for(let a=0;a<2;a+=1)o[a]=T(E(s,c,a));return{c(){t=m("div"),e=m("input"),i=V(),r=m("div");for(let a=0;a<2;a+=1)o[a].c();this.h()},l(a){t=d(a,"DIV",{class:!0});var u=g(t);e=d(u,"INPUT",{type:!0,max:!0,style:!0}),i=q(u),r=d(u,"DIV",{class:!0});var n=g(r);for(let f=0;f<2;f+=1)o[f].l(n);n.forEach(_),u.forEach(_),this.h()},h(){p(e,"type","range"),p(e,"max",s[0]),y(e,"--value",s[2].toString()+"%"),p(r,"class","time flex w-full justify-between"),p(t,"class","progress flex flex-col gap-1 select-none")},m(a,u){w(a,t,u),v(t,e),k(e,s[1]),v(t,i),v(t,r);for(let n=0;n<2;n+=1)o[n]&&o[n].m(r,null);l||(h=[I(e,"change",s[3]),I(e,"input",s[3])],l=!0)},p(a,[u]){if(u&1&&p(e,"max",a[0]),u&4&&y(e,"--value",a[2].toString()+"%"),u&2&&k(e,a[1]),u&3){c=N([a[1],a[0]]);let n;for(n=0;n<2;n+=1){const f=E(a,c,n);o[n]?o[n].p(f,u):(o[n]=T(f),o[n].c(),o[n].m(r,null))}for(;n<2;n+=1)o[n].d(1)}},i:b,o:b,d(a){a&&_(t),A(o,a),l=!1,D(h)}}}function j(s){if(isNaN(s))return"...";const t=Math.floor(s/60),e=Math.floor(s%60);return`${t}:${e<10?`0${e}`:e}`}function H(s,t,e){let i,r,l;S(s,z,c=>e(0,r=c)),S(s,x,c=>e(1,l=c));function h(){l=$(this.value),x.set(l)}return s.$$.update=()=>{s.$$.dirty&3&&e(2,i=l/r*100)},[r,l,i,h]}class Q extends M{constructor(t){super(),P(this,t,H,F,C,{})}}export{Q as S,j as f};
