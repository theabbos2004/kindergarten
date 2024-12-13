import { Route, Routes } from "react-router-dom";
import { HomePage } from "./pages";
import RootLayout from "./root/RootLayout";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<RootLayout/>}>
        <Route index element={<HomePage/>}/>
      </Route>
    </Routes>
  )
}
