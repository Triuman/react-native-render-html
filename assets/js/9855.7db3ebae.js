(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9855],{7684:function(e,t,n){"use strict";n.d(t,{Z:function(){return m}});var r=n(2784),o=n(6277),a=n(1510),l="sidebar_3j6c",i="sidebarItemTitle_2KH5",s="sidebarItemList_3Uli",c="sidebarItem_1R5P",u="sidebarItemLink_3Uuq",p="sidebarItemLinkActive_1m4O",d=n(7921);function m(e){var t=e.sidebar;return 0===t.items.length?null:r.createElement("nav",{className:(0,o.Z)(l,"thin-scrollbar"),"aria-label":(0,d.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},r.createElement("div",{className:(0,o.Z)(i,"margin-bottom--md")},t.title),r.createElement("ul",{className:s},t.items.map((function(e){return r.createElement("li",{key:e.permalink,className:c},r.createElement(a.Z,{isNavLink:!0,to:e.permalink,className:u,activeClassName:p},e.title))}))))}},5329:function(e,t,n){"use strict";n.d(t,{Z:function(){return p}});var r=n(2784),o=n(7921),a=n(7560),l=n(8283),i=n(6277),s="iconEdit_2nOl",c=["className"],u=function(e){var t=e.className,n=(0,l.Z)(e,c);return r.createElement("svg",(0,a.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,i.Z)(s,t),"aria-hidden":"true"},n),r.createElement("g",null,r.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))};function p(e){var t=e.editUrl;return r.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener"},r.createElement(u,null),r.createElement(o.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}},804:function(e,t,n){"use strict";n.d(t,{N:function(){return d},Z:function(){return m}});var r=n(8283),o=n(7560),a=n(2784),l=n(6277),i=n(7921),s=n(3241),c="enhancedAnchor_b0Ka",u="h1Heading_Fr2O",p=["id"],d=function(e){var t=Object.assign({},e);return a.createElement("header",null,a.createElement("h1",(0,o.Z)({},t,{id:void 0,className:u}),t.children))},m=function(e){return"h1"===e?d:(t=e,function(e){var n,o=e.id,u=(0,r.Z)(e,p),d=(0,s.LU)().navbar.hideOnScroll;return o?a.createElement(t,u,a.createElement("a",{"aria-hidden":"true",tabIndex:-1,className:(0,l.Z)("anchor",(n={},n[c]=!d,n)),id:o}),u.children,a.createElement("a",{className:"hash-link",href:"#"+o,title:(0,i.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"#")):a.createElement(t,u)});var t}},5432:function(e,t,n){"use strict";var r=n(2784),o=n(1510),a=n(3488),l=n(804),i={code:function(e){var t=e.children;return(0,r.isValidElement)(t)?t:t.includes("\n")?r.createElement(a.Z,e):r.createElement("code",e)},a:function(e){return r.createElement(o.Z,e)},pre:function(e){var t,n=e.children;return(0,r.isValidElement)(null==n||null==(t=n.props)?void 0:t.children)?null==n?void 0:n.props.children:r.createElement(a.Z,(0,r.isValidElement)(n)?null==n?void 0:n.props:{children:n})},h1:(0,l.Z)("h1"),h2:(0,l.Z)("h2"),h3:(0,l.Z)("h3"),h4:(0,l.Z)("h4"),h5:(0,l.Z)("h5"),h6:(0,l.Z)("h6")};t.Z=i},2894:function(e,t,n){"use strict";n.d(t,{Z:function(){return l}});var r={plain:{color:"#bfc7d5",backgroundColor:"#292d3e"},styles:[{types:["comment"],style:{color:"rgb(105, 112, 152)",fontStyle:"italic"}},{types:["string","inserted"],style:{color:"rgb(195, 232, 141)"}},{types:["number"],style:{color:"rgb(247, 140, 108)"}},{types:["builtin","char","constant","function"],style:{color:"rgb(130, 170, 255)"}},{types:["punctuation","selector"],style:{color:"rgb(199, 146, 234)"}},{types:["variable"],style:{color:"rgb(191, 199, 213)"}},{types:["class-name","attr-name"],style:{color:"rgb(255, 203, 107)"}},{types:["tag","deleted"],style:{color:"rgb(255, 85, 114)"}},{types:["operator"],style:{color:"rgb(137, 221, 255)"}},{types:["boolean"],style:{color:"rgb(255, 88, 116)"}},{types:["keyword"],style:{fontStyle:"italic"}},{types:["doctype"],style:{color:"rgb(199, 146, 234)",fontStyle:"italic"}},{types:["namespace"],style:{color:"rgb(178, 204, 214)"}},{types:["url"],style:{color:"rgb(221, 221, 221)"}}]},o=n(6097),a=n(3241),l=function(){var e=(0,a.LU)().prism,t=(0,o.Z)().isDarkTheme,n=e.theme||r,l=e.darkTheme||n;return t?l:n}},7719:function(e,t,n){"use strict";function r(e,t){var n=(void 0===t?{}:t).target,r=void 0===n?document.body:n,o=document.createElement("textarea"),a=document.activeElement;o.value=e,o.setAttribute("readonly",""),o.style.contain="strict",o.style.position="absolute",o.style.left="-9999px",o.style.fontSize="12pt";var l=document.getSelection(),i=!1;l.rangeCount>0&&(i=l.getRangeAt(0)),r.append(o),o.select(),o.selectionStart=0,o.selectionEnd=e.length;var s=!1;try{s=document.execCommand("copy")}catch(c){}return o.remove(),i&&(l.removeAllRanges(),l.addRange(i)),a&&a.focus(),s}n.d(t,{Z:function(){return r}})},4501:function(e,t){function n(e){let t,n=[];for(let r of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(r))n.push(parseInt(r,10));else if(t=r.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,r,o,a]=t;if(r&&a){r=parseInt(r),a=parseInt(a);const e=r<a?1:-1;"-"!==o&&".."!==o&&"\u2025"!==o||(a+=e);for(let t=r;t!==a;t+=e)n.push(t)}}return n}t.default=n,e.exports=n},6540:function(e,t,n){"use strict";n.d(t,{ZP:function(){return y},lG:function(){return l}});var r=n(7175),o={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},a=n(2784),l={Prism:r.Z,theme:o};function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var c=/\r\n|\r|\n/,u=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},p=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},d=function(e,t){var n=e.plain,r=Object.create(null),o=e.styles.reduce((function(e,n){var r=n.languages,o=n.style;return r&&!r.includes(t)||n.types.forEach((function(t){var n=s({},e[t],o);e[t]=n})),e}),r);return o.root=n,o.plain=s({},n,{backgroundColor:null}),o};function m(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===t.indexOf(r)&&(n[r]=e[r]);return n}var y=function(e){function t(){for(var t=this,n=[],r=arguments.length;r--;)n[r]=arguments[r];e.apply(this,n),i(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?d(e.theme,e.language):void 0;return t.themeDict=n})),i(this,"getLineProps",(function(e){var n=e.key,r=e.className,o=e.style,a=s({},m(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),l=t.getThemeDict(t.props);return void 0!==l&&(a.style=l.plain),void 0!==o&&(a.style=void 0!==a.style?s({},a.style,o):o),void 0!==n&&(a.key=n),r&&(a.className+=" "+r),a})),i(this,"getStyleForToken",(function(e){var n=e.types,r=e.empty,o=n.length,a=t.getThemeDict(t.props);if(void 0!==a){if(1===o&&"plain"===n[0])return r?{display:"inline-block"}:void 0;if(1===o&&!r)return a[n[0]];var l=r?{display:"inline-block"}:{},i=n.map((function(e){return a[e]}));return Object.assign.apply(Object,[l].concat(i))}})),i(this,"getTokenProps",(function(e){var n=e.key,r=e.className,o=e.style,a=e.token,l=s({},m(e,["key","className","style","token"]),{className:"token "+a.types.join(" "),children:a.content,style:t.getStyleForToken(a),key:void 0});return void 0!==o&&(l.style=void 0!==l.style?s({},l.style,o):o),void 0!==n&&(l.key=n),r&&(l.className+=" "+r),l})),i(this,"tokenize",(function(e,t,n,r){var o={code:t,grammar:n,language:r,tokens:[]};e.hooks.run("before-tokenize",o);var a=o.tokens=e.tokenize(o.code,o.grammar,o.language);return e.hooks.run("after-tokenize",o),a}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,r=e.code,o=e.children,a=this.getThemeDict(this.props),l=t.languages[n];return o({tokens:function(e){for(var t=[[]],n=[e],r=[0],o=[e.length],a=0,l=0,i=[],s=[i];l>-1;){for(;(a=r[l]++)<o[l];){var d=void 0,m=t[l],y=n[l][a];if("string"==typeof y?(m=l>0?m:["plain"],d=y):(m=p(m,y.type),y.alias&&(m=p(m,y.alias)),d=y.content),"string"==typeof d){var h=d.split(c),g=h.length;i.push({types:m,content:h[0]});for(var f=1;f<g;f++)u(i),s.push(i=[]),i.push({types:m,content:h[f]})}else l++,t.push(m),n.push(d),r.push(0),o.push(d.length)}l--,t.pop(),n.pop(),r.pop(),o.pop()}return u(i),s}(void 0!==l?this.tokenize(t,r,l,n):[r]),className:"prism-code language-"+n,style:void 0!==a?a.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(a.Component)}}]);