import{j as e,r as a}from"./app-8c4d1a63.js";const c=({placeholder:t,formik:r,name:s,label:l,variant:n="standard",min:d,max:u,type:h})=>e.jsxs("div",{children:[e.jsx(a.Input,{min:d,max:u,type:h,placeholder:t,label:l,variant:n,name:s,value:r.values[s],onChange:r.handleChange,onBlur:r.handleBlur}),e.jsx(a.Typography,{variant:"small",color:"red",children:r.touched[s]&&r.errors[s]?e.jsx(e.Fragment,{children:r.errors[s]}):" "})]});export{c as default};
