(this.webpackJsonpchakra_test=this.webpackJsonpchakra_test||[]).push([[0],{109:function(e,t,i){},110:function(e,t,i){"use strict";i.r(t);var a=i(1),r=i(139),n=i(0),s=i.n(n),o=i(50),c=i.n(o),u=i(3),l=i(118),d=i(37),m=function(e){var t=e.href,i=e.text,r=e.active,n=void 0!==r&&r;return Object(a.jsx)(d.b,{to:t,children:Object(a.jsx)(l.a,{href:t,color:n?"primary.500":"secondary.500",fontSize:"lg",_hover:{color:"primary.500",textDecor:"underline"},children:i.toUpperCase()})})},p=i(120),h=i(84),b=i.n(h),g=function(e){var t=e.onClick,i=Object(n.useState)(""),r=Object(u.a)(i,2),s=r[0],o=r[1],c=function(){o(s?"":b.a.menu),setTimeout((function(){o(""),t()}),1e3),console.log("rotate")};return Object(a.jsx)(l.a,{className:"".concat(s),onClick:function(){c()},boxSize:50,children:Object(a.jsx)(p.a,{boxSize:50,color:"secondary.500",_hover:{color:"primary.500"}})})},j=i(121),x=i(122),f=i(123),v=i(124),O=i(45),y=i.n(O),w=function(e){var t=e.show,i=e.links,r=e.toggleShowMenu,s=Object(n.useState)(y.a.hidden),o=Object(u.a)(s,2),c=o[0],d=o[1];return Object(n.useEffect)((function(){d(t?y.a.shown:y.a.hidden)}),[t]),Object(a.jsxs)(l.a,{w:"full",direction:"column",bg:"gray.100",className:"".concat(c," ").concat(y.a.menu),children:[Object(a.jsx)(j.a,{direction:"row-reverse",children:Object(a.jsx)(x.a,{boxSize:"40px",onClick:r,_focus:{outline:"none"},_hover:{color:"primary.500"}})}),i.map((function(e,t){return Object(a.jsxs)(l.a,{children:[Object(a.jsx)(f.a,{children:Object(a.jsx)(m,{href:e.href,text:e.text,active:e.active})}),Object(a.jsx)(f.a,{children:Object(a.jsx)(v.a,{my:"10px",borderColor:"black",w:.8})})]},t)}))]})},k=i(142),C=i(125),M=i(143),S=i(127),q=i(128),I=function(e){var t=e.logo,i=e.brand,r=e.links,s=Object(n.useState)(!1),o=Object(u.a)(s,2),c=o[0],d=o[1],p=function(){d(!c)};return Object(a.jsxs)(l.a,{as:"header",h:"auto",position:"relative",children:[Object(a.jsxs)(k.a,{as:"nav",spacing:"20px",bg:"gray.100",p:"10px",align:"center",children:[Object(a.jsx)(C.a,{href:"/",children:Object(a.jsx)(l.a,{boxSize:"50px",children:Object(a.jsx)(M.a,{w:"100%",src:t,alt:"logo"})})}),Object(a.jsx)(S.a,{fontSize:["md","lg"],children:i}),Object(a.jsx)(q.a,{}),r.map((function(e,t){return Object(a.jsx)(l.a,{display:["none","none","flex"],children:Object(a.jsx)(m,{text:e.text,href:e.href,active:!!e.active})},t)})),Object(a.jsx)(l.a,{display:["block","block","none"],children:Object(a.jsx)(g,{onClick:function(){return p()}})})]}),Object(a.jsx)(l.a,{w:"100%",position:"absolute",top:"100%",left:"0px",zIndex:500,children:Object(a.jsx)(w,{show:c,links:r,toggleShowMenu:function(){return p()}})})]})},N=i(144),D=i(129),W=i.p+"static/media/twitter.0847ab05.svg",A=i.p+"static/media/facebook.39bbac1b.svg",_=i.p+"static/media/instagram.8f9e2b18.svg",z=i.p+"static/media/youtube.d9f18e07.svg",E=i.p+"static/media/linkedin.6acdcd45.svg",R=function(e){var t=e.option,i=e.href,r="";return"twitter"===t?r=W:"facebook"===t?r=A:"instagram"===t?r=_:"youtube"===t?r=z:"linkedin"===t&&(r=E),Object(a.jsx)(C.a,{href:i,children:Object(a.jsx)(M.a,{w:"50px",src:r,alt:t})})},P=i(130),Q=i(131),T=function(e){var t=e.links,i=e.social,r=e.phone,n=e.email,s=e.address;return Object(a.jsxs)(N.a,{p:"20px",gap:"20px",columns:[1,1,3],w:"100%",bg:"gray.100",children:[Object(a.jsxs)(l.a,{textAlign:"center",children:[Object(a.jsx)(S.a,{mb:"10px",fontSize:"xl",fontWeight:"bold",textDecor:"underline",children:"Navigation"}),Object(a.jsxs)(D.a,{children:[Object(a.jsx)(D.b,{}),t.map((function(e,t){return Object(a.jsx)(D.b,{children:Object(a.jsx)(m,{href:e.href,text:e.text,active:e.active})},t)}))]})]}),Object(a.jsxs)(l.a,{textAlign:"center",children:[Object(a.jsx)(S.a,{mb:"10px",fontSize:"xl",fontWeight:"bold",textDecor:"underline",children:"Social Media"}),Object(a.jsx)(f.a,{children:i.map((function(e,t){return Object(a.jsx)(l.a,{mx:"5px",children:Object(a.jsx)(R,{option:e.option,href:e.href})},t)}))})]}),Object(a.jsxs)(l.a,{textAlign:"center",children:[Object(a.jsx)(S.a,{mb:"10px",fontSize:"xl",fontWeight:"bold",textDecor:"underline",children:"Contact"}),Object(a.jsxs)(f.a,{mb:"20px",children:[Object(a.jsx)(P.a,{boxSize:"30px",mr:"20px"}),Object(a.jsx)(S.a,{children:r})]}),Object(a.jsxs)(f.a,{mb:"20px",children:[Object(a.jsx)(Q.a,{boxSize:"30px",mr:"20px"}),Object(a.jsx)(S.a,{children:n})]}),Object(a.jsx)(l.a,{mt:"20px",fontWeight:"bold",children:s.map((function(e,t){return Object(a.jsx)(S.a,{children:e},t)}))})]})]})},B=i.p+"static/media/logo.bbce3a71.svg",F=function(e){var t=e.img,i=e.title,r=e.text;return Object(a.jsxs)(l.a,{as:"section",pos:"relative",children:[Object(a.jsx)(M.a,{w:"100%",h:"80vh",objectFit:"cover",src:t,alt:"title image"}),Object(a.jsx)(f.a,{w:"100%",h:"100%",position:"absolute",top:"0px",left:"0px",children:Object(a.jsxs)(l.a,{textAlign:"center",children:[Object(a.jsx)(S.a,{as:"h1",p:"20px",fontSize:"4xl",color:"white",children:i}),Object(a.jsx)(S.a,{p:"20px",fontSize:"xl",color:"white",fontWeight:"bold",children:r})]})})]})},L=[{text:"Home",href:"/home"},{text:"Projects",href:"/projects"},{text:"Customers",href:"/Customers"},{text:"Carrer",href:"/carrer"},{text:"About",href:"/about"},{text:"Contact",href:"/contact"}],H=[{option:"facebook",href:"https://facebook.com"},{option:"twitter",href:"https://twitter.com"},{option:"instagram",href:"https://instagram.com"},{option:"linkedin",href:"https://linkedin.com"},{option:"youtube",href:"https://youtube.com"}],G=function(e){var t=e.activeLink,i=e.titleImage,r=e.title,n=e.text,s=e.children,o=L.map((function(e){return e.text===t?{text:e.text,href:e.href,active:!0}:e}));return Object(a.jsxs)(j.a,{w:"100%",h:"100%",direction:"column",children:[Object(a.jsx)(I,{links:o,logo:B,brand:"Random Engineering"}),Object(a.jsx)(F,{img:i,title:r,text:n}),Object(a.jsx)(l.a,{children:s}),Object(a.jsx)(q.a,{}),Object(a.jsx)(T,{links:o,social:H,phone:"+41 24 472 65 41",email:"contact@random-engineering.com",address:["1600 Pennsylvania Avenue NW","Washington, DC 20500","USA"]})]})},U=i.p+"static/media/p1.ec21be06.jpg",V=i(56),J=i(57),X=i(88),K=i(86),Z=i(132),Y=i(133),$=i(65),ee=i.n($),te=function(e){Object(X.a)(i,e);var t=Object(K.a)(i);function i(){var e;Object(V.a)(this,i);for(var a=arguments.length,r=new Array(a),n=0;n<a;n++)r[n]=arguments[n];return(e=t.call.apply(t,[this].concat(r))).state={cardNumber:0,pos:0},e.cardRef=e.props.cards.map((function(){return s.a.createRef()})),e}return Object(J.a)(i,[{key:"componentDidMount",value:function(){var e=this;window.addEventListener("resize",(function(){e.setState({cardNumber:0,pos:0})}))}},{key:"changeCard",value:function(e){var t=this;1===e&&this.state.cardNumber<this.props.cards.length-1&&this.setState({cardNumber:this.state.cardNumber+1},(function(){t.moveCard(1)})),-1===e&&this.state.cardNumber>0&&this.setState({cardNumber:this.state.cardNumber-1},(function(){return t.moveCard(-1)}))}},{key:"moveCard",value:function(e){if(this.props.cards.length>1){var t=this.cardRef[0].current,i=this.cardRef[1].current;if(t&&i){var a=Math.abs(t.getBoundingClientRect().left-i.getBoundingClientRect().left);this.setState({pos:-a*this.state.cardNumber})}}}},{key:"render",value:function(){var e=this;return Object(a.jsxs)(l.a,{children:[Object(a.jsx)(f.a,{children:Object(a.jsx)(j.a,{display:["none","none","flex"],wrap:"wrap",direction:"row",justifyContent:"center",justifyItems:"center",sx:{gap:"30px"},children:this.props.cards.map((function(e,t){return Object(a.jsx)(l.a,{children:e},t)}))})}),Object(a.jsxs)(l.a,{display:["block","block","none"],className:"".concat(ee.a.browser),overflow:"hidden",w:"100%",children:[Object(a.jsx)(j.a,{w:"100%",direction:"row",transitionDuration:"0.5s",transform:"translate(".concat(this.state.pos,"px, 0px)"),children:this.props.cards.map((function(t,i){return Object(a.jsx)(f.a,{mr:"10px",className:"".concat(ee.a.flexElement),ref:e.cardRef[i],children:t},i)}))}),Object(a.jsxs)(j.a,{justifyContent:"space-between",mt:"20px",children:[Object(a.jsx)(l.a,{as:"button",ml:"10px",_focus:{outline:"none"},transitionDuration:"0.5s",_hover:0===this.state.cardNumber?{cursor:"default"}:{transform:"translateX(-5px)"},onClick:function(){return e.changeCard(-1)},children:Object(a.jsx)(Z.a,{boxSize:"30px",color:0===this.state.cardNumber?"gray.400":"black",_hover:0===this.state.cardNumber?{}:{color:"primary.500"}})}),Object(a.jsx)(f.a,{children:"".concat(this.state.cardNumber+1," of ").concat(this.props.cards.length)}),Object(a.jsx)(l.a,{as:"button",mr:"10px",_focus:{outline:"none"},transitionDuration:"0.5s",_hover:this.state.cardNumber===this.props.cards.length-1?{cursor:"default"}:{transform:"translateX(5px)"},onClick:function(){return e.changeCard(1)},children:Object(a.jsx)(Y.a,{boxSize:"30px",color:this.state.cardNumber===this.props.cards.length-1?"gray.400":"black",_hover:this.state.cardNumber===this.props.cards.length-1?{}:{color:"primary.500"}})})]})]})]})}}]),i}(s.a.Component),ie=function(e){var t=e.title,i=e.text,r=e.img,s=e.href,o=Object(n.useState)(""),c=Object(u.a)(o,2),d=c[0],m=c[1];return Object(a.jsx)(C.a,{href:s||"",onMouseEnter:function(){m("none")},onMouseLeave:function(){m("")},children:Object(a.jsxs)(l.a,{w:"100%",maxW:"300px",maxH:"200px",overflow:"hidden",display:"inline-block",position:"relative",children:[Object(a.jsx)(M.a,{objectFit:"cover",w:"100%",h:"100%",src:r,alt:"img"}),Object(a.jsx)(f.a,{display:"none"===d?"none":"flex",w:"100%",h:"100%",position:"absolute",top:"0px",left:"0px",textAlign:"center",children:Object(a.jsx)(S.a,{color:"white",fontSize:"lg",children:t})}),Object(a.jsx)(f.a,{w:"100%",h:"100%",position:"absolute",top:"0px",left:"0px",textAlign:"center",bg:"primary.500",opacity:0,_hover:{opacity:.9},transitionDuration:"1s",children:Object(a.jsx)(S.a,{m:"10px",color:"black",fontWeight:"bold",fontSize:"lg",children:i})})]})})},ae=i.p+"static/media/h1.d563f942.jpg",re=i.p+"static/media/h2.547b44b4.jpg",ne=i.p+"static/media/h3.0813c3b3.jpg",se=i.p+"static/media/h4.bd27ca8d.jpg",oe=i.p+"static/media/h5.8c29383a.jpg",ce=i.p+"static/media/h6.b7de1ede.jpg",ue=i.p+"static/media/h7.f7c12d45.jpg",le=function(e){var t=e.title,i=e.children;return Object(a.jsxs)(l.a,{as:"section",my:"40px",mx:["5px","5px","10px","auto"],p:["5px","5px","10px","20px"],shadow:"xl",maxW:"1200px",children:[Object(a.jsx)(S.a,{fontSize:"2xl",color:"primary.500",fontWeight:"bold",textAlign:"center",children:t}),Object(a.jsx)(l.a,{w:"80%",h:"10px",mx:"auto",mb:"10px",bgGradient:"linear(to-r, secondary.700, white)"}),i]})},de=i(141),me=function(e){var t=e.label,i=e.onClick,r=e.mode,n=void 0===r?"primary":r;return Object(a.jsx)(de.a,{onClick:i,isDisabled:"inactive"===n,bg:"primary"===n?"primary.500":"secondary.500",children:Object(a.jsx)("b",{children:t})})},pe=function(e){var t=e.title,i=e.text,r=e.img,n=e.right,s=void 0!==n&&n,o=e.href;return Object(a.jsxs)(j.a,{border:"1px",borderColor:"primary.500",direction:["column","column","row"],children:[Object(a.jsx)(j.a,{order:s?1:0,w:["100%","100%","50%"],justifyContent:["center","center",s?"flex-end":"flex-start"],minW:"40%",alignItems:"center",children:Object(a.jsx)(M.a,{src:r,alt:t,maxH:["400px","400px","300px"]})}),Object(a.jsxs)(j.a,{maxW:["100%","100%","100%"],direction:"column",p:"20px",children:[Object(a.jsxs)(l.a,{my:"auto",children:[Object(a.jsx)(S.a,{fontSize:"lg",fontWeight:"bold",children:t}),Object(a.jsx)(S.a,{fontSize:"md",children:i})]}),Object(a.jsx)(q.a,{}),o?Object(a.jsx)(j.a,{mt:"10px",alignSelf:s?"flex-start":"flex-end",children:Object(a.jsx)(d.b,{to:o,children:Object(a.jsx)(me,{label:"Learn more",mode:"primary",onClick:function(){return null}})})}):""]})]})},he=[{img:ae,title:"Hard work",text:"Work hard no matter what."},{img:re,title:"Experience",text:"We have over 40 years of experience in the industry."},{img:ne,title:"Quality",text:"Our concern is quality not quantity."}],be=[{img:se,title:"Build the future",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque blandit, odio at cursus auctor, justo neque finibus odio, et posuere mauris lacus porta elit. Duis varius eu metus vel tristique. Ut sollicitudin enim sed hendrerit fringilla. Nulla non nisi lectus. Aenean libero tellus, faucibus ut quam ac, ullamcorper pretium diam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Integer nunc odio, egestas at tempor et, rhoncus a ante.",right:!0,href:"/Projects"},{img:oe,title:"Networking",text:"In mattis, augue vel iaculis auctor, mauris lacus euismod lacus, a viverra ante metus in odio. Ut vulputate sodales iaculis. Nullam euismod quis turpis non dignissim. Maecenas nec dignissim odio, tristique malesuada justo. Mauris elementum commodo odio, non blandit purus suscipit eu. Sed cursus lectus magna, non porta mi pellentesque suscipit. Mauris interdum, lacus id gravida ullamcorper, diam velit mollis nisi, eget pellentesque arcu ipsum et libero.",right:!1,href:"/Customers"},{img:ce,title:"Stay connected",text:"Morbi in fermentum tellus. Duis cursus, quam non tristique sollicitudin, arcu diam condimentum nibh, ac scelerisque massa turpis at dui. Donec nisi mi, pharetra id porttitor vitae, maximus non arcu. Proin vestibulum ipsum eu orci lacinia, ut fringilla erat finibus. In venenatis odio sed porttitor iaculis. Morbi cursus arcu sit amet purus consectetur laoreet. Fusce nec justo augue. Proin volutpat ipsum leo, eu pharetra eros accumsan et.",right:!0,href:"/Contact"},{img:ue,title:"Build great teams",text:"Nunc faucibus vel lectus id dignissim. Maecenas ullamcorper, lorem et fermentum porta, sem odio malesuada sapien, ac facilisis elit nunc et orci. Donec eleifend justo ut rutrum pretium. Fusce placerat lorem ac dui hendrerit lacinia. Aenean odio diam, ultrices in diam in, laoreet vulputate turpis. Pellentesque nisl ante, tincidunt at elit vitae, porttitor consequat ex. Etiam tempor hendrerit turpis, at pulvinar velit posuere sed.",right:!1,href:"/Carrer"}],ge=function(){return Object(a.jsxs)(G,{activeLink:"Home",titleImage:U,title:"Welcome to RANDOM ENGENEERING",text:"Bringing your ideas and innovations to life.",children:[Object(a.jsx)(le,{title:"Our mission",children:be.map((function(e,t){return Object(a.jsx)(l.a,{mb:"20px",children:Object(a.jsx)(pe,{img:e.img,title:e.title,text:e.text,right:e.right,href:e.href})},t)}))}),Object(a.jsx)(le,{title:"Our core values",children:Object(a.jsx)(te,{cards:he.map((function(e,t){return Object(a.jsx)(ie,{img:e.img,title:e.title,text:e.text},t)}))})})]})},je=i.p+"static/media/p3.9e1c5096.jpg",xe=i.p+"static/media/pro1.30bda817.jpg",fe=[{img:i.p+"static/media/pro2.6c288f29.jpg",title:"Rapid prototyping",text:"In mattis, augue vel iaculis auctor, mauris lacus euismod lacus, a viverra ante metus in odio. Ut vulputate sodales iaculis. Nullam euismod quis turpis non dignissim. Maecenas nec dignissim odio, tristique malesuada justo. Mauris elementum commodo odio, non blandit purus suscipit eu. Sed cursus lectus magna, non porta mi pellentesque suscipit. Mauris interdum, lacus id gravida ullamcorper, diam velit mollis nisi, eget pellentesque arcu ipsum et libero.",right:!1,href:""},{img:i.p+"static/media/pro3.0a3c9ade.jpg",title:"Mechanical design",text:"Morbi in fermentum tellus. Duis cursus, quam non tristique sollicitudin, arcu diam condimentum nibh, ac scelerisque massa turpis at dui. Donec nisi mi, pharetra id porttitor vitae, maximus non arcu. Proin vestibulum ipsum eu orci lacinia, ut fringilla erat finibus. In venenatis odio sed porttitor iaculis. Morbi cursus arcu sit amet purus consectetur laoreet. Fusce nec justo augue. Proin volutpat ipsum leo, eu pharetra eros accumsan et.",right:!0,href:""},{img:xe,title:"Automatisation of mass production",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque blandit, odio at cursus auctor, justo neque finibus odio, et posuere mauris lacus porta elit. Duis varius eu metus vel tristique. Ut sollicitudin enim sed hendrerit fringilla. Nulla non nisi lectus. Aenean libero tellus, faucibus ut quam ac, ullamcorper pretium diam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Integer nunc odio, egestas at tempor et, rhoncus a ante.",right:!1,href:""},{img:i.p+"static/media/pro4.a4d0dbcc.jpg",title:"Creation of CAD-Data and technical drawings",text:"Nunc faucibus vel lectus id dignissim. Maecenas ullamcorper, lorem et fermentum porta, sem odio malesuada sapien, ac facilisis elit nunc et orci. Donec eleifend justo ut rutrum pretium. Fusce placerat lorem ac dui hendrerit lacinia. Aenean odio diam, ultrices in diam in, laoreet vulputate turpis. Pellentesque nisl ante, tincidunt at elit vitae, porttitor consequat ex. Etiam tempor hendrerit turpis, at pulvinar velit posuere sed.",right:!0,href:""},{img:i.p+"static/media/pro5.42cc5507.jpg",title:"Automation of medical testing process",text:"Morbi in fermentum tellus. Duis cursus, quam non tristique sollicitudin, arcu diam condimentum nibh, ac scelerisque massa turpis at dui. Donec nisi mi, pharetra id porttitor vitae, maximus non arcu. Proin vestibulum ipsum eu orci lacinia, ut fringilla erat finibus. In venenatis odio sed porttitor iaculis. Morbi cursus arcu sit amet purus consectetur laoreet. Fusce nec justo augue. Proin volutpat ipsum leo, eu pharetra eros accumsan et.",right:!1,href:""}],ve=function(){return Object(a.jsx)(G,{activeLink:"Projects",titleImage:je,title:"Some of our Projects",text:"Delivering results, reliability, and rock solid dependability.",children:Object(a.jsx)(le,{title:"A selection of some of our projects",children:fe.map((function(e,t){return Object(a.jsx)(l.a,{mb:"20px",children:Object(a.jsx)(pe,{img:e.img,title:e.title,text:e.text,right:e.right,href:e.href})},t)}))})})},Oe=i(137),ye=i(138),we=i(112),ke=(i(109),i(12)),Ce=i.p+"static/media/p2.7fe2d810.jpg",Me=function(e){var t=e.title,i=e.img,r=e.text,n=e.href,s=Object(a.jsxs)(k.b,{spacing:"20px",shadow:"lg",p:"20px",maxW:"300px",m:"auto",_hover:n?{transform:"translateY(-5px)",transitionDuration:"0.5s",shadow:"xl"}:{},children:[Object(a.jsx)(f.a,{textAlign:"center",children:Object(a.jsx)(S.a,{fontSize:"lg",fontWeight:"bold",children:t})}),Object(a.jsx)(f.a,{children:i?Object(a.jsx)(M.a,{src:i,alt:"img"}):""}),Object(a.jsx)(f.a,{children:Object(a.jsx)(S.a,{children:r})})]});return s=n?Object(a.jsx)(C.a,{href:n,_hover:{textDecor:"none"},children:s}):s},Se=[{img:i.p+"static/media/1.3d59cfd6.png",title:"Apple",text:"Integer ultrices erat a mauris commodo, eget viverra eros tincidunt. Maecenas urna dui, laoreet sed pretium hendrerit, commodo gravida massa. Quisque lectus diam, finibus a sagittis vitae."},{img:i.p+"static/media/2.0e56d243.png",title:"Google",text:"Integer ultrices erat a mauris commodo, eget viverra eros tincidunt. Maecenas urna dui, laoreet sed pretium hendrerit, commodo gravida massa. Quisque lectus diam, finibus a sagittis vitae."},{img:i.p+"static/media/3.fac62e0b.png",title:"Microsoft",text:"Integer ultrices erat a mauris commodo, eget viverra eros tincidunt. Maecenas urna dui, laoreet sed pretium hendrerit, commodo gravida massa. Quisque lectus diam, finibus a sagittis vitae."},{img:i.p+"static/media/4.56d78060.png",title:"Facebook",text:"Integer ultrices erat a mauris commodo, eget viverra eros tincidunt. Maecenas urna dui, laoreet sed pretium hendrerit, commodo gravida massa. Quisque lectus diam, finibus a sagittis vitae."},{img:i.p+"static/media/5.63b4f375.png",title:"Coca Cola",text:"Integer ultrices erat a mauris commodo, eget viverra eros tincidunt. Maecenas urna dui, laoreet sed pretium hendrerit, commodo gravida massa. Quisque lectus diam, finibus a sagittis vitae."},{img:i.p+"static/media/6.96355754.png",title:"Samsung",text:"Integer ultrices erat a mauris commodo, eget viverra eros tincidunt. Maecenas urna dui, laoreet sed pretium hendrerit, commodo gravida massa. Quisque lectus diam, finibus a sagittis vitae."},{img:i.p+"static/media/7.bb09a6f0.png",title:"Walt Disney",text:"Integer ultrices erat a mauris commodo, eget viverra eros tincidunt. Maecenas urna dui, laoreet sed pretium hendrerit, commodo gravida massa. Quisque lectus diam, finibus a sagittis vitae."},{img:i.p+"static/media/8.ce2c8974.png",title:"Toyota",text:"Integer ultrices erat a mauris commodo, eget viverra eros tincidunt. Maecenas urna dui, laoreet sed pretium hendrerit, commodo gravida massa. Quisque lectus diam, finibus a sagittis vitae."},{img:i.p+"static/media/9.fe696943.png",title:"McDonald\u2019s",text:"Integer ultrices erat a mauris commodo, eget viverra eros tincidunt. Maecenas urna dui, laoreet sed pretium hendrerit, commodo gravida massa. Quisque lectus diam, finibus a sagittis vitae."},{img:i.p+"static/media/10.375ea9dd.png",title:"AT&T",text:"Integer ultrices erat a mauris commodo, eget viverra eros tincidunt. Maecenas urna dui, laoreet sed pretium hendrerit, commodo gravida massa. Quisque lectus diam, finibus a sagittis vitae."},{img:i.p+"static/media/11.a4a3b9eb.png",title:"Louis Vuitton",text:"Integer ultrices erat a mauris commodo, eget viverra eros tincidunt. Maecenas urna dui, laoreet sed pretium hendrerit, commodo gravida massa. Quisque lectus diam, finibus a sagittis vitae."},{img:i.p+"static/media/12.937a14ca.png",title:"Intel",text:"Integer ultrices erat a mauris commodo, eget viverra eros tincidunt. Maecenas urna dui, laoreet sed pretium hendrerit, commodo gravida massa. Quisque lectus diam, finibus a sagittis vitae."},{img:i.p+"static/media/13.4d3d3ba0.png",title:"Nike",text:"Integer ultrices erat a mauris commodo, eget viverra eros tincidunt. Maecenas urna dui, laoreet sed pretium hendrerit, commodo gravida massa. Quisque lectus diam, finibus a sagittis vitae."},{img:i.p+"static/media/14.e55804e4.png",title:"Cisco",text:"Integer ultrices erat a mauris commodo, eget viverra eros tincidunt. Maecenas urna dui, laoreet sed pretium hendrerit, commodo gravida massa. Quisque lectus diam, finibus a sagittis vitae."},{img:i.p+"static/media/15.c3a3b74c.png",title:"General Electric",text:"Integer ultrices erat a mauris commodo, eget viverra eros tincidunt. Maecenas urna dui, laoreet sed pretium hendrerit, commodo gravida massa. Quisque lectus diam, finibus a sagittis vitae."},{img:i.p+"static/media/16.f3c7f4f5.png",title:"Mercedes-Benz",text:"Integer ultrices erat a mauris commodo, eget viverra eros tincidunt. Maecenas urna dui, laoreet sed pretium hendrerit, commodo gravida massa. Quisque lectus diam, finibus a sagittis vitae."},{img:i.p+"static/media/17.6df1888d.png",title:"Oracle",text:"Integer ultrices erat a mauris commodo, eget viverra eros tincidunt. Maecenas urna dui, laoreet sed pretium hendrerit, commodo gravida massa. Quisque lectus diam, finibus a sagittis vitae."},{img:i.p+"static/media/18.ca3e9768.png",title:"Verizon",text:"Integer ultrices erat a mauris commodo, eget viverra eros tincidunt. Maecenas urna dui, laoreet sed pretium hendrerit, commodo gravida massa. Quisque lectus diam, finibus a sagittis vitae."},{img:i.p+"static/media/19.b8abc4ba.png",title:"IBM",text:"Integer ultrices erat a mauris commodo, eget viverra eros tincidunt. Maecenas urna dui, laoreet sed pretium hendrerit, commodo gravida massa. Quisque lectus diam, finibus a sagittis vitae."},{img:i.p+"static/media/20.e270c098.png",title:"BMW",text:"Integer ultrices erat a mauris commodo, eget viverra eros tincidunt. Maecenas urna dui, laoreet sed pretium hendrerit, commodo gravida massa. Quisque lectus diam, finibus a sagittis vitae."}],qe=function(){return Object(a.jsx)(G,{activeLink:"Customers",titleImage:Ce,title:"We are proud of our customers",text:"Make the customer the hero of your story",children:Object(a.jsx)(le,{title:"Find out what our customers say about Random Engineering",children:Object(a.jsx)(te,{cards:Se.map((function(e){return Object(a.jsx)(Me,{img:e.img,title:e.title,text:e.text,href:"/"})}))})})})},Ie=i.p+"static/media/p4.b4f432a3.jpg",Ne=i.p+"static/media/por1.5c1239ff.jpg",De=i.p+"static/media/por2.6304ad82.jpg",We=i.p+"static/media/por3.12bd6df8.jpg",Ae=i.p+"static/media/job1.6b969170.jpg",_e=i.p+"static/media/job2.bc85b650.jpg",ze=i.p+"static/media/job3.35eddbec.jpg",Ee=[{img:Ne,title:"Ketilri\xf0r Filippa",text:"Random Engineering encourages me to develop my talents while promoting our products and services.",href:""},{img:De,title:"Bernadett Zotikos",text:"I am proud to be part of a company that is viewed by customers all over the world as being successful.",href:""},{img:We,title:"Ifiok Clementina",text:"Random Engineering offers me many opportunities for development.",href:""}],Re=[{img:Ae,title:"Programmer for CNC-machines",text:"Develop CNC programs for production runs. Analyze drawings to determine dimensions and to choose cutting tools, machine speeds, and feed rates. Modify existing programs for different machines. Maintain tooling database",href:"/"},{img:_e,title:"Mechanical designer",text:"Create, develop and test products such as machines, tools and sensors. Solve problems by applying the principles of physics, chemistry and mechanics to the real world.",href:"/"},{img:ze,title:"Project Engineer",text:"Develops project objectives by reviewing project proposals and plans and conferring with management. Controls project plan by reviewing design, specifications, and plan, scheduling changes, and recommending actions.",href:"/"}],Pe=function(){return Object(a.jsxs)(G,{activeLink:"Carrer",titleImage:Ie,title:"Welcome to Random Engineering Careers",text:"As a leading employer in the urban mobility industry, we look for people who create exceptional value for our customers.",children:[Object(a.jsx)(le,{title:"What our employees say",children:Object(a.jsx)(j.a,{wrap:"wrap",p:"10px",justifyContent:"center",children:Ee.map((function(e,t){return Object(a.jsx)(l.a,{m:"10px",children:Object(a.jsx)(Me,{img:e.img,title:e.title,text:e.text},t)},t)}))})}),Object(a.jsx)(le,{title:"Open positions",children:Object(a.jsx)(j.a,{wrap:"wrap",p:"10px",justifyContent:"center",children:Re.map((function(e,t){return Object(a.jsx)(l.a,{m:"10px",w:"100%",children:Object(a.jsx)(pe,{img:e.img,title:e.title,text:e.text,href:e.href},t)},t)}))})})]})},Qe=i.p+"static/media/p6.9330e3b3.jpg",Te=i.p+"static/media/emp1.4b80978a.jpg",Be=i.p+"static/media/emp2.2de04ff1.jpg",Fe=i.p+"static/media/emp3.eb28c412.jpg",Le=i.p+"static/media/emp4.0adbb333.jpg",He=i.p+"static/media/emp5.90172f9c.jpg",Ge=i.p+"static/media/emp6.15c8b410.jpg",Ue=i.p+"static/media/emp7.e752dd9a.jpg",Ve=i.p+"static/media/emp8.cdd493ce.jpg",Je=i.p+"static/media/emp9.178abdd8.jpg",Xe=[{title:"History",text:"Random Engineering was founded in 1932 in Harare, Zimbabwe, and is one of the leading manufacturers of elevators, escalators, and moving walkways, as well as a top provider of vertical transportation maintenance and modernization across the globe. The Group has over 1,000 branch offices in more than 100 countries, in addition to production sites as well as research and development centers in Brazil, China, Europe, India, and the United States."},{title:"Trusded",text:"Trust is always the hardest value to earn in a relationship, and the easiest to lose.We know that success depends on earning the confidence of our customers by providing them with quality products, services and solutions that bring them value and peace of mind.And trust is built upon over 145 years of unbroken service, and continuous, family-owned management. We respect our heritage and remain true to our legacy of trust. And we know that we have to keep earning that trust every day."},{title:"Professional",text:"We have over 30,000 specialist engineers, and every one of them is fully trained, certified and re-trained regularly to keep them up to date with the latest technologies, regulations and codes. Behind them, experts from complementary disciplines add their own vital contributions to ensure quality, customer focus and continuous improvement in R&D, training, IT, marketing, testing, and much more. We strive always to be a professional partner to our customers, by adding value to their business, and adding quality to the infrastructure of the urban world."},{title:"Smart",text:"Random Engineering has pioneered the elevator and escalator industry in developing intelligent, integrated and innovative mobility solutions. The PORT Technology and myPORT integrated building and elevator control systems lead the world in providing high-performance, high-security mobility in complex contemporary buildings. And Random Engineering Ahead has established us as leaders in adding elevators and escalators to the Internet of Things. Smart solutions come from smart people with smart ideas and the encouragement to develop them. We will always be enablers of smartness."},{title:"Safety",text:"More than 66,000 employees work around the clock to serve 1.5 billion people using our elevators and escalators everyday. Safety for each one of our customers and employees is first and foremost."},{title:"Values",text:"Our present-day success is driven by our commitment to traditional core values such as customer service, quality and safety, combined with our key strengths of creativity and innovation to produce intelligent solutions in response to customer needs. Our values describe how Random Engineering, as a company, and our employees behave, and are the principles upon which our business relationships are based"}],Ke=[{img:Te,title:"Predrag Birgir",text:"Before you judge a man, walk a mile in his shoes. After that who cares?... He\u2019s a mile away and you\u2019ve got his shoes!"},{img:Be,title:"Rosemarie Jarmila",text:"Better to remain silent and be thought a fool than to speak out and remove all doubt."},{img:Fe,title:"Svjetlana Enid",text:"If I were two-faced, would I be wearing this one?"},{img:Le,title:"Florina Linda",text:"The best thing about the future is that it comes one day at a time."},{img:He,title:"Meridith Martyna",text:"The only mystery in life is why the kamikaze pilots wore helmets."},{img:Ge,title:"Gathbiyya Fizza",text:"Light travels faster than sound. This is why some people appear bright until you hear them speak."},{img:Ue,title:"Heta Gerhild",text:"Nobody realizes that some people expend tremendous energy merely to be normal."},{img:Ve,title:"Vaihere Geir",text:"Men marry women with the hope they will never change. Women marry men with the hope they will change. Invariably they are both disappointed."},{img:Je,title:"Malati Marina",text:"All the things I really like to do are either immoral, illegal or fattening."}],Ze=function(){return Object(a.jsxs)(G,{activeLink:"About",titleImage:Qe,title:"About us",text:"For the success path of life.",children:[Object(a.jsx)(le,{title:"Our Story and our values",children:Object(a.jsx)(j.a,{wrap:"wrap",p:"10px",justifyContent:"center",children:Xe.map((function(e,t){return Object(a.jsx)(l.a,{m:"10px",children:Object(a.jsx)(Me,{title:e.title,text:e.text})},t)}))})}),Object(a.jsx)(le,{title:"Employees of the Month",children:Object(a.jsx)(te,{cards:Ke.map((function(e,t){return Object(a.jsx)(ie,{img:e.img,title:e.title,text:e.text},t)}))})})]})},Ye=i.p+"static/media/p9.89d1aca9.jpg",$e=i(145),et=i(140),tt=i(38),it=i(134),at=i(135),rt=i(136),nt=function(e){var t=e.label,i=e.type,r=e.sendRef,s=e.area,o=void 0!==s&&s,c=e.help,u=Object(n.useRef)(null);return Object(n.useEffect)((function(){return r(u)})),Object(a.jsx)(tt.a,{children:Object(a.jsxs)(j.a,{direction:["column","row"],children:[Object(a.jsx)(it.a,{minW:"150px",textAlign:["left","right"],children:t}),Object(a.jsxs)(l.a,{w:"100%",children:[o?Object(a.jsx)(at.a,{placeholder:t,ref:u}):Object(a.jsx)(rt.a,{type:i,placeholder:t,ref:u}),c?Object(a.jsx)(tt.b,{children:c}):null]})]})})},st=function(e){var t=e.title,i=e.inputs,r=e.sendSubmit,s=e.submitText,o=void 0===s?"Submit":s,c=Object(n.useState)(""),d=Object(u.a)(c,2),m=d[0],p=d[1],h=Object(n.useState)(""),b=Object(u.a)(h,2),g=b[0],x=b[1],f=Object(n.useRef)(null),v=i.map((function(){return f})),O=Object($e.a)(),y=O.isOpen,w=O.onOpen,k=O.onClose;return Object(a.jsxs)(l.a,{mt:"30px",p:"10px",maxW:"600px",mx:"auto",border:"1px",borderColor:"primary.500",children:[Object(a.jsx)(S.a,{mb:"20px",fontSize:"xl",fontWeight:"bold",textAlign:"center",children:t}),Object(a.jsx)(j.a,{direction:"column",sx:{gap:"20px"},children:i.map((function(e,t){return Object(a.jsx)(nt,{label:e.label,type:e.type,sendRef:function(e){v[t]=e},area:e.area,help:e.help},t)}))}),Object(a.jsx)(j.a,{m:"20px",justifyContent:"flex-end",children:Object(a.jsx)(me,{label:o,mode:"primary",onClick:function(){v.map((function(e){var t;return null===(t=e.current)||void 0===t?void 0:t.value})).every((function(e){return""!==e}))?(p("Message send successfully!"),x("Thanks for your message. We will contact you as soon as possible."),r(i.map((function(e,t){var i;return{lable:e.label,value:null===(i=v[t].current)||void 0===i?void 0:i.value}}))),v.forEach((function(e){var t=e.current;t&&(t.value="")})),w()):(p("Data missing!"),x("Some data is missing. Please fill all the fields."),w())}})}),Object(a.jsxs)(et.a,{isOpen:y,onClose:k,children:[Object(a.jsx)(et.g,{}),Object(a.jsxs)(et.d,{children:[Object(a.jsx)(et.f,{children:m}),Object(a.jsx)(et.c,{}),Object(a.jsx)(et.b,{children:g}),Object(a.jsx)(et.e,{children:Object(a.jsx)(l.a,{mr:"20px",children:Object(a.jsx)(me,{label:"Close",onClick:k})})})]})]})]})},ot=[{label:"Company",type:"text"},{label:"Name",type:"text"},{label:"Email",type:"email"},{label:"Phone number",type:"tel",help:"Format +(xx) xx xxx xx xx"},{label:"Message",type:"text",area:!0}],ct=function(){return Object(a.jsxs)(G,{activeLink:"Contact",titleImage:Ye,title:"Contact us",text:"Personalized Service, Deserving results",children:[Object(a.jsx)(le,{title:"Contact us today",children:Object(a.jsx)(st,{title:"Contact Form",inputs:ot,sendSubmit:function(e){return console.log(e)},submitText:"Send"})}),Object(a.jsx)(le,{title:"Where you find us",children:Object(a.jsx)(j.a,{w:"100%",minH:["200px","300px","400px"],children:Object(a.jsx)("iframe",{title:"map",style:{width:"100%"},src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3231.140988862469!2d14.487870515118377!3d35.91904888013946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x130e4541ffb352f5%3A0x8776df1e1ec665f0!2sLOVE%20Monument!5e0!3m2!1sde!2smt!4v1610192122383!5m2!1sde!2smt","aria-hidden":"false"})})})]})},ut=Object(Oe.a)({colors:{primary:{100:"#ce717f",200:"#c65a6a",300:"#be4255",400:"#b62b3f",500:"#ae132a",600:"#9d1126",700:"#8b0f22",800:"#7a0d1d",900:"#680b19"},secondary:{100:"#beb7b8",200:"#b3abac",300:"#a89fa0",400:"#9d9394",500:"#928788",600:"#837a7a",700:"#756c6d",800:"#665f5f",900:"#585152"}}}),lt=function(){return Object(a.jsxs)(ye.a,{theme:ut,children:[Object(a.jsx)(we.a,{}),Object(a.jsx)(d.a,{children:Object(a.jsxs)(ke.c,{children:[Object(a.jsx)(ke.a,{path:"/projects",children:Object(a.jsx)(ve,{})}),Object(a.jsx)(ke.a,{path:"/customers",children:Object(a.jsx)(qe,{})}),Object(a.jsx)(ke.a,{path:"/carrer",children:Object(a.jsx)(Pe,{})}),Object(a.jsx)(ke.a,{path:"/about",children:Object(a.jsx)(Ze,{})}),Object(a.jsx)(ke.a,{path:"/contact",children:Object(a.jsx)(ct,{})}),Object(a.jsx)(ke.a,{path:"/",children:Object(a.jsx)(ge,{})})]})})]})},dt=function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,146)).then((function(t){var i=t.getCLS,a=t.getFID,r=t.getFCP,n=t.getLCP,s=t.getTTFB;i(e),a(e),r(e),n(e),s(e)}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(Object(a.jsxs)(n.StrictMode,{children:[Object(a.jsx)(r.a,{}),Object(a.jsx)(lt,{})]}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)})),dt()},45:function(e,t,i){e.exports={menu:"Mobilenav_menu__1pKf4",shown:"Mobilenav_shown__1Ow0f",hidden:"Mobilenav_hidden__298iT"}},65:function(e,t,i){e.exports={browser:"CardBrowser_browser__15LXg",flexElement:"CardBrowser_flexElement__32VD9"}},84:function(e,t,i){e.exports={menu:"BurgerMenu_menu__2ODNg","menu-spin":"BurgerMenu_menu-spin__Vof31"}}},[[110,1,2]]]);
//# sourceMappingURL=main.4834e283.chunk.js.map