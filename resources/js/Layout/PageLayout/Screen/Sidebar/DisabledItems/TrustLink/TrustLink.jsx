// resources\js\Layout\PageLayout\Screen\Sidebar\DisabledItems\TrustLink\TrustLink.jsx
import { Typography } from "@material-tailwind/react";
import React, { useState } from "react";
const TrustLink = ({ props }) => {
	return <>

		<div className="bg-white  rounded-xl p-4 relative">
			<header>
				<Typography variant="h6" className="pb-4">TrustLink</Typography>
			</header>
			<div className="flex flex-col">
				<Typography>This user has no Trust network</Typography>
			</div>
		</div>
	</>
}

export default TrustLink