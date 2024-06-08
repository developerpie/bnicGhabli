// Step1.jsx

import Grid from "@/Components/Grid/Grid";
import FormInput from "./../FormInput/FormInput";
import StateSelect from "../StateSelect/StateSelect";
import { Button, Input, Radio, Typography } from "@material-tailwind/react";
import CountrySelect from "../CountrySelect/CountrySelect";
import SelectBirthdayMonth from "../SelectBirthdayMonth/SelectBirthdayMonth";
import SelectBirthdayDay from "../SelectBirthdayDay/SelectBirthdayDay";
import SelectBirthdayYear from "../SelectBirthdayYear/SelectBirthdayYear";
import { disconnect } from "@wagmi/core";
import cn from "classnames";
const notYouHandler = async () => {
    await disconnect();
};
const Step1 = ({ formik, walletAddress, className }) => {
    return (
        <div className={cn(className, "flex flex-col gap-4")}>
            <Grid className="grid-cols-2 mobile:grid-cols-1 gap-2">
                <FormInput
                    formik={formik}
                    name="first_name"
                    label="Firstname"
                />
                <FormInput formik={formik} name="last_name" label="Lastname" />
            </Grid>
            <Grid className="grid-cols-1 mobile:grid-cols-1 gap-2">
                <FormInput formik={formik} name="email" label="Email" />
            </Grid>

            <Grid className="grid-cols-2 mobile:grid-cols-1 gap-2">
                <CountrySelect formik={formik} />
                <StateSelect
                    formik={formik}
                    selectedCountry={formik.values.country_code}
                />
            </Grid>

            <Grid className={"grid gap-3 w-full "}>
                <Typography className="mb-2 flex w-full items-center opacity-60 text-sm mt-4 gap-2 mobile:mt-8 ">
                    Your Birthday
                </Typography>
                <Grid
                    className={
                        "grid-cols-3 mobile:grid-cols-1 w-full gap-3 mobile:gap-8"
                    }
                >
                    <SelectBirthdayYear
                        value={formik.values.birthday_year}
                        formik={formik}
                    ></SelectBirthdayYear>
                    <SelectBirthdayMonth formik={formik}></SelectBirthdayMonth>
                    <SelectBirthdayDay formik={formik}></SelectBirthdayDay>
                </Grid>
            </Grid>
            <Grid
                className={
                    "grid-cols-5 mobile:grid-cols-1 items-center gap-3 mt-4 mobile:mt-6"
                }
            >
                <Typography className="items-center col-span-2 mobile:col-span-1 text-sm opacity-60 flex gap-2">
                    Select Gender
                </Typography>
                <label className="border-b border-black/30 items-center justify-center">
                    <Radio
                        name="gender"
                        color="blue"
                        label="Male"
                        value={"male"}
                        onChange={(gender) =>
                            formik.setFieldValue("gender", gender.target.value)
                        }
                    />
                </label>
                <label className="border-b border-black/30 items-center justify-center">
                    <Radio
                        name="gender"
                        color="blue"
                        label="Female"
                        value={"female"}
                        onChange={(gender) =>
                            formik.setFieldValue("gender", gender.target.value)
                        }
                    />
                </label>
                <label className="border-b border-black/30 items-center justify-center">
                    <Radio
                        name="gender"
                        color="blue"
                        label="Other"
                        value={"other"}
                        onChange={(gender) =>
                            formik.setFieldValue("gender", gender.target.value)
                        }
                    />
                </label>
            </Grid>
            <Grid>
         
                <div className="relative">
                    <Button
                        variant="text"
                        color="blue"
                        onClick={notYouHandler}
                        className="!absolute !bg-transparent mobile:bottom-[0px] mobile:p-0 mobile:h-max    right-0 top-0 bottom-0 !cursor-pointer z-10"
                    >
                        not you?
                    </Button>
                    <Input
                        variant="static"
                        name="wallet"
                        label="Your wallet address"
                        value={walletAddress}
                        readOnly={true}
                        className="!border-b !text-base mobile:!text-[13px] relative !bg-transparent"
                    ></Input>
                </div>
            </Grid>
            <Grid>
                <Typography className="text-center text-base mobile:mt-8 text-black/80">
                    The terms and conditions will be shown in the last step.
                </Typography>
            </Grid>
        </div>
    );
};

export default Step1;
