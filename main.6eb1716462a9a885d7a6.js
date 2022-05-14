(()=>{"use strict";var t,e={6066:(t,e,n)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.App=void 0;var r=n(5023),i=n(3121);e.App=(0,i.withProviders)(r.Routing)},1944:function(t,e,n){var r=this&&this.__assign||function(){return r=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var i in e=arguments[n])Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t},r.apply(this,arguments)};Object.defineProperty(e,"__esModule",{value:!0}),e.DarkModeToggle=void 0;var i=n(5893),o=n(6637),a=n(9977);e.DarkModeToggle=function(t){var e=t.isDark,n=t.onClick;return(0,i.jsxs)(a.Wrapper,r({onMouseDown:n},{children:[!e&&(0,i.jsxs)("svg",r({xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%",fill:o.colors.black,viewBox:"0 0 16 16"},{children:[(0,i.jsx)("path",{d:"M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z"}),(0,i.jsx)("path",{d:"M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.734 1.734 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.734 1.734 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.734 1.734 0 0 0 1.097-1.097l.387-1.162zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L13.863.1z"})]})),e&&(0,i.jsx)("svg",r({xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%",fill:o.colors.black,viewBox:"0 0 16 16"},{children:(0,i.jsx)("path",{d:"M12 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"})}))]}))}},9977:function(t,e,n){var r=this&&this.__makeTemplateObject||function(t,e){return Object.defineProperty?Object.defineProperty(t,"raw",{value:e}):t.raw=e,t},i=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0}),e.Wrapper=void 0;var o,a=i(n(8804));e.Wrapper=a.default.div(o||(o=r(["\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\twidth: 25px;\n\theight: 25px;\n\tright: 30px;\n\ttop: 30px;\n\tborder-radius: 50px;\n\tbackground-color: ",";\n\tpadding: 7px;\n\ttransition: transform 0.3s;\n\n\t@media (hover: hover) and (pointer: fine) {\n\t\t&:hover:not(:active) {\n\t\t\tfilter: brightness(0.8);\n\t\t}\n\t}\n\t&:active {\n\t\ttransform: scale(0.7);\n\t}\n\n\t@media only screen and (min-device-width: ","px) {\n\t\twidth: 30px;\n\t\theight: 30px;\n\t}\n\t@media only screen and (min-device-width: ","px) {\n\t\twidth: 25px;\n\t\theight: 25px;\n\t}\n"],["\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\twidth: 25px;\n\theight: 25px;\n\tright: 30px;\n\ttop: 30px;\n\tborder-radius: 50px;\n\tbackground-color: ",";\n\tpadding: 7px;\n\ttransition: transform 0.3s;\n\n\t@media (hover: hover) and (pointer: fine) {\n\t\t&:hover:not(:active) {\n\t\t\tfilter: brightness(0.8);\n\t\t}\n\t}\n\t&:active {\n\t\ttransform: scale(0.7);\n\t}\n\n\t@media only screen and (min-device-width: ","px) {\n\t\twidth: 30px;\n\t\theight: 30px;\n\t}\n\t@media only screen and (min-device-width: ","px) {\n\t\twidth: 25px;\n\t\theight: 25px;\n\t}\n"])),(function(t){return t.theme.palette.hightlight}),(function(t){return t.theme.breakpoints.sm}),(function(t){return t.theme.breakpoints.md}))},3021:(t,e,n)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.Layout=void 0;var r=n(5893),i=n(1944),o=n(7655);e.Layout=function(t){var e=t.isDark,n=t.toggleTheme,a=t.children;return(0,r.jsx)(o.Wrapper,{children:(0,r.jsxs)(o.Container,{children:[(0,r.jsx)(o.ToggleWrapper,{children:(0,r.jsx)(i.DarkModeToggle,{isDark:e,onClick:n})}),a]})})}},7655:function(t,e,n){var r=this&&this.__makeTemplateObject||function(t,e){return Object.defineProperty?Object.defineProperty(t,"raw",{value:e}):t.raw=e,t},i=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0}),e.ToggleWrapper=e.Container=e.Wrapper=void 0;var o,a,s,l=i(n(8804));e.Wrapper=l.default.div(o||(o=r(["\n\tposition: fixed;\n\tleft: 0;\n\tright: 0;\n\ttop: 0;\n\tbottom: 0;\n\tdisplay: flex;\n\tjustify-content: center;\n\tbox-sizing: border-box;\n\tpadding: 4vh 7vw 0 7vw;\n\tbackground-color: ",";\n\tcolor: ",";\n"],["\n\tposition: fixed;\n\tleft: 0;\n\tright: 0;\n\ttop: 0;\n\tbottom: 0;\n\tdisplay: flex;\n\tjustify-content: center;\n\tbox-sizing: border-box;\n\tpadding: 4vh 7vw 0 7vw;\n\tbackground-color: ",";\n\tcolor: ",";\n"])),(function(t){return t.theme.palette.primary}),(function(t){return t.theme.palette.secondary})),e.Container=l.default.div(a||(a=r(["\n\tposition: relative;\n\twidth: 100%;\n\tmax-width: 600px;\n"],["\n\tposition: relative;\n\twidth: 100%;\n\tmax-width: 600px;\n"]))),e.ToggleWrapper=l.default.div(s||(s=r(["\n\tposition: absolute;\n\tright: 0;\n\ttop: 0;\n"],["\n\tposition: absolute;\n\tright: 0;\n\ttop: 0;\n"])))},9116:function(t,e,n){var r=this&&this.__assign||function(){return r=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var i in e=arguments[n])Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t},r.apply(this,arguments)};Object.defineProperty(e,"__esModule",{value:!0}),e.getDarkModeValue=e.generateTheme=void 0;var i=n(6637),o={primary:i.colors.black,secondary:i.colors.white},a={primary:i.colors.white,secondary:i.colors.black};e.generateTheme=function(t){var e=t?o:a;return{breakpoints:{sm:600,md:900,lg:1200,xl:1536},palette:r({hightlight:i.colors.yellow},e)}},e.getDarkModeValue=function(){var t=localStorage.getItem("darkMode");return null!==t?"true"===t:!0===window.matchMedia("(prefers-color-scheme: dark)").matches}},3121:function(t,e,n){var r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0}),e.withProviders=void 0;var i=r(n(36)),o=n(372),a=n(5292),s=n(244);e.withProviders=i.default.compose(s.withTheme,o.withGlobalStyles,a.withRouter)},372:function(t,e,n){var r=this&&this.__makeTemplateObject||function(t,e){return Object.defineProperty?Object.defineProperty(t,"raw",{value:e}):t.raw=e,t};Object.defineProperty(e,"__esModule",{value:!0}),e.withGlobalStyles=void 0;var i,o=n(5893),a=n(8804),s=n(7704),l=(0,a.createGlobalStyle)(i||(i=r(["\n\t* { user-select: none; }\n\t*::selection { background: none; }\n\t*::-moz-selection { background: none; }\n\tbody {\n\t\tfont-family: 'PT Sans', sans-serif;\n\t\tbackground-color: ",";\n\t}\n\ta {\n\t\tcolor: ","\n\t}\n"],["\n\t* { user-select: none; }\n\t*::selection { background: none; }\n\t*::-moz-selection { background: none; }\n\tbody {\n\t\tfont-family: 'PT Sans', sans-serif;\n\t\tbackground-color: ",";\n\t}\n\ta {\n\t\tcolor: ","\n\t}\n"])),(function(t){return t.theme.palette.primary}),(function(t){return t.theme.palette.secondary}));e.withGlobalStyles=function(t){return function(){return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(s.Normalize,{}),(0,o.jsx)(l,{}),t()]})}}},5292:(t,e,n)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.withRouter=void 0;var r=n(5893),i=n(3879);e.withRouter=function(t){return function(){return(0,r.jsx)(i.HashRouter,{children:t()})}}},244:function(t,e,n){var r=this&&this.__assign||function(){return r=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var i in e=arguments[n])Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t},r.apply(this,arguments)};Object.defineProperty(e,"__esModule",{value:!0}),e.withTheme=void 0;var i=n(5893),o=n(3021),a=n(7294),s=n(8804),l=n(9116);e.withTheme=function(t){return function(){var e=(0,a.useState)((0,l.getDarkModeValue)()),n=e[0],c=e[1],u=(0,a.useMemo)((function(){return(0,l.generateTheme)(n)}),[n]);return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(s.ThemeProvider,r({theme:u},{children:(0,i.jsx)(o.Layout,r({toggleTheme:function(){c(!n),localStorage.setItem("darkMode",String(!n))},isDark:n},{children:t()}))}))})}}},2629:function(t,e,n){var r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var i=n(5893),o=r(n(7294)),a=n(745),s=n(6066),l=document.querySelector("#app");(0,a.createRoot)(l).render((0,i.jsx)(o.default.StrictMode,{children:(0,i.jsx)(s.App,{})}))},9930:(t,e,n)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.AIPage=void 0;var r=n(6401);Object.defineProperty(e,"AIPage",{enumerable:!0,get:function(){return r.AI}})},7491:(t,e,n)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.getIndexForAI=void 0;var r=n(4944),i=n(9699);e.getIndexForAI=function(t,e){var n,o=a(t,e);if(o)return o;if(o=a((0,r.getOppositeMark)(t),e))return o;var s=e.map((function(t,e){return{value:t,i:e}})).filter((function(t){return t.value===i.CellType.empty})),l=Math.floor(Math.random()*s.length);return e[5]===i.CellType.empty&&Math.random()<.4?5:null===(n=s[l])||void 0===n?void 0:n.i};var o=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];function a(t,e){var n=o.map((function(t){var n;return t.reduce((function(t,n){var r=e[n];return console.log("index",r),t[r].count++,t[r].indexes.push(n),t}),((n={})[i.CellType.empty]={count:0,indexes:[]},n[i.CellType.o]={count:0,indexes:[]},n[i.CellType.x]={count:0,indexes:[]},n))})).find((function(e){return 2===e[t].count&&1===e[i.CellType.empty].count}));return n?n[i.CellType.empty].indexes[0]:null}},32:(t,e,n)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.store=void 0;var r=n(4944),i=n(9699),o=n(8949),a=n(7491),s=function(){function t(){this.startMark=i.CellType.x,this.currentMark=this.startMark,this.isFieldDisabled=!1,this.field=new Array(9).fill(i.CellType.empty),this.stats=[0,0,0],this.statsHighlight=[!0,!1,!1],this.highlitedCells=null,this.isShowRestart=!1,(0,o.makeAutoObservable)(this)}return t.prototype.onCellClick=function(t){this.isFieldDisabled||(this.setCell(t),this.currentMark===i.CellType.o&&this.AI())},t.prototype.restart=function(){this.isShowRestart=!1,this.field=new Array(9).fill(i.CellType.empty),this.highlitedCells=null,this.startMark=(0,r.getOppositeMark)(this.startMark),this.currentMark=this.startMark,this.statsHighlight=(0,r.getHighlight)(this.currentMark),this.currentMark===i.CellType.o?this.AI():this.isFieldDisabled=!1},t.prototype.setCell=function(t){var e,n=this;return console.log("this",this),this.field[t]=this.currentMark,this.highlitedCells=(0,r.getWinLine)(t,this.currentMark,this.field),(null===(e=this.highlitedCells)||void 0===e?void 0:e.length)?(this.stats=(0,r.getNextStats)(this.currentMark,this.stats),void setTimeout((function(){n.isShowRestart=!0}),1e3)):(0,r.checkDraw)(this.field)?(this.stats=(0,r.getNextStats)(i.CellType.empty,this.stats),this.statsHighlight=(0,r.getHighlight)(i.CellType.empty),void(this.isShowRestart=!0)):(this.currentMark=(0,r.getOppositeMark)(this.currentMark),this.statsHighlight=(0,r.getHighlight)(this.currentMark),void(this.isFieldDisabled=!1))},t.prototype.AI=function(){var t=this;this.isFieldDisabled=!0,setTimeout((function(){var e=(0,a.getIndexForAI)(i.CellType.o,t.field);t.setCell(e)}),1e3)},t}();e.store=new s},6401:function(t,e,n){var r=this&&this.__assign||function(){return r=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var i in e=arguments[n])Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t},r.apply(this,arguments)};Object.defineProperty(e,"__esModule",{value:!0}),e.AI=void 0;var i=n(5893),o=n(2473),a=n(3269),s=n(4177),l=n(3252),c=n(2766),u=n(32),d=["Player(X)","Draw","AI(O)"];e.AI=(0,c.observer)((function(){return(0,i.jsx)(a.GameLayout,{children:(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)("div",r({style:{position:"relative"}},{children:[(0,i.jsx)(o.Field,{cells:u.store.field,onCellClick:u.store.onCellClick.bind(u.store),isHide:u.store.isShowRestart,highlited:u.store.highlitedCells}),(0,i.jsx)(s.RestartCover,{isOpen:u.store.isShowRestart,onClick:u.store.restart.bind(u.store)})]})),(0,i.jsx)(l.Stats,{statistics:u.store.stats,highlightInfo:u.store.statsHighlight,titles:d})]})})}))},3853:(t,e,n)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.HotSeatPage=void 0;var r=n(5522);Object.defineProperty(e,"HotSeatPage",{enumerable:!0,get:function(){return r.HotSeat}})},488:(t,e,n)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.store=void 0;var r=n(4944),i=n(9699),o=n(8949),a=function(){function t(){this.startMark=i.CellType.x,this.currentMark=this.startMark,this.field=new Array(9).fill(i.CellType.empty),this.stats=[0,0,0],this.statsHighlight=[!0,!1,!1],this.highlitedCells=null,this.isShowRestart=!1,(0,o.makeAutoObservable)(this)}return t.prototype.onCellClick=function(t){var e;(null===(e=this.highlitedCells)||void 0===e?void 0:e.length)||this.setCell(t)},t.prototype.restart=function(){this.isShowRestart=!1,this.field=new Array(9).fill(i.CellType.empty),this.highlitedCells=null,this.startMark=(0,r.getOppositeMark)(this.startMark),this.currentMark=this.startMark,this.statsHighlight=(0,r.getHighlight)(this.currentMark)},t.prototype.setCell=function(t){var e,n=this;return this.field[t]=this.currentMark,this.highlitedCells=(0,r.getWinLine)(t,this.currentMark,this.field),(null===(e=this.highlitedCells)||void 0===e?void 0:e.length)?(this.stats=(0,r.getNextStats)(this.currentMark,this.stats),void setTimeout((function(){n.isShowRestart=!0}),1e3)):(0,r.checkDraw)(this.field)?(this.stats=(0,r.getNextStats)(i.CellType.empty,this.stats),this.statsHighlight=(0,r.getHighlight)(i.CellType.empty),void(this.isShowRestart=!0)):(this.currentMark=(0,r.getOppositeMark)(this.currentMark),void(this.statsHighlight=(0,r.getHighlight)(this.currentMark)))},t}();e.store=new a},5522:function(t,e,n){var r=this&&this.__assign||function(){return r=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var i in e=arguments[n])Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t},r.apply(this,arguments)};Object.defineProperty(e,"__esModule",{value:!0}),e.HotSeat=void 0;var i=n(5893),o=n(2473),a=n(3269),s=n(4177),l=n(3252),c=n(2766),u=n(488),d=["Player(X)","Draw","Player(O)"];e.HotSeat=(0,c.observer)((function(){return(0,i.jsx)(a.GameLayout,{children:(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)("div",r({style:{position:"relative"}},{children:[(0,i.jsx)(o.Field,{cells:u.store.field,onCellClick:u.store.onCellClick.bind(u.store),isHide:u.store.isShowRestart,highlited:u.store.highlitedCells}),(0,i.jsx)(s.RestartCover,{isOpen:u.store.isShowRestart,onClick:u.store.restart.bind(u.store)})]})),(0,i.jsx)(l.Stats,{statistics:u.store.stats,highlightInfo:u.store.statsHighlight,titles:d})]})})}))},3845:function(t,e,n){var r=this&&this.__assign||function(){return r=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var i in e=arguments[n])Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t},r.apply(this,arguments)};Object.defineProperty(e,"__esModule",{value:!0}),e.Logo=void 0;var i=n(5893),o=n(8804),a=n(1383);e.Logo=function(){var t=(0,o.useTheme)(),e=t.palette.secondary,n=t.palette.hightlight;return(0,i.jsx)(a.Wrapper,{children:(0,i.jsxs)("svg",r({xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%",viewBox:"0 0 343 205",fill:"none"},{children:[(0,i.jsx)("circle",{cx:"240.5",cy:"102.5",r:"75",stroke:n,strokeWidth:"55"}),(0,i.jsx)("path",{d:"M28 171L165 34",stroke:e,strokeWidth:"55",strokeLinecap:"round"}),(0,i.jsx)("path",{d:"M167.5 168.779L35.5001 36.7794",stroke:e,strokeWidth:"55",strokeLinecap:"round"})]}))})}},1383:function(t,e,n){var r=this&&this.__makeTemplateObject||function(t,e){return Object.defineProperty?Object.defineProperty(t,"raw",{value:e}):t.raw=e,t},i=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0}),e.Wrapper=void 0;var o,a=i(n(8804));e.Wrapper=a.default.div(o||(o=r(["\n\twidth: 150px;\n\theight: 150px;\n"],["\n\twidth: 150px;\n\theight: 150px;\n"])))},5229:function(t,e,n){var r=this&&this.__assign||function(){return r=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var i in e=arguments[n])Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t},r.apply(this,arguments)};Object.defineProperty(e,"__esModule",{value:!0}),e.MenuScreen=void 0;var i=n(5893),o=n(3845),a=n(3090),s=n(5931);e.MenuScreen=function(){return(0,i.jsxs)(s.Wrapper,{children:[(0,i.jsx)(o.Logo,{}),(0,i.jsxs)(s.ItemsBlock,{children:[(0,i.jsx)(s.MenuItem,r({to:a.routes.ai},{children:"VERSUS AI"})),(0,i.jsx)(s.MenuItem,r({to:a.routes.hotseat},{children:"Hot Seat"})),(0,i.jsx)(s.MenuItem,r({disabled:!0,to:a.routes.ai},{children:"Network"}))]}),(0,i.jsx)("a",r({style:{width:"35px"},href:"https://github.com/Alexey1380",target:"_blank"},{children:(0,i.jsx)("svg",r({xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%",fill:"currentColor",viewBox:"0 0 16 16"},{children:(0,i.jsx)("path",{d:"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"})}))}))]})}},5931:function(t,e,n){var r=this&&this.__makeTemplateObject||function(t,e){return Object.defineProperty?Object.defineProperty(t,"raw",{value:e}):t.raw=e,t},i=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0}),e.MenuItem=e.ItemsBlock=e.Wrapper=void 0;var o,a,s,l=n(3879),c=i(n(8804));e.Wrapper=c.default.div(o||(o=r(["\n\tbox-sizing: border-box;\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\tjustify-content: space-around;\n\twidth: 100%;\n\theight: 100%;\n\tpadding-top: 50px;\n\tpadding-bottom: 35px;\n"],["\n\tbox-sizing: border-box;\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\tjustify-content: space-around;\n\twidth: 100%;\n\theight: 100%;\n\tpadding-top: 50px;\n\tpadding-bottom: 35px;\n"]))),e.ItemsBlock=c.default.div(a||(a=r(["\n\tmargin-top: 90px;\n\tmargin-bottom: 40px;\n\talign-self: center;\n\tdisplay: flex;\n\tflex-direction: column;\n\twidth: 80%;\n\tgap: 10px;\n"],["\n\tmargin-top: 90px;\n\tmargin-bottom: 40px;\n\talign-self: center;\n\tdisplay: flex;\n\tflex-direction: column;\n\twidth: 80%;\n\tgap: 10px;\n"]))),e.MenuItem=(0,c.default)(l.Link)(s||(s=r(["\n\t@media (hover: hover) and (pointer: fine) {\n\t\t&:hover:not(:active) {\n\t\t\tfilter: brightness(0.8);\n\t\t}\n\t}\n\tpointer-events: ",";\n\topacity: ",";\n\tcolor: inherit;\n\tfont-weight: bold;\n\tfont-size: 17px;\n\tborder: none;\n\tbox-sizing: border-box;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tbackground-color: ",";\n\tcolor: ",";\n\twidth: 100%;\n\tborder-radius: 8px;\n\tmin-height: 40px;\n\ttext-decoration: none;\n\ttext-transform: uppercase;\n"],["\n\t@media (hover: hover) and (pointer: fine) {\n\t\t&:hover:not(:active) {\n\t\t\tfilter: brightness(0.8);\n\t\t}\n\t}\n\tpointer-events: ",";\n\topacity: ",";\n\tcolor: inherit;\n\tfont-weight: bold;\n\tfont-size: 17px;\n\tborder: none;\n\tbox-sizing: border-box;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tbackground-color: ",";\n\tcolor: ",";\n\twidth: 100%;\n\tborder-radius: 8px;\n\tmin-height: 40px;\n\ttext-decoration: none;\n\ttext-transform: uppercase;\n"])),(function(t){return t.disabled?"none":"all"}),(function(t){return t.disabled?"0.1":1}),(function(t){return t.theme.palette.secondary}),(function(t){return t.theme.palette.primary}))},5023:(t,e,n)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.Routing=void 0;var r=n(5893),i=n(3879),o=n(9930),a=n(3853),s=n(5229),l=n(3090);e.Routing=function(){return(0,r.jsxs)(i.Routes,{children:[(0,r.jsx)(i.Route,{path:l.routes.main,element:(0,r.jsx)(s.MenuScreen,{})}),(0,r.jsx)(i.Route,{path:l.routes.ai,element:(0,r.jsx)(o.AIPage,{})}),(0,r.jsx)(i.Route,{path:l.routes.hotseat,element:(0,r.jsx)(a.HotSeatPage,{})}),(0,r.jsx)(i.Route,{path:l.routes.network,element:(0,r.jsx)(o.AIPage,{})})]})}},3090:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.routes=void 0,e.routes={main:"/",ai:"/ai",hotseat:"/hotseat",network:"/network"}},6637:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.colors=void 0,e.colors={white:"#eaeaea",black:"#262525",yellow:"#FFCF25"}},4944:function(t,e,n){var r=this&&this.__spreadArray||function(t,e,n){if(n||2===arguments.length)for(var r,i=0,o=e.length;i<o;i++)!r&&i in e||(r||(r=Array.prototype.slice.call(e,0,i)),r[i]=e[i]);return t.concat(r||Array.prototype.slice.call(e))};Object.defineProperty(e,"__esModule",{value:!0}),e.getHighlight=e.checkDraw=e.getNextStats=e.getWinLine=e.getOppositeMark=void 0;var i=n(9699);e.getOppositeMark=function(t){if(t===i.CellType.empty)throw new Error("Mark must be equal X or O");return t===i.CellType.x?i.CellType.o:i.CellType.x},e.getWinLine=function(t,e,n){var r=t%3,i=Math.floor(t/3);console.log("row",i),console.log("column",r);for(var o=[],a=0+3*i;a<3+3*i;a++){if(n[a]!==e){o=[];break}o.push(a)}if(o.length>0)return o;for(a=0+r;a<9+r;a+=3){if(n[a]!==e){o=[];break}o.push(a)}if(o.length>0)return o;if(t%4==0)for(a=0;a<=8;a+=4){if(n[a]!==e){o=[];break}o.push(a)}if(o.length>0)return o;if(t%2==0&&t%4!=0)for(a=2;a<=6;a+=2){if(n[a]!==e){o=[];break}o.push(a)}return o.length>0?o:null},e.getNextStats=function(t,e){var n=r([],e,!0);return t===i.CellType.x?(n[0]+=1,n):t===i.CellType.o?(n[2]+=1,n):t===i.CellType.empty?(n[1]+=1,n):e},e.checkDraw=function(t){return t.every((function(t){return t!==i.CellType.empty}))},e.getHighlight=function(t){return t===i.CellType.x?[!0,!1,!1]:t===i.CellType.o?[!1,!1,!0]:[!1,!0,!1]}},6171:function(t,e,n){var r=this&&this.__assign||function(){return r=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var i in e=arguments[n])Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t},r.apply(this,arguments)};Object.defineProperty(e,"__esModule",{value:!0}),e.Cell=void 0;var i=n(5893),o=n(9699),a=n(4502);e.Cell=function(t){var e=t.value,n=t.isHighlighted,s=t.index,l=null;return e===o.CellType.x&&(l=(0,i.jsx)(a.XIcon,{isHighlighted:n})),e===o.CellType.o&&(l=(0,i.jsx)(a.OIcon,{isHighlighted:n})),(0,i.jsx)(a.Wrapper,r({isHighlighted:n,"data-index":s},{children:l}))}},4502:function(t,e,n){var r=this&&this.__makeTemplateObject||function(t,e){return Object.defineProperty?Object.defineProperty(t,"raw",{value:e}):t.raw=e,t},i=this&&this.__createBinding||(Object.create?function(t,e,n,r){void 0===r&&(r=n);var i=Object.getOwnPropertyDescriptor(e,n);i&&!("get"in i?!e.__esModule:i.writable||i.configurable)||(i={enumerable:!0,get:function(){return e[n]}}),Object.defineProperty(t,r,i)}:function(t,e,n,r){void 0===r&&(r=n),t[r]=e[n]}),o=this&&this.__setModuleDefault||(Object.create?function(t,e){Object.defineProperty(t,"default",{enumerable:!0,value:e})}:function(t,e){t.default=e}),a=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)"default"!==n&&Object.prototype.hasOwnProperty.call(t,n)&&i(e,t,n);return o(e,t),e};Object.defineProperty(e,"__esModule",{value:!0}),e.OIcon=e.XIcon=e.Wrapper=void 0;var s=n(6637),l=a(n(8804));e.Wrapper=l.default.div(c||(c=r(["\n\tposition: relative;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\twidth: 100%;\n\theight: 100%;\n\tbackground-color: ",";\n\tcolor: ",";\n\ttransition: background-color ",";\n"],["\n\tposition: relative;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\twidth: 100%;\n\theight: 100%;\n\tbackground-color: ",";\n\tcolor: ",";\n\ttransition: background-color ",";\n"])),(function(t){return t.isHighlighted?t.theme.palette.hightlight:t.theme.palette.primary}),(function(t){return t.isHighlighted?s.colors.black:t.theme.palette.secondary}),(function(t){return t.isHighlighted?"0.8s":"0"}));var c,u,d,h,p=(0,l.keyframes)(u||(u=r(["\n\t 0% { transform: scale(0); }\n 100% { transform: scale(1);}\n"],["\n\t 0% { transform: scale(0); }\n 100% { transform: scale(1);}\n"])));e.XIcon=l.default.div(d||(d=r(["\n\twill-change: transform;\n\twidth: 50%;\n\theight: 50%;\n\tanimation-name: ",";\n\tanimation-duration: 0.3s;\n\tanimation-iteration-count: 1;\n\n\t&:before {\n\t\tcontent: '';\n\t\tposition: absolute;\n\t\tbackground-color: ",";\n\t\tleft: 43%;\n\t\ttop: -9%;\n\t\twidth: 14%;\n\t\theight: 120%;\n\t\ttransform: rotate(-45deg);\n\t}\n\n\t&:after {\n\t\tright: 43%;\n\t\ttop: -9%;\n\t\tcontent: '';\n\t\tposition: absolute;\n\t\tbackground-color: ",";\n\t\twidth: 14%;\n\t\theight: 120%;\n\t\ttransform: rotate(45deg);\n\t}\n"],["\n\twill-change: transform;\n\twidth: 50%;\n\theight: 50%;\n\tanimation-name: ",";\n\tanimation-duration: 0.3s;\n\tanimation-iteration-count: 1;\n\n\t&:before {\n\t\tcontent: '';\n\t\tposition: absolute;\n\t\tbackground-color: ",";\n\t\tleft: 43%;\n\t\ttop: -9%;\n\t\twidth: 14%;\n\t\theight: 120%;\n\t\ttransform: rotate(-45deg);\n\t}\n\n\t&:after {\n\t\tright: 43%;\n\t\ttop: -9%;\n\t\tcontent: '';\n\t\tposition: absolute;\n\t\tbackground-color: ",";\n\t\twidth: 14%;\n\t\theight: 120%;\n\t\ttransform: rotate(45deg);\n\t}\n"])),p,(function(t){return t.isHighlighted?s.colors.black:t.theme.palette.secondary}),(function(t){return t.isHighlighted?s.colors.black:t.theme.palette.secondary})),e.OIcon=l.default.div(h||(h=r(["\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tbox-sizing: border-box;\n\twidth: 48%;\n\theight: 48%;\n\tborder-radius: 100%;\n\tborder-color: ",";\n\tborder: 0.8vmax solid;\n\tanimation-name: ",";\n\tanimation-duration: 0.3s;\n\tanimation-iteration-count: 1;\n"],["\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tbox-sizing: border-box;\n\twidth: 48%;\n\theight: 48%;\n\tborder-radius: 100%;\n\tborder-color: ",";\n\tborder: 0.8vmax solid;\n\tanimation-name: ",";\n\tanimation-duration: 0.3s;\n\tanimation-iteration-count: 1;\n"])),(function(t){return t.isHighlighted?s.colors.black:t.theme.palette.secondary}),p)},4203:(t,e,n)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.CellList=void 0;var r=n(5893),i=n(2766),o=n(6171);e.CellList=(0,i.observer)((function(t){var e=t.cells,n=t.highlited;return(0,r.jsx)(r.Fragment,{children:e.map((function(t,e){return(0,r.jsx)(o.Cell,{index:e,value:t,isHighlighted:Boolean(null==n?void 0:n.includes(e))},e)}))})}))},2473:function(t,e,n){var r=this&&this.__assign||function(){return r=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var i in e=arguments[n])Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t},r.apply(this,arguments)};Object.defineProperty(e,"__esModule",{value:!0}),e.Field=void 0;var i=n(5893),o=n(3823),a=n(4203),s=n(2766);e.Field=(0,s.observer)((function(t){var e=t.cells,n=t.onCellClick,s=t.isHide,l=t.highlited;return(0,i.jsx)(o.Wrapper,r({hide:s,onClick:function(t){var e=t.target.getAttribute("data-index");if(e){var r=Number(e);console.log("FIELD INDEX",r),n(r)}}},{children:(0,i.jsx)(a.CellList,{cells:e,highlited:l})}))}))},3823:function(t,e,n){var r=this&&this.__makeTemplateObject||function(t,e){return Object.defineProperty?Object.defineProperty(t,"raw",{value:e}):t.raw=e,t},i=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0}),e.Wrapper=void 0;var o,a=i(n(8804));e.Wrapper=a.default.div(o||(o=r(["\n\tbox-sizing: border-box;\n\tposition: relative;\n\twidth: 60vw;\n\theight: 60vw;\n\tfont-size: 30px;\n\n\t@media only screen and (min-device-width: ","px) {\n\t\twidth: 50vw;\n\t\theight: 50vw;\n\t}\n\t@media only screen and (min-device-width: ","px) {\n\t\twidth: 25vw;\n\t\theight: 25vw;\n\t}\n\n\tdisplay: grid;\n\tgrid-template-columns: repeat(3, 1fr);\n\tgrid-template-rows: repeat(3, 1fr);\n\tgap: 1vmin;\n\n\tbackground-color: ",";\n\n\tfilter: opacity(",");\n\ttransition: all ",";\n"],["\n\tbox-sizing: border-box;\n\tposition: relative;\n\twidth: 60vw;\n\theight: 60vw;\n\tfont-size: 30px;\n\n\t@media only screen and (min-device-width: ","px) {\n\t\twidth: 50vw;\n\t\theight: 50vw;\n\t}\n\t@media only screen and (min-device-width: ","px) {\n\t\twidth: 25vw;\n\t\theight: 25vw;\n\t}\n\n\tdisplay: grid;\n\tgrid-template-columns: repeat(3, 1fr);\n\tgrid-template-rows: repeat(3, 1fr);\n\tgap: 1vmin;\n\n\tbackground-color: ",";\n\n\tfilter: opacity(",");\n\ttransition: all ",";\n"])),(function(t){return t.theme.breakpoints.sm}),(function(t){return t.theme.breakpoints.md}),(function(t){return t.theme.palette.secondary}),(function(t){return t.hide?"0.3":"1"}),(function(t){return t.hide?".6s":0}))},3269:function(t,e,n){var r=this&&this.__assign||function(){return r=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var i in e=arguments[n])Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t},r.apply(this,arguments)};Object.defineProperty(e,"__esModule",{value:!0}),e.GameLayout=void 0;var i=n(5893),o=n(3090),a=n(1065);e.GameLayout=function(t){var e=t.children;return(0,i.jsxs)(a.Wrapper,{children:[(0,i.jsx)(a.Exit,r({to:o.routes.main},{children:(0,i.jsxs)("svg",r({xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%",fill:"currentColor",viewBox:"0 0 16 16"},{children:[(0,i.jsx)("path",{d:"M6 12.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-1 0v-2A1.5 1.5 0 0 1 6.5 2h8A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 5 12.5v-2a.5.5 0 0 1 1 0v2z"}),(0,i.jsx)("path",{d:"M.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L1.707 7.5H10.5a.5.5 0 0 1 0 1H1.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3z"})]}))})),e]})}},1065:function(t,e,n){var r=this&&this.__makeTemplateObject||function(t,e){return Object.defineProperty?Object.defineProperty(t,"raw",{value:e}):t.raw=e,t},i=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0}),e.Exit=e.Wrapper=void 0;var o,a,s=n(3879),l=i(n(8804));e.Wrapper=l.default.div(o||(o=r(["\n\twidth: 100%;\n\theight: 100%;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tflex-direction: column;\n\tbox-sizing: border-box;\n\tpadding-top: 130px;\n"],["\n\twidth: 100%;\n\theight: 100%;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tflex-direction: column;\n\tbox-sizing: border-box;\n\tpadding-top: 130px;\n"]))),e.Exit=(0,l.default)(s.Link)(a||(a=r(["\n\t@media (hover: hover) and (pointer: fine) {\n\t\t&:hover:not(:active) {\n\t\t\tfilter: brightness(0.8);\n\t\t}\n\t}\n\tcolor: ",";\n\twidth: 35px;\n\theight: 35px;\n\tposition: absolute;\n\ttop: 0;\n\tleft: 0;\n\tuser-select: none;\n"],["\n\t@media (hover: hover) and (pointer: fine) {\n\t\t&:hover:not(:active) {\n\t\t\tfilter: brightness(0.8);\n\t\t}\n\t}\n\tcolor: ",";\n\twidth: 35px;\n\theight: 35px;\n\tposition: absolute;\n\ttop: 0;\n\tleft: 0;\n\tuser-select: none;\n"])),(function(t){return t.theme.palette.secondary}))},2699:function(t,e,n){var r=this&&this.__assign||function(){return r=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var i in e=arguments[n])Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t},r.apply(this,arguments)};Object.defineProperty(e,"__esModule",{value:!0}),e.RestartIcon=void 0;var i=n(5893);e.RestartIcon=function(){return(0,i.jsxs)("svg",r({xmlns:"http://www.w3.org/2000/svg",width:"60%",height:"60%",fill:"currentColor",viewBox:"0 0 16 16"},{children:[(0,i.jsx)("path",{d:"M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41zm-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9z"}),(0,i.jsx)("path",{d:"M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5.002 5.002 0 0 0 8 3zM3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9H3.1z"})]}))}},4177:function(t,e,n){var r=this&&this.__assign||function(){return r=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var i in e=arguments[n])Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t},r.apply(this,arguments)};Object.defineProperty(e,"__esModule",{value:!0}),e.RestartCover=void 0;var i=n(5893),o=n(6585),a=n(2699),s=n(2766);e.RestartCover=(0,s.observer)((function(t){var e=t.isOpen,n=t.onClick;return 0==e?null:(0,i.jsx)(o.Wrapper,r({onClick:n},{children:(0,i.jsx)(a.RestartIcon,{})}))}))},6585:function(t,e,n){var r=this&&this.__makeTemplateObject||function(t,e){return Object.defineProperty?Object.defineProperty(t,"raw",{value:e}):t.raw=e,t},i=this&&this.__createBinding||(Object.create?function(t,e,n,r){void 0===r&&(r=n);var i=Object.getOwnPropertyDescriptor(e,n);i&&!("get"in i?!e.__esModule:i.writable||i.configurable)||(i={enumerable:!0,get:function(){return e[n]}}),Object.defineProperty(t,r,i)}:function(t,e,n,r){void 0===r&&(r=n),t[r]=e[n]}),o=this&&this.__setModuleDefault||(Object.create?function(t,e){Object.defineProperty(t,"default",{enumerable:!0,value:e})}:function(t,e){t.default=e}),a=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)"default"!==n&&Object.prototype.hasOwnProperty.call(t,n)&&i(e,t,n);return o(e,t),e};Object.defineProperty(e,"__esModule",{value:!0}),e.Wrapper=void 0;var s,l,c=a(n(8804)),u=(0,c.keyframes)(s||(s=r(["\n0% { opacity: 0; transform: rotate(0)}\n100% { opacity: 1;transform: rotate(360deg)}\n"],["\n0% { opacity: 0; transform: rotate(0)}\n100% { opacity: 1;transform: rotate(360deg)}\n"])));e.Wrapper=c.default.div(l||(l=r(["\n\tposition: absolute;\n\ttop: 0;\n\tbottom: 0;\n\tleft: 0;\n\tright: 0;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tcolor: ",";\n\tanimation-name: ",";\n\tanimation-duration: 1s;\n\tanimation-iteration-count: 1;\n\tanimation-timing-function: ease-out;\n"],["\n\tposition: absolute;\n\ttop: 0;\n\tbottom: 0;\n\tleft: 0;\n\tright: 0;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tcolor: ",";\n\tanimation-name: ",";\n\tanimation-duration: 1s;\n\tanimation-iteration-count: 1;\n\tanimation-timing-function: ease-out;\n"])),(function(t){return t.theme.palette.secondary}),u)},7995:(t,e,n)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.Stat=void 0;var r=n(5893),i=n(2766),o=n(5073);e.Stat=(0,i.observer)((function(t){var e=t.count,n=t.title;return(0,r.jsxs)(o.StatWrapper,{children:[(0,r.jsx)("div",{children:n}),(0,r.jsx)(o.Count,{children:e},e)]})}))},3252:function(t,e,n){var r=this&&this.__assign||function(){return r=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var i in e=arguments[n])Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t},r.apply(this,arguments)};Object.defineProperty(e,"__esModule",{value:!0}),e.Stats=void 0;var i=n(5893),o=n(2766),a=n(7995),s=n(5073);e.Stats=(0,o.observer)((function(t){var e=t.statistics,n=t.highlightInfo,o=t.titles;return(0,i.jsx)(s.Wrapper,{children:o.map((function(t,o){return(0,i.jsx)("div",r({style:{opacity:n[o]?1:".3"}},{children:(0,i.jsx)(a.Stat,{title:t,count:e[o]},o)}),t)}))})}))},5073:function(t,e,n){var r=this&&this.__makeTemplateObject||function(t,e){return Object.defineProperty?Object.defineProperty(t,"raw",{value:e}):t.raw=e,t},i=this&&this.__createBinding||(Object.create?function(t,e,n,r){void 0===r&&(r=n);var i=Object.getOwnPropertyDescriptor(e,n);i&&!("get"in i?!e.__esModule:i.writable||i.configurable)||(i={enumerable:!0,get:function(){return e[n]}}),Object.defineProperty(t,r,i)}:function(t,e,n,r){void 0===r&&(r=n),t[r]=e[n]}),o=this&&this.__setModuleDefault||(Object.create?function(t,e){Object.defineProperty(t,"default",{enumerable:!0,value:e})}:function(t,e){t.default=e}),a=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)"default"!==n&&Object.prototype.hasOwnProperty.call(t,n)&&i(e,t,n);return o(e,t),e};Object.defineProperty(e,"__esModule",{value:!0}),e.Count=e.StatWrapper=e.Wrapper=void 0;var s=a(n(8804));e.Wrapper=s.default.div(l||(l=r(["\n\tdisplay: grid;\n\twidth: 80%;\n\tgrid-template-columns: repeat(3, 1fr);\n\tpadding: 10px;\n\tmargin-top: 30px;\n\tmargin-bottom: 50px;\n\ttext-transform: uppercase;\n"],["\n\tdisplay: grid;\n\twidth: 80%;\n\tgrid-template-columns: repeat(3, 1fr);\n\tpadding: 10px;\n\tmargin-top: 30px;\n\tmargin-bottom: 50px;\n\ttext-transform: uppercase;\n"]))),e.StatWrapper=s.default.div(c||(c=r(["\n\tfont-size: 15px;\n\tfont-weight: bold;\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\tgap: 10px;\n"],["\n\tfont-size: 15px;\n\tfont-weight: bold;\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\tgap: 10px;\n"])));var l,c,u,d,h=(0,s.keyframes)(u||(u=r(["\n\t 0% { transform: scale(0); }\n\t 80% { transform: scale(1.5); }\n 100% { transform: scale(1);}\n"],["\n\t 0% { transform: scale(0); }\n\t 80% { transform: scale(1.5); }\n 100% { transform: scale(1);}\n"])));e.Count=s.default.div(d||(d=r(["\n\tfont-size: 35px;\n\tanimation-name: ",";\n\tanimation-duration: 0.3s;\n\tanimation-iteration-count: 1;\n"],["\n\tfont-size: 35px;\n\tanimation-name: ",";\n\tanimation-duration: 0.3s;\n\tanimation-iteration-count: 1;\n"])),h)},9699:(t,e)=>{var n;Object.defineProperty(e,"__esModule",{value:!0}),e.CellType=void 0,(n=e.CellType||(e.CellType={}))[n.empty=0]="empty",n[n.x=1]="x",n[n.o=2]="o"}},n={};function r(t){var i=n[t];if(void 0!==i)return i.exports;var o=n[t]={exports:{}};return e[t].call(o.exports,o,o.exports,r),o.exports}r.m=e,t=[],r.O=(e,n,i,o)=>{if(!n){var a=1/0;for(u=0;u<t.length;u++){for(var[n,i,o]=t[u],s=!0,l=0;l<n.length;l++)(!1&o||a>=o)&&Object.keys(r.O).every((t=>r.O[t](n[l])))?n.splice(l--,1):(s=!1,o<a&&(a=o));if(s){t.splice(u--,1);var c=i();void 0!==c&&(e=c)}}return e}o=o||0;for(var u=t.length;u>0&&t[u-1][2]>o;u--)t[u]=t[u-1];t[u]=[n,i,o]},r.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return r.d(e,{a:e}),e},r.d=(t,e)=>{for(var n in e)r.o(e,n)&&!r.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),r.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),r.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},(()=>{var t={179:0};r.O.j=e=>0===t[e];var e=(e,n)=>{var i,o,[a,s,l]=n,c=0;if(a.some((e=>0!==t[e]))){for(i in s)r.o(s,i)&&(r.m[i]=s[i]);if(l)var u=l(r)}for(e&&e(n);c<a.length;c++)o=a[c],r.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return r.O(u)},n=self.webpackChunkxs_and_os=self.webpackChunkxs_and_os||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))})();var i=r.O(void 0,[216],(()=>r(2629)));i=r.O(i)})();