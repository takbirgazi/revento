import Image from "next/image";

interface ReviewDataType {
    reviewData: {
        id: number,
        title: string,
        desc: string,
        authName: string,
        authDeg: string,
        authImageUrl: string,
    }
}

const ReviewCard: React.FC<ReviewDataType> = ({ reviewData }) => {
    return (
        <div className="relative rounded-4xl bg-[#eef5fb] p-10">
            <h2 className="text-2xl uppercase text-[#051a2f] lg:text-3xl pb-5 font-anton">{reviewData.title}</h2>
            <p className="text-sm text-gray-700">{reviewData.desc}</p>
            <div className="flex flex-col md:flex-row justify-between gap-4 items-center pt-14 pr-5">
                <div className="flex gap-4 items-center">
                    <figure className="rounded-full overflow-hidden border-4 border-white outline-1 outline-gray-200">
                        <Image className="h-[50px] w-[50px]" height={50} width={50} src={reviewData.authImageUrl} alt={reviewData.authName} />
                    </figure>
                    <div>
                        <h4 className="font-semibold text-[#051a2f]">{reviewData.authName}</h4>
                        <p className="text-sm">{reviewData.authDeg}</p>
                    </div>
                </div>
                <figure>
                    <Image height={50} width={50} src="https://framerusercontent.com/images/RnzDJoOsPRCGRSkZevLI4YxzA.png" alt="Quatation" />
                </figure>
            </div>
            {/* Absolute data */}
            <figure className="absolute top-[45%] right-0">
                <Image className="w-10" height={80} width={80} src="https://framerusercontent.com/images/ijtbRqj8NknuofqKt9EuG8gOSc.png" alt="Quatation" />
            </figure>
            <figure className="absolute right-[45%] bottom-0">
                <Image className="h-10" height={80} width={80} src="https://framerusercontent.com/images/hu1eUWnLUAIjJFEcHS6XHGyNUQ.svg" alt="Quatation" />
            </figure>

        </div>
    );
};

export default ReviewCard;