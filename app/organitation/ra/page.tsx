import { AboutSchool, GalleryParts, ProgramParts, RegistrationFlowParts } from "@/app/ui/organitation/parts";

export default function Page(){
    return (
        <div className="mt-20 w-full">
            <AboutSchool
                madrasah="RA alif al-ittifaq"
                link=""
                label="ra"
                brosur='/maintenance'
            />
                
            <ProgramParts
                madrasah="RA"
            />

            <GalleryParts />

            <RegistrationFlowParts link="/maintenance" />
        </div>
    )
}