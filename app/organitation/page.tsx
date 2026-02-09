import { SchoolList } from "../ui/cards";
import { TitleTypeA, TitleTypeB, TitleTypeC, TitleTypeD } from "../ui/title";

export default function Page(){
    return (
        <div className="mt-20">
            <div className="text-center mb-5">
                <TitleTypeD title="Madrasah Kami"/>
            </div>

            <SchoolList/>
        </div>
    )
}