// resources/js/Pages/User/UserCreate/Step4/Step4.jsx
import React from "react";
import cn from "classnames";
const Step5 = ({ formik, className }) => {


	return (
		<>
			<div className={cn(className, "flex flex-col gap-4")}>
				<p>By using BNIC's services, you agree to comply with all applicable laws and regulations related to digital identities and blockchain technology.
					BNIC reserves the right to update or modify these Terms and Conditions at any time without prior notice.
					User data will be stored on a decentralized network, and BNIC cannot guarantee complete security or data retrieval in the event of a network failure.
					BNIC is not liable for unauthorized access to your digital identity or any losses incurred as a result.
					BNIC does not guarantee uninterrupted or error-free service and may perform maintenance or changes to the platform at any time.
					Users are responsible for safeguarding their private keys and access credentials; lost credentials cannot be recovered by BNIC.
					Disputes arising from the use of BNIC's services will be governed by the laws of the jurisdiction in which BNIC is incorporated.
					By using BNIC, you consent to the data practices outlined in our Privacy Policy.</p>
				<div>Submiting form means you accepted term and conditions</div>
			</div>
		</>)
}

export default Step5
