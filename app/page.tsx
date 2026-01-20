import Navbar from "./ui/navbar";
import { AboutUsParts, HeroParts } from "./ui/parts";

export default function Home() {
  return (
    <div className="font-sans dark:bg-black bg-gray-300">
      {/* Navbar */}
      <Navbar/>

      {/* Hero Parts */}
      <HeroParts/>

      {/* body */}
      <AboutUsParts/>
      
    </div>
  );
}
