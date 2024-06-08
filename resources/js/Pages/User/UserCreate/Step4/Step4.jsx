// resources/js/Pages/User/UserCreate/Step4/Step4.jsx
import { Textarea } from "@material-tailwind/react";
import React from "react";
import cn from "classnames";
const Step4 = ({ formik, className }) => {

	const handleTextareaChange = (e) => {
		formik.setFieldValue("cv", e.target.value)
		formik.setFieldTouched("cv")
	}
	return (
		<>
			<div className={cn(className, "flex flex-col gap-4")}>
			<span>Write a brief three-line introduction about yourself and your business</span>
				<Textarea name="cv" onChange={(e) => handleTextareaChange(e)} label="About me" />
				{
					formik.errors.cv &&
					formik.touched.cv &&
					<div className="text-red-500 mt-1">{formik.errors.cv}</div>
				}
				{formik.touched.cv}
			</div>
		</>)
}

export default Step4
