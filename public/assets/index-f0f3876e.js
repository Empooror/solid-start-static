import{M as r}from"./index-114a743d.js";import{d as s,a as i,i as l,t as a,c as e,m as u,A as d}from"./index-206cf088.js";const m=a("<button class=increment>Clicks: ");function h(){const[t,n]=i(0);return(()=>{const o=m();return o.firstChild,o.$$click=()=>n(t()+1),l(o,t,null),o})()}s(["click"]);function c(t){const n=Object.assign({h1:"h1",p:"p",a:"a"},r(),t.components);return[e(n.h1,{children:"Hello World!"}),`
`,e(h,{}),`
`,e(n.p,{get children(){return["Visit ",e(n.a,{href:"https://solidjs.com",children:"https://solidjs.com"})," to learn how to build Solid apps. ",e(d,{href:"/docs",children:"Docs"})]}})]}function C(t={}){const{wrapper:n}=Object.assign({},r(),t.components);return n?e(n,u(t,{get children(){return e(c,t)}})):c(t)}export{C as default};
