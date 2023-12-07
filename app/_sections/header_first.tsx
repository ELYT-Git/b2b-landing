"use client"
import { scrollToId } from "../_utils/scrollToId";

export const FirstHeader = () => {
    return <div className="w-full flex py-[10%] px-[5%] md:px-[10%] relative overflow-hidden" style={{
        background: 'linear-gradient(75deg, #6B00FF 0%, #C219CB 100%)'
    }}>
        <img alt="first_header" src={'Group 183.webp'} className="absolute right-0 top-0 w-[50%] md:w-[35%] z-0"/>
        <div className="w-full max-w-container mx-auto z-[1]">
            <div className="md:max-w-[800px] z-10">
                <div className="text-white text-[44px] md:text-header1 mt-[50px] font-[300] md:leading-[64px]">
                    Miller birikir gider, dakikalar kullanılır gider ama <span className="font-[600]">ELYT</span> ile hatıralar sonsuza kadar kalır.
                </div>
                <div className="text-white text-subtitle2 font-[500] mt-5 w-full text-center md:text-left">
                    ELYT kurumsal avantajlarını keşfedin
                </div>
                <div className="mx-auto md:mx-0 w-fit">
                    <button onClick={() => {
                            scrollToId('subscribe');
                        }} className="inline-flex items-start gap-[10px] px-[24px] py-[12px] relative bg-[#ffffff] rounded-[25px] overflow-hidden border-[3px] border-solid border-[#9d71cb] all-[unset] box-border mt-5 mx-auto">
                        <div className="relative w-fit [font-family:'Rubik-Medium',Helvetica] font-medium text-[#9d71cb] text-[18px] tracking-[0] leading-[36px] whitespace-nowrap">
                            Kayıt Ol
                        </div>
                    </button>
                </div>
            </div>
        </div>
    </div>
};