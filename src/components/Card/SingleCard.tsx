import Image from "next/image";
import Link from "next/link";

import { FaArrowRightLong } from "react-icons/fa6";

const SingleCard = ({ card }: any) => {
  return (
    <div className="w-[400px] group bg-white/95 text-black hover:bg-transparent border border-black/55 hover:border-red-400 h-[480px] relative duration-300 ease-in-out transform transition-all">
      <div className="h-[230px] overflow-hidden">
        <Image
          className="w-full h-full object-cover transition-transform duration-300 ease-in-out transform group-hover:scale-110"
          src={card?.image}
          width={200}
          height={200}
          alt="image"
        />
      </div>
      <div className="p-4">
        <div className="flex justify-between pb-2">
          <Link href="/">
            <h1 className="font-semibold text-2xl group-hover:text-white duration-300 transition-all">
              {card?.destination}
            </h1>
          </Link>
          <h1 className="font-semibold text-2xl text-primaryColor group-hover:text-white duration-300 transition-all">
            ${card?.budget}
          </h1>
        </div>
        <div className="flex justify-between group-hover:text-white duration-300 transition-all">
          <p className="text-base font-medium">
            Start Date : {card?.startDate}
          </p>
          <p className="text-base font-medium">End Date : {card?.endDate}</p>
        </div>
        <p className="line-clamp-2 mt-3 mb-6 text-accent text-gray-500 group-hover:text-gray-300 duration-300 transition-all">
          {card?.description}
        </p>
        <div className="absolute bottom-5 w-[92%]">
          <Link href={`/all-trip/${card?.id}`}>
            <button
              className={`text-[#e44d36] hover:tracking-[2.5px] border border-[#e44d36] group-hover:border-black group-hover:bg-white/95 py-2 px-20 text-lg font-semibold transition-all duration-300 w-full flex items-center justify-center gap-2`}
            >
              Explore Now <FaArrowRightLong className="mt-1" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleCard;
