import{u as m}from"./index.ba4431e3.js";import{d as v,r as h,I as y,b as s,c as o,J as i,f as p,e,F as f,al as C,p as k,j as g,t as x,l as I}from"./entry.474b573e.js";const n=t=>(k("data-v-5e092a9c"),t=t(),g(),t),S={key:0,class:"copied"},b=n(()=>e("div",{class:"scrim"},null,-1)),w=n(()=>e("div",{class:"content"}," Copied! ",-1)),B=[b,w],T=n(()=>e("div",{class:"header"},[e("div",{class:"controls"},[e("div"),e("div"),e("div")]),e("div",{class:"title"}," Bash ")],-1)),j={class:"window"},F=n(()=>e("span",{class:"sign"},"$",-1)),N={class:"content"},V={key:1,class:"prompt"},q=v({__name:"Terminal",props:{content:{type:[Array,String],required:!0}},setup(t){const a=t,{copy:_}=m(),c=h("init"),r=y(()=>typeof a.content=="string"?[a.content]:a.content),l=u=>{_(r.value.join(`
`)).then(()=>{c.value="copied",setTimeout(()=>{c.value="init"},1e3)}).catch(()=>{console.warn("Couldn't copy to clipboard!")})};return(u,A)=>(s(),o("div",{class:"terminal",onClick:l},[i(c)==="copied"?(s(),o("div",S,B)):p("",!0),T,e("div",j,[(s(!0),o(f,null,C(i(r),d=>(s(),o("span",{key:d,class:"line"},[F,e("span",N,x(d),1)]))),128))]),i(c)!=="copied"?(s(),o("div",V," Click to copy ")):p("",!0)]))}});const J=I(q,[["__scopeId","data-v-5e092a9c"]]);export{J as default};