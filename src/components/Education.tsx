import { Title } from "./shared";
import SaturnImage from "../assets/Frame.png"
import PenImage from "../assets/Group 35.png"
import CleverImage from "../assets/photo_2024-04-26_18-23-06-removebg-preview 1.png"
import DirectionIcon from "../assets/icon/left-arrow.png"
import { educationList } from "../constans";
export default function Education() {
  return (
    <div className="bg-red-100 pt-5 pb-20" id="Slime-FAQ">
        <div className="container m-auto flex justify-between items-center">
            <div className=" h-64 flex justify-center items-end">
                <img src={SaturnImage} className=" w-32 "/>
            </div>
            <Title title="Educational Programs" subTitle="Step By Step Systematic Education" subTitleClassName="text-gray-900"/>
            <div className=" h-64 flex justify-center items-start">
                <img src={PenImage} className=" w-36"/>
            </div>
        </div>
        <ul className="container grid grid-cols-2 gap-8 m-auto">
            {
                educationList?.map((edu,eduIndx)=>
                <li key={eduIndx} className="flex flex-col rounded-3xl bg-white p-4 px-6">
                    <img src={CleverImage} className="w-10 sm:w-12"/>
                    <div className="w-full flex flex-col sm:flex-row gap-6">
                        <div className="w-full sm:w-2/4 flex justify-center items-center"><img className="w-10/12" src={edu?.imageUrl}/></div>
                        <div className=" w-full sm:w-2/4 flex flex-col justify-center text-purple-700">
                            <div className=" font-bold text-2xl">{edu?.title}</div>
                            <div className="text-gray-950 pt-1 pb-3 sm:pt-8 sm:pb-5">{edu?.main}</div>
                            <div className="flex h-10 gap-2 items-center text-gray-950 cursor-pointer">Read more <img src={DirectionIcon} className="w-3 rotate-180"/></div>
                        </div>
                    </div>
                </li>
                )
            }
        </ul>
    </div>
  )
}
