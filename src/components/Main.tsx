import BearImg from "../assets/image 8.png"
import Image5 from "../assets/image 5.png"
import Image6 from "../assets/image 6.png"
import Image3 from "../assets/image 3.png"
import Image7 from "../assets/image 7.png"
import { Button } from "./shared"
export default function Main() {
  return (
    <div id="Home" className='w-full py-36 h-min-[100vh] bg-main bg-cover bg-bottom'>
        <div className=" container m-auto flex justify-around gap-10 sm:gap-0 items-center flex-col sm:flex-row">
            <div className=" w-10/12 sm:w-2/5 flex flex-col gap-4 justify-around">
                <div className="flex items-center gap-4">
                    <img className=" w-16 h-16" src={BearImg}/>
                    <h1 className=" text-[var(--purple)] font-semibold">Jajji Bilimdon 
                    Bog`chasi</h1>
                </div>
                <p className="text-purple-800">Formulate innovative web-readiness and installed base ideas. Distinctively integrate high-payoff paradigms without next generation systems disseminate holistic e-services through customer directed expertise.</p>
                <Button className="bg-[var(--purple)] w-32 outline-purple-600">Join now</Button>
            </div>
            <div className="w-10/12 sm:w-2/5 flex flex-col">
                <div className="flex w-full gap-4">
                    <img className="w-2/4" src={Image5} alt="Description of the image"/>
                    <img className="w-2/4" src={Image6} alt="Description of the image"/>
                </div>
                <div className="flex w-full gap-4 mt-2">
                    <div className="w-2/5 flex justify-end items-center">
                        <img className="w-28" src={Image7} alt="Description of the image"/>
                    </div>
                    <img className="w-2/4" src={Image3} alt="Description of the image"/>
                </div>
            </div>
        </div>
    </div>  
  )
}
