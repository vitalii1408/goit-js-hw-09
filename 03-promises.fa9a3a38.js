function e(e,t){return new Promise(((o,n)=>{const s=Math.random()>.3;setTimeout((()=>{s?o({position:e,delay:t}):n({position:e,delay:t})}),t)}))}document.getElementById("promiseForm").addEventListener("submit",(function(t){t.preventDefault();const o=new FormData(t.target),n=parseInt(o.get("delay")),s=parseInt(o.get("step")),i=parseInt(o.get("amount"));for(let t=1;t<=i;t++){e(t,n+(t-1)*s).then((({position:e,delay:t})=>{console.log(`✅ Fulfilled promise ${e} in ${t}ms`)})).catch((({position:e,delay:t})=>{console.log(`❌ Rejected promise ${e} in ${t}ms`)}))}}));
//# sourceMappingURL=03-promises.fa9a3a38.js.map
