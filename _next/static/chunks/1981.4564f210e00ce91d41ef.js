"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1981],{91981:function(e,t,n){n.r(t);var r=n(85893),c=n(809),a=n.n(c),o=n(30266),s=n(65523),l=n(67294),u=n(10914),i=n(180);t.default=function(e){(0,s.Z)(e);var t=(0,u.Ge)(),n=t.active,c=t.activate,f=t.deactivate,d=t.error,p=t.account;(0,l.useEffect)((function(){(function(){var e=(0,o.Z)(a().mark((function e(){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,p&&localStorage.setItem("address",p),!localStorage.getItem("address",p)){e.next=5;break}return e.next=5,c(i.Lj);case 5:e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),(0,i.x2)("Error reconnecting to MetaMask.");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}})()(),d&&(-32002===d.code?(localStorage.clear(),(0,i.x2)("MetaMask is not connected to site.")):(0,i.x2)(d.message)),n&&(0,i.JQ)("Wallet connected.")}),[d,n]);var x=function(){var e=(0,o.Z)(a().mark((function e(){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c(i.Lj);case 3:e.next=7;break;case 5:e.prev=5,e.t0=e.catch(0);case 7:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(){return e.apply(this,arguments)}}();return(0,r.jsx)("div",{style:{zIndex:"999999999"},children:(0,r.jsx)("button",{type:"button",onClick:function(){return n?function(){try{f(),(0,i.JQ)("Wallet disconnected."),localStorage.clear()}catch(e){}}():x()},className:"text-center w-full bg-brightGreen text-black py-2 px-4 font-bold text-lg lg:text-sm border border-brightGreen hover:bg-brightBlue",children:n?"Disconnect Wallet":"Connect Wallet"})})}}}]);