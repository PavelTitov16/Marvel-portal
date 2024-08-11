"use strict";(self.webpackChunkmarvel=self.webpackChunkmarvel||[]).push([[489],{4354:(e,t,c)=>{c.d(t,{A:()=>r});const s=c.p+"static/media/Avengers.4065c8f9c94e3d8b039a.png",a=c.p+"static/media/Avengers_logo.9eaf219344d83362e830.png";var n=c(579);const r=()=>(0,n.jsxs)("div",{className:"app__banner",children:[(0,n.jsx)("img",{src:s,alt:"Avengers"}),(0,n.jsxs)("div",{className:"app__banner-text",children:["New comics every week!",(0,n.jsx)("br",{}),"Stay tuned!"]}),(0,n.jsx)("img",{src:a,alt:"Avengers logo"})]})},1425:(e,t,c)=>{c.d(t,{A:()=>n});const s=c.p+"static/media/error.42292aa12b6bc303ce99.gif";var a=c(579);const n=()=>(0,a.jsx)("img",{style:{display:"block",width:"250px",height:"250px",objectFit:"contain",margin:"0 auto"},src:s,alt:"Error"})},840:(e,t,c)=>{c.r(t),c.d(t,{default:()=>h});var s=c(1591),a=c(4354),n=c(5043),r=c(5475),i=c(897),o=c(8502),l=c(1425),d=c(579);const m=(e,t,c)=>{switch(e){case"waiting":return(0,d.jsx)(o.A,{});case"loading":return c?(0,d.jsx)(t,{}):(0,d.jsx)(o.A,{});case"confirmed":return(0,d.jsx)(t,{});case"error":return(0,d.jsx)(l.A,{});default:throw new Error("Unexpected process state")}},u=()=>{const[e,t]=(0,n.useState)([]),[c,s]=(0,n.useState)(!1),[a,o]=(0,n.useState)(0),[l,u]=(0,n.useState)(!1),{loading:h,error:p,getAllComics:g,process:b,setProcess:x}=(0,i.A)();(0,n.useEffect)((()=>{j(a,!0)}),[]);const j=(e,t)=>{s(!t),g(e).then(f).then((()=>x("confirmed")))},f=c=>{let n=!1;c.length<8&&(n=!0),t([...e,...c]),s(!1),o(a+8),u(n)};return(0,d.jsxs)("div",{className:"comics__list",children:[m(b,(()=>function(e){const t=e.map(((e,t)=>(0,d.jsx)("li",{className:"comics__item",children:(0,d.jsxs)(r.N_,{to:"/comics/".concat(e.id),children:[(0,d.jsx)("img",{src:e.thumbnail,alt:e.title,className:"comics__item-img"}),(0,d.jsx)("div",{className:"comics__item-name",children:e.title}),(0,d.jsx)("div",{className:"comics__item-price",children:e.price})]})},t)));return(0,d.jsx)("ul",{className:"comics__grid",children:t})}(e)),c),(0,d.jsx)("button",{disabled:c,style:{display:l?"none":"block"},className:"button button__main button__long",onClick:()=>j(a),children:(0,d.jsx)("div",{className:"inner",children:"load more"})})]})},h=()=>(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(s.m,{children:[(0,d.jsx)("meta",{name:"description",content:"Page with list of our comics"}),(0,d.jsx)("title",{children:"Comics page"})]}),(0,d.jsx)(a.A,{}),(0,d.jsx)(u,{})]})},897:(e,t,c)=>{c.d(t,{A:()=>a});var s=c(5043);const a=()=>{const{request:e,clearError:t,process:c,setProcess:a}=(()=>{const[e,t]=(0,s.useState)("waiting");return{request:(0,s.useCallback)((async function(e){let c=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET",s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{"Content-Type":"application/json"};t("loading");try{const t=await fetch(e,{method:c,body:s,headers:a});if(!t.ok)throw new Error("Could not fetch ".concat(e,", status ").concat(t.status));return await t.json()}catch(n){throw t("error"),n}}),[]),clearError:(0,s.useCallback)((()=>{t("loading")}),[]),process:e,setProcess:t}})(),n="https://gateway.marvel.com:443/v1/public/",r="apikey=48fbea85f489db68eb5c80c37f69523d",i=e=>({id:e.id,name:e.name,description:e.description?"".concat(e.description.slice(0,210),"..."):"There is no description for this character",thumbnail:e.thumbnail.path+"."+e.thumbnail.extension,homepage:e.urls[0].url,wiki:e.urls[1].url,comics:e.comics.items}),o=e=>{var t;return{id:e.id,title:e.title,description:e.description||"There is no description",pageCount:e.pageCount?"".concat(e.pageCount," p."):"No information about the number of pages",thumbnail:e.thumbnail.path+"."+e.thumbnail.extension,language:(null===(t=e.textObjects[0])||void 0===t?void 0:t.language)||"en-us",price:e.prices[0].price?"".concat(e.prices[0].price,"$"):"not available"}};return{clearError:t,getAllCharacters:async function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:220;return(await e("".concat(n,"characters?limit=9&offset=").concat(t,"&").concat(r))).data.results.map(i)},getCharacter:async t=>{const c=await e("".concat(n,"characters/").concat(t,"?").concat(r));return i(c.data.results[0])},getAllComics:async function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return(await e("".concat(n,"comics?orderBy=issueNumber&limit=8&offset=").concat(t,"&").concat(r))).data.results.map(o)},getComic:async t=>{const c=await e("".concat(n,"comics/").concat(t,"?").concat(r));return o(c.data.results[0])},getCharacterByName:async t=>(await e("".concat(n,"characters?name=").concat(t,"&").concat(r))).data.results.map(i),process:c,setProcess:a}}}}]);
//# sourceMappingURL=489.431f6efb.chunk.js.map