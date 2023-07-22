import{u as q}from"./asyncData.4f101f0d.js";import{d as g,ay as S,I as b,a2 as C,az as N,a6 as k,s as c,N as _}from"./entry.474b573e.js";const Q=g({name:"ContentQuery",props:{path:{type:String,required:!1,default:void 0},only:{type:Array,required:!1,default:void 0},without:{type:Array,required:!1,default:void 0},where:{type:Object,required:!1,default:void 0},sort:{type:Object,required:!1,default:void 0},limit:{type:Number,required:!1,default:void 0},skip:{type:Number,required:!1,default:void 0},locale:{type:String,required:!1,default:void 0},find:{type:String,required:!1,default:void 0}},async setup(a){const{path:t,only:r,without:n,where:i,sort:l,limit:o,skip:s,locale:f,find:d}=S(a),y=b(()=>{var e;return(e=t.value)==null?void 0:e.includes("/_")});C(()=>a,()=>p(),{deep:!0});const{data:h,refresh:p}=await q(`content-query-${N(a)}`,()=>{let e;return t.value?e=c(t.value):e=c(),r.value&&(e=e.only(r.value)),n.value&&(e=e.without(n.value)),i.value&&(e=e.where(i.value)),l.value&&(e=e.sort(l.value)),o.value&&(e=e.limit(o.value)),s.value&&(e=e.skip(s.value)),f.value&&(e=e.where({_locale:f.value})),d.value==="one"?e.findOne():d.value==="surround"?t.value?e.findSurround(t.value):(console.warn("[Content] Surround queries requires `path` prop to be set."),console.warn("[Content] Query without `path` will return regular `find()` results."),e.find()):e.find()});return{isPartial:y,data:h,refresh:p}},render(a){var v;const t=k(),{data:r,refresh:n,isPartial:i,path:l,only:o,without:s,where:f,sort:d,limit:y,skip:h,locale:p,find:e}=a,u={path:l,only:o,without:s,where:f,sort:d,limit:y,skip:h,locale:p,find:e};if(u.find==="one"){if(!r&&(t!=null&&t["not-found"]))return t["not-found"]({props:u,...this.$attrs});if(t!=null&&t.empty&&(r==null?void 0:r._type)==="markdown"&&!((v=r==null?void 0:r.body)!=null&&v.children.length))return t.empty({props:u,...this.$attrs})}else if((!r||!r.length)&&t!=null&&t["not-found"])return t["not-found"]({props:u,...this.$attrs});return t!=null&&t.default?t.default({data:r,refresh:n,isPartial:i,props:u,...this.$attrs}):((m,w)=>_("pre",null,JSON.stringify({message:"You should use slots with <ContentQuery>!",slot:m,data:w},null,2)))("default",{data:r,props:u,isPartial:i})}});export{Q as default};
