"use client"
import Link from "next/link";
import { useState } from "react";
import { scrollToId } from "../_utils/scrollToId";

const ElytLogo = () => {
    return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 179 31" fill="none">
        <path d="M7.19222 25.2768V18.15H21.7091V12.6066H7.19222V12.5679H0V31.0141H24.208V25.2768H7.19222ZM7.19222 5.92072H24.208V0.201004H0V5.92072H7.19222ZM51.6343 0H58.9161V25.1498H74.6967V31.0141H51.6343V0ZM161.648 5.84314H151.577V0H179V5.84314H168.929V31.0141H161.648V5.84314ZM122.93 0L117.814 8.37857L121.315 14.3451L130.072 0H122.93ZM106.104 0H98.3713L110.543 19.9238V31.0141H117.832V20.0155L106.376 0.479587L106.104 0Z" fill="url(#paint0_linear_574_2341)"/>
        <defs>
        <linearGradient id="paint0_linear_574_2341" x1="0" y1="15.4982" x2="179" y2="15.4982" gradientUnits="userSpaceOnUse">
            <stop stopColor="#D158C7"/>
            <stop offset="0.23" stopColor="#AA6BD1"/>
            <stop offset="0.36" stopColor="#A469CD"/>
            <stop offset="0.53" stopColor="#9563C0"/>
            <stop offset="0.72" stopColor="#7B59AC"/>
            <stop offset="0.93" stopColor="#564B8F"/>
            <stop offset="1" stopColor="#484684"/>
        </linearGradient>
        </defs>
    </svg>
}

const HamburgerLogo = () => {
    return <svg width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="21.6" y="17.3999" width="20.7" height="2.3" rx="1.15" transform="rotate(-180 21.6 17.3999)" fill="black"/>
    <rect x="21.1" y="16.8999" width="19.7" height="1.3" rx="0.65" transform="rotate(-180 21.1 16.8999)" stroke="#A76ACF" strokeOpacity="0.25"/>
    <rect x="21.6" y="2.44971" width="20.7" height="2.3" rx="1.15" transform="rotate(-180 21.6 2.44971)" fill="black"/>
    <rect x="21.1" y="1.94971" width="19.7" height="1.3" rx="0.65" transform="rotate(-180 21.1 1.94971)" stroke="#A76ACF" strokeOpacity="0.25"/>
    <rect x="21.6" y="9.34961" width="16.1" height="2.3" rx="1.15" transform="rotate(-180 21.6 9.34961)" fill="black"/>
    <rect x="21.1" y="8.84961" width="15.1" height="1.3" rx="0.65" transform="rotate(-180 21.1 8.84961)" stroke="#A76ACF" strokeOpacity="0.25"/>
    </svg>    
}

const Links = {
    kesfet: () => <Link href="https://elyt.net" target="_blank">
        <p className="text-[16px] text-black font-[500]">Elyt&apos;i Keşfet</p>
    </Link>,
    corporate: () => <Link href="/">
        <p className="text-[16px] text-black font-[500]">Kurumsal Çözümler</p>
    </Link>,
    connect: () => <div onClick={() => {
        scrollToId('subscribe');
    }} className="text-[16px] text-black font-[500]">
        <button className="h-[45px] px-5 bg-[#A76ACF] rounded-full text-[18px] font-[600] text-white">Kayıt Ol</button>
    </div>
}

const SideBar = ({open, setOpen}: {open: boolean, setOpen: any}) => {
    return <div className={`fixed ${open ? 'top-0': 'top-[-100vh]'} transition-all duration-300 left-0 w-[100vw] h-[100vh] bg-white z-20`}>
        <div className="mt-[100px] text-center space-y-10 grid grid-cols-1"> 
            {[Links.kesfet(), Links.connect()].map((link, i) => 
                <div key={i}
                    onClick={() => {
                        setOpen(false);
                    }}
                >{link}</div>
            )}
        </div>
    </div>
}

export const Navbar = () => {
    const [open, setOpen] = useState(false);
    return <>
        <SideBar open={open} setOpen={setOpen}/>
        <div>
            <div className="w-[200px] h-[66px] lg:h-[93px]">
                
            </div>
        </div>
        <div className="w-full bg-white py-6 px-5 md:px-[5%] lg:px-[10%] z-30 fixed top-0">
            <div className="flex justify-between max-w-container mx-auto items-center relative z">
                <div className="space-x-4 items-center hidden lg:flex">
                    {Links.kesfet()}
                </div>
                <div className="absolute left-[50%] translate-x-[-50%] w-[200px]">
                    <Link href="https://elyt.net" target="_blank">
                        <ElytLogo />
                    </Link>
                </div>
                <div className="space-x-4 items-center hidden lg:flex">
                    {/* Links.corporate() */}
                    {Links.connect()}
                </div>
                <div className="lg:hidden ml-auto">
                    <div
                        onClick={() => setOpen(!open)}
                    >
                        <HamburgerLogo />
                    </div>
                </div>
            </div>
        </div>
    </>
};