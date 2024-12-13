import { LessonType } from "../../types";
import Button from "./button";

export default function LessonCard({lesson}:{lesson:LessonType}) {
    return (
      <div className="min-h-32 rounded-xl border-4 border-[var(--orange)] bg-[var(--purple)] flex flex-col items-center justify-center p-2" >
          <div>
            <img className='w-full' src={lesson?.imageUrl}/>
          </div>
          <div className='w-full flex flex-row items-center justify-between py-2'>
            <div className=" font-semibold">{lesson?.title}</div>
            <div className='bg-[var(--orange)] text-[var(--purple)] rounded-full border-2 border-purple-500 p-1 font-medium'>${lesson?.price}</div>
          </div>
          <p>
            {lesson?.main}
          </p>
          <ul className="w-full py-2 flex justify-around items-center">
            <li className="flex flex-col items-center justify-center">
                <div className=" text-[var(--orange)] font-semibold">Age:</div>
                <div className="flex flex-row">{lesson?.age} Years</div>
            </li>
            <div className=" w-[0.1rem] h-3/5 bg-gray-400"></div>
            <li className="flex flex-col items-center justify-center">
                <div className=" text-[var(--orange)] font-semibold">Time:</div>
                <div className="flex flex-row">{lesson?.time}</div>
            </li>
            <div className=" w-[0.1rem] h-3/5 bg-gray-400"></div>
            <li className="flex flex-col items-center justify-center">
                <div className=" text-[var(--orange)] font-semibold">Capacity:</div>
                <div className="flex flex-row">{lesson?.capacity} Kids</div>
            </li>
          </ul>
            <Button className="w-full bg-[var(--orange)] text-[--purple] outline-2 outline-yellow-300 active:outline-none">Read more</Button>
      </div>
    )
  }