import Image from "next/image";
import Link from "next/link";
import img from "/public/card.jpg";

import { FaArrowRightLong } from "react-icons/fa6";

const SingleCard = ({ card }: any) => {
  return (
    <div className="w-[400px] bg-white text-black">
      <Image
        className=""
        // src={card?.image}
        src={img}
        // width={200}
        // height={200}
        alt="image"
      />
      <div className="p-4">
        <div className="flex justify-between pb-2">
          <Link href="/">
            <h1 className="font-semibold text-2xl">{card?.destination}</h1>
          </Link>
          <h1 className="font-semibold text-2xl text-primaryColor">
            ${card?.budget}
          </h1>
        </div>
        <div className="flex justify-between">
          <p className="text-base font-medium">
            Start Date : {card?.startDate}
          </p>
          <p className="text-base font-medium">End Date : {card?.endDate}</p>
        </div>
        <p className="line-clamp-2 mt-3 mb-6 text-accent text-gray-500">
          {card?.description}
        </p>
        <Link href={`/all-trip/${card?.id}`}>
          <button
            className={`text-[#e44d36] border border-[#e44d36] hover:bg-[#e44d36] hover:text-white py-2 px-20 text-lg font-semibold transition-all duration-200 w-full flex items-center justify-center gap-2`}
          >
            Explore Now <FaArrowRightLong className="mt-1" />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default SingleCard;
