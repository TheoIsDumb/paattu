import{s as U,a as F}from"../chunks/scheduler.C6UnpWtt.js";import{S as W,i as X,e as _,s as j,t as M,v as H,c as g,a as S,f as P,b as O,d as h,w as J,m as o,g as Y,h as n,x as K,j as G,r as L,p as Q,y as R}from"../chunks/index.C08rKovH.js";import{S as Z}from"../chunks/SongCard.Bb6yMGPs.js";import{E as ee}from"../chunks/Enqueue.DaDdaHxx.js";async function te({params:l,url:a,fetch:r}){const t=l.slug;return await(await r(`/api/playlist?id=${t}`)).json()}const oe=Object.freeze(Object.defineProperty({__proto__:null,load:te},Symbol.toStringTag,{value:"Module"}));function ae(l){let a,r,t,f,E,D,i,v,w=l[0].title+"",I,N,$,q=l[0].subtitle+"",x,V,b,y=l[0].header_desc+"",A,z,m,C,d,u;return m=new ee({props:{list:l[0].list}}),d=new Z({props:{type:"album",list:l[0].list}}),{c(){a=_("div"),r=_("div"),t=_("img"),D=j(),i=_("div"),v=_("span"),I=M(w),N=j(),$=_("span"),x=M(q),V=j(),b=_("span"),A=M(y),z=j(),H(m.$$.fragment),C=j(),H(d.$$.fragment),this.h()},l(e){a=g(e,"DIV",{class:!0});var s=S(a);r=g(s,"DIV",{class:!0});var p=S(r);t=g(p,"IMG",{class:!0,loading:!0,src:!0,alt:!0}),D=P(p),i=g(p,"DIV",{class:!0});var c=S(i);v=g(c,"SPAN",{class:!0});var T=S(v);I=O(T,w),T.forEach(h),N=P(c),$=g(c,"SPAN",{class:!0});var k=S($);x=O(k,q),k.forEach(h),V=P(c),b=g(c,"SPAN",{class:!0});var B=S(b);A=O(B,y),B.forEach(h),z=P(c),J(m.$$.fragment,c),c.forEach(h),p.forEach(h),C=P(s),J(d.$$.fragment,s),s.forEach(h),this.h()},h(){o(t,"class","h-[150px] w-[150px] rounded"),o(t,"loading","lazy"),F(t.src,f=l[0].image)||o(t,"src",f),o(t,"alt",E=l[0].title),o(v,"class","font-bold"),o($,"class","text-sm"),o(b,"class","text-sm"),o(i,"class","info flex flex-col text-right"),o(r,"class","header flex items-center justify-between"),o(a,"class","inner flex flex-col")},m(e,s){Y(e,a,s),n(a,r),n(r,t),n(r,D),n(r,i),n(i,v),n(v,I),n(i,N),n(i,$),n($,x),n(i,V),n(i,b),n(b,A),n(i,z),K(m,i,null),n(a,C),K(d,a,null),u=!0},p(e,[s]){(!u||s&1&&!F(t.src,f=e[0].image))&&o(t,"src",f),(!u||s&1&&E!==(E=e[0].title))&&o(t,"alt",E),(!u||s&1)&&w!==(w=e[0].title+"")&&G(I,w),(!u||s&1)&&q!==(q=e[0].subtitle+"")&&G(x,q),(!u||s&1)&&y!==(y=e[0].header_desc+"")&&G(A,y);const p={};s&1&&(p.list=e[0].list),m.$set(p);const c={};s&1&&(c.list=e[0].list),d.$set(c)},i(e){u||(L(m.$$.fragment,e),L(d.$$.fragment,e),u=!0)},o(e){Q(m.$$.fragment,e),Q(d.$$.fragment,e),u=!1},d(e){e&&h(a),R(m),R(d)}}}function se(l,a,r){let{data:t}=a;return l.$$set=f=>{"data"in f&&r(0,t=f.data)},[t]}class ce extends W{constructor(a){super(),X(this,a,se,ae,U,{data:0})}}export{ce as component,oe as universal};
