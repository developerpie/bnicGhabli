import { Head } from "@inertiajs/react";
const GlobalLayout = ({ props, children, title, className }) => {
    return <>
        <Head>
            <title>{title}</title>
        </Head>
        <div className={className}>
            {children}
        </div>
    </>;
};

export default GlobalLayout;
