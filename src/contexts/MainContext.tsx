import { createContext, ReactNode, useContext, useState } from "react";
import { IContextType, INavbarItem } from "../types";
import { navborList as oldNavbarList } from "../constans";

const INITIAL_STATE : IContextType = {
    isMenu:false,
    setIsMenu:()=>{},
    navborList:oldNavbarList,
    activeNavbar:()=>{}
}
const Context = createContext<IContextType>(INITIAL_STATE);

export default function MainContext({ children }: { children: ReactNode }) {
    const [isMenu, setIsMenu] = useState<boolean>(false)
    const [navborList, setNavborList] = useState<INavbarItem[]>(oldNavbarList)
    const activeNavbar=(navbar:INavbarItem)=>{
      const newNavbar=navborList?.map((item)=>{
        if(item?.id==navbar?.id){
          return {...item,active:true}
        }
        else{
          return {...item,active:false}
        }
      })
      setNavborList(newNavbar)
    }
    const value = {
        isMenu,
        setIsMenu,
        navborList,
        activeNavbar
      }
      return (
        <Context.Provider value={value}>
          {children}
        </Context.Provider>
  )
}
export const useMainContext = () => useContext(Context)
