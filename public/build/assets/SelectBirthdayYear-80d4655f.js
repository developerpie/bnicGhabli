import{b as n,j as a,r}from"./app-8c4d1a63.js";const h=({props:i,formik:t,className:c})=>{const[s,o]=n.useState(Array.from({length:124},(e,l)=>2023-l));return a.jsx(a.Fragment,{children:a.jsx(r.Select,{variant:"static",value:t.values.birthday_year,label:"Year",onChange:e=>{t.setFieldValue("birthday_year",e)},children:s.map(e=>a.jsx(r.Option,{value:e.toString(),children:e},e))})})};export{h as default};
