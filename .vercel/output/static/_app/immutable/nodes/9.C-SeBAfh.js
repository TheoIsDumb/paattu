import{s as g}from"../chunks/scheduler.C6UnpWtt.js";import{S as p,i as y,e as $,c as v,a as b,d as m,m as q,g as P,r as c,q as k,p as u,n as w,v as S,w as j,x as C,y as O,u as z}from"../chunks/index.C08rKovH.js";import{e as _}from"../chunks/each.BhP_wiSw.js";import{P as B}from"../chunks/PlaylistCard.0pDXuiWb.js";async function D({url:l,fetch:a}){const s=l.searchParams.get("q")||1;return await(await a(`/api/search/artists?q=${s}`)).json()}const A=Object.freeze(Object.defineProperty({__proto__:null,load:D},Symbol.toStringTag,{value:"Module"}));function h(l,a,s){const t=l.slice();return t[1]=a[s],t}function d(l){let a,s;return a=new B({props:{type:"artist",id:l[1].id,title:l[1].name,image:l[1].image}}),{c(){S(a.$$.fragment)},l(t){j(a.$$.fragment,t)},m(t,e){C(a,t,e),s=!0},p(t,e){const i={};e&1&&(i.id=t[1].id),e&1&&(i.title=t[1].name),e&1&&(i.image=t[1].image),a.$set(i)},i(t){s||(c(a.$$.fragment,t),s=!0)},o(t){u(a.$$.fragment,t),s=!1},d(t){O(a,t)}}}function E(l){let a,s,t=_(l[0].results),e=[];for(let r=0;r<t.length;r+=1)e[r]=d(h(l,t,r));const i=r=>u(e[r],1,1,()=>{e[r]=null});return{c(){a=$("div");for(let r=0;r<e.length;r+=1)e[r].c();this.h()},l(r){a=v(r,"DIV",{class:!0});var o=b(a);for(let n=0;n<e.length;n+=1)e[n].l(o);o.forEach(m),this.h()},h(){q(a,"class","inner")},m(r,o){P(r,a,o);for(let n=0;n<e.length;n+=1)e[n]&&e[n].m(a,null);s=!0},p(r,[o]){if(o&1){t=_(r[0].results);let n;for(n=0;n<t.length;n+=1){const f=h(r,t,n);e[n]?(e[n].p(f,o),c(e[n],1)):(e[n]=d(f),e[n].c(),c(e[n],1),e[n].m(a,null))}for(z(),n=t.length;n<e.length;n+=1)i(n);k()}},i(r){if(!s){for(let o=0;o<t.length;o+=1)c(e[o]);s=!0}},o(r){e=e.filter(Boolean);for(let o=0;o<e.length;o+=1)u(e[o]);s=!1},d(r){r&&m(a),w(e,r)}}}function I(l,a,s){let{data:t}=a;return l.$$set=e=>{"data"in e&&s(0,t=e.data)},[t]}class F extends p{constructor(a){super(),y(this,a,I,E,g,{data:0})}}export{F as component,A as universal};
