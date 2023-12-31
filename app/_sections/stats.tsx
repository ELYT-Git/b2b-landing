const Stat = ({value, label}: {value: string, label: string}) => {
    return <div>
        <div className="text-[24px] md:text-[44px] md5:text-[30px] 2xl:text-[36px] 3xl:text-[44px] text-center font-[600]">
            {value}
        </div>
        <div className="text-center text-[#828282] text-[16px] md:text-[18px]">
            {label}
        </div>
    </div>
}

export const Stats = () => {
    return <div className="w-full py-[5%] px-[5%] md:px-[10%] relative overflow-hidden">
        <div className="grid grid-cols-1 md5:grid-cols-12 gap-x-10 w-full items-center max-w-container mx-auto">
            <div className="flex space-x-5 justify-between items-center col-span-6">
                <Stat value="30B+" label="Kullanıcı"/>
                <Stat value="175B+" label="Dijital Varlık"/>
                <Stat value="1600+" label="Dağıtılan Hediye"/>
            </div>
            <div className="flex space-x-5 justify-between items-center col-span-6">
                <div className="text-[38px] md5:text-[30px] 2xl:text-[32px] 3xl:text-[44px] font-[600] hidden md5:block">
                    Alınan Yatırımlar
                </div>
                <div className="text-[38px] md5:text-[30px] 2xl:text-[32px] 3xl:text-[44px] font-[600] hidden md5:block">
                    1.5M $
                </div>
                <div className="text-[36px] font-[600] hidden md5:block pb-3">
                    <div className="w-[171px] h-[60px]">
                        <img className="w-[171px] rounded-[9px] object-cover" alt="finberg" src="finberg_button.webp" />
                    </div>
                </div>
            </div> 
        </div>

        <div className="grid grid-cols-1 md5:grid-cols-12 mt-10 gap-x-10 justify-between w-full items-center max-w-container mx-auto">
            <div className="flex items-center md5:hidden justify-center space-x-2 md:space-x-10">
                <div className="text-[15px] xs:text-[18px] md:text-[30px] md5:text-[36px] font-[600]">
                    Alınan Yatırımlar
                </div>
                <div className="text-[15px] xs:text-[18px] md:text-[30px] md5:text-[36px] font-[600]">
                    1.5M $
                </div>
                <div className="text-[36px] font-[600]">
                    <div className="w-[100px] md:w-[171px]">
                        <img className="w-full rounded-[5px] md:rounded-[8px] object-cover" alt="finberg" src="finberg_button.webp" />
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-center mt-10 md5:mb-0 md5:col-span-6">
                <div className="text-[24px] md:text-[32px] md5:text-[44px] 2xl:text-[54px] font-[300]">
                    <span className="font-[600]">20+</span> Marka
                </div>
                <img alt="brands" src="Group 162748.webp" className="h-[50px] md5:h-[111px] 2xl:h-[120px] ml-5 md5:ml-auto md5:mr-2"/>
            </div>
            <div className="flex items-center justify-center md5:order-1 mt-10 md5:col-span-6">
                <div className="text-[18px] md:text-[34px] lg:text-[30px] 2xl:text-[35px] font-[500]">
                    Desteklenen Blockchain Ağı
                </div>
                <img alt="avax" src="avax.webp" className="h-[34px] md5:h-[111px] ml-5 md5:ml-auto"/>
            </div>
        </div>
    </div>
};