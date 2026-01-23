  import Navbar from "./ui/navbar";
import { AboutUsParts, HeroParts, OrganitationParts, SocialMediaParts } from "./ui/parts";

export default function Home() {
  return (
    <div className="font-sans dark:bg-black bg-gray-100 mb-5">
      {/* Navbar */}
      <Navbar/>

      {/* Hero Parts */}
      <HeroParts/>

      {/* body */}
      {/* about us */}
      <AboutUsParts/>

      {/* organisasi */}
      <OrganitationParts/>

      {/* sosmed */}
      <SocialMediaParts/>
    </div>
  );
}
