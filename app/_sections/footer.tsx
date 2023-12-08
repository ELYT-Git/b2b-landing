import Link from "next/link";

export const Footer = () => {
    return <div className="w-full relative bg-[#2D224D] py-12 md:py-6 px-[5%] mt-[20%] md:px-[10%] z-10">
        <div className="w-full max-w-container mx-auto text-center md:text-left md:flex justify-between">
            <div className="text-[#545B98]">
                © 2023 Elyt Networks, Inc
            </div>
            <div className="text-[#545B98] mt-5 md:mt-0 flex space-x-3 w-fit mx-auto md:mx-0">
                <Link href={"https://static.elyt.net/legal/ELYT.Privacy_Policy.pdf"} target="_blank">Privacy Policy</Link>   <p>|</p>   
                <Link href={"https://static.elyt.net/legal/ELYT.Terms_of_Use.pdf"} target="_blank">Terms of Service</Link> 
            </div>
        </div>
    </div>
};