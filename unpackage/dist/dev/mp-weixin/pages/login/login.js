(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/login/login"],{129:function(e,t,n){"use strict";(function(e){n(5);r(n(3));var t=r(n(130));function r(e){return e&&e.__esModule?e:{default:e}}wx.__webpack_require_UNI_MP_PLUGIN__=n,e(t.default)}).call(this,n(1)["createPage"])},130:function(e,t,n){"use strict";n.r(t);var r=n(131),s=n(133);for(var o in s)"default"!==o&&function(e){n.d(t,e,(function(){return s[e]}))}(o);n(135);var a,u=n(11),i=Object(u["default"])(s["default"],r["render"],r["staticRenderFns"],!1,null,null,null,!1,r["components"],a);i.options.__file="pages/login/login.vue",t["default"]=i.exports},131:function(e,t,n){"use strict";n.r(t);var r=n(132);n.d(t,"render",(function(){return r["render"]})),n.d(t,"staticRenderFns",(function(){return r["staticRenderFns"]})),n.d(t,"recyclableRender",(function(){return r["recyclableRender"]})),n.d(t,"components",(function(){return r["components"]}))},132:function(e,t,n){"use strict";var r;n.r(t),n.d(t,"render",(function(){return s})),n.d(t,"staticRenderFns",(function(){return a})),n.d(t,"recyclableRender",(function(){return o})),n.d(t,"components",(function(){return r}));var s=function(){var e=this,t=e.$createElement;e._self._c},o=!1,a=[];s._withStripped=!0},133:function(e,t,n){"use strict";n.r(t);var r=n(134),s=n.n(r);for(var o in r)"default"!==o&&function(e){n.d(t,e,(function(){return r[e]}))}(o);t["default"]=s.a},134:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={data:function(){return{username:"",Rusername:"",password:"",Rpassword:"",register:!1}},methods:{onKeyInput:function(e){},login:function(){var t=this,n=/[a-zA-Z\u4E00-\u9FA5]{1}[a-zA-Z0-9\u4E00-\u9FA5]{1,12}/;n.test(this.username)?e.request({url:"http://47.94.11.39:3007/api/login",data:{username:this.username,password:this.password},method:"post",header:{"content-type":"application/x-www-form-urlencoded"},success:function(n){console.log(n),0===n.data.status?(t.$notify({type:"success",message:"登录成功"}),getApp().globalData.user_id=n.data.user_id,getApp().globalData.login=!0,e.setStorage({key:"token_key",data:n.data.token,success:function(e){console.log(e)}}),setTimeout((function(){e.redirectTo({url:"../index/index"})}),500)):t.$notify({type:"danger",message:"登录失败"})},fail:function(e){console.log(e)}}):this.$notify({type:"danger",message:"请注意账号格式"})},Tregister:function(){this.register=!0},IsRegister:function(){var t=this,n=/[a-zA-Z\u4E00-\u9FA5]{1}[a-zA-Z0-9\u4E00-\u9FA5]{1,12}/,r=/[A-Z]{1}[a-zA-Z0-9]{5,15}/;n.test(this.Rusername)?r.test(this.Rpassword)?e.request({url:"http://47.94.11.39:3007/api/regUser",data:{username:this.Rusername,password:this.Rpassword},method:"post",header:{"content-type":"application/x-www-form-urlencoded"},success:function(n){if(console.log(n),0===n.data.status){t.$notify({type:"success",message:"注册成功"});var r=getCurrentPages();console.log(r);var s=r[r.length-1];setTimeout((function(){e.redirectTo({url:s.$page.fullPath})}),500)}},fail:function(e){console.log(e)}}):this.$notify({type:"danger",message:"请注意密码格式"}):this.$notify({type:"danger",message:"请注意账号格式"})}}};t.default=n}).call(this,n(1)["default"])},135:function(e,t,n){"use strict";n.r(t);var r=n(136),s=n.n(r);for(var o in r)"default"!==o&&function(e){n.d(t,e,(function(){return r[e]}))}(o);t["default"]=s.a},136:function(e,t,n){}},[[129,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/login/login.js.map