(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{24:function(e,t,a){e.exports=a(35)},32:function(e,t,a){},33:function(e,t,a){},35:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(19),l=a.n(c),o=(a(32),a(33),a(4)),u=a(13),i=a(40),m=a(22),s=a(41);function p(e){var t=e.row,a=e.col,n=e.dropTargets,c=e.movePlayer,l=e.children,u=Object(s.a)(function(){return{accept:n.map(function(e){return"p".concat(e)}),drop:function(e,n){return c(n.getItemType(),t,a)},collect:function(e){return{isOver:!!e.isOver(),canDrop:!!e.canDrop()}}}},[]),i=Object(o.a)(u,2),m=i[0],p=m.isOver,f=m.canDrop,d=i[1];return r.a.createElement("div",{className:"cellDropTarget",ref:d},f&&!p&&r.a.createElement("div",{className:"highlightPossible"}),f&&p&&r.a.createElement("div",{className:"highlightHover"}),l)}function f(e){var t=e.row,a=e.col,n=e.movePlayer,c=e.dropTargets,l=e.visionAdj,o=e.children;return l?0===c.length?r.a.createElement("div",{className:"cell"},o):r.a.createElement(p,{row:t,col:a,dropTargets:c,movePlayer:n},r.a.createElement("div",{className:"cell"},o)):r.a.createElement("div",{className:"cell invis"})}var d=a(42);function v(e){var t=e.number,a=Object(d.a)(function(){return{type:"p".concat(t)}}),n=Object(o.a)(a,2)[1];return r.a.createElement("div",{className:"target",ref:n},r.a.createElement("h1",{className:"player"},"P".concat(t)))}function E(e){var t=e.type;e.display;return r.a.createElement("div",{className:"item",style:{backgroundColor:["pink","red","blue"][t]}})}function b(e){var t=e.board,a=e.playerPositions,n=e.movePlayer,c=t.length,l=t[0].length;return r.a.createElement(i.a,{backend:m.a},r.a.createElement("div",{className:"board",style:{gridTemplateRows:"repeat(".concat(c,", 1fr)"),gridTemplateColumns:"repeat(".concat(l,", 1fr)")}},function(e,a,c){for(var l=[],o=function(e){for(var o=function(a){var o=c.findIndex(function(t){return e===t[0]&&a===t[1]}),i=c.map(function(t){return Math.abs(t[0]-e)+Math.abs(t[1]-a)===1}).reduce(function(e,t,a){return t?e.concat([a+1]):e},[]),m=c.some(function(t){return n=[t[0]-e,t[1]-a],Math.max.apply(Math,Object(u.a)(n.map(Math.abs)))<=1;var n});l.push(r.a.createElement(f,{key:"".concat(e," ").concat(a),row:e,col:a,movePlayer:n,dropTargets:i,visionAdj:m},-1===o?null:r.a.createElement(v,{number:o+1}),0===t[e][a]?null:r.a.createElement(E,{type:t[e][a]-1})))},i=0;i<a;i++)o(i)},i=0;i<e;i++)o(i);return l}(c,l,a)))}function g(e){var t=e.round,a=e.goal,n=e.bag,c=["pink","red","blue"],l=function(e){return n[e]>=a[e]?"listItemComplete":"listItem"};return r.a.createElement("div",{className:"dashboard"},r.a.createElement("h1",{className:"roundTitle"},"Round ".concat(t+1)),r.a.createElement("div",{className:"tasks"},r.a.createElement("h2",null,r.a.createElement("u",null,"Task Checklist")),c.map(function(e,t){return r.a.createElement("p",{key:t,className:l(t)},"".concat(a[t]," ").concat(c[t]))})),r.a.createElement("div",{className:"bag"},r.a.createElement("h2",null,r.a.createElement("u",null,"Bag")),c.map(function(e,t){return r.a.createElement("p",{key:t,className:"listItem"},"".concat(n[t]," ").concat(c[t]))})))}function h(e){var t=e.collectItem;return r.a.createElement("div",{className:"controls"},r.a.createElement("div",{className:"controlButton",onClick:t},r.a.createElement("h3",null,"Collect")),r.a.createElement("div",{className:"controlButton"},r.a.createElement("h3",null,"Lock In")))}function y(e){var t=e.setup,a=Object(n.useState)(t.board),c=Object(o.a)(a,2),l=c[0],u=c[1],i=Object(n.useState)(t.goal.map(function(){return 0})),m=Object(o.a)(i,2),s=m[0],p=m[1],f=Object(n.useState)(0),d=Object(o.a)(f,2),v=d[0],E=d[1],y=Object(n.useState)(t.playerPositions.map(function(e){return[e.map(function(e){return e})]})),N=Object(o.a)(y,2),O=N[0],j=N[1],k=function(e){return console.log(e),e.map(function(e){return e[e.length-1]})};return r.a.createElement("div",{className:"game"},r.a.createElement("h1",null,"Maze Game"),r.a.createElement("div",{className:"gameBoard"},r.a.createElement(b,{board:l,playerPositions:k(O),movePlayer:function(e,t,a){return function(e,t,a){j(function(n){var r=parseInt(e.slice(-1)),c=n.map(function(e){return e.map(function(e){return e.map(function(e){return e})})});return c[r-1].push([t,a]),c}),E(function(e){return e+1})}(e,t,a)}}),r.a.createElement(g,{round:v,goal:t.goal,bag:s})),r.a.createElement(h,{collectItem:function(){var e=k(O),t=e[0][0],a=e[0][1],n=l[t][a]-1;-1!==n&&(u(function(e){var n=e.map(function(e){return e.map(function(e){return e})});return n[t][a]=0,n}),p(function(e){var t=e.filter(function(){return!0});return t[n]+=1,t}),E(function(e){return e+1}))}}))}var N=function(){return r.a.createElement(y,{setup:{goal:[7,3,5],board:[[2,0,3,1,1,0],[2,3,0,1,1,1],[3,0,3,1,1,1],[1,1,1,3,0,3],[1,1,1,0,0,2],[0,1,1,3,2,2]],playerPositions:[[5,0]]}})};l.a.createRoot(document.getElementById("root")).render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(N,null)))}},[[24,1,2]]]);
//# sourceMappingURL=main.58693ded.chunk.js.map