!function(){var t,e=document.querySelector("[data-start]"),a=document.querySelector("[data-stop]");a.disabled=!0,e.addEventListener("click",(function(){t||(e.disabled=!0,a.disabled=!1,t=setInterval((function(){document.body.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,"0"))}),1e3))})),a.addEventListener("click",(function(){e.disabled=!1,a.disabled=!0,clearInterval(t),t=null}))}();
//# sourceMappingURL=01-color-switcher.50ee4e0d.js.map
