import MainLayout from '../components/layouts/MainLayout'
import { FaBell } from "react-icons/fa6";

export default function Home() {
  return (
    <MainLayout>
        <div className="div">
          <h1>kotak</h1>
          <FaBell/>
        </div>
    </MainLayout>
  )
}
