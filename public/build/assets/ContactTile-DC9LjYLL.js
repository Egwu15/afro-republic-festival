import{j as e,V as r}from"./app-CeO2OnpV.js";import{c}from"./createLucideIcon-DZDhCyKc.js";/* empty css            *//**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],i=c("ArrowRight",s);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a=[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]],n=c("Mail",a);function h(o){const t=()=>{navigator.clipboard.writeText(o.info).then(()=>{r.success("Copied to clipboard!")}).catch(()=>{r.error("Failed to copy")})};return e.jsxs("div",{className:"mt-6 p-6",onClick:t,children:[e.jsx("p",{className:"font-medium",children:o.title}),e.jsxs("div",{className:"border-custom-bggray mt-2 flex items-center rounded-md border px-3 py-2",children:[e.jsx("div",{className:"flex-shrink-0 px-3",children:e.jsx(n,{})}),e.jsx("p",{className:"flex-1 truncate",children:o.info}),e.jsx("div",{className:"mx-3 flex-shrink-0 rounded-md bg-[#1A1A1A] px-3 py-1",children:o.icon??e.jsx(i,{})})]})]})}export{h as default};
