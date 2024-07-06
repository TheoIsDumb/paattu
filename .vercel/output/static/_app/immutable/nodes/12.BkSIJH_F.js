import{s as V,b as F,n as L,r as G,c as P}from"../chunks/scheduler.C6UnpWtt.js";import{S as J,i as K,e as m,s as S,t as w,c as b,a as E,z as Q,f as T,b as A,d as g,m as u,g as U,h as f,A as j,B as D,n as R,C as W,D as X}from"../chunks/index.C08rKovH.js";import{e as H}from"../chunks/each.BhP_wiSw.js";import{h as N,q as O}from"../chunks/store.CG4JpFtH.js";function z(a,e,n){const r=a.slice();return r[5]=e[n],r}function M(a){let e,n=a[5].id+"",r;return{c(){e=m("option"),r=w(n),this.h()},l(o){e=b(o,"OPTION",{});var i=E(e);r=A(i,n),i.forEach(g),this.h()},h(){e.__value=a[5].q,W(e,e.__value)},m(o,i){U(o,e,i),f(e,r)},p:L,d(o){o&&g(e)}}}function Y(a){let e,n,r="settings",o,i,q,_,p,d,x,c,k,B,y=H(a[2]),s=[];for(let l=0;l<y.length;l+=1)s[l]=M(z(a,y,l));return{c(){e=m("div"),n=m("h1"),n.textContent=r,o=S(),i=m("label"),q=w(`enable history
        `),_=m("input"),p=S(),d=m("label"),x=w(`streaming quality
        `),c=m("select");for(let l=0;l<s.length;l+=1)s[l].c();this.h()},l(l){e=b(l,"DIV",{class:!0});var h=E(e);n=b(h,"H1",{class:!0,"data-svelte-h":!0}),Q(n)!=="svelte-1uga4b6"&&(n.textContent=r),o=T(h),i=b(h,"LABEL",{class:!0,for:!0});var t=E(i);q=A(t,`enable history
        `),_=b(t,"INPUT",{class:!0,type:!0,name:!0,id:!0}),t.forEach(g),p=T(h),d=b(h,"LABEL",{for:!0,class:!0});var v=E(d);x=A(v,`streaming quality
        `),c=b(v,"SELECT",{name:!0,id:!0,class:!0});var I=E(c);for(let C=0;C<s.length;C+=1)s[C].l(I);I.forEach(g),v.forEach(g),h.forEach(g),this.h()},h(){u(n,"class","font-bold text-3xl mb-4"),u(_,"class","w-6 h-6"),u(_,"type","checkbox"),u(_,"name","history"),u(_,"id","history"),u(i,"class","text-xl flex justify-between"),u(i,"for","history"),u(c,"name","quality"),u(c,"id","quality"),u(c,"class","p-1 rounded"),a[1]===void 0&&F(()=>a[4].call(c)),u(d,"for","quality"),u(d,"class","text-xl flex justify-between"),u(e,"class","flex flex-col gap-4")},m(l,h){U(l,e,h),f(e,n),f(e,o),f(e,i),f(i,q),f(i,_),_.checked=a[0],f(e,p),f(e,d),f(d,x),f(d,c);for(let t=0;t<s.length;t+=1)s[t]&&s[t].m(c,null);j(c,a[1],!0),k||(B=[D(_,"change",a[3]),D(c,"change",a[4])],k=!0)},p(l,[h]){if(h&1&&(_.checked=l[0]),h&4){y=H(l[2]);let t;for(t=0;t<y.length;t+=1){const v=z(l,y,t);s[t]?s[t].p(v,h):(s[t]=M(v),s[t].c(),s[t].m(c,null))}for(;t<s.length;t+=1)s[t].d(1);s.length=y.length}h&6&&j(c,l[1])},i:L,o:L,d(l){l&&g(e),R(s,l),k=!1,G(B)}}}function Z(a,e,n){let r,o;P(a,N,p=>n(0,r=p)),P(a,O,p=>n(1,o=p));let i=[{id:"Low",q:"_96"},{id:"Medium",q:"_160"},{id:"High",q:"_320"}];function q(){r=this.checked,N.set(r)}function _(){o=X(this),O.set(o),n(2,i)}return[r,o,i,q,_]}class ae extends J{constructor(e){super(),K(this,e,Z,Y,V,{})}}export{ae as component};
