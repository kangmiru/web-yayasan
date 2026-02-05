import { DraftAboutUs, FounderTeamParts, GraduationsParts, OurValuesParts, } from "../ui/aboutus/parts";

export default function Page(){
    return(
        <div className="max-w-screen mt-20 ">
            <DraftAboutUs/>

            <OurValuesParts/>

            <FounderTeamParts />

            <GraduationsParts/>
        </div>
    )
}