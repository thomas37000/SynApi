(this.webpackJsonplive_wall=this.webpackJsonplive_wall||[]).push([[0],{107:function(e,t,n){},163:function(e,t,n){},293:function(e,t,n){},294:function(e,t,n){},295:function(e,t,n){},296:function(e,t,n){},304:function(e,t,n){},309:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),s=n(19),o=n.n(s),r=(n(163),n(6)),i=n(27),l=n(12),u=n(61),j=n.n(u),b=n(1),d=Object(a.createContext)(null),O=function(e){var t=Object(a.useState)([]),n=Object(r.a)(t,2),c=n[0],s=n[1],o=Object(a.useState)([]),i=Object(r.a)(o,2),l=i[0],u=i[1],O=Object(a.useState)(10),h=Object(r.a)(O,2),m=h[0],x=h[1],f=Object(a.useState)("DESC"),g=Object(r.a)(f,2),p=g[0],C=g[1],v=Object({NODE_ENV:"production",PUBLIC_URL:"https://livewall.slideyour.org",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_SYN_URL:"https://slideyour.net/",REACT_APP_API_URL:"https://slideyour.net/api.php",REACT_APP_API_USER:"thomas3",REACT_APP_API_TOKEN:"8845c9cd48230070ac72191467ac1690"}),S=v.REACT_APP_API_URL,_=v.REACT_APP_API_USER,k=v.REACT_APP_API_TOKEN,y="".concat(S),I="".concat(_),N="".concat(k),P={s:"".concat(I),t:"".concat(N),object:"post",network:"",per_page:"50",order:"DESC",order_by:"pub_date"};Object(a.useEffect)((function(){j.a.get("".concat(y),{params:P}).then((function(e){e.data.length>0&&(u(e.data),s(e.data.slice(0,m)))})).catch((function(e){return console.log(e)}))}),[]);var E=Object(a.useMemo)((function(){return{function:{setNewPost:x,setItems:s,setSorting:C},items:c,maxItems:l,newPost:m,sorting:p}}),[c,l,m,p]),A=e.children;return Object(b.jsx)(d.Provider,{value:{statesParams:E},children:A})},h=Object(a.createContext)(null),m=function(e){var t={txtColor:"#fff",black:"#000",fk_babgroundColor:"#4267b2",fk_hashtagColor:"#4267b2",fk_mentionColor:"#4267b2",fk_hashtagColor_txt:"#000",fk_mentionColor_txt:"#000",im_backgroundColor:"#e1306c",im_hashtagColor:"#e1306c",im_mentionColor:"#e1306c",im_hashtagColor_txt:"#000",im_mentionColor_txt:"#000",tr_backgroundColor:"#1da1f2",tr_hashtagColor:"#1da1f2",tr_mentionColor:"#1da1f2",tr_hashtagColor_txt:"#000",tr_mentionColor_txt:"#000"},n={txt:sessionStorage.getItem("text")||"#fff",black:sessionStorage.getItem("mention")||"#000",im:sessionStorage.getItem("mention")||"#e1306c",fk:sessionStorage.getItem("mention")||"#4267b2",fkBackgroundNoImg:sessionStorage.getItem("background")||"#4267b2",fkRegexColor:sessionStorage.getItem("hashtag")||"#4267b2",tr:sessionStorage.getItem("mention")||"#1da1f2",trBackgroundNoImg:sessionStorage.getItem("background")||"#1da1f2",trRegexColor:sessionStorage.getItem("hashtag")||"#1da1f2"},c={typo:sessionStorage.getItem("font_family")||"Arial"},s=Object(a.useState)(c.typo),o=Object(r.a)(s,2),i=o[0],l=o[1],u=n.trBackgroundNoImg||n.fkBackgroundNoImg,j=Object(a.useState)(u),d=Object(r.a)(j,2),O=d[0],m=d[1],x=Object(a.useState)(n.fkRegexColor&&n.imRegexColor&&n.trRegexColor),f=Object(r.a)(x,2),g=f[0],p=f[1],C=Object(a.useState)(n.imRegexColor&&n.fkRegexColor&&n.trRegexColor),v=Object(r.a)(C,2),S=v[0],_=v[1],k=Object(a.useState)(n.txt),y=Object(r.a)(k,2),I=y[0],N=y[1],P=Object(a.useMemo)((function(){return{function:{setActiveFontFamily:l,setBackgroundColor:m,setHashtagColor:p,setMentionColor:_,setTxtColor:N},activeFontFamily:i,backgroundColor:O,mentionColor:S,hashtagColor:g,txtColor:I,unmutabledColors:t}}),[i,O,S,g,I,t]),E=e.children;return Object(b.jsx)(h.Provider,{value:{states:P},children:E})},x=n(93),f=n.n(x),g=n(139),p=n(67),C=n(339),v=n(341),S=n(335);n(72);n(107);function _(e){return Object(b.jsx)(v.a,Object(p.a)({elevation:6,variant:"filled"},e))}var k,y=function(e){var t=Object(S.a)({alertStyles:{backgroundColor:"#f44336",color:"white"}}),n=Object(a.useState)([]),c=Object(r.a)(n,2),s=(c[0],c[1]),o=Object(a.useState)({}),l=Object(r.a)(o,2),u=l[0],d=l[1],O=Object(a.useState)(null),h=Object(r.a)(O,2),m=(h[0],h[1]),x=Object({NODE_ENV:"production",PUBLIC_URL:"https://livewall.slideyour.org",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_SYN_URL:"https://slideyour.net/",REACT_APP_API_URL:"https://slideyour.net/api.php",REACT_APP_API_USER:"thomas3",REACT_APP_API_TOKEN:"8845c9cd48230070ac72191467ac1690"}),p=x.REACT_APP_API_URL,v=x.REACT_APP_API_USER,k=x.REACT_APP_API_TOKEN,y="".concat(p),I="".concat(v),N="".concat(k),P={s:"".concat(I),t:"".concat(N),object:"user"},E=function(){var e=Object(g.a)(f.a.mark((function e(t,n){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.a.get("".concat(y),{params:P}).then((function(e){s(e.data)}),(function(e){m(e)}));case 2:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}();Object(a.useEffect)((function(){E()}),[]);var A=t(),T=(sessionStorage.getItem("username"),Object(a.useState)(!1)),w=Object(r.a)(T,2),R=w[0],F=w[1],U=Object(a.useState)(""),B=Object(r.a)(U,2),D=B[0],H=B[1],L=Object(a.useState)(""),W=Object(r.a)(L,2),M=(W[0],W[1],Object(a.useState)("")),K=Object(r.a)(M,2),J=(K[0],K[1],Object(a.useState)({})),z=Object(r.a)(J,2),Z=(z[0],z[1],function(e){e.preventDefault(),H("");JSON.stringify(u)});Object(a.useEffect)((function(){sessionStorage.setItem("username",I),d({userName:D})}),[D]);var V=function(e,t){"clickaway"!==t&&F(!1)},Y=(e.displayUserName,D===I);return Object(b.jsx)("div",{className:"connexion",children:Object(b.jsxs)("div",{className:"acceuil",children:[Object(b.jsx)("h1",{className:"h1Connexion",children:"Slide Your Net"}),Object(b.jsx)("h2",{className:"h2Connexion",children:"Une application pour retrouver vos publications favorites"}),Object(b.jsxs)("h3",{className:"h3Connexion",children:[Object(b.jsx)("span",{children:"Facebook"})," - ",Object(b.jsx)("span",{children:"Instagram"})," -",Object(b.jsx)("span",{children:"Twitter"})]}),Object(b.jsxs)("div",{className:"formulaire",children:[Y?Object(b.jsxs)("div",{children:["Bienvenue",Object(b.jsxs)(i.b,{to:"/networks",children:[" ",D]})]}):null,Object(b.jsxs)("form",{onSubmit:Z,children:[Object(b.jsx)("span",{children:"Pour voir les publications entrez le nom thomas3"}),Object(b.jsxs)("label",{htmlFor:"inputidentifiant",className:"label",children:["Entrez votre nom",Object(b.jsx)("input",{className:"inputConnexion",type:"text",id:"inputIdentifiant",name:"inputMail",placeholder:"John Doe",value:D,onChange:function(e){H(e.target.value)}})]}),Object(b.jsx)("div",{children:Y?Object(b.jsx)(i.b,{to:"/networks",children:Object(b.jsx)("input",{type:"submit",value:"connexion",className:"inputSubmit",onSubmit:Z})}):Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("input",{type:"submit",value:"connexion",onClick:function(){F(!0)}}),Object(b.jsx)(C.a,{open:R,autoHideDuration:4e3,onClose:V,children:Object(b.jsx)(_,{severity:"error",onClose:V,classeName:A.alertStyles,children:"Ce champ doit \xeatre rempli !"})})]})})]})]})]})})},I=n(33),N=n(34),P=n.p+"static/media/syn.8052fb43.png",E=N.a.div(k||(k=Object(I.a)(["\n  width: 100%;\n  height: 7vh;\n  background: #f7f7f7;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  text-align: right;\n\n  .logo {\n    display: flex;\n    width: 35px;\n    height: 35px;\n    margin-left: 30px;\n    border-radius: 50%;\n  }\n"]))),A=function(e){var t=e.toggleMenu;return Object(b.jsxs)(E,{children:[Object(b.jsx)(i.b,{to:"/",children:Object(b.jsx)("img",{className:"logo",src:P,alt:""})}),Object(b.jsx)("button",{className:"btn-sidebar btn btn-default",type:"button",onClick:function(){return t(!0)},children:Object(b.jsx)("i",{className:"fa fa-cog fa-2x"})})]})},T=A;A.defaultProps={toggleMenu:"undefined"};var w,R,F,U=n(9),B=n(70),D=n(149),H=N.a.div(w||(w=Object(I.a)(["\n  position: fixed;\n  z-index: 555;\n  top: 0;\n  left: 0;\n  background-color: #f7f7f7;\n  padding: 1rem;\n  color: var(--dark);\n  max-width: 340px;\n  height: 100%;\n  transform: translateX(",");\n  transition: all 0.3s ease-in-out;\n  overflow-x: hidden;\n"])),(function(e){return e.show?"0":"-100%"})),L=N.a.div(R||(R=Object(I.a)(["\n  position: relative;\n  display: flex;\n  flex-direction: column;\n"]))),W=N.a.div(F||(F=Object(I.a)(["\n  position: absolute;\n  top: 0;\n  right: 0;\n  cursor: pointer;\n  padding: 10px 35px 16px 0px;\n\n  & span,\n  & span:before,\n  & span:after {\n    cursor: pointer;\n    border-radius: 1px;\n    height: 3px;\n    width: 30px;\n    background: var(--dark);\n    position: absolute;\n    display: block;\n    content: '';\n  }\n\n  & span {\n    background-color: transparent;\n  }\n\n  & span:before {\n    top: 0;\n    transform: rotate(45deg);\n  }\n\n  & span:after {\n    top: 0;\n    transform: rotate(-45deg);\n  }\n"]))),M=n(2),K=n.n(M);K.a.oneOfType([K.a.arrayOf(K.a.node),K.a.node]);var J=function(e){var t=e.handleClick;return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)("button",{id:"btn",className:"cancel",type:"submit",onClick:t,children:"Annuler"})})};var z=function(e){var t=e.handleClick;return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)("button",{id:"btn",className:"submit",type:"submit",onClick:t,children:"Valider"})})},Z=n(342),V=n(344),Y=n(346),q=n(343);n(92);function Q(){var e=Object(a.useContext)(d).statesParams,t=Object(a.useState)(e.newPost),n=Object(r.a)(t,2),c=n[0],s=n[1];return Object(b.jsx)("div",{children:c?Object(b.jsxs)("div",{className:"post-filter",children:[Object(b.jsx)("div",{className:"label-slider",children:Object(b.jsxs)("div",{children:["Nombre de post ",c]})}),Object(b.jsx)("input",{type:"range",min:1,max:50,step:1,value:c,className:"slideFilter",onChange:function(t){return function(t){s(Number(t.target.value)),e.function.setNewPost(t.target.value),sessionStorage.setItem("post",t.target.value)}(t)}})]}):"loading"})}n(133),n(134);var X=function(e,t){var n=Object(a.useContext)(d).statesParams,c=Object(a.useState)(10),s=Object(r.a)(c,2),o=s[0],i=(s[1],Object(a.useState)(n.sorting)),l=Object(r.a)(i,1)[0],u=Object(a.useState)(),j=Object(r.a)(u,2),O=j[0],h=j[1],m=t||{order:l,post:o};return Object(a.useEffect)((function(){sessionStorage.setItem("post",o),sessionStorage.setItem("order",l),h(JSON.stringify(m,(function(e,t){return t}),3))}),[O,o,l]),Object(b.jsx)(U.e,{children:Object(b.jsxs)("div",{className:"sidebar-category",children:[Object(b.jsx)("div",{className:"dropdown",children:Object(b.jsx)(Q,{value:e})}),Object(b.jsx)(q.a,{component:"fieldset",children:Object(b.jsxs)(V.a,{"aria-label":"tri des posts",name:"new_order_by",defaultValue:"DESC",onChange:function(e){return function(e){n.function.setSorting(e.target.value)}(e)},children:[Object(b.jsx)(Y.a,{value:"ASC",control:Object(b.jsx)(Z.a,{}),className:"radioButton",label:"Tri par ordre croissant"}),Object(b.jsx)(Y.a,{value:"DESC",control:Object(b.jsx)(Z.a,{}),className:"radioButton",label:"Tri par ordre d\xe9croissant"})]})})]})})};X.defaultProps={post:{}};var G=X,$=function(e){var t=e.show,n=e.setIsOpened,c=e.colors,s=Object(a.useContext)(h).states,o=Object(a.useState)(s.activeFontFamily),i=Object(r.a)(o,2),l=i[0],u=i[1],j=Object(a.useState)(s.backgroundColor),d=Object(r.a)(j,2),O=d[0],m=d[1],x=Object(a.useState)(s.hashtagColor),f=Object(r.a)(x,2),g=f[0],p=f[1],C=Object(a.useState)(s.mentionColor),v=Object(r.a)(C,2),S=v[0],_=v[1],k=Object(a.useState)(s.setTxtColor),y=Object(r.a)(k,2),I=y[0],N=y[1],P=Object(a.useState)({}),E=Object(r.a)(P,2),A=E[0],T=E[1],w=c||{background:O,hashtag:g,mention:S,text:I,font_family:l},R=function(){var e=JSON.stringify(c);T(e)};Object(a.useEffect)((function(){sessionStorage.setItem("font_family",l),sessionStorage.setItem("background",O),sessionStorage.setItem("hashtag",g),sessionStorage.setItem("mention",S),sessionStorage.setItem("text",I),T(JSON.stringify(w,(function(e,t){return t}),3))}),[l,O,g,S,I,A]);return Object(b.jsx)(H,{show:t?1:0,children:Object(b.jsxs)(L,{children:[Object(b.jsx)(W,{onClick:function(){n(!1)},children:Object(b.jsx)("span",{})}),Object(b.jsxs)("div",{className:"sidebar-category",children:[Object(b.jsx)("span",{children:"Couleurs et Typographie"}),Object(b.jsx)(U.a,{allowZeroExpanded:!0,children:Object(b.jsxs)(U.b,{children:[Object(b.jsx)(U.d,{children:Object(b.jsx)(U.c,{children:"changer la couleur du Background"})}),Object(b.jsxs)(U.e,{children:[Object(b.jsx)(B.a,{color:O,onChange:function(e){return function(e){s.function.setBackgroundColor(e),m(e)}(e.hex)},className:"sketch-picker"}),Object(b.jsx)(J,{handleClick:function(){return function(){var e=s.unmutabledColors.tr_backgroundColor;m(e),s.function.setBackgroundColor(e),R()}()}}),Object(b.jsx)(z,{handleClick:function(){return R()}})]})]},"")}),Object(b.jsx)(U.a,{allowZeroExpanded:!0,children:Object(b.jsxs)(U.b,{children:[Object(b.jsx)(U.d,{children:Object(b.jsx)(U.c,{children:"changer la couleur du Texte"})}),Object(b.jsxs)(U.e,{children:[Object(b.jsx)(B.a,{color:I,onChange:function(e){return function(e){s.function.setTxtColor(e),N(e)}(e.hex)},className:"sketch-picker"}),Object(b.jsx)(J,{handleClick:function(){return function(){var e=s.unmutabledColors.txtColor;N(e),s.function.setTxtColor(e),R()}()}}),Object(b.jsx)(z,{handleClick:function(){return R()}})]})]},"")}),Object(b.jsx)(U.a,{allowZeroExpanded:!0,children:Object(b.jsxs)(U.b,{children:[Object(b.jsx)(U.d,{children:Object(b.jsx)(U.c,{children:"changer la couleur des # et @"})}),Object(b.jsxs)(U.e,{children:[Object(b.jsx)(B.a,{color:S,onChange:function(e){return function(e){s.function.setHashtagColor(e),s.function.setMentionColor(e),p(e),_(e)}(e.hex)},className:"sketch-picker"}),Object(b.jsx)(J,{handleClick:function(){return function(){var e=s.unmutabledColors.black,t=s.unmutabledColors.black;p(e),_(t),s.function.setHashtagColor(e),s.function.setMentionColor(t),R()}()}}),Object(b.jsx)(z,{handleClick:function(){return R()}})]})]},"")}),Object(b.jsx)(U.a,{allowZeroExpanded:!0,children:Object(b.jsxs)(U.b,{children:[Object(b.jsx)(U.d,{children:Object(b.jsx)(U.c,{children:"changer la Typographie"})}),Object(b.jsxs)(U.e,{children:[Object(b.jsx)(D.a,{apiKey:"AIzaSyBqmdg2e_R-b0vz6xutdlonOrfWUuQ0Tas",activeFontFamily:l,onChange:function(e){return function(e){u(e),s.function.setActiveFontFamily(e),sessionStorage.setItem("font_family",e)}(e.family)},className:"typo"}),Object(b.jsx)(J,{handleClick:function(){return u("Arial"),void sessionStorage.setItem("font_family","Arial")}}),Object(b.jsx)(z,{handleClick:function(){return R()}})]})]},"")})]}),Object(b.jsx)("div",{className:"sidebar-category",children:Object(b.jsx)(U.a,{allowZeroExpanded:!0,children:Object(b.jsxs)(U.b,{children:[Object(b.jsx)(U.d,{children:Object(b.jsx)(U.c,{children:Object(b.jsx)("span",{children:"Tri et nombre de posts"})})}),Object(b.jsx)(G,{})]})})})]})})};function ee(){var e=Object(a.useState)(!1),t=Object(r.a)(e,2),n=t[0],c=t[1];return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(T,{toggleMenu:c}),Object(b.jsx)($,{show:n,setIsOpened:c})]})}var te=n(148),ne=n(336),ae=n(337),ce=n(338);n(293),n(294),n(295);function se(e){var t,n=e.post,c=Object(a.useContext)(h).states,s=Object(a.useState)(c.activeFontFamily||sessionStorage.getItem("font_family")),o=Object(r.a)(s,2),i=(o[0],o[1]),l=Object(a.useState)(c.backgroundColor||sessionStorage.getItem("background")),u=Object(r.a)(l,2),j=u[0],d=u[1],O=Object(a.useState)(c.hashtagColor||sessionStorage.getItem("hashtag")),m=Object(r.a)(O,2),x=m[0],f=m[1],g=Object(a.useState)(c.mentionColor||sessionStorage.getItem("mention")),p=Object(r.a)(g,2),C=p[0],v=p[1],S=Object(a.useState)(c.txtColor||sessionStorage.getItem("text")),_=Object(r.a)(S,2),k=_[0],y=_[1],I={"--before":"url(".concat(n.media_url,")")},N=/[@]\w+/g,P=/[#]\w+/g,E=/(RT @)\w+:/g,A=n.user.name,T=n.content,w=n.media_url,R=n.network;n.timestamp;return Object(a.useEffect)((function(){i(c.activeFontFamily),d(c.backgroundColor),f(c.hashtagColor),v(c.mentionColor),y(c.txtColor)}),[c.activeFontFamily,c.backgroundColor,c.hashtagColor,c.mentionColor,c.txtColor]),Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)("div",{className:w?"cardWithImg":"facebook"===R?"cardFk":"instagram"===R?"cardInsta":w?"cardWithImg":"cardTr",style:w?I:{backgroundColor:j},children:[Object(b.jsxs)("div",{className:n.media_url?"cardBodyWithImg":"cardBodyNoImg",children:[Object(b.jsx)("div",{className:n.media_url?"content":"contentNoImg",children:Object(b.jsx)("div",{className:"apply-font",children:Object(b.jsx)("div",{dangerouslySetInnerHTML:{__html:"twitter"===R?(t=T,t.replace(E,(function(e){return A=e,'<span class="txtRetweet">'.concat(e,"</span>")})).replace(P,(function(e){return'<span class="txtHashtag" style="color:'.concat(x,'">').concat(e,"</span>")})).replace(N,(function(e){return'<span class="txtMention" style="color:'.concat(C,'">').concat(e,"</span>")}))):"facebook"===R?function(e){return e.replace(P,(function(e){return'<span class="txtSpanWithImgFk" style="color:'.concat(x,'">').concat(e,"</span>")}))}(T):"instagram"===R?function(e){return e.replace(P,(function(e){return'<span class="txtSpanWithImgInst" style="color:'.concat(x,'">').concat(e,"</span>")})).replace(N,(function(e){return'<span class="txtSpanWithImgInst" style="color:'.concat(C,'">').concat(e,"</span>")}))}(T):null},style:{color:k}})})}),Object(b.jsx)("div",{className:"cardImg",children:Object(b.jsx)("div",{className:n.media_url?"getImg":"hideImg",children:Object(b.jsx)("img",{src:n.media_url,alt:n.media_url})})})]}),Object(b.jsxs)("div",{className:"userCard",children:[Object(b.jsx)("img",{className:"logoUser",src:n.user.avatar_url,alt:n.user.name}),Object(b.jsx)("h3",{className:"reTweet",children:Object(b.jsx)("div",{dangerouslySetInnerHTML:{__html:A}})})]}),Object(b.jsxs)("div",{className:"footerCard",children:[Object(b.jsx)("h3",{className:"hashtag",children:n.user.name}),Object(b.jsx)("img",{className:"logoUser",src:n.user.avatar_url,alt:n.search})]})]})})}se.defaultProps={post:{},user:{}};n(296);var oe,re=function(){var e=Object(a.useContext)(d).statesParams,t=Object(a.useState)(0),n=Object(r.a)(t,2),c=n[0],s=n[1],o=Object(a.useState)(!1),i=Object(r.a)(o,2),l=i[0],u=i[1],j=Object(a.useState)(e.items),O=Object(r.a)(j,2),h=O[0],m=O[1],x=Object(a.useState)(e.newPost),f=Object(r.a)(x,2);f[0],f[1];Object(a.useEffect)((function(){h&&h.length>0&&(m(g(h)),s(0))}),[e.sorting]),Object(a.useEffect)((function(){e.items.length>0&&e.maxItems.length>0&&m(e.maxItems.slice(0,e.newPost))}),[e.items,e.newPost]);var g=function(){return h.sort((function(t,n){switch(e.sorting){case"ASC":return t.timestamp-n.timestamp;case"DESC":return n.timestamp-t.timestamp;default:return t.timestamp-n.timestamp}}))},p=function(){if(!l){var e=c===h.length-1?0:c+1;s(e)}},C=function(){if(!l){var e=0===c?h.length-1:c-1;s(e)}},v=function(e){l||s(e)},S=h.map((function(e){return Object(b.jsx)(te.a,{onExiting:function(){return u(!0)},onExited:function(){return u(!1)},post:e,children:Object(b.jsx)(se,{post:e,session:e.session_id},e.pub_id)},e.pub_id)})),_=function(){return Object(b.jsx)("div",{className:"loader"})};return setTimeout(_,100),h&&h.length>0?h&&h.length>0?Object(b.jsxs)(ne.a,{activeIndex:c,next:p,previous:C,children:[Object(b.jsx)(ae.a,{items:h,activeIndex:c,onClickHandler:v}),S,Object(b.jsx)(ce.a,{direction:"prev",directionText:"Previous",onClickHandler:C}),Object(b.jsx)(ce.a,{direction:"next",directionText:"Next",onClickHandler:p})]}):"Loading ...":_()},ie=N.a.div(oe||(oe=Object(I.a)(["\n  width: 100%;\n  height: 7vh;\n  background: #f7f7f7;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  text-align: right;\n\n  .logo {\n    display: flex;\n    width: 35px;\n    height: 35px;\n    margin-left: 30px;\n    border-radius: 50%;\n  }\n"]))),le=function(){return Object(b.jsx)(ie,{children:Object(b.jsx)(i.b,{to:"/",children:Object(b.jsx)("img",{className:"logo",src:P,alt:""})})})};function ue(e){var t=Object(a.useState)(!1),n=Object(r.a)(t,1)[0];return Object(b.jsx)(i.a,{children:Object(b.jsx)(m,{children:n?e?Object(b.jsx)(le,{}):Object(b.jsx)(ee,{}):Object(b.jsxs)(l.c,{children:[Object(b.jsx)(l.a,{exact:!0,path:"/",component:y}),Object(b.jsxs)(O,{children:[Object(b.jsx)(ee,{}),Object(b.jsx)(l.a,{path:"/networks/",component:re})]})]})})})}n(304);n(305).config();var je=function(){return Object(b.jsx)("div",{className:"App",children:Object(b.jsx)(ue,{})})};n(308);o.a.render(Object(b.jsx)(c.a.Fragment,{children:Object(b.jsx)(je,{})}),document.getElementById("root"))},72:function(e,t,n){},92:function(e,t,n){}},[[309,1,2]]]);
//# sourceMappingURL=main.017d8c7d.chunk.js.map