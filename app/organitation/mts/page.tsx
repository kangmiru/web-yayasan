import { AboutSchool, GalleryParts, ProgramParts, RegistrationFlowParts } from "@/app/ui/organitation/parts";

export default function Page(){
    return (
        <div className="mt-20 max-w-screen">
            <AboutSchool
                madrasah="MTs alif al-ittifaq"
                link=""
            />
                
            <ProgramParts
                madrasah="MTs"
            />

            <GalleryParts />

            <RegistrationFlowParts />
        </div>
    )
}