import{a as A,t as T,s as S}from"../chunks/disclose-version.B-KRnSYq.js";import"../chunks/legacy.BzZ1NXj_.js";import{a2 as ae,ag as te,T as C,a3 as j,V as ie,C as re,ad as G,ai as se,aj as D,a8 as R,a1 as z,as as M,ak as U,af as J,al as le,z as F,at as ne,au as oe,ac as de,av as ce,aw as ge,_ as ve,a9 as fe,Z as ue,O as he,w as O,ax as me,ay as pe,az as xe,a6 as be,aA as _e,B as V,aB as ye,n as m,o as h,s as b,k as K,g as k,p as we,j as ke,m as Le}from"../chunks/runtime.BPwkeZwP.js";import{b as Ae}from"../chunks/props.Dkt1kjuS.js";import{p as L}from"../chunks/props.DgVtLhqR.js";function X(t,e){return e}function Te(t,e,a,s){for(var l=[],r=e.length,o=0;o<r;o++)oe(e[o].e,l,!0);var g=r>0&&l.length===0&&a!==null;if(g){var u=a.parentNode;de(u),u.append(a),s.clear(),E(t,e[0].prev,e[r-1].next)}ce(l,()=>{for(var v=0;v<r;v++){var i=e[v];g||(s.delete(i.k),E(t,i.prev,i.next)),ge(i.e,!g)}})}function Q(t,e,a,s,l,r=null){var o=t,g={flags:e,items:new Map,first:null};{var u=t;o=C?j(ve(u)):u.appendChild(ae())}C&&ie();var v=null,i=!1;te(()=>{var c=a(),d=re(c)?c:c==null?[]:G(c),n=d.length;if(i&&n===0)return;i=n===0;let p=!1;if(C){var w=o.data===se;w!==(n===0)&&(o=D(),j(o),R(!1),p=!0)}if(C){for(var _=null,f,x=0;x<n;x++){if(z.nodeType===8&&z.data===fe){o=z,p=!0,R(!1);break}var H=d[x],I=s(H,x);f=q(z,g,_,null,H,I,x,l,e),g.items.set(I,f),_=f}n>0&&j(D())}if(!C){var y=ue;Ce(d,g,o,l,e,(y.f&M)!==0,s)}r!==null&&(n===0?v?U(v):v=J(()=>r(o)):v!==null&&le(v,()=>{v=null})),p&&R(!0),a()}),C&&(o=z)}function Ce(t,e,a,s,l,r,o){var g=t.length,u=e.items,v=e.first,i=v,c,d=null,n=[],p=[],w,_,f,x;for(x=0;x<g;x+=1){if(w=t[x],_=o(w,x),f=u.get(_),f===void 0){var H=i?i.e.nodes_start:a;d=q(H,e,d,d===null?e.first:d.next,w,_,x,s,l),u.set(_,d),n=[],p=[],i=d.next;continue}if(Ee(f,w,x),f.e.f&M&&U(f.e),f!==i){if(c!==void 0&&c.has(f)){if(n.length<p.length){var I=p[0],y;d=I.prev;var W=n[0],N=n[n.length-1];for(y=0;y<n.length;y+=1)P(n[y],I,a);for(y=0;y<p.length;y+=1)c.delete(p[y]);E(e,W.prev,N.next),E(e,d,W),E(e,N,I),i=I,d=N,x-=1,n=[],p=[]}else c.delete(f),P(f,i,a),E(e,f.prev,f.next),E(e,f,d===null?e.first:d.next),E(e,d,f),d=f;continue}for(n=[],p=[];i!==null&&i.k!==_;)(r||!(i.e.f&M))&&(c??(c=new Set)).add(i),p.push(i),i=i.next;if(i===null)continue;f=i}n.push(f),d=f,i=f.next}if(i!==null||c!==void 0){for(var Z=c===void 0?[]:G(c);i!==null;)(r||!(i.e.f&M))&&Z.push(i),i=i.next;var $=Z.length;if($>0){var ee=g===0?a:null;Te(e,Z,ee,u)}}F.first=e.first&&e.first.e,F.last=d&&d.e}function Ee(t,e,a,s){ne(t.v,e),t.i=a}function q(t,e,a,s,l,r,o,g,u){var v=(u&pe)!==0,i=(u&xe)===0,c=v?i?he(l):O(l):l,d=u&me?O(o):o,n={i:d,v:c,k:r,a:null,e:null,prev:a,next:s};try{return n.e=J(()=>g(t,c,d),C),n.e.prev=a&&a.e,n.e.next=s&&s.e,a===null?e.first=n:(a.next=n,a.e.next=n.e),s!==null&&(s.prev=n,s.e.prev=n.e),n}finally{}}function P(t,e,a){for(var s=t.next?t.next.e.nodes_start:a,l=e?e.e.nodes_start:a,r=t.e.nodes_start;r!==s;){var o=be(r);l.before(r),r=o}}function E(t,e,a){e===null?t.first=a:(e.next=a,e.e.next=a&&a.e),a!==null&&(a.prev=e,a.e.prev=e&&e.e)}function B(t,e,a,s){var l=t.__attributes??(t.__attributes={});C&&(l[e]=t.getAttribute(e),e==="src"||e==="srcset"||e==="href"&&t.nodeName==="LINK")||l[e]!==(l[e]=a)&&(e==="style"&&"__styles"in t&&(t.__styles={}),e==="loading"&&(t[_e]=a),a==null?t.removeAttribute(e):typeof a!="string"&&Ie(t).includes(e)?t[e]=a:t.setAttribute(e,a))}var Y=new Map;function Ie(t){var e=Y.get(t.nodeName);if(e)return e;Y.set(t.nodeName,e=[]);for(var a,s=V(t),l=Element.prototype;l!==s;){a=ye(s);for(var r in a)a[r].set&&e.push(r);s=V(s)}return e}var ze=T('<div class="avatar -ml-8"><div class="mask mask-hexagon w-24"><img src="images/jay.png"></div></div>');function He(t){var e=ze();A(t,e)}var Me=T(`<div class="max-w-3xl my-4"><h2 class="text-base/7 font-semibold text-secondary">Jay Smith</h2> <h1 class="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">legal engineer, developer and founder</h1> <p class="mt-6 text-base text-zinc-600 dark:text-zinc-400">I’m, Jay, the Fresh Prince of LegalTech. I am a legal engineer, developer, and founder passionate about creating
		innovative LegalTech solutions that enhance efficiency, improve accessibility, and drive meaningful change in the
		legal industry. By blending technology with strategic insight, I help legal teams and businesses deliver smarter,
		more effective services that empower both clients and teams.</p> <div class="mt-6 flex gap-6"><a class="group -m-1 p-1" aria-label="Follow on X" href="#"><svg viewBox="0 0 24 24" aria-hidden="true" class="h-6 w-6 fill-secondary transition group-hover:fill-accent"><path d="M13.3174 10.7749L19.1457 4H17.7646L12.7039 9.88256L8.66193 4H4L10.1122 12.8955L4 20H5.38119L10.7254 13.7878L14.994 20H19.656L13.3171 10.7749H13.3174ZM11.4257 12.9738L10.8064 12.0881L5.87886 5.03974H8.00029L11.9769 10.728L12.5962 11.6137L17.7652 19.0075H15.6438L11.4257 12.9742V12.9738Z"></path></svg></a><a class="group -m-1 p-1" aria-label="Follow on Instagram" href="#"><svg viewBox="0 0 24 24" aria-hidden="true" class="h-6 w-6 fill-secondary transition group-hover:fill-accent"><path d="M12 3c-2.444 0-2.75.01-3.71.054-.959.044-1.613.196-2.185.418A4.412 4.412 0 0 0 4.51 4.511c-.5.5-.809 1.002-1.039 1.594-.222.572-.374 1.226-.418 2.184C3.01 9.25 3 9.556 3 12s.01 2.75.054 3.71c.044.959.196 1.613.418 2.185.23.592.538 1.094 1.039 1.595.5.5 1.002.808 1.594 1.038.572.222 1.226.374 2.184.418C9.25 20.99 9.556 21 12 21s2.75-.01 3.71-.054c.959-.044 1.613-.196 2.185-.419a4.412 4.412 0 0 0 1.595-1.038c.5-.5.808-1.002 1.038-1.594.222-.572.374-1.226.418-2.184.044-.96.054-1.267.054-3.711s-.01-2.75-.054-3.71c-.044-.959-.196-1.613-.419-2.185A4.412 4.412 0 0 0 19.49 4.51c-.5-.5-1.002-.809-1.594-1.039-.572-.222-1.226-.374-2.184-.418C14.75 3.01 14.444 3 12 3Zm0 1.622c2.403 0 2.688.009 3.637.052.877.04 1.354.187 1.67.31.421.163.72.358 1.036.673.315.315.51.615.673 1.035.123.317.27.794.31 1.671.043.95.052 1.234.052 3.637s-.009 2.688-.052 3.637c-.04.877-.187 1.354-.31 1.67-.163.421-.358.72-.673 1.036a2.79 2.79 0 0 1-1.035.673c-.317.123-.794.27-1.671.31-.95.043-1.234.052-3.637.052s-2.688-.009-3.637-.052c-.877-.04-1.354-.187-1.67-.31a2.789 2.789 0 0 1-1.036-.673 2.79 2.79 0 0 1-.673-1.035c-.123-.317-.27-.794-.31-1.671-.043-.95-.052-1.234-.052-3.637s.009-2.688.052-3.637c.04-.877.187-1.354.31-1.67.163-.421.358-.72.673-1.036.315-.315.615-.51 1.035-.673.317-.123.794-.27 1.671-.31.95-.043 1.234-.052 3.637-.052Z"></path><path d="M12 15a3 3 0 1 1 0-6 3 3 0 0 1 0 6Zm0-7.622a4.622 4.622 0 1 0 0 9.244 4.622 4.622 0 0 0 0-9.244Zm5.884-.182a1.08 1.08 0 1 1-2.16 0 1.08 1.08 0 0 1 2.16 0Z"></path></svg></a><a class="group -m-1 p-1" aria-label="Follow on GitHub" href="#"><svg viewBox="0 0 24 24" aria-hidden="true" class="h-6 w-6 fill-secondary transition group-hover:fill-accent"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.475 2 2 6.588 2 12.253c0 4.537 2.862 8.369 6.838 9.727.5.09.687-.218.687-.487 0-.243-.013-1.05-.013-1.91C7 20.059 6.35 18.957 6.15 18.38c-.113-.295-.6-1.205-1.025-1.448-.35-.192-.85-.667-.013-.68.788-.012 1.35.744 1.538 1.051.9 1.551 2.338 1.116 2.912.846.088-.666.35-1.115.638-1.371-2.225-.256-4.55-1.14-4.55-5.062 0-1.115.387-2.038 1.025-2.756-.1-.256-.45-1.307.1-2.717 0 0 .837-.269 2.75 1.051.8-.23 1.65-.346 2.5-.346.85 0 1.7.115 2.5.346 1.912-1.333 2.75-1.05 2.75-1.05.55 1.409.2 2.46.1 2.716.637.718 1.025 1.628 1.025 2.756 0 3.934-2.337 4.806-4.562 5.062.362.32.675.936.675 1.897 0 1.371-.013 2.473-.013 2.82 0 .268.188.589.688.486a10.039 10.039 0 0 0 4.932-3.74A10.447 10.447 0 0 0 22 12.253C22 6.588 17.525 2 12 2Z"></path></svg></a><a class="group -m-1 p-1" aria-label="Follow on LinkedIn" href="#"><svg viewBox="0 0 24 24" aria-hidden="true" class="h-6 w-6 fill-secondary transition group-hover:fill-accent"><path d="M18.335 18.339H15.67v-4.177c0-.996-.02-2.278-1.39-2.278-1.389 0-1.601 1.084-1.601 2.205v4.25h-2.666V9.75h2.56v1.17h.035c.358-.674 1.228-1.387 2.528-1.387 2.7 0 3.2 1.778 3.2 4.091v4.715zM7.003 8.575a1.546 1.546 0 01-1.548-1.549 1.548 1.548 0 111.547 1.549zm1.336 9.764H5.666V9.75H8.34v8.589zM19.67 3H4.329C3.593 3 3 3.58 3 4.297v15.406C3 20.42 3.594 21 4.328 21h15.338C20.4 21 21 20.42 21 19.703V4.297C21 3.58 20.4 3 19.666 3h.003z"></path></svg></a></div></div>`);function Be(t){var e=Me();A(t,e)}var Se=T('<div class="carousel rounded-box"><div class="carousel-item"><img class="max-h-96" src="images/where_does_your_story_really_begin.jpg" alt="Burger"></div> <div class="carousel-item"><img class="max-h-96" src="images/hugs.jpg" alt="Burger"></div> <div class="carousel-item"><img class="max-h-96" src="images/a_purposeful_journey.jpg" alt="Burger"></div> <div class="carousel-item"><img class="max-h-96" src="images/i_am_speaking.jpg" alt="Burger"></div></div>');function Ne(t){var e=Se();A(t,e)}var Ze=T(`<div class="bg-base-100 pb-24" id="about"><div class="mx-auto max-w-2xl lg:max-w-4xl"><h2 class="text-base/7 font-semibold text-secondary">Allow me to introduce myself</h2> <p class="text-4xl max-w-2xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100l">this is the work I am here to do</p> <div class="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2"><div class="flex p-px lg:col-span-4"><div class="overflow-hidden rounded-lg bg-gray-800 ring-1 ring-white/15 max-lg:rounded-t-[2rem] lg:rounded-tl-[2rem]"><div class="p-10"><h3 class="text-sm/4 font-semibold text-secondary">Legal Operations and Engineering</h3> <p class="mt-2 text-lg font-medium tracking-tight text-white">Transforming Law</p> <p class="mt-2 max-w-lg text-sm/6 text-gray-400">Leader in process improvement, integrating LegalTech tools to streamline legal operations and boost firm
							efficiency, with experience overseeing projects at top law firms.</p></div></div></div> <div class="flex p-px lg:col-span-2"><div class="overflow-hidden rounded-lg bg-gray-800 ring-1 ring-white/15 lg:rounded-tr-[2rem]"><div class="p-10"><h3 class="text-sm/4 font-semibold text-secondary">Software</h3> <p class="mt-2 text-lg font-medium tracking-tight text-white">Intergrating Technology</p> <p class="mt-2 max-w-lg text-sm/6 text-gray-400">Skilled in multiple programming languages and identifying / procuring market-leading tools to create
							scalable legal tech solutions.</p></div></div></div> <div class="flex p-px lg:col-span-2"><div class="overflow-hidden rounded-lg bg-gray-800 ring-1 ring-white/15 lg:rounded-bl-[2rem]"><div class="p-10"><h3 class="text-sm/4 font-semibold text-secondary">Entrepreneurship</h3> <p class="mt-2 text-lg font-medium tracking-tight text-white">Creating Change</p> <p class="mt-2 max-w-lg text-sm/6 text-gray-400">Founder of SenseCheck Technologies, taking a disjointed process and creating an AML platform and
							communication tool for Estate Planning lawyers.</p></div></div></div> <div class="flex p-px lg:col-span-4"><div class="overflow-hidden rounded-lg bg-gray-800 ring-1 ring-white/15 max-lg:rounded-b-[2rem] lg:rounded-br-[2rem]"><div class="p-10"><h3 class="text-sm/4 font-semibold text-gray-400">Performance</h3> <p class="mt-2 text-lg font-medium tracking-tight text-white">Lightning-fast builds</p> <p class="mt-2 max-w-lg text-sm/6 text-gray-400">Sed congue eros non finibus molestie. Vestibulum euismod augue vel commodo vulputate. Maecenas at augue
							sed elit dictum vulputate.</p></div></div></div></div></div></div>`);function je(t){var e=Ze();A(t,e)}var Re=T('<div class="card col-span-2 bg-base-200 hover:bg-base-300 w-96 shadow"><div class="card-body"><h2 class="card-title"> </h2> <p> </p> <div class="card-actions justify-end"><a target="_blank" class="badge badge-secondary badge-outline">Read article</a></div></div></div>');function We(t,e){let a=L(e,"title",8),s=L(e,"blurb",8),l=L(e,"link",8);L(e,"date",8);var r=Re(),o=m(r),g=m(o),u=m(g,!0);h(g);var v=b(g,2),i=m(v,!0);h(v);var c=b(v,2),d=m(c);h(c),h(o),h(r),K(()=>{S(u,a()),S(i,s()),B(d,"href",l())}),A(t,r)}var De=T('<div class="max-w-2xl my-4 pb-24" id="articles"><h2 class="text-base/7 font-semibold text-secondary">Articles</h2> <h1 class="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">here are some things I wrote</h1> <p class="my-6 text-base text-zinc-600 dark:text-zinc-400"></p> <div class="z-10 grid grid-cols-4 gap-10 lg:gap-36"></div></div>');function Fe(t){const e=[{title:"What Can LegalOps Learn from Implementation Science?",link:"https://www.colinslevy.com/post/what-can-legalops-learn-from-implementation-science",blurb:"I wrote something with Colin",date:"14 October 2024"},{title:"Why Lawyers (Should) Make Great Developers",link:"https://medium.datadriveninvestor.com/why-lawyers-should-make-great-developers-155f73304d0",blurb:"This article divided opinion.",date:"16 November 2018"}];var a=De(),s=b(m(a),6);Q(s,5,()=>e,X,(l,r)=>{We(l,{get title(){return k(r).title},get link(){return k(r).link},get blurb(){return k(r).blurb},get date(){return k(r).date}})}),h(s),h(a),A(t,a)}var Oe=T('<div class="card bg-base-100 w-96 shadow z-1"><figure><img></figure> <div class="card-body"><h2 class="card-title"> </h2> <p> </p> <div class="card-actions justify-end"><a target="_blank"><div class="badge badge-outline badge-accent">Listen on Spotify</div></a></div></div></div>');function Ve(t,e){let a=L(e,"title",8),s=L(e,"blurb",8),l=L(e,"image",8),r=L(e,"imageAlt",8),o=L(e,"spotify",8);var g=Oe(),u=m(g),v=m(u);h(u);var i=b(u,2),c=m(i),d=m(c,!0);h(c);var n=b(c,2),p=m(n,!0);h(n);var w=b(n,2),_=m(w);h(w),h(i),h(g),K(()=>{B(v,"src",l()),B(v,"alt",r()),S(d,a()),S(p,s()),B(_,"href",o())}),A(t,g)}var Pe=T('<div class="max-w-2xl my-4 pb-24" id="speaking"><h2 class="text-base/7 font-semibold text-secondary">Listen up</h2> <h1 class="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">sharing my voice online and in person</h1> <div class="grid grid-cols-1 lg:grid-cols-2 lg:gap-36 gap-12 pt-8"></div></div>');function Ye(t){const e=[{title:"Re-Engineering Legal",image:"/images/wired_wig.jpeg",imageAlt:"The Wired Wig Podcast",blurb:"I joined Annabel Pemberton on her podcast The Wired Wig to talk about Legal Engineering",spotify:"https://open.spotify.com/episode/0ZPRzMjBhZEN0ZyuZIFGHa?si=t7b_1LgzQUKrnBUciTTffg"},{title:"You Want To Do What? Legal Engineer",image:"/images/you_want_to_do_what.jpeg",imageAlt:"You Want to Do What Podcast",blurb:"Ever wondered what it's like to be a legal Engineer? I joined Dan to talk about what it involves",spotify:"https://open.spotify.com/show/27xjpoJbHysKhR93yMF0sU?si=2b2340e0de4f4431"}];var a=Pe(),s=b(m(a),4);Q(s,5,()=>e,X,(l,r)=>{Ve(l,{get title(){return k(r).title},get image(){return k(r).image},get imageAlt(){return k(r).imageAlt},get blurb(){return k(r).blurb},get spotify(){return k(r).spotify}})}),h(s),h(a),A(t,a)}var Ge=T('<div class="flex ml-4 justify-left items-center"><!></div> <!> <div class="pb-24"><!></div> <!> <!> <!>',1);function qe(t,e){we(e,!1);const a=!0;var s=Ge(),l=ke(s),r=m(l);He(r),h(l);var o=b(l,2);Be(o);var g=b(o,2),u=m(g);Ne(u),h(g);var v=b(g,2);je(v);var i=b(v,2);Fe(i);var c=b(i,2);return Ye(c),A(t,s),Ae(e,"prerender",a),Le({prerender:a})}export{qe as component};