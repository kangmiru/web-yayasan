import Image from "next/image";

export default function MaintenancePage(){
    return (
        <main className="h-screen w-screen flex items-center justify-center bg-blue-200">
            <div className="flex flex-col items-center justify-center">
                <Image
                    src="/img/unauthorized.png"
                    width={400}
                    height={400}
                    alt="Unauthorized"
                />
                <div className="text-center mt-2 font-mono">
                    <h1 className="font-extrabold text-2xl text-red-600">
                        Page Maintenanace
                    </h1>
                    <p className="font-semibold">
                        Mohon maaf, halaman sedang tahapan perbaikan/pengembangan 
                        <br /> 
                        Silahkan kembali kehalaman 
                        <br />
                        <a href="/">
                            Beranda
                        </a>
                    </p>
                </div>
            </div>
        </main>
    )
}