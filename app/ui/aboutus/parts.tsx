const timelineData = [
    {
        year:'1990',
        title:'pendirian yayasan',
        description:'organisasi didirikan dengan tujuan tertentu',
        icon:'',
        color:'',
    },
    {
        year:'1990',
        title:'pendirian yayasan',
        description:'organisasi didirikan dengan tujuan tertentu',
        icon:'',
        color:'',
    },
    {
        year:'1990',
        title:'pendirian yayasan',
        description:'organisasi didirikan dengan tujuan tertentu',
        icon:'',
        color:'',
    },
    {
        year:'1990',
        title:'pendirian yayasan',
        description:'organisasi didirikan dengan tujuan tertentu',
        icon:'',
        color:'',
    },
]

export function DraftAboutUs(){
    return(
        <div className="w-full">
            <h2 className="capitalize text-2xl font-bold text-blue-900 mb-5 pt-10 mx-14">
                siapa kami
            </h2>
            <div className="flex flex-cols-2 ">
                <div className="mx-10 rounded-md indent-4 text-justify justify-center">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus distinctio asperiores a suscipit sapiente temporibus sed doloremque, in modi accusantium illo veniam, quod assumenda quidem perferendis illum provident, porro sint non maiores aliquid nemo delectus optio veritatis. Repudiandae vel, iure nam accusamus quasi vitae ratione eum exercitationem minus nesciunt placeat!
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus distinctio asperiores a suscipit sapiente temporibus sed doloremque, in modi accusantium illo veniam, quod assumenda quidem perferendis illum provident, porro sint non maiores aliquid nemo delectus optio veritatis. Repudiandae vel, iure nam accusamus quasi vitae ratione eum exercitationem minus nesciunt placeat!
                    </p>
                    <VisiMisiParts /> 
                </div>
                <div className="mx-5 w-full flex items-center justify-center mb-5">
                    <TimelineParts/>
                </div>
            </div>
        </div>
    )
}

export function TimelineParts(){
    return (
        <div className="relative border-l-2 border-blue-900">
            {timelineData.map((timeline,index) => {
                return(
                    <div key={index} className="mb-12 -top-5 relative">
                        {/* dot */}
                        <span className="absolute left-0 top-1 -translate-x-1/2 w-6 h-6 bg-blue-900 rounded-full border-4 border-blue-500"/>

                        {/* content */}
                        <div className="ms-5">
                            <h3 className="text-xl font-bold text-gray-900">
                                {timeline.year}
                            </h3>
                            <p className="mt-2 leading-relaxed">
                                {timeline.description}
                            </p>
                        </div>

                    </div>
                )
            })}
        </div>
    )
}

export function VisiMisiParts(){
    return(
        <div className="grid grid-cols-2 justify-center items-center text-center my-5">
            <div>Ini visi</div>
            <div>Ini misi</div>
        </div>
    )
}