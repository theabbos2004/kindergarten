import { Outlet } from "react-router-dom";
import { Header } from "../components";

export default function RootLayout() {
  return (
    <div className="w-full">
      <Header/>
      <Outlet/>
    </div>
  )
}
