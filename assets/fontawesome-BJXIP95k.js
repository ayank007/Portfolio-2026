function xt(t,e){(e==null||e>t.length)&&(e=t.length);for(var a=0,n=Array(e);a<e;a++)n[a]=t[a];return n}function Ea(t){if(Array.isArray(t))return t}function Fa(t){if(Array.isArray(t))return xt(t)}function Ca(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function Oa(t,e){for(var a=0;a<e.length;a++){var n=e[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,Ae(n.key),n)}}function Na(t,e,a){return e&&Oa(t.prototype,e),Object.defineProperty(t,"prototype",{writable:!1}),t}function tt(t,e){var a=typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(!a){if(Array.isArray(t)||(a=Mt(t))||e){a&&(t=a);var n=0,r=function(){};return{s:r,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(l){throw l},f:r}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var o,i=!0,s=!1;return{s:function(){a=a.call(t)},n:function(){var l=a.next();return i=l.done,l},e:function(l){s=!0,o=l},f:function(){try{i||a.return==null||a.return()}finally{if(s)throw o}}}}function v(t,e,a){return(e=Ae(e))in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function ja(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function Ta(t,e){var a=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(a!=null){var n,r,o,i,s=[],l=!0,u=!1;try{if(o=(a=a.call(t)).next,e===0){if(Object(a)!==a)return;l=!1}else for(;!(l=(n=o.call(a)).done)&&(s.push(n.value),s.length!==e);l=!0);}catch(m){u=!0,r=m}finally{try{if(!l&&a.return!=null&&(i=a.return(),Object(i)!==i))return}finally{if(u)throw r}}return s}}function La(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Ma(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Bt(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),a.push.apply(a,n)}return a}function f(t){for(var e=1;e<arguments.length;e++){var a=arguments[e]!=null?arguments[e]:{};e%2?Bt(Object(a),!0).forEach(function(n){v(t,n,a[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):Bt(Object(a)).forEach(function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(a,n))})}return t}function ot(t,e){return Ea(t)||Ta(t,e)||Mt(t,e)||La()}function E(t){return Fa(t)||ja(t)||Mt(t)||Ma()}function _a(t,e){if(typeof t!="object"||!t)return t;var a=t[Symbol.toPrimitive];if(a!==void 0){var n=a.call(t,e);if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function Ae(t){var e=_a(t,"string");return typeof e=="symbol"?e:e+""}function nt(t){"@babel/helpers - typeof";return nt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},nt(t)}function Mt(t,e){if(t){if(typeof t=="string")return xt(t,e);var a={}.toString.call(t).slice(8,-1);return a==="Object"&&t.constructor&&(a=t.constructor.name),a==="Map"||a==="Set"?Array.from(t):a==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?xt(t,e):void 0}}var Vt=function(){},_t={},ke={},Pe=null,Ie={mark:Vt,measure:Vt};try{typeof window<"u"&&(_t=window),typeof document<"u"&&(ke=document),typeof MutationObserver<"u"&&(Pe=MutationObserver),typeof performance<"u"&&(Ie=performance)}catch{}var $a=_t.navigator||{},Kt=$a.userAgent,Jt=Kt===void 0?"":Kt,T=_t,p=ke,qt=Pe,Q=Ie;T.document;var j=!!p.documentElement&&!!p.head&&typeof p.addEventListener=="function"&&typeof p.createElement=="function",Ee=~Jt.indexOf("MSIE")||~Jt.indexOf("Trident/"),mt,za=/fa(k|kd|s|r|l|t|d|dr|dl|dt|b|slr|slpr|wsb|tl|ns|nds|es|gt|jr|jfr|jdr|usb|ufsb|udsb|cr|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,Da=/Font ?Awesome ?([567 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit|Notdog Duo|Notdog|Chisel|Etch|Graphite|Thumbprint|Jelly Fill|Jelly Duo|Jelly|Utility|Utility Fill|Utility Duo|Slab Press|Slab|Whiteboard)?.*/i,Fe={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"},slab:{"fa-regular":"regular",faslr:"regular"},"slab-press":{"fa-regular":"regular",faslpr:"regular"},thumbprint:{"fa-light":"light",fatl:"light"},whiteboard:{"fa-semibold":"semibold",fawsb:"semibold"},notdog:{"fa-solid":"solid",fans:"solid"},"notdog-duo":{"fa-solid":"solid",fands:"solid"},etch:{"fa-solid":"solid",faes:"solid"},graphite:{"fa-thin":"thin",fagt:"thin"},jelly:{"fa-regular":"regular",fajr:"regular"},"jelly-fill":{"fa-regular":"regular",fajfr:"regular"},"jelly-duo":{"fa-regular":"regular",fajdr:"regular"},chisel:{"fa-regular":"regular",facr:"regular"},utility:{"fa-semibold":"semibold",fausb:"semibold"},"utility-duo":{"fa-semibold":"semibold",faudsb:"semibold"},"utility-fill":{"fa-semibold":"semibold",faufsb:"semibold"}},Ra={GROUP:"duotone-group",PRIMARY:"primary",SECONDARY:"secondary"},Ce=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone","fa-thumbprint","fa-whiteboard","fa-notdog","fa-notdog-duo","fa-chisel","fa-etch","fa-graphite","fa-jelly","fa-jelly-fill","fa-jelly-duo","fa-slab","fa-slab-press","fa-utility","fa-utility-duo","fa-utility-fill"],w="classic",K="duotone",Oe="sharp",Ne="sharp-duotone",je="chisel",Te="etch",Le="graphite",Me="jelly",_e="jelly-duo",$e="jelly-fill",ze="notdog",De="notdog-duo",Re="slab",We="slab-press",Ue="thumbprint",Ye="utility",He="utility-duo",Ge="utility-fill",Xe="whiteboard",Wa="Classic",Ua="Duotone",Ya="Sharp",Ha="Sharp Duotone",Ga="Chisel",Xa="Etch",Ba="Graphite",Va="Jelly",Ka="Jelly Duo",Ja="Jelly Fill",qa="Notdog",Qa="Notdog Duo",Za="Slab",tn="Slab Press",en="Thumbprint",an="Utility",nn="Utility Duo",rn="Utility Fill",on="Whiteboard",Be=[w,K,Oe,Ne,je,Te,Le,Me,_e,$e,ze,De,Re,We,Ue,Ye,He,Ge,Xe];mt={},v(v(v(v(v(v(v(v(v(v(mt,w,Wa),K,Ua),Oe,Ya),Ne,Ha),je,Ga),Te,Xa),Le,Ba),Me,Va),_e,Ka),$e,Ja),v(v(v(v(v(v(v(v(v(mt,ze,qa),De,Qa),Re,Za),We,tn),Ue,en),Ye,an),He,nn),Ge,rn),Xe,on);var sn={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"},slab:{400:"faslr"},"slab-press":{400:"faslpr"},whiteboard:{600:"fawsb"},thumbprint:{300:"fatl"},notdog:{900:"fans"},"notdog-duo":{900:"fands"},etch:{900:"faes"},graphite:{100:"fagt"},chisel:{400:"facr"},jelly:{400:"fajr"},"jelly-fill":{400:"fajfr"},"jelly-duo":{400:"fajdr"},utility:{600:"fausb"},"utility-duo":{600:"faudsb"},"utility-fill":{600:"faufsb"}},ln={"Font Awesome 7 Free":{900:"fas",400:"far"},"Font Awesome 7 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 7 Brands":{400:"fab",normal:"fab"},"Font Awesome 7 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 7 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 7 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"},"Font Awesome 7 Jelly":{400:"fajr",normal:"fajr"},"Font Awesome 7 Jelly Fill":{400:"fajfr",normal:"fajfr"},"Font Awesome 7 Jelly Duo":{400:"fajdr",normal:"fajdr"},"Font Awesome 7 Slab":{400:"faslr",normal:"faslr"},"Font Awesome 7 Slab Press":{400:"faslpr",normal:"faslpr"},"Font Awesome 7 Thumbprint":{300:"fatl",normal:"fatl"},"Font Awesome 7 Notdog":{900:"fans",normal:"fans"},"Font Awesome 7 Notdog Duo":{900:"fands",normal:"fands"},"Font Awesome 7 Etch":{900:"faes",normal:"faes"},"Font Awesome 7 Graphite":{100:"fagt",normal:"fagt"},"Font Awesome 7 Chisel":{400:"facr",normal:"facr"},"Font Awesome 7 Whiteboard":{600:"fawsb",normal:"fawsb"},"Font Awesome 7 Utility":{600:"fausb",normal:"fausb"},"Font Awesome 7 Utility Duo":{600:"faudsb",normal:"faudsb"},"Font Awesome 7 Utility Fill":{600:"faufsb",normal:"faufsb"}},fn=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["chisel",{defaultShortPrefixId:"facr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["etch",{defaultShortPrefixId:"faes",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["graphite",{defaultShortPrefixId:"fagt",defaultStyleId:"thin",styleIds:["thin"],futureStyleIds:[],defaultFontWeight:100}],["jelly",{defaultShortPrefixId:"fajr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["jelly-duo",{defaultShortPrefixId:"fajdr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["jelly-fill",{defaultShortPrefixId:"fajfr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["notdog",{defaultShortPrefixId:"fans",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["notdog-duo",{defaultShortPrefixId:"fands",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["slab",{defaultShortPrefixId:"faslr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["slab-press",{defaultShortPrefixId:"faslpr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["thumbprint",{defaultShortPrefixId:"fatl",defaultStyleId:"light",styleIds:["light"],futureStyleIds:[],defaultFontWeight:300}],["utility",{defaultShortPrefixId:"fausb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["utility-duo",{defaultShortPrefixId:"faudsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["utility-fill",{defaultShortPrefixId:"faufsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["whiteboard",{defaultShortPrefixId:"fawsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}]]),un={chisel:{regular:"facr"},classic:{brands:"fab",light:"fal",regular:"far",solid:"fas",thin:"fat"},duotone:{light:"fadl",regular:"fadr",solid:"fad",thin:"fadt"},etch:{solid:"faes"},graphite:{thin:"fagt"},jelly:{regular:"fajr"},"jelly-duo":{regular:"fajdr"},"jelly-fill":{regular:"fajfr"},notdog:{solid:"fans"},"notdog-duo":{solid:"fands"},sharp:{light:"fasl",regular:"fasr",solid:"fass",thin:"fast"},"sharp-duotone":{light:"fasdl",regular:"fasdr",solid:"fasds",thin:"fasdt"},slab:{regular:"faslr"},"slab-press":{regular:"faslpr"},thumbprint:{light:"fatl"},utility:{semibold:"fausb"},"utility-duo":{semibold:"faudsb"},"utility-fill":{semibold:"faufsb"},whiteboard:{semibold:"fawsb"}},Ve=["fak","fa-kit","fakd","fa-kit-duotone"],Qt={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},cn=["kit"],dn="kit",mn="kit-duotone",vn="Kit",hn="Kit Duotone";v(v({},dn,vn),mn,hn);var gn={kit:{"fa-kit":"fak"}},pn={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},bn={kit:{fak:"fa-kit"}},Zt={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},vt,Z={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},yn=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone","fa-thumbprint","fa-whiteboard","fa-notdog","fa-notdog-duo","fa-chisel","fa-etch","fa-graphite","fa-jelly","fa-jelly-fill","fa-jelly-duo","fa-slab","fa-slab-press","fa-utility","fa-utility-duo","fa-utility-fill"],xn="classic",wn="duotone",Sn="sharp",An="sharp-duotone",kn="chisel",Pn="etch",In="graphite",En="jelly",Fn="jelly-duo",Cn="jelly-fill",On="notdog",Nn="notdog-duo",jn="slab",Tn="slab-press",Ln="thumbprint",Mn="utility",_n="utility-duo",$n="utility-fill",zn="whiteboard",Dn="Classic",Rn="Duotone",Wn="Sharp",Un="Sharp Duotone",Yn="Chisel",Hn="Etch",Gn="Graphite",Xn="Jelly",Bn="Jelly Duo",Vn="Jelly Fill",Kn="Notdog",Jn="Notdog Duo",qn="Slab",Qn="Slab Press",Zn="Thumbprint",tr="Utility",er="Utility Duo",ar="Utility Fill",nr="Whiteboard";vt={},v(v(v(v(v(v(v(v(v(v(vt,xn,Dn),wn,Rn),Sn,Wn),An,Un),kn,Yn),Pn,Hn),In,Gn),En,Xn),Fn,Bn),Cn,Vn),v(v(v(v(v(v(v(v(v(vt,On,Kn),Nn,Jn),jn,qn),Tn,Qn),Ln,Zn),Mn,tr),_n,er),$n,ar),zn,nr);var rr="kit",ir="kit-duotone",or="Kit",sr="Kit Duotone";v(v({},rr,or),ir,sr);var lr={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"},slab:{"fa-regular":"faslr"},"slab-press":{"fa-regular":"faslpr"},whiteboard:{"fa-semibold":"fawsb"},thumbprint:{"fa-light":"fatl"},notdog:{"fa-solid":"fans"},"notdog-duo":{"fa-solid":"fands"},etch:{"fa-solid":"faes"},graphite:{"fa-thin":"fagt"},jelly:{"fa-regular":"fajr"},"jelly-fill":{"fa-regular":"fajfr"},"jelly-duo":{"fa-regular":"fajdr"},chisel:{"fa-regular":"facr"},utility:{"fa-semibold":"fausb"},"utility-duo":{"fa-semibold":"faudsb"},"utility-fill":{"fa-semibold":"faufsb"}},fr={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"],slab:["faslr"],"slab-press":["faslpr"],whiteboard:["fawsb"],thumbprint:["fatl"],notdog:["fans"],"notdog-duo":["fands"],etch:["faes"],graphite:["fagt"],jelly:["fajr"],"jelly-fill":["fajfr"],"jelly-duo":["fajdr"],chisel:["facr"],utility:["fausb"],"utility-duo":["faudsb"],"utility-fill":["faufsb"]},wt={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"},slab:{faslr:"fa-regular"},"slab-press":{faslpr:"fa-regular"},whiteboard:{fawsb:"fa-semibold"},thumbprint:{fatl:"fa-light"},notdog:{fans:"fa-solid"},"notdog-duo":{fands:"fa-solid"},etch:{faes:"fa-solid"},graphite:{fagt:"fa-thin"},jelly:{fajr:"fa-regular"},"jelly-fill":{fajfr:"fa-regular"},"jelly-duo":{fajdr:"fa-regular"},chisel:{facr:"fa-regular"},utility:{fausb:"fa-semibold"},"utility-duo":{faudsb:"fa-semibold"},"utility-fill":{faufsb:"fa-semibold"}},ur=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands","fa-semibold"],Ke=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt","faslr","faslpr","fawsb","fatl","fans","fands","faes","fagt","fajr","fajfr","fajdr","facr","fausb","faudsb","faufsb"].concat(yn,ur),cr=["solid","regular","light","thin","duotone","brands","semibold"],Je=[1,2,3,4,5,6,7,8,9,10],dr=Je.concat([11,12,13,14,15,16,17,18,19,20]),mr=["aw","fw","pull-left","pull-right"],vr=[].concat(E(Object.keys(fr)),cr,mr,["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","inverse","layers","layers-bottom-left","layers-bottom-right","layers-counter","layers-text","layers-top-left","layers-top-right","li","pull-end","pull-start","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul","width-auto","width-fixed",Z.GROUP,Z.SWAP_OPACITY,Z.PRIMARY,Z.SECONDARY]).concat(Je.map(function(t){return"".concat(t,"x")})).concat(dr.map(function(t){return"w-".concat(t)})),hr={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},O="___FONT_AWESOME___",St=16,qe="fa",Qe="svg-inline--fa",$="data-fa-i2svg",At="data-fa-pseudo-element",gr="data-fa-pseudo-element-pending",$t="data-prefix",zt="data-icon",te="fontawesome-i2svg",pr="async",br=["HTML","HEAD","STYLE","SCRIPT"],Ze=["::before","::after",":before",":after"],ta=(function(){try{return!0}catch{return!1}})();function J(t){return new Proxy(t,{get:function(a,n){return n in a?a[n]:a[w]}})}var ea=f({},Fe);ea[w]=f(f(f(f({},{"fa-duotone":"duotone"}),Fe[w]),Qt.kit),Qt["kit-duotone"]);var yr=J(ea),kt=f({},un);kt[w]=f(f(f(f({},{duotone:"fad"}),kt[w]),Zt.kit),Zt["kit-duotone"]);var ee=J(kt),Pt=f({},wt);Pt[w]=f(f({},Pt[w]),bn.kit);var Dt=J(Pt),It=f({},lr);It[w]=f(f({},It[w]),gn.kit);J(It);var xr=za,aa="fa-layers-text",wr=Da,Sr=f({},sn);J(Sr);var Ar=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],ht=Ra,kr=[].concat(E(cn),E(vr)),X=T.FontAwesomeConfig||{};function Pr(t){var e=p.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function Ir(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}if(p&&typeof p.querySelector=="function"){var Er=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-search-pseudo-elements","searchPseudoElements"],["data-search-pseudo-elements-warnings","searchPseudoElementsWarnings"],["data-search-pseudo-elements-full-scan","searchPseudoElementsFullScan"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];Er.forEach(function(t){var e=ot(t,2),a=e[0],n=e[1],r=Ir(Pr(a));r!=null&&(X[n]=r)})}var na={styleDefault:"solid",familyDefault:w,cssPrefix:qe,replacementClass:Qe,autoReplaceSvg:!0,autoAddCss:!0,searchPseudoElements:!1,searchPseudoElementsWarnings:!0,searchPseudoElementsFullScan:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};X.familyPrefix&&(X.cssPrefix=X.familyPrefix);var Y=f(f({},na),X);Y.autoReplaceSvg||(Y.observeMutations=!1);var d={};Object.keys(na).forEach(function(t){Object.defineProperty(d,t,{enumerable:!0,set:function(a){Y[t]=a,B.forEach(function(n){return n(d)})},get:function(){return Y[t]}})});Object.defineProperty(d,"familyPrefix",{enumerable:!0,set:function(e){Y.cssPrefix=e,B.forEach(function(a){return a(d)})},get:function(){return Y.cssPrefix}});T.FontAwesomeConfig=d;var B=[];function Fr(t){return B.push(t),function(){B.splice(B.indexOf(t),1)}}var R=St,F={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Cr(t){if(!(!t||!j)){var e=p.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;for(var a=p.head.childNodes,n=null,r=a.length-1;r>-1;r--){var o=a[r],i=(o.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(i)>-1&&(n=o)}return p.head.insertBefore(e,n),t}}var Or="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function ae(){for(var t=12,e="";t-- >0;)e+=Or[Math.random()*62|0];return e}function H(t){for(var e=[],a=(t||[]).length>>>0;a--;)e[a]=t[a];return e}function Rt(t){return t.classList?H(t.classList):(t.getAttribute("class")||"").split(" ").filter(function(e){return e})}function ra(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Nr(t){return Object.keys(t||{}).reduce(function(e,a){return e+"".concat(a,'="').concat(ra(t[a]),'" ')},"").trim()}function st(t){return Object.keys(t||{}).reduce(function(e,a){return e+"".concat(a,": ").concat(t[a].trim(),";")},"")}function Wt(t){return t.size!==F.size||t.x!==F.x||t.y!==F.y||t.rotate!==F.rotate||t.flipX||t.flipY}function jr(t){var e=t.transform,a=t.containerWidth,n=t.iconWidth,r={transform:"translate(".concat(a/2," 256)")},o="translate(".concat(e.x*32,", ").concat(e.y*32,") "),i="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),s="rotate(".concat(e.rotate," 0 0)"),l={transform:"".concat(o," ").concat(i," ").concat(s)},u={transform:"translate(".concat(n/2*-1," -256)")};return{outer:r,inner:l,path:u}}function Tr(t){var e=t.transform,a=t.width,n=a===void 0?St:a,r=t.height,o=r===void 0?St:r,i="";return Ee?i+="translate(".concat(e.x/R-n/2,"em, ").concat(e.y/R-o/2,"em) "):i+="translate(calc(-50% + ".concat(e.x/R,"em), calc(-50% + ").concat(e.y/R,"em)) "),i+="scale(".concat(e.size/R*(e.flipX?-1:1),", ").concat(e.size/R*(e.flipY?-1:1),") "),i+="rotate(".concat(e.rotate,"deg) "),i}var Lr=`:root, :host {
  --fa-font-solid: normal 900 1em/1 'Font Awesome 7 Free';
  --fa-font-regular: normal 400 1em/1 'Font Awesome 7 Free';
  --fa-font-light: normal 300 1em/1 'Font Awesome 7 Pro';
  --fa-font-thin: normal 100 1em/1 'Font Awesome 7 Pro';
  --fa-font-duotone: normal 900 1em/1 'Font Awesome 7 Duotone';
  --fa-font-duotone-regular: normal 400 1em/1 'Font Awesome 7 Duotone';
  --fa-font-duotone-light: normal 300 1em/1 'Font Awesome 7 Duotone';
  --fa-font-duotone-thin: normal 100 1em/1 'Font Awesome 7 Duotone';
  --fa-font-brands: normal 400 1em/1 'Font Awesome 7 Brands';
  --fa-font-sharp-solid: normal 900 1em/1 'Font Awesome 7 Sharp';
  --fa-font-sharp-regular: normal 400 1em/1 'Font Awesome 7 Sharp';
  --fa-font-sharp-light: normal 300 1em/1 'Font Awesome 7 Sharp';
  --fa-font-sharp-thin: normal 100 1em/1 'Font Awesome 7 Sharp';
  --fa-font-sharp-duotone-solid: normal 900 1em/1 'Font Awesome 7 Sharp Duotone';
  --fa-font-sharp-duotone-regular: normal 400 1em/1 'Font Awesome 7 Sharp Duotone';
  --fa-font-sharp-duotone-light: normal 300 1em/1 'Font Awesome 7 Sharp Duotone';
  --fa-font-sharp-duotone-thin: normal 100 1em/1 'Font Awesome 7 Sharp Duotone';
  --fa-font-slab-regular: normal 400 1em/1 'Font Awesome 7 Slab';
  --fa-font-slab-press-regular: normal 400 1em/1 'Font Awesome 7 Slab Press';
  --fa-font-whiteboard-semibold: normal 600 1em/1 'Font Awesome 7 Whiteboard';
  --fa-font-thumbprint-light: normal 300 1em/1 'Font Awesome 7 Thumbprint';
  --fa-font-notdog-solid: normal 900 1em/1 'Font Awesome 7 Notdog';
  --fa-font-notdog-duo-solid: normal 900 1em/1 'Font Awesome 7 Notdog Duo';
  --fa-font-etch-solid: normal 900 1em/1 'Font Awesome 7 Etch';
  --fa-font-graphite-thin: normal 100 1em/1 'Font Awesome 7 Graphite';
  --fa-font-jelly-regular: normal 400 1em/1 'Font Awesome 7 Jelly';
  --fa-font-jelly-fill-regular: normal 400 1em/1 'Font Awesome 7 Jelly Fill';
  --fa-font-jelly-duo-regular: normal 400 1em/1 'Font Awesome 7 Jelly Duo';
  --fa-font-chisel-regular: normal 400 1em/1 'Font Awesome 7 Chisel';
  --fa-font-utility-semibold: normal 600 1em/1 'Font Awesome 7 Utility';
  --fa-font-utility-duo-semibold: normal 600 1em/1 'Font Awesome 7 Utility Duo';
  --fa-font-utility-fill-semibold: normal 600 1em/1 'Font Awesome 7 Utility Fill';
}

.svg-inline--fa {
  box-sizing: content-box;
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
  width: var(--fa-width, 1.25em);
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285714em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left,
.svg-inline--fa .fa-pull-start {
  float: inline-start;
  margin-inline-end: var(--fa-pull-margin, 0.3em);
}
.svg-inline--fa.fa-pull-right,
.svg-inline--fa .fa-pull-end {
  float: inline-end;
  margin-inline-start: var(--fa-pull-margin, 0.3em);
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));
  inset-block-start: 0.25em; /* syncing vertical alignment with Web Font rendering */
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: var(--fa-width, 1.25em);
}
.fa-layers .svg-inline--fa {
  inset: 0;
  margin: auto;
  position: absolute;
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: calc(10 / 16 * 1em); /* converts a 10px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 10 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 10 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-xs {
  font-size: calc(12 / 16 * 1em); /* converts a 12px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 12 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 12 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-sm {
  font-size: calc(14 / 16 * 1em); /* converts a 14px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 14 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 14 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-lg {
  font-size: calc(20 / 16 * 1em); /* converts a 20px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 20 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 20 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-xl {
  font-size: calc(24 / 16 * 1em); /* converts a 24px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 24 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 24 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-2xl {
  font-size: calc(32 / 16 * 1em); /* converts a 32px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 32 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 32 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-width-auto {
  --fa-width: auto;
}

.fa-fw,
.fa-width-fixed {
  --fa-width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-inline-start: var(--fa-li-margin, 2.5em);
  padding-inline-start: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

/* Heads Up: Bordered Icons will not be supported in the future!
  - This feature will be deprecated in the next major release of Font Awesome (v8)!
  - You may continue to use it in this version *v7), but it will not be supported in Font Awesome v8.
*/
/* Notes:
* --@{v.$css-prefix}-border-width = 1/16 by default (to render as ~1px based on a 16px default font-size)
* --@{v.$css-prefix}-border-padding =
  ** 3/16 for vertical padding (to give ~2px of vertical whitespace around an icon considering it's vertical alignment)
  ** 4/16 for horizontal padding (to give ~4px of horizontal whitespace around an icon)
*/
.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.0625em);
  box-sizing: var(--fa-border-box-sizing, content-box);
  padding: var(--fa-border-padding, 0.1875em 0.25em);
}

.fa-pull-left,
.fa-pull-start {
  float: inline-start;
  margin-inline-end: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right,
.fa-pull-end {
  float: inline-end;
  margin-inline-start: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
  .fa-bounce,
  .fa-fade,
  .fa-beat-fade,
  .fa-flip,
  .fa-pulse,
  .fa-shake,
  .fa-spin,
  .fa-spin-pulse {
    animation: none !important;
    transition: none !important;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.svg-inline--fa.fa-inverse {
  fill: var(--fa-inverse, #fff);
}

.fa-stack {
  display: inline-block;
  height: 2em;
  line-height: 2em;
  position: relative;
  vertical-align: middle;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.svg-inline--fa.fa-stack-1x {
  --fa-width: 1.25em;
  height: 1em;
  width: var(--fa-width);
}
.svg-inline--fa.fa-stack-2x {
  --fa-width: 2.5em;
  height: 2em;
  width: var(--fa-width);
}

.fa-stack-1x,
.fa-stack-2x {
  inset: 0;
  margin: auto;
  position: absolute;
  z-index: var(--fa-stack-z-index, auto);
}`;function ia(){var t=qe,e=Qe,a=d.cssPrefix,n=d.replacementClass,r=Lr;if(a!==t||n!==e){var o=new RegExp("\\.".concat(t,"\\-"),"g"),i=new RegExp("\\--".concat(t,"\\-"),"g"),s=new RegExp("\\.".concat(e),"g");r=r.replace(o,".".concat(a,"-")).replace(i,"--".concat(a,"-")).replace(s,".".concat(n))}return r}var ne=!1;function gt(){d.autoAddCss&&!ne&&(Cr(ia()),ne=!0)}var Mr={mixout:function(){return{dom:{css:ia,insertCss:gt}}},hooks:function(){return{beforeDOMElementCreation:function(){gt()},beforeI2svg:function(){gt()}}}},N=T||{};N[O]||(N[O]={});N[O].styles||(N[O].styles={});N[O].hooks||(N[O].hooks={});N[O].shims||(N[O].shims=[]);var I=N[O],oa=[],sa=function(){p.removeEventListener("DOMContentLoaded",sa),rt=1,oa.map(function(e){return e()})},rt=!1;j&&(rt=(p.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(p.readyState),rt||p.addEventListener("DOMContentLoaded",sa));function _r(t){j&&(rt?setTimeout(t,0):oa.push(t))}function q(t){var e=t.tag,a=t.attributes,n=a===void 0?{}:a,r=t.children,o=r===void 0?[]:r;return typeof t=="string"?ra(t):"<".concat(e," ").concat(Nr(n),">").concat(o.map(q).join(""),"</").concat(e,">")}function re(t,e,a){if(t&&t[e]&&t[e][a])return{prefix:e,iconName:a,icon:t[e][a]}}var pt=function(e,a,n,r){var o=Object.keys(e),i=o.length,s=a,l,u,m;for(n===void 0?(l=1,m=e[o[0]]):(l=0,m=n);l<i;l++)u=o[l],m=s(m,e[u],u,e);return m};function la(t){return E(t).length!==1?null:t.codePointAt(0).toString(16)}function ie(t){return Object.keys(t).reduce(function(e,a){var n=t[a],r=!!n.icon;return r?e[n.iconName]=n.icon:e[a]=n,e},{})}function Et(t,e){var a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},n=a.skipHooks,r=n===void 0?!1:n,o=ie(e);typeof I.hooks.addPack=="function"&&!r?I.hooks.addPack(t,ie(e)):I.styles[t]=f(f({},I.styles[t]||{}),o),t==="fas"&&Et("fa",e)}var V=I.styles,$r=I.shims,fa=Object.keys(Dt),zr=fa.reduce(function(t,e){return t[e]=Object.keys(Dt[e]),t},{}),Ut=null,ua={},ca={},da={},ma={},va={};function Dr(t){return~kr.indexOf(t)}function Rr(t,e){var a=e.split("-"),n=a[0],r=a.slice(1).join("-");return n===t&&r!==""&&!Dr(r)?r:null}var ha=function(){var e=function(o){return pt(V,function(i,s,l){return i[l]=pt(s,o,{}),i},{})};ua=e(function(r,o,i){if(o[3]&&(r[o[3]]=i),o[2]){var s=o[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){r[l.toString(16)]=i})}return r}),ca=e(function(r,o,i){if(r[i]=i,o[2]){var s=o[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){r[l]=i})}return r}),va=e(function(r,o,i){var s=o[2];return r[i]=i,s.forEach(function(l){r[l]=i}),r});var a="far"in V||d.autoFetchSvg,n=pt($r,function(r,o){var i=o[0],s=o[1],l=o[2];return s==="far"&&!a&&(s="fas"),typeof i=="string"&&(r.names[i]={prefix:s,iconName:l}),typeof i=="number"&&(r.unicodes[i.toString(16)]={prefix:s,iconName:l}),r},{names:{},unicodes:{}});da=n.names,ma=n.unicodes,Ut=lt(d.styleDefault,{family:d.familyDefault})};Fr(function(t){Ut=lt(t.styleDefault,{family:d.familyDefault})});ha();function Yt(t,e){return(ua[t]||{})[e]}function Wr(t,e){return(ca[t]||{})[e]}function _(t,e){return(va[t]||{})[e]}function ga(t){return da[t]||{prefix:null,iconName:null}}function Ur(t){var e=ma[t],a=Yt("fas",t);return e||(a?{prefix:"fas",iconName:a}:null)||{prefix:null,iconName:null}}function L(){return Ut}var pa=function(){return{prefix:null,iconName:null,rest:[]}};function Yr(t){var e=w,a=fa.reduce(function(n,r){return n[r]="".concat(d.cssPrefix,"-").concat(r),n},{});return Be.forEach(function(n){(t.includes(a[n])||t.some(function(r){return zr[n].includes(r)}))&&(e=n)}),e}function lt(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=e.family,n=a===void 0?w:a,r=yr[n][t];if(n===K&&!t)return"fad";var o=ee[n][t]||ee[n][r],i=t in I.styles?t:null,s=o||i||null;return s}function Hr(t){var e=[],a=null;return t.forEach(function(n){var r=Rr(d.cssPrefix,n);r?a=r:n&&e.push(n)}),{iconName:a,rest:e}}function oe(t){return t.sort().filter(function(e,a,n){return n.indexOf(e)===a})}var se=Ke.concat(Ve);function ft(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=e.skipLookups,n=a===void 0?!1:a,r=null,o=oe(t.filter(function(h){return se.includes(h)})),i=oe(t.filter(function(h){return!se.includes(h)})),s=o.filter(function(h){return r=h,!Ce.includes(h)}),l=ot(s,1),u=l[0],m=u===void 0?null:u,c=Yr(o),g=f(f({},Hr(i)),{},{prefix:lt(m,{family:c})});return f(f(f({},g),Vr({values:t,family:c,styles:V,config:d,canonical:g,givenPrefix:r})),Gr(n,r,g))}function Gr(t,e,a){var n=a.prefix,r=a.iconName;if(t||!n||!r)return{prefix:n,iconName:r};var o=e==="fa"?ga(r):{},i=_(n,r);return r=o.iconName||i||r,n=o.prefix||n,n==="far"&&!V.far&&V.fas&&!d.autoFetchSvg&&(n="fas"),{prefix:n,iconName:r}}var Xr=Be.filter(function(t){return t!==w||t!==K}),Br=Object.keys(wt).filter(function(t){return t!==w}).map(function(t){return Object.keys(wt[t])}).flat();function Vr(t){var e=t.values,a=t.family,n=t.canonical,r=t.givenPrefix,o=r===void 0?"":r,i=t.styles,s=i===void 0?{}:i,l=t.config,u=l===void 0?{}:l,m=a===K,c=e.includes("fa-duotone")||e.includes("fad"),g=u.familyDefault==="duotone",h=n.prefix==="fad"||n.prefix==="fa-duotone";if(!m&&(c||g||h)&&(n.prefix="fad"),(e.includes("fa-brands")||e.includes("fab"))&&(n.prefix="fab"),!n.prefix&&Xr.includes(a)){var y=Object.keys(s).find(function(S){return Br.includes(S)});if(y||u.autoFetchSvg){var b=fn.get(a).defaultShortPrefixId;n.prefix=b,n.iconName=_(n.prefix,n.iconName)||n.iconName}}return(n.prefix==="fa"||o==="fa")&&(n.prefix=L()||"fas"),n}var Kr=(function(){function t(){Ca(this,t),this.definitions={}}return Na(t,[{key:"add",value:function(){for(var a=this,n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];var i=r.reduce(this._pullDefinitions,{});Object.keys(i).forEach(function(s){a.definitions[s]=f(f({},a.definitions[s]||{}),i[s]),Et(s,i[s]);var l=Dt[w][s];l&&Et(l,i[s]),ha()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(a,n){var r=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(r).map(function(o){var i=r[o],s=i.prefix,l=i.iconName,u=i.icon,m=u[2];a[s]||(a[s]={}),m.length>0&&m.forEach(function(c){typeof c=="string"&&(a[s][c]=u)}),a[s][l]=u}),a}}])})(),le=[],W={},U={},Jr=Object.keys(U);function qr(t,e){var a=e.mixoutsTo;return le=t,W={},Object.keys(U).forEach(function(n){Jr.indexOf(n)===-1&&delete U[n]}),le.forEach(function(n){var r=n.mixout?n.mixout():{};if(Object.keys(r).forEach(function(i){typeof r[i]=="function"&&(a[i]=r[i]),nt(r[i])==="object"&&Object.keys(r[i]).forEach(function(s){a[i]||(a[i]={}),a[i][s]=r[i][s]})}),n.hooks){var o=n.hooks();Object.keys(o).forEach(function(i){W[i]||(W[i]=[]),W[i].push(o[i])})}n.provides&&n.provides(U)}),a}function Ft(t,e){for(var a=arguments.length,n=new Array(a>2?a-2:0),r=2;r<a;r++)n[r-2]=arguments[r];var o=W[t]||[];return o.forEach(function(i){e=i.apply(null,[e].concat(n))}),e}function z(t){for(var e=arguments.length,a=new Array(e>1?e-1:0),n=1;n<e;n++)a[n-1]=arguments[n];var r=W[t]||[];r.forEach(function(o){o.apply(null,a)})}function M(){var t=arguments[0],e=Array.prototype.slice.call(arguments,1);return U[t]?U[t].apply(null,e):void 0}function Ct(t){t.prefix==="fa"&&(t.prefix="fas");var e=t.iconName,a=t.prefix||L();if(e)return e=_(a,e)||e,re(ba.definitions,a,e)||re(I.styles,a,e)}var ba=new Kr,Qr=function(){d.autoReplaceSvg=!1,d.observeMutations=!1,z("noAuto")},Zr={i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return j?(z("beforeI2svg",e),M("pseudoElements2svg",e),M("i2svg",e)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},a=e.autoReplaceSvgRoot;d.autoReplaceSvg===!1&&(d.autoReplaceSvg=!0),d.observeMutations=!0,_r(function(){ei({autoReplaceSvgRoot:a}),z("watch",e)})}},ti={icon:function(e){if(e===null)return null;if(nt(e)==="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:_(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var a=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],n=lt(e[0]);return{prefix:n,iconName:_(n,a)||a}}if(typeof e=="string"&&(e.indexOf("".concat(d.cssPrefix,"-"))>-1||e.match(xr))){var r=ft(e.split(" "),{skipLookups:!0});return{prefix:r.prefix||L(),iconName:_(r.prefix,r.iconName)||r.iconName}}if(typeof e=="string"){var o=L();return{prefix:o,iconName:_(o,e)||e}}}},k={noAuto:Qr,config:d,dom:Zr,parse:ti,library:ba,findIconDefinition:Ct,toHtml:q},ei=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},a=e.autoReplaceSvgRoot,n=a===void 0?p:a;(Object.keys(I.styles).length>0||d.autoFetchSvg)&&j&&d.autoReplaceSvg&&k.dom.i2svg({node:n})};function ut(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(n){return q(n)})}}),Object.defineProperty(t,"node",{get:function(){if(j){var n=p.createElement("div");return n.innerHTML=t.html,n.children}}}),t}function ai(t){var e=t.children,a=t.main,n=t.mask,r=t.attributes,o=t.styles,i=t.transform;if(Wt(i)&&a.found&&!n.found){var s=a.width,l=a.height,u={x:s/l/2,y:.5};r.style=st(f(f({},o),{},{"transform-origin":"".concat(u.x+i.x/16,"em ").concat(u.y+i.y/16,"em")}))}return[{tag:"svg",attributes:r,children:e}]}function ni(t){var e=t.prefix,a=t.iconName,n=t.children,r=t.attributes,o=t.symbol,i=o===!0?"".concat(e,"-").concat(d.cssPrefix,"-").concat(a):o;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:f(f({},r),{},{id:i}),children:n}]}]}function ri(t){var e=["aria-label","aria-labelledby","title","role"];return e.some(function(a){return a in t})}function Ht(t){var e=t.icons,a=e.main,n=e.mask,r=t.prefix,o=t.iconName,i=t.transform,s=t.symbol,l=t.maskId,u=t.extra,m=t.watchable,c=m===void 0?!1:m,g=n.found?n:a,h=g.width,y=g.height,b=[d.replacementClass,o?"".concat(d.cssPrefix,"-").concat(o):""].filter(function(C){return u.classes.indexOf(C)===-1}).filter(function(C){return C!==""||!!C}).concat(u.classes).join(" "),S={children:[],attributes:f(f({},u.attributes),{},{"data-prefix":r,"data-icon":o,class:b,role:u.attributes.role||"img",viewBox:"0 0 ".concat(h," ").concat(y)})};!ri(u.attributes)&&!u.attributes["aria-hidden"]&&(S.attributes["aria-hidden"]="true"),c&&(S.attributes[$]="");var x=f(f({},S),{},{prefix:r,iconName:o,main:a,mask:n,maskId:l,transform:i,symbol:s,styles:f({},u.styles)}),A=n.found&&a.found?M("generateAbstractMask",x)||{children:[],attributes:{}}:M("generateAbstractIcon",x)||{children:[],attributes:{}},P=A.children,D=A.attributes;return x.children=P,x.attributes=D,s?ni(x):ai(x)}function fe(t){var e=t.content,a=t.width,n=t.height,r=t.transform,o=t.extra,i=t.watchable,s=i===void 0?!1:i,l=f(f({},o.attributes),{},{class:o.classes.join(" ")});s&&(l[$]="");var u=f({},o.styles);Wt(r)&&(u.transform=Tr({transform:r,width:a,height:n}),u["-webkit-transform"]=u.transform);var m=st(u);m.length>0&&(l.style=m);var c=[];return c.push({tag:"span",attributes:l,children:[e]}),c}function ii(t){var e=t.content,a=t.extra,n=f(f({},a.attributes),{},{class:a.classes.join(" ")}),r=st(a.styles);r.length>0&&(n.style=r);var o=[];return o.push({tag:"span",attributes:n,children:[e]}),o}var bt=I.styles;function Ot(t){var e=t[0],a=t[1],n=t.slice(4),r=ot(n,1),o=r[0],i=null;return Array.isArray(o)?i={tag:"g",attributes:{class:"".concat(d.cssPrefix,"-").concat(ht.GROUP)},children:[{tag:"path",attributes:{class:"".concat(d.cssPrefix,"-").concat(ht.SECONDARY),fill:"currentColor",d:o[0]}},{tag:"path",attributes:{class:"".concat(d.cssPrefix,"-").concat(ht.PRIMARY),fill:"currentColor",d:o[1]}}]}:i={tag:"path",attributes:{fill:"currentColor",d:o}},{found:!0,width:e,height:a,icon:i}}var oi={found:!1,width:512,height:512};function si(t,e){!ta&&!d.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function Nt(t,e){var a=e;return e==="fa"&&d.styleDefault!==null&&(e=L()),new Promise(function(n,r){if(a==="fa"){var o=ga(t)||{};t=o.iconName||t,e=o.prefix||e}if(t&&e&&bt[e]&&bt[e][t]){var i=bt[e][t];return n(Ot(i))}si(t,e),n(f(f({},oi),{},{icon:d.showMissingIcons&&t?M("missingIconAbstract")||{}:{}}))})}var ue=function(){},jt=d.measurePerformance&&Q&&Q.mark&&Q.measure?Q:{mark:ue,measure:ue},G='FA "7.2.0"',li=function(e){return jt.mark("".concat(G," ").concat(e," begins")),function(){return ya(e)}},ya=function(e){jt.mark("".concat(G," ").concat(e," ends")),jt.measure("".concat(G," ").concat(e),"".concat(G," ").concat(e," begins"),"".concat(G," ").concat(e," ends"))},Gt={begin:li,end:ya},et=function(){};function ce(t){var e=t.getAttribute?t.getAttribute($):null;return typeof e=="string"}function fi(t){var e=t.getAttribute?t.getAttribute($t):null,a=t.getAttribute?t.getAttribute(zt):null;return e&&a}function ui(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(d.replacementClass)}function ci(){if(d.autoReplaceSvg===!0)return at.replace;var t=at[d.autoReplaceSvg];return t||at.replace}function di(t){return p.createElementNS("http://www.w3.org/2000/svg",t)}function mi(t){return p.createElement(t)}function xa(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=e.ceFn,n=a===void 0?t.tag==="svg"?di:mi:a;if(typeof t=="string")return p.createTextNode(t);var r=n(t.tag);Object.keys(t.attributes||[]).forEach(function(i){r.setAttribute(i,t.attributes[i])});var o=t.children||[];return o.forEach(function(i){r.appendChild(xa(i,{ceFn:n}))}),r}function vi(t){var e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var at={replace:function(e){var a=e[0];if(a.parentNode)if(e[1].forEach(function(r){a.parentNode.insertBefore(xa(r),a)}),a.getAttribute($)===null&&d.keepOriginalSource){var n=p.createComment(vi(a));a.parentNode.replaceChild(n,a)}else a.remove()},nest:function(e){var a=e[0],n=e[1];if(~Rt(a).indexOf(d.replacementClass))return at.replace(e);var r=new RegExp("".concat(d.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){var o=n[0].attributes.class.split(" ").reduce(function(s,l){return l===d.replacementClass||l.match(r)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});n[0].attributes.class=o.toSvg.join(" "),o.toNode.length===0?a.removeAttribute("class"):a.setAttribute("class",o.toNode.join(" "))}var i=n.map(function(s){return q(s)}).join(`
`);a.setAttribute($,""),a.innerHTML=i}};function de(t){t()}function wa(t,e){var a=typeof e=="function"?e:et;if(t.length===0)a();else{var n=de;d.mutateApproach===pr&&(n=T.requestAnimationFrame||de),n(function(){var r=ci(),o=Gt.begin("mutate");t.map(r),o(),a()})}}var Xt=!1;function Sa(){Xt=!0}function Tt(){Xt=!1}var it=null;function me(t){if(qt&&d.observeMutations){var e=t.treeCallback,a=e===void 0?et:e,n=t.nodeCallback,r=n===void 0?et:n,o=t.pseudoElementsCallback,i=o===void 0?et:o,s=t.observeMutationsRoot,l=s===void 0?p:s;it=new qt(function(u){if(!Xt){var m=L();H(u).forEach(function(c){if(c.type==="childList"&&c.addedNodes.length>0&&!ce(c.addedNodes[0])&&(d.searchPseudoElements&&i(c.target),a(c.target)),c.type==="attributes"&&c.target.parentNode&&d.searchPseudoElements&&i([c.target],!0),c.type==="attributes"&&ce(c.target)&&~Ar.indexOf(c.attributeName))if(c.attributeName==="class"&&fi(c.target)){var g=ft(Rt(c.target)),h=g.prefix,y=g.iconName;c.target.setAttribute($t,h||m),y&&c.target.setAttribute(zt,y)}else ui(c.target)&&r(c.target)})}}),j&&it.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function hi(){it&&it.disconnect()}function gi(t){var e=t.getAttribute("style"),a=[];return e&&(a=e.split(";").reduce(function(n,r){var o=r.split(":"),i=o[0],s=o.slice(1);return i&&s.length>0&&(n[i]=s.join(":").trim()),n},{})),a}function pi(t){var e=t.getAttribute("data-prefix"),a=t.getAttribute("data-icon"),n=t.innerText!==void 0?t.innerText.trim():"",r=ft(Rt(t));return r.prefix||(r.prefix=L()),e&&a&&(r.prefix=e,r.iconName=a),r.iconName&&r.prefix||(r.prefix&&n.length>0&&(r.iconName=Wr(r.prefix,t.innerText)||Yt(r.prefix,la(t.innerText))),!r.iconName&&d.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=t.firstChild.data)),r}function bi(t){var e=H(t.attributes).reduce(function(a,n){return a.name!=="class"&&a.name!=="style"&&(a[n.name]=n.value),a},{});return e}function yi(){return{iconName:null,prefix:null,transform:F,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function ve(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},a=pi(t),n=a.iconName,r=a.prefix,o=a.rest,i=bi(t),s=Ft("parseNodeAttributes",{},t),l=e.styleParser?gi(t):[];return f({iconName:n,prefix:r,transform:F,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:o,styles:l,attributes:i}},s)}var xi=I.styles;function Aa(t){var e=d.autoReplaceSvg==="nest"?ve(t,{styleParser:!1}):ve(t);return~e.extra.classes.indexOf(aa)?M("generateLayersText",t,e):M("generateSvgReplacementMutation",t,e)}function wi(){return[].concat(E(Ve),E(Ke))}function he(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!j)return Promise.resolve();var a=p.documentElement.classList,n=function(c){return a.add("".concat(te,"-").concat(c))},r=function(c){return a.remove("".concat(te,"-").concat(c))},o=d.autoFetchSvg?wi():Ce.concat(Object.keys(xi));o.includes("fa")||o.push("fa");var i=[".".concat(aa,":not([").concat($,"])")].concat(o.map(function(m){return".".concat(m,":not([").concat($,"])")})).join(", ");if(i.length===0)return Promise.resolve();var s=[];try{s=H(t.querySelectorAll(i))}catch{}if(s.length>0)n("pending"),r("complete");else return Promise.resolve();var l=Gt.begin("onTree"),u=s.reduce(function(m,c){try{var g=Aa(c);g&&m.push(g)}catch(h){ta||h.name==="MissingIcon"&&console.error(h)}return m},[]);return new Promise(function(m,c){Promise.all(u).then(function(g){wa(g,function(){n("active"),n("complete"),r("pending"),typeof e=="function"&&e(),l(),m()})}).catch(function(g){l(),c(g)})})}function Si(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Aa(t).then(function(a){a&&wa([a],e)})}function Ai(t){return function(e){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=(e||{}).icon?e:Ct(e||{}),r=a.mask;return r&&(r=(r||{}).icon?r:Ct(r||{})),t(n,f(f({},a),{},{mask:r}))}}var ki=function(e){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=a.transform,r=n===void 0?F:n,o=a.symbol,i=o===void 0?!1:o,s=a.mask,l=s===void 0?null:s,u=a.maskId,m=u===void 0?null:u,c=a.classes,g=c===void 0?[]:c,h=a.attributes,y=h===void 0?{}:h,b=a.styles,S=b===void 0?{}:b;if(e){var x=e.prefix,A=e.iconName,P=e.icon;return ut(f({type:"icon"},e),function(){return z("beforeDOMElementCreation",{iconDefinition:e,params:a}),Ht({icons:{main:Ot(P),mask:l?Ot(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:x,iconName:A,transform:f(f({},F),r),symbol:i,maskId:m,extra:{attributes:y,styles:S,classes:g}})})}},Pi={mixout:function(){return{icon:Ai(ki)}},hooks:function(){return{mutationObserverCallbacks:function(a){return a.treeCallback=he,a.nodeCallback=Si,a}}},provides:function(e){e.i2svg=function(a){var n=a.node,r=n===void 0?p:n,o=a.callback,i=o===void 0?function(){}:o;return he(r,i)},e.generateSvgReplacementMutation=function(a,n){var r=n.iconName,o=n.prefix,i=n.transform,s=n.symbol,l=n.mask,u=n.maskId,m=n.extra;return new Promise(function(c,g){Promise.all([Nt(r,o),l.iconName?Nt(l.iconName,l.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(h){var y=ot(h,2),b=y[0],S=y[1];c([a,Ht({icons:{main:b,mask:S},prefix:o,iconName:r,transform:i,symbol:s,maskId:u,extra:m,watchable:!0})])}).catch(g)})},e.generateAbstractIcon=function(a){var n=a.children,r=a.attributes,o=a.main,i=a.transform,s=a.styles,l=st(s);l.length>0&&(r.style=l);var u;return Wt(i)&&(u=M("generateAbstractTransformGrouping",{main:o,transform:i,containerWidth:o.width,iconWidth:o.width})),n.push(u||o.icon),{children:n,attributes:r}}}},Ii={mixout:function(){return{layer:function(a){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.classes,o=r===void 0?[]:r;return ut({type:"layer"},function(){z("beforeDOMElementCreation",{assembler:a,params:n});var i=[];return a(function(s){Array.isArray(s)?s.map(function(l){i=i.concat(l.abstract)}):i=i.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(d.cssPrefix,"-layers")].concat(E(o)).join(" ")},children:i}]})}}}},Ei={mixout:function(){return{counter:function(a){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};n.title;var r=n.classes,o=r===void 0?[]:r,i=n.attributes,s=i===void 0?{}:i,l=n.styles,u=l===void 0?{}:l;return ut({type:"counter",content:a},function(){return z("beforeDOMElementCreation",{content:a,params:n}),ii({content:a.toString(),extra:{attributes:s,styles:u,classes:["".concat(d.cssPrefix,"-layers-counter")].concat(E(o))}})})}}}},Fi={mixout:function(){return{text:function(a){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,o=r===void 0?F:r,i=n.classes,s=i===void 0?[]:i,l=n.attributes,u=l===void 0?{}:l,m=n.styles,c=m===void 0?{}:m;return ut({type:"text",content:a},function(){return z("beforeDOMElementCreation",{content:a,params:n}),fe({content:a,transform:f(f({},F),o),extra:{attributes:u,styles:c,classes:["".concat(d.cssPrefix,"-layers-text")].concat(E(s))}})})}}},provides:function(e){e.generateLayersText=function(a,n){var r=n.transform,o=n.extra,i=null,s=null;if(Ee){var l=parseInt(getComputedStyle(a).fontSize,10),u=a.getBoundingClientRect();i=u.width/l,s=u.height/l}return Promise.resolve([a,fe({content:a.innerHTML,width:i,height:s,transform:r,extra:o,watchable:!0})])}}},ka=new RegExp('"',"ug"),ge=[1105920,1112319],pe=f(f(f(f({},{FontAwesome:{normal:"fas",400:"fas"}}),ln),hr),pn),Lt=Object.keys(pe).reduce(function(t,e){return t[e.toLowerCase()]=pe[e],t},{}),Ci=Object.keys(Lt).reduce(function(t,e){var a=Lt[e];return t[e]=a[900]||E(Object.entries(a))[0][1],t},{});function Oi(t){var e=t.replace(ka,"");return la(E(e)[0]||"")}function Ni(t){var e=t.getPropertyValue("font-feature-settings").includes("ss01"),a=t.getPropertyValue("content"),n=a.replace(ka,""),r=n.codePointAt(0),o=r>=ge[0]&&r<=ge[1],i=n.length===2?n[0]===n[1]:!1;return o||i||e}function ji(t,e){var a=t.replace(/^['"]|['"]$/g,"").toLowerCase(),n=parseInt(e),r=isNaN(n)?"normal":n;return(Lt[a]||{})[r]||Ci[a]}function be(t,e){var a="".concat(gr).concat(e.replace(":","-"));return new Promise(function(n,r){if(t.getAttribute(a)!==null)return n();var o=H(t.children),i=o.filter(function(ct){return ct.getAttribute(At)===e})[0],s=T.getComputedStyle(t,e),l=s.getPropertyValue("font-family"),u=l.match(wr),m=s.getPropertyValue("font-weight"),c=s.getPropertyValue("content");if(i&&!u)return t.removeChild(i),n();if(u&&c!=="none"&&c!==""){var g=s.getPropertyValue("content"),h=ji(l,m),y=Oi(g),b=u[0].startsWith("FontAwesome"),S=Ni(s),x=Yt(h,y),A=x;if(b){var P=Ur(y);P.iconName&&P.prefix&&(x=P.iconName,h=P.prefix)}if(x&&!S&&(!i||i.getAttribute($t)!==h||i.getAttribute(zt)!==A)){t.setAttribute(a,A),i&&t.removeChild(i);var D=yi(),C=D.extra;C.attributes[At]=e,Nt(x,h).then(function(ct){var Pa=Ht(f(f({},D),{},{icons:{main:ct,mask:pa()},prefix:h,iconName:A,extra:C,watchable:!0})),dt=p.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(dt,t.firstChild):t.appendChild(dt),dt.outerHTML=Pa.map(function(Ia){return q(Ia)}).join(`
`),t.removeAttribute(a),n()}).catch(r)}else n()}else n()})}function Ti(t){return Promise.all([be(t,"::before"),be(t,"::after")])}function Li(t){return t.parentNode!==document.head&&!~br.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(At)&&(!t.parentNode||t.parentNode.tagName!=="svg")}var Mi=function(e){return!!e&&Ze.some(function(a){return e.includes(a)})},_i=function(e){if(!e)return[];var a=new Set,n=e.split(/,(?![^()]*\))/).map(function(l){return l.trim()});n=n.flatMap(function(l){return l.includes("(")?l:l.split(",").map(function(u){return u.trim()})});var r=tt(n),o;try{for(r.s();!(o=r.n()).done;){var i=o.value;if(Mi(i)){var s=Ze.reduce(function(l,u){return l.replace(u,"")},i);s!==""&&s!=="*"&&a.add(s)}}}catch(l){r.e(l)}finally{r.f()}return a};function ye(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(j){var a;if(e)a=t;else if(d.searchPseudoElementsFullScan)a=t.querySelectorAll("*");else{var n=new Set,r=tt(document.styleSheets),o;try{for(r.s();!(o=r.n()).done;){var i=o.value;try{var s=tt(i.cssRules),l;try{for(s.s();!(l=s.n()).done;){var u=l.value,m=_i(u.selectorText),c=tt(m),g;try{for(c.s();!(g=c.n()).done;){var h=g.value;n.add(h)}}catch(b){c.e(b)}finally{c.f()}}}catch(b){s.e(b)}finally{s.f()}}catch(b){d.searchPseudoElementsWarnings&&console.warn("Font Awesome: cannot parse stylesheet: ".concat(i.href," (").concat(b.message,`)
If it declares any Font Awesome CSS pseudo-elements, they will not be rendered as SVG icons. Add crossorigin="anonymous" to the <link>, enable searchPseudoElementsFullScan for slower but more thorough DOM parsing, or suppress this warning by setting searchPseudoElementsWarnings to false.`))}}}catch(b){r.e(b)}finally{r.f()}if(!n.size)return;var y=Array.from(n).join(", ");try{a=t.querySelectorAll(y)}catch{}}return new Promise(function(b,S){var x=H(a).filter(Li).map(Ti),A=Gt.begin("searchPseudoElements");Sa(),Promise.all(x).then(function(){A(),Tt(),b()}).catch(function(){A(),Tt(),S()})})}}var $i={hooks:function(){return{mutationObserverCallbacks:function(a){return a.pseudoElementsCallback=ye,a}}},provides:function(e){e.pseudoElements2svg=function(a){var n=a.node,r=n===void 0?p:n;d.searchPseudoElements&&ye(r)}}},xe=!1,zi={mixout:function(){return{dom:{unwatch:function(){Sa(),xe=!0}}}},hooks:function(){return{bootstrap:function(){me(Ft("mutationObserverCallbacks",{}))},noAuto:function(){hi()},watch:function(a){var n=a.observeMutationsRoot;xe?Tt():me(Ft("mutationObserverCallbacks",{observeMutationsRoot:n}))}}}},we=function(e){var a={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce(function(n,r){var o=r.toLowerCase().split("-"),i=o[0],s=o.slice(1).join("-");if(i&&s==="h")return n.flipX=!0,n;if(i&&s==="v")return n.flipY=!0,n;if(s=parseFloat(s),isNaN(s))return n;switch(i){case"grow":n.size=n.size+s;break;case"shrink":n.size=n.size-s;break;case"left":n.x=n.x-s;break;case"right":n.x=n.x+s;break;case"up":n.y=n.y-s;break;case"down":n.y=n.y+s;break;case"rotate":n.rotate=n.rotate+s;break}return n},a)},Di={mixout:function(){return{parse:{transform:function(a){return we(a)}}}},hooks:function(){return{parseNodeAttributes:function(a,n){var r=n.getAttribute("data-fa-transform");return r&&(a.transform=we(r)),a}}},provides:function(e){e.generateAbstractTransformGrouping=function(a){var n=a.main,r=a.transform,o=a.containerWidth,i=a.iconWidth,s={transform:"translate(".concat(o/2," 256)")},l="translate(".concat(r.x*32,", ").concat(r.y*32,") "),u="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),m="rotate(".concat(r.rotate," 0 0)"),c={transform:"".concat(l," ").concat(u," ").concat(m)},g={transform:"translate(".concat(i/2*-1," -256)")},h={outer:s,inner:c,path:g};return{tag:"g",attributes:f({},h.outer),children:[{tag:"g",attributes:f({},h.inner),children:[{tag:n.icon.tag,children:n.icon.children,attributes:f(f({},n.icon.attributes),h.path)}]}]}}}},yt={x:0,y:0,width:"100%",height:"100%"};function Se(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function Ri(t){return t.tag==="g"?t.children:[t]}var Wi={hooks:function(){return{parseNodeAttributes:function(a,n){var r=n.getAttribute("data-fa-mask"),o=r?ft(r.split(" ").map(function(i){return i.trim()})):pa();return o.prefix||(o.prefix=L()),a.mask=o,a.maskId=n.getAttribute("data-fa-mask-id"),a}}},provides:function(e){e.generateAbstractMask=function(a){var n=a.children,r=a.attributes,o=a.main,i=a.mask,s=a.maskId,l=a.transform,u=o.width,m=o.icon,c=i.width,g=i.icon,h=jr({transform:l,containerWidth:c,iconWidth:u}),y={tag:"rect",attributes:f(f({},yt),{},{fill:"white"})},b=m.children?{children:m.children.map(Se)}:{},S={tag:"g",attributes:f({},h.inner),children:[Se(f({tag:m.tag,attributes:f(f({},m.attributes),h.path)},b))]},x={tag:"g",attributes:f({},h.outer),children:[S]},A="mask-".concat(s||ae()),P="clip-".concat(s||ae()),D={tag:"mask",attributes:f(f({},yt),{},{id:A,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[y,x]},C={tag:"defs",children:[{tag:"clipPath",attributes:{id:P},children:Ri(g)},D]};return n.push(C,{tag:"rect",attributes:f({fill:"currentColor","clip-path":"url(#".concat(P,")"),mask:"url(#".concat(A,")")},yt)}),{children:n,attributes:r}}}},Ui={provides:function(e){var a=!1;T.matchMedia&&(a=T.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){var n=[],r={fill:"currentColor"},o={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};n.push({tag:"path",attributes:f(f({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var i=f(f({},o),{},{attributeName:"opacity"}),s={tag:"circle",attributes:f(f({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return a||s.children.push({tag:"animate",attributes:f(f({},o),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:f(f({},i),{},{values:"1;0;1;1;0;1;"})}),n.push(s),n.push({tag:"path",attributes:f(f({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:a?[]:[{tag:"animate",attributes:f(f({},i),{},{values:"1;0;0;0;0;1;"})}]}),a||n.push({tag:"path",attributes:f(f({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:f(f({},i),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:n}}}},Yi={hooks:function(){return{parseNodeAttributes:function(a,n){var r=n.getAttribute("data-fa-symbol"),o=r===null?!1:r===""?!0:r;return a.symbol=o,a}}}},Hi=[Mr,Pi,Ii,Ei,Fi,$i,zi,Di,Wi,Ui,Yi];qr(Hi,{mixoutsTo:k});k.noAuto;var Gi=k.config;k.library;k.dom;var Xi=k.parse;k.findIconDefinition;k.toHtml;var Bi=k.icon;k.layer;k.text;k.counter;var Vi={prefix:"fas",iconName:"paper-plane",icon:[576,512,[61913],"f1d8","M536.4-26.3c9.8-3.5 20.6-1 28 6.3s9.8 18.2 6.3 28l-178 496.9c-5 13.9-18.1 23.1-32.8 23.1-14.2 0-27-8.6-32.3-21.7l-64.2-158c-4.5-11-2.5-23.6 5.2-32.6l94.5-112.4c5.1-6.1 4.7-15-.9-20.6s-14.6-6-20.6-.9L229.2 276.1c-9.1 7.6-21.6 9.6-32.6 5.2L38.1 216.8c-13.1-5.3-21.7-18.1-21.7-32.3 0-14.7 9.2-27.8 23.1-32.8l496.9-178z"]},Ki={prefix:"fas",iconName:"chevron-right",icon:[320,512,[9002],"f054","M311.1 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L243.2 256 73.9 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"]},Ji={prefix:"fas",iconName:"chess-pawn",icon:[384,512,[9823],"f443","M192-32c66.3 0 120 53.7 120 120 0 27-8.9 51.9-24 72 17.7 0 32 14.3 32 32s-14.3 32-32 32l-10.7 0 26.7 160 56.2 70.3c5 6.3 7.8 14.1 7.8 22.2 0 19.6-15.9 35.5-35.5 35.5L51.5 512c-19.6 0-35.5-15.9-35.5-35.5 0-8.1 2.7-15.9 7.8-22.2L80 384 106.7 224 96 224c-17.7 0-32-14.3-32-32s14.3-32 32-32c-15.1-20.1-24-45-24-72 0-66.3 53.7-120 120-120z"]},qi={prefix:"fas",iconName:"chess-bishop",icon:[320,512,[9821],"f43a","M64 384L48.3 368.3C17.4 337.4 0 295.4 0 251.7 0 213.1 13.5 175.8 38.2 146.1L106.7 64 96 64C78.3 64 64 49.7 64 32S78.3 0 96 0L224 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-10.7 0 47.6 57.1-85.9 85.9c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l82.3-82.3c18.7 27.3 28.7 59.7 28.7 93 0 43.7-17.4 85.7-48.3 116.6L256 384 312.2 454.3c5 6.3 7.8 14.1 7.8 22.2 0 19.6-15.9 35.5-35.5 35.5L35.5 512c-19.6 0-35.5-15.9-35.5-35.5 0-8.1 2.7-15.9 7.8-22.2L64 384z"]},Qi={prefix:"fas",iconName:"chess-rook",icon:[384,512,[9820],"f447","M0 32L0 133.5c0 17 6.7 33.3 18.7 45.3L64 224 64 384 7.8 454.3C2.7 460.6 0 468.4 0 476.5 0 496.1 15.9 512 35.5 512l312.9 0c19.6 0 35.5-15.9 35.5-35.5 0-8.1-2.7-15.9-7.8-22.2l-56.2-70.3 0-160 45.3-45.3c12-12 18.7-28.3 18.7-45.3L384 32c0-17.7-14.3-32-32-32L320 0c-17.7 0-32 14.3-32 32l0 32-48 0 0-32c0-17.7-14.3-32-32-32L176 0c-17.7 0-32 14.3-32 32l0 32-48 0 0-32C96 14.3 81.7 0 64 0L32 0C14.3 0 0 14.3 0 32z"]},Zi={prefix:"fas",iconName:"xmark",icon:[384,512,[128473,10005,10006,10060,215,"close","multiply","remove","times"],"f00d","M55.1 73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L147.2 256 9.9 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192.5 301.3 329.9 438.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.8 256 375.1 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192.5 210.7 55.1 73.4z"]},to={prefix:"fas",iconName:"chevron-left",icon:[320,512,[9001],"f053","M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"]},eo={prefix:"fas",iconName:"chess-knight",icon:[384,512,[9822],"f441","M192-32c106 0 192 86 192 192l0 133.5c0 17-6.8 33.2-18.7 45.2L320 384 370.8 434.7c8.5 8.5 13.2 20 13.2 32 0 25-20.3 45.2-45.2 45.3L45.3 512c-25 0-45.2-20.3-45.2-45.3 0-12 4.8-23.5 13.2-32L64 384 64 349.4c0-18.7 8.2-36.4 22.3-48.6l89.7-76.8-48 0-12.1 12.1c-12.7 12.7-30 19.9-48 19.9-37.5 0-67.9-30.4-67.9-67.9l0-8.7c0-22.8 8.2-44.9 23.1-62.3L96 32 96 0c0-17.7 14.3-32 32-32l64 0zM160 72a24 24 0 1 0 0 48 24 24 0 1 0 0-48z"]};var ao={prefix:"fab",iconName:"discord",icon:[576,512,[],"f392","M492.5 69.8c-.2-.3-.4-.6-.8-.7-38.1-17.5-78.4-30-119.7-37.1-.4-.1-.8 0-1.1 .1s-.6 .4-.8 .8c-5.5 9.9-10.5 20.2-14.9 30.6-44.6-6.8-89.9-6.8-134.4 0-4.5-10.5-9.5-20.7-15.1-30.6-.2-.3-.5-.6-.8-.8s-.7-.2-1.1-.2c-41.3 7.1-81.6 19.6-119.7 37.1-.3 .1-.6 .4-.8 .7-76.2 113.8-97.1 224.9-86.9 334.5 0 .3 .1 .5 .2 .8s.3 .4 .5 .6c44.4 32.9 94 58 146.8 74.2 .4 .1 .8 .1 1.1 0s.7-.4 .9-.7c11.3-15.4 21.4-31.8 30-48.8 .1-.2 .2-.5 .2-.8s0-.5-.1-.8-.2-.5-.4-.6-.4-.3-.7-.4c-15.8-6.1-31.2-13.4-45.9-21.9-.3-.2-.5-.4-.7-.6s-.3-.6-.3-.9 0-.6 .2-.9 .3-.5 .6-.7c3.1-2.3 6.2-4.7 9.1-7.1 .3-.2 .6-.4 .9-.4s.7 0 1 .1c96.2 43.9 200.4 43.9 295.5 0 .3-.1 .7-.2 1-.2s.7 .2 .9 .4c2.9 2.4 6 4.9 9.1 7.2 .2 .2 .4 .4 .6 .7s.2 .6 .2 .9-.1 .6-.3 .9-.4 .5-.6 .6c-14.7 8.6-30 15.9-45.9 21.8-.2 .1-.5 .2-.7 .4s-.3 .4-.4 .7-.1 .5-.1 .8 .1 .5 .2 .8c8.8 17 18.8 33.3 30 48.8 .2 .3 .6 .6 .9 .7s.8 .1 1.1 0c52.9-16.2 102.6-41.3 147.1-74.2 .2-.2 .4-.4 .5-.6s.2-.5 .2-.8c12.3-126.8-20.5-236.9-86.9-334.5zm-302 267.7c-29 0-52.8-26.6-52.8-59.2s23.4-59.2 52.8-59.2c29.7 0 53.3 26.8 52.8 59.2 0 32.7-23.4 59.2-52.8 59.2zm195.4 0c-29 0-52.8-26.6-52.8-59.2s23.4-59.2 52.8-59.2c29.7 0 53.3 26.8 52.8 59.2 0 32.7-23.2 59.2-52.8 59.2z"]},no={prefix:"fab",iconName:"github",icon:[512,512,[],"f09b","M173.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM252.8 8c-138.7 0-244.8 105.3-244.8 244 0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1 100-33.2 167.8-128.1 167.8-239 0-138.7-112.5-244-251.2-244zM105.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9s4.3 3.3 5.6 2.3c1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"]},ro={prefix:"fab",iconName:"instagram",icon:[448,512,[],"f16d","M224.3 141a115 115 0 1 0 -.6 230 115 115 0 1 0 .6-230zm-.6 40.4a74.6 74.6 0 1 1 .6 149.2 74.6 74.6 0 1 1 -.6-149.2zm93.4-45.1a26.8 26.8 0 1 1 53.6 0 26.8 26.8 0 1 1 -53.6 0zm129.7 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM399 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"]},io={prefix:"fab",iconName:"linkedin-in",icon:[448,512,[],"f0e1","M100.3 448l-92.9 0 0-299.1 92.9 0 0 299.1zM53.8 108.1C24.1 108.1 0 83.5 0 53.8 0 39.5 5.7 25.9 15.8 15.8s23.8-15.8 38-15.8 27.9 5.7 38 15.8 15.8 23.8 15.8 38c0 29.7-24.1 54.3-53.8 54.3zM447.9 448l-92.7 0 0-145.6c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7l0 148.1-92.8 0 0-299.1 89.1 0 0 40.8 1.3 0c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3l0 164.3-.1 0z"]};export{Qi as a,eo as b,Gi as c,qi as d,Ji as e,Zi as f,to as g,Ki as h,Bi as i,Vi as j,io as k,ao as l,ro as m,no as n,Xi as p};
