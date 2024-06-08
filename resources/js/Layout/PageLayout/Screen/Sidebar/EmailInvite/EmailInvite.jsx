import Flex from "@/Components/Flex/Flex"
import Grid from "@/Components/Grid/Grid"
import { Button, Dialog, DialogBody, DialogFooter, DialogHeader, Input, Typography } from "@material-tailwind/react"
import { useState } from "react";
import { usePage } from "@inertiajs/react";
import { useFormik } from "formik";
import * as yup from 'yup';

const validationSchema = yup.object().shape({
	reciver_first_name: yup.string().min(3, 'First name should be at least 3 characters').max(80, 'First name should not exceed 80 characters').required('First name is required'),
	reciver_last_name: yup.string().min(3, 'Last name should be at least 3 characters').max(80, 'Last name should not exceed 80 characters').required('Last name is required'),
	reciver_email: yup.string().email('Invalid email format').required('Email is required'),
});

const EmailInvite = () => {
	const [open, setOpen] = useState(false);
	const { user } = usePage().props.auth;

	const formik = useFormik({
		initialValues: {
			sender_mail: user.email,
			reciver_first_name: '',
			reciver_last_name: '',
			reciver_email: '',
		},
		validationSchema,
		onSubmit: sendEmail,
		validateOnChange: true,
	});
	const sender_mail_hash = btoa(formik.values.sender_mail);
	const invite_link = `${window.location.origin}/user/login?ref=${sender_mail_hash}`;
	function sendEmail() {
		const body = `
		<body style="margin: 0; padding: 0; background-color: #f4f4f4;">
		  <div style="max-width: 600px; margin: 40px auto; background: white; padding: 20px; box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1); border-radius: 8px;">
			<div style="text-align: center; background-color: #007bff; color: white; padding: 15px; border-radius: 8px 8px 0 0;">
			  <h1>Bnic.io Invitation request</h1>
			</div>
			<div style="padding: 20px; line-height: 1.6;">
			  <p>Dear ${formik.values.reciver_first_name} ${formik.values.reciver_last_name},</p>
			  <p>We are exceptionally excited to extend to you an exclusive invitation to become a part of bnic, a pioneering decentralized identity platform built on the Polygon blockchain. This innovative platform offers the unique opportunity to convert your personal identity into a secure and easily manageable NFT. With this invitation, you'll be able to take full advantage of the platform's features without any financial obligation on your part. The sender of this invitation has generously pre-paid any associated fees, making your entry into this revolutionary ecosystem entirely complimentary.</p>
				<p> Click the link below to register your account and begin your journey with bnic.</p>
				<a href="${invite_link}" style="display: block; margin: 20px 0; padding: 15px; width:max-content; margin:auto; background-color: #007bff; color: white; text-decoration: none; border-radius: 8px;">Register Now</a>
				</div>
			  </div>
			<div style="text-align: center; background-color: #333; color: white; padding: 15px; border-radius: 0 0 8px 8px;">
			  <p>Best regards,</p>
			  <p>Bnic.io - Decentral Identity</p>
			</div>
		  </div>
		</body>
		`;

		axios.post(route('send-mail'), { ...formik.values, body })
			.then(response => window.location.reload())
			.catch(error => console.log(error));
	};

	return (
		<>
			<Grid className="gap-3 bg-w-1 rounded-xl p-6 ">
				<Flex className="items-center justify-between">
					<Typography variant="h6">Invitation</Typography>
					<div className="rounded-full px-2 bg-n-4 text-xs text-white">Privilaged</div>
				</Flex>
				<Flex className="items-center justify-between">
					<span className="text-sm">Send email as invitation</span>
					<Button size="sm" onClick={() => setOpen(!open)}>Send</Button>
				</Flex>
			</Grid>
			<Dialog size="md" open={open} handler={() => setOpen(!open)}>
				<DialogHeader>Invitation Information</DialogHeader>
				<DialogBody divider>
					<Grid className={"gap-3"}>
						<Grid className={"grid grid-cols-1 xl:grid-cols-2 gap-3"}>
							<InputField name="reciver_first_name" type="text" title="Receiver First Name" formik={formik} />
							<InputField name="reciver_last_name" type="text" title="Receiver Last Name" formik={formik} />
						</Grid>
						<InputField name="reciver_email" type="email" title="Receiver Email" formik={formik} />
					</Grid>
				</DialogBody>
				<DialogFooter>
					<Button variant="text" color="gray" onClick={() => setOpen(!open)} className="mr-1">Cancel</Button>
					<Button
						onClick={formik.handleSubmit}
						variant="gradient"
						color="blue"
						disabled={!formik.isValid || !Object.values(formik.touched).some(t => t)}
						className={!formik.isValid || !Object.values(formik.touched).some(t => t) ? "opacity-50" : ""}
					>
						Send
					</Button>
				</DialogFooter>
			</Dialog>
		</>
	)
}

const InputField = ({ name, type, title, formik }) => {
	return (
		<Grid>
			<Input
				type={type}
				onChange={formik.handleChange}
				onBlur={formik.handleBlur}
				value={formik.values[name]}
				name={name}
				label={title}
			/>
			{formik.touched[name] && formik.errors[name] && (<Typography variant="small" color="red" className="mt-2 flex items-center gap-1 font-normal">{formik.errors[name]}</Typography>)}
		</Grid>
	)
}

export default EmailInvite