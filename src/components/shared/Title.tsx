import {  ReactNode } from "react";

export default function Title({icon,title,subTitle,boxClassName,titleClassName,subTitleClassName}:{icon?:ReactNode,title?:string,subTitle?:string,boxClassName?:string,titleClassName?:string,subTitleClassName?:string}) {
  return (
    <div className={`flex flex-col items-center justify-center ${boxClassName}`}>
      <div>{icon}</div>
      <div className={`text-base font-bold text-center ${titleClassName || "text-[var(--purple)]"}`}>{title}</div>
      <div className={`text-2xl font-bold text-center ${subTitleClassName || "text-[var(--purple)]"}`}>{subTitle}</div>
    </div>
  )
}
