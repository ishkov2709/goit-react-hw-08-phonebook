"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[892],{2892:function(e,n,a){a.r(n),a.d(n,{default:function(){return b}});var t,r=a(5705),i=a(5206),o=(a(5462),a(9434)),s=a(6434),l=a(6151),u=a(168),c=a(9256).zo.form(t||(t=(0,u.Z)(["\n  width: 300px;\n\n  padding: 20px;\n\n  display: flex;\n  flex-direction: column;\n"]))),d=a(2423),m=a(184),h=function(e){return i.Am.error("".concat(e," already exists in the phonebook"),{position:"top-right",autoClose:1e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"})},b=function(){var e=(0,o.I0)(),n=(0,o.v9)((function(e){return e.contacts.items})),a=(0,r.TA)({initialValues:{name:"",number:""},onSubmit:function(t){if(t.name&&t.number){if(n.find((function(e){return e.name.toLowerCase()===t.name.toLowerCase()})))return h("Name ".concat(t.name));if(n.find((function(e){return e.number===t.number})))return h("Phone number ".concat(t.number));e((0,d.uK)(t)),i.Am.success("Contact added to phonebook!",{position:"top-right",autoClose:1e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"}),a.resetForm()}}});return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsxs)(c,{onSubmit:a.handleSubmit,children:[(0,m.jsx)(s.Z,{id:"filled-basic",label:"Name",variant:"filled",type:"text",name:"name",onChange:a.handleChange,value:a.values.name,placeholder:"Jack"}),(0,m.jsx)(s.Z,{id:"filled-basic",label:"Number",variant:"filled",type:"tel",name:"number",onChange:a.handleChange,value:a.values.number,placeholder:"0990003355"}),(0,m.jsx)(l.Z,{type:"submit",name:"submit",sx:{fontSize:"22px"},children:"Add contact"})]}),(0,m.jsx)("div",{children:(0,m.jsx)(i.Ix,{})})]})}}}]);
//# sourceMappingURL=892.e147f20d.chunk.js.map