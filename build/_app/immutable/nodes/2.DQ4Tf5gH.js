import{a as T,t as I,s as H}from"../chunks/disclose-version.CI561iZc.js";import"../chunks/legacy.De5L8cyQ.js";import{J as q,Y as Q,x as L,K as D,y as X,D as ee,V as Y,Z as te,_ as R,P as N,I as S,$ as B,a0 as Z,X as J,a1 as ae,F as O,a2 as ie,a3 as se,U as re,a4 as le,a5 as ne,G as oe,Q as de,E as ce,v as ge,a6 as P,a7 as ve,a8 as he,a9 as pe,N as fe,aa as me,ab as F,ac as ue,s as w,n as x,o as m,k as xe,g as C,p as _e,j as be,m as we}from"../chunks/runtime.2LRnr3Yg.js";import{b as ye}from"../chunks/props.esC4RJ0_.js";function ke(t,e){return e}function Ae(t,e,a,r){for(var l=[],d=e.length,c=0;c<d;c++)se(e[c].e,l,!0);var g=d>0&&l.length===0&&a!==null;if(g){var p=a.parentNode;re(p),p.append(a),r.clear(),E(t,e[0].prev,e[d-1].next)}le(l,()=>{for(var v=0;v<d;v++){var i=e[v];g||(r.delete(i.k),E(t,i.prev,i.next)),ne(i.e,!g)}})}function Le(t,e,a,r,l,d=null){var c=t,g={flags:e,items:new Map,first:null};{var p=t;c=L?D(oe(p)):p.appendChild(q())}L&&X();var v=null,i=!1;Q(()=>{var h=a(),n=ee(h)?h:h==null?[]:Y(h),s=n.length;if(i&&s===0)return;i=s===0;let u=!1;if(L){var y=c.data===te;y!==(s===0)&&(c=R(),D(c),N(!1),u=!0)}if(L){for(var b=null,o,f=0;f<s;f++){if(S.nodeType===8&&S.data===de){c=S,u=!0,N(!1);break}var A=n[f],k=r(A,f);o=U(S,g,b,null,A,k,f,l,e),g.items.set(k,o),b=o}s>0&&D(R())}if(!L){var _=ce;Ee(n,g,c,l,e,(_.f&B)!==0,r)}d!==null&&(s===0?v?Z(v):v=J(()=>d(c)):v!==null&&ae(v,()=>{v=null})),u&&N(!0)}),L&&(c=S)}function Ee(t,e,a,r,l,d,c){var g=t.length,p=e.items,v=e.first,i=v,h,n=null,s=[],u=[],y,b,o,f;for(f=0;f<g;f+=1){if(y=t[f],b=c(y,f),o=p.get(b),o===void 0){var A=i?i.e.nodes_start:a;n=U(A,e,n,n===null?e.first:n.next,y,b,f,r,l),p.set(b,n),s=[],u=[],i=n.next;continue}if(Te(o,y,f),o.e.f&B&&Z(o.e),o!==i){if(h!==void 0&&h.has(o)){if(s.length<u.length){var k=u[0],_;n=k.prev;var M=s[0],W=s[s.length-1];for(_=0;_<s.length;_+=1)V(s[_],k,a);for(_=0;_<u.length;_+=1)h.delete(u[_]);E(e,M.prev,W.next),E(e,n,M),E(e,W,k),i=k,n=W,f-=1,s=[],u=[]}else h.delete(o),V(o,i,a),E(e,o.prev,o.next),E(e,o,n===null?e.first:n.next),E(e,n,o),n=o;continue}for(s=[],u=[];i!==null&&i.k!==b;)(d||!(i.e.f&B))&&(h??(h=new Set)).add(i),u.push(i),i=i.next;if(i===null)continue;o=i}s.push(o),n=o,i=o.next}if(i!==null||h!==void 0){for(var z=h===void 0?[]:Y(h);i!==null;)(d||!(i.e.f&B))&&z.push(i),i=i.next;var K=z.length;if(K>0){var $=g===0?a:null;Ae(e,z,$,p)}}O.first=e.first&&e.first.e,O.last=n&&n.e}function Te(t,e,a,r){ie(t.v,e),t.i=a}function U(t,e,a,r,l,d,c,g,p){var v=(p&he)!==0,i=(p&pe)===0,h=v?i?ge(l):P(l):l,n=p&ve?P(c):c,s={i:n,v:h,k:d,a:null,e:null,prev:a,next:r};try{return s.e=J(()=>g(t,h,n),L),s.e.prev=a&&a.e,s.e.next=r&&r.e,a===null?e.first=s:(a.next=s,a.e.next=s.e),r!==null&&(r.prev=s,r.e.prev=s.e),s}finally{}}function V(t,e,a){for(var r=t.next?t.next.e.nodes_start:a,l=e?e.e.nodes_start:a,d=t.e.nodes_start;d!==r;){var c=fe(d);l.before(d),d=c}}function E(t,e,a){e===null?t.first=a:(e.next=a,e.e.next=a&&a.e),a!==null&&(a.prev=e,a.e.prev=e&&e.e)}function j(t,e,a,r){var l=t.__attributes??(t.__attributes={});L&&(l[e]=t.getAttribute(e),e==="src"||e==="srcset"||e==="href"&&t.nodeName==="LINK")||l[e]!==(l[e]=a)&&(e==="style"&&"__styles"in t&&(t.__styles={}),e==="loading"&&(t[me]=a),a==null?t.removeAttribute(e):typeof a!="string"&&Ie(t).includes(e)?t[e]=a:t.setAttribute(e,a))}var G=new Map;function Ie(t){var e=G.get(t.nodeName);if(e)return e;G.set(t.nodeName,e=[]);for(var a,r=F(t),l=Element.prototype;l!==r;){a=ue(r);for(var d in a)a[d].set&&e.push(d);r=F(r)}return e}var Ce=I('<div class="avatar -ml-8"><div class="mask mask-hexagon w-24"><img src="images/jay.png"></div></div>');function Se(t){var e=Ce();T(t,e)}var Me=I(`<div class="max-w-3xl my-4"><h2 class="text-base/7 font-semibold text-secondary">Jay Smith</h2> <h1 class="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">legal engineer, developer and founder</h1> <p class="mt-6 text-base text-zinc-600 dark:text-zinc-400">I’m, Jay, the Fresh Prince of LegalTech. I am a legal engineer, developer, and founder passionate about creating
		innovative LegalTech solutions that enhance efficiency, improve accessibility, and drive meaningful change in the
		legal industry. By blending technology with strategic insight, I help legal teams and businesses deliver smarter,
		more effective services that empower both clients and teams.</p> <div class="mt-6 flex gap-6"><a class="group -m-1 p-1" aria-label="Follow on GitHub" href="https://github.com/thisisthejay" target="_blank"><svg viewBox="0 0 24 24" aria-hidden="true" class="h-6 w-6 fill-secondary transition group-hover:fill-accent"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.475 2 2 6.588 2 12.253c0 4.537 2.862 8.369 6.838 9.727.5.09.687-.218.687-.487 0-.243-.013-1.05-.013-1.91C7 20.059 6.35 18.957 6.15 18.38c-.113-.295-.6-1.205-1.025-1.448-.35-.192-.85-.667-.013-.68.788-.012 1.35.744 1.538 1.051.9 1.551 2.338 1.116 2.912.846.088-.666.35-1.115.638-1.371-2.225-.256-4.55-1.14-4.55-5.062 0-1.115.387-2.038 1.025-2.756-.1-.256-.45-1.307.1-2.717 0 0 .837-.269 2.75 1.051.8-.23 1.65-.346 2.5-.346.85 0 1.7.115 2.5.346 1.912-1.333 2.75-1.05 2.75-1.05.55 1.409.2 2.46.1 2.716.637.718 1.025 1.628 1.025 2.756 0 3.934-2.337 4.806-4.562 5.062.362.32.675.936.675 1.897 0 1.371-.013 2.473-.013 2.82 0 .268.188.589.688.486a10.039 10.039 0 0 0 4.932-3.74A10.447 10.447 0 0 0 22 12.253C22 6.588 17.525 2 12 2Z"></path></svg></a><a class="group -m-1 p-1" aria-label="Follow on LinkedIn" href="https://www.linkedin.com/in/jermainepaulsmith/" target="_blank"><svg viewBox="0 0 24 24" aria-hidden="true" class="h-6 w-6 fill-secondary transition group-hover:fill-accent"><path d="M18.335 18.339H15.67v-4.177c0-.996-.02-2.278-1.39-2.278-1.389 0-1.601 1.084-1.601 2.205v4.25h-2.666V9.75h2.56v1.17h.035c.358-.674 1.228-1.387 2.528-1.387 2.7 0 3.2 1.778 3.2 4.091v4.715zM7.003 8.575a1.546 1.546 0 01-1.548-1.549 1.548 1.548 0 111.547 1.549zm1.336 9.764H5.666V9.75H8.34v8.589zM19.67 3H4.329C3.593 3 3 3.58 3 4.297v15.406C3 20.42 3.594 21 4.328 21h15.338C20.4 21 21 20.42 21 19.703V4.297C21 3.58 20.4 3 19.666 3h.003z"></path></svg></a></div></div>`);function Be(t){var e=Me();T(t,e)}var We=I('<div class="carousel rounded-box" id="item1"><div class="carousel-item"><img class="max-h-96" src="images/where_does_your_story_really_begin.jpg" alt="Burger"></div> <div class="carousel-item" id="item2"><img class="max-h-96" src="images/hugs.jpg" alt="Burger"></div> <div class="carousel-item" id="item3"><img class="max-h-96" src="images/a_purposeful_journey.jpg" alt="Burger"></div> <div class="carousel-item" id="item4"><img class="max-h-96" src="images/i_am_speaking.jpg" alt="Burger"></div></div>');function ze(t){var e=We();T(t,e)}var He=I(`<div class="bg-base-100 pb-24" id="about"><div class="mx-auto max-w-2xl lg:max-w-4xl"><h2 class="text-base/7 font-semibold text-secondary">Allow me to introduce myself</h2> <p class="text-4xl max-w-2xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100l">this is the work I am here to do</p> <div class="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2"><div class="flex p-px lg:col-span-4"><div class="overflow-hidden rounded-lg bg-gray-800 ring-1 ring-white/15 max-lg:rounded-t-[2rem] lg:rounded-tl-[2rem]"><div class="p-10"><h3 class="text-sm/4 font-semibold text-secondary">Legal Operations and Engineering</h3> <p class="mt-2 text-lg font-medium tracking-tight text-white">Transforming Law</p> <p class="mt-2 max-w-lg text-sm/6 text-gray-400">Leader in process improvement, integrating LegalTech tools to streamline legal operations and boost firm
							efficiency, with experience overseeing projects at top law firms.</p> <dl class="grid grid-cols-1 gap-1 mt-2"><dt class="text-accent text-xs">Head of Legal Operations</dt> <dt class="text-accent text-xs">Senior Legal Operations Manager</dt> <dt class="text-accent text-xs">Legal Engineer</dt></dl></div></div></div> <div class="flex p-px lg:col-span-2"><div class="overflow-hidden rounded-lg bg-gray-800 ring-1 ring-white/15 lg:rounded-tr-[2rem]"><div class="p-10"><h3 class="text-sm/4 font-semibold text-secondary">Software</h3> <p class="mt-2 text-lg font-medium tracking-tight text-white">Intergrating Technology</p> <p class="mt-2 max-w-lg text-sm/6 text-gray-400">Skilled in multiple programming languages and identifying / procuring market-leading tools to create
							scalable legal tech solutions.</p> <dl class="grid grid-cols-1 gap-1 mt-2"><dt class="text-accent text-xs">BCS Certificate in Requirements Engineering</dt></dl></div></div></div> <div class="flex p-px lg:col-span-2"><div class="overflow-hidden rounded-lg bg-gray-800 ring-1 ring-white/15 lg:rounded-bl-[2rem]"><div class="p-10"><h3 class="text-sm/4 font-semibold text-secondary">Entrepreneurship</h3> <p class="mt-2 text-lg font-medium tracking-tight text-white">Creating Change</p> <p class="mt-2 max-w-lg text-sm/6 text-gray-400">Founder of SenseCheck Technologies, taking a disjointed process and creating an AML platform and
							communication tool for Estate Planning lawyers.</p> <dl class="grid grid-cols-1 gap-1 mt-2"><dt class="text-accent text-xs">Series A in 2024</dt></dl></div></div></div> <div class="flex p-px lg:col-span-4"><div class="overflow-hidden rounded-lg bg-gray-800 ring-1 ring-white/15 max-lg:rounded-b-[2rem] lg:rounded-br-[2rem]"><div class="p-10"><h3 class="text-sm/4 font-semibold text-secondary">Intelligence</h3> <p class="mt-2 text-lg font-medium tracking-tight text-white">Building for the future</p> <p class="mt-2 max-w-lg text-sm/6 text-gray-400">Focused on using AI to improve drafting, advice and legal operations. Leveraging AI with the right
							opportunities.</p> <dl class="grid grid-cols-1 gap-1 mt-2"><dt class="text-accent text-xs">Standford Graduate Business School Certificate in AI Essentials</dt></dl></div></div></div></div></div></div>`);function De(t){var e=He();T(t,e)}var Ne=I('<tr class="hover text-xs lg:text-sm"><td><div class="flex items-center gap-3"><div class="avatar hidden sm:block"><div class="mask mask-squircle h-12 w-12"><img></div></div> <div><div class="font-bold"> </div></div></div></td><td> </td><td> </td><th><a target="_blank"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6"><path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"></path></svg></a></th></tr>'),je=I('<div class="max-w-4xl my-4 mx-auto pb-24" id="speaking"><h2 class="text-base/7 font-semibold text-secondary">Listen up</h2> <h1 class="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">sharing my voice online and in person</h1> <div class="overflow-x-auto mt-6"><table class="table"><thead><tr><th>Channel</th><th>Title</th><th>Platform</th><th>Link</th></tr></thead><tbody></tbody></table></div></div>');function Re(t){const e=[{title:"Wired Wig",episode:"Re-Engineering Legal",image:"/images/wired_wig.jpeg",imageAlt:"The Wired Wig Podcast",blurb:"I joined Annabel Pemberton on her podcast The Wired Wig to talk about Legal Engineering",platform:"Spotify",link:"https://open.spotify.com/episode/0ZPRzMjBhZEN0ZyuZIFGHa?si=t7b_1LgzQUKrnBUciTTffg"},{title:"You Want To Do What?",episode:"Legal Engineer",image:"/images/you_want_to_do_what.jpeg",imageAlt:"You Want to Do What Podcast",blurb:"Ever wondered what it's like to be a legal Engineer? I joined Dan to talk about what it involves",platform:"Spotify",link:"https://open.spotify.com/show/27xjpoJbHysKhR93yMF0sU?si=2b2340e0de4f4431"},{title:"Colin Levy",episode:"What Can LegalOps Learn from Implementation Science?",image:"/images/colin.png",imageAlt:"Colin S Levy",blurb:"I wrote something with Colin",link:"https://www.colinslevy.com/post/what-can-legalops-learn-from-implementation-science",platform:"Blog",date:"14 October 2024"},{title:"Data Driven Investor",episode:"Why Lawyers (Should) Make Great Developers",image:"/images/ddi.png",imageAlt:"Data Driven Investor",blurb:"This article divided opinion.",link:"https://medium.datadriveninvestor.com/why-lawyers-should-make-great-developers-155f73304d0",platform:"Medium",date:"16 November 2018"},{title:"LegalTech in the South West",episode:"A Purposeful Journey",image:"/images/ltitsw.png",imageAlt:"LegalTech in the South West",blurb:"Spoke at this event",link:"https://ltinsw.com/",platform:"Event",date:"October 2024"},{title:"Bristol + Bath LegalTech",episode:"We R LegalTech",image:"/images/bblt.jpg",imageAlt:"We R LegalTech",blurb:"Spoke at this event",link:"https://www.bblegaltech.com/event/we-r-legaltech-festival-2024/",platform:"Event",date:"October 2024"}];var a=je(),r=w(x(a),4),l=x(r),d=w(x(l));Le(d,5,()=>e,ke,(c,g)=>{var p=Ne(),v=x(p),i=x(v),h=x(i),n=x(h),s=x(n);m(n),m(h);var u=w(h,2),y=x(u),b=x(y,!0);m(y),m(u),m(i),m(v);var o=w(v),f=x(o,!0);m(o);var A=w(o),k=x(A,!0);m(A);var _=w(A),M=x(_);m(_),m(p),xe(()=>{j(s,"src",C(g).image),j(s,"alt",C(g).imageAlt),H(b,C(g).title),H(f,C(g).episode),H(k,C(g).platform),j(M,"href",C(g).link)}),T(c,p)}),m(d),m(l),m(r),m(a),T(t,a)}var Oe=I('<div class="flex ml-4 justify-left items-center"><!></div> <!> <div class="pb-24"><!></div> <!> <!>',1);function Ye(t,e){_e(e,!1);const a=!0;var r=Oe(),l=be(r),d=x(l);Se(d),m(l);var c=w(l,2);Be(c);var g=w(c,2),p=x(g);ze(p),m(g);var v=w(g,2);De(v);var i=w(v,2);return Re(i),T(t,r),ye(e,"prerender",a),we({prerender:a})}export{Ye as component};