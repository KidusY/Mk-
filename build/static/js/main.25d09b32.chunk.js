(this.webpackJsonpmk=this.webpackJsonpmk||[]).push([[0],{104:function(e,a,t){},107:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),o=t(7),l=t.n(o),s=(t(81),t(46)),c=t(66),i=t(27),m=t.n(i),u=t(35),p=t(36),d=t(37),g=t(45),h=t(42),E=t(61),f=t.n(E),v=t(23),b=t(148),y=t(141),k=t(147),w=t(142),M=t(143),x=t(137),S=(t(83),t(31)),j=t.n(S),q=function(){var e=Object(u.a)(m.a.mark((function e(a,t,n,r){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,j.a.post("https://cfoig09ck4.execute-api.us-west-2.amazonaws.com/default/emailAppFunction",{api_key:"11111111111111111111",Name:a,Subject:t,Email:n,Message:r});case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),console.log(e.t0);case 8:return e.prev=8,e.next=11,j.a.post("https://ocs8ii6eod.execute-api.us-west-2.amazonaws.com/default/sendEmailFunction",{api_key_sendEmail:"22222222222222222222",Name:a,Subject:t,Email:n,Message:r});case 11:e.next=16;break;case 13:e.prev=13,e.t1=e.catch(8),console.log(e.t1);case 16:case"end":return e.stop()}}),e,null,[[0,5],[8,13]])})));return function(a,t,n,r){return e.apply(this,arguments)}}(),O=function(e){Object(g.a)(t,e);var a=Object(h.a)(t);function t(){var e;return Object(p.a)(this,t),(e=a.call(this)).state={ErrorMessage:"",NameBool:!0,EmailBool:!0,messageBool:!0,email:{name:"",email:"",message:""}},e}return Object(d.a)(t,[{key:"render",value:function(){var e=this,a=!0;return a=!this.state.messageBool,r.a.createElement(x.a,{component:"main",maxWidth:"xs"},r.a.createElement(y.a,null),r.a.createElement("div",null,r.a.createElement("form",{onSubmit:function(a){a.preventDefault();var t=document.querySelector("#name").value,n=document.querySelector("#subject").value,r=document.querySelector("#email").value,o=document.querySelector("#message").value;q(t,n,r,o),e.props.history.push("/messageSent")}},r.a.createElement("h1",null,"Contact us "),!this.state.EmailBool&&r.a.createElement(w.a,null,this.state.ErrorMessage),r.a.createElement(k.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",autoFocus:!0,onChange:function(){var a=function(e){var a={ErrorMessage:"",bool:!0};return 0===e.length?(a.ErrorMessage="Please Enter Email",a.bool=!1):(a.ErrorMessage="",a.bool=!0),a}(document.querySelector("#email").value);e.setState({ErrorMessage:a.ErrorMessage,EmailBool:a.bool})}}),!this.state.NameBool&&r.a.createElement(w.a,null,this.state.ErrorMessage),r.a.createElement(k.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"name",label:"Name",id:"name",onChange:function(){var a=function(e){var a={ErrorMessage:"",bool:!1};return 0===e.length&&(a.ErrorMessage="Please Enter Name",a.bool=!0),a}(document.querySelector("#name").value);e.setState({ErrorMessage:a.ErrorMessage,NameBool:a.bool})}}),r.a.createElement(k.a,{variant:"outlined",margin:"normal",fullWidth:!0,name:"subject",label:"subject",id:"subject"}),!this.state.messageBool&&r.a.createElement(w.a,null,this.state.ErrorMessage),r.a.createElement(M.a,{className:"textArea","aria-label":"minimum height",rowsMin:5,id:"message",placeholder:"Message",onChange:function(){var a=function(e){var a={ErrorMessage:"",bool:!0};return 0===e.length?(a.ErrorMessage="Please Enter Message",a.bool=!1):(a.ErrorMessage="",a.bool=!0),a}(document.querySelector("#message").value);e.setState({ErrorMessage:a.ErrorMessage,messageBool:a.bool})}}),r.a.createElement(b.a,{type:"submit",variant:"contained",color:"primary",disabled:a},"send"))))}}]),t}(r.a.Component),C=function(){return r.a.createElement("div",null,r.a.createElement("h1",null," Oooops!!!! Wrong Email or Password "))},N=t(144),B=function(){return r.a.createElement("div",{className:"message"},r.a.createElement(N.a,{message:"Thanks for Reaching out, We will Get back to you soon!!!!!"}))},W=t(150),I=t(146),D=t(145),_=Object(D.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}}));function A(e){var a=_();return r.a.createElement(x.a,{component:"main",maxWidth:"xs"},r.a.createElement(y.a,null),r.a.createElement("div",{className:a.paper},r.a.createElement(W.a,null),r.a.createElement(I.a,{component:"h1",variant:"h5"},"Sign in"),r.a.createElement("form",{className:a.form,noValidate:!0,onSubmit:function(a){a.preventDefault();var t=document.querySelector("#email").value,n=document.querySelector("#password").value;e.loginCheck(t,n)?e.history.push("/form"):e.history.push("/loginError")}},r.a.createElement(k.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",autoFocus:!0}),r.a.createElement(k.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password"}),r.a.createElement(b.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:a.submit},"Sign In"))))}t(104);var F=function(e){Object(g.a)(t,e);var a=Object(h.a)(t);function t(){var e;return Object(p.a)(this,t),(e=a.call(this)).fetchData=Object(u.a)(m.a.mark((function a(){var t;return m.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,j.a.get("https://etkboq350m.execute-api.us-west-2.amazonaws.com/default/getDataFromTable",{api_key:"jQy0ejkWR815um3evUdBz2TUIqZhdkOK2xCqg4Oi"});case 3:t=a.sent,e.setState({userInfo:t.data.body.Items}),a.next=10;break;case 7:a.prev=7,a.t0=a.catch(0),console.log(a.t0);case 10:case"end":return a.stop()}}),a,null,[[0,7]])}))),e.loginCheck=function(a,t){var n,r=Object(c.a)(e.state.userInfo);try{for(r.s();!(n=r.n()).done;){var o=n.value;return a===o.email&&t===o.password&&(e.setState({login:!0}),!0)}}catch(l){r.e(l)}finally{r.f()}},e.state={userInfo:[],login:!1},e}return Object(d.a)(t,[{key:"componentDidMount",value:function(){this.fetchData()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"App"},r.a.createElement("img",{src:f.a,className:"logo",alt:"Mk"}),r.a.createElement(v.a,{exact:!0,path:"/",component:function(a){return r.a.createElement(A,Object.assign({},a,{loginCheck:e.loginCheck}))}}),this.state.login&&r.a.createElement(v.a,{exact:!0,path:"/form",component:function(e){return r.a.createElement(O,e)}}),r.a.createElement(v.a,{exact:!0,path:"/loginError",component:function(e){return r.a.createElement(C,e)}}),r.a.createElement(v.a,{exact:!0,path:"/messageSent",component:function(e){return r.a.createElement(B,e)}}))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(s.a,null,r.a.createElement(F,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},61:function(e,a,t){e.exports=t.p+"static/media/mk_decision_logo_black-01.3221f1a3.png"},76:function(e,a,t){e.exports=t(107)},81:function(e,a,t){},83:function(e,a,t){}},[[76,1,2]]]);
//# sourceMappingURL=main.25d09b32.chunk.js.map