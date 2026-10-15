'use strict';
const $=s=>document.querySelector(s),esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const mem={};let warned=false;
function warn(){if(warned)return;warned=true;const w=$('#warn');w.hidden=false;w.textContent=T('nostore')}
const store={get(k,d){try{const v=localStorage.getItem('p48:'+k);return v==null?d:JSON.parse(v)}catch(e){warn();return k in mem?mem[k]:d}},
set(k,v){mem[k]=v;try{localStorage.setItem('p48:'+k,JSON.stringify(v))}catch(e){warn()}}};
const I={en:{sub:"A reader's guide to power, strategy, human behaviour, and influence.",skip:'Skip to content',bookmarks:'Bookmarks',settings:'Settings',close:'Close',search:'Search laws, summaries, notes…',cont:'Continue Reading',
intro:'About this guide',introT:"Robert Greene's book collects 48 'laws' about power, drawing on history and anecdote. It looks at strategy, influence and how people behave when status is at stake. It may interest managers, students, writers and curious readers. This site gives each law its own page with a short summary, your notes, bookmarks and progress. The laws are the author's perspective: read them critically, with attention to ethics and context.",
prog:'Reading progress',total:'Laws in this edition',done:'Completed',cur:'Current law',none:'None yet',daily:'Law of the Day',read:'Read this law',toc:'Table of contents',unread:'Unread',reading:'In progress',completed:'Completed',
sample:'Sample summary (original, not from the book)',nosum:'No summary written yet for this law.',nobn:'Bengali summary not written yet for this law. English shown below.',bmOn:'Remove bookmark',bmOff:'Bookmark',markDone:'Mark completed',markUn:'Mark unread',prev:'Previous',next:'Next',back:'Contents',
notes:'My notes',addNote:'Save note',edit:'Edit',del:'Delete',delQ:'Delete this note?',noNotes:'No notes yet.',noRes:'No results.',res:'results',reset:'Reset',nobm:'No bookmarks yet.',
size:'Font size',lh:'Line spacing',w:'Content width',theme:'Theme',font:'Font',serif:'Serif',sans:'Sans-serif',light:'Light',sepia:'Sepia',dark:'Dark',defs:'Reset display settings',
rp:'Reset reading progress',rpQ:'Reset all reading progress? Bookmarks and notes are kept.',exp:'Export my data',imp:'Import data',impOk:'Imported.',impBad:'Could not read that file.',
pdf:'Read from my PDF (stays on this device)',pdfPick:'Choose PDF',pdfOff:'PDF page offset',pdfFrom:'From PDF page',pdfN:'Pages',show:'Show pages',pdfErr:'Could not open this PDF.',
nostore:'Browser storage is unavailable: notes, bookmarks and progress will be lost when you close this tab.',
foot:'Public build: titles and original summaries only. Not the book itself; not a complete Bengali translation. Your notes and progress stay in this browser. Export them to keep a backup.',page:'Printed page',pgNA:'unknown — enter PDF page manually',
datalost:'Clearing browser data or switching device removes local notes unless you export them.',saved:'Saved.',bmAdded:'Bookmark added.',bmRem:'Bookmark removed.'},
bn:{sub:'ক্ষমতা, কৌশল, মানুষের আচরণ ও প্রভাব নিয়ে একজন পাঠকের নির্দেশিকা।',skip:'মূল অংশে যান',bookmarks:'বুকমার্ক',settings:'সেটিংস',close:'বন্ধ করুন',search:'সূত্র, সারসংক্ষেপ, নোট খুঁজুন…',cont:'পড়া চালিয়ে যান',
intro:'এই নির্দেশিকা সম্পর্কে',introT:'রবার্ট গ্রিনের বইটিতে ইতিহাস ও কাহিনির আলোকে ক্ষমতা নিয়ে ৪৮টি ‘সূত্র’ সংকলিত হয়েছে। এতে কৌশল, প্রভাব এবং মর্যাদা বিপন্ন হলে মানুষ কেমন আচরণ করে তা আলোচিত। ম্যানেজার, শিক্ষার্থী, লেখক ও আগ্রহী পাঠক এটি কাজে লাগাতে পারেন। এই সাইটে প্রতিটি সূত্রের আলাদা পাতায় থাকে ছোট সারসংক্ষেপ, আপনার নোট, বুকমার্ক ও অগ্রগতি। সূত্রগুলি লেখকের দৃষ্টিভঙ্গি; নীতিবোধ ও প্রেক্ষাপট মাথায় রেখে সমালোচনামূলকভাবে পড়ুন।',
prog:'পড়ার অগ্রগতি',total:'এই সংস্করণে সূত্র',done:'সম্পন্ন',cur:'বর্তমান সূত্র',none:'এখনও নেই',daily:'আজকের সূত্র',read:'এই সূত্র পড়ুন',toc:'সূচিপত্র',unread:'অপঠিত',reading:'চলছে',completed:'সম্পন্ন',
sample:'নমুনা সারসংক্ষেপ (মৌলিক, বই থেকে নেওয়া নয়)',nosum:'এই সূত্রের সারসংক্ষেপ এখনও লেখা হয়নি।',nobn:'এই সূত্রের বাংলা সারসংক্ষেপ এখনও লেখা হয়নি। নিচে ইংরেজি দেখানো হলো।',bmOn:'বুকমার্ক সরান',bmOff:'বুকমার্ক করুন',markDone:'সম্পন্ন চিহ্নিত করুন',markUn:'অপঠিত করুন',prev:'আগের',next:'পরের',back:'সূচিপত্র',
notes:'আমার নোট',addNote:'নোট সংরক্ষণ',edit:'সম্পাদনা',del:'মুছুন',delQ:'এই নোটটি মুছবেন?',noNotes:'এখনও কোনো নোট নেই।',noRes:'কিছু পাওয়া যায়নি।',res:'টি ফলাফল',reset:'রিসেট',nobm:'এখনও কোনো বুকমার্ক নেই।',
size:'অক্ষরের আকার',lh:'লাইনের ব্যবধান',w:'লেখার প্রস্থ',theme:'থিম',font:'ফন্ট',serif:'সেরিফ',sans:'সান্স-সেরিফ',light:'হালকা',sepia:'সেপিয়া',dark:'গাঢ়',defs:'ডিসপ্লে সেটিংস রিসেট',
rp:'পড়ার অগ্রগতি রিসেট',rpQ:'সব অগ্রগতি রিসেট করবেন? বুকমার্ক ও নোট থাকবে।',exp:'আমার ডেটা এক্সপোর্ট',imp:'ডেটা ইমপোর্ট',impOk:'ইমপোর্ট হয়েছে।',impBad:'ফাইলটি পড়া যায়নি।',
pdf:'আমার PDF থেকে পড়ুন (ফাইল এই ডিভাইসেই থাকে)',pdfPick:'PDF বাছুন',pdfOff:'PDF পৃষ্ঠার অফসেট',pdfFrom:'PDF-এর যে পৃষ্ঠা থেকে',pdfN:'পৃষ্ঠা সংখ্যা',show:'পৃষ্ঠা দেখান',pdfErr:'এই PDF খোলা যায়নি।',
nostore:'ব্রাউজার স্টোরেজ পাওয়া যাচ্ছে না: ট্যাব বন্ধ করলে নোট, বুকমার্ক ও অগ্রগতি হারিয়ে যাবে।',
foot:'পাবলিক সংস্করণ: শুধু শিরোনাম ও মৌলিক সারসংক্ষেপ। এটি বইটি নয় এবং সম্পূর্ণ বাংলা অনুবাদও নয়। আপনার নোট ও অগ্রগতি এই ব্রাউজারেই থাকে; ব্যাকআপের জন্য এক্সপোর্ট করুন।',page:'ছাপা পৃষ্ঠা',pgNA:'অজানা — PDF পৃষ্ঠা নিজে লিখুন',
datalost:'ব্রাউজার ডেটা মুছলে বা ডিভাইস বদলালে লোকাল নোট হারাতে পারে, তাই এক্সপোর্ট করে রাখুন।',saved:'সংরক্ষিত।',bmAdded:'বুকমার্ক যোগ হয়েছে।',bmRem:'বুকমার্ক সরানো হয়েছে।'}};
let lang=store.get('lang','en'),S=Object.assign({size:19,lh:1.7,w:660,theme:'sepia',font:'serif'},store.get('set',{})),
BM=store.get('bm',[]),DONE=store.get('done',[]),NOTES=store.get('notes',{}),LAST=store.get('last',null),OFF=store.get('off',23),DATA,Q='',pdfDoc=null;
const T=k=>(I[lang][k]??I.en[k]??k),title=l=>(lang==='bn'&&l.title_bn)||l.title_en,byId=id=>DATA.laws.find(l=>l.id===id);
const num=n=>lang==='bn'?String(n).replace(/\d/g,d=>'০১২৩৪৫৬৭৮৯'[d]):String(n);
const live=m=>{$('#live').textContent='';setTimeout(()=>$('#live').textContent=m,50)};
function status(l){return DONE.includes(l.id)?'completed':(LAST&&LAST.id===l.id)?'reading':'unread'}
function applySet(){const r=document.documentElement;r.dataset.theme=S.theme;r.dataset.font=S.font;r.style.setProperty('--size',S.size+'px');r.style.setProperty('--lh',S.lh);r.style.setProperty('--w',S.w+'px');store.set('set',S)}
function chrome(){document.documentElement.lang=lang;$('#sub').textContent=T('sub');$('#t1').textContent='The 48 Laws of Power';$('#foot').textContent=T('foot');
document.querySelectorAll('[data-i]').forEach(e=>e.textContent=T(e.dataset.i));$('#q').placeholder=T('search');
$('#en').setAttribute('aria-pressed',lang==='en');$('#bn').setAttribute('aria-pressed',lang==='bn')}
function summary(l){const s=lang==='bn'?l.summary_bn:l.summary_en;
if(s)return `<p class="tag">${esc(T('sample'))}</p><p>${esc(s)}</p>`;
if(lang==='bn'&&l.summary_en)return `<p class="tag">${esc(T('nobn'))}</p><p lang="en">${esc(l.summary_en)}</p>`;return `<p><em>${esc(T('nosum'))}</em></p>`}
function item(l,q){const st=status(l);return `<li><span class="n">${num(l.number)}</span><span><a href="#/law/${l.id}">${hl(title(l),q)}</a></span><span class="st" ${BM.includes(l.id)?'':''}>${BM.includes(l.id)?'★ ':''}${T(st==='reading'?'reading':st)}</span></li>`}
function hl(t,q){t=esc(t);if(!q)return t;const re=new RegExp(q.replace(/[.*+?^${}()|[\]\\]/g,'\\$&').replace(/&/g,'&amp;'),'gi');return t.replace(re,m=>`<mark>${m}</mark>`)}
function dayLaw(){const d=new Date(),k=Math.floor(Date.UTC(d.getFullYear(),d.getMonth(),d.getDate())/864e5);return DATA.laws[k%DATA.laws.length]}
function home(){const n=DATA.laws.length,d=DONE.length,pct=Math.round(d/n*100),cur=LAST&&byId(LAST.id),dl=dayLaw();
$('#app').innerHTML=`<section class="read"><h2>${T('intro')}</h2><p>${esc(T('introT'))}</p>
${cur?`<p><a href="#/law/${cur.id}"><button>${T('cont')} — ${num(cur.number)}</button></a></p>`:''}
<div class="card"><h2>${T('prog')}</h2><div class="stats"><span>${T('total')}: ${num(n)}</span><span>${T('done')}: ${num(d)}</span><span>${T('cur')}: ${cur?num(cur.number):T('none')}</span><span>${num(pct)}%</span></div>
<div class="prog" role="progressbar" aria-valuenow="${pct}" aria-valuemin="0" aria-valuemax="100"><i style="width:${pct}%"></i></div></div>
<div class="card"><h2>${T('daily')}</h2><p><strong>${num(dl.number)}. ${esc(title(dl))}</strong></p>${summary(dl)}<a href="#/law/${dl.id}">${T('read')}</a></div>
<h2>${T('toc')}</h2><ol class="toc">${DATA.laws.map(l=>item(l)).join('')}</ol></section>`}
function excerpt(t,q){const i=t.toLowerCase().indexOf(q.toLowerCase());if(i<0)return'';return(i>40?'…':'')+t.slice(Math.max(0,i-40),i+q.length+80)+'…'}
function search(){const q=Q.trim().toLowerCase(),out=[];
if(q)for(const l of DATA.laws){const f=[`${l.number}`,l.title_en,l.title_bn||'',l.summary_en||'',l.summary_bn||'',...(NOTES[l.id]||[]).map(n=>n.text)];
const hit=f.find(x=>x.toLowerCase().includes(q));if(hit)out.push([l,hit])}
$('#app').innerHTML=`<section class="read"><p><a href="#/" id="rs">${T('reset')}</a> · ${num(out.length)} ${T('res')}</p>${out.length?'<ol class="toc">'+out.map(([l,h])=>`<li><span class="n">${num(l.number)}</span><span><a href="#/law/${l.id}">${hl(title(l),Q.trim())}</a><small>${hl(excerpt(h,Q.trim())||'',Q.trim())}</small></span><span></span></li>`).join('')+'</ol>':`<p>${T('noRes')}</p>`}</section>`;
$('#rs').onclick=()=>{Q='';$('#q').value=''}}
function bmList(){const L=DATA.laws.filter(l=>BM.includes(l.id));$('#app').innerHTML=`<section class="read"><h2>${T('bookmarks')}</h2>${L.length?'<ol class="toc">'+L.map(l=>item(l)).join('')+'</ol>':`<p>${T('nobm')}</p>`}</section>`}
function law(id){const l=byId(id);if(!l){location.hash='#/';return}
const i=DATA.laws.indexOf(l),p=DATA.laws[i-1],nx=DATA.laws[i+1],isBm=BM.includes(id),isD=DONE.includes(id);
if(!LAST||LAST.id!==id){LAST={id,scroll:0,date:new Date().toISOString()};store.set('last',LAST)}
const pg=l.printedPage,from=pg?pg+OFF:'';
$('#app').innerHTML=`<article class="read"><p><a href="#/">← ${T('back')}</a></p><h1><span class="tag">${num(l.number)}</span> ${esc(title(l))}</h1>${summary(l)}
<div class="row"><button id="bb" aria-pressed="${isBm}">${isBm?'★ '+T('bmOn'):'☆ '+T('bmOff')}</button><button id="dd">${isD?T('markUn'):T('markDone')}</button></div><hr>
<details id="pd"><summary>${T('pdf')}</summary><p><input type="file" id="pf" accept="application/pdf" aria-label="${T('pdfPick')}"></p>
<p>${T('page')}: ${pg?num(pg):T('pgNA')}</p><label>${T('pdfOff')} <input type="number" id="po" value="${OFF}" style="width:5em"></label>
<label>${T('pdfFrom')} <input type="number" id="pfr" value="${from}" min="1" style="width:5em"></label> <label>${T('pdfN')} <input type="number" id="pn" value="6" min="1" max="20" style="width:4em"></label>
<button id="ps">${T('show')}</button><div id="pdfv"></div></details><hr>
<section aria-labelledby="nh"><h2 id="nh">${T('notes')}</h2><textarea id="nt" aria-label="${T('notes')}"></textarea><div class="row"><button id="ns">${T('addNote')}</button></div><ul id="nl" style="padding:0;list-style:none"></ul><p class="sub">${T('datalost')}</p></section>
<nav class="nav" aria-label="Laws">${p?`<a href="#/law/${p.id}"><button>← ${T('prev')} ${num(p.number)}</button></a>`:'<span></span>'}${nx?`<a href="#/law/${nx.id}"><button>${T('next')} ${num(nx.number)} →</button></a>`:''}</nav></article>`;
$('#bb').onclick=()=>{BM=BM.includes(id)?BM.filter(x=>x!==id):[...BM,id];store.set('bm',BM);live(BM.includes(id)?T('bmAdded'):T('bmRem'));law(id)};
$('#dd').onclick=()=>{DONE=DONE.includes(id)?DONE.filter(x=>x!==id):[...DONE,id];store.set('done',DONE);law(id)};
const nt=$('#nt');nt.value=store.get('draft:'+id,'');nt.oninput=()=>store.set('draft:'+id,nt.value);let edit=null;
function drawNotes(){const a=NOTES[id]||[];$('#nl').innerHTML=a.length?a.map(n=>`<li class="card"><p style="white-space:pre-wrap;margin:0 0 6px">${esc(n.text)}</p><button data-e="${n.id}">${T('edit')}</button> <button data-d="${n.id}">${T('del')}</button></li>`).join(''):`<li>${T('noNotes')}</li>`;
$('#nl').querySelectorAll('[data-e]').forEach(b=>b.onclick=()=>{edit=b.dataset.e;nt.value=a.find(n=>n.id===edit).text;nt.focus()});
$('#nl').querySelectorAll('[data-d]').forEach(b=>b.onclick=()=>{if(confirm(T('delQ'))){NOTES[id]=a.filter(n=>n.id!==b.dataset.d);store.set('notes',NOTES);drawNotes()}})}
$('#ns').onclick=()=>{const t=nt.value.trim();if(!t)return;const a=NOTES[id]=NOTES[id]||[];
if(edit){const n=a.find(x=>x.id===edit);if(n)n.text=t;edit=null}else a.push({id:'n'+Date.now(),text:t,ts:Date.now()});
store.set('notes',NOTES);nt.value='';store.set('draft:'+id,'');drawNotes();live(T('saved'))};drawNotes();
$('#pf').onchange=async e=>{const f=e.target.files[0];if(!f)return;try{await loadPdf();pdfDoc=await pdfjsLib.getDocument({data:await f.arrayBuffer()}).promise}catch(x){$('#pdfv').textContent=T('pdfErr')}};
$('#po').onchange=e=>{OFF=+e.target.value||0;store.set('off',OFF);if(pg)$('#pfr').value=pg+OFF};
$('#ps').onclick=async()=>{const v=$('#pdfv');if(!pdfDoc){v.textContent=T('pdfErr');return}v.innerHTML='';const a=+$('#pfr').value,n=+$('#pn').value;
for(let k=a;k<a+n&&k<=pdfDoc.numPages;k++){const P=await pdfDoc.getPage(k),vp=P.getViewport({scale:1.4}),c=document.createElement('canvas');c.width=vp.width;c.height=vp.height;c.setAttribute('role','img');c.setAttribute('aria-label','PDF page '+k);v.appendChild(c);await P.render({canvasContext:c.getContext('2d'),viewport:vp}).promise}};
requestAnimationFrame(()=>{window.scrollTo(0,LAST.id===id&&LAST.scroll?LAST.scroll*(document.documentElement.scrollHeight-innerHeight):0)})}
function loadPdf(){return window.pdfjsLib?Promise.resolve():new Promise((ok,no)=>{const s=document.createElement('script');s.src='https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js';s.onload=()=>{pdfjsLib.GlobalWorkerOptions.workerSrc='https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';ok()};s.onerror=no;document.head.appendChild(s)})}
let tick;addEventListener('scroll',()=>{const h=document.documentElement.scrollHeight-innerHeight,f=h>0?scrollY/h:0;$('#bar').style.width=(f*100)+'%';
if(location.hash.startsWith('#/law/')&&LAST){clearTimeout(tick);tick=setTimeout(()=>{LAST.scroll=f;LAST.date=new Date().toISOString();store.set('last',LAST)},300)}},{passive:true});
function route(){const h=location.hash||'#/';chrome();$('#bar').style.width='0';
if(h.startsWith('#/law/'))law(h.slice(6));else if(h==='#/search')search();else if(h==='#/bookmarks')bmList();else home();
if(!h.startsWith('#/law/'))window.scrollTo(0,0)}
function settings(){$('#dt').textContent=T('settings');const o=(v,t)=>`<option value="${v}" ${S.theme===v||S.font===v?'selected':''}>${T(t)}</option>`;
$('#dbody').innerHTML=`<label>${T('size')}<input type="range" id="s1" min="15" max="30" value="${S.size}"></label><label>${T('lh')}<input type="range" id="s2" min="1.3" max="2.2" step=".05" value="${S.lh}"></label><label>${T('w')}<input type="range" id="s3" min="420" max="900" step="20" value="${S.w}"></label>
<label>${T('theme')} <select id="s4">${o('light','light')}${o('sepia','sepia')}${o('dark','dark')}</select></label><label>${T('font')} <select id="s5">${o('serif','serif')}${o('sans','sans')}</select></label>
<div class="row"><button type="button" id="r1">${T('defs')}</button><button type="button" id="r2">${T('rp')}</button><button type="button" id="ex">${T('exp')}</button></div><label>${T('imp')} <input type="file" id="im" accept="application/json"></label><p class="sub">${T('datalost')}</p>`;
const up=()=>{S={size:+$('#s1').value,lh:+$('#s2').value,w:+$('#s3').value,theme:$('#s4').value,font:$('#s5').value};applySet()};
['s1','s2','s3','s4','s5'].forEach(i=>$('#'+i).oninput=up);
$('#r1').onclick=()=>{S={size:19,lh:1.7,w:660,theme:'sepia',font:'serif'};applySet();settings()};
$('#r2').onclick=()=>{if(confirm(T('rpQ'))){DONE=[];LAST=null;store.set('done',DONE);store.set('last',null);route();$('#dlg').close()}};
$('#ex').onclick=()=>{const b=new Blob([JSON.stringify({bookmarks:BM,done:DONE,notes:NOTES,last:LAST,settings:S},null,1)],{type:'application/json'}),a=document.createElement('a');a.href=URL.createObjectURL(b);a.download='reading-data-48laws.json';a.click();URL.revokeObjectURL(a.href)};
$('#im').onchange=async e=>{try{const d=JSON.parse(await e.target.files[0].text());if(Array.isArray(d.bookmarks)){BM=d.bookmarks;store.set('bm',BM)}if(Array.isArray(d.done)){DONE=d.done;store.set('done',DONE)}if(d.notes&&typeof d.notes==='object'){NOTES=d.notes;store.set('notes',NOTES)}if(d.last){LAST=d.last;store.set('last',LAST)}live(T('impOk'));route()}catch(x){live(T('impBad'))}};
$('#dlg').showModal()}
function setLang(l){lang=l;store.set('lang',l);route()}
$('#en').onclick=()=>setLang('en');$('#bn').onclick=()=>setLang('bn');$('#st').onclick=settings;$('#bm').onclick=()=>location.hash='#/bookmarks';
$('#q').oninput=e=>{Q=e.target.value;if(!Q){location.hash='#/';return}if(location.hash==='#/search')search();else location.hash='#/search'};
addEventListener('hashchange',route);
fetch('data/laws.json').then(r=>r.json()).then(d=>{DATA=d;applySet();route()}).catch(()=>{$('#app').textContent='Could not load data/laws.json (open via a local web server, not file://).'});
