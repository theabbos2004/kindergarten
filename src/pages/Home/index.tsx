import { AddResult, Education, Footer, Lesson, Main, Result, SendMessage, Service } from "../../components";

export default function Home() {
  return (
    <div className="w-full flex flex-col">
      <Main/>
      <Service/>
      <Result/>
      <Lesson/>
      <Education/>
      <AddResult/>
      <SendMessage/>
      <Footer/>
    </div>
  )
}
