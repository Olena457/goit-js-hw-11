import{S as d,i as n}from"./assets/vendor-8c59ed88.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&a(r)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();async function p(i){const o="https://pixabay.com",s="/api/",a="?key=43261756-f7e91f342fa994673ba6d269c",e=`&q=${i}&image_type=photo&orientation=horizontal&safesearch=true`,t=o+s+a+e;try{const r=await fetch(t);if(!r.ok)throw new Error(r.statusText);return await r.json()}catch(r){throw console.error("Error fetching images:",r),r}}const l=document.querySelector(".gallery");function f(i){const o=i.map(({webformatURL:s,largeImageURL:a,tags:e,likes:t,views:r,comments:u,downloads:m})=>` 
      <li class="gallery-item">
    <a class="gallery-link" href="${a}">
    <img class="gallery-image" src="${s}" alt="${e}">
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
      ${u}
    </p>
    <p class='caption-item'>
      <b>Downloads</b>
      ${m}
    </p>
  </div>
    </li>`);l.insertAdjacentHTML("beforeend",o.join(""))}const h=new d(".gallery a"),y=document.querySelector(".js-search");let c=document.querySelector(".loader");y.addEventListener("submit",g);async function g(i){i.preventDefault();const o=i.target.elements.query.value;if(o===""){n.show({title:"Error",message:"Please enter a search query!",position:"topRight",color:"#da1418",timeout:2e3});return}c.classList.remove("hidden"),l.innerHTML="";try{const s=await p(o);s.hits.length===0?n.show({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",color:"#da1418",timeout:2e3}):(f(s.hits),h.refresh())}catch{n.show({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",color:"#da1418",timeout:2e3})}finally{c.classList.add("hidden")}}
//# sourceMappingURL=commonHelpers.js.map
