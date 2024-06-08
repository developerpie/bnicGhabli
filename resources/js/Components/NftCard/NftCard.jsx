import Grid from "@/Components/Grid/Grid";
import ProfileNftBlock from "@/Layout/PageLayout/ProfileNftBlock/ProfileNftBlock";
import { usePage } from "@inertiajs/react";
import { Button, Chip, Typography } from "@material-tailwind/react";
import config from "@/config";
import Flex from "@/Components/Flex/Flex";
import { useState } from "react";
import NftDialog from "@/Components/NftDialog/NftDialog.jsx";
const NftCard = () => {
  const [open, setOpen] = useState(false);
  const handleOpenModal = () => {
    setOpen(!open);
  };
  const { user } = usePage().props.auth;
  return (
    <>
      {user && (
        <>
          {!user.token ? (
            <Grid className="gap-3 bg-b-2 text-w-1 rounded-xl p-6 ">
              <Flex className={"justify-between items-center"}>
                <Typography variant="h6">Enable your account</Typography>
                {user.inviter_id && <Chip size="sm" color="purple" value="Pre-Paid" />}
              </Flex>
              <Typography variant="paragraph">Your account has not been activated yet and is in demo form. To enter the main network, you must register your information on the blockchain network.</Typography>
              <Button onClick={handleOpenModal} color="white" className="mt-4">
                Activate
              </Button>
            </Grid>
          ) : (
            <Grid className="gap-4 bg-w-1 rounded-xl p-4  ">
              <Flex className={"justify-between items-center"}>
                <Typography className="font-semibold">Invidual Token</Typography>
                <Typography className="font-semibold block -mb-1">
                  <i className=" fi fi-rr-interrogation"></i>
                </Typography>
              </Flex>
              <ProfileNftBlock size="small" user={user} />

              <a href={`${config.blockchainExplorer}${user.token}`} target="_blank" rel="noopener noreferrer">
                <Button size="sm" type="button" className="w-[140px] mx-auto flex capitalize items-center justify-center gap-1">
                  {" "}
                  <i className="-mb-1 fi fi-rr-expand"></i> Explore
                </Button>
              </a>
            </Grid>
          )}

          <NftDialog open={open} handleOpenModal={handleOpenModal} />
        </>
      )}
    </>
  );
};
export default NftCard;
