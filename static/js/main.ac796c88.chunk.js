(this.webpackJsonptawitter=this.webpackJsonptawitter||[]).push([[0],{51:function(e,t,a){},52:function(e,t,a){"use strict";a.r(t);var n=a(2),c=a.n(n),r=a(31),s=a.n(r),i=a(9),u=a(22),o=a(6),l=a(10),j=a.n(l),b=a(17),d=a(24);a(39),a(53),a(54);d.a.initializeApp({apiKey:"AIzaSyAzUMCIxLxCI4gyfUUI_acxO1Op1Xn0_Fs",authDomain:"tawitter-cfb1d.firebaseapp.com",projectId:"tawitter-cfb1d",storageBucket:"tawitter-cfb1d.appspot.com",messagingSenderId:"934316598807",appId:"1:934316598807:web:a58539a685cccb6ff19e52"});var p=d.a,f=d.a.auth(),O=d.a.firestore(),h=d.a.storage(),m=a(1),x=function(){var e=Object(n.useState)(""),t=Object(i.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(""),s=Object(i.a)(r,2),u=s[0],o=s[1],l=Object(n.useState)(!0),d=Object(i.a)(l,2),p=d[0],O=d[1],h=Object(n.useState)(""),x=Object(i.a)(h,2),v=x[0],g=x[1],y=function(e){var t=e.target,a=t.name,n=t.value;"email"===a?c(n):"password"===a&&o(n)},w=function(){var e=Object(b.a)(j.a.mark((function e(t){var n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),e.prev=1,!p){e.next=8;break}return e.next=5,f.createUserWithEmailAndPassword(a,u);case 5:n=e.sent,e.next=11;break;case 8:return e.next=10,f.signInWithEmailAndPassword(a,u);case 10:n=e.sent;case 11:console.log(n),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(1),g(e.t0.message);case 17:case"end":return e.stop()}}),e,null,[[1,14]])})));return function(t){return e.apply(this,arguments)}}();return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)("form",{onSubmit:w,className:"container",children:[Object(m.jsx)("input",{name:"email",type:"email",placeholder:"Email",required:!0,value:a,onChange:y,className:"authInput"}),Object(m.jsx)("input",{name:"password",type:"password",placeholder:"Password",required:!0,value:u,className:"authInput",onChange:y}),Object(m.jsx)("input",{type:"submit",className:"authInput authSubmit",value:p?"Create Account":"Sign In"}),v&&Object(m.jsx)("span",{className:"authError",children:v})]}),Object(m.jsx)("span",{onClick:function(){return O((function(e){return!e}))},className:"authSwitch",children:p?"Sign In":"Create Account"})]})},v=a(12),g=a(23),y=function(){var e=function(){var e=Object(b.a)(j.a.mark((function e(t){var a,n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"google"===(a=t.target.name)?n=new p.auth.GoogleAuthProvider:"github"===a&&(n=new p.auth.GithubAuthProvider),e.next=4,f.signInWithPopup(n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(m.jsxs)("div",{className:"authContainer",children:[Object(m.jsx)(v.a,{icon:g.c,color:"#04AAFF",size:"3x",style:{marginBottom:30}}),Object(m.jsx)(x,{}),Object(m.jsxs)("div",{className:"authBtns",children:[Object(m.jsxs)("button",{onClick:e,name:"google",className:"authBtn",children:["Continue with Google ",Object(m.jsx)(v.a,{icon:g.b})]}),Object(m.jsxs)("button",{onClick:e,name:"github",className:"authBtn",children:["Continue with Github ",Object(m.jsx)(v.a,{icon:g.a})]})]})]})},w=a(33),N=a(19),I=function(e){var t=e.taweetObj,a=e.isOwner,c=Object(n.useState)(!1),r=Object(i.a)(c,2),s=r[0],u=r[1],o=Object(n.useState)(t.text),l=Object(i.a)(o,2),d=l[0],p=l[1],f=function(){var e=Object(b.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.confirm("Are you sure you want to delete this nweet?")){e.next=6;break}return e.next=4,O.doc("taweets/".concat(t.id)).delete();case 4:return e.next=6,h.refFromURL(t.attachmentUrl).delete();case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),x=function(){return u((function(e){return!e}))},g=function(){var e=Object(b.a)(j.a.mark((function e(a){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),e.next=3,O.doc("taweets/".concat(t.id)).update({text:d});case 3:u(!1);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(m.jsx)("div",{className:"taweet",children:s?Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)("form",{onSubmit:g,className:"container taweetEdit",children:[Object(m.jsx)("input",{type:"text",placeholder:"Edit your nweet",value:d,required:!0,autoFocus:!0,onChange:function(e){var t=e.target.value;p(t)},className:"formInput"}),Object(m.jsx)("input",{type:"submit",value:"Update Taweet",className:"formBtn"})]}),Object(m.jsx)("span",{onClick:x,className:"formBtn cancelBtn",children:"Cancel"})]}):Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("h4",{children:t.text}),t.attachmentUrl&&Object(m.jsx)("img",{src:t.attachmentUrl}),a&&Object(m.jsxs)("div",{className:"taweet__actions",children:[Object(m.jsx)("span",{onClick:f,children:Object(m.jsx)(v.a,{icon:N.d})}),Object(m.jsx)("span",{onClick:x,children:Object(m.jsx)(v.a,{icon:N.a})})]})]})})},S=a(56),k=function(e){var t=e.userObj,a=Object(n.useState)(""),c=Object(i.a)(a,2),r=c[0],s=c[1],u=Object(n.useState)(""),o=Object(i.a)(u,2),l=o[0],d=o[1],p=function(){var e=Object(b.a)(j.a.mark((function e(a){var n,c,i,u;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!==r){e.next=2;break}return e.abrupt("return");case 2:if(a.preventDefault(),n="",""===l){e.next=12;break}return c=h.ref().child("".concat(t.uid,"/").concat(Object(S.a)())),e.next=8,c.putString(l,"data_url");case 8:return i=e.sent,e.next=11,i.ref.getDownloadURL();case 11:n=e.sent;case 12:return u={text:r,createdAt:Date.now(),creatorId:t.uid,attachmentUrl:n},e.next=15,O.collection("taweets").add(u);case 15:s(""),d("");case 17:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(m.jsxs)("form",{onSubmit:p,className:"factoryForm",children:[Object(m.jsxs)("div",{className:"factoryInput__container",children:[Object(m.jsx)("input",{className:"factoryInput__input",value:r,onChange:function(e){var t=e.target.value;s(t)},type:"text",placeholder:"What's on your mind?",maxLength:120}),Object(m.jsx)("input",{type:"submit",value:"\u2192",className:"factoryInput__arrow"})]}),Object(m.jsxs)("label",{for:"attach-file",className:"factoryInput__label",children:[Object(m.jsx)("span",{children:"Add photos"}),Object(m.jsx)(v.a,{icon:N.b})]}),Object(m.jsx)("input",{id:"attach-file",type:"file",accept:"image/*",onChange:function(e){var t=e.target.files[0],a=new FileReader;a.onloadend=function(e){var t=e.currentTarget.result;d(t)},a.readAsDataURL(t)},style:{opacity:0}}),l&&Object(m.jsxs)("div",{className:"factoryForm__attachment",children:[Object(m.jsx)("img",{src:l,style:{backgroundImage:l}}),Object(m.jsxs)("div",{className:"factoryForm__clear",onClick:function(){return d("")},children:[Object(m.jsx)("span",{children:"Remove"}),Object(m.jsx)(v.a,{icon:N.c})]})]})]})},C=function(e){var t=e.userObj,a=Object(n.useState)([]),c=Object(i.a)(a,2),r=c[0],s=c[1];return Object(n.useEffect)((function(){O.collection("taweets").onSnapshot((function(e){var t=e.docs.map((function(e){return Object(w.a)({id:e.id},e.data())}));s(t)}))}),[]),Object(m.jsxs)("div",{className:"container",children:[Object(m.jsx)(k,{userObj:t}),Object(m.jsx)("div",{style:{marginTop:30},children:r.map((function(e){return Object(m.jsx)(I,{taweetObj:e,isOwner:e.creatorId===t.uid},e.id)}))})]})},A=function(e){var t=e.refreshUser,a=e.userObj,c=Object(o.f)(),r=Object(n.useState)(a.displayName),s=Object(i.a)(r,2),u=s[0],l=s[1],d=function(){var e=Object(b.a)(j.a.mark((function e(n){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),a.displayName===u){e.next=5;break}return e.next=4,a.updateProfile({displayName:u});case 4:t();case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(m.jsxs)("div",{className:"container",children:[Object(m.jsxs)("form",{onSubmit:d,className:"profileForm",children:[Object(m.jsx)("input",{onChange:function(e){var t=e.target.value;l(t)},type:"text",autoFocus:!0,placeholder:"Display name",value:u,className:"formInput"}),Object(m.jsx)("input",{type:"submit",value:"Update Profile",className:"formBtn",style:{marginTop:10}})]}),Object(m.jsx)("span",{className:"formBtn cancelBtn logOut",onClick:function(){f.signOut(),c.push("/")},children:"Log Out"})]})},F=function(e){var t=e.userObj;return Object(m.jsx)("nav",{children:Object(m.jsxs)("ul",{style:{display:"flex",justifyContent:"center",marginTop:50},children:[Object(m.jsx)("li",{children:Object(m.jsx)(u.b,{to:"/",style:{marginRight:10},children:Object(m.jsx)(v.a,{icon:g.c,color:"#04AAFF",size:"2x"})})}),Object(m.jsx)("li",{children:Object(m.jsxs)(u.b,{to:"/profile",style:{marginLeft:10,display:"flex",flexDirection:"column",alignItems:"center",fontSize:12},children:[Object(m.jsx)(v.a,{icon:N.e,color:"#04AAFF",size:"2x"}),Object(m.jsx)("span",{style:{marginTop:10},children:t.displayName?"".concat(t.displayName,"\uc758 Profile"):"Profile"})]})})]})})},U=function(e){var t=e.refreshUser,a=e.isLoggedIn,n=e.userObj;return Object(m.jsxs)(u.a,{children:[a&&Object(m.jsx)(F,{userObj:n}),Object(m.jsx)(o.c,{children:a?Object(m.jsxs)("div",{style:{maxWidth:890,width:"100%",margin:"0 auto",marginTop:80,display:"flex",justifyContent:"center"},children:[Object(m.jsx)(o.a,{exact:!0,path:"/",children:Object(m.jsx)(C,{userObj:n})}),Object(m.jsx)(o.a,{exact:!0,path:"/Profile",children:Object(m.jsx)(A,{refreshUser:t,userObj:n})})]}):Object(m.jsx)(o.a,{exact:!0,path:"/",children:Object(m.jsx)(y,{})})})]})};var _=function(){var e=Object(n.useState)(!1),t=Object(i.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(null),s=Object(i.a)(r,2),u=s[0],o=s[1];return Object(n.useEffect)((function(){f.onAuthStateChanged((function(e){o(e?{displayName:e.displayName,uid:e.uid,updateProfile:function(t){return e.updateProfile(t)}}:null),c(!0)}))}),[]),Object(m.jsxs)(m.Fragment,{children:[a?Object(m.jsx)(U,{refreshUser:function(){var e=f.currentUser;o({displayName:e.displayName,uid:e.uid,updateProfile:function(t){return e.updateProfile(t)}})},isLoggedIn:Boolean(u),userObj:u}):"Initializing...",Object(m.jsxs)("footer",{children:["\xa9 ",(new Date).getFullYear()," tawitter"]})]})};a(51);s.a.render(Object(m.jsx)(c.a.StrictMode,{children:Object(m.jsx)(_,{})}),document.getElementById("root"))}},[[52,1,2]]]);
//# sourceMappingURL=main.ac796c88.chunk.js.map