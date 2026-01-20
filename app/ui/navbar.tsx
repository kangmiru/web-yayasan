import { NavButton } from "./button";

const menunav = ['menu', 'tentang kami', 'organisasi', 'media sosial']

export default function(){
    return (
        <nav className="bg-linear-to-b from-blue-900 via-blue-900">
            <div className="mx-auto max-w-7xl px-2 lg:px-8">
                <div className="relative flex h-20 items-center justify-between">
                    
                    <div className="flex shrink-0 items-center">
                        <img 
                            src="img/logo1.png" 
                            alt=""
                            className="h-16 w-auto m-3" 
                        />
                    </div>
                    <div className="flex items-center justify-center gap-3 mx-4">
                        {menunav.map((menu,index) => {
                            return(
                                <div key={index}>
                                    <NavButton title={menu} slug="" link=""/>
                                </div>
                            )
                        })}
                    </div>
                    
                </div>
            </div>
        </nav>
    )
}