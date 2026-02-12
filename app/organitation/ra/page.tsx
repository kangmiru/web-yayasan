import { AboutSchool, GalleryParts, ProgramParts, RegistrationFlowParts } from "@/app/ui/organitation/parts";

export default function Page(){
    return (
        <div className="mt-20 w-full">
            <AboutSchool
                madrasah="RA alif al-ittifaq"
                link=""
            />
                
            <ProgramParts
                madrasah="RA"
            />

            <GalleryParts />

            <RegistrationFlowParts />
        </div>
    )
}