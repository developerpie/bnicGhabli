import Flex from "@/Components/Flex/Flex";
import Grid from "@/Components/Grid/Grid";
import { usePage } from "@inertiajs/react";
import { Typography } from "@material-tailwind/react";

const Profile = () => {
  const { user } = usePage().props.auth;
  return (
    <>
      {user && (
        <div className="flex gap-3">
          <img className="w-12 h-12 rounded-lg bg-n-1/10" src="https://api.dicebear.com/7.x/identicon/svg?seed=Angel" alt="avatar" />
          <Grid>
            <Flex className="items-center justify-between gap-3">
              <Typography variant="h6">{user.full_name}</Typography>
              <div className="rounded-full bg-n-1 text-white text-[12px] h-max font-medium px-1.5">Invidual</div>
            </Flex>
            <Typography variant="paragraph">{user.email}</Typography>
          </Grid>
        </div>
      )}
    </>
  );
};
export default Profile;
