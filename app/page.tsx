import Image from "next/image";
import Navbar from "./ui/navbar";

export default function Home() {
  return (
    <div className="flex min-h-screen font-sans dark:bg-black">
      <div className="h-24 w-full">
        <Navbar/>
      </div>
    </div>
  );
}
