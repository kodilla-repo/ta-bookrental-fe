(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["login"],{aeab:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("form",{staticClass:"form form--short",on:{submit:function(t){return t.preventDefault(),e.submitForm(t)}}},[n("h2",{staticClass:"sub-title",domProps:{textContent:e._s("Log in")}}),e.errorMessage.length?n("alert",{attrs:{type:"error",content:e.errorMessage}}):e._e(),e.loading?n("spinner"):e._e(),n("input-field",{attrs:{type:"text",name:"login",id:"login",label:"Login"},model:{value:e.login,callback:function(t){e.login=t},expression:"login"}}),n("input-field",{attrs:{type:"password",name:"password",id:"password",label:"Password"},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}}),n("div",{staticClass:"flex"},[n("button-item",{attrs:{id:"login-btn",variant:"primary",text:"Log in"}}),n("router-link",{attrs:{to:"/register"}},[n("button-item",{attrs:{id:"register-btn",text:"Sign up"}})],1)],1)],1)},s=[],a=(n("96cf"),n("1da1")),o=n("5530"),i=n("0c18"),l=n("2eef"),u=n("b3a5"),c=n("1ff0"),p=n("2f62"),g={name:"Login",data:function(){return{login:"",password:"",passwordRepeat:"",errorMessage:"",loading:!1}},methods:Object(o["a"])({},Object(p["b"])({signIn:"login"}),{submitForm:function(){var e=this;return Object(a["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.successMessage="",e.errorMessage="",e.loading=!0,e.login.length&&e.password.length){t.next=7;break}e.errorMessage="You can't leave fields empty",t.next=16;break;case 7:return t.prev=7,t.next=10,e.signIn({login:e.login,password:e.password});case 10:e.$router.push("/"),t.next=16;break;case 13:t.prev=13,t.t0=t["catch"](7),e.errorMessage=t.t0.message;case 16:e.loading=!1;case 17:case"end":return t.stop()}}),t,null,[[7,13]])})))()}}),components:{InputField:i["a"],ButtonItem:l["a"],Alert:u["a"],Spinner:c["a"]}},d=g,m=n("2877"),f=Object(m["a"])(d,r,s,!1,null,null,null);t["default"]=f.exports}}]);
//# sourceMappingURL=login.1ccda8fb.js.map