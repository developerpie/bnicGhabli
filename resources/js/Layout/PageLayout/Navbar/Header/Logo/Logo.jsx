// resources\js\Pages\Dashboard\Logo\Logo.jsx

const Logo = ({ src }) => (
    <img
        loading="lazy"
        decoding="async"
        className="inline-block align-toptransition opacity-100 w-max h-[40px]"
        src={src}
    />
);
export default Logo;
