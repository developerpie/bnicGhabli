import{j as o,r}from"./app-8c4d1a63.js";import{C as l}from"./country-fcc8f2a9.js";import"./index-5bb32ae1.js";const u=({formik:t,placeholder:n,variant:a="standard"})=>o.jsx(r.Select,{variant:a,label:"Country",placeholder:n,name:"country_code",onChange:e=>{t.setFieldValue("country_code",e)},onBlur:t.handleBlur,children:l.getAllCountries().map(e=>o.jsx(r.Option,{value:e.isoCode,children:e.name},e.isoCode.toString()))});export{u as default};
