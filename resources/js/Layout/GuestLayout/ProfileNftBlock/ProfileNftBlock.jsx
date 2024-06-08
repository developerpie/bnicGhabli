import React, { useRef } from "react";
import { Typography } from "@material-tailwind/react";
import { QRCodeSVG } from "qrcode.react";
import config from "@/config";

const ProfileNftBlock = ({ user, profileNftRef, className, size }) => {
  const containerClass = size === "small" ? "w-[200px] h-[200px]" : "w-[300px] h-[320px]";
  const qrSize = size === "small" ? 200 : 250;
  const typographyClass = size === "small" ? "text-xs" : "text-base";
  const heightClass = size === "small" ? "h-[50px]" : "h-[60px]";
  const border = size === "small" ? "shadow rounded-xl" : "border";
  return (
    <>
      {user && (
        <div ref={profileNftRef} className={`${className} ${containerClass}  ${border}   border-b-3 grid m-auto place-items-center justify-items-center`}>
          <Typography className={`${typographyClass} text-center uppercase`}>{user.code}</Typography>

          <div className="grid grid-cols-7 p-0 gap-0 h-max items-center justify-center">
            <div className={`col-span-1 bg-b-1  w-full z-10 ${heightClass}`}></div>
            <div className="col-span-5">
              <QRCodeSVG value={`https://bnic.io/dashboard/public/${user.id}`} size={qrSize} className="w-full h-max " />
            </div>
            <div className={`col-span-1 bg-b-1  w-full z-10 ${heightClass}`}></div>
          </div>

          <Typography className={`${typographyClass} text-center`}>{user.full_name}</Typography>
        </div>
      )}
    </>
  );
};

export default ProfileNftBlock;
