import{s as b,o as v,n as u}from"../chunks/scheduler.C6UnpWtt.js";import{S as y,i as k,e as d,c as h,a as x,d as f,m as g,g as $,p as m,q as S,r as p,u as C,v as q,w,x as I,y as P,z}from"../chunks/index.C08rKovH.js";import{S as D}from"../chunks/SongCard.Bb6yMGPs.js";function E(l){let e,n;return e=new D({props:{type:"album",list:l[0]}}),{c(){q(e.$$.fragment)},l(t){w(e.$$.fragment,t)},m(t,o){I(e,t,o),n=!0},p(t,o){const c={};o&1&&(c.list=t[0]),e.$set(c)},i(t){n||(p(e.$$.fragment,t),n=!0)},o(t){m(e.$$.fragment,t),n=!1},d(t){P(e,t)}}}function H(l){let e,n="History is empty.";return{c(){e=d("p"),e.textContent=n,this.h()},l(t){e=h(t,"P",{class:!0,"data-svelte-h":!0}),z(e)!=="svelte-cc1nn3"&&(e.textContent=n),this.h()},h(){g(e,"class","font-semibold")},m(t,o){$(t,e,o)},p:u,i:u,o:u,d(t){t&&f(e)}}}function J(l){let e,n,t,o;const c=[H,E],r=[];function _(s,a){return s[0].length===0?0:1}return n=_(l),t=r[n]=c[n](l),{c(){e=d("div"),t.c(),this.h()},l(s){e=h(s,"DIV",{class:!0});var a=x(e);t.l(a),a.forEach(f),this.h()},h(){g(e,"class","flex flex-col gap-2")},m(s,a){$(s,e,a),r[n].m(e,null),o=!0},p(s,[a]){let i=n;n=_(s),n===i?r[n].p(s,a):(C(),m(r[i],1,1,()=>{r[i]=null}),S(),t=r[n],t?t.p(s,a):(t=r[n]=c[n](s),t.c()),p(t,1),t.m(e,null))},i(s){o||(p(t),o=!0)},o(s){m(t),o=!1},d(s){s&&f(e),r[n].d()}}}function M(l,e,n){let t=[];return v(()=>{n(0,t=JSON.parse(localStorage.getItem("history"))||[])}),[t]}class j extends y{constructor(e){super(),k(this,e,M,J,b,{})}}export{j as component};
