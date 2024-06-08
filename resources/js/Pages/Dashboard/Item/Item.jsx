// resources\js\Pages\Dashboard\Item\Item.jsx
import { Card, CardHeader, Typography } from "@material-tailwind/react";
const Item = ({ className, title, value, icon }) => {
    return (
        <>
            <Card
                className={`p-5 ${className} shadow-xl shadow-blue-gray-100/20`}
            >
                <CardHeader
                    color="white"
                    floated={false}
                    shadow={false}
                    className="mx-0  rounded-none flex items-start gap-4 py-2"
                >
                    <div className="h-14 shrink-0 w-14 bg-n-1/20 text-2xl text-n-1 rounded-lg flex  items-center justify-center">
                        <i className={`w-6 h-6 fi fi-${icon}`}></i>
                    </div>
                    <div className="flex w-full flex-col gap-0.5">
                        <div className="flex items-center justify-between">
                            <Typography
                                variant="h6"
                                className="capitalize"
                                color="blue-gray"
                            >
                                {value}
                            </Typography>
                        </div>
                        <Typography color="blue-gray">{title}</Typography>
                    </div>
                </CardHeader>
            </Card>
        </>
    );
};

export default Item;
