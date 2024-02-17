(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function c(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=c(e);fetch(e.href,t)}})();async function i(){try{return await(await fetch("https://api.quotable.io/quotes/random")).json()}catch(o){throw new Error(o)}}i().then(o=>{const r=`
    <article>
      <h1>${o[0].content}</h1>
      <p>-${o[0].author}</p>
    </article>
    <button id="get-quote" class="get-quote">Get Quote</button>
  `;document.body.innerHTML=r,document.body.addEventListener("click",async c=>{if(c.target.matches("#get-quote")){const n=await i(),e=`
        <article>
          <h1>${n[0].content}</h1>
          <p>-${n[0].author}</p>
        </article>
        <button id="get-quote" class="get-quote">Get Quote</button>
      `;document.body.innerHTML=e}})}).catch(o=>console.error(o));i();
