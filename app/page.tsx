import { AboutUsParts, FooterParts, HeroParts, OrganitationParts, SocialMediaParts } from "./ui/parts";

export default function Home() {
  return (
    <div className="font-sans dark:bg-black bg-sky-100 pb-5 w-screen">
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
