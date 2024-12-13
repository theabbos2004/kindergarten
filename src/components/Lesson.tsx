import { lessonList } from "../constans";
import { LessonCard, Title } from "./shared";
import BookImgUrl from "../assets/image 10.png"
export default function Lesson() {
  return (
    <div className="relative bg-red-300" id="Gift-Card">
        <div className="flex flex-col items-center py-32 pb-20 container m-auto">
            <Title subTitle="Take The Classes & Start Learning From Today" title="On Going Classes" 
              icon={<img className="w-16" src={BookImgUrl} alt="image"/>} boxClassName="w-1/3 py-10" subTitleClassName="text-gray-800"/>
            <ul className="w-full grid grid-cols-2 sm:grid-cols-3  lg:grid-cols-4 2xl:grid-cols-6 gap-6">
                {lessonList?.map((lesson,indx)=>
                    <LessonCard key={indx} lesson={lesson}/>
                )}
               
            </ul>
        </div>
    </div>
  )
}
