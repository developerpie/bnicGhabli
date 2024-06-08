import PageLayout from "@/Layout/PageLayout/PageLayout";
import Grid from "@/Components/Grid/Grid";
import Item from "./Item/Item";
import Flex from "@/Components/Flex/Flex";
import { Typography } from "@material-tailwind/react";
import { Country, State } from "country-state-city";
import NftCard from '@/Components/NftCard/NftCard.jsx';
import { usePage } from "@inertiajs/react";
import { getMonthName } from "@/Utils/General"

const Dashboard = ({ user: profileUser }) => {
    const { user: loggedInUser } = usePage().props.auth;
    const user = profileUser || loggedInUser;

    const createItemGrid = (title, items, cols = 3) => (
        <Flex className="flex-col gap-2 w-full">
            <Typography variant="h6">{title}</Typography>
            <Grid className={`grid-cols-${cols} @2xl/main:grid-cols-3  @lg/main:grid-cols-2  mobile:grid-cols-1 gap-3`}>
                {items.map((item, index) => (
                    <Item key={index} {...item} />
                ))}
            </Grid>
        </Flex>
    );

    return (
        <PageLayout title="Dashboard" showSidebar>
            {!user.token &&
                <Grid className="hidden mobile:block pb-8">
                    <NftCard />
                </Grid>
            }
            <Grid className="w-full gap-10">
                {createItemGrid("Personal Information", [
                    { title: "Full Name", value: user.full_name, icon: "br-user" },
                    { title: "Gender", value: user.gender, icon: "bs-venus-mars" },
                    { title: "Birthday", value: `${getMonthName(user.birthday_month)} ${user.birthday_day.toString().padStart(2, '0')}, ${user.birthday_year}`, icon: "br-gift" },
                ])}
                {createItemGrid("Network Details", [
                    { title: "Code", value: user.code, icon: "br-barcode-read" },
                    { title: "Email", value: user.email, icon: "br-at" },
                ], 3)}
                {createItemGrid("Location", [
                    { title: "Country", value: Country.getCountryByCode(user.country_code).name, icon: "br-flag" },
                    { title: "State", value: user.state_code === "-" ? Country.getCountryByCode(user.country_code).name : State.getStateByCodeAndCountry(user.state_code, user.country_code).name, icon: "br-building" },
                ])}
                {createItemGrid("Education", [
                    { title: "Country", value: user.education ? JSON.parse(user.education).map((edu) => `${Country.getCountryByCode(edu.country).name}`).join(", ") : "", icon: "br-graduation-cap" },
                    { title: "University", value: user.education ? JSON.parse(user.education).map((edu) => `${edu.university}`).join(", ") : "", icon: "br-graduation-cap" },
                    { title: "Topic", value: user.education ? JSON.parse(user.education).map((edu) => `${edu.field} ${edu.degree}`).join(", ") : "", icon: "br-graduation-cap" },
                ])}
                {createItemGrid("Profession and Skills", [
                    { title: "Profession", value: user.profession ? JSON.parse(user.profession).join(", ") : "", icon: "br-briefcase" },
                    { title: "Skills", value: user.skill ? JSON.parse(user.skill).join(", ") : "", icon: "br-magic-wand" },
                    { title: "Languages", value: user.language ? JSON.parse(user.language).join(", ") : "", icon: "br-language" },
                ], 3)}
                {createItemGrid("Other Details", [
                    { title: "CV Summary", value: user.cv, icon: "br-book-open-reader" },
                ], 1)}
            </Grid>
        </PageLayout>
    );
};

export default Dashboard;