(function(e){function t(t){for(var i,a,c=t[0],s=t[1],l=t[2],u=0,f=[];u<c.length;u++)a=c[u],o[a]&&f.push(o[a][0]),o[a]=0;for(i in s)Object.prototype.hasOwnProperty.call(s,i)&&(e[i]=s[i]);d&&d(t);while(f.length)f.shift()();return r.push.apply(r,l||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],i=!0,a=1;a<n.length;a++){var s=n[a];0!==o[s]&&(i=!1)}i&&(r.splice(t--,1),e=c(c.s=n[0]))}return e}var i={},o={app:0},r=[];function a(e){return c.p+"js/"+({about:"about"}[e]||e)+"."+{about:"78c6925e"}[e]+".js"}function c(t){if(i[t])return i[t].exports;var n=i[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n=o[e];if(0!==n)if(n)t.push(n[2]);else{var i=new Promise(function(t,i){n=o[e]=[t,i]});t.push(n[2]=i);var r,s=document.getElementsByTagName("head")[0],l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=a(e),r=function(t){l.onerror=l.onload=null,clearTimeout(u);var n=o[e];if(0!==n){if(n){var i=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src,a=new Error("Loading chunk "+e+" failed.\n("+i+": "+r+")");a.type=i,a.request=r,n[1](a)}o[e]=void 0}};var u=setTimeout(function(){r({type:"timeout",target:l})},12e4);l.onerror=l.onload=r,s.appendChild(l)}return Promise.all(t)},c.m=e,c.c=i,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)c.d(n,i,function(t){return e[t]}.bind(null,i));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/personal-site/",c.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var u=0;u<s.length;u++)t(s[u]);var d=l;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0045":function(e,t,n){"use strict";var i=n("10ad"),o=n.n(i);o.a},"10ad":function(e,t,n){},"135b":function(e,t,n){e.exports=n.p+"img/stuco-logo.c580ff19.png"},"17ed":function(e,t,n){"use strict";var i=n("205a"),o=n.n(i);o.a},"205a":function(e,t,n){},2229:function(e,t,n){e.exports=n.p+"img/h4h-logo.08985afb.png"},2856:function(e,t,n){},"2f50":function(e,t,n){},"4ae8":function(e,t,n){e.exports=n.p+"img/fgf-logo.640b5e63.png"},"53a3":function(e,t,n){"use strict";var i=n("2f50"),o=n.n(i);o.a},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("097d");var i=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},r=[],a=(n("5c0b"),n("2877")),c={},s=Object(a["a"])(c,o,r,!1,null,null,null);s.options.__file="App.vue";var l=s.exports,u=n("8c4f"),d=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("div",{staticClass:"nav"},[n("a",{staticClass:"upperNav",attrs:{href:"#intro"},on:{click:function(t){t.preventDefault(),e.scrollToID("intro")}}},[e._v("JL")]),n("div",{staticClass:"lowerNav"},[n("a",{attrs:{href:"#about-me"},on:{click:function(t){t.preventDefault(),e.scrollToID("about-me")}}},[e._v("About")]),n("a",{attrs:{href:"#experience"},on:{click:function(t){t.preventDefault(),e.scrollToID("experience")}}},[e._v("Experience")]),n("p",[e._v("Projects(WIP)")]),n("p",[e._v("Contact me(WIP)")])])]),n("Introduction",{attrs:{id:"intro"}}),n("AboutMe",{attrs:{id:"about-me"}}),n("Experience",{attrs:{id:"experience"}})],1)},f=[],p=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"intro"},[i("particles",{attrs:{lineColor:"#a54040"}}),e._m(0),i("img",{attrs:{src:n("cf05"),alt:"hi"}})],1)},v=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("h2",{attrs:{id:"whoAmI"}},[e._v("\n    Hi, my name is "),n("span",{staticStyle:{color:"#8B0000"}},[e._v("Jeffrey")]),e._v(".\n    "),n("br"),e._v("\n    I love to develop and design.\n    "),n("br"),n("span",{staticStyle:{"font-size":"20px"}},[e._v("This site is still a work in progress(WIP).")])])}],h=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"particles",attrs:{id:e.uniqID}})},m=[],b=(n("f751"),n("c437")),_=n.n(b),g=n("fccd"),y={props:{uniqID:{type:String,default:function(){return"particles-".concat(_()())}},lineColor:String,config:Object},mounted:function(){var e=Object.assign(g,this.config);this.lineColor&&(e.particles.line_linked.color=this.lineColor),window.particlesJS(this.uniqID,e)}},w=y,x=(n("f965"),Object(a["a"])(w,h,m,!1,null,"a8f71444",null));x.options.__file="index.vue";var C=x.exports,I={name:"Introduction",components:{Particles:C}},k=I,P=(n("e1a6"),Object(a["a"])(k,p,v,!1,null,"e2b53c02",null));P.options.__file="Introduction.vue";var j=P.exports,D=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},E=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"aboutMe"},[i("img",{attrs:{src:n("cf05")}}),i("p",[e._v("I'm a Computer Science and"),i("br"),e._v("\n  Business Administration Double Degree"),i("br"),e._v("\n  student attending the University of Waterloo"),i("br"),e._v("\n  and Wilfrid Laurier University.\n  "),i("br"),i("br"),e._v("\n  Currently I'm a Web Developer for the"),i("br"),e._v("\n  University of Waterloo Habitat for Humanity"),i("br"),e._v("\n  Campus Chapter.\n  ")])])}],O={name:"AboutMe"},S=O,M=(n("17ed"),Object(a["a"])(S,D,E,!1,null,"56527e8c",null));M.options.__file="AboutMe.vue";var T=M.exports,A=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"experience"},[i("div",{ref:"modal",staticClass:"modal",class:{visible:e.modalVisible},on:{click:e.hideModal}},[i("div",{staticClass:"card"},[i("div",{staticClass:"content"},[i("h2",[e._v(e._s(e.cardTitle))]),i("h3",[e._v(e._s(e.cardPosition))]),i("h4",[e._v(e._s(e.cardDate))]),i("p",[e._v(e._s(e.cardBody))])])])]),i("img",{attrs:{src:n("135b"),height:"250",width:"250",id:"stuco"},on:{click:function(t){e.showModal("stuco")}}}),i("img",{attrs:{src:n("4ae8"),height:"250",width:"250",id:"fgf"},on:{click:function(t){e.showModal("fgf")}}}),i("img",{attrs:{src:n("2229"),height:"250",width:"250",id:"h4h"},on:{click:function(t){e.showModal("h4h")}}})])},$=[],B={name:"Experience",data:function(){return{modalVisible:!1,cardTitle:"",cardPosition:"",cardDate:"",cardBody:""}},methods:{showModal:function(e){switch(e){case"stuco":this.cardTitle="St.Robert CHS Student Council",this.cardPosition="Vice President",this.cardDate="September 2016 to June 2017",this.cardBody="Voted by the entire high school student body to be the Student Council Vice President.As the Vice President, I was in charge of managing the overall council, directing and motivating the team to plan events for students.\nIn addition, I was in charge of managing the Marketing team as well as council inventory.\n\nNoticeable achievements accomplished by the council:\n• Organized over 30+ events for the student body including  the school Semi Formal\n• Raised over 3000+ pairs of socks for homeless people";break;case"fgf":this.cardTitle="FGF Brands",this.cardPosition="Content Data Management Specialist";break;case"h4h":this.cardTitle="Habitat For Humanity - UW Campus Chapter",this.cardPosition="Web Developer",this.cardBody="Created and maintained ";break}this.modalVisible=!0},hideModal:function(e){e.toElement===this.$refs.modal&&(this.modalVisible=!1)}}},V=B,W=(n("53a3"),Object(a["a"])(V,A,$,!1,null,"70a365d1",null));W.options.__file="Experience.vue";var H=W.exports,z={name:"home",methods:{scrollToID:function(e){var t=document.getElementById(e);t.scrollIntoView({behavior:"smooth"})}},components:{Introduction:j,AboutMe:T,Experience:H}},J=z,q=(n("0045"),Object(a["a"])(J,d,f,!1,null,"c803d97a",null));q.options.__file="Home.vue";var F=q.exports;i["a"].use(u["a"]);var N=new u["a"]({routes:[{path:"/",name:"home",component:F},{path:"/about",name:"about",component:function(){return n.e("about").then(n.bind(null,"f820"))}}]});i["a"].config.productionTip=!1,new i["a"]({router:N,render:function(e){return e(l)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var i=n("2856"),o=n.n(i);o.a},"7f4a":function(e,t,n){},cd4c:function(e,t,n){},cf05:function(e,t,n){e.exports=n.p+"img/logo.82b9c7a5.png"},e1a6:function(e,t,n){"use strict";var i=n("7f4a"),o=n.n(i);o.a},f965:function(e,t,n){"use strict";var i=n("cd4c"),o=n.n(i);o.a},fccd:function(e){e.exports={particles:{number:{value:150,density:{enable:!0,value_area:800}},color:{value:"#9e9e9e"},shape:{type:"circle",stroke:{width:0,color:"#000000"},polygon:{nb_sides:5}},opacity:{value:.5,random:!1,anim:{enable:!1,speed:1,opacity_min:.1,sync:!1}},size:{value:2,random:!0,anim:{enable:!1,speed:40,size_min:.1,sync:!1}},line_linked:{enable:!0,distance:150,color:"#7a7a7a",opacity:.25,width:1},move:{enable:!0,speed:2,direction:"none",random:!1,straight:!1,out_mode:"out",bounce:!0,attract:{enable:!1,rotateX:600,rotateY:1200}}},interactivity:{detect_on:"canvas",events:{onhover:{enable:!0,mode:"grab"},onclick:{enable:!1},resize:!0},modes:{grab:{distance:150,line_linked:{opacity:1}},bubble:{distance:400,size:40,duration:2,opacity:8,speed:3},repulse:{distance:200,duration:.4}}},retina_detect:!0}}});
//# sourceMappingURL=app.6a93f81f.js.map