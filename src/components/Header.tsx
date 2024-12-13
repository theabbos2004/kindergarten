import { CloseOutlined, MenuOutlined } from "@ant-design/icons"
import CleverIcon from "../assets/photo_2024-04-26_18-23-06-removebg-preview 1.png"
import { Button } from "./shared"
import { Link } from "react-scroll"
import { useMainContext } from "../contexts/index"
export default function Header() {
    const {setIsMenu,isMenu,navborList,activeNavbar}=useMainContext()
  return (
    <div className={`w-full flex flex-col fixed z-10 top-0 left-0 gap-0 ${isMenu &&"bg-gray-50"}`}>
        <div className={`w-full sm:h-20 flex bg-[var(--purple)] py-1 ${isMenu?"h-[calc(100vh)] flex-col":"h-16 flex-row"}`}>
            <div className={`${isMenu?"h-[5%]":"h-full"} sm:h-full container mx-auto  flex items-center justify-between border-none`}>
                <img src={CleverIcon} className=" w-12 sm:w-18"/>
                <ul className="sm:flex gap-4 hidden">
                    {navborList.map((nav,navIndex)=>
                        <li key={navIndex}>{nav?.title}</li>
                    )}
                </ul>
                <div className="flex gap-4">
                    <Button className="bg-[var(--orange)] text-[var(--purple)] outline-yellow-500 " >Join Now</Button>
                    <MenuOutlined className={`text-2xl ${isMenu?"hidden":"block sm:hidden"}`} onClick={()=>setIsMenu((store:any)=>!store)}/>
                    <CloseOutlined className={`text-2xl ${isMenu?"block sm:hidden":"hidden"}`} onClick={()=>setIsMenu((store:any)=>!store)}/>
                </div>
            </div>
            <ul className={`h-[95%] flex flex-col items-center justify-center gap-10 sm:gap-4 text-3xl font-semibold ${isMenu?"block sm:hidden":"hidden"}`}>
                    {navborList.map((nav,navIndex)=>
                        <li key={navIndex} className=" hover:text-[var(--orange)] cursor-pointer">
                            <Link
                                to={nav?.route} 
                                key={navIndex}
                                spy={true} 
                                smooth={true} 
                                offset={50} 
                                duration={500} 
                                className={`font-bold no-underline ${nav?.active ?'text-gray-50':"text-gray-400"} hover:text-gray-100 cursor-pointer`}
                                onClick={()=>{
                                    activeNavbar(nav)
                                    setIsMenu(false)
                                }}
                                >
                                {nav?.title}
                            </Link>
                        </li>
                    )}
                </ul>
        </div>
        <div className={`h-20 w-full border-none bg-header bg-top bg-contain bg-repeat-x ${isMenu?"hidden":"block"}`}></div>
    </div>
  )
}
