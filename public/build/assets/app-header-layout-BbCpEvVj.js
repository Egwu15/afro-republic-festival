import{j as e,$ as r}from"./app-DK-5877c.js";import{S as c,a as n,b as i,c as o,d as x,l as a,F as d,B as h,I as m,e as f,A as j,f as p}from"./app-shell-DrkBCdi2.js";import{a as u,B as N}from"./button-Bo10ezaU.js";/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b=[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]],g=u("Menu",b),t=[{title:"Home",href:route("home"),icon:d},{title:"Checkout",href:route("checkout"),icon:h}];function y({breadcrumbs:l=[]}){return e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"border-sidebar-border/80 bg-custom-yellow border-b",children:e.jsxs("div",{className:"mx-auto flex h-16 items-center px-4 md:max-w-7xl",children:[e.jsx("div",{className:"lg:hidden",children:e.jsxs(c,{children:[e.jsx(n,{asChild:!0,children:e.jsx(N,{variant:"ghost",size:"icon",className:"mr-2 h-[34px] w-[34px]",children:e.jsx(g,{className:"h-5 w-5"})})}),e.jsxs(i,{side:"left",className:"bg-sidebar flex h-full w-64 flex-col items-stretch justify-between",children:[e.jsx(o,{className:"sr-only",children:"Navigation Menu"}),e.jsx(x,{className:"flex justify-start text-left",children:e.jsx("img",{src:a,alt:"logo",className:"h-32 w-32 pr-5"})}),e.jsx("div",{className:"flex h-full flex-1 flex-col space-y-4 p-4",children:e.jsx("div",{className:"flex flex-col space-y-4",children:t.map(s=>e.jsxs("a",{href:s.href,target:"_blank",rel:"noopener noreferrer",className:"flex items-center space-x-2 font-medium",children:[s.icon&&e.jsx(m,{iconNode:s.icon,className:"h-5 w-5"}),e.jsx("span",{children:s.title})]},s.title))})})]})]})}),e.jsx(r,{href:route("home"),prefetch:!0,className:"flex items-center space-x-2",children:e.jsx("img",{src:a,alt:"logo",className:"z-10 mt-14 h-32 pr-5"})}),e.jsx("div",{className:"mx-auto flex items-center space-x-2",children:e.jsx("div",{className:"relative flex items-center space-x-1",children:e.jsx("div",{className:"hidden lg:flex",children:t.map(s=>e.jsx(r,{href:s.href,target:"_blank",rel:"noopener noreferrer",className:"rounded px-3 py-1 hover:bg-white",children:e.jsx("span",{className:"font-bold",children:s.title})}))})})})]})}),l.length>1&&e.jsx("div",{className:"border-sidebar-border/70 flex w-full border-b",children:e.jsx("div",{className:"mx-auto flex h-12 w-full items-center justify-start px-4 text-neutral-500 md:max-w-7xl",children:e.jsx(f,{breadcrumbs:l})})})]})}function S({children:l,breadcrumbs:s}){return e.jsxs(j,{children:[e.jsx(y,{breadcrumbs:s}),e.jsx(p,{children:l})]})}export{S as z};
