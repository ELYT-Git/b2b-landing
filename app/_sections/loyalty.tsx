const Subject = ({title, description}: {title: string, description: string}) => {
    return <>
        <div className="text-[32px] font-[600] text-center md5:text-left">
            {title}
        </div>
        <div className="text-[24px] font-[400] mt-[49px] text-center md5:text-left">
            {description}
        </div>
    </>
}

const LoyaltyTitle = ({title, description}: {title: string, description: string}) => {
    return <div className={`bg-[#C9DEFF] md5:bg-[#E6E8FA] w-[380px] max-w-[95vw] ${description ? 'md:h-[160px]': 'md:h-[130px]'} py-[24px] px-[47px] rounded-[25px] mb-[18px]`}>
        <div className="text-[24px] font-[600]">
            {title}
        </div>
        <div className="text-[18px] font-[300] mt-2">
            {description}
        </div>
    </div>
}

export const Loyalty = () => {
    return <div className="w-full md5:flex md5:space-x-[30px] py-[80px] space-y-12 md5:space-y-0">
        <div className="w-full">
            <div className="mx-auto md5:ml-auto md5:mr-0 w-fit">
                <LoyaltyTitle
                    title="Sadakat Sistemim Var"
                    description="Mevcut sadakat programınızı ELYT’e kolayca bağlayabilirsiniz."
                />
            </div>
            <div className="bg-[#E6E8FA] md5:bg-[#ECF1F9] py-[70px] px-[45px] md5:pr-[90px] md5:pl-[20%] rounded-t-[36px] md5:rounded-l-none md5:rounded-r-[36px]">
                <div className="md5:max-w-halfContainer md5:ml-auto md5:h-[300px]">
                    <Subject 
                        title={`Bir Sadakat Sisteminiz Zaten Varsa;`}
                        description={'Mevcut bir sadakat sisteminiz varsa bu sistemi hiç değiştirmeden, ELYT’in sunduğu çözümler ile daha modern ve yenilikçi uygulmalara adım atabilirsiniz.'}
                    />
                </div>
            </div>
            <div className="mx-auto md5:ml-auto md5:mr-0 w-fit mt-5">
                <LoyaltyTitle
                    title="Müşteri Dönüşlerinde Yüzde 50'ye Varan Artış"
                    description=""
                />
            </div>
        </div>
        <hr className="md5:hidden shadow-lg border-[2px]"/>
        <div className="w-full">
            <div className="mx-auto md5:mr-auto md5:ml-0 w-fit md5:mt-0">
                <LoyaltyTitle
                    title="Sadakat Sistemim Yok"
                    description="ELYT sizin için en uygun senaryoları kurgulamaya hazır."
                />
            </div>
            <div className="bg-[#E6E8FA] md5:bg-[#ECF1F9] py-[70px] px-[45px] md5:pl-[90px] md5:pr-[20%] rounded-t-[36px] md5:rounded-r-none md5:rounded-l-[36px]">
                <div className="md5:max-w-halfContainer md5:h-[300px]">
                    <Subject 
                        title={`Bir Sadakat Sisteminiz Yoksa;`}
                        description={'Uçtan uca modern bir sadakat programını sizin için tasarlıyoruz. Güçlü görseller, oyunlaştırma öğeleri ve fark yaratacak değer önerileri ile hedef kitlenizle ilişkinizi çağın ötesine taşımanızı sağlıyoruz.'}
                    />
                </div>
            </div>
            <div className="mx-auto md5:mr-auto md5:ml-0 w-fit mt-5">
                <LoyaltyTitle
                    title="Cironuzda Yıllık Yüzde 20'ye Varan Artış"
                    description=""
                />
            </div>
        </div>
    </div>
};