"use strict";function changeTheme(o){o.classList.toggle("onoffswitch_checked");const e=document.getElementsByClassName("theme");for(let o of e)(o.classList.contains("theme_color_project-inverse")||o.classList.contains("theme_color_project-default"))&&(o.classList.toggle("theme_color_project-inverse"),o.classList.toggle("theme_color_project-default"))}function toggleAccordion(o){let e=o.childNodes;for(let o of e)o.classList.contains("e-accordion__more")&&(o.style.display=o.style.display?"":"block")}const bodyElement=document.body;console.log("bodyELement:"),console.log(bodyElement),bodyElement&&bodyElement.addEventListener("click",(function(o){console.log("event:"),console.log(o),console.log("event.target:"),console.log(o.target);const e=o.target.closest(".onoffswitch"),t=o.target.closest(".e-accordion__short");console.log("onoffButton:"),console.log(e),console.log("accordionShort:"),console.log(t),e?(console.log("go in onoffButton"),changeTheme(e)):t&&(console.log("go in accordionShort"),toggleAccordion(t.parentNode))}),!0);