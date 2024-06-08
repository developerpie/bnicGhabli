import { Link } from "@inertiajs/react"
import { Button, Typography } from "@material-tailwind/react"

const Publicity = ({ user }) => {
	return <>
		<div className="bg-white  rounded-xl p-4 relative">
			<header>
				<Typography variant="h6" className="pb-4">Publicity Setting</Typography>
			</header>
			<div className="flex flex-col">
				<div className="border-b w-full items-center justify-between flex py-2">
					<label>
						Public Cards
					</label>
					<div className=" bg-n-2/50 rounded-full flex min-w-[50px] px-2 justify-between items-center">
						<svg width="16" height="16" className="h-3" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z"></path></svg>                                                <span className="text-sm">
							17
						</span>
					</div>
				</div>
				<div className=" w-full items-center justify-between flex py-2">
					<label>
						Private Cards
					</label>
					<div className="bg-n-5 rounded-full text-white flex min-w-[50px] px-2 justify-between items-center">
						<svg width="16" height="16" className="h-3" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M144 144v48H304V144c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192V144C80 64.5 144.5 0 224 0s144 64.5 144 144v48h16c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256c0-35.3 28.7-64 64-64H80z"></path></svg>                                                <span className="text-sm">
							0
						</span>
					</div>
				</div>
			</div>
			<footer className="mt-4 flex items-center justify-end gap-2">
				<Link href={`/dashboard/public/${user.id}`}>
					<Button size="sm" className="w-[56px] text-center px-0 capitalize">view</Button>
				</Link>
				<Button size="sm" type="button" color="blue-gray" className="w-[56px] text-center px-0 capitalize" >Edit</Button>
			</footer>
		</div>
	</>
}

export default Publicity