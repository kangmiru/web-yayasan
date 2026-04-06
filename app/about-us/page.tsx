import { DraftAboutUs, FounderTeamParts, GraduationsParts, OurValuesParts, } from "../ui/aboutus/parts";

export default function Page(){
    return(
        <div className="w-full mt-20 ">
            <DraftAboutUs/>

            <OurValuesParts/>

            <FounderTeamParts />

            <GraduationsParts/>
        </div>
    )
}