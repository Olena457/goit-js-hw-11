import{S as p,i as n}from"./assets/vendor-8c59ed88.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&a(r)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();async function f(o){const s="https://pixabay.com",i="/api/",a="?key=43261756-f7e91f342fa994673ba6d269c",e=`&q=${o}&image_type=photo&orientation=horizontal&safesearch=true`,t=s+i+a+e;try{const r=await fetch(t);if(!r.ok)throw new Error(r.statusText);return await r.json()}catch(r){throw console.error("Error fetching images:",r),r}}const c=document.querySelector(".gallery");function h(o){const s=o.map(({webformatURL:i,largeImageURL:a,tags:e,likes:t,views:r,comments:d,downloads:m})=>` 
      <li class="gallery-item">
    <a class="gallery-link" href="${a}">
    <img class="gallery-image" src="${i}" alt="${e}">
    </a>
    <div class='caption'>
    <p class='caption-item'>
      <b>Likes</b>
      ${t}
    </p>
    <p class='caption-item'>
      <b>Views</b>
      ${r}
    </p>
    <p class='caption-item'>
      <b>Comments</b>
      ${d}
    </p>
    <p class='caption-item'>
      <b>Downloads</b>
      ${m}
    </p>
  </div>
    </li>`);c.insertAdjacentHTML("beforeend",s.join(""))}const u=new p(".gallery a");u.refresh();c.addEventListener("click",o=>{o.target.classList.contains("gallery-image")&&(o.preventDefault(),u.open())});const g=document.querySelector(".js-search");let l=document.querySelector(".cover-loading");g.addEventListener("submit",y);async function y(o){o.preventDefault();const s=o.target.elements.query.value;window.addEventListener("load",()=>{if(s===""){n.show({title:"Error",message:"Please enter a search query!",position:"topRight",color:"#da1418",timeout:2e3});return}else l.classList.remove("hidden")}),c.innerHTML="";try{const i=await f(s);i.hits.length===0?n.show({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",color:"#da1418",timeout:2e3}):h(i.hits)}catch{n.show({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",color:"#da1418",timeout:2e3})}finally{l.classList.add("hidden")}}
//# sourceMappingURL=commonHelpers.js.map
