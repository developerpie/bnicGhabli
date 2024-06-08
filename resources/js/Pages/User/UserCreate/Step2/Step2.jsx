import React, { useState, useEffect } from "react";
import axios from "axios";
import csv from "csvtojson";
import { Country } from "country-state-city";
import { Input, Button, Select, Option } from "@material-tailwind/react";
import Grid from "@/Components/Grid/Grid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
import Flex from "@/Components/Flex/Flex";
import cn from "classnames";

const Step2 = ({ formik, className }) => {
  const [countries, setCountries] = useState([]);
  const [universities, setUniversities] = useState([]);
  const emptyUniversity = ["-"];

  useEffect(() => {
    setCountries(Country.getAllCountries());
    axios.get("/csv/world-universities.csv").then((response) => {
      csv()
        .fromString(response.data)
        .then((jsonObj) => {
          setUniversities(
            jsonObj.map((item) => ({
              country: item.AD,
              name: item["University of Andorra"],
            }))
          );
        });
    });
  }, []);

  const handleInputChange = (value, index, field) => {
    const newEducation = [...formik.values.education];
    newEducation[index][field] = value;
    formik.setFieldTouched(`education[${index}].${field}`);
    formik.setFieldValue("education", newEducation);
  };

  const addSection = () => {
    if (formik.values.education.length < 3) {
      const newEducation = [...formik.values.education, { country: "", university: "", field: "", degree: "" }];
      formik.setFieldValue("education", newEducation);
    }
  };

  const removeSection = (index) => {
    const newEducation = [...formik.values.education];
    newEducation.splice(index, 1);
    formik.setFieldValue("education", newEducation);
  };




  return (
    <div className={cn(className, "flex flex-col gap-4")}>

      {formik.values.education.map((section, index) => {
        const countryError = formik.errors.education?.[index]?.country;
        const countryTouched = formik.touched.education?.[index]?.country;

        const universityError = formik.errors.education?.[index]?.university;
        const universityTouched = formik.touched.education?.[index]?.university;

        const fieldError = formik.errors.education?.[index]?.field;
        const fieldTouched = formik.touched.education?.[index]?.field;

        const degreeError = formik.errors.education?.[index]?.degree;
        const degreeTouched = formik.touched.education?.[index]?.degree;



        return (
          <Grid key={index} className={"grid-cols-2 mobile:grid-cols-1 gap-y-4 gap-2"}>
            <Select variant='standard' label='Select Country' name='country' onChange={(value) => handleInputChange(value, index, "country")}>
              {countries.map((country, i) => (
                <Option key={i} value={country.isoCode}>
                  {country.name}
                </Option>
              ))}
            </Select>
            {countryTouched && countryError && <div className="text-red-500 mt-1">{countryError}</div>}

            <Select variant='standard' name='university' label='Choose Univercity' onChange={(value) => handleInputChange(value, index, "university")}>
              {universities.filter((uni) => uni.country === section.country).length === 0
                ? emptyUniversity.map((uni, i) => (
                  <Option key={i} value={uni}>
                    {uni}
                  </Option>
                ))
                : universities
                  .filter((uni) => uni.country === section.country)
                  .map((uni, i) => (
                    <Option key={i} value={uni.name}>
                      {uni.name}
                    </Option>
                  ))}
            </Select>

            {universityTouched && universityError && <div className="text-red-500 mt-1">{universityError}</div>}

            <div className="relative">
              <Input variant='standard' label='Education Field' name='field' onChange={(e) => handleInputChange(e.target.value, index, "field")} />
              {fieldTouched && fieldError && <div className="text-red-500 absolute bottom-[-24px] mt-1">{fieldError}</div>}
            </div>

            <div className="relative">
              <Input variant='standard' label='Education Degree' name='degree' onChange={(e) => handleInputChange(e.target.value, index, "degree")} />
              {degreeTouched && degreeError && <div className="text-red-500 absolute bottom-[-24px] mt-1">{degreeError}</div>}
            </div>



            <div></div>
            <Flex className={"gap-1 justify-end"}>
              {index !== 0 ? (
                <Button size='sm' className='p-2 px-2.5' onClick={() => removeSection(index)}>
                  <FontAwesomeIcon icon={faTrash} />
                </Button>
              ) : null}
              {index === formik.values.education.length - 1 && formik.values.education.length < 3 && (
                <Button size='sm' color='teal' className='p-2 px-2.5' onClick={addSection}>
                  <FontAwesomeIcon icon={faPlus} />
                </Button>
              )}
            </Flex>
          </Grid>
        )
      })}
    </div>
  );
};

export default Step2;
