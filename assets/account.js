(()=>{"use strict";function e(e=document.body,d="js-"){const s=[...e.querySelectorAll(d?`[class*="${d}"]`:"*")],t=d?"classList":"dataset";return s.reduce(((e,s)=>([].slice.call(d?s[t]:Object.entries(s[t])).forEach((t=>{let n;d&&t.slice(0,d.length)===d?n=t.slice(d.length,t.length):d||([n]=t),n&&(e[n]=e.hasOwnProperty(n)?e[n].constructor===Array?e[n].concat(s):[e[n],s]:s)})),e)),{})}const d=window.component((d=>{const{loginForm:s,toForgot:t,toLogin:n,forgotForm:o,forgotErrors:i,forgotSuccess:a}=e(d,null);(i||a)&&(s.classList.add("hidden"),o.classList.remove("hidden")),t.addEventListener("click",(e=>{e.preventDefault(),s.classList.add("hidden"),o.classList.remove("hidden")})),n.addEventListener("click",(e=>{e.preventDefault(),s.classList.remove("hidden"),o.classList.add("hidden")}))})),s=window.component((d=>{const{addAddressButton:s,resetPageButton:t,editAddressButton:n,addAddress:o,info:i,addresses:a,editAddresses:c,editAddressForm:r,accountPageSwitcher:l}=e(d,null);l.addEventListener("change",(()=>{window.location.href=l.value}));const w=e=>{e.preventDefault(),i.classList.remove("hidden"),a.classList.remove("hidden"),o.classList.add("hidden"),c.classList.add("hidden"),[].concat(r).forEach((e=>e.classList.add("hidden"))),window.scrollTo(0,0)};s&&s.addEventListener("click",(e=>{e.preventDefault(),o.classList.remove("hidden"),i.classList.add("hidden"),a.classList.add("hidden"),window.scrollTo(0,0)})),t&&[].concat(t).forEach((e=>{e.addEventListener("click",w)})),n&&[].concat(n).forEach((e=>{e.addEventListener("click",(d=>{d.preventDefault();const{addressId:s}=e.dataset;a.classList.add("hidden"),i.classList.add("hidden");const t=[].concat(r).find((e=>e.dataset.addressId===s));c.classList.remove("hidden"),t.classList.remove("hidden"),window.scrollTo(0,0)}))}))})),t=window.component((d=>{const{deleteAddressButton:s,deleteAddressModal:t,closeModal:n,deleteAddressConfirm:o}=e(d,null);n&&[].concat(n).forEach((e=>e.addEventListener("click",(e=>{e.preventDefault(),t.classList.remove("open")})))),s&&s.addEventListener("click",(e=>{e.preventDefault(),t.classList.add("open")})),o&&o.addEventListener("click",(()=>{document.getElementById(`delete-address-form--${o.dataset.addressId}`).submit()}))})),n=window.component((async d=>{var s;await(s="Keen slider",new Promise((e=>{window?.hasLoaded?.scripts?.[s]?e():window.app.on(`${s}:loaded`,e)})));const{orderSlider:t}=e(d,null);t&&[].concat(t).forEach((e=>{new KeenSlider(e,{breakpoints:{"(min-width: 1024px)":{slides:{perView:5.5,spacing:16}}},slides:{perView:2.8,spacing:8}})}))})),o=e=>e.split(".").reduce(((e,d)=>e?.[d]),window?.Phill?.theme?.strings)||`Missing translation for ${e} in window.Phill`,i={login:d,account:s,address:t,orders:n,hero:window.component((d=>{const{button:s}=e(d,null),t=o("product.add_to_cart"),n=o("cart.quantity");let i=0;s.addEventListener("click",(()=>{i++,s.innerHTML=`I'm tapped ${i} times`,console.log(t,n)}))}))};window.app.add(i),window.app.mount()})();