!function(t){var e={};function n(i){if(e[i])return e[i].exports;var o=e[i]={i:i,l:!1,exports:{}};return t[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(i,o,function(e){return t[e]}.bind(null,o));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=11)}([function(t,e,n){"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n=function(t,e){var n=t[1]||"",i=t[3];if(!i)return n;if(e&&"function"==typeof btoa){var o=(s=i,a=btoa(unescape(encodeURIComponent(JSON.stringify(s)))),c="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(a),"/*# ".concat(c," */")),r=i.sources.map((function(t){return"/*# sourceURL=".concat(i.sourceRoot).concat(t," */")}));return[n].concat(r).concat([o]).join("\n")}var s,a,c;return[n].join("\n")}(e,t);return e[2]?"@media ".concat(e[2],"{").concat(n,"}"):n})).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var i={},o=0;o<this.length;o++){var r=this[o][0];null!=r&&(i[r]=!0)}for(var s=0;s<t.length;s++){var a=t[s];null!=a[0]&&i[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="(".concat(a[2],") and (").concat(n,")")),e.push(a))}},e}},function(t,e,n){"use strict";var i,o={},r=function(){return void 0===i&&(i=Boolean(window&&document&&document.all&&!window.atob)),i},s=function(){var t={};return function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}t[e]=n}return t[e]}}();function a(t,e){for(var n=[],i={},o=0;o<t.length;o++){var r=t[o],s=e.base?r[0]+e.base:r[0],a={css:r[1],media:r[2],sourceMap:r[3]};i[s]?i[s].parts.push(a):n.push(i[s]={id:s,parts:[a]})}return n}function c(t,e){for(var n=0;n<t.length;n++){var i=t[n],r=o[i.id],s=0;if(r){for(r.refs++;s<r.parts.length;s++)r.parts[s](i.parts[s]);for(;s<i.parts.length;s++)r.parts.push(y(i.parts[s],e))}else{for(var a=[];s<i.parts.length;s++)a.push(y(i.parts[s],e));o[i.id]={id:i.id,refs:1,parts:a}}}}function u(t){var e=document.createElement("style");if(void 0===t.attributes.nonce){var i=n.nc;i&&(t.attributes.nonce=i)}if(Object.keys(t.attributes).forEach((function(n){e.setAttribute(n,t.attributes[n])})),"function"==typeof t.insert)t.insert(e);else{var o=s(t.insert||"head");if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(e)}return e}var l,f=(l=[],function(t,e){return l[t]=e,l.filter(Boolean).join("\n")});function p(t,e,n,i){var o=n?"":i.css;if(t.styleSheet)t.styleSheet.cssText=f(e,o);else{var r=document.createTextNode(o),s=t.childNodes;s[e]&&t.removeChild(s[e]),s.length?t.insertBefore(r,s[e]):t.appendChild(r)}}function h(t,e,n){var i=n.css,o=n.media,r=n.sourceMap;if(o&&t.setAttribute("media",o),r&&btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),t.styleSheet)t.styleSheet.cssText=i;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(i))}}var d=null,A=0;function y(t,e){var n,i,o;if(e.singleton){var r=A++;n=d||(d=u(e)),i=p.bind(null,n,r,!1),o=p.bind(null,n,r,!0)}else n=u(e),i=h.bind(null,n,e),o=function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(n)};return i(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;i(t=e)}else o()}}t.exports=function(t,e){(e=e||{}).attributes="object"==typeof e.attributes?e.attributes:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=r());var n=a(t,e);return c(n,e),function(t){for(var i=[],r=0;r<n.length;r++){var s=n[r],u=o[s.id];u&&(u.refs--,i.push(u))}t&&c(a(t,e),e);for(var l=0;l<i.length;l++){var f=i[l];if(0===f.refs){for(var p=0;p<f.parts.length;p++)f.parts[p]();delete o[f.id]}}}}},function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAyCAYAAAAus5mQAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAKKADAAQAAAABAAAAMgAAAABQtumPAAAAHGlET1QAAAACAAAAAAAAABkAAAAoAAAAGQAAABkAAAEftGqX2AAAAOtJREFUaAXk1UEKwkAMBdDeHzyMXkFcunAndNmVpxj5iw/p4JT8NJONQhgoTvL4KbosCZ/H7dJGldA+3oKo7X1vo8J34hNO3MTgEap/Xo5UcMSWIT24z/ZqKOJ4TkcqOCJ76DRkFEcoU8SZjvTgMJiY0TkFmYUjOhXpxXnSIxBnClLBqcAU5GygRWKW9J+h4iIJWiDuS8gIsAwJ3Pq87l5kDPcUUlHL9nWlWA2UVk1cZYKlwIz3ED1+rtqmF00wCnSlmAWMInGPNTXBDCB67JB9emdWzBTUn5vDNf8lMLJqpl+yYg5TVs07FvgFAAD//38Apo8AAAEXSURBVM3USQ7CMAwF0N5f4gycAS7AArFEgh0Sy644RcoHfeS0zuCQJq0UJXSwH7/DcDnu3O20d8/rwRvj4+xqjdd4d6mh9YJtaAFE880DmZAG5bH53DTBeXNC5/vl7ygQz6Q8ucfaA679opT8wQVwa8gsYM9brQK3lGI2sFeKQaCWYmsk+kWBPZHAZQFDyLXT9IDDe0OUwGiDJ2tzybctdY3s87nFKWAsRRZLNbUcZ80fLgfYCkkcZg9YC4nClrTkuVFcLjAnSTaSzVNrXsN5kR6A2HBAe1G0fSxmmQmNXRPEfYnrI//CMUVLkpbbHsKhXzI5Jsi5FdIMI7A0Te15De0rSk4CuWYha6oaTNZi/aqzbFC6toAmEiwPPFhr7tIAAAAASUVORK5CYII="},function(t,e){t.exports="data:image/png;base64,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"},function(t,e,n){var i=n(5);"string"==typeof i&&(i=[[t.i,i,""]]);var o={insert:"head",singleton:!1};n(1)(i,o);i.locals&&(t.exports=i.locals)},function(t,e,n){(t.exports=n(0)(!1)).push([t.i,"html, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n\tbackground-color: transparent;\n\tcolor: inherit;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}",""])},function(t,e,n){var i=n(7);"string"==typeof i&&(i=[[t.i,i,""]]);var o={insert:"head",singleton:!1};n(1)(i,o);i.locals&&(t.exports=i.locals)},function(t,e,n){e=t.exports=n(0)(!1);var i=n(8)(n(9));e.push([t.i,"\nhtml {\n\n}\n\nbody {\n    display: flex;\n    flex-direction: column;\n    background-color: black;\n    font-family: 'Open Sans', sans-serif;\n}\n\nmain {\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    background-image: linear-gradient(#232829, black);\n    padding-top: 100px;\n    width: 100%;\n}\n\naside {\n    display: flex;\n    width: 100%;\n    flex-direction: column;\n    align-items: center;\n    width: 400px;\n}\n\n#vivari {\n    border: 2px solid lightgray;\n    background-color: darkslategrey;\n    background-image: url("+i+");\n    background-size: 800px 500px;\n}\n\nh1 {\n    color: palegoldenrod;\n    font-size: 50px;\n    /* margin: 10px; */\n    font-family: 'Mansalva', cursive;\n    text-shadow: 0px 0px 20px rgba(255,254,232,0.6);\n}\n\nli {\n    font-size: 20px;\n    color: dimgray;\n}\n\na {\n    font-size: 20px;\n    color: dimgray;\n\n    transition-property: text-shadow, color;\n    transition-duration: .2s;\n}\n\na:hover {\n    color: palegoldenrod;\n    text-shadow: 0px 0px 5px rgba(255,254,232, 0.6);\n}\n\na:active {\n    text-shadow: 0px 0px 10px rgba(255,254,232);\n}\n\n\nfooter ul {\n    width: 1200px;\n    margin: auto;\n    margin-top: 80px;\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    \n    opacity: 0;\n    transition-property: opacity;\n    transition-duration: 2s;\n}\n\nfooter ul.vis {\n    opacity: 1\n}\n\narticle {\n    color: palegoldenrod;\n    text-shadow: 0px 0px 10px rgba(255,254,232, 0.8);\n    font-size: 20px;\n    text-align: center;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-evenly;\n    height: 400px;\n}\n\narticle p {\n    opacity: 0;\n    transition-property: opacity;\n    transition-duration: 2s;\n}\n\narticle p.vis {\n    opacity: 1;\n}\n\n@media only screen and (min-width: 1200px) {\n    #instructionsbox.debug {\n        width: 400px;\n        height: 500px;\n        font-size: 10px;\n        text-align: left;\n        overflow: scroll;\n        margin-left: 10px;\n        columns: 50% 2;\n    }\n}\n\n@media only screen and (max-width: 1200px) {\n\n  main {\n      flex-direction: column-reverse;\n      align-items: center;\n      padding-top: 50px;\n  }\n\n  article {\n    flex-direction: row;\n    height: auto;\n    margin: 20px;\n    width: 800px;\n  }\n\n\n  footer ul {\n      width: 800px;\n      margin-top: 20px;\n  }\n\n}\n\n@media only screen and (max-width: 800px) {\n\n    \n\n  article {\n    flex-direction: row;\n    height: auto;\n    margin: 20px;\n    width: 600px;\n  }\n\n  article p {\n      margin: 5px;\n  }\n\n\n  footer ul {\n      width: 600px;\n      margin-top: 20px;\n  }\n\n  #vivari {\n        border: 2px solid lightgray;\n        background-color: darkslategrey;\n        background-image: url("+i+");\n        background-size: 600px 375px;\n        width: 600px;\n        height: 375px;\n    }\n}\n\n@media only screen and (max-width: 600px) {\n\n    main {\n        padding-top: 20px;\n    }\n\n    article {\n        height: auto;\n        margin: 10px;\n        width: 360px;\n        font-size: 12px;\n    }\n\n  footer ul {\n      width: 360px;\n      margin-top: 10px;\n\n      flex-direction: column;\n      align-items: center;\n      justify-content: space-between;\n  }\n\n  footer li {\n    margin: 10px;\n  }\n\n  #vivari {\n        border: 2px solid lightgray;\n        background-color: darkslategrey;\n        background-image: url("+i+");\n        background-size: 360px 225px;\n        width: 360px;\n        height: 225px;\n    }\n}",""])},function(t,e,n){"use strict";t.exports=function(t,e){return"string"!=typeof(t=t.__esModule?t.default:t)?t:(/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),/["'() \t\n]/.test(t)||e?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t)}},function(t,e,n){t.exports=n.p+"b219da93cf4fd6ade309fcd180cf09b9.png"},function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAAeCAYAAABwmH1PAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAPKADAAQAAAABAAAAHgAAAAAw3pU4AAAAHGlET1QAAAACAAAAAAAAAA8AAAAoAAAADwAAAA8AAAF+DsCxugAAAUpJREFUWAnUlTGOwjAQRXNP+pU4CDfYfhtqLkAF22y9NFwgJVIaKoqgb+lZwzC2I1ZaYaSRHY9//jzGSYYh+F3H7ewj2BYueZ2uw43B4r9rMRx/NrNiGvdp1JxcUGdaIt+N9nz4yHAUDbQH99DdaVXwabeuApege9QOtaLp9ivAb6kV7PfXqthhivajntketam7EbB/CQFMp2vAl9/PWYGGcYlWeyPvpdrI22ofgHmOZXibjik0p2A7emC0MqTgCBogezrQkqt5l3ylbXlLm4HpssyVqJlSGEVbbcu0piVX87bA1vdPwEDr5rqRD/IRsHKCLnW3pQU68l6iLXmjTZ/UUuEelGvt51vco/bhWNtjon8lihJwL9qnLtcKt7BRl3vRZmh7RFU8ofUI1kL3pqX2dMQBZMzJxoT9dmxIctpqmOdkY8J+O0aSOwAAAP//GLR0WgAAAc5JREFU1ZUxSgRBEEXnnuaClzDSG6yxibEXEAQ1WVNNDAxMBiNhEYwMRv/Aa/7WVM80Eyi70FRtd/9+9bt62a5LPl/91RBHsi2dijp9Tzcmk3+uBdhvzweNXX8zRuWsJXWOU6wfjPbl7riYo2hMR+PR9EFp1RkV/HZ7Omu4Zlra5+uT1dr/4HZzhun2GsMt2prhFm3tome1dMjB/B6JHOCRl/FweTTp8MfTZtDw/Z6jVcHO1R6YRNexrpozrtbn2Dpz7K6DAX3v7gcNvgOm05rPwAKiiaaj1rmYkTZjR21muMZ27Z5h3bYDHYxhYjSs4h1YM40xf1l0uYWdcXVmC1vaYpjb/ny9KDfcapjbfn88K91tNQy39bLdMNzWy64adtMUTmcVBaiB3XR80lGrc9ywuDrXL1rfYXMp/JTccDQd2dQ8/qXyvIALDNyBgLWf/+IMLtMRWNOKCVeGnBvZS1ydI27Gdu3es3a4CsiGi91wvHHMeIxaX8tYPhe14jH8nCx37aTLEjjI84nwV605wHOma1ov0Fme17RrucW0DvYCyDWfQf1pa90LIG/VwvLYqoXlcUlL7WPH2EwsiwsJ+z0uSMqya8jL4kLCfo+Z5Af2tX2HrY1ULQAAAABJRU5ErkJggg=="},function(t,e,n){"use strict";n.r(e);var i={dev:{debug:!1,focus:null},window:{offset:{x:0,y:0},height:500,width:800,tickLength:20,frameLength:5},terrarium:{height:500,width:800,groundHeight:400},physics:{gravity:{x:0,y:3},impact:3,groundFriction:2},sidebar:{width:200}},o={addVectors:function(t,e){return{x:t.x+e.x,y:t.y+e.y}},findVector:function(t,e){return{x:e.x-t.x,y:e.y-t.y}},frameThrottle:function(t,e,n,i){var o=t;return function(r){var s=Object.assign({},i,r);0===o?(e.apply(n,s),o=t):o--}},randInRange:function(t,e){return Math.random()*(e-t)+t}};function r(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function s(t){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function a(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function c(t,e){return!e||"object"!==s(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function u(t,e,n){return(u="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var i=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=l(t)););return t}(t,e);if(i){var o=Object.getOwnPropertyDescriptor(i,e);return o.get?o.get.call(n):o.value}})(t,e,n||t)}function l(t){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function f(t,e){return(f=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var p=function(t){function e(t){var n;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),(n=c(this,l(e).call(this,t))).ageFrames=t.ageFrames||{0:[{x:0,y:0}]},n.matureAge=t.matureAge,n.frames=n.ageFrames[0],n.stage=0,n.lifeSpan=null,n.isMature=!1,n}var n,i,o;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&f(t,e)}(e,t),n=e,(i=[{key:"move",value:function(){this.grow(),u(l(e.prototype),"move",this).call(this)}},{key:"grow",value:function(){Object.keys(this.ageFrames).includes(this.age.toString())&&(this.frames=this.ageFrames[this.age],this.stage++)}}])&&a(n.prototype,i),o&&a(n,o),e}(function(){function t(e){var n=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.sprite=e.sprite,this.clip=e.clip||{x:0,y:0},this.pos=e.pos||{x:i.terrarium.width/2,y:100},this.vel={x:0,y:0},this.size=e.size,this.imgsize=e.imgsize||e.size,this.imgpos=e.imgpos||{x:0,y:0},this.age=0,this.weight=e.weight||10*i.physics.impact,this.frame=0,this.isAnimated=e.isAnimated||!1,this.frames=e.frames||[this.clip],this.frameLength=e.frameLength||i.window.frameLength,this.held=!1,this.onGround=!1,this.advanceFrame=function(){n.frame<n.frames.length-1?n.frame++:n.frame=0},this.animate=o.frameThrottle(this.frameLength,this.advanceFrame,this)}var e,n,s;return e=t,(n=[{key:"draw",value:function(t){(this.isAnimated||0!==this.frame)&&this.animate(),t.drawImage(this.sprite,this.frames[this.frame].x,this.frames[this.frame].y,this.imgsize.x,this.imgsize.y,this.pos.x+this.imgpos.x,this.pos.y+this.imgpos.y,this.imgsize.x,this.imgsize.y)}},{key:"move",value:function(){this.held||(this.applyFriction(),this.deflect(),this.pos=o.addVectors(this.pos,this.vel),this.applyGravity()),this.age++}},{key:"applyGravity",value:function(){this.pos.y+this.size.y<i.terrarium.groundHeight?(this.onGround=!1,this.vel=o.addVectors(this.vel,i.physics.gravity)):this.pos.y+this.size.y>=i.terrarium.groundHeight&&(this.onGround=!0,this.pos.y=i.terrarium.groundHeight-this.size.y,this.vel.y=-(this.vel.y-this.weight))}},{key:"applyFriction",value:function(){this.onGround&&(this.vel.x<-i.physics.groundFriction?this.vel.x+=i.physics.groundFriction:this.vel.x>i.physics.groundFriction?this.vel.x-=i.physics.groundFriction:this.vel.x=0)}},{key:"deflect",value:function(){(this.pos.x<=0||this.pos.x+this.size.x>=i.terrarium.width)&&(this.vel.x=-this.vel.x/i.physics.impact,this.pos.x<=0?this.pos.x=0:this.pos.x=i.terrarium.width-this.size.x)}},{key:"accelerate",value:function(t){this.vel=o.addVectors(this.vel,t)}},{key:"beDragged",value:function(t,e){this.pos={x:e.x-this.size.x/2,y:e.y-this.size.y/2},this.vel={x:this.pos.x-this.prevPos.x,y:this.pos.y-this.prevPos.y},this.prevPos=this.pos}},{key:"startDrag",value:function(){i.dev.debug&&(i.dev.focus=this),this.held=!0,this.prevPos=this.pos}},{key:"endDrag",value:function(){this.held=!1}},{key:"doesContainPoint",value:function(t){var e=this.pos.y,n=this.pos.y+this.size.y,i=this.pos.x,o=this.pos.x+this.size.x;return e<=t.y&&n>=t.y&&i<=t.x&&o>=t.x}}])&&r(e.prototype,n),s&&r(e,s),t}());function h(t){return(h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function d(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function A(t,e){return!e||"object"!==h(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function y(t,e,n){return(y="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var i=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=g(t)););return t}(t,e);if(i){var o=Object.getOwnPropertyDescriptor(i,e);return o.get?o.get.call(n):o.value}})(t,e,n||t)}function g(t){return(g=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function m(t,e){return(m=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var b=function(t){function e(t){var n;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),(n=A(this,g(e).call(this,t))).entityType="critter",n.hunger=0,n.metabolism=10,n}var n,r,s;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&m(t,e)}(e,t),n=e,(r=[{key:"move",value:function(){y(g(e.prototype),"move",this).call(this),this.age%this.metabolism==0&&this.hunger++}},{key:"hop",value:function(){this.vel.x+=o.randInRange(-2,2)*this.hopsPower+i.physics.groundFriction,this.vel.y=o.randInRange(2,4)*this.hopsPower+i.physics.gravity.y}}])&&d(n.prototype,r),s&&d(n,s),e}(p),v=n(2),w=n.n(v);function x(t){return(x="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function O(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function j(t,e){return!e||"object"!==x(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function P(t){return(P=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function E(t,e){return(E=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var C=function(t){function e(){var t,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);var i=new Image(50,60);i.src=w.a;var o=Object.assign({},{sprite:i,size:{x:50,y:60}},n);return(t=j(this,P(e).call(this,o))).EggType=n.EggType,t.entityType=n.EggType.entityType,t}var n,i,o;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&E(t,e)}(e,t),n=e,(i=[{key:"hatch",value:function(){return new this.EggType({pos:this.pos})}},{key:"isHatchable",value:function(){return this.onGround&&this.matureAge<=this.age}}])&&O(n.prototype,i),o&&O(n,o),e}(p),R=n(3),k=n.n(R);function T(t){return(T="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function S(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function I(t,e){return!e||"object"!==T(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function M(t,e,n){return(M="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var i=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=B(t)););return t}(t,e);if(i){var o=Object.getOwnPropertyDescriptor(i,e);return o.get?o.get.call(n):o.value}})(t,e,n||t)}function B(t){return(B=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function z(t,e){return(z=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var H=function(t){function e(){var t,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);var i=new Image(30,30);i.src=k.a;var o=Object.assign({},{sprite:i,size:{x:15,y:15},imgsize:{x:30,y:30},imgpos:{x:-7,y:-7},isAnimated:!1},n);return(t=I(this,B(e).call(this,o))).hopsPower=10,t.metabolism=20,t}var n,i,o;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&z(t,e)}(e,t),n=e,(i=[{key:"move",value:function(){M(B(e.prototype),"move",this).call(this),Math.random()<.01&&this.hop()}}])&&S(n.prototype,i),o&&S(n,o),e}(b);window.coin=new H,window.testEgg=new C({matureAge:1e3,EggType:H});var L=H,N=n(10),F=n.n(N);function U(t){return(U="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function D(t,e){return!e||"object"!==U(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function G(t){return(G=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function V(t,e){return(V=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var X=function(t){function e(t){var n;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);var i=new Image(60,30);i.src=F.a;var o=Object.assign({sprite:i,size:{x:15,y:15},isAnimated:!0,matureAge:1e3,ageFrames:{0:[{x:0,y:0},{x:15,y:0},{x:30,y:0},{x:45,y:0}],500:[{x:0,y:15},{x:15,y:15},{x:30,y:15},{x:45,y:15}]},frameLength:10,EggType:L},t);return n=D(this,G(e).call(this,o)),console.log("hi"),n}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&V(t,e)}(e,t),e}(C);function Y(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}var Z=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.physicsObjects=[],this.entities={plants:[],critters:[],eggs:[],fruit:[]},this.heldObj=null,this.addPhysicsObject=this.addPhysicsObject.bind(this),this.addObject=this.addObject.bind(this),this.spawnObject=this.spawnObject.bind(this),this.removePhysicsObject=this.removePhysicsObject.bind(this)}var e,n,i;return e=t,(n=[{key:"draw",value:function(t){this.physicsObjects.forEach((function(e){e.draw(t)}))}},{key:"move",value:function(){this.physicsObjects.forEach((function(t){t.move()})),this.handleEggs()}},{key:"addPhysicsObject",value:function(t){this.physicsObjects.push(t)}},{key:"removePhysicsObject",value:function(t){var e=this.physicsObjects.indexOf(t);this.physicsObjects.splice(e,1)}},{key:"handleMouseDown",value:function(t){var e=this.physicsObjects.find((function(e){return e.doesContainPoint(t)}));e&&(e.startDrag(),this.heldObj=e)}},{key:"handleMouseUp",value:function(){this.heldObj&&(this.heldObj.endDrag(),this.heldObj=null)}},{key:"handleDrag",value:function(t){if(this.heldObj){var e=this.heldObj.pos;this.heldObj.beDragged(e,t)}}},{key:"addObject",value:function(t,e){this.physicsObjects.push(t),void 0!==e&&this.entities[e].push(t)}},{key:"spawnObject",value:function(t,e){var n=new t;this.addObject(n,e)}},{key:"addMote",value:function(){var t=new L;this.physicsObjects.push(t),this.entities.critters.push(t)}},{key:"addMoteEgg",value:function(){this.spawnObject(X,"eggs")}},{key:"handleEggs",value:function(){var t=this;this.entities.eggs.forEach((function(e,n){e.isHatchable()&&(t.addObject(e.hatch(),e.entityType),t.entities.eggs.splice(n,1),t.removePhysicsObject(e))}))}}])&&Y(e.prototype,n),i&&Y(e,i),t}();function Q(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}var W=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.terrarium=new Z,this.ctx=e,this.canvas=n,this.mousePos={x:null,y:null},this.mouseDown=!1,this.setupMouse.bind(this)}var e,n,o;return e=t,(n=[{key:"start",value:function(){var t=this;setInterval((function(){t.ctx.clearRect(0,0,i.terrarium.width,i.terrarium.height),t.terrarium.move(),t.terrarium.draw(t.ctx)}),i.window.tickLength),this.setupMouse()}},{key:"getMousePos",value:function(t){this.mousePos.x=(t.clientX-i.window.offset.x)/i.window.width*i.terrarium.width,this.mousePos.y=(t.clientY-i.window.offset.y)/i.window.height*i.terrarium.height}},{key:"setupMouse",value:function(){var t=this;this.canvas.addEventListener("mousemove",(function(e){t.getMousePos(e),(t.mouseDown=!0)&&t.terrarium.handleDrag(t.mousePos)})),this.canvas.addEventListener("mousedown",(function(e){t.getMousePos(e),t.terrarium.handleMouseDown(t.mousePos),t.mouseDown=!0})),this.canvas.addEventListener("mouseup",(function(e){t.terrarium.handleMouseUp(t.mousePos),t.mouseDown=!1}))}}])&&Q(e.prototype,n),o&&Q(e,o),t}(),J=(n(4),n(6),function(t){var e=t.getBoundingClientRect();i.window.offset.x=e.x,i.window.offset.y=e.y,i.window.height=e.height,i.window.width=e.width});window.addEventListener("DOMContentLoaded",(function(){var t=document.getElementById("vivari"),e=t.getContext("2d"),n=new W(e,t);J(t),n.start(),n.terrarium.addMote(),n.terrarium.addMoteEgg(),setTimeout((function(){document.getElementById("instructions1").classList.add("vis")}),1e3),setTimeout((function(){document.getElementById("instructions2").classList.add("vis")}),3e3),setTimeout((function(){document.getElementById("hireme").classList.add("vis")}),5e3),setTimeout((function(){var t=document.getElementsByClassName("instruction");Array.from(t).forEach((function(t){t.classList.remove("vis")}),5e3)})),document.getElementById("???").addEventListener("click",(function(){n.terrarium.addMote()})),document.getElementById("debugbutton").addEventListener("click",(function(){i.dev.debug=!0;var t=document.getElementById("instructionsbox");t.classList.add("debug"),setInterval((function(){t.innerText=JSON.stringify(i.dev.focus,null,2)}),20)})),window.addEventListener("resize",(function(){J(t)}))}))}]);
//# sourceMappingURL=main.js.map