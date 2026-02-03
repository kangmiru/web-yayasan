import { DraftAboutUs, FounderTeamParts, OurValuesParts, } from "../ui/aboutus/parts";

export default function Page(){
    return(
        <div className="w-screen mt-20 ">
            <DraftAboutUs/>

            <OurValuesParts/>

            <FounderTeamParts />
        </div>
    )
}