import Image from "next/image";
import Navbar from "./ui/navbar";
import { HeroParts } from "./ui/parts";

export default function Home() {
  return (
    <div className="font-sans dark:bg-black">
      <div className="">
        {/* Navbar */}
        <div className="h-24 w-full fixed">
          <Navbar/>
        </div>

        {/* Hero Parts */}
        <div className="">
          <HeroParts/>
        </div>

      </div>
      
    </div>
  );
}
