import{S as d,i as n}from"./assets/vendor-8c59ed88.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&a(r)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();async function f(i){const o="https://pixabay.com",s="/api/",a="?key=43261756-f7e91f342fa994673ba6d269c",e=`&q=${i}&image_type=photo&orientation=horizontal&safesearch=true`,t=o+s+a+e;try{const r=await fetch(t);if(!r.ok)throw new Error(r.statusText);return await r.json()}catch(r){throw console.error("Error fetching images:",r),r}}const c=document.querySelector(".gallery");function m(i){const o=i.map(({webformatURL:s,largeImageURL:a,tags:e,likes:t,views:r,comments:l,downloads:u})=>` 
      <li class="gallery-item">
      <span class="loader hidden"></span>
    <a class="gallery-link" href="${a}">
    <img class="gallery-img" src="${s}" alt="${e}">
    <div class="image-description">
    <p>likes: ${t}</p>
    <p>views: ${r}</p>    
    <p>comments: ${l}</p>
    <p>downloads: ${u}</p> 
    </div>
    </a>
    </li>`);c.insertAdjacentHTML("beforeend",o.join(""))}const h=new d(".gallery a");h.refresh();const p=document.querySelector(".js-search"),y=document.querySelector(".loader");p.addEventListener("submit",g);async function g(i){i.preventDefault();const o=i.target.elements.query.value;c.innerHTML="";try{const s=await f(o);s.hits.length===0||o===""?n.show({title:"Error",message:'"Sorry, there are no images matching your search query. Please try again!"',position:"topRight",color:"#da1418",timeout:2e3}):m(s.hits)}catch{n.show({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",color:"#da1418",timeout:2e3})}finally{y.classList.add("hidden")}}
//# sourceMappingURL=commonHelpers.js.map
