!function(){"use strict";function t(){}function n(t,n){for(const e in n)t[e]=n[e];return t}function e(t){return t()}function s(){return Object.create(null)}function o(t){t.forEach(e)}function r(t){return"function"==typeof t}function c(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function i(t,n){t.appendChild(n)}function l(t,n,e){t.insertBefore(n,e||null)}function u(t){t.parentNode.removeChild(t)}function a(t){return document.createElement(t)}function f(t){return document.createTextNode(t)}function p(){return f(" ")}function h(){return f("")}function d(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function m(t,n,e){t.classList[e?"add":"remove"](n)}let g;function $(t){g=t}function b(){if(!g)throw Error("Function called outside component initialization");return g}function v(t,n){const e=t.$$.callbacks[n.type];e&&e.slice().forEach((t=>t(n)))}const w=[],y=[],k=[],x=[],E=Promise.resolve();let _=!1;function j(){_||(_=!0,E.then(O))}function C(t){k.push(t)}let L=!1;const S=new Set;function O(){if(!L){L=!0;do{for(let t=0;t<w.length;t+=1){const n=w[t];$(n),D(n.$$)}for($(null),w.length=0;y.length;)y.pop()();for(let t=0;t<k.length;t+=1){const n=k[t];S.has(n)||(S.add(n),n())}k.length=0}while(w.length);for(;x.length;)x.pop()();_=!1,L=!1,S.clear()}}function D(t){if(null!==t.fragment){t.update(),o(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(C)}}const R=new Set;let A;function M(){A={r:0,c:[],p:A}}function T(){A.r||o(A.c),A=A.p}function q(t,n){t&&t.i&&(R.delete(t),t.i(n))}function N(t,n,e,s){if(t&&t.o){if(R.has(t))return;R.add(t),A.c.push((()=>{R.delete(t),s&&(e&&t.d(1),s())})),t.o(n)}}function H(t,n){const e={},s={},o={$$scope:1};let r=t.length;for(;r--;){const c=t[r],i=n[r];if(i){for(const t in c)t in i||(s[t]=1);for(const t in i)o[t]||(e[t]=i[t],o[t]=1);t[r]=i}else for(const t in c)o[t]=1}for(const t in s)t in e||(e[t]=void 0);return e}function I(t){return"object"==typeof t&&null!==t?t:{}}function V(t){t&&t.c()}function W(t,n,s){const{fragment:c,on_mount:i,on_destroy:l,after_update:u}=t.$$;c&&c.m(n,s),C((()=>{const n=i.map(e).filter(r);l?l.push(...n):o(n),t.$$.on_mount=[]})),u.forEach(C)}function P(t,n){const e=t.$$;null!==e.fragment&&(o(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function B(n,e,r,c,i,l,a=[-1]){const f=g;$(n);const p=n.$$={fragment:null,ctx:null,props:l,update:t,not_equal:i,bound:s(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(f?f.$$.context:[]),callbacks:s(),dirty:a,skip_bound:!1};let h=!1;if(p.ctx=r?r(n,e.props||{},((t,e,...s)=>{const o=s.length?s[0]:e;return p.ctx&&i(p.ctx[t],p.ctx[t]=o)&&(!p.skip_bound&&p.bound[t]&&p.bound[t](o),h&&function(t,n){-1===t.$$.dirty[0]&&(w.push(t),j(),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}(n,t)),e})):[],p.update(),h=!0,o(p.before_update),p.fragment=!!c&&c(p.ctx),e.target){if(e.hydrate){const t=function(t){return Array.from(t.childNodes)}(e.target);p.fragment&&p.fragment.l(t),t.forEach(u)}else p.fragment&&p.fragment.c();e.intro&&q(n.$$.fragment),W(n,e.target,e.anchor),O()}$(f)}class Y{$destroy(){P(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(t){this.$$set&&0!==Object.keys(t).length&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function z(n){let e,s,o;return{c(){e=a("header"),e.innerHTML='<img src="/assets/cutie.png" class="svelte-kd6w7o"/> \n  <h3 class="svelte-kd6w7o">Stormy Dev</h3> \n  <nav><a href="#/" class="svelte-kd6w7o">Home</a> \n    <a href="#/software" class="svelte-kd6w7o">Software</a></nav>',s=p(),o=a("div"),d(e,"class","svelte-kd6w7o"),m(e,"scrolled",n[0]),d(o,"id","placeholder"),d(o,"class","svelte-kd6w7o")},m(t,n){l(t,e,n),l(t,s,n),l(t,o,n)},p(t,[n]){1&n&&m(e,"scrolled",t[0])},i:t,o:t,d(t){t&&u(e),t&&u(s),t&&u(o)}}}function F(t,n,e){let s=!1,o=0;return document.addEventListener("scroll",(()=>{let t=document.documentElement.scrollTop;e(0,s=t-o>0),o=t})),[s]}class G extends Y{constructor(t){super(),B(this,t,F,z,c,{})}}function K(n){let e;return{c(){e=a("main"),e.innerHTML='<div class="svelte-13aqts2"></div> \n  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 84 1440 204"><path fill="#f44" fill-opacity="1" d="M0,288L48,272C96,256,192,224,288,213.3C384,203,480,213,576,181.3C672,149,768,75,864,85.3C960,96,1056,192,1152,218.7C1248,245,1344,203,1392,181.3L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>',d(e,"class","svelte-13aqts2")},m(t,n){l(t,e,n)},p:t,i:t,o:t,d(t){t&&u(e)}}}class U extends Y{constructor(t){super(),B(this,t,null,K,c,{})}}const J=[];function X(t,n){return{subscribe:Z(t,n).subscribe}}function Z(n,e=t){let s;const o=[];function r(t){if(c(n,t)&&(n=t,s)){const t=!J.length;for(let t=0;t<o.length;t+=1){const e=o[t];e[1](),J.push(e,n)}if(t){for(let t=0;t<J.length;t+=2)J[t][0](J[t+1]);J.length=0}}}return{set:r,update:function(t){r(t(n))},subscribe:function(c,i=t){const l=[c,i];return o.push(l),1===o.length&&(s=e(r)||t),c(n),()=>{const t=o.indexOf(l);-1!==t&&o.splice(t,1),0===o.length&&(s(),s=null)}}}}function Q(n,e,s){const c=!Array.isArray(n),i=c?[n]:n,l=e.length<2;return X(s,(n=>{let s=!1;const u=[];let a=0,f=t;const p=()=>{if(a)return;f();const s=e(c?u[0]:u,n);l?n(s):f=r(s)?s:t},h=i.map(((n,e)=>function(n,...e){if(null==n)return t;const s=n.subscribe(...e);return s.unsubscribe?()=>s.unsubscribe():s}(n,(t=>{u[e]=t,a&=~(1<<e),s&&p()}),(()=>{a|=1<<e}))));return s=!0,p(),function(){o(h),f()}}))}function tt(t){let e,s,o;const r=[t[2]];var c=t[0];function i(t){let e={};for(let t=0;t<r.length;t+=1)e=n(e,r[t]);return{props:e}}return c&&(e=new c(i()),e.$on("routeEvent",t[7])),{c(){e&&V(e.$$.fragment),s=h()},m(t,n){e&&W(e,t,n),l(t,s,n),o=!0},p(t,n){const o=4&n?H(r,[I(t[2])]):{};if(c!==(c=t[0])){if(e){M();const t=e;N(t.$$.fragment,1,0,(()=>{P(t,1)})),T()}c?(e=new c(i()),e.$on("routeEvent",t[7]),V(e.$$.fragment),q(e.$$.fragment,1),W(e,s.parentNode,s)):e=null}else c&&e.$set(o)},i(t){o||(e&&q(e.$$.fragment,t),o=!0)},o(t){e&&N(e.$$.fragment,t),o=!1},d(t){t&&u(s),e&&P(e,t)}}}function nt(t){let e,s,o;const r=[{params:t[1]},t[2]];var c=t[0];function i(t){let e={};for(let t=0;t<r.length;t+=1)e=n(e,r[t]);return{props:e}}return c&&(e=new c(i()),e.$on("routeEvent",t[6])),{c(){e&&V(e.$$.fragment),s=h()},m(t,n){e&&W(e,t,n),l(t,s,n),o=!0},p(t,n){const o=6&n?H(r,[2&n&&{params:t[1]},4&n&&I(t[2])]):{};if(c!==(c=t[0])){if(e){M();const t=e;N(t.$$.fragment,1,0,(()=>{P(t,1)})),T()}c?(e=new c(i()),e.$on("routeEvent",t[6]),V(e.$$.fragment),q(e.$$.fragment,1),W(e,s.parentNode,s)):e=null}else c&&e.$set(o)},i(t){o||(e&&q(e.$$.fragment,t),o=!0)},o(t){e&&N(e.$$.fragment,t),o=!1},d(t){t&&u(s),e&&P(e,t)}}}function et(t){let n,e,s,o;const r=[nt,tt],c=[];function i(t,n){return t[1]?0:1}return n=i(t),e=c[n]=r[n](t),{c(){e.c(),s=h()},m(t,e){c[n].m(t,e),l(t,s,e),o=!0},p(t,[o]){let l=n;n=i(t),n===l?c[n].p(t,o):(M(),N(c[l],1,1,(()=>{c[l]=null})),T(),e=c[n],e?e.p(t,o):(e=c[n]=r[n](t),e.c()),q(e,1),e.m(s.parentNode,s))},i(t){o||(q(e),o=!0)},o(t){N(e),o=!1},d(t){c[n].d(t),t&&u(s)}}}function st(){const t=window.location.href.indexOf("#/");let n=t>-1?window.location.href.substr(t+1):"/";const e=n.indexOf("?");let s="";return e>-1&&(s=n.substr(e+1),n=n.substr(0,e)),{location:n,querystring:s}}const ot=X(null,(function(t){t(st());const n=()=>{t(st())};return window.addEventListener("hashchange",n,!1),function(){window.removeEventListener("hashchange",n,!1)}}));function rt(t,n,e){let{routes:s={}}=n,{prefix:o=""}=n,{restoreScrollState:r=!1}=n;class c{constructor(t,n){if(!n||"function"!=typeof n&&("object"!=typeof n||!0!==n._sveltesparouter))throw Error("Invalid component object");if(!t||"string"==typeof t&&(t.length<1||"/"!=t.charAt(0)&&"*"!=t.charAt(0))||"object"==typeof t&&!(t instanceof RegExp))throw Error('Invalid value for "path" argument - strings must start with / or *');const{pattern:e,keys:s}=function(t,n){if(t instanceof RegExp)return{keys:!1,pattern:t};var e,s,o,r,c=[],i="",l=t.split("/");for(l[0]||l.shift();o=l.shift();)"*"===(e=o[0])?(c.push("wild"),i+="/(.*)"):":"===e?(s=o.indexOf("?",1),r=o.indexOf(".",1),c.push(o.substring(1,~s?s:~r?r:o.length)),i+=~s&&!~r?"(?:/([^/]+?))?":"/([^/]+?)",~r&&(i+=(~s?"?":"")+"\\"+o.substring(r))):i+="/"+o;return{keys:c,pattern:RegExp("^"+i+"/?$","i")}}(t);this.path=t,"object"==typeof n&&!0===n._sveltesparouter?(this.component=n.component,this.conditions=n.conditions||[],this.userData=n.userData,this.props=n.props||{}):(this.component=()=>Promise.resolve(n),this.conditions=[],this.props={}),this._pattern=e,this._keys=s}match(t){if(o)if("string"==typeof o){if(!t.startsWith(o))return null;t=t.substr(o.length)||"/"}else if(o instanceof RegExp){const n=t.match(o);if(!n||!n[0])return null;t=t.substr(n[0].length)||"/"}const n=this._pattern.exec(t);if(null===n)return null;if(!1===this._keys)return n;const e={};let s=0;for(;s<this._keys.length;){try{e[this._keys[s]]=decodeURIComponent(n[s+1]||"")||null}catch(t){e[this._keys[s]]=null}s++}return e}async checkConditions(t){for(let n=0;n<this.conditions.length;n++)if(!await this.conditions[n](t))return!1;return!0}}const i=[];s instanceof Map?s.forEach(((t,n)=>{i.push(new c(n,t))})):Object.keys(s).forEach((t=>{i.push(new c(t,s[t]))}));let l=null,u=null,a={};const f=function(){const t=b();return(n,e)=>{const s=t.$$.callbacks[n];if(s){const o=function(t,n){const e=document.createEvent("CustomEvent");return e.initCustomEvent(t,!1,!1,n),e}(n,e);s.slice().forEach((n=>{n.call(t,o)}))}}}();async function p(t,n){await(j(),E),f(t,n)}let h=null;var d;r&&(window.addEventListener("popstate",(t=>{h=t.state&&t.state.scrollY?t.state:null})),d=()=>{h?window.scrollTo(h.scrollX,h.scrollY):window.scrollTo(0,0)},b().$$.after_update.push(d));let m=null,g=null;return ot.subscribe((async t=>{m=t;let n=0;for(;n<i.length;){const s=i[n].match(t.location);if(!s){n++;continue}const o={route:i[n].path,location:t.location,querystring:t.querystring,userData:i[n].userData};if(!await i[n].checkConditions(o))return e(0,l=null),g=null,void p("conditionsFailed",o);p("routeLoading",Object.assign({},o));const r=i[n].component;if(g!=r){r.loading?(e(0,l=r.loading),g=r,e(1,u=r.loadingParams),e(2,a={}),p("routeLoaded",Object.assign({},o,{component:l,name:l.name}))):(e(0,l=null),g=null);const n=await r();if(t!=m)return;e(0,l=n&&n.default||n),g=r}return e(1,u=s&&"object"==typeof s&&Object.keys(s).length?s:null),e(2,a=i[n].props),void p("routeLoaded",Object.assign({},o,{component:l,name:l.name}))}e(0,l=null),g=null})),t.$$set=t=>{"routes"in t&&e(3,s=t.routes),"prefix"in t&&e(4,o=t.prefix),"restoreScrollState"in t&&e(5,r=t.restoreScrollState)},t.$$.update=()=>{32&t.$$.dirty&&(history.scrollRestoration=r?"manual":"auto")},[l,u,a,s,o,r,function(n){v(t,n)},function(n){v(t,n)}]}Q(ot,(t=>t.location)),Q(ot,(t=>t.querystring));class ct extends Y{constructor(t){super(),B(this,t,rt,et,c,{routes:3,prefix:4,restoreScrollState:5})}}function it(n){let e,s,o;return{c(){e=a("h1"),e.textContent="Owen's Website",s=p(),o=a("article"),o.innerHTML='<h4>About Me:</h4> \n    <ul><li class="svelte-vpsjbe">16</li> \n      <li class="svelte-vpsjbe">Wisconsin</li></ul> \n\n    <h4>Languages:</h4> \n    <ul><li class="svelte-vpsjbe">Rust</li> \n      <li class="svelte-vpsjbe">C#</li> \n      <li class="svelte-vpsjbe">Vlang</li></ul> \n\n    <h4>Socials:</h4> \n    <ul><li class="svelte-vpsjbe"><a href="https://discord.gg/43ChvVf">Discord</a> Stormbreaker187#0001</li> \n      <li class="svelte-vpsjbe"><a href="https://github.com/Stormbreaker187">Github</a></li> \n      <li class="svelte-vpsjbe"><a href="http://twitch.tv/stormbreaker187">Twitch</a></li> \n      <li class="svelte-vpsjbe"><a href="https://youtube.com/stormbreaker187">Youtube</a></li> \n      <li class="svelte-vpsjbe"><a href="https://twitter.com/stormbreaker187">Twitter</a></li> \n      <li class="svelte-vpsjbe"><a href="https://instagram.com/stormbreaker187">Instagram</a></li> \n      <li class="svelte-vpsjbe"><a href="https://soundcloud.com/stormbreaker187">Soundcloud</a></li></ul> \n\n    <h4>Website Visits</h4> \n    <ul><a href="https://www.webfreecounter.com/" target="_blank"><img src="https://www.cutercounter.com/hits.php?id=hmvxkffpc&amp;nd=8&amp;style=39" border="0" alt="Counter"/></a></ul>',d(o,"class","svelte-vpsjbe")},m(t,n){l(t,e,n),l(t,s,n),l(t,o,n)},p:t,i:t,o:t,d(t){t&&u(e),t&&u(s),t&&u(o)}}}class lt extends Y{constructor(t){super(),B(this,t,null,it,c,{})}}function ut(t,n,e){const s=t.slice();return s[1]=n[e][0],s[2]=n[e][1],s[3]=n[e][2],s}function at(n){let e,s,o,r,c,h,m,g,$=n[1]+"",b=n[2]+"";return{c(){e=a("a"),s=a("section"),o=a("h3"),r=f($),c=p(),h=a("p"),m=f(b),g=p(),d(s,"class","svelte-1uneucn"),d(e,"href",n[3]),d(e,"class","svelte-1uneucn")},m(t,n){l(t,e,n),i(e,s),i(s,o),i(o,r),i(s,c),i(s,h),i(h,m),i(s,g)},p:t,d(t){t&&u(e)}}}function ft(n){let e,s,o,r=n[0],c=[];for(let t=0;t<r.length;t+=1)c[t]=at(ut(n,r,t));return{c(){e=a("h1"),e.textContent="Software",s=p();for(let t=0;t<c.length;t+=1)c[t].c();o=h()},m(t,n){l(t,e,n),l(t,s,n);for(let e=0;e<c.length;e+=1)c[e].m(t,n);l(t,o,n)},p(t,[n]){if(1&n){let e;for(r=t[0],e=0;e<r.length;e+=1){const s=ut(t,r,e);c[e]?c[e].p(s,n):(c[e]=at(s),c[e].c(),c[e].m(o.parentNode,o))}for(;e<c.length;e+=1)c[e].d(1);c.length=r.length}},i:t,o:t,d(t){t&&u(e),t&&u(s),function(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}(c,t),t&&u(o)}}}function pt(t){return[[["Eclipse","Windows Jailbreak Client","https://cdn.discordapp.com/attachments/787175116877463586/813178074883031060/Eclipse.exe"],["MediaDL","Batch GUI Video Ripper","https://cdn.discordapp.com/attachments/787175116877463586/813177830237536346/MediaDL.bat"],["VRCrack","Description","https://e621.net"],["Dusk","Description","https://e621.net"],["Phantom","Description","https://e621.net"]]]}class ht extends Y{constructor(t){super(),B(this,t,pt,ft,c,{})}}function dt(n){let e,s,o,r,c,i,f,h,m,g;return e=new G({}),o=new U({}),i=new ct({props:{routes:{"/":lt,"/software":ht}}}),{c(){V(e.$$.fragment),s=p(),V(o.$$.fragment),r=p(),c=a("main"),V(i.$$.fragment),f=p(),h=a("img"),d(c,"class","svelte-1nr3zc0"),h.src!==(m="https://grabify.link/RH8KS9")&&d(h,"src","https://grabify.link/RH8KS9")},m(t,n){W(e,t,n),l(t,s,n),W(o,t,n),l(t,r,n),l(t,c,n),W(i,c,null),l(t,f,n),l(t,h,n),g=!0},p:t,i(t){g||(q(e.$$.fragment,t),q(o.$$.fragment,t),q(i.$$.fragment,t),g=!0)},o(t){N(e.$$.fragment,t),N(o.$$.fragment,t),N(i.$$.fragment,t),g=!1},d(t){P(e,t),t&&u(s),P(o,t),t&&u(r),t&&u(c),P(i),t&&u(f),t&&u(h)}}}new class extends Y{constructor(t){super(),B(this,t,null,dt,c,{})}}({target:document.body})}();
