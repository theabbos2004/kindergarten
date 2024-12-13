
export default function Card({icon,title,main,classNameBox,classNameTitle,classNameMain}:{icon?:string,title?:string,main?:string,classNameBox?:string,classNameTitle?:string,classNameMain?:string}) {
  return (
    <div className={`w-52 min-h-32 rounded-md border-2 border-[var(--purple)] bg-purple-300 flex flex-col items-center justify-center p-4 group ${classNameBox}`}>
        <img src={icon} className=" size-12"/>
        <div className={`py-2 text-center text-purple-950 font-bold ${classNameTitle}`}>{title}</div>
        <div className={`text-center text-purple-800 text-wrap ${classNameMain}`}>{main}</div>
    </div>
  )
}
