"use strict";(self.webpackChunkspardha23=self.webpackChunkspardha23||[]).push([[670],{1670:function(e,s,a){a.r(s),a.d(s,{default:function(){return N}});var n=a(885),i=a(2791),r=(a(7632),a(173)),c=a(7689),t=a(5725),l=a(1694),o=a.n(l),d=a(1087),h=a(9135),m=a(184),u=function(e){var s=e.isOpen,a=e.toggle,c=(0,i.useState)(!1),l=(0,n.Z)(c,2),u=l[0],x=l[1];(0,i.useEffect)((function(){r.tq&&x(!0)}),[]);var g=function(){u&&a()};return(0,m.jsxs)("div",{className:o()("sidebar",{"is-open":s}),id:"navigation",children:[(0,m.jsxs)("div",{className:"sidebar-header",children:[(0,m.jsx)("span",{color:"info",onClick:a,style:{color:"#fff"},children:"\xd7"}),(0,m.jsx)("div",{className:"logo_db",children:(0,m.jsx)(d.rU,{to:"/",children:(0,m.jsx)("img",{src:"/images/logo/spardha-logo-white.png",alt:"spardha-logo",className:"hidden-sm spardha-logo"})})})]}),(0,m.jsx)("div",{className:"side-menu",children:(0,m.jsxs)(t.JL,{vertical:!0,className:"list-unstyled pb-3 navi",children:[(0,m.jsx)(t.LY,{className:"item_nav",children:(0,m.jsxs)(t.OL,{tag:d.rU,to:"/dashboard/home",onClick:function(){g()},children:[(0,m.jsx)(h.xng,{className:"mr-2 icon_bar"}),"Home"]})}),(0,m.jsx)(t.LY,{className:"item_nav",children:(0,m.jsxs)(t.OL,{tag:d.rU,to:"/dashboard/registration",onClick:function(){g()},children:[(0,m.jsx)(h.qGN,{className:"mr-2 icon_bar"}),"Registrations"]})}),(0,m.jsx)(t.LY,{className:"item_nav",children:(0,m.jsxs)(t.OL,{tag:d.rU,to:"/dashboard/profile",onClick:function(){g()},children:[(0,m.jsx)(h.q1E,{className:"mr-2 icon_bar"}),"User Profile"]})}),(0,m.jsx)(t.LY,{className:"item_nav",children:(0,m.jsxs)(t.OL,{tag:d.rU,to:"/",onClick:function(){u&&a(),localStorage.removeItem("token")},children:[(0,m.jsx)(h.fHX,{className:"mr-2 icon_bar"}),"Logout"]})})]})})]})},x=a(4569),g=a.n(x),j=function(e){var s=e.toggleSidebar,a=(0,i.useState)(!1),r=(0,n.Z)(a,2),c=r[0],l=r[1],o=localStorage.getItem("token"),u={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_BASE_URL,x=(0,i.useState)(""),j=(0,n.Z)(x,2),f=j[0],N=j[1],p=(0,i.useState)("10"),v=(0,n.Z)(p,2),b=v[0],_=v[1];return(0,i.useEffect)((function(){g().get("".concat(u,"auth/update/"),{headers:{Authorization:"Token ".concat(o)}}).then((function(e){N(e.data)})).catch((function(e){console.log("error=",e)})),g().get("".concat(u,"teams/"),{headers:{Authorization:"Token ".concat(o)}}).then((function(e){_(e.data.length)})).catch((function(e){console.log("error=",e),404===e.response.status&&_(0)}))}),[]),(0,m.jsxs)(t.wp,{color:"light",light:!0,className:"navbar shadow-sm bg-white rounded",expand:"md",children:[(0,m.jsxs)("div",{className:"left_content",children:[(0,m.jsx)(t.zx,{color:"info",onClick:s,children:(0,m.jsx)(h.E2G,{className:"mr-2"})}),(0,m.jsx)("div",{className:"col-xs-7 mine_lefts",children:(0,m.jsx)("span",{className:"events-reg hidden-xs",children:(0,m.jsxs)("h4",{className:"size_Correct",children:[" ","\u2002Events Registered: ",b," "]})})})]}),(0,m.jsx)("div",{className:"row_db",children:(0,m.jsx)("header",{children:(0,m.jsx)("div",{className:"col-xs-5",children:(0,m.jsx)("div",{className:"header-rightside",children:(0,m.jsxs)("ul",{className:"list-inline header-top pull-right",children:[(0,m.jsx)("li",{className:"hidden-xs",children:(0,m.jsx)(d.rU,{to:"/dashboard/events",className:"register-now",children:"Register Now"})}),(0,m.jsxs)("li",{className:"dropdown",children:[(0,m.jsxs)("button",{className:"dropdown-toggle",onClick:function(){l(!c)},children:[(0,m.jsx)("img",{src:"/images/icons/user.png",alt:"user"}),(0,m.jsx)("b",{className:"caret"})]}),(0,m.jsx)("ul",{className:!0===c?"dropdown-menu":"closed_drp",children:(0,m.jsx)("li",{children:(0,m.jsxs)("div",{className:"navbar-content",children:[(0,m.jsx)("span",{children:f.name}),(0,m.jsx)("p",{className:"text-muted small",children:f.email}),(0,m.jsx)("div",{className:"divider"}),(0,m.jsx)(d.rU,{to:"/dashboard/profile",className:"view_db btn-sm active profile_db",children:"View Profile"})]})})})]})]})})})})})]})},f=function(e){var s=e.sidebarIsOpen,a=e.toggleSidebar;return(0,m.jsxs)(t.W2,{fluid:!0,className:o()("content_db",{"is-open":s}),children:[(0,m.jsx)(j,{toggleSidebar:a}),(0,m.jsx)(c.j3,{})]})},N=function(){var e=(0,c.s0)();(0,i.useEffect)((function(){localStorage.getItem("token")||e("/register/signup")}),[e]);var s=(0,i.useState)(!0),a=(0,n.Z)(s,2),t=a[0],l=a[1],o=function(){return l(!t)};return(0,i.useEffect)((function(){r.tq&&l(!1)}),[]),(0,m.jsxs)("div",{className:"Db wrapper",children:[(0,m.jsx)(u,{toggle:o,isOpen:t}),(0,m.jsx)(f,{toggleSidebar:o,sidebarIsOpen:t})]})}}}]);
//# sourceMappingURL=670.b2656b4c.chunk.js.map