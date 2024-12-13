import { useState } from "react"
import bgImage from "../assets/Rectangle 22.png"
import bgImage1 from "../assets/Group 58.png"
import bgImage2 from "../assets/Group 58 (1).png"
import bgImage3 from "../assets/Group 60.png"
import bgImage4 from "../assets/Group 60 (1).png"
export default function AddResult() {
    const [result]=useState([
        {id:0,title:"Students Admission",count:"3564",imageUrl:bgImage1},
        {id:0,title:"Total No.of Class",count:"156",imageUrl:bgImage2},
        {id:0,title:"No.of Teachers",count:"45",imageUrl:bgImage3},
        {id:0,title:"Years Experience",count:"8",imageUrl:bgImage4},
    ])
  return (
    <div className="w-full relative" id="About">
        <div className={`w-full py-24 bg-[length:100%_100%] bg-no-repeat  after:z-[-1] after:bg-red-100 after:w-full after:h-10 after:top-0 after:left-0 after:absolute`}  style={{backgroundImage:`url(${bgImage})`}} >
            <div className=" container m-auto grid grid-cols-2 gap-y-16 ">
                {
                    result?.map((item,resultIndx)=>
                    <div key={resultIndx} className="flex flex-col items-center justify-center">
                        <img src={item?.imageUrl} className="w-32 bg-cover bg-center"/>
                        <div className="flex flex-col justify-center items-center">
                            <div className=" text-lg font-semibold">{item?.count}+</div>
                            <div>{item?.title}</div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    </div>
  )
}
