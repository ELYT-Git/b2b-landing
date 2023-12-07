export const ContactUs = () => {
    return <div className="w-full pt-[100px] pb-[150px] lg:pb-[100px] px-[5%] md:px-[10%] mt-[10%] relative overflow-hidden bg-[#E6E8FA]">
        <div className="w-full grid grid-cols-1 lg:grid-cols-5">
            <div className="lg:col-span-3 lg:pr-[15%]">
                <div>
                    <div className="text-[33px] font-[600] text-black w-full h-fit text-center md5:text-left">Size özel çözümlerimiz için bize ulaşın.</div>
                    <div className="text-[18px] font-[400] text-[#828282] w-full h-fit mt-8 text-center md5:text-left">
                    Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua adminim veniam eiusmod tempor incididunt ut labore et Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua adminim veniam eiusmod tempor incididunt ut labore etSed do eiusmod tempor incididunt ut labore et dolore magna aliqua adminim veniam eiusmod tempor incididunt ut labore etSed d
                    </div>
                </div>
            </div>
            <div className="lg:col-span-2">
                <input className="w-full h-[50px] border-[1px] border-[#564B8F] rounded-[10px] px-5 mt-10 lg:mt-0" placeholder="Adınız Soyadınız"/>
                <input className="w-full h-[50px] border-[1px] border-[#564B8F] rounded-[10px] px-5 mt-10" placeholder="E-mail adresiniz"/>
                <textarea className="w-full h-[150px] border-[1px] border-[#564B8F] rounded-[10px] pt-[13px] px-5 mt-10" placeholder="Mesajınız"/>
                <button className="w-full h-[55px] px-10 bg-[#A76ACF] text-[20px] font-[600] rounded-[10px] text-white mt-10">Gönder</button>
            </div>
        </div>
    </div>
};