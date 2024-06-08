import React, { useEffect, useState } from "react";
import { Formik, useFormik } from "formik";
import { useAccount } from "wagmi";
import { router } from "@inertiajs/react";
import GlobalLayout from "@/Layout/GlobalLayout/GlobalLayout";
import Sidebar from "./Sidebar/Sidebar";
import Step1 from "./Step1/Step1";
import Step2 from "./Step2/Step2";
import Step3 from "./Step3/Step3";
import Step4 from "./Step4/Step4";
import Step5 from "./Step5/Step5";
import { Typography } from "@material-tailwind/react";
import FormButton from "@/Pages/User/UserCreate/FormButton/FormButton";
import Grid from "@/Components/Grid/Grid";
import Flex from "@/Components/Flex/Flex";
import * as Yup from "yup";

const UserCreate = () => {
    const [step, setStep] = useState(1);
    const account = useAccount();
    const checkAccountExists = async () => {
        if (account.address) {
            const response = await axios.post(route("user.signin"), {
                wallet: account.address,
                _token: document.querySelector('meta[name="csrf-token"]')
            });
            console.log(response);
            if (response.data.check == true) {
                router.get(route("dashboard.index"));
            }
        }
    };
    useEffect(() => {
        checkAccountExists();
    }, [account]);

    const [steps, setSteps] = useState([
        {
            key: 0,
            title: "Unlock Your Wallet",
            describe: "Sign your Polygon wallet.",
            status: "done",
        },
        {
            key: 1,
            title: "Who Are You?",
            describe: "Authenticate your identity.",
            status: "active",
        },
        {
            key: 2,
            title: "Flaunt Your Knowledge",
            describe: "Share your academics.",
            status: "wait",
        },
        {
            key: 3,
            title: "Your Professional Saga",
            describe: "Detail your occupation.",
            status: "wait",
        },
        {
            key: 4,
            title: "About You",
            describe: "Tell us about yourself.",
            status: "wait",
        },
        {
            key: 5,
            title: "The Sacred Scroll",
            describe: "Accept our terms.",
            status: "wait",
        },
    ]);

    useEffect(() => {
        setStep((prev) => prev);
        steps.forEach((s, index) => {
            if (index === step) {
                s.status = "active";
            } else if (index < step) {
                s.status = "done";
            } else {
                s.status = "wait";
            }
        });
    }, [step, steps]);
    const useFormikSetup = () => {
        const formik = useFormik({
            initialValues: {
                first_name: "",
                email: "",
                wallet: account.address,
                last_name: "",
                country_code: "",
                state_code: "",
                birthday_year: "2023",
                birthday_month: "1",
                birthday_day: "1",
                gender: "",
                education: [
                    { country: "", university: "", field: "", degree: "" },
                ],
                profession: [""],
                skill: [""],
                language: ["-"],
                cv: "",
                inviter_id: localStorage.getItem("inviter_id"),
            },
            validationSchema: Yup.object({
                first_name: Yup.string()
                    .max(80, "Field should have maximum 80 characters")
                    .min(3, "Field should have minimum 3 characters")
                    .required("Required"),
                last_name: Yup.string()
                    .max(80, "Field should have maximum 80 characters")
                    .min(3, "Field should have minimum 3 characters")
                    .required("Required"),
                email: Yup.string()
                    .email("Invalid email address")
                    .required("Required"),
                country_code: Yup.string().required("Required"),
                state_code: Yup.string().required("Required"),
                birthday_year: Yup.string().required("Required"),
                birthday_month: Yup.string().required("Required"),
                birthday_day: Yup.string().required("Required"),
                gender: Yup.string().required("Required"),
                education: Yup.array()
                    .of(
                        Yup.object().shape({
                            country: Yup.string()
                                .min(1, "Minimum 3 characters")
                                .required("Required"),
                            university: Yup.string()
                                .min(1, "Minimum 3 characters")
                                .required("Required"),
                            field: Yup.string()
                                .min(2, "Minimum 2 characters")
                                .required("Required"),
                            degree: Yup.string()
                                .min(2, "Minimum 2 characters")
                                .required("Required"),
                        })
                    )
                    .min(1, "At least 1 item should exist"),
                profession: Yup.array()
                    .of(
                        Yup.string()
                            .min(3, "Minimum 3 characters required")
                            .required("Required")
                    )
                    .min(1, "At least 1 item should exist"),
                skill: Yup.array()
                    .of(
                        Yup.string()
                            .min(3, "Minimum 3 characters required")
                            .required("Required")
                    )
                    .min(1, "At least 1 item should exist"),
                language: Yup.array()
                    .of(
                        Yup.string()
                            .notOneOf(["-"])
                            .min(1, "Minimum 3 characters required")
                            .required("Required")
                    )
                    .min(1, "At least 1 item should exist"),
                cv: Yup.string()
                    .min(32, "Minimum 32 characters required")
                    .required("Required"),
            }),
            onSubmit: (values) => {
                axios.post(route("user.store"), values).then((res) => {
                    console.log(res.status == 201);
                    if (res) {
                        router.get(route("dashboard.index"));
                    }
                });
            },
        });

        return formik;
    };

    const formik = useFormikSetup();

    const stepFields = {
        step0: [],
        step1: [
            "first_name",
            "last_name",
            "email",
            "country_code",
            "state_code",
            "birthday_year",
            "birthday_month",
            "birthday_day",
            "gender",
        ],
        step2: ["education"],
        step3: ["profession", "skill", "language"],
        step4: ["cv"],
    };

    const isStepValid = (step) =>
        stepFields[step].every(
            (field) => formik.values[field] && !formik.errors[field]
        );

    const [walletAddress, setWalletAddress] = useState("");

    useEffect(() => {
        if (!account.address) {
            router.get(route("user.login"));
        } else {
            setWalletAddress(account.address);
        }
    }, [account]);

    return (
        <GlobalLayout title={"Sign up"}>
            <main>
                <div className="flex gap-4">
                    <Sidebar steps={steps} />
                    <section className="basis-3/4 mobile:basis-full mobile:px-8 h-screen mobile:h-max items-center p-2 flex justify-center">
                        <Formik
                            isStepValid={isStepValid}
                            formik={formik}
                            step={step}
                            setStep={setStep}
                        >
                            <form
                                className="container max-w-2xl grid space-y-6"
                                onSubmit={formik.handleSubmit}
                            >
                                <Grid>
                                    <Typography
                                        variant="h5"
                                        className="uppercase text-black/40 text-center"
                                    >
                                        G et started
                                    </Typography>
                                    <Typography
                                        variant="h2"
                                        className="text-center mx-auto font-bold"
                                    >
                                        Empower Your Digital Identity
                                    </Typography>
                                </Grid>
                                <Step1
                                    formik={formik}
                                    walletAddress={walletAddress}
                                    className={step == 1 ? "" : "hidden"}
                                />
                                <Step2
                                    formik={formik}
                                    className={step == 2 ? "" : "hidden"}
                                />
                                <Step3
                                    formik={formik}
                                    className={step == 3 ? "" : "hidden"}
                                />
                                <Step4
                                    formik={formik}
                                    className={step == 4 ? "" : "hidden"}
                                />
                                <Step5
                                    formik={formik}
                                    className={step == 5 ? "" : "hidden"}
                                />
                                <Flex className="gap-4 mobile:pb-10">
                                    {step > 1 && (
                                        <FormButton
                                            size={"lg"}
                                            className={"w-full"}
                                            onClick={() => setStep(step - 1)}
                                        >
                                            Previous
                                        </FormButton>
                                    )}
                                    {step < 5 && (
                                        <FormButton
                                            disabled={
                                                !isStepValid(`step${step}`)
                                            }
                                            size={"lg"}
                                            className={"w-full"}
                                            onClick={() => setStep(step + 1)}
                                        >
                                            Next
                                        </FormButton>
                                    )}
                                    {step === 5 && (
                                        <FormButton
                                            size={"lg"}
                                            className={"w-full"}
                                            type="submit"
                                        >
                                            Submit
                                        </FormButton>
                                    )}
                            
                                </Flex>
                            </form>
                        </Formik>
                    </section>
                </div>
            </main>
        </GlobalLayout>
    );
};

export default UserCreate;
