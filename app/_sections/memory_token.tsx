export const MemoryToken = () => {
    return <div className="w-full py-[5%] px-[5%] md5:px-[10%] relative overflow-hidden bg-[#E6E8FA] md5:bg-bgGray">
        <div className="w-full md5:grid md:grid-cols-2 md5:grid-cols-3  max-w-container mx-auto">
            <div className="col-span-2 md5:pr-12 flex items-center">
                <div>
                    <div className="text-[48px] font-[600] md5:text-[#3F3B3B] w-full h-fit text-center md5:text-left">Dijital Hatıralık Nedir?</div>
                    <div className="text-[24px] font-[400] md5:text-[#3F3B3B] w-full h-fit mt-8 text-center md5:text-left">
                        Dijital hatıralık hedef kitlenizle aranızdaki bağı güçlendirmeyi sağlayan ve markanıza özel tasarlanmış, güçlü görselleri olan dijital varlıklardır. Bu varlıkları sayısız senaryo çerçevesinde duygusal bağlar geliştirmek ve çeşitli avantajlar sunmak için kurgulayabilirsiniz. Bu sayede gerek sunduğunuz değerlerle gerekse de geliştirdiğiniz duygusal bağlarla müşterilerinizin aklında hiç olmadığı kadar güçlü yer edineceksiniz.
                    </div>
                </div>
            </div>
            <div className="mx-auto w-fit my-[-10%] md5:my-0">
                <img alt="memory_token" src={'memory_token.webp'} className="w-full"/>
            </div>
        </div>
    </div>
};