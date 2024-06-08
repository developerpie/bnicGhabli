import { useRef } from "react";
import { usePage } from "@inertiajs/react";
import { Button, Dialog, DialogBody, Typography } from "@material-tailwind/react";
import Grid from "@/Components/Grid/Grid";
import ProfileNftBlock from "@/Layout/PageLayout/ProfileNftBlock/ProfileNftBlock";
import { mintNftByWallet, mintNftByPrivateKey } from "@/Utils/MintNFT";
import { useMediaQuery } from 'react-responsive'
const NftDialog = ({ open, handleOpenModal }) => {
	const profileNftRef = useRef(null);
	const { user } = usePage().props.auth;

	const handleMintNftByWalletClick = async () => {
		const success = await mintNftByWallet(profileNftRef, user);
		if (success) {
			window.location.reload();
		}
	};

	const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })


	const handleMintNftByPrivateKeyClick = async () => {
		const success = await mintNftByPrivateKey(profileNftRef, user);
		if (success) {
			window.location.reload();
		}
	};

	return (
		<Dialog size={isTabletOrMobile ? "md" : "xs"} open={open} handler={handleOpenModal}>
			<DialogBody>
				<Grid className="gap-4">
					<Typography variant="h4" className="mx-auto text-center">
						Sign your account on blockchain
					</Typography>
					<ProfileNftBlock profileNftRef={profileNftRef} user={user} />
					<Typography variant="paragraph" className="text-center mobile:text-sm max-w-sm mx-auto">
						To activate your account, you need to upload your profile on Blockpin. After doing this, the contract will receive its profile in the form of an nft token, which will be visible in your wallet.
					</Typography>
					<Grid className="grid-cols-2 gap-3 max-w-sm mx-auto">
						<Button variant="outlined" onClick={handleOpenModal} color="gray">
							Decline
						</Button>
						{!user.inviter_id ? (
							<Button color="blue" onClick={handleMintNftByWalletClick}>
								Generate
							</Button>
						) : (
							<>
								<Button color="green" onClick={handleMintNftByPrivateKeyClick}>
									Generate
								</Button>
								<div className="col-span-2 grid">
									<p className="text-center mobile:text-sm w-full">  Inviter allready paid your transation fee </p>
								</div>
							</>
						)}
					</Grid>
				</Grid>
			</DialogBody>
		</Dialog>
	);
};

export default NftDialog;