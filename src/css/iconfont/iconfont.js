(function(window){var svgSprite="<svg>"+""+'<symbol id="icon-radio-on" viewBox="0 0 1024 1024">'+""+'<path d="M512 65.984C266.08 65.984 65.984 266.08 65.984 512c0 245.952 200.064 446.016 446.016 446.016 245.952 0 446.016-200.064 446.016-446.016 0-245.92-200.064-446.016-446.016-446.016z m0 828.032c-210.656 0-382.016-171.392-382.016-382.016 0-210.656 171.36-382.016 382.016-382.016 210.624 0 382.016 171.36 382.016 382.016 0 210.624-171.392 382.016-382.016 382.016zM512 352c-88.224 0-160 71.776-160 160s71.776 160 160 160 160-71.776 160-160-71.776-160-160-160z"  ></path>'+""+"</symbol>"+""+'<symbol id="icon-radio-off" viewBox="0 0 1024 1024">'+""+'<path d="M512 96a416 416 0 1 1-416 416 416.448 416.448 0 0 1 416-416m0-32a448 448 0 1 0 448 448 448 448 0 0 0-448-448z"  ></path>'+""+"</symbol>"+""+'<symbol id="icon-check-off" viewBox="0 0 1496 1024">'+""+'<path d="M1081.6 90.666667H414.266667c-48.666667 0-88.266667 39.6-88.266667 88.266666v667.466667c0 48.666667 39.6 88.266667 88.266667 88.266667h667.466666c48.666667 0 88.266667-39.6 88.266667-88.266667V178.933333c0-48.666667-39.733333-88.266667-88.4-88.266666z m30.133333 755.733333c0 16.533333-13.466667 30.133333-30.133333 30.133333H414.266667c-16.533333 0-30.133333-13.466667-30.133334-30.133333V178.933333c0-16.533333 13.466667-30.133333 30.133334-30.133333h667.466666c16.533333 0 30.133333 13.466667 30.133334 30.133333l-0.133334 667.466667z"  ></path>'+""+"</symbol>"+""+'<symbol id="icon-check-on" viewBox="0 0 1496 1024">'+""+'<path d="M1081.6 90.666667H414.266667c-48.666667 0-88.266667 39.6-88.266667 88.266666v667.466667c0 48.666667 39.6 88.266667 88.266667 88.266667h667.466666c48.666667 0 88.266667-39.6 88.266667-88.266667V178.933333c0-48.666667-39.733333-88.266667-88.4-88.266666zM699.2 775.2L443.733333 515.466667l65.333334-52.533334L656.8 578.666667c60.266667-71.866667 194.666667-215.066667 379.866667-328.533334l15.733333 36.133334C882.266667 442.666667 743.066667 662.666667 699.2 775.2z"  ></path>'+""+"</symbol>"+""+"</svg>";var script=function(){var scripts=document.getElementsByTagName("script");return scripts[scripts.length-1]}();var shouldInjectCss=script.getAttribute("data-injectcss");var ready=function(fn){if(document.addEventListener){if(~["complete","loaded","interactive"].indexOf(document.readyState)){setTimeout(fn,0)}else{var loadFn=function(){document.removeEventListener("DOMContentLoaded",loadFn,false);fn()};document.addEventListener("DOMContentLoaded",loadFn,false)}}else if(document.attachEvent){IEContentLoaded(window,fn)}function IEContentLoaded(w,fn){var d=w.document,done=false,init=function(){if(!done){done=true;fn()}};var polling=function(){try{d.documentElement.doScroll("left")}catch(e){setTimeout(polling,50);return}init()};polling();d.onreadystatechange=function(){if(d.readyState=="complete"){d.onreadystatechange=null;init()}}}};var before=function(el,target){target.parentNode.insertBefore(el,target)};var prepend=function(el,target){if(target.firstChild){before(el,target.firstChild)}else{target.appendChild(el)}};function appendSvg(){var div,svg;div=document.createElement("div");div.innerHTML=svgSprite;svgSprite=null;svg=div.getElementsByTagName("svg")[0];if(svg){svg.setAttribute("aria-hidden","true");svg.style.position="absolute";svg.style.width=0;svg.style.height=0;svg.style.overflow="hidden";prepend(svg,document.body)}}if(shouldInjectCss&&!window.__iconfont__svg__cssinject__){window.__iconfont__svg__cssinject__=true;try{document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")}catch(e){console&&console.log(e)}}ready(appendSvg)})(window)