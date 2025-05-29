import React from "react";
import contentLp01 from "../../../../../content/contentLp01";
import MotionDivDownToUp from "../../../../animation/MotionDivDownToUp";

function LogoAboutLpv() {
  return (
    <MotionDivDownToUp className=" w-[100%]  desktop1:w-[415px] desktop2:w-[485px] flex justify-start">
      <img
        src={contentLp01.about.logo.logoImg}
        alt={contentLp01.about.logo.alt}
        className="w-[70%] tablet1:w-[55.5%] desktop1:w-[70%] bg-bgSectionLight rounded-xl p-[10px]"
      />
    </MotionDivDownToUp>
  );
}

export default LogoAboutLpv;
