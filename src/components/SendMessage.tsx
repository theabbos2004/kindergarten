import BgImage from "../assets/Rectangle 19.png"
import CleaverImg from "../assets/photo_2024-04-26_18-23-06-removebg-preview 1.png"
import StarImg from "../assets/Frame (1).png"
import { EmailForm, Title } from "./shared"
export default function SendMessage() {
  return (
    <div className=" w-full p-10">
        <div className=" relative py-20 w-full bg-[length:100%_100%]" style={{backgroundImage:`url(${BgImage})`}}>
            <div className="flex items-end gap-5 absolute top-10 left-10 z-0">
                <img src={CleaverImg} className="w-12 md:w-20 "/>
                <img src={StarImg} className="size-6 md:size-10 "/>
            </div>
            <div className="container m-auto flex relative justify-center">
                <Title title="GET IN TOUCH" subTitle="Needs Help? Let’s Get in Touch" boxClassName="z-[1]" titleClassName="text-[var(--orange)]" subTitleClassName="text-[var(--purple)]"/>
            </div>
            <div className=" w-10/12 m-auto">
                <EmailForm/>
            </div>
        </div>
    </div>
  )
}
