import Image from "next/image";
import teacher from "@/assets/teacher.png"
import pic from "@/assets/pic.jpg"
import pic2 from "@/assets/pic1.jpg"
import pic3 from "@/assets/pic3.jpg"
import TeachGameLandingPage from "./components/Home";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-purple-900 text-white font-sans">
      <TeachGameLandingPage />
    </div>
  );
}
