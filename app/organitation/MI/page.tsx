import { AboutSchool, GalleryParts, ProgramParts, RegistrationFlowParts } from "@/app/ui/organitation/parts";

export default function Page(){
    return (
        <div className="mt-20 max-w-screen">
            <AboutSchool
                madrasah="MI alif al-ittifaq"
                link=""
                label="mi"
            />
                
            <ProgramParts
                madrasah="MI"
            />

            <GalleryParts />

            <RegistrationFlowParts link=""/>
        </div>
    )
}