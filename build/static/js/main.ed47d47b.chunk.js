(this.webpackJsonpmk=this.webpackJsonpmk||[]).push([[0],{152:function(e,a,t){e.exports=t(420)},156:function(e,a,t){},157:function(e,a,t){},419:function(e,a,t){},420:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),o=t(7),s=t.n(o),l=(t(156),t(136)),i=t(137),c=t(147),m=t(146),u=t(448),E=t(452),g=t(454),h=t(453),d=t(455),f=(t(157),t(158),function(e){Object(c.a)(t,e);var a=Object(m.a)(t);function t(){var e;return Object(l.a)(this,t),(e=a.call(this)).state={ErrorMessage:"",NameBool:!1,EmailBool:!1,messageBool:!1},e}return Object(i.a)(t,[{key:"render",value:function(){var e=this,a=!0;return this.state.NameBool||this.state.EmailBool||(a=!1),n.a.createElement("div",{className:"FormContainer"},n.a.createElement("form",{className:"form",noValidate:!0,autoComplete:"off"},n.a.createElement(u.a,{container:!0,direction:"column",justify:"flex-start",alignItems:"center",spacing:4},n.a.createElement(u.a,{container:!0,item:!0,xs:6,alignItems:"center"},this.state.NameBool&&n.a.createElement(E.a,null,this.state.ErrorMessage),n.a.createElement(g.a,{id:"Name",label:"Name",onChange:function(){var a=function(e){var a={ErrorMessage:"",bool:!1};return 0===e.length&&(a.ErrorMessage="Please Enter Name",a.bool=!0),a}(document.querySelector("#Name").value);e.setState({ErrorMessage:a.ErrorMessage,NameBool:a.bool})}})),n.a.createElement(u.a,{container:!0,item:!0,xs:6,alignItems:"center"},this.state.EmailBool&&n.a.createElement(E.a,null,this.state.ErrorMessage),n.a.createElement(g.a,{id:"Email",label:"Email",type:"email",onChange:function(){var a=function(e){var a={ErrorMessage:"",bool:!1};return 0===e.length&&(a.ErrorMessage="Please Enter Email",a.bool=!0),a}(document.querySelector("#Email").value);e.setState({ErrorMessage:a.ErrorMessage,EmailBool:a.bool})}})),n.a.createElement(u.a,{container:!0,item:!0,xs:6,alignItems:"center"},this.state.messageBool&&n.a.createElement(E.a,null,this.state.ErrorMessage),n.a.createElement(h.a,{id:"Message","aria-label":"empty textarea",placeholder:"Message",rowsMin:"10",onChange:function(){var a=function(e){var a={ErrorMessage:"",bool:!1};return 0===e.length&&(a.ErrorMessage="Please Enter Message",a.bool=!0),a}(document.querySelector("#Message").value);e.setState({ErrorMessage:a.ErrorMessage,messageBool:a.bool})}})),n.a.createElement(d.a,{variant:"contained",color:"primary",onClick:function(){},disabled:a},"Send"))))}}]),t}(n.a.Component));t(419);var v=function(){return n.a.createElement("div",{className:"App"},n.a.createElement(f,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(v,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[152,1,2]]]);
//# sourceMappingURL=main.ed47d47b.chunk.js.map