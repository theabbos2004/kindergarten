import { serviceList } from "../constans";
import { Card, Title } from "./shared";
export default function Service() {
  return (
    <div className="relative" id="Slime-Shop">
        <div className="flex flex-col items-center py-32 pb-20 gap-5 container m-auto">
            <Title subTitle="Providing Good Qualities For Your Loving Kids" boxClassName="w-1/2 py-10"/>
            <ul className="w-full flex flex-wrap justify-around gap-6">
                {serviceList?.map((service,indx)=>
                    <Card key={indx} icon={service?.icon} title={service?.title} main={service?.main} classNameBox=" cursor-pointer hover:bg-[var(--purple)]" classNameTitle="group-hover:text-gray-100" classNameMain="group-hover:text-gray-200"/>
                )}
            </ul>
        </div>
    </div>
  )
}
