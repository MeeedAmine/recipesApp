(this["webpackJsonpjob-search"]=this["webpackJsonpjob-search"]||[]).push([[0],{104:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a.n(c),r=a(10),i=a.n(r),s=(a(95),a(61)),o=a(11),j=a(17),d=a(5),l=Object(c.createContext)(),b=function(e){var t=Object(c.useState)({random:!1,byName:""}),a=Object(j.a)(t,2),n=a[0],r=a[1];return Object(d.jsx)(l.Provider,{value:[n,r],children:e.children})},h=a(153),u=a(154),O=a(72),p=a(143),x=a(3),m=a(146),f=a(148),g=a(149),v=a(150),y=a(152),w=a(151),N=a(55),S=a(54),C=a(51),k=a.n(C),M=a(77),E=a.n(M),P=Object(p.a)((function(e){return{root:{maxWidth:"auto"},media:{height:0,paddingTop:"56.25%"},expand:{transform:"rotate(0deg)",marginLeft:"auto",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest})},expandOpen:{transform:"rotate(180deg)"},avatar:{backgroundColor:S.a[500]}}}));var R=function(e){var t=e.meal,a=P(),c=n.a.useState(!1),r=Object(j.a)(c,2),i=r[0],s=r[1],o=function(e){var t=[];if(e){for(var a=1;a<21;a++)e["strMeasure".concat(a)]&&t.push("".concat(e["strMeasure".concat(a)]," ").concat(e["strIngredient".concat(a)]));return t}}(t);return Object(d.jsxs)(m.a,{className:a.root,children:[Object(d.jsx)(f.a,{className:a.media,image:t.strMealThumb,title:t.strMeal}),Object(d.jsxs)(g.a,{children:[Object(d.jsxs)(N.a,{variant:"body2",color:"textSecondary",component:"p",children:["Category : ",t.strCategory]}),Object(d.jsx)(N.a,{variant:"h4",color:"textSecondary",component:"p",children:t.strMeal}),Object(d.jsx)(N.a,{variant:"h6",color:"textSecondary",component:"p",children:t.strArea})]}),Object(d.jsxs)(v.a,{disableSpacing:!0,children:[Object(d.jsx)(w.a,{"aria-label":"add to favorites",children:Object(d.jsx)(k.a,{})}),Object(d.jsx)(w.a,{className:Object(x.a)(a.expand,Object(O.a)({},a.expandOpen,i)),onClick:function(){s(!i)},"aria-expanded":i,"aria-label":"show more",children:Object(d.jsx)(E.a,{})})]}),Object(d.jsx)(y.a,{in:i,timeout:"auto",unmountOnExit:!0,children:Object(d.jsxs)(g.a,{children:[Object(d.jsx)(N.a,{variant:"h6",children:"Method:"}),Object(d.jsx)(N.a,{paragraph:!0,children:t.strInstructions}),Object(d.jsx)(N.a,{variant:"h6",children:"Ingredients:"}),Object(d.jsx)(N.a,{children:Object(d.jsx)("ul",{children:o.map((function(e){return Object(d.jsx)("li",{children:e})}))})})]})})]})},W=a(81),I=function(e){var t=Object(c.useState)(null),a=Object(j.a)(t,2),n=a[0],r=a[1],i=Object(c.useState)(!0),s=Object(j.a)(i,2),o=s[0],d=s[1],l=Object(c.useState)(null),b=Object(j.a)(l,2),h=b[0],u=b[1];return Object(c.useEffect)((function(){fetch(e,{mode:"cors"}).then((function(e){if(!e.ok)throw Error("Could not fetch the data for that resource!");return e.json()})).then((function(e){r(e),d(!1),u(null)})).catch((function(e){u(e.message),d(!1)}))}),[e]),{data:n,setData:r,isPending:o,error:h}},A=function(){var e=Object(c.useContext)(l),t=Object(j.a)(e,2),a=t[0],n=(t[1],Object(c.useState)("http://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata")),r=Object(j.a)(n,2),i=(r[0],r[1]),s=I("http://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata"),o=s.data,b=s.isPending,O=s.error;return Object(c.useEffect)((function(){a.random&&i("http://www.themealdb.com/api/json/v1/1/random.php"),""!==a.byName&&i("http://www.themealdb.com/api/json/v1/1/search.php?s=".concat(a.byName))}),[a]),Object(d.jsxs)(h.a,{children:[O&&Object(d.jsxs)("div",{children:[" ",O," "]}),b&&Object(d.jsx)(u.a,{}),Object(d.jsx)(W.a,{breakpointCols:{default:3,1100:2,700:1},className:"my-masonry-grid",columnClassName:"my-masonry-grid_column",children:o&&o.meals.map((function(e){return Object(d.jsx)("div",{children:Object(d.jsx)(R,{meal:e},e.idMeal)},e.idMeal)}))})]})},L=a(161),B=a(156),D=Object(p.a)({root:{margin:"20px 0",display:"flex"},form:{width:"100%",display:"flex",justifyContent:"center"},input:{width:"60%",marginRight:"5px"},search:{marginRight:"5px"}}),F=function(){var e=D(),t=Object(c.useContext)(l),a=Object(j.a)(t,2),n=(a[0],a[1]),r=Object(c.useState)(""),i=Object(j.a)(r,2),s=(i[0],i[1]);return Object(d.jsx)(h.a,{className:e.root,children:Object(d.jsxs)("form",{className:e.form,children:[Object(d.jsx)(L.a,{id:"outlined-basic",label:"Search by name",variant:"outlined",onChange:function(e){return s(e.target.value)},className:e.input}),Object(d.jsx)(B.a,{variant:"contained",color:"primary",className:e.search,children:"Search"}),Object(d.jsx)(B.a,{variant:"contained",color:"secondary",onClick:function(e){e.preventDefault(),n({random:!0,byName:""})},children:"Surprise me!"})]})})},J=function(){return Object(d.jsx)(b,{children:Object(d.jsxs)("div",{children:[Object(d.jsx)(F,{}),Object(d.jsx)(A,{})]})})},T=a(160),G=a(80),Q=a(163),_=a(155),q=a(157),z=a(158),H=a(159),K=a(79),U=a.n(K),V=Object(p.a)((function(e){return{page:{background:"#f9f9f9",width:"100%",padding:e.spacing(3)},drawer:{width:240},drawerPaper:{width:240},root:{display:"flex"},active:{background:"#f4f4f4"},title:{padding:e.spacing(2)},appbar:{width:"calc(100% - ".concat(240,"px)"),background:"#ffff"},toolbar:e.mixins.toolbar,date:{flexGrow:1},avatar:{marginLeft:e.spacing(2)}}})),X=function(e){var t=e.children,a=V(),c=Object(o.f)(),n=Object(o.g)(),r=[{text:"Recipes",icon:Object(d.jsx)(U.a,{color:"secondary"}),path:"/"},{text:"My Favourites",icon:Object(d.jsx)(k.a,{color:"secondary"}),path:"/create"}];return Object(d.jsxs)("div",{className:a.root,children:[Object(d.jsxs)(Q.a,{className:a.drawer,variant:"permanent",anchor:"left",classes:{paper:a.drawerPaper},children:[Object(d.jsx)("div",{children:Object(d.jsx)(N.a,{variant:"h5",className:a.title,children:"Recipes"})}),Object(d.jsx)(_.a,{children:r.map((function(e){return Object(d.jsxs)(q.a,{button:!0,onClick:function(){return c.push(e.path)},className:n.pathname===e.path?a.active:null,children:[Object(d.jsx)(z.a,{children:e.icon}),Object(d.jsx)(H.a,{primary:e.text})]},e.text)}))})]}),Object(d.jsxs)("div",{className:a.page,children:[Object(d.jsx)("div",{className:a.toolbar}),t]})]})};Object(G.a)({typography:{fontFamily:"Quicksand",fontWeightLight:400,fontWeightRegular:500,fontWeightMedium:600,fontWeightBold:700}});var Y=function(){return Object(d.jsx)(T.a,{children:Object(d.jsx)(s.a,{children:Object(d.jsx)(X,{children:Object(d.jsx)(o.c,{children:Object(d.jsx)(o.a,{exact:!0,path:"/",children:Object(d.jsx)(J,{})})})})})})};i.a.render(Object(d.jsx)(n.a.StrictMode,{children:Object(d.jsx)(Y,{})}),document.getElementById("root"))},95:function(e,t,a){}},[[104,1,2]]]);
//# sourceMappingURL=main.f4ae3a2f.chunk.js.map