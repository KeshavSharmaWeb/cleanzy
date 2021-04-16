((function(){var findAncestor=function(el,selector){while((el=el.parentElement)&&!((el.matches||el.matchesSelector).call(el,selector))){}
return el};var fields=document.querySelectorAll('input[name="searchfield"][data-search-input]');fields.forEach(function(field){var form=findAncestor(field,'form[data-simplesearch-form]'),min=field.getAttribute('min')||!1,location=field.getAttribute('data-search-input'),separator=field.getAttribute('data-search-separator');if(min){var invalid=field.getAttribute('data-search-invalid');field.addEventListener('keydown',function(){field.setCustomValidity(field.value.length>=min?'':invalid)})}
form.addEventListener('submit',function(event){event.preventDefault();if(field.checkValidity()){window.location.href=location+separator+field.value}})})})());function attachDecorationListeners(){var elements=document.getElementsByTagName('a');for(var i=0,len=elements.length;i<len;i++){elements[i].addEventListener("click",function(element){let e=element.target
e.setAttribute("href",decorateTransitionURL(e.getAttribute("href"),e))})}}
function addMenuToggleListener(){let menuElement=document.getElementsByTagName("header")
let menuToggleElements=document.getElementsByClassName("hamburger")
if(menuToggleElements.length){for(let element of menuToggleElements){element.addEventListener("click",function(){menuElement[0].classList.toggle('shown')},{passive:!0})}}}
function addLangSwitcherToggleListener(){let menuToggleElements=document.getElementsByClassName("dropup")
if(menuToggleElements.length){for(let element of menuToggleElements){element.addEventListener("click",function(){if(element.classList.contains("shown")){element.classList.remove("shown")}else{element.classList.add("shown")}},{passive:!0})}}}
function underlineWhereNeeded(){var elements=document.getElementsByClassName("underline-when-loaded");for(let element of elements){element.classList.remove("underline-when-loaded")}}
function localizeNumbers(){let elements=document.querySelectorAll("[data-localize-number]")
for(let element of elements){element.innerHTML=parseInt(element.innerHTML).toLocaleString()}}
window.addEventListener('load',function(){addMenuToggleListener()
attachDecorationListeners()
underlineWhereNeeded()
localizeNumbers()
addLangSwitcherToggleListener()})