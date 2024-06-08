import { Button, Typography } from "@material-tailwind/react"
import config from "@/config"
import { Link, usePage } from "@inertiajs/react"
import Publicity from "./Publicity/Publicity";
import TrustLink from "./TrustLink/TrustLink";
import Contact from "./Contact/Contact";
import Grid from "@/Components/Grid/Grid";
const DisabledItems = ({ props }) => {
	const user = usePage().props.auth.user;
	return <>
		<Grid className="opacity-50 gap-4 grayscale pointer-events-none select-none cursor-not-allowed">
			<Publicity user={user} />
			<TrustLink />
			<Contact />
		</Grid >
	</>
}

export default DisabledItems