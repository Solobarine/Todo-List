(()=>{"use strict";const t=[],e=document.querySelector(".task-name"),s=document.querySelector("#addBtn"),n=(document.querySelector(".clear-button"),document.querySelector(".show-tasks")),c=localStorage.getItem("listOfTasks");c&&t.push(...JSON.parse(c)),(()=>{n.innerHTML="";for(let e=0;e<t.length;e++)n.innerHTML+=`<div class="shell">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <input type="checkbox" class="checkbox"/>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <p class="task-item">${t[e].a}</p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <button class="remBtn" type="button">Remove</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t </div>`})(),s.addEventListener("click",(()=>{const s=e.value,c=t.length;var l;((e,s,n)=>{const c={a:e,b:"false",c:n};t.push(c),console.log(t)})(s,0,c),l=c,n.innerHTML+=`<div class="shell">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <input type="checkbox" class="checkbox"/>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <p class="task-item">${t[l].a}</p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <button class="remBtn" type="button">Remove</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t </div>`,localStorage.setItem("listOfTasks",JSON.stringify(t))})),n.addEventListener("click",(e=>{if(e.target.classList.contains("remBtn")){const c=e.target.parentElement;s=t.findIndex((t=>t.a===c.querySelector(".task-item").innerText)),t.splice(s,1),n.removeChild(c),(()=>{for(let e=0;e<t.length;e++)t[e].c=e})(),localStorage.setItem("listOfTasks",JSON.stringify(t))}var s}))})();