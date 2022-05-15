"use strict";(self.webpackChunkxs_and_os=self.webpackChunkxs_and_os||[]).push([[120],{120:(t,i,e)=>{e.r(i),e.d(i,{default:()=>f});var s=e(893),n=e(670),l=e(263),a=e(391),r=e(923),o=e(766),h=e(944),d=e(699),c=e(949);const g=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];function u(t,i){const e=g.map((t=>t.reduce(((t,e)=>{const s=i[e];return t[s].count++,t[s].indexes.push(e),t}),{[d.l.empty]:{count:0,indexes:[]},[d.l.o]:{count:0,indexes:[]},[d.l.x]:{count:0,indexes:[]}}))).find((i=>2===i[t].count&&1===i[d.l.empty].count));return e?e[d.l.empty].indexes[0]:null}const m=new class{constructor(){this.startMark=d.l.x,this.currentMark=this.startMark,this.isFieldDisabled=!1,this.field=new Array(9).fill(d.l.empty),this.stats=[0,0,0],this.statsHighlight=[!0,!1,!1],this.highlitedCells=null,this.isShowRestart=!1,(0,c.ky)(this)}onCellClick(t){this.isFieldDisabled||(this.setCell(t),this.currentMark===d.l.o&&this.AI())}restart(){this.isShowRestart=!1,this.field=new Array(9).fill(d.l.empty),this.highlitedCells=null,this.startMark=(0,h.Yn)(this.startMark),this.currentMark=this.startMark,this.statsHighlight=(0,h.L_)(this.currentMark),this.currentMark===d.l.o?this.AI():this.isFieldDisabled=!1}setCell(t){var i;return this.field[t]=this.currentMark,this.highlitedCells=(0,h.NL)(t,this.currentMark,this.field),(null===(i=this.highlitedCells)||void 0===i?void 0:i.length)?(this.stats=(0,h.d5)(this.currentMark,this.stats),void setTimeout((()=>{this.isShowRestart=!0}),1e3)):(0,h.RT)(this.field)?(this.stats=(0,h.d5)(d.l.empty,this.stats),this.statsHighlight=(0,h.L_)(d.l.empty),void(this.isShowRestart=!0)):(this.currentMark=(0,h.Yn)(this.currentMark),this.statsHighlight=(0,h.L_)(this.currentMark),void(this.isFieldDisabled=!1))}AI(){this.isFieldDisabled=!0,setTimeout((()=>{const t=function(t,i){var e;let s=u(t,i);if("number"==typeof s)return s;if(s=u((0,h.Yn)(t),i),"number"==typeof s)return s;const n=i.map(((t,i)=>({value:t,i}))).filter((t=>t.value===d.l.empty)),l=Math.floor(Math.random()*n.length);return i[5]===d.l.empty&&Math.random()<.4?5:null===(e=n[l])||void 0===e?void 0:e.i}(d.l.o,this.field);this.setCell(t)}),1e3)}},p=["Player(X)","Draw","AI(O)"],f=(0,o.Pi)((()=>(0,s.jsx)(l.T,{children:(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)("div",Object.assign({style:{position:"relative"}},{children:[(0,s.jsx)(n.g,{cells:m.field,onCellClick:m.onCellClick.bind(m),isHide:m.isShowRestart,highlited:m.highlitedCells}),(0,s.jsx)(a.w,{isOpen:m.isShowRestart,onClick:m.restart.bind(m)})]})),(0,s.jsx)(r.j,{statistics:m.stats,highlightInfo:m.statsHighlight,titles:p})]})})))},944:(t,i,e)=>{e.d(i,{L_:()=>o,NL:()=>l,RT:()=>r,Yn:()=>n,d5:()=>a});var s=e(699);const n=t=>{if(t===s.l.empty)throw new Error("Mark must be equal X or O");return t===s.l.x?s.l.o:s.l.x},l=(t,i,e)=>{const s=t%3,n=Math.floor(t/3);let l=[];for(let t=0+3*n;t<3+3*n;t++){if(e[t]!==i){l=[];break}l.push(t)}if(l.length>0)return l;for(let t=0+s;t<9+s;t+=3){if(e[t]!==i){l=[];break}l.push(t)}if(l.length>0)return l;if(t%4==0)for(let t=0;t<=8;t+=4){if(e[t]!==i){l=[];break}l.push(t)}if(l.length>0)return l;if(t%2==0)for(let t=2;t<=6;t+=2){if(e[t]!==i){l=[];break}l.push(t)}return l.length>0?l:null},a=(t,i)=>{const e=[...i];return t===s.l.x?(e[0]+=1,e):t===s.l.o?(e[2]+=1,e):t===s.l.empty?(e[1]+=1,e):i},r=t=>t.every((t=>t!==s.l.empty)),o=t=>t===s.l.x?[!0,!1,!1]:t===s.l.o?[!1,!1,!0]:[!1,!0,!1]},670:(t,i,e)=>{e.d(i,{g:()=>p});var s=e(893),n=e(804);const l=n.default.div`
	box-sizing: border-box;
	position: relative;
	width: 60vw;
	height: 60vw;
	font-size: 30px;

	@media only screen and (min-device-width: ${t=>t.theme.breakpoints.sm}px) {
		width: 50vw;
		height: 50vw;
	}
	@media only screen and (min-device-width: ${t=>t.theme.breakpoints.md}px) {
		width: 25vw;
		height: 25vw;
	}

	display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-template-rows: repeat(3, 1fr);
	gap: 1vmin;

	background-color: ${t=>t.theme.palette.secondary};

	filter: opacity(${t=>t.hide?"0.3":"1"});
	transition: all ${t=>t.hide?".6s":0};
`;var a=e(766),r=e(699),o=e(637);const h=n.default.div`
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 100%;
	background-color: ${t=>t.isHighlighted?t.theme.palette.hightlight:t.theme.palette.primary};
	color: ${t=>t.isHighlighted?o.O.black:t.theme.palette.secondary};
	transition: background-color ${t=>t.isHighlighted?"0.8s":"0"};
`,d=n.keyframes`
	 0% { transform: scale(0); }
 100% { transform: scale(1);}
`,c=n.default.div`
	will-change: transform;
	width: 50%;
	height: 50%;
	animation-name: ${d};
	animation-duration: 0.3s;
	animation-iteration-count: 1;

	&:before {
		content: '';
		position: absolute;
		background-color: ${t=>t.isHighlighted?o.O.black:t.theme.palette.secondary};
		left: 43%;
		top: -9%;
		width: 14%;
		height: 120%;
		transform: rotate(-45deg);
	}

	&:after {
		right: 43%;
		top: -9%;
		content: '';
		position: absolute;
		background-color: ${t=>t.isHighlighted?o.O.black:t.theme.palette.secondary};
		width: 14%;
		height: 120%;
		transform: rotate(45deg);
	}
`,g=n.default.div`
	display: flex;
	justify-content: center;
	align-items: center;
	box-sizing: border-box;
	width: 48%;
	height: 48%;
	border-radius: 100%;
	border-color: ${t=>t.isHighlighted?o.O.black:t.theme.palette.secondary};
	border: 0.8vmax solid;
	animation-name: ${d};
	animation-duration: 0.3s;
	animation-iteration-count: 1;
`,u=({value:t,isHighlighted:i,index:e})=>{let n=null;return t===r.l.x&&(n=(0,s.jsx)(c,{isHighlighted:i})),t===r.l.o&&(n=(0,s.jsx)(g,{isHighlighted:i})),(0,s.jsx)(h,Object.assign({isHighlighted:i,"data-index":e},{children:n}))},m=(0,a.Pi)((({cells:t,highlited:i})=>(0,s.jsx)(s.Fragment,{children:t.map(((t,e)=>(0,s.jsx)(u,{index:e,value:t,isHighlighted:Boolean(null==i?void 0:i.includes(e))},e)))}))),p=(0,a.Pi)((({cells:t,onCellClick:i,isHide:e,highlited:n})=>(0,s.jsx)(l,Object.assign({hide:e,onClick:t=>{const e=t.target.getAttribute("data-index");if(!e)return;const s=Number(e);i(s)}},{children:(0,s.jsx)(m,{cells:t,highlited:n})}))))},263:(t,i,e)=>{e.d(i,{T:()=>h});var s=e(893),n=e(90),l=e(711),a=e(804);const r=a.default.div`
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	box-sizing: border-box;
	padding-top: 130px;
`,o=(0,a.default)(l.rU)`
	@media (hover: hover) and (pointer: fine) {
		&:hover:not(:active) {
			filter: brightness(0.8);
		}
	}
	color: ${t=>t.theme.palette.secondary};
	width: 35px;
	height: 35px;
	position: absolute;
	top: 0;
	left: 0;
	user-select: none;
`,h=({children:t})=>(0,s.jsxs)(r,{children:[(0,s.jsx)(o,Object.assign({to:n._.main},{children:(0,s.jsxs)("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%",fill:"currentColor",viewBox:"0 0 16 16"},{children:[(0,s.jsx)("path",{d:"M6 12.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-1 0v-2A1.5 1.5 0 0 1 6.5 2h8A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 5 12.5v-2a.5.5 0 0 1 1 0v2z"}),(0,s.jsx)("path",{d:"M.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L1.707 7.5H10.5a.5.5 0 0 1 0 1H1.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3z"})]}))})),t]})},391:(t,i,e)=>{e.d(i,{w:()=>o});var s=e(893),n=e(804);const l=n.keyframes`
0% { opacity: 0; transform: rotate(0)}
100% { opacity: 1;transform: rotate(360deg)}
`,a=n.default.div`
	position: absolute;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	display: flex;
	justify-content: center;
	align-items: center;
	color: ${t=>t.theme.palette.secondary};
	animation-name: ${l};
	animation-duration: 1s;
	animation-iteration-count: 1;
	animation-timing-function: ease-out;
`,r=()=>(0,s.jsxs)("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"60%",height:"60%",fill:"currentColor",viewBox:"0 0 16 16"},{children:[(0,s.jsx)("path",{d:"M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41zm-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9z"}),(0,s.jsx)("path",{d:"M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5.002 5.002 0 0 0 8 3zM3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9H3.1z"})]})),o=(0,e(766).Pi)((({isOpen:t,onClick:i})=>0==t?null:(0,s.jsx)(a,Object.assign({onClick:i},{children:(0,s.jsx)(r,{})}))))},923:(t,i,e)=>{e.d(i,{j:()=>c});var s=e(893),n=e(766),l=e(804);const a=l.default.div`
	display: grid;
	width: 80%;
	grid-template-columns: repeat(3, 1fr);
	padding: 10px;
	margin-top: 30px;
	margin-bottom: 50px;
	text-transform: uppercase;
`,r=l.default.div`
	font-size: 15px;
	font-weight: bold;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 10px;
`,o=l.keyframes`
	 0% { transform: scale(0); }
	 80% { transform: scale(1.5); }
 100% { transform: scale(1);}
`,h=l.default.div`
	font-size: 35px;
	animation-name: ${o};
	animation-duration: 0.3s;
	animation-iteration-count: 1;
`,d=(0,n.Pi)((({count:t,title:i})=>(0,s.jsxs)(r,{children:[(0,s.jsx)("div",{children:i}),(0,s.jsx)(h,{children:t},t)]}))),c=(0,n.Pi)((({statistics:t,highlightInfo:i,titles:e})=>(0,s.jsx)(a,{children:e.map(((e,n)=>(0,s.jsx)("div",Object.assign({style:{opacity:i[n]?1:".3"}},{children:(0,s.jsx)(d,{title:e,count:t[n]},n)}),e)))})))},699:(t,i,e)=>{var s;e.d(i,{l:()=>s}),function(t){t[t.empty=0]="empty",t[t.x=1]="x",t[t.o=2]="o"}(s||(s={}))}}]);