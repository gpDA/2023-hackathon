(this["webpackJsonptodo-list-react-hooks"]=this["webpackJsonptodo-list-react-hooks"]||[]).push([[0],{40:function(t,e,a){},41:function(t,e,a){},43:function(t,e,a){},44:function(t,e,a){},45:function(t,e,a){},46:function(t,e,a){},50:function(t,e,a){},51:function(t,e,a){},52:function(t,e,a){},53:function(t,e,a){},54:function(t,e,a){},55:function(t,e,a){},56:function(t,e,a){},57:function(t,e,a){},58:function(t,e,a){},59:function(t,e,a){},60:function(t,e,a){},61:function(t,e,a){},63:function(t,e,a){"use strict";a.r(e);var n=a(1),r=a(0),c=a.n(r),i=a(31),o=a.n(i),s=a(18),l=(a(40),a(4)),u=(a(41),a(28)),d=a(7),f=(a(43),a(44),function(t){var e=t.title,a=t.children;return Object(n.jsxs)("div",{className:"cell",children:[Object(n.jsx)("div",{children:e}),a]})}),h=(a(45),a(46),function(t){var e=t.rotateId,a=t.buttons,r=t.rotateButtonGroupCB;return Object(n.jsx)(n.Fragment,{children:a.map((function(t,a){return Object(n.jsx)("button",{name:t,onClick:function(t){r(a)},className:a===e?"customButton active":"customButton",children:t},a)}))})}),b=(a(47),function(t){var e=t.rotateId,a=t.rotateButtonGroupCB,r=t.setDataCB;return Object(n.jsxs)("div",{className:"horizontal-bar-left",children:[Object(n.jsx)(f,{title:"cell-title",children:Object(n.jsx)("button",{onClick:function(){return r("test")},children:"I am test button"})}),Object(n.jsx)(f,{title:"rotate",children:Object(n.jsx)(h,{buttons:["right","top","left","bottom"],rotateButtonGroupCB:a,rotateId:e})}),"GroupButton"]})}),j=(a(50),function(t){var e=t.data,a=void 0===e?[]:e,c=t.setDataCB,i=t.width,o=void 0===i?400:i,s=t.height,f=void 0===s?300:s,h=t.margin,j=void 0===h?20:h,x=Object(r.useRef)(null),m=Object(r.useMemo)((function(){return d.scaleBand().range([0,f]).domain(a.map((function(t){return t.Country}))).padding(.1)}),[a]),p=Object(r.useState)(0),g=Object(l.a)(p,2),O=g[0],v=g[1],y=Object(r.useState)({widthLength:o+j+100,heightLength:f+j+100,svgTransform:"translate(".concat(j+30,",").concat(j/2,")"),axisY:m,axisX:null,axisXFunctionName:"axisBottom",axisYFunctionName:"axisLeft",axisYTransform:"translate(0,"+f+")",axisXTransform:"translate(10,10)rotate(45)",axisXLeftRotateTransform:null,rectX:function(){return N(0)},rectY:function(t){return m(t.Country)},rectWidth:function(t){return N(t.Value)},rectHeight:function(){return m.bandwidth()}}),C=Object(l.a)(y,2),w=C[0],k=C[1],N=Object(r.useMemo)((function(){var t=a.map((function(t){return t.Value})),e=[0,d.max(t)];return e=3===O||2===O?[d.max(t),0]:[0,d.max(t)],d.scaleLinear().domain(e).range([0,o])}),[O]);Object(r.useEffect)((function(){L()}),[O]);var L=function(){var t={};0===O&&(t.widthLength=o+j+100,t.heightLength=f+j+100,t.svgTransform="translate(".concat(j+30,",").concat(j/2,")"),t.axisY=m,t.axisX=N,t.axisXFunctionName="axisBottom",t.axisYFunctionName="axisLeft",t.axisYTransform="translate(0,"+f+")",t.axisXTransform="translate(10,10)rotate(45)",t.axisXLeftRotateTransform=null,t.rectX=function(){return N(0)},t.rectY=function(t){return m(t.Country)},t.rectWidth=function(t){return N(t.Value)},t.rectHeight=function(){return m.bandwidth()}),1===O&&(t.widthLength=f+j+100,t.heightLength=o+j+100,t.svgTransform="translate(".concat(j+30,",").concat(j/2+20,")"),t.axisY=N,t.axisX=m,t.axisXFunctionName="axisTop",t.axisYFunctionName="axisLeft",t.axisYTransform="translate(0, 0)",t.axisXTransform="translate(+10,-10)rotate(0)",t.axisXLeftRotateTransform=null,t.rectX=function(t){return m(t.Country)},t.rectY=function(){return N(0)},t.rectWidth=function(){return m.bandwidth()},t.rectHeight=function(t){return N(t.Value)}),2===O&&(t.widthLength=o+j+100,t.heightLength=f+j+100,t.svgTransform="translate(".concat(j+30,",").concat(j/2,")"),t.axisY=m,t.axisX=N,t.axisXFunctionName="axisBottom",t.axisYFunctionName="axisRight",t.axisYTransform="translate(0,"+f+")",t.axisXTransform="translate(10,10)rotate(45)",t.axisXLeftRotateTransform="translate(".concat(o,", 0)"),t.rectX=function(t){return N(t.Value)},t.rectY=function(t){return m(t.Country)},t.rectWidth=function(t){return o-N(t.Value)},t.rectHeight=function(){return m.bandwidth()}),3===O&&(t.widthLength=f+j+100,t.heightLength=o+j+100,t.svgTransform="translate(".concat(j+30,",").concat(j/2,")"),t.axisY=N,t.axisX=m,t.axisXFunctionName="axisBottom",t.axisYFunctionName="axisLeft",t.axisYTransform="translate(0, ".concat(f+100,")"),t.axisXTransform="translate(+10,0)rotate(0)",t.axisXLeftRotateTransform="translate(0, 0)",t.rectX=function(t){return m(t.Country)},t.rectY=function(t){return N(t.Value)},t.rectWidth=function(){return m.bandwidth()},t.rectHeight=function(t){return f+100-N(t.Value)}),k((function(e){return Object(u.a)(Object(u.a)({},e),t)}))},T=Object(r.useCallback)((function(t){return d.selectAll(".test2").remove(),d.select(t).attr("width",w.widthLength).attr("height",w.heightLength).append("g").attr("class","test2").attr("transform",w.svgTransform)}),[f,o,w]),A=function(t){var e,n=T(t);n.append("g").attr("transform",w.axisYTransform).call(d[w.axisXFunctionName](null!==(e=null===w||void 0===w?void 0:w.axisX)&&void 0!==e?e:N.range([0,o])).tickSizeOuter(0)).selectAll("text").attr("transform",w.axisXTransform).style("text-anchor","end"),n.append("g").call(d[w.axisYFunctionName](w.axisY).tickSizeOuter(0)).attr("transform",w.axisXLeftRotateTransform),n.selectAll("rect").data(a).join("rect").attr("class","test").attr("x",(function(t){return w.rectX(t)})).attr("y",(function(t){return w.rectY(t)})).attr("width",(function(t){return w.rectWidth(t)})).attr("height",(function(t){return w.rectHeight(t)})).attr("fill","#69b3a2")};return Object(r.useEffect)((function(){(x.current||a)&&A(x.current)}),[x,A,a]),Object(n.jsxs)("div",{className:"horizontal-bar-wrapper",children:[Object(n.jsx)(b,{rotateId:O,rotateButtonGroupCB:function(t){v(t)},setDataCB:c}),Object(n.jsx)("div",{className:"horizontal-bar-right",children:Object(n.jsx)("svg",{ref:x})})]})}),x=a(8),m=(a(51),a(52),function(t,e){switch(t){case"Color-1":return d.schemeCategory10.slice(0,e);case"Color-2":return d.schemeAccent.slice(0,e);case"Color-3":return d.schemeDark2.slice(0,e);case"Color-4":return d.schemePaired.slice(0,e);case"Color-5":return d.schemePastel1.slice(0,e);case"Color-6":return d.schemePastel2.slice(0,e);case"Color-7":return d.schemeSet1.slice(0,e);case"Color-8":return d.schemeSet2.slice(0,e);case"Color-9":return d.schemeSet3.slice(0,e);case"Color-10":return d.schemeTableau10.slice(0,e);default:return[]}}),p=(a(53),a(54),a(55),function(){return Object(n.jsx)("div",{className:"vertical-stacked-bar-left",children:"hello VerticalStackedBarPanel"})}),g=(a(56),function(t){var e=t.data,a=t.label,c=void 0===a?{show:!0,xLabel:"Percentage %",yLabel:"Fruit Type"}:a,i=t.width,o=void 0===i?400:i,s=t.height,u=void 0===s?400:s,f=t.margin,h=void 0===f?80:f,b=t.groupKey,j=void 0===b?"label":b,g=t.subgroups,O=void 0===g?["value","diff"]:g,v=t.colorPalette,y=void 0===v?[]:v,C=t.colorType,w=void 0===C?"Color-6":C,k=Object(r.useRef)(null),N=Object(r.useCallback)((function(t){return d.select(t).attr("width",o+h+50).attr("height",u+h+50).append("g").attr("transform","translate(".concat(h+30,",").concat(h/2,")"))}),[u,o,h]),L=Object(r.useCallback)((function(t){var a=e.map((function(t){return Object.keys(t).reduce((function(e,a){return O.includes(a)?e+parseInt(t[a]):e+0}),0)})),n=Math.max.apply(Math,Object(x.a)(a));return[d.scaleBand().domain(t).range([0,o]).padding([.2]),d.scaleLinear().domain([0,Math.ceil(n)]).range([u,0])]}),[o,u,O]),T=Object(r.useCallback)((function(){var t=O.length,e=y.length>0?y:m(w,t);return d.scaleOrdinal().domain(O).range(e)}),[O,y,w]),A=Object(r.useCallback)((function(t){var a=N(t),n=e.map((function(t){return t[j]})),r=d.stack().keys(O)(e),i=L(n),s=Object(l.a)(i,2),f=s[0],b=s[1],x=T();a.append("g").attr("transform","translate(0, ".concat(u,")")).call(d.axisBottom(f).tickSizeOuter(0)),a.append("g").call(d.axisLeft(b)),a.append("g").selectAll("g").data(r).join("g").attr("fill",(function(t){return x(t.key)})).selectAll("rect").data((function(t){return t})).join("rect").attr("x",(function(t){return f(t.data[j])})).attr("y",(function(t){return b(t[1])})).attr("height",(function(t){return b(t[0])-b(t[1])})).attr("width",f.bandwidth()),c.show&&a.append("text").attr("class","label").attr("x",-u/2).attr("y",-h/1.3).attr("transform","rotate(-90)").attr("text-anchor","middle").text(c.xLabel),c.show&&a.append("text").attr("class","label").attr("x",o/2).attr("y",u+2*h/2.5).attr("text-anchor","middle").text(c.yLabel)}),[N,L,T,u,O,j,c,h,o]);return Object(r.useEffect)((function(){k.current&&A(k.current)}),[k,A]),Object(n.jsxs)("div",{className:"vertical-stacked-bar-wrapper",children:[Object(n.jsx)(p,{}),Object(n.jsx)("div",{className:"vertical-stacked-bar-right",children:Object(n.jsx)("svg",{ref:k})})]})});g.defaultProps={};a(57);var O=function(){return Object(n.jsx)("div",{className:"area-chart-left",children:"hello AreaChartPanel"})},v=(a(58),function(t){var e=t.data,a=t.width,c=void 0===a?400:a,i=t.height,o=void 0===i?400:i,s=t.margin,u=void 0===s?{left:100,bottom:100,top:50,right:50}:s,f=t.xAxis,h=void 0===f?"date":f,b=t.yAxis,j=void 0===b?"value":b,m=Object(r.useRef)(null),p=Object(r.useState)([]),g=Object(l.a)(p,2),v=g[0],y=g[1];Object(r.useEffect)((function(){var t=d.timeParse("%Y"),a=e.map((function(e){return{date:t(e.data),value:e.value}}));y(Object(x.a)(a))}),[]);var C=Object(r.useCallback)((function(t){return d.select(t).attr("width",c+u.left+u.right).attr("height",o+u.top+u.bottom).append("g").attr("transform","translate(".concat(u.left,",").concat(u.right,")"))}),[o,c,u]),w=Object(r.useCallback)((function(){var t=v.map((function(t){return t[h]}));return[d.scaleTime().domain(d.extent(t)).range([0,c]).nice(),d.scaleLinear().domain([0,d.max(v,(function(t){return+t[j]}))]).range([o,0])]}),[c,o,v,h,j]),k=Object(r.useCallback)((function(t){var e=C(t),a=w(),n=Object(l.a)(a,2),r=n[0],c=n[1];e.append("g").attr("transform","translate(0,".concat(o,")")).call(d.axisBottom(r).ticks(d.timeYear)),e.append("g").call(d.axisLeft(c)),e.append("text").classed("hoverText",!0),e.append("path").datum(v).attr("fill","#cce5df").attr("stroke","#69b3a2").attr("stroke-width",1.5).attr("d",d.area().x((function(t){return r(t[h])})).y0(c(0)).y1((function(t){return c(t[j])}))),e.append("path").datum(v).attr("fill","none").attr("stroke","#69b3a2").attr("stroke-width",2).attr("d",d.line().x((function(t){return r(t[h])})).y((function(t){return c(t[j])}))),e.selectAll("myCircles").data(v).join("circle").attr("fill","yellow").attr("stroke","none").attr("cx",(function(t){return r(t[h])})).attr("cy",(function(t){return c(t[j])})).attr("r",3)}),[w,o,C,v,h,j]);return Object(r.useEffect)((function(){m.current&&k(m.current)}),[m,k]),Object(n.jsxs)("div",{className:"area-chart-wrapper",children:[Object(n.jsx)(O,{}),Object(n.jsx)("div",{className:"area-chart-right",children:Object(n.jsx)("svg",{ref:m})})]})}),y=(a(59),function(){return Object(n.jsx)("div",{className:"pie-graph-left",children:"hello PieGraphPanel"})}),C=(a(60),function(t){var e=t.data,a=t.width,c=t.height,i=t.dataKey,o=t.value,s=t.colorPalette,l=t.colorType,u=t.margin,f=(t.style,t.text),h=t.arc,b=t.tooltip,j=t.donut,p=Object(r.useRef)(null),g=Object(r.useCallback)((function(t){return d.select(t).append("g").attr("transform","translate(".concat(a/2,",").concat(c/2,")"))}),[c,a]),O=Object(r.useCallback)((function(){return Object(x.a)(new Set(e.map((function(t){return t[i]})))).length}),[e,i]),v=Object(r.useCallback)((function(){var t=O(),a=s.length>0?s:m(l,t);return d.scaleOrdinal().domain(function(t,e){var a=new Set(t.map((function(t){return t[e]})));return Array.from(a)}(e,i)).range(a)}),[e,i,O,s,l]),C=Object(r.useCallback)((function(){return d.pie().value((function(t){return t[o]}))(e)}),[e,o]),w=Object(r.useCallback)((function(){return u?Math.min(a,c)/2-u:Math.min(a,c)/2}),[a,c,u]),k=Object(r.useCallback)((function(){var t=c/2-30,e=(t-t/3)/2;return h.cornerRadius>=e?e:h.cornerRadius}),[c,h]),N=Object(r.useCallback)((function(t,e,a,n,r){t.selectAll("arc").data(e).enter().append("text").attr("class","arcText").text((function(t){return t.data[i]})).attr("transform",(function(t){if("outside"===f.location){var e=n.centroid(t),c=t.startAngle+(t.endAngle-t.startAngle)/2;return e[0]=.99*r*(c<Math.PI?1:-1),"translate("+e+")"}return"translate(".concat(a.centroid(t),")")})).style("text-anchor",(function(t){return"outside"===f.location?t.startAngle+(t.endAngle-t.startAngle)/2<Math.PI?"start":"end":f.textAnchor}))}),[i,f]),L=Object(r.useCallback)((function(){return d.select(".App").append("div").attr("class","tooltip").style("position","absolute").style("opacity",0)}),[]),T=Object(r.useCallback)((function(t){return j.show?t<j.innerRadius?t:j.innerRadius:0}),[j]),A=Object(r.useCallback)((function(t,e,a,n,r){t.selectAll("allPolylines").data(e).enter().append("polyline").attr("class","textLine").style("fill","none").attr("points",(function(t){var e=a.centroid(t),c=n.centroid(t),i=n.centroid(t),o=t.startAngle+(t.endAngle-t.startAngle)/2;return i[0]=.95*r*(o<Math.PI?1:-1),[e,c,i]}))}),[]),X=Object(r.useCallback)((function(t){var e=g(t),a=C(),n=v(),r=w(),c=d.arc().innerRadius(T(r)).outerRadius(r).cornerRadius(k()).padAngle(h.padAngle),o=d.arc().innerRadius(.9*r).outerRadius(.9*r),s=L();e.selectAll(".arc").data(a).enter().append("path").attr("class","arc").attr("d",c).attr("fill",(function(t){return n(t.data[i])})).on("mouseover",(function(t,e){b.show&&s.transition().duration(200).style("opacity",1).style("left",t.pageX+20+"px").style("top",t.pageY-20+"px").text(function(t,e){return t.replace(/%.*?%/g,(function(t){var a=t.replace(/[^()_a-zA-Z0-9-]+/g,"");return e[a]}))}(b.text,e.data))})).on("mouseout",(function(t,e){b.show&&s.transition().duration(500).style("opacity",0)})),f.showLine&&A(e,a,c,o,r),f.show&&N(e,a,c,o,r)}),[A,T,i,b,L,g,C,v,w,f,h,k,N]);return Object(r.useEffect)((function(){p.current&&X(p.current)}),[p,X]),Object(n.jsxs)("div",{style:{margin:"2em"},className:"pie-graph-wrapper",children:[Object(n.jsx)(y,{}),Object(n.jsx)("div",{className:"pie-graph-right",children:Object(n.jsx)("svg",{ref:p,width:a,height:c})})]})});C.defaultProps={data:[],width:300,height:300,dataKey:"",value:"",colorPalette:[],colorType:"Color-1",margin:0,text:{show:!1,textAnchor:"middle",location:"inside",showLine:!1},arc:{padAngle:0,cornerRadius:0},tooltip:{show:!1,text:""},donut:{show:!1,innerRadius:0}};var w=C,k=a(5),N=(a(61),[{display:"Bar",icon:Object(n.jsx)("i",{className:"bx bx-home"}),to:"/2023-hackathon/bar",section:""},{display:"Area Chart",icon:Object(n.jsx)("i",{className:"bx bx-receipt"}),to:"/2023-hackathon/area-chart",section:"order"},{display:"Pie Graph",icon:Object(n.jsx)("i",{className:"bx bx-receipt"}),to:"/2023-hackathon/pie-graph",section:"order"}]),L=function(){var t=Object(r.useState)(0),e=Object(l.a)(t,2),a=e[0],c=e[1],i=Object(r.useState)(0),o=Object(l.a)(i,2),u=o[0],d=o[1],f=Object(r.useRef)(),h=Object(r.useRef)(),b=Object(k.n)();return Object(r.useEffect)((function(){setTimeout((function(){var t=f.current.querySelector(".sidebar__menu__item");h.current.style.height="".concat(t.clientHeight,"px"),d(t.clientHeight)}),50)}),[]),Object(r.useEffect)((function(){var t=window.location.pathname.split("/")[1],e=N.findIndex((function(e){return e.section===t}));c(0===t.length?0:e)}),[b]),Object(n.jsxs)("div",{className:"sidebar",children:[Object(n.jsx)("div",{className:"sidebar__logo",children:"Animate"}),Object(n.jsxs)("div",{ref:f,className:"sidebar__menu",children:[Object(n.jsx)("div",{ref:h,className:"sidebar__menu__indicator",style:{transform:"translateX(-50%) translateY(".concat(a*u,"px)")}}),N.map((function(t,e){return Object(n.jsx)(s.b,{to:t.to,children:Object(n.jsxs)("div",{className:"sidebar__menu__item ".concat(a===e?"active":""),children:[Object(n.jsx)("div",{className:"sidebar__menu__item__icon",children:t.icon}),Object(n.jsx)("div",{className:"sidebar__menu__item__text",children:t.display})]})},e)}))]})]})},T=[{Country:"US",Value:100},{Country:"S. Korea",Value:85},{Country:"Italy",Value:72},{Country:"Japan",Value:80}],A=[{label:"Apples",value:100},{label:"Bananas",value:200},{label:"Oranges",value:50},{label:"Kiwis",value:150}],X=[{data:"2001",value:100},{data:"2002",value:150},{data:"2003",value:100},{data:"2004",value:400},{data:"2005",value:1070},{data:"2006",value:700}];function _(){return Object(n.jsxs)("div",{style:{padding:"50px 0px 0px 370px"},children:[Object(n.jsx)(L,{}),Object(n.jsx)(k.b,{})]})}var B=function(){var t=Object(r.useState)(T),e=Object(l.a)(t,2),a=e[0],c=e[1];return Object(n.jsx)("div",{className:"wrapper",children:Object(n.jsx)(k.e,{children:Object(n.jsxs)(k.c,{path:"/2023-hackathon",element:Object(n.jsx)(_,{}),children:[Object(n.jsx)(k.c,{path:"bar",element:Object(n.jsx)(j,{data:a,setDataCB:function(t){console.log("setData",t),c([{Country:"USA",Value:80},{Country:"S. Korea",Value:85},{Country:"Italy",Value:72},{Country:"Japan",Value:80}])}})}),Object(n.jsx)(k.c,{path:"area-chart",element:Object(n.jsx)(v,{data:X})}),Object(n.jsx)(k.c,{path:"pie-graph",element:Object(n.jsx)(w,{data:A,dataKey:"label",value:"value"})}),Object(n.jsx)(k.c,{path:"*",element:Object(n.jsx)(k.a,{to:"/2023-hackathon/bar",replace:!0})})]})})})},Y=function(t){t&&t instanceof Function&&a.e(3).then(a.bind(null,64)).then((function(e){var a=e.getCLS,n=e.getFID,r=e.getFCP,c=e.getLCP,i=e.getTTFB;a(t),n(t),r(t),c(t),i(t)}))};a(62);o.a.render(Object(n.jsx)(c.a.StrictMode,{children:Object(n.jsx)(s.a,{children:Object(n.jsx)(B,{})})}),document.getElementById("root")),Y()}},[[63,1,2]]]);
//# sourceMappingURL=main.9bedd423.chunk.js.map