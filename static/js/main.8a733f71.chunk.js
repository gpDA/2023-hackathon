(this["webpackJsonptodo-list-react-hooks"]=this["webpackJsonptodo-list-react-hooks"]||[]).push([[0],{176:function(t,e,a){},177:function(t,e,a){},180:function(t,e,a){"use strict";a.r(e);var n=a(1),r=a(2),c=a.n(r),l=a(64),o=a.n(l),i=(a(176),a(177),function(){return Object(n.jsx)("div",{children:"horizontal-bar"})}),u=a(5),s=a(0),d=function(t){var e=t.scale,a=t.transform,c=Object(r.useRef)();return Object(r.useEffect)((function(){c.current&&Object(s.w)(c.current).call(Object(s.c)(e))}),[e]),Object(n.jsx)("g",{ref:c,transform:a})},f=function(t){var e=t.scale,a=t.transform,c=Object(r.useRef)();return Object(r.useEffect)((function(){c.current&&Object(s.w)(c.current).call(Object(s.d)(e))}),[e]),Object(n.jsx)("g",{ref:c,transform:a})},b=function(t){var e=t.data,a=t.height,r=t.scaleX,c=t.scaleY;return Object(n.jsx)(n.Fragment,{children:e.map((function(t){var e=t.value,l=t.label;return Object(n.jsx)("rect",{x:r(l),y:c(e),width:r.bandwidth(),height:a-c(e),fill:"teal"},"bar-".concat(l))}))})},p=function(t){var e=t.data,a=10,r=0,c=20,l=30,o=500-l-r,i=300-a-c,p=Object(s.i)().domain(e.map((function(t){return t.label}))).range([0,o]).padding(.5),j=Object(s.j)().domain([0,Math.max.apply(Math,Object(u.a)(e.map((function(t){return t.value}))))]).range([i,0]);return Object(n.jsx)("svg",{width:o+l+r,height:i+a+c,children:Object(n.jsxs)("g",{transform:"translate(".concat(l,", ").concat(a,")"),children:[Object(n.jsx)(d,{scale:p,transform:"translate(0, ".concat(i,")")}),Object(n.jsx)(f,{scale:j}),Object(n.jsx)(b,{data:e,height:i,scaleX:p,scaleY:j})]})})},j=function(){return Object(n.jsx)("div",{children:"horizontal-stacked-bar"})},h=a(3),g=function(t,e){switch(t){case"Color-1":return s.n.slice(0,e);case"Color-2":return s.m.slice(0,e);case"Color-3":return s.o.slice(0,e);case"Color-4":return s.p.slice(0,e);case"Color-5":return s.q.slice(0,e);case"Color-6":return s.r.slice(0,e);case"Color-7":return s.s.slice(0,e);case"Color-8":return s.t.slice(0,e);case"Color-9":return s.u.slice(0,e);case"Color-10":return s.v.slice(0,e);default:return[]}},v=function(t){var e=t.data,a=t.label,c=void 0===a?{show:!0,xLabel:"Sum Percentage %",yLabel:"Risk Class"}:a,l=t.width,o=void 0===l?400:l,i=t.height,d=void 0===i?400:i,f=t.margin,b=void 0===f?80:f,p=t.groupKey,j=void 0===p?"label":p,v=t.subgroups,m=void 0===v?["value","diff"]:v,O=t.colorPalette,x=void 0===O?[]:O,y=t.colorType,w=void 0===y?"Color-6":y,k=Object(r.useRef)(null),C=Object(r.useCallback)((function(t){return s.w(t).attr("width",o+b+50).attr("height",d+b+50).append("g").attr("transform","translate(".concat(b+30,",").concat(b/2,")"))}),[d,o,b]),A=Object(r.useCallback)((function(t){var a=e.map((function(t){return Object.keys(t).reduce((function(e,a){return m.includes(a)?e+parseInt(t[a]):e+0}),0)})),n=Math.max.apply(Math,Object(u.a)(a));return[s.i().domain(t).range([0,o]).padding([.2]),s.j().domain([0,Math.ceil(n)]).range([d,0])]}),[o,d,m]),R=Object(r.useCallback)((function(){var t=m.length,e=x.length>0?x:g(w,t);return s.k().domain(m).range(e)}),[m,x,w]),S=Object(r.useCallback)((function(t){var a=C(t),n=e.map((function(t){return t[j]})),r=s.x().keys(m)(e),l=A(n),i=Object(h.a)(l,2),u=i[0],f=i[1],p=R();a.append("g").attr("transform","translate(0, ".concat(d,")")).call(s.c(u).tickSizeOuter(0)),a.append("g").call(s.d(f)),a.append("g").selectAll("g").data(r).join("g").attr("fill",(function(t){return p(t.key)})).selectAll("rect").data((function(t){return t})).join("rect").attr("x",(function(t){return u(t.data[j])})).attr("y",(function(t){return f(t[1])})).attr("height",(function(t){return f(t[0])-f(t[1])})).attr("width",u.bandwidth()),c.show&&a.append("text").attr("class","label").attr("x",-d/2).attr("y",-b/1.3).attr("transform","rotate(-90)").attr("text-anchor","middle").text(c.xLabel),c.show&&a.append("text").attr("class","label").attr("x",o/2).attr("y",d+2*b/2.5).attr("text-anchor","middle").text(c.yLabel)}),[C,A,R,d,m,j,c,b,o]);return Object(r.useEffect)((function(){k.current&&S(k.current)}),[k,S]),Object(n.jsx)("div",{children:Object(n.jsx)("svg",{ref:k})})};v.defaultProps={};var m=v,O=function(t){var e=t.data,a=t.width,c=void 0===a?400:a,l=t.height,o=void 0===l?400:l,i=t.margin,d=void 0===i?{left:100,bottom:100,top:50,right:50}:i,f=t.xAxis,b=void 0===f?"date":f,p=t.yAxis,j=void 0===p?"value":p,g=Object(r.useRef)(null),v=Object(r.useState)([]),m=Object(h.a)(v,2),O=m[0],x=m[1];Object(r.useEffect)((function(){var t=s.y("%Y"),a=e.map((function(e){return{date:t(e.data),value:e.value}}));x(Object(u.a)(a))}),[]);var y=Object(r.useCallback)((function(t){return s.w(t).attr("width",c+d.left+d.right).attr("height",o+d.top+d.bottom).append("g").attr("transform","translate(".concat(d.left,",").concat(d.right,")"))}),[o,c,d]),w=Object(r.useCallback)((function(){var t=O.map((function(t){return t[b]}));return[s.l().domain(s.e(t)).range([0,c]).nice(),s.j().domain([0,s.g(O,(function(t){return+t[j]}))]).range([o,0])]}),[c,o,O,b,j]),k=Object(r.useCallback)((function(t){var e=y(t),a=w(),n=Object(h.a)(a,2),r=n[0],c=n[1];e.append("g").attr("transform","translate(0,".concat(o,")")).call(s.c(r).ticks(s.z)),e.append("g").call(s.d(c)),e.append("text").classed("hoverText",!0),e.append("path").datum(O).attr("fill","#cce5df").attr("stroke","#69b3a2").attr("stroke-width",1.5).attr("d",s.b().x((function(t){return r(t[b])})).y0(c(0)).y1((function(t){return c(t[j])}))),e.append("path").datum(O).attr("fill","none").attr("stroke","#69b3a2").attr("stroke-width",2).attr("d",s.f().x((function(t){return r(t[b])})).y((function(t){return c(t[j])}))),e.selectAll("myCircles").data(O).join("circle").attr("fill","yellow").attr("stroke","none").attr("cx",(function(t){return r(t[b])})).attr("cy",(function(t){return c(t[j])})).attr("r",3)}),[w,o,y,O,b,j]);return Object(r.useEffect)((function(){g.current&&k(g.current)}),[g,k]),Object(n.jsx)("div",{children:Object(n.jsx)("svg",{ref:g})})},x=function(t){var e=t.data,a=t.width,c=t.height,l=t.dataKey,o=t.value,i=t.colorPalette,d=t.colorType,f=t.margin,b=(t.style,t.text),p=t.arc,j=t.tooltip,h=t.donut,v=Object(r.useRef)(null),m=Object(r.useCallback)((function(t){return s.w(t).append("g").attr("transform","translate(".concat(a/2,",").concat(c/2,")"))}),[c,a]),O=Object(r.useCallback)((function(){return Object(u.a)(new Set(e.map((function(t){return t[l]})))).length}),[e,l]),x=Object(r.useCallback)((function(){var t=O(),a=i.length>0?i:g(d,t);return s.k().domain(function(t,e){var a=new Set(t.map((function(t){return t[e]})));return Array.from(a)}(e,l)).range(a)}),[e,l,O,i,d]),y=Object(r.useCallback)((function(){return s.h().value((function(t){return t[o]}))(e)}),[e,o]),w=Object(r.useCallback)((function(){return f?Math.min(a,c)/2-f:Math.min(a,c)/2}),[a,c,f]),k=Object(r.useCallback)((function(){var t=c/2-30,e=(t-t/3)/2;return p.cornerRadius>=e?e:p.cornerRadius}),[c,p]),C=Object(r.useCallback)((function(t,e,a,n,r){t.selectAll("arc").data(e).enter().append("text").attr("class","arcText").text((function(t){return t.data[l]})).attr("transform",(function(t){if("outside"===b.location){var e=n.centroid(t),c=t.startAngle+(t.endAngle-t.startAngle)/2;return e[0]=.99*r*(c<Math.PI?1:-1),"translate("+e+")"}return"translate(".concat(a.centroid(t),")")})).style("text-anchor",(function(t){return"outside"===b.location?t.startAngle+(t.endAngle-t.startAngle)/2<Math.PI?"start":"end":b.textAnchor}))}),[l,b]),A=Object(r.useCallback)((function(){return s.w(".App").append("div").attr("class","tooltip").style("position","absolute").style("opacity",0)}),[]),R=Object(r.useCallback)((function(t){return h.show?t<h.innerRadius?t:h.innerRadius:0}),[h]),S=Object(r.useCallback)((function(t,e,a,n,r){t.selectAll("allPolylines").data(e).enter().append("polyline").attr("class","textLine").style("fill","none").attr("points",(function(t){var e=a.centroid(t),c=n.centroid(t),l=n.centroid(t),o=t.startAngle+(t.endAngle-t.startAngle)/2;return l[0]=.95*r*(o<Math.PI?1:-1),[e,c,l]}))}),[]),P=Object(r.useCallback)((function(t){var e=m(t),a=y(),n=x(),r=w(),c=s.a().innerRadius(R(r)).outerRadius(r).cornerRadius(k()).padAngle(p.padAngle),o=s.a().innerRadius(.9*r).outerRadius(.9*r),i=A();e.selectAll(".arc").data(a).enter().append("path").attr("class","arc").attr("d",c).attr("fill",(function(t){return n(t.data[l])})).on("mouseover",(function(t,e){j.show&&i.transition().duration(200).style("opacity",1).style("left",t.pageX+20+"px").style("top",t.pageY-20+"px").text(function(t,e){return t.replace(/%.*?%/g,(function(t){var a=t.replace(/[^()_a-zA-Z0-9-]+/g,"");return e[a]}))}(j.text,e.data))})).on("mouseout",(function(t,e){j.show&&i.transition().duration(500).style("opacity",0)})),b.showLine&&S(e,a,c,o,r),b.show&&C(e,a,c,o,r)}),[S,R,l,j,A,m,y,x,w,b,p,k,C]);return Object(r.useEffect)((function(){v.current&&P(v.current)}),[v,P]),Object(n.jsx)("div",{style:{margin:"2em"},children:Object(n.jsx)("svg",{ref:v,width:a,height:c})})};x.defaultProps={data:[],width:300,height:300,dataKey:"",value:"",colorPalette:[],colorType:"Color-1",margin:0,text:{show:!1,textAnchor:"middle",location:"inside",showLine:!1},arc:{padAngle:0,cornerRadius:0},tooltip:{show:!1,text:""},donut:{show:!1,innerRadius:0}};var y=x,w=[{label:"Apples",value:100},{label:"Bananas",value:200},{label:"Oranges",value:50},{label:"Kiwis",value:150}],k=[{label:"Apples",value:100,diff:100,max:200},{label:"Bananas",value:200,diff:0,max:200},{label:"Oranges",value:50,diff:150,max:200},{label:"Kiwis",value:150,diff:50,max:200}],C=[{data:"2001",value:100},{data:"2002",value:150},{data:"2003",value:100},{data:"2004",value:400},{data:"2005",value:1070},{data:"2006",value:700}];var A=function(){var t=[{id:"test",component:Object(n.jsx)(i,{}),imgSrc:"/horizontal-bar.png"},{id:"test1",component:Object(n.jsx)(p,{data:w}),imgSrc:"/vertical-bar.png"},{id:"test1",component:Object(n.jsx)(m,{data:k}),imgSrc:"/vertical-stacked-bar.png"},{id:"test1",component:Object(n.jsx)(j,{}),imgSrc:"/horizontal-stacked-bar.png"},{id:"test1",component:Object(n.jsx)(O,{data:C}),imgSrc:"/area-chart.png"},{id:"test1",component:Object(n.jsx)(y,{data:w,dataKey:"label",value:"value"}),imgSrc:"/pie-graph.png"}];return Object(n.jsx)("div",{className:"wrapper",children:t.map((function(t){return Object(n.jsxs)("div",{className:"box",children:[Object(n.jsx)("div",{className:"left-box",children:Object(n.jsx)("img",{src:"/2023-hackathon"+t.imgSrc})}),Object(n.jsx)("div",{className:"right-box",children:t.component})]})}))})},R=function(t){t&&t instanceof Function&&a.e(3).then(a.bind(null,181)).then((function(e){var a=e.getCLS,n=e.getFID,r=e.getFCP,c=e.getLCP,l=e.getTTFB;a(t),n(t),r(t),c(t),l(t)}))};a(179);o.a.render(Object(n.jsx)(c.a.StrictMode,{children:Object(n.jsx)(A,{})}),document.getElementById("root")),R()}},[[180,1,2]]]);
//# sourceMappingURL=main.8a733f71.chunk.js.map