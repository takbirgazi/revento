import Image from "next/image";

interface SliderDataType {
    slideData: {
        id: number,
        imageUrl: string,
        title: string,
        desc: string
    }
}

const SliderCard: React.FC<SliderDataType> = ({ slideData }) => {
    return (
        <div className="w-96 inline-block px-5">
            <div className="relative">
                <figure>
                    <Image className='w-full h-full' src={slideData.imageUrl} height={950} width={450} alt='Feature' />
                </figure>

                {/* Absolute Data  */}
                <figure className="absolute top-0 left-[15%]">
                    <Image className=" w-[70px]" src="https://framerusercontent.com/images/7QpteOOLYm2f713Kpbd9WTeekik.svg" alt="Icon" height={200} width={200} />
                </figure>
                <figure className="absolute bottom-[25%] -right-[5%]">
                    <Image className=" w-[70px] -rotate-90" src="https://framerusercontent.com/images/qnyRKMJzoEDpfE7atO7qcfmMfKc.svg" alt="Icon" height={200} width={200} />
                </figure>
            </div>
            <div className="py-4">
                <h2 className="text-3xl uppercase pb-2 font-anton">{slideData.title}</h2>
                <p>{slideData.desc}</p>
            </div>
        </div>
    );
};

export default SliderCard;