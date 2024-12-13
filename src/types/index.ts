import { Dispatch, SetStateAction } from "react"
export type INavbarItem={id:number,title:string,route:string,active:boolean}
export type IContextType = {
    isMenu:boolean,
    setIsMenu:Dispatch<SetStateAction<boolean>>,
    navborList:{id:number,title:string,route:string,active:boolean}[]
    activeNavbar:(navbar:INavbarItem)=>void,
}
export type LessonType = {
    id:number,
    title:string,
    main:string,
    imageUrl:string,
    price:string,
    age:string,
    time:string,
    capacity:string
}

export type FormType ={
    name:string,
    email:string,
    subject:string,
    message:string
  }

