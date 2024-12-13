
export default function Button({type,children,className,disabled}:{type?: "submit" | "button" | "reset",children?:string,className?:string,disabled?:boolean}) {
  return (
    <button  type={type} disabled={disabled} className={` min-w-28 py-1 sm:w-32 px-5 flex justify-center items-center rounded-md font-medium  outline outline-3 border-none cursor-pointer focus:outline-none  ${className}`}>{children}</button>
  )
}
