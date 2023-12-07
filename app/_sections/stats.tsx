const Stat = ({value, label}: {value: string, label: string}) => {
    return <div>
        <div className="text-[24px] md:text-[44px] text-center font-[600]">
            {value}
        </div>
        <div className="text-center text-[#828282] text-[16px] md:text-[18px]">
            {label}
        </div>
    </div>
}

export const Stats = () => {
    return <div className="w-full py-[5%] px-[5%] md:px-[10%] relative overflow-hidden">
        <div className="flex space-x-5 justify-between w-full items-center max-w-container mx-auto">
            <Stat value="+25 K" label="Aktif Kullanıcı"/>
            <Stat value="+500 K" label="Toplam Satılan NFT"/>
            <Stat value="+1.5 K" label="Dağıtılan Hediye"/>
            <div className="text-[36px] font-[600] hidden md5:block">
                Alınan Yatırımlar
            </div>
            <div className="text-[36px] font-[600] hidden md5:block">
                1.5M $
            </div>
            <div className="text-[36px] font-[600] hidden md5:block">
                <div className="w-[171px] h-[60px]">
                    <img className="w-[171px] h-[60px] rounded-[13px] object-cover" alt="finberg" src="finberg_button.webp" />
                </div>
            </div>
        </div>

        <div className="grid grid-cols-1 md5:grid-cols-2 mt-10 justify-between w-full items-center max-w-container mx-auto">
            <div className="flex items-center md5:hidden justify-center space-x-2 md:space-x-10">
                <div className="text-[15px] xs:text-[18px] md:text-[36px] font-[600]">
                    Alınan Yatırımlar
                </div>
                <div className="text-[15px] xs:text-[18px] md:text-[36px] font-[600]">
                    1.5M $
                </div>
                <div className="text-[36px] font-[600]">
                    <div className="w-[100px] md:w-[171px]">
                        <img className="w-full rounded-[5px] md:rounded-[13px] object-cover" alt="finberg" src="finberg_button.webp" />
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-center mt-10 md5:mb-0">
                <div className="text-[24px] md:text-[32px] md5:text-[44px] font-[300]">
                    <span className="font-[600]">10+</span> Marka
                </div>
                <img alt="brands" src="Group 162748.webp" className="h-[50px] md5:h-[111px] ml-5 md5:ml-auto md5:mr-10"/>
            </div>
            <div className="flex items-center justify-center md5:order-1 mt-10">
                <div className="text-[18px] md:text-[34px] lg:text-[30px] 2xl:text-[36px] font-[500]">
                    Desteklenen Blockchain Ağı
                </div>
                <img alt="avax" src="avax.webp" className="h-[34px] md5:h-[111px] ml-5 md5:ml-auto"/>
            </div>
        </div>
    </div>
};