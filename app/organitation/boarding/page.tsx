import { AboutSchool, GalleryParts, ProgramParts, RegistrationFlowParts } from "@/app/ui/organitation/parts";

export default function Page() {
    return (
        <div className="mt-20 max-w-screen">
            <AboutSchool
                madrasah="boarding alif al-ittifaq"
                link="/maintenance"
                label="boarding"
                brosur="/maintenance"
            />

            <ProgramParts
                madrasah="boarding"
            />

            <GalleryParts />

            <RegistrationFlowParts link="/maintenance"/>
        </div>
    )
}