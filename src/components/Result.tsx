import { Button } from "./shared";
import Image from "../assets/Group 12.png"
import CloudBgImg from "../assets/Group 33.png"
import { useState } from "react";

export default function Result() {
    const [data]=useState([
        {id:0,title:"Qualified Teachers",count:"45"},
        {id:0,title:"Years Of Experience",count:"20"},
        {id:0,title:"Students Enrolled",count:"565"},
        {id:0,title:"Total Groups",count:"15"},
    ])
  return (
    <div className=" relative w-full bg-[--purple]" id="Subscription-Box">
        <img className="absolute top-[-3rem] left-0 w-full h-24 z-[1] bg-cover" src={CloudBgImg}/>
        <div className="flex flex-col container m-auto pt-32 pb-16">
            <div className="flex flex-row w-full">
                <div className="flex w-2/4">
                    <div className="flex flex-col">
                        <div className=" text-xl font-medium">More About Us</div>
                        <div className=" text-4xl font-bold pt-1 ">Special Care For Your Children</div>
                        <p className="py-7">Formulate innovative web-readiness and installed base ideas. Distinctively integrate high-payoff paradigms without next generation systems disseminate holistic e-services through customer directed expertise.</p>
                        <Button className=" w-32 bg-white text-purple-700 rounded-sm">Learn more</Button>
                    </div>
                </div>
                <div className="flex w-2/4 justify-center items-center">
                    <img className="w-[32rem]" src={Image}/>
                </div>
            </div>
            <ul className="p-24 flex justify-around">
                {data?.map((item,indx)=>
                    <li  key={indx} className=" w-32 flex flex-col justify-center items-center font-bold">
                        <div>{item.count}</div>
                        <div className=" text-center">{item.title}</div>
                    </li>
                )}
            </ul>
        </div>
        <img className="absolute bottom-[-3rem] left-0 w-full h-24 z-[1]  bg-cover" src={CloudBgImg}/>
    </div>
  )
}
