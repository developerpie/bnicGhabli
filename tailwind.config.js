import defaultTheme from "tailwindcss/defaultTheme";
import forms from "@tailwindcss/forms";
const withMT = require("@material-tailwind/react/utils/withMT");
/** @type {import('tailwindcss').Config} */
export default withMT({
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        "./resources/js/**/*.jsx",
        "./node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
        "./node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ["Figtree", ...defaultTheme.fontFamily.sans],
            },
         
            colors: {
                "n-1": "#0084ff",
                "n-2": "#52ba69",
                "n-3": "#e89634",
                "n-4": "#8e55ea",
                "n-5": "#8c6584",
                "n-6": "#3fa7dd",
                "n-7": "#d84c10",
                "b-1": "#141718",
                "b-2": "#232627",
                "b-3": "#404446",
                "b-4": "#6c7275",
                "w-1": "#fefefe",
                "w-2": "#f8f8f8",
                "w-3": "#d9d9d9",
                "w-4": "#b3b7af",
            },
            screens: {
                mobile: { max: "767px" },
                tablet: { max: "1023px" },
                smallDesktop: { max: "1279px" },
                mediumDesktop: { max: "1919px" },
                largeDesktop: { min: "1920px" },

            },
        },
    },
    plugins: [
        require('@tailwindcss/container-queries'),
        require("daisyui"),
    ],
});
