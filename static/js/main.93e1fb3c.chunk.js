(this.webpackJsonpemployee_details=this.webpackJsonpemployee_details||[]).push([[0],{10:function(e,t,a){},11:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(4),s=a.n(c),i=a(2),l=a(0),o=function(e){var t=e.id,a=e.firstName,n=e.lastName,r=e.skill,c=e.contact_number;return Object(l.jsx)("div",{className:"card",children:Object(l.jsxs)("div",{className:"container",children:[Object(l.jsxs)("h4",{children:["First Name : ",a]}),Object(l.jsxs)("h4",{children:["Last Name : ",n]}),Object(l.jsxs)("h4",{children:["Skill : ",r]}),Object(l.jsxs)("h4",{children:["Contact : ",c]})]},t)})},m=function(){var e=Object(n.useState)(""),t=Object(i.a)(e,2),a=t[0],r=t[1];return Object(l.jsxs)("div",{className:"SearchBar",children:[Object(l.jsx)("input",{type:"text",placeholder:"Enter A skill",value:a,onChange:function(e){return r(e.target.value)}}),Object(l.jsx)("button",{type:"submit",className:"SearchButton",children:"SEARCH"})]})},j=[{id:1,firstName:"Anil",lastName:"Kumar",skill:["HTML,","CSS,","Java Script,","React JS"],reporting_manager:"",contact_number:98764372},{id:2,firstName:"Ben",lastName:"Kim",skill:"Salesforce",reporting_manager:"",contact_number:98764372},{id:3,firstName:"Bhagyashree",lastName:"Shakrawar",skill:["HTML,","CSS,","Java Script,","React JS"],reporting_manager:1,contact_number:98764372},{id:4,firstName:"Abhishek",lastName:"Shakrawar",skill:"Salesforce",reporting_manager:2,contact_number:98764372}],u=function(){var e=Object(n.useState)(""),t=Object(i.a)(e,2),a=t[0],r=t[1];return Object(l.jsxs)("div",{children:[Object(l.jsx)(m,{search:a,setSearch:r}),Object(l.jsx)("h1",{className:"emph1",children:"All Employess details"}),Object(l.jsx)("div",{className:"card-section",children:j.filter((function(e){return console.log(e),console.log(a),e})).map((function(e){return Object(l.jsx)(o,{id:e.id,firstName:e.firstName,lastName:e.lastName,skill:e.skill,reporting_manager:e.reporting_manager,contact_number:e.contact_number})}))})]})},d=(a(10),function(){return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)(u,{})})}),h=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,12)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,c=t.getLCP,s=t.getTTFB;a(e),n(e),r(e),c(e),s(e)}))};s.a.render(Object(l.jsx)(r.a.StrictMode,{children:Object(l.jsx)(d,{})}),document.getElementById("root")),h()}},[[11,1,2]]]);
//# sourceMappingURL=main.93e1fb3c.chunk.js.map