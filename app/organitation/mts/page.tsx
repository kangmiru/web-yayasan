import { AboutSchool, GalleryParts, ProgramParts, RegistrationFlowParts } from "@/app/ui/organitation/parts";

export default function Page(){
    return (
        <div className="mt-20 max-w-screen">
            <AboutSchool
                madrasah="MTs alif al-ittifaq"
                link=""
                label="mts"
            />
                
            <ProgramParts
                madrasah="MTs"
            />

            <GalleryParts />

            <RegistrationFlowParts link="https://forms.gle/cEzaNi6CP1Ds8L8H9"/>
        </div>
    )
}